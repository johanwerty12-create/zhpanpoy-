// Shared follow-along flow. Times are practice prompts, not pressure doses.
const coachedSessions = new Map();
let activeRoutineFollowAlong = null;
let activeCoachedSessionKey = null;

function comfortCoachMarkup(lesson) {
  const heading = lesson.id === 8 ? 'Start light · check comfort · keep the head supported' : 'Start light · check comfort · adjust slowly';
  return '<aside class="comfort-coach" aria-label="Comfort and relaxed hands"><h3>' + heading + '</h3><p>' + esc(lesson.pressure[0]) + '</p><p>' + esc(lesson.pressure[1]) + '</p><p><strong>Say:</strong> “Does this feel comfortable? If you want lighter pressure, let me know.”</p><p>Keep shoulders loose, wrists comfortable, elbows soft, and breathing normal. Slow down or switch hands if you tense. More pressure does not automatically mean better massage.</p><p class="comfort-stop">Stop for sharp or unusual pain, numbness, tingling, dizziness, faintness, or unusual weakness. The timer never overrides comfort.</p></aside>';
}

function lessonCoachedStages(lesson) {
  const guide = quickPracticeGuides[lesson.id];
  const duration = lesson.id === 13 ? 120 : 60;
  return guide.steps.map(function (instruction, i) {
    return { title: ['Settle and check', 'Move at an easy pace', 'Soften and finish'][i], instruction, seconds: i === 1 ? duration / 2 : duration / 4 };
  });
}

function scalpCoachedStages(technique) {
  const middle = technique.duration - 20;
  return technique.how.map(function (instruction, i) {
    return { title: ['Settle and check', 'Small, gentle action', 'Soften and finish'][i], instruction, seconds: i === 1 ? middle : 10 };
  });
}

function handMovementCueSvg(techniqueId, className) {
  const paths = {
    'gentle-wrist-circles': ['M480 218 A42 42 0 1 1 478 217'],
    'forearm-glide': ['M290 436 C395 429 500 420 615 410'],
    'shoulder-glide': ['M485 430 C430 424 370 420 310 416', 'M565 430 C625 424 690 420 755 416'],
    'shoulder-circles': ['M635 376 C635 342 670 321 700 335 C736 350 736 393 704 411 C676 427 642 407 637 383'],
    'upper-back-glide': ['M360 470 C350 425 337 382 318 340', 'M640 470 C650 425 663 382 682 340'],
    'forearm-circles': ['M395 338 C395 315 417 296 441 307 C465 318 464 346 442 359 C420 372 396 356 395 338'],
    'scalp-circles': ['M345 310 C345 286 371 271 393 281 C418 292 417 317 395 330 C372 343 348 328 345 310', 'M655 310 C655 286 629 271 607 281 C582 292 583 317 605 330 C628 343 652 328 655 310'],
    'scalp-glide': ['M362 316 C357 275 352 233 348 190', 'M638 316 C643 275 648 233 652 190']
  }[techniqueId];
  if (!paths) return '';
  const cueClass = className || 'hand-motion-cue';
  const markerId = 'movement-arrow-' + cueClass + '-' + techniqueId;
  const arrows = paths.map(function (path) {
    return '<path class="movement-trail-shadow" d="' + path + '"/><path class="movement-trail" d="' + path + '" marker-end="url(#' + markerId + ')"/>';
  }).join('');
  return '<svg class="' + cueClass + '" viewBox="0 0 1000 750" aria-hidden="true"><defs><marker id="' + markerId + '" markerWidth="15" markerHeight="15" refX="12" refY="7.5" markerUnits="userSpaceOnUse" orient="auto"><path class="movement-arrowhead" d="M0 0L15 7.5L0 15z"/></marker></defs>' + arrows + '</svg>';
}

const routineMotionCueImages = {
  'forearm-glide': 'forearm-glide.svg',
  'shoulder-glide': 'shoulder-glide.svg',
  'shoulder-circles': 'shoulder-circles.svg',
  'upper-back-glide': 'upper-back-glide.svg',
  'forearm-circles': 'forearm-circles.svg',
  'scalp-circles': 'scalp-circles.svg',
  'scalp-glide': 'scalp-glide.svg',
  'gentle-wrist-circles': 'gentle-wrist-circles.svg'
};

function routineMotionCueSrc(techniqueId) {
  const image = routineMotionCueImages[techniqueId];
  return image ? '/assets/lessons/movement-cues/' + image : '';
}

const routineFollowAlongGuides = [
  [
    { area: 'Forearm', technique: 'Still palm contact', short: 'Support the elbow and wrist. Lower a relaxed palm only after permission.', direction: 'Rest in place; keep the wrist comfortably supported.', pressure: 'Light resting contact. Do not press down.', image: 'lesson-10-arm-hand.webp', alt: 'A relaxed palm rests on a cushioned forearm while the wrist is supported.' },
    { area: 'Forearm', technique: 'Broad forearm gliding', short: 'Use a broad, relaxed palm and a slow, easy stroke.', direction: 'Glide from wrist toward elbow; soften as you return.', pressure: 'Light to comfortable. No pressure on the wrist or elbow.', image: 'lesson-03-gliding.webp', alt: 'A broad palm glides along a supported forearm.', techniqueId: 'forearm-glide' },
    { area: 'Forearm', technique: 'Lighter finishing strokes', short: 'Repeat a familiar stroke more slowly, then let the hand rest.', direction: 'Short glides toward the elbow; ease off on the return.', pressure: 'Lighten gradually, then still contact.', image: 'lesson-03-gliding.webp', alt: 'A broad palm rests along the forearm for a gentle finishing stroke.' }
  ],
  [
    { area: 'Shoulders', technique: 'Still shoulder contact', short: 'Support the arms and rest open palms on soft shoulder muscle.', direction: 'Settle in place; keep away from the neck and shoulder tips.', pressure: 'Light resting contact. Do not push down.', image: 'lesson-06-shoulders.webp', alt: 'Open relaxed palms rest on the soft back shoulder muscles.' },
    { area: 'Shoulders', technique: 'Broad shoulder gliding', short: 'Move slowly over soft muscle and pause before the bony shoulder tip.', direction: 'Glide outward across the shoulder; soften on each return.', pressure: 'Light to comfortable. Keep clear of the neck and bones.', image: 'lesson-06-shoulders.webp', alt: 'Broad palm contact is placed on supported shoulder muscle.', techniqueId: 'shoulder-glide' },
    { area: 'Shoulders', technique: 'Small palm circles', short: 'If welcomed, make a few tiny circles with a relaxed palm.', direction: 'Circle gently in one small area; release before shifting.', pressure: 'Light, broad contact. Skip if the person braces.', image: 'lesson-04-circles-relaxed.webp', alt: 'A relaxed palm rests on soft back shoulder muscle for small circles.', techniqueId: 'shoulder-circles' },
    { area: 'Shoulders', technique: 'Lighter shoulder strokes', short: 'Return to the familiar broad stroke and slow it down.', direction: 'Glide outward across soft shoulder muscle; ease off as you return.', pressure: 'Lighten gradually, then rest your hands.', image: 'lesson-06-shoulders.webp', alt: 'Broad relaxed hand contact rests over the shoulders for a gentle finish.' }
  ],
  [
    { area: 'Upper back', technique: 'Settle and warm', short: 'Ask permission, support the body, and lower broad hands gently.', direction: 'Rest beside the spine; begin with slow, short glides toward the shoulders.', pressure: 'Light, broad contact. Never press on the spine.', image: 'lesson-07-upper-back.webp', alt: 'Both relaxed palms rest on the upper back beside the spine.' },
    { area: 'Upper back', technique: 'Broad upper-back gliding', short: 'Follow a wide, easy path over the back muscles.', direction: 'Glide from beside the shoulder blades toward the shoulders; soften on return.', pressure: 'Light to comfortable. Stay off the spine and neck.', image: 'lesson-07-upper-back.webp', alt: 'Broad palms contact the upper-back muscles on either side of the spine.', techniqueId: 'upper-back-glide' },
    { area: 'Back of shoulder', technique: 'Optional palm circles', short: 'If wanted, add a few small circles, alternating with broad strokes.', direction: 'Circle in place on soft shoulder muscle; release before changing zones.', pressure: 'Light and brief. Skip focused work if it is unwelcome.', image: 'lesson-04-circles-relaxed.webp', alt: 'A relaxed broad palm rests on the back shoulder muscle.', techniqueId: 'shoulder-circles' },
    { area: 'Upper back', technique: 'Reconnect with broad strokes', short: 'Return to the easiest familiar contact and check comfort.', direction: 'Glide toward the shoulders beside the spine; ease off on return.', pressure: 'Comfortable and light; reduce it if asked.', image: 'lesson-07-upper-back.webp', alt: 'Both palms rest broadly on the upper back beside the spine.' },
    { area: 'Upper back', technique: 'Slow closing strokes', short: 'Slow and lighten familiar strokes, then rest before easing away.', direction: 'Use a shorter, softer path toward the shoulders; release gradually.', pressure: 'Very light by the end.', image: 'lesson-07-upper-back.webp', alt: 'Soft, broad hand contact on the upper back for a gradual finish.' }
  ],
  [
    { area: 'Scalp', technique: 'Still fingertip contact', short: 'Support the head with a pillow and settle soft finger pads gently.', direction: 'Rest in place; keep the head still and do not tug hair.', pressure: 'Feather-light. No digging or nail contact.', image: 'scalp-whole-sequence.webp', alt: 'Both relaxed hands make soft, supported contact around the scalp.' },
    { area: 'Scalp', technique: 'Small scalp circles', short: 'Use soft pads for tiny circles, then release before changing zones.', direction: 'Circle in one small area; lift or lighten before moving.', pressure: 'Very light. Stop if hair catches or the scalp feels tender.', image: 'scalp-small-circles.webp', alt: 'Soft finger pads make small circles on the scalp.', techniqueId: 'scalp-circles' },
    { area: 'Scalp', technique: 'Gentle scalp gliding', short: 'Return to soft pads and glide only if the scalp and hair are comfortable.', direction: 'Move lightly from the hairline toward the crown; ease off before returning.', pressure: 'Feather-light. Skip if hair drags.', image: 'scalp-gliding.webp', alt: 'Soft finger pads glide gently along the scalp near the hairline.', techniqueId: 'scalp-glide' },
    { area: 'Scalp', technique: 'Still contact and slow release', short: 'Let movement become quiet, rest softly, then ease your hands away.', direction: 'Pause in place; release without moving the head.', pressure: 'Feather-light, then no pressure.', image: 'scalp-whole-sequence.webp', alt: 'Two relaxed hands rest gently on the supported scalp before release.' }
  ],
  [
    { area: 'Arm and hand', technique: 'Support and settle', short: 'Rest the elbow and wrist on cushions before asking about contact.', direction: 'Lower a broad palm gently; keep the wrist neutral.', pressure: 'Light resting contact. No squeezing.', image: 'lesson-10-arm-hand.webp', alt: 'A broad relaxed hand rests on a fully supported forearm.' },
    { area: 'Forearm', technique: 'Forearm gliding', short: 'Make slow, broad strokes along the supported forearm.', direction: 'Move toward the elbow; soften on the return and stop before the joint.', pressure: 'Light to comfortable; check in.', image: 'lesson-03-gliding.webp', alt: 'A relaxed palm glides along a cushioned forearm.', techniqueId: 'forearm-glide' },
    { area: 'Palm', technique: 'Optional palm circles', short: 'Turn the palm up only if comfortable; support it and make tiny circles.', direction: 'Circle lightly on the fleshy palm; keep off creases and joints.', pressure: 'Soft finger pads; almost no squeeze.', image: 'hand-palm-contact.webp', alt: 'Soft finger pads rest on the fleshy palm while the wrist is supported.' },
    { area: 'Fingers', technique: 'Optional finger strokes', short: 'Lay soft pads along one relaxed finger; lift before its tip.', direction: 'Stroke from base toward tip. Never pinch, bend, or pull.', pressure: 'Almost weightless; stop if skin drags.', image: 'hand-finger-stroke.webp', alt: 'Soft flat finger pads contact one relaxed finger near its base.' },
    { area: 'Forearm', technique: 'Quiet finishing strokes', short: 'Return to lighter strokes, rest the hand, then release gradually.', direction: 'Use short strokes toward the elbow; ease off on return.', pressure: 'Lighten to still contact, then lift.', image: 'lesson-10-arm-hand.webp', alt: 'A supported forearm receives a final broad, light stroke.' }
  ],
  [
    { area: 'Shoulders', technique: 'Still shoulder contact', short: 'Ask permission, support the arms, and settle relaxed palms on soft muscle.', direction: 'Rest away from the neck and the bony shoulder tips.', pressure: 'Light resting contact; do not push.', image: 'lesson-06-shoulders.webp', alt: 'Relaxed palms rest on soft back shoulder muscles.' },
    { area: 'Shoulders', technique: 'Broad outward gliding', short: 'Warm the soft shoulder muscle with slow, broad strokes.', direction: 'Glide outward, clear of the neck; soften before returning.', pressure: 'Light to comfortable, never on bone.', image: 'lesson-06-shoulders.webp', alt: 'Broad palm contact is placed over supported shoulders.', techniqueId: 'shoulder-glide' },
    { area: 'Shoulders', technique: 'Optional small circles', short: 'Check comfort, then alternate a few tiny circles with broad strokes.', direction: 'Circle gently on soft muscle; release before shifting.', pressure: 'Light and brief; skip if the person braces.', image: 'lesson-04-circles-relaxed.webp', alt: 'A relaxed palm rests on soft back shoulder muscle for small circles.', techniqueId: 'shoulder-circles' },
    { area: 'Shoulders', technique: 'Soften and close', short: 'Slow and lighten the familiar strokes, then settle into still contact.', direction: 'Glide outward across soft muscle; ease pressure on return.', pressure: 'Very light by the end; release gradually.', image: 'lesson-06-shoulders.webp', alt: 'Soft, broad hand contact rests over the shoulders for a gentle finish.' }
  ],
  [
    { area: 'Forearm', technique: 'Supported still contact', short: 'Support the forearm and wrist, ask permission, then rest a relaxed palm.', direction: 'Stay still until contact feels comfortable.', pressure: 'Light resting contact; no downward push.', image: 'lesson-10-arm-hand.webp', alt: 'A broad relaxed palm rests on a fully supported forearm.' },
    { area: 'Forearm', technique: 'Broad, easy forearm strokes', short: 'Repeat calm strokes and keep your own shoulders loose.', direction: 'Glide toward the elbow; lighten on every return.', pressure: 'Light to comfortable. Ask whether it still feels easy.', image: 'lesson-03-gliding.webp', alt: 'A relaxed palm glides along a cushioned forearm.', techniqueId: 'forearm-glide' },
    { area: 'Forearm', technique: 'Optional forearm circles', short: 'If wanted, alternate a few tiny finger-pad circles with easy gliding.', direction: 'Circle gently on mid-forearm muscle; move away from wrist and elbow creases.', pressure: 'Light finger-pad contact. Change zones; do not dig.', image: 'follow-along-forearm-circles.webp', alt: 'Soft finger pads rest on mid-forearm while the wrist is supported.', techniqueId: 'forearm-circles' },
    { area: 'Forearm', technique: 'Blend into broad contact', short: 'Let circles soften into familiar strokes and check comfort.', direction: 'Return to easy strokes toward the elbow; ease off as you return.', pressure: 'Light, steady, and comfortable.', image: 'lesson-10-arm-hand.webp', alt: 'A relaxed palm returns to broad contact along a supported forearm.' },
    { area: 'Forearm', technique: 'Slow finishing strokes', short: 'Slow and lighten the strokes, rest your hand, then ease away.', direction: 'Short strokes toward the elbow, gradually becoming still.', pressure: 'Very light, then none.', image: 'lesson-10-arm-hand.webp', alt: 'A supported forearm receives a final light palm stroke.' }
  ]
];

function routineCoachedStages(routine) {
  const routineIndex = routineData.indexOf(routine);
  return routine.steps.map(function (step, index) {
    const amount = Number.parseInt(step[0], 10);
    const seconds = step[0].includes('min') ? amount * 60 : amount;
    const artwork = lessonArtworkForId(step[2]);
    const guide = routineFollowAlongGuides[routineIndex] && routineFollowAlongGuides[routineIndex][index] || {};
    return Object.assign({ title: step[1], instruction: step[3], seconds, lesson: step[2], image: step[4] || artwork.image, alt: step[5] || artwork.alt }, guide);
  });
}

function lessonDetailVisuals(lesson) {
  if (lesson.id !== 10) return '';
  return '<figure class="coach-stage-visual"><img src="/assets/lessons/hand-palm-contact.webp" alt="A cushioned forearm rests palm-up while soft finger pads contact the palm and another relaxed hand supports underneath." width="1448" height="1086" loading="lazy" /><figcaption>Optional palm work: the cushion supports the wrist; use soft finger pads for tiny skin circles, without squeezing or pulling.</figcaption></figure>';
}

function coachedPracticeMarkup(key, stages, withImage) {
  const total = stages.reduce(function (sum, stage) { return sum + stage.seconds; }, 0);
  const first = stages[0];
  return '<section class="coached-practice" data-coach-session="' + esc(key) + '"><p class="coach-time-note">Suggested practice time: ' + formatScalpTime(total) + '. Each stage pauses for a comfort check. Finish earlier whenever needed.</p>' +
    (withImage ? '<figure class="coach-stage-visual"><div class="coach-stage-photo-wrap"><img src="/assets/lessons/' + esc(first.image) + '" alt="' + esc(first.alt) + '" width="1448" height="1086" loading="lazy" /><svg class="coach-motion-cue" viewBox="0 0 1000 750" aria-hidden="true" hidden></svg></div><figcaption>Hand placement for the current stage · use comfortable, light contact.</figcaption></figure>' : '') +
    '<div class="coach-stage-heading"><div><p class="eyebrow coach-stage-count" aria-live="polite" aria-atomic="true">Stage 1 of ' + stages.length + '</p><h3 class="coach-stage-title" tabindex="-1" aria-live="polite" aria-atomic="true">' + esc(first.title) + '</h3></div><output class="coach-time" aria-live="off" aria-label="Suggested time left in current stage">' + formatScalpTime(first.seconds) + '</output></div>' +
    '<p class="coach-instruction">' + esc(first.instruction) + '</p><p class="coach-next">Next: ' + esc(stages[1] ? stages[1].title : 'Finish and check comfort') + '</p>' +
    '<p class="coach-status" role="status" aria-live="polite">Ready when you are. These times are guides; keep an easy rhythm.</p><p class="sequence-key-hint coach-key-hint">← Previous stage · → Next stage · Space pause / resume</p><div class="coach-actions"><button class="button small coach-stage-previous" type="button" aria-label="Previous practice stage">← Previous stage</button><button class="button primary small coach-toggle" type="button">Start guided practice</button><button class="button small coach-continue" type="button" hidden>Comfort checked · continue</button><button class="button small coach-stage-forward" type="button" aria-label="Next practice stage">Next stage →</button><button class="button subtle small coach-restart" type="button">Restart</button><button class="button subtle small coach-end" type="button" hidden>End practice</button></div>' +
    (withImage ? '<a class="coach-lesson-link" href="/lessons/' + first.lesson + '">Review this stage’s lesson →</a>' : '') + '</section>';
}

function followAlongDialogMarkup() {
  return `<dialog class="follow-along-dialog" aria-labelledby="follow-technique-title"><div class="follow-along-shell"><header class="follow-along-header"><div><p class="eyebrow follow-routine-name">Follow Along</p><p class="follow-step-count" aria-live="polite" aria-atomic="true"></p><p class="sequence-key-hint">← Previous · → Next · Space pause / resume · Esc exit</p></div><button class="button subtle follow-exit" type="button">Exit routine</button></header><div class="follow-along-layout"><figure class="follow-along-visual"><img class="follow-along-image" src="/assets/lessons/lesson-10-arm-hand.webp" alt="" width="1448" height="1086" decoding="async" /><figcaption>Let the visual guide your hand placement.</figcaption></figure><section class="follow-along-guide"><div class="follow-live-details"><p class="follow-area"></p><h2 id="follow-technique-title" class="follow-technique" tabindex="-1" aria-live="polite" aria-atomic="true"></h2><p class="follow-instruction"></p><dl class="follow-cues"><div><dt>MOVE</dt><dd class="follow-direction"></dd></div><div><dt>PRESSURE</dt><dd class="follow-pressure"></dd></div></dl></div></section></div><div class="follow-control-dock"><p class="follow-transition" role="status" aria-live="polite" hidden></p><div class="follow-clock"><span class="follow-phase-label"></span><output class="follow-time" role="timer" aria-live="off"></output></div><p class="follow-status" role="status" aria-live="polite"></p><div class="follow-controls"><button class="button follow-previous" type="button">Previous</button><button class="button primary follow-toggle" type="button">Pause</button><button class="button follow-next" type="button">Next</button></div><section class="follow-finish" hidden><p class="eyebrow">ROUTINE COMPLETE</p><h2>Take a moment before getting up.</h2><p>Your routine is saved on this device. Repeat it whenever you like.</p><div class="follow-finish-actions"><button class="button primary follow-repeat" type="button">Repeat routine</button><button class="button subtle follow-exit" type="button">Exit routine</button></div></section><p class="follow-safety">Keep touch comfortable. Stop for pain, numbness, tingling, dizziness, or anything unusual. Exit at any time.</p></div></div></dialog>`;
}

function relaxationEvidenceMarkup() {
  return '<section class="comfort-sources"><h2>Safety and individual comfort</h2><p>A photo cannot establish pressure or a comfortable pace. Ask the receiver; these timings are teaching prompts, not clinically validated doses or a promise of relaxation.</p><p>New one-sided leg pain and swelling need urgent assessment. If these occur with breathlessness or chest pain, call your local emergency service immediately.</p><p><a href="https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know" target="_blank" rel="noopener noreferrer">NCCIH: massage safety and evidence</a> · <a href="https://www.nhs.uk/conditions/deep-vein-thrombosis-dvt/" target="_blank" rel="noopener noreferrer">NHS: DVT symptoms and urgent help</a></p><p>For feedback on your actual hand placement and pressure, learn with a qualified massage instructor. Medical concerns need a health professional.</p></section>';
}

function stopAllCoachedSessions() {
  if (activeRoutineFollowAlong) activeRoutineFollowAlong.exit();
  coachedSessions.forEach(function (session) { session.dispose(); });
  coachedSessions.clear();
  activeCoachedSessionKey = null;
}

function bindGuidedPractices() {
  document.querySelectorAll('[data-coach-session]').forEach(function (root) {
    const key = root.dataset.coachSession;
    let stages;
    if (key.startsWith('lesson-')) stages = lessonCoachedStages(lessons.find(function (item) { return item.id === Number(key.slice(7)); }));
    else if (key.startsWith('scalp-')) stages = scalpCoachedStages(scalpTechniques.find(function (item) { return item.id === key.slice(6); }));
    else if (key === 'hand-routine') stages = handMassageStages();
    else stages = routineCoachedStages(routineData[Number(key.slice(8))]);
    let index = 0;
    let remaining = stages[0].seconds;
    let interval = null;
    let deadline = 0;
    let mode = 'ready';
    const toggle = root.querySelector('.coach-toggle');
    const onward = root.querySelector('.coach-continue');
    const end = root.querySelector('.coach-end');
    const previous = root.querySelector('.coach-stage-previous');
    const forward = root.querySelector('.coach-stage-forward');
    const status = root.querySelector('.coach-status');
    const time = root.querySelector('.coach-time');
    const motionCue = root.querySelector('.coach-motion-cue');
    function clear() { if (interval !== null) window.clearInterval(interval); interval = null; }
    function updateStage() {
      const stage = stages[index];
      root.querySelector('.coach-stage-count').textContent = 'Stage ' + (index + 1) + ' of ' + stages.length;
      root.querySelector('.coach-stage-title').textContent = stage.title;
      previous.disabled = index === 0;
      forward.disabled = index === stages.length - 1;
      root.querySelector('.coach-instruction').textContent = stage.instruction;
      root.querySelector('.coach-next').textContent = 'Next: ' + (stages[index + 1] ? stages[index + 1].title : 'Finish and check comfort');
      time.textContent = formatScalpTime(remaining);
      const image = root.querySelector('.coach-stage-visual img');
      if (image) { image.src = '/assets/lessons/' + stage.image; image.alt = stage.alt; }
      if (motionCue) {
        const motion = handMovementCueSvg(stage.techniqueId, 'coach-motion-cue');
        motionCue.innerHTML = motion.replace(/^<svg[^>]*>|<\/svg>$/g, '');
        motionCue.hidden = !motion;
      }
      const link = root.querySelector('.coach-lesson-link');
      if (link) link.href = '/lessons/' + stage.lesson;
    }
    function finish(early) {
      clear(); mode = 'finished'; toggle.hidden = true; onward.hidden = true; end.hidden = true; previous.hidden = true; forward.hidden = true;
      if (activeCoachedSessionKey === key) activeCoachedSessionKey = null;
      if (early) time.textContent = 'Ended';
      root.classList.add('coach-finished');
      status.textContent = early ? 'Practice ended. Ease contact to zero, release gently, and check how the person feels. Stopping early is fine.' : 'Practice complete. Finish the lighter contact, ease away gradually, and ask how it felt.';
      root.querySelector('.coach-next').textContent = 'Check: Was it comfortable? Were your hands relaxed? Choose lighter contact or skip an unwelcome movement next time.';
    }
    function tick() {
      remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      time.textContent = formatScalpTime(remaining);
      if (remaining > 0) return;
      clear();
      if (index === stages.length - 1) { finish(false); return; }
      mode = 'waiting'; toggle.hidden = true; onward.hidden = false; previous.hidden = false; forward.hidden = true;
      status.textContent = 'Ease the movement into light resting contact, without holding pressure. Ask “Does this still feel comfortable?” Continue when ready, or end now.';
    }
    function pause(message) {
      if (mode !== 'running') return;
      remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      clear(); mode = 'paused'; toggle.textContent = 'Resume'; time.textContent = formatScalpTime(remaining);
      forward.hidden = false;
      status.textContent = message || 'Paused. Ease pressure off and rest your hands; resume only when both people are comfortable.';
    }
    function run() {
      coachedSessions.forEach(function (session) { if (session.key !== key) session.pause('Paused while another practice is open. Ease pressure off and rest.'); });
      activeCoachedSessionKey = key;
      clear();
      updateStage();
      mode = 'running'; toggle.hidden = false; toggle.textContent = 'Pause'; onward.hidden = true; end.hidden = false; previous.hidden = true; forward.hidden = true;
      status.textContent = stages[index].title + '. Slow down, keep your hand relaxed, and check comfort. Finish earlier if needed.';
      deadline = Date.now() + remaining * 1000;
      interval = window.setInterval(tick, 250);
    }
    function navigate(direction) {
      if (direction > 0 && mode === 'waiting') { onward.click(); return true; }
      const nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= stages.length || mode === 'finished') return false;
      activeCoachedSessionKey = key;
      clear();
      index = nextIndex;
      remaining = stages[index].seconds;
      mode = 'ready';
      updateStage();
      toggle.hidden = false; toggle.textContent = 'Start guided practice';
      onward.hidden = true; end.hidden = true; previous.hidden = false; forward.hidden = false;
      root.classList.remove('coach-finished');
      status.textContent = 'Stage changed. Ease pressure off, reposition your hands, then start when both people are ready.';
      const heading = root.querySelector('.coach-stage-title');
      if (heading && typeof heading.focus === 'function') heading.focus({ preventScroll: true });
      return true;
    }
    toggle.addEventListener('click', function () { if (mode === 'running') pause(); else if (mode === 'ready' || mode === 'paused') run(); });
    onward.addEventListener('click', function () { index += 1; remaining = stages[index].seconds; updateStage(); run(); });
    previous.addEventListener('click', function () { navigate(-1); });
    forward.addEventListener('click', function () { navigate(1); });
    root.querySelector('.coach-restart').addEventListener('click', function () {
      clear(); index = 0; remaining = stages[0].seconds; mode = 'ready'; updateStage();
      toggle.hidden = false; toggle.textContent = 'Start guided practice'; onward.hidden = true; end.hidden = true; previous.hidden = false; forward.hidden = false; root.classList.remove('coach-finished');
      status.textContent = 'Restarted. Ease pressure off before resetting your position; start when both people are ready.';
    });
    end.addEventListener('click', function () { finish(true); });
    coachedSessions.set(key, { key, root, pause, navigate, dispose: clear });
  });
}

function bindRoutineFollowAlong() {
  const dialog = document.querySelector('.follow-along-dialog');
  if (!dialog) return;
  const ui = {
    routine: dialog.querySelector('.follow-routine-name'),
    count: dialog.querySelector('.follow-step-count'),
    image: dialog.querySelector('.follow-along-image'),
    motionCue: dialog.querySelector('.follow-motion-cue'),
    pointMarker: dialog.querySelector('.follow-point-marker'),
    area: dialog.querySelector('.follow-area'),
    technique: dialog.querySelector('.follow-technique'),
    instruction: dialog.querySelector('.follow-instruction'),
    direction: dialog.querySelector('.follow-direction'),
    pressure: dialog.querySelector('.follow-pressure'),
    visualSteps: dialog.querySelector('.follow-visual-steps'),
    transition: dialog.querySelector('.follow-transition'),
    clock: dialog.querySelector('.follow-clock'),
    phase: dialog.querySelector('.follow-phase-label'),
    time: dialog.querySelector('.follow-time'),
    status: dialog.querySelector('.follow-status'),
    details: dialog.querySelector('.follow-live-details'),
    finish: dialog.querySelector('.follow-finish'),
    previous: dialog.querySelector('.follow-previous'),
    toggle: dialog.querySelector('.follow-toggle'),
    next: dialog.querySelector('.follow-next'),
    repeat: dialog.querySelector('.follow-repeat')
  };
  let routineId = -1;
  let stages = [];
  let index = 0;
  let phase = 'idle';
  let resumePhase = 'running';
  let remaining = 0;
  let deadline = 0;
  let interval = null;
  function clearTimer() {
    if (interval !== null) window.clearInterval(interval);
    interval = null;
  }
  function status(message) { ui.status.textContent = message; }
  function renderStage() {
    const stage = stages[index];
    const complete = phase === 'complete';
    ui.routine.textContent = routineData[routineId].title;
    ui.count.textContent = complete ? 'ROUTINE COMPLETE · ' + stages.length + ' steps' :
      'Step ' + (index + 1) + ' of ' + stages.length + (phase === 'transition' ? ' · get ready' : '');
    ui.image.src = '/assets/lessons/' + stage.image;
    ui.image.alt = stage.alt;
    ui.image.loading = 'eager';
    if (ui.motionCue) {
      const motionImage = routineMotionCueSrc(stage.techniqueId);
      if (motionImage) ui.motionCue.src = motionImage;
      else ui.motionCue.removeAttribute('src');
      ui.motionCue.hidden = !motionImage;
    }
    if (ui.pointMarker) {
      const pointVisual = stage.pointId && typeof pressurePointVisualSpecs !== 'undefined' ? pressurePointVisualSpecs[stage.pointId] : null;
      ui.pointMarker.hidden = !pointVisual;
      if (pointVisual) {
        const px = pointVisual.x * 10;
        const py = pointVisual.y * 7.5;
        const markerId = 'follow-point-arrow-' + stage.pointId;
        ui.pointMarker.innerHTML = '<defs><marker id="' + markerId + '" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8c3b2e"/></marker></defs><path d="M' + px + ' ' + (py - 76) + 'V' + (py - 29) + '" class="pp-photo-direction" marker-end="url(#' + markerId + ')"/><circle cx="' + px + '" cy="' + py + '" r="18" class="pp-photo-target"/><circle cx="' + px + '" cy="' + py + '" r="5" class="pp-photo-target-core"/>';
      } else ui.pointMarker.innerHTML = '';
    }
    ui.area.textContent = stage.area.toUpperCase();
    ui.technique.textContent = stage.technique;
    ui.instruction.textContent = stage.short;
    ui.direction.textContent = stage.direction;
    ui.pressure.textContent = stage.pressure;
    if (ui.visualSteps && window.CraftVisualLearning) {
      const visualKey = window.CraftVisualLearning.visualKeyForRoutineStage(stage);
      const available = !!window.CraftVisualLearning.getSequence(visualKey);
      ui.visualSteps.hidden = complete || !available;
      if (available) ui.visualSteps.dataset.visualLearning = visualKey;
    }
    const preparing = phase === 'transition' || (phase === 'paused' && resumePhase === 'transition');
    ui.transition.hidden = !preparing;
    ui.transition.textContent = preparing
      ? (phase === 'paused' ? 'Paused. Rest your hands. Next: ' + stage.technique + '. Reposition when ready.' : 'Next: ' + stage.technique + '. Take a moment to reposition your hands.') : '';
    ui.details.hidden = complete;
    ui.clock.hidden = complete;
    ui.status.hidden = complete || preparing;
    ui.finish.hidden = !complete;
    ui.previous.hidden = complete;
    ui.toggle.hidden = complete;
    ui.next.hidden = complete;
    ui.previous.disabled = index === 0;
    ui.toggle.textContent = phase === 'paused' ? 'Resume' : 'Pause';
    ui.next.textContent = preparing ? 'Start now' : index === stages.length - 1 ? 'Finish routine' : 'Next';
    ui.phase.textContent = preparing ? (phase === 'paused' ? 'Transition paused' : 'Reposition gently') : phase === 'paused' ? 'Paused' : index === stages.length - 1 ? 'Finish gently' : 'Move gently';
    ui.time.textContent = formatScalpTime(remaining);
  }
  function startTimer(nextPhase, seconds) {
    clearTimer();
    phase = nextPhase;
    remaining = seconds;
    deadline = Date.now() + remaining * 1000;
    renderStage();
    interval = window.setInterval(tick, 250);
  }
  function startStep() {
    const wasTransitioning = phase === 'transition' || (phase === 'paused' && resumePhase === 'transition');
    remaining = stages[index].seconds;
    startTimer('running', remaining);
    if (wasTransitioning) dialog.scrollTop = 0;
    status('Move slowly. Check comfort; skip any unwelcome movement.');
  }
  function enterTransition(nextIndex) {
    index = nextIndex;
    dialog.scrollTop = 0;
    startTimer('transition', 8);
  }
  function finishRoutine() {
    clearTimer();
    remaining = 0;
    phase = 'complete';
    markRoutineComplete(routineId);
    const cardStatus = document.querySelector('[data-routine-progress="' + routineId + '"]');
    if (cardStatus) {
      cardStatus.textContent = 'Completed ✓ · ready to repeat';
      cardStatus.hidden = false;
    }
    renderStage();
  }
  function tick() {
    const nextRemaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    if (nextRemaining !== remaining) {
      remaining = nextRemaining;
      ui.time.textContent = formatScalpTime(remaining);
    }
    if (remaining > 0) return;
    clearTimer();
    if (phase === 'transition') { startStep(); return; }
    if (index < stages.length - 1) { enterTransition(index + 1); return; }
    finishRoutine();
  }
  function pause(message) {
    if (phase !== 'running' && phase !== 'transition') return;
    remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    resumePhase = phase;
    clearTimer();
    phase = 'paused';
    renderStage();
    if (resumePhase === 'transition') {
      ui.transition.textContent = 'Paused. Rest your hands. Next: ' + stages[index].technique + '. Reposition when ready.';
    } else status(message || 'Paused. Ease pressure off and rest your hands; resume when ready.');
  }
  function exit() {
    clearTimer();
    phase = 'idle';
    if (dialog.open) dialog.close();
    if (activeRoutineFollowAlong && activeRoutineFollowAlong.exit === exit) activeRoutineFollowAlong = null;
  }
  function startRoutine(nextRoutineId) {
    const routine = routineData[nextRoutineId];
    if (!routine) return;
    clearTimer();
    routineId = nextRoutineId;
    stages = routineCoachedStages(routine);
    index = 0;
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    activeRoutineFollowAlong = { exit, pause };
    startStep();
    ui.technique.focus({ preventScroll: true });
    dialog.scrollTop = 0;
  }
  ui.toggle.addEventListener('click', function () {
    if (phase === 'paused') {
      startTimer(resumePhase, remaining);
      status(resumePhase === 'transition' ? 'Take your time to reposition, then continue when ready.' : 'Resumed. Keep contact light and check comfort.');
      return;
    }
    pause();
  });
  ui.previous.addEventListener('click', function () {
    if (index <= 0 || phase === 'complete') return;
    const shouldRun = phase === 'running' || phase === 'transition';
    clearTimer();
    index -= 1;
    dialog.scrollTop = 0;
    remaining = stages[index].seconds;
    if (shouldRun) startStep();
    else {
      phase = 'paused';
      resumePhase = 'running';
      renderStage();
      status('Previous step ready. Resume when you are comfortable.');
    }
  });
  ui.next.addEventListener('click', function () {
    if (phase === 'transition' || (phase === 'paused' && resumePhase === 'transition')) { startStep(); return; }
    if (index < stages.length - 1) { enterTransition(index + 1); return; }
    finishRoutine();
  });
  ui.repeat.addEventListener('click', function () { startRoutine(routineId); });
  dialog.querySelectorAll('.follow-exit').forEach(function (button) { button.addEventListener('click', exit); });
  dialog.addEventListener('cancel', function (event) { event.preventDefault(); exit(); });
  dialog.addEventListener('click', function (event) { if (event.target === dialog) exit(); });
  document.querySelectorAll('.follow-along-start').forEach(function (button) {
    button.addEventListener('click', function () { startRoutine(Number(button.dataset.routineId)); });
  });
}

// Prevent an unattended timer from advancing when the learner leaves the app.
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    coachedSessions.forEach(function (session) { session.pause('Paused while the page is hidden. Ease pressure off; resume when ready.'); });
    if (activeRoutineFollowAlong) activeRoutineFollowAlong.pause('Paused while the page is hidden. Ease pressure off; resume when ready.');
  }
});
