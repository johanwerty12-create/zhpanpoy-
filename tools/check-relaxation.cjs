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
const routineStatusNodes = Array.from({ length: 9 }, () => ({ textContent: '', hidden: true }));
const documentHandlers = {};
const documentHandlerOptions = {};
const documentHandlerCounts = {};
const document = {
  hidden: false,
  addEventListener(name, callback, options) {
    documentHandlers[name] = callback;
    documentHandlerOptions[name] = options;
    documentHandlerCounts[name] = (documentHandlerCounts[name] || 0) + 1;
  },
  getElementById(id) { return id === 'app' ? visualRoot : null; },
  querySelectorAll(selector) {
    if (selector === '[data-coach-session]') return roots;
    if (selector === '.follow-along-start') return followStarts;
    if (selector === '[data-sequence]' || selector === '#app [data-sequence]') return keyboardSequences;
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
  window: { location: { pathname: '/', hash: '', search: '' }, innerHeight: 900, addEventListener() {},
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
const receiverLedStretch = evaluate("handMassageTechniques.find(item => item.id === 'gentle-finger-stretch')");
assert.equal(receiverLedStretch.image, 'hand-gentle-finger-stretch-receiver-led.webp');
assert.match(receiverLedStretch.what, /receiver.*themselves/i, 'The finger movement stays receiver-led');
assert.match(receiverLedStretch.visualCue, /never pull/i, 'The visual explicitly rules out practitioner traction');
assert.ok(fs.existsSync(path.join(project, 'assets', 'lessons', receiverLedStretch.image)));
const kneadArtwork = evaluate('lessonArtworkByType.knead');
assert.equal(kneadArtwork.image, 'lesson-05-kneading-sequence.webp');
assert.match(kneadArtwork.alt, /Three-frame sequence/);
assert.match(kneadArtwork.caption, /gather a little.*release fully.*Never pinch/);
assert.ok(fs.existsSync(path.join(project, 'assets', 'lessons', kneadArtwork.image)));
assert.match(evaluate('lessonPage(5)'), /lesson-05-kneading-sequence\.webp/, 'Lesson 5 renders the three-stage kneading sequence');
assert.match(evaluate('quickVersion(lessons[4])'), /lesson-05-kneading-sequence\.webp/, 'Kneading Quick Practice uses the same teaching visual');
const wristCuePath = 'M480 260 A34 34 0 1 1 478 259';
assert.ok(evaluate("handMovementCueSvg('gentle-wrist-circles')").includes(wristCuePath), 'The wrist circle overlay is centered on the photographed fingertip contact');
assert.ok(fs.readFileSync(path.join(project, 'assets', 'lessons', 'movement-cues', 'gentle-wrist-circles.svg'), 'utf8').includes(wristCuePath), 'Follow Along uses the same photo-checked wrist cue');
const handFollowAlongStages = evaluate('routineCoachedStages(routineData[7])');
const fingerStretchStage = handFollowAlongStages.find(stage => stage.techniqueId === 'gentle-finger-stretch');
assert.equal(fingerStretchStage.image, receiverLedStretch.image, 'Hand Follow Along uses the receiver-led finger image');
assert.match(fingerStretchStage.short, /receiver.*themselves/i);
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
  assert.match(detailedLesson, /data-sequence-item="1" aria-current="step"/, 'Detailed lessons begin with their first keyboard step selected');
  assert.equal(evaluate(`lessons[${id - 1}].quiz.length`), 2);
}
const pages = ['home()', 'course()', 'techniques()', 'areas()', 'routines()', 'safety()', 'progressPage()', 'reference()', 'pressurePointsPage()', 'handMassagePage()', 'quickPracticePage()', 'notFound()'];
pages.forEach(page => { const html = evaluate(page); assert.ok(html.includes('<main'), page); checkAssets(html); });
assert.match(evaluate('progressPage()'), /0 \/ 9/);
const homeMarkup = evaluate('progress.completed = []; progress.current = 1; progress.started = false; progress.practiceCompleted = []; progress.routineCompleted = []; home()');
assert.match(homeMarkup, /href="\/lessons\/1">Start Lesson 1/);
assert.match(homeMarkup, /href="\/quick-practice"/);
assert.match(homeMarkup, /href="\/routines"[^>]*>Or follow a short routine/);
assert.equal((homeMarkup.match(/class="goal-card /g) || []).length, 3, 'The home page keeps its focused body-area shortcuts to three');
assert.ok(!homeMarkup.includes('continue-panel'), 'The homepage has one primary learning action, not a duplicated continue card');
const resumedHome = evaluate('progress.completed = [1, 2]; progress.current = 3; progress.started = true; home()');
assert.match(resumedHome, /href="\/lessons\/3">Continue Lesson 03/);
assert.equal((resumedHome.match(/home-primary-actions/g) || []).length, 1, 'Returning learners get one clear continuation area');
const completedHome = evaluate('progress.completed = lessons.map(item => item.id); home()');
assert.match(completedHome, /href="\/quick-practice">Practice a skill/);
evaluate('progress.completed = []; progress.current = 1; progress.started = false; progress.practiceCompleted = []; progress.routineCompleted = []; progress.visualSequencesCompleted = []');
const exploreMarkup = evaluate('reference()');
for (const href of ['/hand-massage', '/lessons/9', '/pressure-points', '/techniques', '/body-areas']) assert.ok(exploreMarkup.includes('href="' + href + '"'), 'Explore should link directly to ' + href);
const courseMarkup = evaluate('course()');
assert.match(courseMarkup, /data-sequence="course-lessons"/);
assert.equal((courseMarkup.match(/data-sequence-item="lesson-/g) || []).length, 13, 'The course map exposes all 13 lessons as an ordered keyboard sequence');
assert.equal((courseMarkup.match(/data-sequence-next aria-label="Next course lesson"/g) || []).length, 1, 'Course navigation has one shared Next control');
const techniquesMarkup = evaluate('techniques()');
assert.match(techniquesMarkup, /data-sequence="technique-library"/);
assert.equal((techniquesMarkup.match(/data-sequence-item="technique-/g) || []).length, evaluate('libraryItems.length'), 'Technique search results are navigable in their filtered order');
assert.ok(!evaluate('areas()').includes('data-sequence='), 'Body Areas remains a normal accessible grid, not an imposed arrow sequence');
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
for (const [routineIndex, stageIndex, techniqueId] of [
  [0, 1, 'forearm-glide'], [1, 1, 'shoulder-glide'], [1, 2, 'shoulder-circles'],
  [2, 1, 'upper-back-glide'], [2, 2, 'shoulder-circles'], [3, 1, 'scalp-circles'],
  [3, 2, 'scalp-glide'], [4, 1, 'forearm-glide'], [5, 1, 'shoulder-glide'],
  [5, 2, 'shoulder-circles'], [6, 1, 'forearm-glide'], [6, 2, 'forearm-circles']
]) {
  const stage = evaluate(`routineCoachedStages(routineData[${routineIndex}])[${stageIndex}]`);
  assert.equal(stage.techniqueId, techniqueId, 'Routine movement cue matches the action and specific visual');
  assert.match(evaluate(`handMovementCueSvg(${JSON.stringify(techniqueId)}, 'follow-motion-cue')`), /marker-end=/);
  const cuePath = evaluate(`routineMotionCueSrc(${JSON.stringify(techniqueId)})`);
  assert.ok(cuePath, 'Every mapped routine movement has a dedicated aligned cue image');
  assert.ok(fs.existsSync(path.join(project, cuePath.slice(1))));
}
const routineMarkup = evaluate('routines()');
assert.match(routineMarkup, /<img class="follow-motion-cue" alt="" aria-hidden="true" hidden/, 'Follow Along provides a photo-aligned movement-image layer');
assert.equal((routineMarkup.match(/START FOLLOW ALONG/g) || []).length, 9);
assert.match(routineMarkup, /Hand &amp; Fingers · 8 min/);
assert.equal((routineMarkup.match(/class="routine-preview"/g) || []).length, 9, 'All nine routine outlines stay available as optional previews');
assert.ok(!routineMarkup.includes('class="coached-practice"'), 'Routine selection cards do not repeat the full in-player practice instructions');
assert.equal((routineMarkup.match(/class="follow-along-dialog"/g) || []).length, 1);
assert.equal((routineMarkup.match(/class="routine-choice-group"/g) || []).length, 3, 'Routine choices are grouped by intent instead of presented as one undifferentiated list');
assert.equal((routineMarkup.match(/data-routine-index="\d+"/g) || []).length, 9, 'Each routine remains addressable after grouping');
assert.ok(!routineMarkup.includes('Progress stays in this browser. No account required.'), 'Routine progress note is not duplicated on every card');
checkAssets(routineMarkup);
const config = JSON.parse(fs.readFileSync(path.join(project, 'vercel.json'), 'utf8'));
assert.ok(config.rewrites.some(rule => rule.source === '/pressure-points'));
assert.ok(config.rewrites.some(rule => rule.source === '/hand-massage'));
assert.equal(evaluate('handMassageStages().length'), 15);
assert.equal(evaluate('handMassageStages().reduce((sum, stage) => sum + stage.seconds, 0)'), 480);
assert.deepEqual(Array.from(evaluate('handMassageStages().map(stage => stage.image)')), handImages);
const handMarkup = evaluate('handMassagePage()');
assert.equal((handMarkup.match(/class="hand-technique-card"/g) || []).length, 15);
assert.match(handMarkup, /data-sequence-picker="hand-techniques"/);
assert.equal((handMarkup.match(/class="hand-technique-card"[^>]* hidden/g) || []).length, 14, 'Hand learning opens on one technique and keeps the other 14 selectable');
assert.equal((handMarkup.match(/class="pp-point-card"/g) || []).length, 0, 'The hand guide links to the single pressure-point lesson instead of duplicating it');
assert.ok(handMarkup.includes('href="/pressure-points#point-li4"'), 'The optional Hegu reference leads to its canonical lesson');
checkAssets(handMarkup);
const scalpMarkup = evaluate('headScalpQuickPractice(lessons[8])');
assert.equal((scalpMarkup.match(/data-sequence-item=/g) || []).length, 13);
assert.match(scalpMarkup, /data-sequence-picker="scalp-techniques"/);
assert.equal((scalpMarkup.match(/class="scalp-technique-card[^"]*"[^>]* hidden/g) || []).length, 12, 'Scalp learning opens on one technique and keeps the other 12 selectable');
checkAssets(scalpMarkup);
const scalpLift = evaluate("scalpTechniques.find(item => item.id === 'scalp-lifting')");
assert.equal(scalpLift.image, 'scalp-skin-shift.webp', 'Scalp lifting must use the audited no-grip visual');
assert.match(scalpLift.alt, /without gripping or lifting strands/);
assert.ok(fs.existsSync(path.join(project, 'assets', 'lessons', scalpLift.image)));

const pickerGroups = [{ hidden: false }, { hidden: true }];
const picker = { value: 'scalp-gliding' };
const pickerProgress = { textContent: '' };
const pickerRoot = { querySelector(selector) {
  if (selector === '[data-sequence-picker="scalp-techniques"]') return picker;
  if (selector === '[data-sequence-progress]') return pickerProgress;
  return null;
} };
let pickerSequence;
const pickerItems = ['scalp-gliding', 'temple-circles', 'behind-ear'].map((id, index) => {
  const hint = { textContent: '' };
  const heading = { focus() {} };
  return {
    dataset: { sequenceItem: id }, hidden: index !== 0, group: index === 0 ? pickerGroups[0] : pickerGroups[1], attributes: {},
    closest(selector) { return selector === '[data-sequence]' ? pickerSequence : selector === '[data-sequence-group]' ? this.group : null; },
    querySelector(selector) { return selector === '.sequence-key-hint' ? hint : heading; },
    setAttribute(name, value) { this.attributes[name] = value; }, removeAttribute(name) { delete this.attributes[name]; },
    scrollIntoView() {}
  };
});
pickerSequence = {
  dataset: { sequence: 'scalp-techniques' }, parentElement: pickerRoot,
  querySelectorAll(selector) { return selector === '[data-sequence-item]' ? pickerItems : selector === '[data-sequence-group]' ? pickerGroups : []; },
  querySelector() { return null; }
};
context.__pickerSequenceTest = { pickerSequence, pickerItems };
evaluate('activateLearningSequenceItem(__pickerSequenceTest.pickerSequence, __pickerSequenceTest.pickerItems[1], 1, false)');
assert.equal(picker.value, 'temple-circles');
assert.equal(pickerItems[0].hidden, true);
assert.equal(pickerItems[1].hidden, false);
assert.equal(pickerGroups[0].hidden, true);
assert.equal(pickerGroups[1].hidden, false);
assert.equal(pickerProgress.textContent, 'Technique 2 of 3');
assert.equal(pickerItems[1].attributes['aria-current'], 'step');
assert.equal(evaluate('stepThroughLearningSequence(__pickerSequenceTest.pickerSequence, __pickerSequenceTest.pickerItems[1], 1)'), true);
assert.equal(picker.value, 'behind-ear', 'Next advances through hidden techniques in the full sequence');
assert.equal(pickerItems[2].hidden, false);
let filteredSequence;
const filteredItems = ['first', 'filtered-out', 'last'].map((id, index) => {
  const hint = { textContent: '' };
  const heading = { focus() {} };
  return {
    dataset: { sequenceItem: id }, hidden: index === 1, attributes: {},
    closest(selector) { return selector === '[data-sequence]' ? filteredSequence : selector === '[hidden]' && this.hidden ? this : null; },
    getClientRects() { return this.hidden ? [] : [{}]; },
    querySelector(selector) { return selector === '.sequence-key-hint' ? hint : heading; },
    setAttribute(name, value) { this.attributes[name] = value; }, removeAttribute(name) { delete this.attributes[name]; }, scrollIntoView() {}
  };
});
filteredSequence = { dataset: { sequence: 'technique-library' }, querySelectorAll() { return filteredItems; }, querySelector() { return null; } };
context.__filteredSequenceTest = { filteredSequence, filteredItems };
assert.equal(evaluate('stepThroughLearningSequence(__filteredSequenceTest.filteredSequence, __filteredSequenceTest.filteredItems[0], 1)'), true);
assert.match(filteredItems[2].querySelector('.sequence-key-hint').textContent, /Technique 2 of 2/, 'Filtered sequences announce the visible result count');
const quickHandMarkup = evaluate('handMassageQuickPracticeMarkup(lessons[9])');
assert.equal((quickHandMarkup.match(/class="hand-quick-card"/g) || []).length, 15);
checkAssets(quickHandMarkup);
assert.match(quickHandMarkup, /hand-gentle-finger-stretch-receiver-led\.webp/);
assert.match(quickHandMarkup, /receiver moves, you never pull/i);
const handPageMarkup = evaluate('handMassagePage()');
assert.match(handPageMarkup, /hand-gentle-finger-stretch-receiver-led\.webp/);
assert.match(handPageMarkup, /receiver moves, you never pull/i);
assert.equal((quickHandMarkup.match(/class="hand-motion-cue"/g) || []).length, 1, 'The forearm-circle step needs its circular motion cue');
for (let i = 0; i < 6; i++) {
  const point = evaluate(`pressurePoints[${i}]`);
  const visual = evaluate(`pressurePointVisualMarkup(pressurePoints[${i}].id)`);
  const card = evaluate(`pressurePointCard(pressurePoints[${i}], ${i})`);
  assert.match(visual, new RegExp(point.id + '\\.webp'));
  assert.match(visual, /pp-photo-marker/);
  assert.match(visual, /View labeled landmark map/);
  assert.match(visual, new RegExp('aria-labelledby="' + point.id + '-title ' + point.id + '-desc"'), 'Each point reveals its own named, accessible landmark diagram');
  checkAssets(visual);
  if (i > 0) assert.ok(card.includes('aria-label="Previous point: ' + evaluate(`pressurePoints[${i - 1}].name`) + '"'));
  if (i < 5) assert.ok(card.includes('aria-label="Next point: ' + evaluate(`pressurePoints[${i + 1}].name`) + '"'));
}
const pressureMarkup = evaluate('pressurePointsPage()');
for (const area of expectedAreas) assert.ok(pressureMarkup.includes('>' + evaluate('esc(' + JSON.stringify(area) + ')') + '</h2>'), 'Missing pressure area: ' + area);
assert.match(pressureMarkup, /18 body areas/);
assert.equal((pressureMarkup.match(/<option value="(?:all|[a-z0-9-]+)">/g) || []).length, 19, 'Pressure-point filtering keeps all areas in one compact accessible selector');
assert.ok(!pressureMarkup.includes('pp-area-chip'), 'Pressure-point filtering no longer renders a wall of area buttons');
assert.equal((pressureMarkup.match(/class="pp-region-note pp-area-note"/g) || []).length, 12, 'Areas without verified point lessons stay available as compact, collapsed boundaries');
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
assert.deepEqual(Array.from(evaluate('Array.from(movementCueLessons)')), [3, 4, 7, 10], 'Only photo-verified paths receive movement arrows');
const visualDialogMarkup = evaluate('window.CraftVisualLearning.dialogMarkup()');
assert.match(visualDialogMarkup, /Technique-matched photo/);
assert.match(visualDialogMarkup, /<strong>CHECK<\/strong>/, 'The guide gives one action and a concise check');
assert.match(visualDialogMarkup, /<dt>HAND<\/dt>[\s\S]*<dt>PRESSURE<\/dt>/);
assert.match(visualDialogMarkup, /<summary>Technique safety and boundaries<\/summary>/);
assert.doesNotMatch(visualDialogMarkup, /visual-learning-body|visual-learning-direction/, 'Area is already in the step header; direction stays in the action, not a duplicate cue card');
assert.match(evaluate('practiceMotionByLesson[3]'), /markerUnits="userSpaceOnUse" markerWidth="38"/);
assert.match(evaluate('practiceMotionByLesson[3]'), /M230 662 C300 650 380 635 460 623/);
assert.match(evaluate('practiceMotionByLesson[4]'), /M920 545 C920 495 970 465 1015 485/);
const armGuide = evaluate("window.CraftVisualLearning.getSequence('lesson:10')");
assert.match(armGuide.steps[0].instruction, /Support the elbow and wrist/);
assert.doesNotMatch(armGuide.steps[0].instruction, /glide/i, 'The setup slide no longer repeats the movement before its visual cue');
assert.match(armGuide.steps[3].instruction, /Glide from just above the wrist toward the elbow/);
assert.match(armGuide.steps[5].instruction, /Repeat the same smooth forearm path/);
assert.match(armGuide.steps[4].instruction, /Pause and ask whether the contact feels comfortable/);
assert.match(armGuide.steps[4].what, /Stay on the named soft area/);
assert.doesNotMatch(evaluate('quickVersion(lessons[10])'), /class="practice-motion"/, 'The calf image no longer carries a misaligned arrow');
const visualImages = [];
for (const key of visualKeys) {
  const sequence = evaluate(`window.CraftVisualLearning.getSequence(${JSON.stringify(key)})`);
  assert.ok(sequence, 'Missing visual sequence: ' + key);
  const expectedStepCount = key.startsWith('point:') ? 8 : 7;
  assert.equal(sequence.steps.length, expectedStepCount, 'Guides keep the concise, ordered visual flow: ' + key);
  assert.ok(sequence.title && sequence.area && sequence.image && sequence.alt && sequence.hand && sequence.direction && sequence.pressure && sequence.avoid && sequence.safety);
  assert.ok(fs.existsSync(path.join(project, 'assets', 'lessons', sequence.image)), 'Missing sequence visual: ' + sequence.image);
  assert.ok(sequence.steps.every(step => step.title && step.instruction && step.what && step.hand && step.direction && step.pressure && step.avoid));
  visualImages.push(sequence.image);
  for (let step = 1; step <= sequence.steps.length; step++) {
    const markup = evaluate(`window.CraftVisualLearning.stageVisualMarkup(window.CraftVisualLearning.getSequence(${JSON.stringify(key)}), window.CraftVisualLearning.getSequence(${JSON.stringify(key)}).steps[${step - 1}])`);
    assert.match(markup, new RegExp('data-visual-step="' + step + '"'));
    if (key.startsWith('lesson:')) {
      const lessonId = Number(key.slice(7));
      const stepData = sequence.steps[step - 1];
      const shouldShowMotion = [3, 4, 7, 10].includes(lessonId) && stepData.phase === 1;
      assert.equal(markup.includes('class="visual-learning-motion"'), shouldShowMotion,
        'Only matching movement steps show verified arrows: ' + key + ' step ' + step);
      if (shouldShowMotion) assert.match(markup, /markerUnits="userSpaceOnUse"/);
    }
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
assert.equal(typeof evaluate('window.CraftVisualLearning.navigate'), 'function', 'The visual guide exposes its shared navigation action');
assert.equal(documentHandlerCounts.keydown, 1, 'The app installs exactly one global keydown handler before rendering');
assert.equal(documentHandlerOptions.keydown, true, 'The app-level handler captures keys before overlays can intercept them');
const visualProgress = fs.readFileSync(path.join(project, 'app.js'), 'utf8');
assert.match(visualProgress, /visualSequencesCompleted/);
assert.ok(fs.readFileSync(path.join(project, 'index.html'), 'utf8').includes('/visual-learning.js'));
const followDialogMarkup = evaluate('followAlongDialogMarkup()');
assert.match(followDialogMarkup, /follow-control-dock/);
assert.ok(!followDialogMarkup.includes('visual-learning-trigger'), 'Follow Along does not expose a redundant second visual-guide action');

function element() {
  return { hidden: false, disabled: false, textContent: '', dataset: {}, listeners: {}, attributes: {}, addEventListener(name, callback) { this.listeners[name] = callback; }, click() { if (this.listeners.click) this.listeners.click({ target: this }); }, focus() {}, setAttribute(name, value) { this.attributes[name] = value; }, removeAttribute(name) { delete this.attributes[name]; } };
}
function makeRoot(key, withImage = false) {
  const elements = new Map();
  return { dataset: { coachSession: key }, isConnected: true, classList: { add() {}, remove() {} },
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
    removeAttribute(name) { if (name === 'src') this.src = ''; },
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
    if (routineId < 7 && stage.techniqueId) {
      const cue = followDialog.querySelector('.follow-motion-cue');
      assert.equal(cue.hidden, false, 'Matching routine movement cues become visible for ' + stage.technique);
      assert.equal(cue.src, evaluate(`routineMotionCueSrc(${JSON.stringify(stage.techniqueId)})`), 'Visible routine cue uses its technique-matched vector image');
    }
    if (routineId === 7 && stage.techniqueId === 'gentle-wrist-circles') {
      assert.equal(followDialog.querySelector('.follow-motion-cue').hidden, false);
      assert.equal(followDialog.querySelector('.follow-motion-cue').src, '/assets/lessons/movement-cues/gentle-wrist-circles.svg');
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
  assert.equal(routineStatusNodes[routineId].hidden, false, 'Routine completion immediately reveals the card status');
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
assert.ok(evaluate('progressPage()').includes('9 / 9'), 'The simplified progress summary reports all completed routines');
savedProgress = JSON.stringify({ completed: [2], current: 3, practiceCompleted: [8], scalpPracticeCompleted: ['small-circles'], visualSequencesCompleted: ['hand:palm-gliding', 'not-a-sequence'] });
const upgradedProgress = evaluate('loadProgress()');
assert.deepEqual(Array.from(upgradedProgress.completed), [2], 'Older local progress remains readable');
assert.deepEqual(Array.from(upgradedProgress.practiceCompleted), [8], 'Older practice progress remains readable');
assert.deepEqual(Array.from(upgradedProgress.routineCompleted), [], 'Older progress gets an empty routine-completion list');
assert.deepEqual(Array.from(upgradedProgress.visualSequencesCompleted), ['hand:palm-gliding'], 'Visual guide progress is validated without dropping existing progress');

// Arrow keys navigate sequences but never consume arrows while typing/searching.
evaluate('bindLearningArrowKeys()');
let focusedSequenceItem = null;
function makeSequenceItem(id, index) {
  const attributes = {};
  const hint = element();
  return {
    id,
    closest(selector) { return selector === '[data-sequence]' ? handSequence : null; },
    getClientRects() { return [1]; },
    getBoundingClientRect() { return { top: 350 + index * 120, bottom: 450 + index * 120 }; },
    scrollIntoView() {},
    setAttribute(name, value) { attributes[name] = value; },
    removeAttribute(name) { delete attributes[name]; },
    getAttribute(name) { return attributes[name] || null; },
    querySelector(selector) {
      if (selector === '.sequence-key-hint') return hint;
      if (selector === '[data-sequence-next]') return index < 1 ? { disabled: false, click() { moveMockSequence(index, 1); } } : null;
      if (selector === '[data-sequence-previous]') return index > 0 ? { disabled: false, click() { moveMockSequence(index, -1); } } : null;
      return { focus() { focusedSequenceItem = id; } };
    }
  };
}
const sequenceItems = [makeSequenceItem('hand-1', 0), makeSequenceItem('hand-2', 1)];
function moveMockSequence(index, direction) {
  const next = sequenceItems[index + direction];
  if (!next) return false;
  sequenceItems.forEach(item => item.removeAttribute('aria-current'));
  next.setAttribute('aria-current', 'step');
  focusedSequenceItem = next.id;
  return true;
}
const handSequence = {
  dataset: { sequence: 'hand-techniques' },
  querySelectorAll() { return sequenceItems; },
  querySelector() { return null; }
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
assert.equal(sendArrow('ArrowRight', { closest() { return null; } }), true, 'Arrow keys work when an active learning sequence has no focused control');
assert.equal(focusedSequenceItem, 'hand-2', 'No-focus navigation advances the sequence item nearest the viewport');
sequenceItems.forEach(item => item.removeAttribute('aria-current'));
assert.equal(sendArrow('ArrowRight', makeSequenceTarget(null)), true, 'An unselected sequence starts at its first item when moving forward');
assert.equal(focusedSequenceItem, 'hand-1');
sequenceItems.forEach(item => item.removeAttribute('aria-current'));
assert.equal(sendArrow('ArrowLeft', makeSequenceTarget(null)), true, 'An unselected sequence starts at its last item when moving backward');
assert.equal(focusedSequenceItem, 'hand-2');

// Quick Practice uses its own controls; lessons do not skip ahead before a step sequence is finished.
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
const lessonSequence = { dataset: { sequence: 'lesson-page' }, querySelectorAll() { return []; }, querySelector(selector) { return selector === '.lesson-footer' ? lessonFooter : selector === '.sequence-key-hint' ? lessonHint : null; } };
const lessonTarget = { closest(selector) { return selector === '[data-sequence]' ? lessonSequence : null; } };
keyboardSequences = [];
assert.equal(sendArrow('ArrowRight', lessonTarget), false, 'A lesson page without an active step sequence does not jump ahead');
assert.equal(lessonNextClicks, 0, 'Lesson navigation waits until the current step sequence is complete');

let lessonBoundaryPrevious = 0;
let lessonBoundaryNext = 0;
let focusedLessonStep = null;
const lessonStepHints = [element(), element()];
const lessonStepItems = [0, 1].map(index => ({
  closest(selector) { return selector === '[data-sequence]' ? lessonSteps : null; },
  getClientRects() { return [1]; },
  scrollIntoView() {}, setAttribute() {}, removeAttribute() {},
  querySelector(selector) {
    if (selector === '.sequence-key-hint') return lessonStepHints[index];
    if (selector === '[data-sequence-next]') return index === 0 ? { disabled: false, click() { moveMockLessonStep(index, 1); } } : null;
    if (selector === '[data-sequence-previous]') return index === 1 ? { disabled: false, click() { moveMockLessonStep(index, -1); } } : null;
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
function moveMockLessonStep(index, direction) {
  const next = lessonStepItems[index + direction];
  if (!next) return false;
  lessonStepItems.forEach(item => item.removeAttribute('aria-current'));
  next.setAttribute('aria-current', 'step');
  focusedLessonStep = index + direction;
  lessonStepHints[index + direction].textContent = 'Step ' + (index + direction + 1) + ' of ' + lessonStepItems.length;
  return true;
}
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
assert.equal(sendArrow('ArrowRight', { closest() { return null; } }), true, 'The active guided session works without sequence focus');
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

// Full-screen Follow Along uses its visible controls even if focus is outside its dialog.
followStarts[0].click();
const followTarget = { inFollowDialog: false, closest() { return null; } };
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
  const title = element();
  title.focus = function (options) { this.focused = true; this.focusOptions = options; };
  const phases = Array.from({ length: 4 }, () => element());
  return {
    open: false, scrollTop: 80, listeners: {},
    querySelector(selector) {
      if (selector === '#visual-learning-title') return title;
      if (!elements.has(selector)) elements.set(selector, element());
      return elements.get(selector);
    },
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
const visualTarget = { inVisualDialog: false, closest() { return null; } };
assert.equal(sendArrow('ArrowRight', visualTarget), true);
assert.match(visualDialog.querySelector('.visual-learning-count').textContent, /TECHNIQUE 1 OF 15 · STEP 2 OF 7/);
assert.match(visualDialog.querySelector('.visual-learning-art').innerHTML, /data-visual-step="2"/);
visualDialog.querySelector('.visual-learning-safety-details').open = true;
visualDialog.querySelector('.visual-learning-next').click();
assert.match(visualDialog.querySelector('.visual-learning-count').textContent, /STEP 3 OF 7/, 'The visible Next button uses the same visual-step action');
assert.equal(visualDialog.querySelector('.visual-learning-safety-details').open, false, 'Moving to a new slide closes expanded safety detail so the current step remains easy to scan');
assert.equal(visualDialog.scrollTop, 0, 'Moving to a new slide restores the visual-first top on narrow screens');
assert.equal(visualDialog.querySelector('#visual-learning-title').focusOptions.preventScroll, true, 'Slide changes keep keyboard focus accessible without forcing scroll to the controls');
assert.equal(sendArrow('ArrowLeft', visualTarget), true);
assert.match(visualDialog.querySelector('.visual-learning-count').textContent, /STEP 2 OF 7/, 'ArrowLeft reverses the visible Next action');
visualDialog.querySelector('.visual-learning-previous').click();
assert.match(visualDialog.querySelector('.visual-learning-count').textContent, /STEP 1 OF 7/, 'The visible Previous button uses the same visual-step action');
assert.equal(sendArrow('ArrowRight', visualTarget), true);
assert.match(visualDialog.querySelector('.visual-learning-count').textContent, /STEP 2 OF 7/);
for (let step = 2; step < 7; step++) assert.equal(sendArrow('ArrowRight', visualTarget), true);
assert.match(visualDialog.querySelector('.visual-learning-count').textContent, /STEP 7 OF 7/);
assert.equal(visualDialog.querySelector('.visual-learning-next').textContent, 'Next technique →');
assert.equal(sendArrow('ArrowRight', visualTarget), true);
assert.match(visualDialog.querySelector('.visual-learning-count').textContent, /TECHNIQUE 2 OF 15 · STEP 1 OF 7/);
assert.equal(visualDialog.querySelector('.visual-learning-previous').disabled, false, 'The previous technique button works at a guide boundary');
assert.ok(evaluate('progress.visualSequencesCompleted.includes("hand:" + handMassageTechniques[0].id)'), 'Moving beyond a guide marks the finished technique');
assert.match(visualDialog.querySelector('.visual-learning-art').innerHTML, /hand-palm-circles/);
assert.equal(sendArrow('ArrowLeft', visualTarget), true);
assert.match(visualDialog.querySelector('.visual-learning-count').textContent, /TECHNIQUE 1 OF 15 · STEP 7 OF 7/);
evaluate('window.CraftVisualLearning.close()');
assert.equal(visualDialog.open, false);
assert.equal(visualTrigger.focused, true, 'Closing the visual guide returns focus to its opener');

const finalHandKey = 'hand:' + evaluate('handMassageTechniques[14].id');
const finalHandTrigger = Object.assign(element(), { isConnected: true, focus() { this.focused = true; } });
finalHandTrigger.dataset.visualLearning = finalHandKey;
finalHandTrigger.closest = selector => selector === '[data-visual-learning]' ? finalHandTrigger : null;
documentHandlers.click({ target: finalHandTrigger });
for (let step = 1; step < 7; step++) assert.equal(sendArrow('ArrowRight', visualTarget), true);
assert.equal(visualDialog.querySelector('.visual-learning-next').textContent, 'Finish', 'The final guide has a clear finish boundary');
assert.equal(sendArrow('ArrowRight', visualTarget), true);
assert.equal(visualDialog.open, false, 'The final guide closes instead of jumping into an unrelated group');
assert.ok(evaluate('progress.visualSequencesCompleted.includes("hand:" + handMassageTechniques[14].id)'));

console.log('PASS: all 47 visual guides (41 × 7 steps, 6 × 8 point steps) and 335 step frames; 47 unique technique visuals; photo-verified, movement-only arrows; concise, non-repetitive guide cues; mobile visual-first scroll and focus reset; cross-guide slide navigation and progress; all routine-stage mappings and image assets; timer start/pause/resume/complete; all 9 Follow Along routines; keyboard boundaries, repeat protection, input protection, guided stages, Space pause/resume, modal priority, exit, repeat, and local progress preservation.');
