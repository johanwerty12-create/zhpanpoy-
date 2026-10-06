// Dependency-free content, route-rendering, asset, and timer regression checks.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const project = path.resolve(__dirname, '..');
const clock = { now: 0, next: 0, intervals: new Map() };
class ClockDate extends Date { static now() { return clock.now; } }
let roots = [];
const documentHandlers = {};
const document = {
  hidden: false,
  addEventListener(name, callback) { documentHandlers[name] = callback; },
  querySelectorAll(selector) { return selector === '[data-coach-session]' ? roots : []; },
  querySelector() { return null; }
};
const context = vm.createContext({
  console, Date: ClockDate, URLSearchParams, document,
  localStorage: { getItem() { return null; }, setItem() {} },
  window: { location: { pathname: '/', hash: '', search: '' }, addEventListener() {},
    setInterval(callback) { const id = ++clock.next; clock.intervals.set(id, callback); return id; },
    clearInterval(id) { clock.intervals.delete(id); }
  }
});
for (const name of ['app.js', 'product-pass.js', 'relaxation-coach.js', 'hand-massage.js']) {
  const source = fs.readFileSync(path.join(project, name), 'utf8');
  new vm.Script(source, { filename: name }).runInContext(context);
}
function evaluate(expression) { return vm.runInContext(expression, context); }
function checkAssets(markup) {
  for (const match of markup.matchAll(/src=["'](\/assets\/[^"']+)["']/g)) {
    assert.ok(fs.existsSync(path.join(project, match[1])), 'Missing asset: ' + match[1]);
  }
}
const lessonCount = evaluate('lessons.length');
assert.equal(lessonCount, 13);
assert.equal(evaluate('scalpTechniques.length'), 13);
assert.equal(evaluate('pressurePoints.length'), 6);
for (let id = 1; id <= lessonCount; id++) {
  for (const markup of [evaluate(`lessonPage(${id})`), evaluate(`quickVersion(lessons[${id - 1}])`)]) {
    checkAssets(markup);
    assert.ok(markup.includes('data-coach-session='), 'Missing guided practice for lesson ' + id);
    assert.ok(markup.includes('Start light'), 'Missing comfort guide for lesson ' + id);
    assert.ok(!markup.includes('scalp-practice-start') && !markup.includes('class="button primary small practice-start"'));
  }
  assert.equal(evaluate(`lessons[${id - 1}].quiz.length`), 2);
}
const pages = ['home()', 'course()', 'techniques()', 'areas()', 'routines()', 'safety()', 'progressPage()', 'reference()', 'pressurePointsPage()', 'handMassagePage()', 'quickPracticePage()', 'notFound()'];
pages.forEach(page => { const html = evaluate(page); assert.ok(html.includes('<main'), page); checkAssets(html); });
assert.equal(evaluate('routineData.length'), 7);
for (let i = 0; i < 7; i++) {
  const stages = evaluate(`routineCoachedStages(routineData[${i}])`);
  const total = stages.reduce((sum, stage) => sum + stage.seconds, 0);
  assert.equal(total, evaluate(`parseInt(routineData[${i}].time) * 60`), 'Incorrect routine total');
  assert.ok(stages.every(stage => stage.instruction && stage.image && stage.seconds > 0));
  stages.forEach(stage => assert.ok(fs.existsSync(path.join(project, 'assets', 'lessons', stage.image))));
}
const config = JSON.parse(fs.readFileSync(path.join(project, 'vercel.json'), 'utf8'));
assert.ok(config.rewrites.some(rule => rule.source === '/pressure-points'));
assert.ok(config.rewrites.some(rule => rule.source === '/hand-massage'));
assert.equal(evaluate('handMassageStages().reduce((sum, stage) => sum + stage.seconds, 0)'), 180);
assert.ok(fs.readFileSync(path.join(project, 'index.html'), 'utf8').includes('/relaxation-coach.js'));

function element() {
  return { hidden: false, textContent: '', listeners: {}, addEventListener(name, callback) { this.listeners[name] = callback; } };
}
function makeRoot(key, withImage = false) {
  const elements = new Map();
  return { dataset: { coachSession: key }, classList: { add() {}, remove() {} },
    querySelector(selector) {
      if (!withImage && (selector === '.coach-stage-visual img' || selector === '.coach-lesson-link')) return null;
      if (!elements.has(selector)) elements.set(selector, element());
      return elements.get(selector);
    }
  };
}
function click(root, selector) { root.querySelector(selector).listeners.click(); }
function advance(seconds) { clock.now += seconds * 1000; Array.from(clock.intervals.values()).forEach(callback => callback()); }
const first = makeRoot('lesson-3');
first.querySelector('.coach-stage-count').textContent = 'Stage 1 of 3';
roots = [first]; evaluate('bindGuidedPractices()');
click(first, '.coach-toggle'); assert.equal(first.querySelector('.coach-toggle').textContent, 'Pause');
advance(15);
assert.equal(clock.intervals.size, 0, 'Must wait for comfort confirmation');
assert.equal(first.querySelector('.coach-continue').hidden, false);
assert.equal(first.querySelector('.coach-stage-count').textContent, 'Stage 1 of 3', 'Should not advance without confirmation');
click(first, '.coach-continue');
assert.equal(first.querySelector('.coach-stage-count').textContent, 'Stage 2 of 3');
advance(5); click(first, '.coach-toggle');
assert.equal(first.querySelector('.coach-toggle').textContent, 'Resume');
assert.equal(first.querySelector('.coach-time').textContent, '00:25');
advance(20); assert.equal(first.querySelector('.coach-time').textContent, '00:25', 'Pause must preserve remaining time');
click(first, '.coach-toggle'); advance(25); click(first, '.coach-continue'); advance(15);
assert.match(first.querySelector('.coach-status').textContent, /Practice complete/);
assert.equal(clock.intervals.size, 0);
click(first, '.coach-restart');
assert.equal(first.querySelector('.coach-stage-count').textContent, 'Stage 1 of 3');
assert.equal(first.querySelector('.coach-time').textContent, '00:15');
click(first, '.coach-toggle'); click(first, '.coach-end');
assert.match(first.querySelector('.coach-status').textContent, /Practice ended/);
assert.equal(clock.intervals.size, 0);
evaluate('stopAllCoachedSessions()');
const second = makeRoot('scalp-small-circles');
roots = [first, second]; evaluate('bindGuidedPractices()');
click(first, '.coach-toggle'); click(second, '.coach-toggle');
assert.equal(first.querySelector('.coach-toggle').textContent, 'Resume', 'Starting another practice must pause the first');
assert.equal(clock.intervals.size, 1);
document.hidden = true; documentHandlers.visibilitychange();
assert.equal(second.querySelector('.coach-toggle').textContent, 'Resume');
assert.equal(clock.intervals.size, 0, 'Hidden pages must pause');
document.hidden = false; click(second, '.coach-toggle'); evaluate('stopAllCoachedSessions()');
assert.equal(clock.intervals.size, 0, 'Navigation must clean up all timers');
const routine = makeRoot('routine-4', true);
roots = [routine]; evaluate('bindGuidedPractices()');
click(routine, '.coach-toggle'); advance(60); click(routine, '.coach-continue'); advance(120); click(routine, '.coach-continue');
assert.equal(routine.querySelector('.coach-stage-visual img').src, '/assets/lessons/hand-palm-contact.webp', 'Palm stage needs its matching visual');
assert.equal(routine.querySelector('.coach-lesson-link').href, '/lessons/10');
evaluate('stopAllCoachedSessions()');
const hands = makeRoot('hand-routine', true);
roots = [hands]; evaluate('bindGuidedPractices()');
click(hands, '.coach-toggle'); advance(30); click(hands, '.coach-continue');
assert.equal(hands.querySelector('.coach-stage-count').textContent, 'Stage 2 of 4');
advance(60); click(hands, '.coach-continue');
assert.equal(hands.querySelector('.coach-stage-visual img').src, '/assets/lessons/hand-finger-stroke.webp');
advance(30); click(hands, '.coach-continue'); advance(60);
assert.match(hands.querySelector('.coach-status').textContent, /Practice complete/);
assert.equal(clock.intervals.size, 0);
console.log('PASS: 13 lesson pages + 13 practices, 12 other page renders including Hand Massage, 13 scalp techniques, 6 pressure points, routine totals, all referenced assets, and timer start/pause/resume/comfort gate/restart/early end/completion/visibility/navigation.');
