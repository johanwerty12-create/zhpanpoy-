// Dependency-free content, route-rendering, asset, and timer regression checks.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const project = path.resolve(__dirname, '..');
const clock = { now: 0, next: 0, intervals: new Map() };
class ClockDate extends Date { static now() { return clock.now; } }
let roots = [];
let followDialog = null;
let followStarts = [];
let savedProgress = null;
let keyboardSequences = [];
const routineStatusNodes = Array.from({ length: 9 }, () => ({ textContent: '' }));
const documentHandlers = {};
const document = {
  hidden: false,
  addEventListener(name, callback) { documentHandlers[name] = callback; },
  querySelectorAll(selector) {
    if (selector === '[data-coach-session]') return roots;
    if (selector === '.follow-along-start') return followStarts;
    if (selector === '[data-sequence]') return keyboardSequences;
    return [];
  },
  querySelector(selector) {
    if (selector === '.follow-along-dialog') return followDialog;
    const match = selector.match(/^\[data-routine-progress="(\d+)"\]$/);
    return match ? routineStatusNodes[Number(match[1])] : null;
  }
};
const context = vm.createContext({
  console, Date: ClockDate, URLSearchParams, document,
  localStorage: { getItem() { return savedProgress; }, setItem(key, value) { savedProgress = value; } },
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
const expectedAreas = ['Head & Scalp', 'Face', 'Neck', 'Shoulders', 'Upper Back', 'Mid Back', 'Lower Back', 'Chest', 'Arms', 'Elbow / Forearm', 'Hands', 'Abdomen', 'Hips / Gluteal Area', 'Thighs', 'Knees', 'Lower Legs', 'Ankles', 'Feet'];
assert.equal(evaluate('pressurePointAreas.length'), 18);
assert.deepEqual(Array.from(evaluate('pressurePointAreas')), expectedAreas, 'Every requested body-area filter should be present');
assert.equal(evaluate('handMassageTechniques.length'), 15);
const expectedHandNames = ['Palm Gliding', 'Palm Circles', 'Center-Palm Circles', 'Thumb-Line Glide', 'Thenar Massage', 'Thumb Base Circles', 'Finger Base Circles', 'Individual Finger Gliding', 'Finger Joint Circles', 'Finger Squeeze-and-Release', 'Gentle Finger Stretch', 'Finger Web Massage', 'Back-of-Hand Gliding', 'Gentle Wrist Circles', 'Complete Hand Finishing Sequence'];
assert.deepEqual(Array.from(evaluate('handMassageTechniques.map(item => item.title)')), expectedHandNames);
const handImages = Array.from(evaluate('handMassageTechniques.map(item => item.image)'));
assert.equal(new Set(handImages).size, 15, 'Every hand technique needs its own unique image');
assert.ok(handImages.includes('hand-gentle-wrist-circles-v2.webp'));
assert.ok(evaluate('handMassageTechniques.every(item => item.what && item.place && item.contact && item.direction && item.pressure && item.notice && item.avoid && item.alt)'));
const pointImages = Array.from(evaluate('pressurePoints.map(point => pressurePointVisualSpecs[point.id].image)'));
assert.equal(new Set(pointImages).size, 6, 'Each pressure point must have its own body-context image');
for (const image of pointImages) assert.ok(fs.existsSync(path.join(project, 'assets', 'lessons', image)), 'Missing point image: ' + image);
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
assert.equal(evaluate('routineData.length'), 9);
for (let i = 0; i < 9; i++) {
  const stages = evaluate(`routineCoachedStages(routineData[${i}])`);
  const guides = evaluate(`routineFollowAlongGuides[${i}]`);
  const total = stages.reduce((sum, stage) => sum + stage.seconds, 0);
  assert.equal(total, evaluate(`parseInt(routineData[${i}].time) * 60`), 'Incorrect routine total');
  assert.equal(guides.length, stages.length, 'Every routine stage needs its own guide');
  assert.ok(stages.every(stage => stage.instruction && stage.image && stage.seconds > 0 && stage.area && stage.technique && stage.short && stage.direction && stage.pressure && stage.alt));
  stages.forEach(stage => assert.ok(
    fs.existsSync(path.join(project, 'assets', 'lessons', stage.image)),
    'Missing visual for ' + stage.technique + ': ' + stage.image
  ));
}
const routineMarkup = evaluate('routines()');
assert.equal((routineMarkup.match(/START FOLLOW ALONG/g) || []).length, 9);
assert.match(routineMarkup, /Hand &amp; Fingers · 8 min/);
assert.equal((routineMarkup.match(/class="follow-along-dialog"/g) || []).length, 1);
checkAssets(routineMarkup);
assert.match(evaluate('routineProgressMarkup()'), /9 routines complete/);
const config = JSON.parse(fs.readFileSync(path.join(project, 'vercel.json'), 'utf8'));
assert.ok(config.rewrites.some(rule => rule.source === '/pressure-points'));
assert.ok(config.rewrites.some(rule => rule.source === '/hand-massage'));
assert.equal(evaluate('handMassageStages().length'), 15);
assert.equal(evaluate('handMassageStages().reduce((sum, stage) => sum + stage.seconds, 0)'), 480);
assert.deepEqual(Array.from(evaluate('handMassageStages().map(stage => stage.image)')), handImages);
const handMarkup = evaluate('handMassagePage()');
assert.equal((handMarkup.match(/class="hand-technique-card"/g) || []).length, 15);
checkAssets(handMarkup);
const quickHandMarkup = evaluate('handMassageQuickPracticeMarkup(lessons[9])');
assert.equal((quickHandMarkup.match(/class="hand-quick-card"/g) || []).length, 15);
checkAssets(quickHandMarkup);
assert.equal((quickHandMarkup.match(/class="hand-motion-cue"/g) || []).length, 1, 'The forearm-circle step needs its circular motion cue');
for (let i = 0; i < 6; i++) {
  const point = evaluate(`pressurePoints[${i}]`);
  const visual = evaluate(`pressurePointVisualMarkup(pressurePoints[${i}].id)`);
  const card = evaluate(`pressurePointCard(pressurePoints[${i}], ${i})`);
  assert.match(visual, new RegExp(point.id + '\\.webp'));
  assert.match(visual, /pp-photo-marker/);
  checkAssets(visual);
  if (i > 0) assert.ok(card.includes('aria-label="Previous point: ' + evaluate(`pressurePoints[${i - 1}].name`) + '"'));
  if (i < 5) assert.ok(card.includes('aria-label="Next point: ' + evaluate(`pressurePoints[${i + 1}].name`) + '"'));
}
const pressureMarkup = evaluate('pressurePointsPage()');
for (const area of expectedAreas) assert.ok(pressureMarkup.includes('>' + evaluate('esc(' + JSON.stringify(area) + ')') + '</h2>'), 'Missing pressure area: ' + area);
assert.match(pressureMarkup, /18 body areas/);
const pointTour = evaluate('routineCoachedStages(routineData[8])');
assert.equal(pointTour.length, 6);
assert.deepEqual(Array.from(pointTour.map(stage => stage.pointId)), Array.from(evaluate('pressurePoints.map(point => point.id)')));
assert.ok(pointTour.every((stage, index) => stage.image === evaluate(`pressurePointVisualSpecs[pressurePoints[${index}].id].image`)));
assert.ok(evaluate('pressurePoints.every(point => pressurePointVisualSpecs[point.id].image && pressurePointVisualSpecs[point.id].alt)'));
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
const handStages = evaluate('handMassageStages()');
hands.querySelector('.coach-stage-visual img').src = '/assets/lessons/' + handStages[0].image;
click(hands, '.coach-toggle');
for (let i = 0; i < handStages.length; i++) {
  assert.equal(hands.querySelector('.coach-stage-visual img').src, '/assets/lessons/' + handStages[i].image, 'Hand practice image must match step ' + (i + 1));
  assert.equal(hands.querySelector('.coach-stage-count').textContent, 'Stage ' + (i + 1) + ' of 15');
  advance(handStages[i].seconds);
  if (i < handStages.length - 1) click(hands, '.coach-continue');
}
assert.match(hands.querySelector('.coach-status').textContent, /Practice complete/);
assert.equal(clock.intervals.size, 0);

function makeUiElement() {
  return {
    hidden: false, disabled: false, textContent: '', src: '', alt: '', loading: '', open: false,
    listeners: {}, addEventListener(name, callback) { this.listeners[name] = callback; },
    focus() {}, click() { if (this.listeners.click) this.listeners.click({ target: this }); }
  };
}
function makeFollowDialog() {
  const elements = new Map();
  const exits = [makeUiElement(), makeUiElement()];
  return {
    open: false, scrollTop: 0, listeners: {},
    querySelector(selector) {
      if (!elements.has(selector)) {
        const node = makeUiElement();
        if (selector === '.follow-finish h2') node.textContent = 'Take a moment before getting up.';
        elements.set(selector, node);
      }
      return elements.get(selector);
    },
    querySelectorAll(selector) { return selector === '.follow-exit' ? exits : []; },
    addEventListener(name, callback) { this.listeners[name] = callback; },
    showModal() { this.open = true; }, close() { this.open = false; },
    exitButtons: exits
  };
}
function followClick(selector) { followDialog.querySelector(selector).click(); }
followDialog = makeFollowDialog();
followStarts = Array.from({ length: 9 }, (_, routineId) => {
  const button = makeUiElement();
  button.dataset = { routineId: String(routineId) };
  return button;
});
evaluate('bindRoutineFollowAlong()');
evaluate('progress.completed.push(1); progress.practiceCompleted.push(3)');

// Verify that exiting an unfinished session is safe and does not award completion.
followStarts[1].click();
assert.equal(followDialog.open, true);
assert.equal(followDialog.querySelector('.follow-along-image').src, '/assets/lessons/lesson-06-shoulders.webp');
assert.match(followDialog.querySelector('.follow-technique').textContent, /Still shoulder contact/);
followDialog.scrollTop = 333;
followClick('.follow-next');
assert.equal(followDialog.scrollTop, 0, 'Transition should reveal the visual for the next stage');
followClick('.follow-toggle');
assert.equal(followDialog.querySelector('.follow-next').textContent, 'Start now');
followDialog.scrollTop = 333;
followClick('.follow-next');
assert.equal(followDialog.scrollTop, 0, 'Starting the next stage should bring its visual back into view');
assert.equal(followDialog.querySelector('.follow-technique').textContent, 'Broad shoulder gliding', 'Start now must begin the announced stage rather than skip it');
followDialog.exitButtons[0].click();
assert.equal(followDialog.open, false);
assert.equal(clock.intervals.size, 0, 'Exit must clear the active timer');
assert.equal(evaluate('isRoutineComplete(1)'), false, 'An unfinished routine must not be marked complete');

for (let routineId = 0; routineId < 9; routineId++) {
  followStarts[routineId].click();
  const stages = evaluate(`routineCoachedStages(routineData[${routineId}])`);
  let firstStage = true;
  if (routineId === 0) {
    const time = followDialog.querySelector('.follow-time');
    advance(7);
    followClick('.follow-toggle');
    assert.equal(time.textContent, '00:23', 'Pause captures remaining time');
    advance(80);
    assert.equal(time.textContent, '00:23', 'Paused time must not elapse');
    followClick('.follow-toggle');
    assert.equal(time.textContent, '00:23', 'Resume preserves remaining time');
    advance(23);
    assert.match(followDialog.querySelector('.follow-transition').textContent, /Next: Broad forearm gliding/);
    assert.match(followDialog.querySelector('.follow-transition').textContent, /reposition your hands/);
    advance(2);
    followClick('.follow-toggle');
    assert.equal(followDialog.querySelector('.follow-toggle').textContent, 'Resume');
    assert.match(followDialog.querySelector('.follow-transition').textContent, /Paused/);
    const transitionTime = followDialog.querySelector('.follow-time').textContent;
    advance(20);
    assert.equal(followDialog.querySelector('.follow-time').textContent, transitionTime, 'Paused transition holds its countdown');
    followClick('.follow-toggle');
    assert.equal(followDialog.querySelector('.follow-time').textContent, transitionTime, 'Transition resumes its remaining time');
    advance(Number(transitionTime.slice(-2)));
    assert.match(followDialog.querySelector('.follow-technique').textContent, /Broad forearm gliding/);
    followClick('.follow-previous');
    assert.match(followDialog.querySelector('.follow-technique').textContent, /Still palm contact/);
    assert.equal(followDialog.querySelector('.follow-step-count').textContent, 'Step 1 of 3');
    followClick('.follow-next');
    assert.match(followDialog.querySelector('.follow-transition').textContent, /Next: Broad forearm gliding/);
    followClick('.follow-next');
    assert.match(followDialog.querySelector('.follow-technique').textContent, /Broad forearm gliding/);
    firstStage = false;
  } else {
    assert.equal(followDialog.querySelector('.follow-along-image').src, '/assets/lessons/' + stages[0].image);
  }

  const startAt = firstStage ? 0 : 1;
  for (let stageIndex = startAt; stageIndex < stages.length; stageIndex++) {
    const stage = stages[stageIndex];
    assert.equal(followDialog.querySelector('.follow-along-image').src, '/assets/lessons/' + stage.image, 'Image must match ' + stage.technique);
    assert.equal(followDialog.querySelector('.follow-area').textContent, stage.area.toUpperCase());
    assert.equal(followDialog.querySelector('.follow-technique').textContent, stage.technique);
    assert.equal(followDialog.querySelector('.follow-instruction').textContent, stage.short);
    assert.equal(followDialog.querySelector('.follow-direction').textContent, stage.direction);
    assert.equal(followDialog.querySelector('.follow-pressure').textContent, stage.pressure);
    if (routineId === 7 && stage.techniqueId === 'gentle-wrist-circles') {
      assert.equal(followDialog.querySelector('.follow-motion-cue').hidden, false);
      assert.match(followDialog.querySelector('.follow-motion-cue').innerHTML, /A42 42/);
    }
    if (routineId === 8) {
      const marker = followDialog.querySelector('.follow-point-marker');
      assert.equal(marker.hidden, false);
      assert.match(marker.innerHTML, new RegExp('cx="' + (evaluate(`pressurePointVisualSpecs[pressurePoints[${stageIndex}].id].x`) * 10) + '"'));
      assert.match(marker.innerHTML, new RegExp('cy="' + (evaluate(`pressurePointVisualSpecs[pressurePoints[${stageIndex}].id].y`) * 7.5) + '"'));
    }
    if (stageIndex > startAt) {
      assert.match(followDialog.querySelector('.follow-transition').textContent, new RegExp('Next: ' + stages[stageIndex].technique.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
      advance(8);
      assert.equal(followDialog.querySelector('.follow-technique').textContent, stage.technique);
    }
    advance(stage.seconds);
    if (stageIndex < stages.length - 1) {
      assert.match(followDialog.querySelector('.follow-transition').textContent, /Take a moment to reposition/);
    }
  }
  assert.equal(followDialog.querySelector('.follow-finish').hidden, false, 'Routine should end in completion state');
  assert.match(followDialog.querySelector('.follow-step-count').textContent, /ROUTINE COMPLETE/);
  assert.match(followDialog.querySelector('.follow-finish h2').textContent, /Take a moment before getting up/);
  assert.equal(evaluate(`isRoutineComplete(${routineId})`), true, 'Completion must update local progress');
  assert.match(routineStatusNodes[routineId].textContent, /Completed/);
  assert.equal(followDialog.open, true, 'Completion should leave repeat/exit options visible');
  if (routineId === 0) {
    followClick('.follow-repeat');
    assert.equal(followDialog.querySelector('.follow-step-count').textContent, 'Step 1 of 3');
    assert.equal(followDialog.querySelector('.follow-along-image').src, '/assets/lessons/' + stages[0].image);
    followDialog.exitButtons[1].click();
  } else followDialog.exitButtons[0].click();
  assert.equal(followDialog.open, false);
  assert.equal(clock.intervals.size, 0, 'Routine exit must stop all timers');
}
followStarts[0].click();
followClick('.follow-next');
followClick('.follow-next');
followClick('.follow-next');
followClick('.follow-next');
followClick('.follow-next');
assert.equal(followDialog.querySelector('.follow-finish').hidden, false, 'Next on the final step should complete the routine');
assert.equal(evaluate('progress.routineCompleted.filter(id => id === 0).length'), 1, 'Repeating a completed routine must not duplicate progress');
followDialog.exitButtons[0].click();
const persisted = JSON.parse(savedProgress);
assert.deepEqual(persisted.completed, [1], 'Routine progress must preserve existing lesson progress');
assert.deepEqual(persisted.practiceCompleted, [3], 'Routine progress must preserve existing practice progress');
assert.deepEqual(persisted.routineCompleted.sort(), [0, 1, 2, 3, 4, 5, 6, 7, 8]);
assert.ok(evaluate('routineProgressMarkup()').includes('9 of 9 routines complete'));
savedProgress = JSON.stringify({ completed: [2], current: 3, practiceCompleted: [8], scalpPracticeCompleted: ['small-circles'] });
const upgradedProgress = evaluate('loadProgress()');
assert.deepEqual(Array.from(upgradedProgress.completed), [2], 'Older local progress remains readable');
assert.deepEqual(Array.from(upgradedProgress.practiceCompleted), [8], 'Older practice progress remains readable');
assert.deepEqual(Array.from(upgradedProgress.routineCompleted), [], 'Older progress gets an empty routine-completion list');

// Arrow keys navigate sequences but never consume arrows while typing/searching.
evaluate('bindLearningArrowKeys()');
let focusedSequenceItem = null;
function makeSequenceItem(id) {
  return {
    id,
    closest(selector) { return selector === '[hidden]' ? null : null; },
    scrollIntoView() {},
    querySelector() { return { focus() { focusedSequenceItem = id; } }; }
  };
}
const sequenceItems = [makeSequenceItem('hand-1'), makeSequenceItem('hand-2')];
const handSequence = {
  dataset: { sequence: 'hand-techniques' },
  querySelectorAll() { return sequenceItems; }
};
keyboardSequences = [handSequence];
function makeSequenceTarget(item) {
  return { closest(selector) {
    if (selector.indexOf('input') >= 0) return null;
    if (selector === '[data-sequence]') return handSequence;
    if (selector === '[data-sequence-item]') return item;
    return null;
  } };
}
function sendArrow(key, target, options = {}) {
  let prevented = false;
  documentHandlers.keydown({ key, target, defaultPrevented: false, altKey: false, ctrlKey: false, metaKey: false,
    shiftKey: Boolean(options.shiftKey), isComposing: false, preventDefault() { prevented = true; } });
  return prevented;
}
assert.equal(sendArrow('ArrowRight', makeSequenceTarget(sequenceItems[0])), true);
assert.equal(focusedSequenceItem, 'hand-2', 'Right arrow advances hand techniques');
assert.equal(sendArrow('ArrowLeft', makeSequenceTarget(sequenceItems[1])), true);
assert.equal(focusedSequenceItem, 'hand-1', 'Left arrow goes back to the prior hand technique');
const searchTarget = { closest(selector) { return selector.indexOf('input') >= 0 ? this : null; } };
assert.equal(sendArrow('ArrowRight', searchTarget), false, 'Search inputs retain normal arrow-key behavior');
assert.equal(sendArrow('ArrowRight', makeSequenceTarget(sequenceItems[0]), { shiftKey: true }), false, 'Modified arrow shortcuts are ignored');
console.log('PASS: lessons/routes/assets, 15 unique hand techniques, all 18 pressure-point areas and 6 point lessons, all 9 routines and every visual mapping; full timed completion; pause/resume (including transitions); previous/next; exit; repeat; saved routine progress; and preservation of existing progress.');
