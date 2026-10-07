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
let visualDialog = null;
let visualRoot = null;
let followStarts = [];
let savedProgress = null;
let keyboardSequences = [];
const routineStatusNodes = Array.from({ length: 9 }, () => ({ textContent: '' }));
const documentHandlers = {};
const document = {
  hidden: false,
  addEventListener(name, callback) { documentHandlers[name] = callback; },
  getElementById(id) { return id === 'app' ? visualRoot : null; },
  querySelectorAll(selector) {
    if (selector === '[data-coach-session]') return roots;
    if (selector === '.follow-along-start') return followStarts;
    if (selector === '[data-sequence]') return keyboardSequences;
    return [];
  },
  querySelector(selector) {
    if (selector === '.follow-along-dialog') return followDialog;
    if (selector === '.visual-learning-dialog') return visualDialog;
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
for (const name of ['app.js', 'product-pass.js', 'relaxation-coach.js', 'hand-massage.js', 'visual-learning.js']) {
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
  const detailedLesson = evaluate(`fullLesson(lessons[${id - 1}])`);
  assert.match(detailedLesson, /data-sequence="lesson-steps"/);
  assert.equal((detailedLesson.match(/data-sequence-item=/g) || []).length, evaluate(`lessons[${id - 1}].steps.length`));
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

const visualKeys = Array.from(evaluate(`[
  ...lessons.map(item => 'lesson:' + item.id),
  ...scalpTechniques.map(item => 'scalp:' + item.id),
  ...handMassageTechniques.map(item => 'hand:' + item.id),
  ...pressurePoints.map(item => 'point:' + item.id)
]`));
assert.equal(visualKeys.length, 47, 'Every lesson, scalp technique, hand technique, and pressure point gets a guide');
const visualImages = [];
for (const key of visualKeys) {
  const sequence = evaluate(`window.CraftVisualLearning.getSequence(${JSON.stringify(key)})`);
  assert.ok(sequence, 'Missing visual sequence: ' + key);
  assert.equal(sequence.steps.length, 10, 'Every guide must have exactly 10 steps: ' + key);
  assert.ok(sequence.title && sequence.area && sequence.image && sequence.alt && sequence.hand && sequence.direction && sequence.pressure && sequence.avoid && sequence.safety);
  assert.ok(fs.existsSync(path.join(project, 'assets', 'lessons', sequence.image)), 'Missing sequence visual: ' + sequence.image);
  assert.ok(sequence.steps.every(step => step.title && step.instruction && step.what && step.hand && step.direction && step.pressure && step.avoid));
  visualImages.push(sequence.image);
  for (let step = 1; step <= 10; step++) {
    const markup = evaluate(`window.CraftVisualLearning.stageVisualMarkup(window.CraftVisualLearning.getSequence(${JSON.stringify(key)}), window.CraftVisualLearning.getSequence(${JSON.stringify(key)}).steps[${step - 1}])`);
    assert.match(markup, new RegExp('data-visual-step="' + step + '"'));
    checkAssets(markup);
  }
}
assert.equal(new Set(visualImages).size, 47, 'Every individual technique sequence must have its own matching source illustration');
assert.equal(evaluate('window.CraftVisualLearning.adjacentSequenceKey("lesson:1", -1)'), null);
assert.equal(evaluate('window.CraftVisualLearning.adjacentSequenceKey("lesson:1", 1)'), 'lesson:2');
assert.equal(evaluate('window.CraftVisualLearning.adjacentSequenceKey("scalp:" + scalpTechniques[0].id, 1)'), 'scalp:' + evaluate('scalpTechniques[1].id'));
assert.equal(evaluate('window.CraftVisualLearning.adjacentSequenceKey("hand:" + handMassageTechniques[14].id, 1)'), null);
assert.equal(evaluate('window.CraftVisualLearning.adjacentSequenceKey("point:" + pressurePoints[5].id, -1)'), 'point:' + evaluate('pressurePoints[4].id'));
assert.deepEqual({ ...evaluate('window.CraftVisualLearning.sequencePosition("hand:" + handMassageTechniques[2].id)') }, { index: 3, total: 15, label: 'technique' });
for (let index = 0; index < 9; index++) {
  const stages = evaluate(`routineCoachedStages(routineData[${index}])`);
  stages.forEach((stage, stageIndex) => {
    const key = evaluate(`window.CraftVisualLearning.visualKeyForRoutineStage(routineCoachedStages(routineData[${index}])[${stageIndex}])`);
    assert.ok(evaluate(`window.CraftVisualLearning.getSequence(${JSON.stringify(key)})`), `Routine ${index + 1}, stage ${stageIndex + 1} must open a matching visual guide (${key})`);
  });
}
const visualTimer = evaluate('window.CraftVisualLearning.createTimer(function (state) { window.__timerState = state; })');
visualTimer.setDuration(15); visualTimer.start();
assert.equal(clock.intervals.size, 1, 'The visual-step timer should start');
advance(6); visualTimer.pause();
assert.equal(clock.intervals.size, 0, 'The visual-step timer should pause');
assert.ok(evaluate('window.__timerState.remaining') <= 9 && evaluate('window.__timerState.remaining') >= 8);
visualTimer.start(); advance(20);
assert.equal(evaluate('window.__timerState.remaining'), 0, 'The visual-step timer should stop at zero');
visualTimer.dispose();
assert.ok(evaluate('window.CraftVisualLearning.canHandleArrow({key: "ArrowRight", target: {closest() { return null; }}})'));
assert.ok(!evaluate('window.CraftVisualLearning.canHandleArrow({key: "ArrowRight", target: {closest() { return {}; }}})'), 'Arrow navigation must not steal input controls');
const visualProgress = fs.readFileSync(path.join(project, 'app.js'), 'utf8');
assert.match(visualProgress, /visualSequencesCompleted/);
assert.ok(fs.readFileSync(path.join(project, 'index.html'), 'utf8').includes('/visual-learning.js'));
assert.match(evaluate('followAlongDialogMarkup()'), /follow-visual-steps/);

function element() {
  return { hidden: false, disabled: false, textContent: '', dataset: {}, listeners: {}, attributes: {}, addEventListener(name, callback) { this.listeners[name] = callback; }, click() { if (this.listeners.click) this.listeners.click({ target: this }); }, focus() {}, setAttribute(name, value) { this.attributes[name] = value; }, removeAttribute(name) { delete this.attributes[name]; } };
}
function makeRoot(key, withImage = false) {
  const elements = new Map();
  return { dataset: { coachSession: key }, classList: { add() {}, remove() {} },
    closest(selector) { return selector === '.coached-practice' ? this : null; },
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
    hidden: false, disabled: false, textContent: '', src: '', alt: '', loading: '', open: false, dataset: {},
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
    contains(target) { return Boolean(target && target.inFollowDialog); },
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
savedProgress = JSON.stringify({ completed: [2], current: 3, practiceCompleted: [8], scalpPracticeCompleted: ['small-circles'], visualSequencesCompleted: ['hand:palm-gliding', 'not-a-sequence'] });
const upgradedProgress = evaluate('loadProgress()');
assert.deepEqual(Array.from(upgradedProgress.completed), [2], 'Older local progress remains readable');
assert.deepEqual(Array.from(upgradedProgress.practiceCompleted), [8], 'Older practice progress remains readable');
assert.deepEqual(Array.from(upgradedProgress.routineCompleted), [], 'Older progress gets an empty routine-completion list');
assert.deepEqual(Array.from(upgradedProgress.visualSequencesCompleted), ['hand:palm-gliding'], 'Visual guide progress is validated without dropping existing progress');

// Arrow keys navigate sequences but never consume arrows while typing/searching.
evaluate('bindLearningArrowKeys()');
let focusedSequenceItem = null;
function makeSequenceItem(id) {
  const attributes = {};
  return {
    id,
    closest(selector) { return selector === '[hidden]' ? null : null; },
    scrollIntoView() {},
    setAttribute(name, value) { attributes[name] = value; },
    removeAttribute(name) { delete attributes[name]; },
    getAttribute(name) { return attributes[name] || null; },
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
    shiftKey: Boolean(options.shiftKey), repeat: Boolean(options.repeat), isComposing: false, preventDefault() { prevented = true; }, stopPropagation() {} });
  return prevented;
}
assert.equal(sendArrow('ArrowRight', makeSequenceTarget(sequenceItems[0])), true);
assert.equal(focusedSequenceItem, 'hand-2', 'Right arrow advances hand techniques');
assert.equal(sendArrow('ArrowLeft', makeSequenceTarget(sequenceItems[1])), true);
assert.equal(focusedSequenceItem, 'hand-1', 'Left arrow goes back to the prior hand technique');
assert.equal(sequenceItems[0].getAttribute('aria-current'), 'step', 'The active sequence card is announced as current');
assert.equal(sendArrow('ArrowLeft', makeSequenceTarget(sequenceItems[0])), true, 'Boundary arrows are consumed instead of scrolling the page');
assert.equal(focusedSequenceItem, 'hand-1', 'Left arrow at the first step does not wrap');
assert.equal(sendArrow('ArrowRight', makeSequenceTarget(sequenceItems[0]), { repeat: true }), false, 'Held keys do not auto-advance multiple steps');
const searchTarget = { closest(selector) { return selector.indexOf('input') >= 0 ? this : null; } };
assert.equal(sendArrow('ArrowRight', searchTarget), false, 'Search inputs retain normal arrow-key behavior');
const nativeControlTarget = { closest(selector) { return selector.includes('[role="radio"]') ? this : null; } };
assert.equal(sendArrow('ArrowRight', nativeControlTarget), false, 'Arrow keys remain available to other keyboard-controlled widgets');
assert.equal(sendArrow('ArrowRight', makeSequenceTarget(sequenceItems[0]), { shiftKey: true }), false, 'Modified arrow shortcuts are ignored');
assert.equal(sendArrow('ArrowRight', { closest() { return null; } }), false, 'Arrow keys outside a learning sequence do not jump to unrelated content');

// Quick Practice and lesson navigation use only their own controls and announce boundaries.
let quickClicks = 0;
const quickHint = element();
const quickLink = { click() { quickClicks += 1; } };
const quickSequence = { dataset: { sequence: 'quick-practice' }, querySelector(selector) { return selector.includes('data-sequence-next') ? quickLink : selector === '.sequence-key-hint' ? quickHint : null; } };
const quickTarget = { closest(selector) { return selector === '[data-sequence]' ? quickSequence : selector === '.quick-version, .practice-sequence-nav' ? {} : null; } };
assert.equal(sendArrow('ArrowRight', quickTarget), true);
assert.equal(quickClicks, 1, 'Right arrow follows the next Quick Practice skill');
assert.equal(sendArrow('ArrowLeft', quickTarget), true);
assert.match(quickHint.textContent, /first Quick Practice skill/);
const lightboxTarget = { closest(selector) {
  if (selector.includes('input')) return null;
  if (selector === 'dialog') return {};
  if (selector === '[data-sequence]') return quickSequence;
  if (selector === '.quick-version, .practice-sequence-nav') return {};
  return null;
} };
assert.equal(sendArrow('ArrowRight', lightboxTarget), false, 'Image lightboxes do not accidentally switch the underlying practice');
assert.equal(quickClicks, 1);

let lessonNextClicks = 0;
const lessonHint = element();
const lessonFooter = { querySelector() { return { click() { lessonNextClicks += 1; } }; } };
const lessonSequence = { dataset: { sequence: 'lesson-page' }, querySelector(selector) { return selector === '.lesson-footer' ? lessonFooter : selector === '.sequence-key-hint' ? lessonHint : null; } };
const lessonTarget = { closest(selector) { return selector === '[data-sequence]' ? lessonSequence : null; } };
assert.equal(sendArrow('ArrowRight', lessonTarget), true);
assert.equal(lessonNextClicks, 1, 'Right arrow follows the next lesson');

let lessonBoundaryPrevious = 0;
let lessonBoundaryNext = 0;
let focusedLessonStep = null;
const lessonStepHints = [element(), element()];
const lessonStepItems = [0, 1].map(index => ({
  closest(selector) { return selector === '[hidden]' ? null : null; },
  scrollIntoView() {}, setAttribute() {}, removeAttribute() {},
  querySelector(selector) {
    if (selector === '.sequence-key-hint') return lessonStepHints[index];
    return { focus() { focusedLessonStep = index; } };
  }
}));
const lessonStepFooter = { querySelector(selector) { return { click() { if (selector === 'a.next') lessonBoundaryNext += 1; else lessonBoundaryPrevious += 1; } }; } };
const lessonStepPage = { querySelector() { return lessonStepFooter; } };
const lessonSteps = {
  dataset: { sequence: 'lesson-steps' },
  closest(selector) { return selector === '.lesson-page' ? lessonStepPage : null; },
  querySelectorAll() { return lessonStepItems; },
  querySelector(selector) { return selector === '[data-sequence-item]' ? lessonStepItems[0] : null; }
};
const lessonStepTarget = index => ({ closest(selector) {
  if (selector === '[data-sequence]') return lessonSteps;
  if (selector === '[data-sequence-item]') return lessonStepItems[index];
  return null;
} });
assert.equal(sendArrow('ArrowRight', lessonStepTarget(0)), true);
assert.equal(focusedLessonStep, 1, 'Lesson step cards advance in their natural order');
assert.match(lessonStepHints[1].textContent, /Step 2 of 2/);
assert.equal(sendArrow('ArrowRight', lessonStepTarget(1)), true);
assert.equal(lessonBoundaryNext, 1, 'The final lesson step continues to the next lesson when available');
assert.equal(sendArrow('ArrowLeft', lessonStepTarget(0)), true);
assert.equal(lessonBoundaryPrevious, 1, 'The first lesson step can return to the previous lesson');

// Guided stages pause/reset cleanly; Space toggles only an already-running or paused stage.
const guided = makeRoot('lesson-3');
roots = [guided]; evaluate('bindGuidedPractices()');
const guidedTarget = { closest(selector) { return selector === '.coached-practice' ? guided : null; } };
click(guided, '.coach-toggle');
assert.equal(sendArrow('ArrowRight', guidedTarget), true);
assert.equal(guided.querySelector('.coach-stage-count').textContent, 'Stage 2 of 3', 'Arrow navigation advances guided practice stages');
assert.equal(clock.intervals.size, 0, 'Changing stages clears the old countdown');
click(guided, '.coach-toggle');
let spacePrevented = false;
documentHandlers.keydown({ key: ' ', code: 'Space', target: guidedTarget, defaultPrevented: false, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false, isComposing: false,
  preventDefault() { spacePrevented = true; }, stopPropagation() {} });
assert.equal(spacePrevented, true, 'Space pauses guided practice from its non-control content');
assert.equal(guided.querySelector('.coach-toggle').textContent, 'Resume');
documentHandlers.keydown({ key: ' ', code: 'Space', target: guidedTarget, defaultPrevented: false, altKey: false, ctrlKey: false, metaKey: false, shiftKey: false, isComposing: false,
  preventDefault() {}, stopPropagation() {} });
assert.equal(guided.querySelector('.coach-toggle').textContent, 'Pause', 'Space resumes paused guided practice');
evaluate('stopAllCoachedSessions()');

// Full-screen Follow Along receives arrows only while focus is inside its dialog.
followStarts[0].click();
const followTarget = { inFollowDialog: true, closest() { return null; } };
assert.equal(sendArrow('ArrowRight', followTarget), true);
assert.match(followDialog.querySelector('.follow-step-count').textContent, /Step 2 of 3 · get ready/);
assert.match(followDialog.querySelector('.follow-transition').textContent, /reposition your hands/);
const followTransitionIntervals = clock.intervals.size;
assert.equal(sendArrow('ArrowRight', followTarget, { repeat: true }), false, 'Held Right does not skip or duplicate a Follow Along transition');
assert.match(followDialog.querySelector('.follow-step-count').textContent, /Step 2 of 3 · get ready/);
assert.equal(clock.intervals.size, followTransitionIntervals, 'Arrow-repeat does not create another routine timer');
let cancelPrevented = false;
followDialog.listeners.cancel({ preventDefault() { cancelPrevented = true; } });
assert.equal(cancelPrevented, true, 'Escape exits Follow Along through the native dialog cancel event');
assert.equal(followDialog.open, false);
assert.equal(clock.intervals.size, 0, 'Escape stops the active routine timer');

// Exercise the actual visual dialog's slide and next-technique keyboard transitions.
function makeVisualDialog() {
  const elements = new Map();
  const phases = Array.from({ length: 4 }, () => element());
  return {
    open: false, listeners: {},
    querySelector(selector) { if (!elements.has(selector)) elements.set(selector, element()); return elements.get(selector); },
    querySelectorAll(selector) { return selector === '.visual-phase-track li' ? phases : []; },
    contains(target) { return Boolean(target && target.inVisualDialog); },
    addEventListener(name, callback) { this.listeners[name] = callback; },
    showModal() { this.open = true; },
    close() { this.open = false; if (this.listeners.close) this.listeners.close(); }
  };
}
visualDialog = makeVisualDialog();
visualRoot = { querySelector(selector) { return selector === '.visual-learning-dialog' ? visualDialog : null; }, querySelectorAll() { return []; } };
evaluate('window.CraftVisualLearning.bind()');
const visualTrigger = Object.assign(element(), { isConnected: true, focus() { this.focused = true; } });
visualTrigger.dataset.visualLearning = 'hand:' + evaluate('handMassageTechniques[0].id');
visualTrigger.closest = selector => selector === '[data-visual-learning]' ? visualTrigger : null;
documentHandlers.click({ target: visualTrigger });
const visualTarget = { inVisualDialog: true, closest() { return null; } };
assert.equal(sendArrow('ArrowRight', visualTarget), true);
assert.match(visualDialog.querySelector('.visual-learning-count').textContent, /TECHNIQUE 1 OF 15 · STEP 2 OF 10/);
assert.match(visualDialog.querySelector('.visual-learning-art').innerHTML, /data-visual-step="2"/);
for (let step = 2; step < 10; step++) assert.equal(sendArrow('ArrowRight', visualTarget), true);
assert.match(visualDialog.querySelector('.visual-learning-count').textContent, /STEP 10 OF 10/);
assert.equal(visualDialog.querySelector('.visual-learning-next').textContent, 'Next technique →');
assert.equal(sendArrow('ArrowRight', visualTarget), true);
assert.match(visualDialog.querySelector('.visual-learning-count').textContent, /TECHNIQUE 2 OF 15 · STEP 1 OF 10/);
assert.equal(visualDialog.querySelector('.visual-learning-previous').disabled, false, 'The previous technique button works at a guide boundary');
assert.ok(evaluate('progress.visualSequencesCompleted.includes("hand:" + handMassageTechniques[0].id)'), 'Moving beyond a guide marks the finished technique');
assert.match(visualDialog.querySelector('.visual-learning-art').innerHTML, /hand-palm-circles/);
assert.equal(sendArrow('ArrowLeft', visualTarget), true);
assert.match(visualDialog.querySelector('.visual-learning-count').textContent, /TECHNIQUE 1 OF 15 · STEP 10 OF 10/);
evaluate('window.CraftVisualLearning.close()');
assert.equal(visualDialog.open, false);
assert.equal(visualTrigger.focused, true, 'Closing the visual guide returns focus to its opener');

const finalHandKey = 'hand:' + evaluate('handMassageTechniques[14].id');
const finalHandTrigger = Object.assign(element(), { isConnected: true, focus() { this.focused = true; } });
finalHandTrigger.dataset.visualLearning = finalHandKey;
finalHandTrigger.closest = selector => selector === '[data-visual-learning]' ? finalHandTrigger : null;
documentHandlers.click({ target: finalHandTrigger });
for (let step = 1; step < 10; step++) assert.equal(sendArrow('ArrowRight', visualTarget), true);
assert.equal(visualDialog.querySelector('.visual-learning-next').textContent, 'Finish', 'The final guide has a clear finish boundary');
assert.equal(sendArrow('ArrowRight', visualTarget), true);
assert.equal(visualDialog.open, false, 'The final guide closes instead of jumping into an unrelated group');
assert.ok(evaluate('progress.visualSequencesCompleted.includes("hand:" + handMassageTechniques[14].id)'));

console.log('PASS: all 47 ten-step guides and 470 step frames; 47 unique technique visuals; cross-guide slide navigation and progress; all routine-stage mappings and image assets; timer start/pause/resume/complete; all 9 Follow Along routines; keyboard boundaries, repeat protection, input protection, guided stages, Space pause/resume, modal priority, exit, repeat, and local progress preservation.');
