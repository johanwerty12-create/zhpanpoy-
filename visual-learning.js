// Technique-specific 10-slide learning system. It reuses each technique's
// matching photograph and adds stage-aware framing, movement cues, and copy.
(function () {
  const slideTitles = [
    'Prepare', 'Find the area', 'Position your hand', 'Check your position',
    'Start', 'Move a little', 'Check pressure', 'Complete the movement',
    'Release and return', 'Finish and check'
  ];
  const zooms = [1, 1.03, 1.06, 1.06, 1.08, 1.1, 1.1, 1.08, 1.04, 1];
  const phaseNames = ['SET UP', 'MOVE', 'RELEASE', 'CHECK'];
  let activeController = null;

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (char) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char];
    });
  }

  function action(title, instruction, what, seconds) {
    return { title, instruction, what, seconds: seconds || 0 };
  }

  function sequence(key, values, actions) {
    return {
      key,
      kind: values.kind,
      title: values.title,
      area: values.area,
      image: values.image,
      alt: values.alt,
      hand: values.hand,
      direction: values.direction,
      pressure: values.pressure,
      avoid: values.avoid,
      safety: values.safety,
      pointId: values.pointId || '',
      motion: values.motion || '',
      steps: actions.map(function (item, index) {
        return Object.assign({}, item, {
          number: index + 1,
          title: item.title || slideTitles[index],
          area: values.area,
          hand: values.hand,
          direction: values.direction,
          pressure: item.pressure || values.pressure,
          avoid: values.avoid,
          phase: index < 4 ? 0 : index < 8 ? 1 : index === 8 ? 2 : 3,
          zoom: zooms[index]
        });
      })
    };
  }

  const lessonAreas = {
    1: 'The agreed, comfortable area', 2: 'A pillow or folded towel',
    3: 'Supported forearm or broad soft muscle', 4: 'Broad, comfortable muscle',
    5: 'Soft calf or upper-shoulder muscle', 6: 'Back shoulder muscle',
    7: 'Broad muscle beside the spine', 8: 'Back skull edge only · head supported',
    9: 'Scalp · keep clear of eyes and face', 10: 'Supported forearm and hand',
    11: 'Soft calf or thigh muscle', 12: 'Supported heel and sole',
    13: 'One agreed, supported area'
  };

  const lessonHands = {
    1: 'One warm, relaxed palm; ask before contact.',
    2: 'Broad palm, soft fingers, unlocked thumb, comfortable wrist.',
    3: 'Broad palm; the other hand supports the limb.',
    4: 'Relaxed palm; keep the thumb loose.',
    5: 'Broad palm and open finger pads; never pinch.',
    6: 'Broad palms on soft back-shoulder muscle.',
    7: 'Relaxed palms on muscle beside—not on—the spine.',
    8: 'Optional soft finger pads at the back skull edge; never underhook.',
    9: 'Soft finger pads; nails clear of scalp and eyes.',
    10: 'Broad palm; support wrist and forearm with the other hand.',
    11: 'Broad palm; the other hand supports the leg.',
    12: 'One broad thumb pad; the other hand cups the heel.',
    13: 'Use the familiar, comfortable contact from the routine.'
  };

  function courseSequence(id) {
    const lesson = lessons.find(function (item) { return item.id === id; });
    const artwork = lesson && lessonArtworkForId(id);
    if (!lesson || !artwork) return null;
    const steps = lesson.steps;
    const gentle = lesson.pressure[0];
    const movement = id === 8
      ? 'No neck movement. Keep the head resting on its support.'
      : (steps[1] ? steps[1][1] : lesson.short);
    const continuation = steps[2] ? steps[2][1] : lesson.short;
    const finish = steps[steps.length - 1][1];
    let actions;
    if (id === 8) {
      actions = [
        action('Prepare', 'Ask permission. Let the pillow or headrest carry the head.', 'Set up without moving the neck.'),
        action('Find the safe boundary', 'Stay with the back skull edge only. Keep the throat and front and sides of the neck clear.', 'Choose a safe boundary before contact.'),
        action('Position your hand', 'Rest soft finger pads on the back skull edge; do not slide underneath the skull.', 'Your hand rests; it does not lift.'),
        action('Check your position', 'The head is supported, still, and comfortable. If the reach feels awkward, work on the shoulders instead.', 'No pressure and no neck movement yet.'),
        action('Start', 'If wanted, settle feather-light finger pads without digging.', 'Offer optional still contact.'),
        action('Stay still', 'Keep the head and neck completely still. There are no neck circles in this beginner sequence.', 'Do not steer or move the head.'),
        action('Check pressure', 'Use only light resting contact. Never press harder on a tight spot.', 'Ask if this feels comfortable; shoulders-only is always an option.', 15),
        action('Keep the safe boundary', 'Keep the front, sides, throat, spine, and skull underside untouched.', 'Nothing is pulled, twisted, cracked, or manipulated.', 15),
        action('Release', 'Reduce contact to zero while the support continues to hold the head.', 'Do not pull the head or neck.'),
        action('Finish and check', 'Move your hands away gently. Let the person move themselves when ready.', 'Stop for pain, dizziness, headache changes, numbness, tingling, weakness, or nausea.')
      ];
    } else {
      actions = [
        action('Prepare', lesson.before[0], 'Agree on the area, ask permission, and make the position comfortable.'),
        action('Find the area', steps[0][1], 'Identify the soft, comfortable contact area before moving.'),
        action('Position your hand', lesson.position[1][1], 'Set your body close enough to stay relaxed; do not reach or lean hard.'),
        action('Check your position', 'Check: the area is supported, the hand is relaxed, and pressure starts light.', 'Yes—hand, body, and receiving area are ready.'),
        action('Start', steps[0][1], 'Begin with settled contact; give the person time to notice it.', 15),
        action('Move a little', movement, 'Use a small, slow action. Keep the movement on the named area.', 15),
        action('Check pressure', gentle, 'Start light. Ask about comfort; adjust only a little if requested.', 15),
        action('Complete the movement', continuation, 'Follow the same safe path and stop before nearby bones or joints.', 15),
        action('Release and return', finish, 'Soften to no pressure before repositioning; never drag or force a joint.'),
        action('Finish and check', lesson.feel + ' ' + lesson.pressure[2], 'Notice comfort. Stop if it feels sharp, painful, numb, tingly, or unusual.')
      ];
    }
    return sequence('lesson:' + id, {
      kind: 'lesson', title: lesson.title, area: lessonAreas[id], image: artwork.image,
      alt: artwork.alt, hand: lessonHands[id], direction: id === 8 ? 'Still contact only; no neck movement.' : movement,
      pressure: id === 8 ? 'Optional feather-light resting contact only; shoulders-only is fine.' : gentle,
      avoid: id === 8 ? 'Never touch the throat/front or sides of the neck, lift or steer the head, or manipulate the neck.' : lesson.safety,
      safety: lesson.safety,
      motion: typeof practiceMotionByLesson !== 'undefined' ? practiceMotionByLesson[id] || '' : ''
    }, actions);
  }

  const scalpAreas = {
    'scalp-gliding': 'Front scalp toward crown', 'small-circles': 'One small scalp area',
    'crown-circles': 'Crown · top-center scalp', 'side-circles': 'Side scalp above the ear',
    'scalp-lifting': 'Soft scalp skin · head stays still', 'fingertip-tapping': 'Scalp · optional light taps',
    'fingertip-raking': 'Hair and scalp · only if strands move freely',
    'forehead-gliding': 'Forehead above the eyebrows · eyes clear',
    'hairline-massage': 'Front hairline · brow clear', 'temple-circles': 'Temple skin · eye socket clear',
    'behind-ear': 'Skin behind the ear · ear stays still',
    'base-of-skull': 'Back skull edge · pillow supports the head',
    'whole-sequence': 'Comfortable scalp zones · head still'
  };

  const scalpMotion = {
    'scalp-gliding': ['Set soft pads at the front scalp.', 'Move a tiny distance toward the crown; move skin, not hair.'],
    'small-circles': ['Set soft pads in one small area.', 'Make tiny circles in place; let skin shift with the pads.'],
    'crown-circles': ['Rest pads on the crown.', 'Make small circles without pushing down.'],
    'side-circles': ['Rest pads above the ear, away from the temple.', 'Make a few slow circles; keep the head still.'],
    'scalp-lifting': ['Place relaxed pads on scalp skin.', 'Shift skin a tiny distance sideways; do not lift hair or head.'],
    'fingertip-tapping': ['Curve relaxed fingers over the scalp.', 'Offer a few barely-touching taps; skip if unwelcome.'],
    'fingertip-raking': ['Ask first and avoid tangles or extensions.', 'Make one short light pass with pads; stop at any catch.'],
    'forehead-gliding': ['Rest soft pads above the brows.', 'Glide from center outward; keep eyelids clear.'],
    'hairline-massage': ['Set soft pads on the hairline.', 'Trace one short section toward a temple; keep brows clear.'],
    'temple-circles': ['Settle pads on temple skin, away from the eye socket.', 'Make tiny, feather-light circles; never press toward the eye.'],
    'behind-ear': ['Place a soft pad on skin behind the ear.', 'Use a tiny light movement; do not push or move the ear.'],
    'base-of-skull': ['Let the pillow support the head first.', 'Use still, almost-weightless contact at the back skull edge; do not lift.'],
    'whole-sequence': ['Rest pads on a comfortable scalp zone.', 'Join only familiar light movements; stop if hair catches.']
  };

  function scalpSequence(id) {
    const technique = scalpTechniques.find(function (item) { return item.id === id; });
    if (!technique) return null;
    const motion = scalpMotion[id] || [technique.how[0], technique.how[1]];
    const group = technique.group;
    const area = scalpAreas[id] || 'Scalp';
    const actions = [
      action('Prepare', 'Support the head and ask whether this contact is welcome.', 'Keep the head still; hair and scalp sensitivity matter.'),
      action('Find the area', technique.how[0], 'Use the named area. Stay clear of the eyes and any tender skin.'),
      action('Position your hand', technique.alt, 'Use soft finger pads, not nails or a gripping hand.'),
      action('Check your position', 'Check: soft pads, nails clear, head supported, pressure light.', 'If hair catches or the position feels awkward, stop and reset.'),
      action('Start', motion[0], 'Make contact gently before any movement.', 15),
      action('Move a little', motion[1], 'Keep the path small and predictable; the head does not move.', 15),
      action('Check pressure', technique.pressure, 'Ask whether the contact still feels comfortable.', 15),
      action('Complete the movement', technique.how[2], 'Stop the movement before changing zones.', 15),
      action('Release and return', 'Ease pressure to zero before repositioning. Never drag or pull strands.', technique.avoid),
      action('Finish and check', technique.watch, 'Stop for scalp pain, headache changes, dizziness, nausea, visual symptoms, numbness, or anything unusual.')
    ];
    return sequence('scalp:' + id, {
      kind: 'scalp', title: technique.title, area, image: technique.image, alt: technique.alt,
      hand: technique.how[0], direction: motion[1], pressure: technique.pressure,
      avoid: technique.avoid,
      safety: 'Keep the head supported and still. Stay clear of the eyes. Stop if the scalp hurts, hair catches, or anything feels unusual.'
    }, actions);
  }

  function handSequence(id) {
    const technique = handMassageTechniques.find(function (item) { return item.id === id; });
    if (!technique) return null;
    const actions = [
      action('Prepare', 'Support the receiving hand and ask permission before starting.', 'Keep the forearm and wrist in a comfortable supported position.'),
      action('Find the area', technique.place, 'Identify the exact part of the receiving hand named here.'),
      action('Position your hand', technique.contact, 'The receiving hand stays relaxed; your working hand uses the named contact.'),
      action('Check your position', 'Check: wrist supported, fingers relaxed, contact on the soft area, pressure light.', 'If the hand is tense or the spot is tender, reset or skip it.'),
      action('Start', 'Set the named contact gently on the hand before moving.', 'Let the person feel where your hand has settled.', 15),
      action('Move a little', technique.direction, 'Start with one small, slow movement; keep the receiving joint still.', 15),
      action('Check pressure', technique.pressure, 'Ask if it feels comfortable. Do not push through discomfort.', 15),
      action('Complete the movement', technique.what + ' ' + technique.direction, 'Finish only the comfortable part of the path; never force the joint.', 15),
      action('Release and return', 'Ease pressure to zero before resetting. If a return stroke would drag, lift gently instead.', technique.avoid),
      action('Finish and check', technique.notice, 'Stop for pain, burning, numbness, tingling, colour change, or unusual discomfort.')
    ];
    return sequence('hand:' + id, {
      kind: 'hand', title: technique.title, area: 'Hand & fingers', image: technique.image,
      alt: technique.alt, hand: technique.contact + ' ' + technique.place,
      direction: technique.direction, pressure: technique.pressure, avoid: technique.avoid,
      safety: 'Keep the receiving hand supported. Never force a finger or wrist joint. Stop for pain, tingling, numbness, colour change, or anything unusual.',
      motion: technique.id === 'gentle-wrist-circles' && typeof handMovementCueSvg === 'function'
        ? handMovementCueSvg(technique.id, 'visual-learning-motion') : ''
    }, actions);
  }

  function pointSequence(id) {
    const point = pressurePoints.find(function (item) { return item.id === id; });
    const visual = point && pressurePointVisualSpecs[point.id];
    if (!point || !visual) return null;
    const actions = [
      action('Identify the area', 'This traditional point lesson is for ' + point.area + '.', 'The area name is a guide, not a medical claim.'),
      action('Find the landmarks', point.landmarks, 'Use nearby anatomy, not a guessed spot.'),
      action('Locate the point', point.where, 'If the named landmarks are unclear, do not press.'),
      action('Show me how', point.find.join(' '), 'Follow the steps in order. Do not search by pressing around.'),
      action('Position your hand', point.position, 'Keep your own hand supported; use a finger pad, not a nail.'),
      action('Start contact', 'Rest the finger pad gently on the named landmark; do not dig or pinch.', 'Contact the surface only.'),
      action('Choose direction', point.pressure, 'Use only the direction described; no aggressive or twisting force.'),
      action('Hold briefly', point.hold, 'The short hold is a cautious learning cue, not a treatment dose.', 8),
      action('Release', point.release, 'Ease off fully before moving away.'),
      action('Finish and check', point.feel + ' ' + point.notFeel, 'Stop at once for the symptoms listed; seek professional advice when appropriate.')
    ];
    return sequence('point:' + id, {
      kind: 'point', title: point.name + ' · ' + point.code, area: point.area,
      image: visual.image, alt: visual.alt, hand: point.position,
      direction: point.pressure, pressure: point.hold,
      avoid: point.avoid + ' ' + point.mistakes,
      safety: 'Traditional acupressure learning only—not a treatment or cure. ' + point.stop + ' ' + point.seek,
      pointId: id
    }, actions);
  }

  function getSequence(key) {
    if (typeof key !== 'string') return null;
    const split = key.indexOf(':');
    if (split < 1) return null;
    const kind = key.slice(0, split);
    const id = key.slice(split + 1);
    if (kind === 'lesson') return courseSequence(Number(id));
    if (kind === 'scalp') return scalpSequence(id);
    if (kind === 'hand') return handSequence(id);
    if (kind === 'point') return pointSequence(id);
    return null;
  }

  function sequenceGroup(kind) {
    if (kind === 'lesson') return lessons.map(function (item) { return { key: 'lesson:' + item.id, label: 'lesson' }; });
    if (kind === 'scalp') return scalpTechniques.map(function (item) { return { key: 'scalp:' + item.id, label: 'technique' }; });
    if (kind === 'hand') return handMassageTechniques.map(function (item) { return { key: 'hand:' + item.id, label: 'technique' }; });
    if (kind === 'point') return pressurePoints.map(function (item) { return { key: 'point:' + item.id, label: 'point' }; });
    return [];
  }

  function adjacentSequenceKey(key, direction) {
    const kind = key.slice(0, key.indexOf(':'));
    const group = sequenceGroup(kind);
    const index = group.findIndex(function (item) { return item.key === key; });
    const adjacent = group[index + direction];
    return adjacent ? adjacent.key : null;
  }

  function sequencePosition(key) {
    const kind = key.slice(0, key.indexOf(':'));
    const group = sequenceGroup(kind);
    const index = group.findIndex(function (item) { return item.key === key; });
    return index < 0 ? null : { index: index + 1, total: group.length, label: group[index].label };
  }

  function visualKeyForRoutineStage(stage) {
    if (!stage) return 'lesson:3';
    if (stage.pointId) return 'point:' + stage.pointId;
    if (stage.techniqueId && handMassageTechniques.some(function (item) { return item.id === stage.techniqueId; })) return 'hand:' + stage.techniqueId;
    if (stage.techniqueId && scalpTechniques.some(function (item) { return item.id === stage.techniqueId; })) return 'scalp:' + stage.techniqueId;
    const text = [stage.area, stage.technique, stage.short, stage.instruction].join(' ').toLowerCase();
    const scalpMatch = scalpTechniques.find(function (item) {
      const title = item.title.toLowerCase();
      return text.includes(title) || (item.id === 'small-circles' && /scalp circles/.test(text)) ||
        (item.id === 'scalp-gliding' && /scalp glid/.test(text));
    });
    if (scalpMatch || /scalp|temple|hairline|forehead|behind.the.ear|skull/.test(text)) return 'scalp:' + (scalpMatch ? scalpMatch.id : 'whole-sequence');
    const handMatch = handMassageTechniques.find(function (item) { return text.includes(item.title.toLowerCase()); });
    if (handMatch) return 'hand:' + handMatch.id;
    if (/palm circle/.test(text)) return 'hand:palm-circles';
    if (/finger stroke|finger glid/.test(text)) return 'hand:individual-finger-gliding';
    if (/knead|gather/.test(text)) return 'lesson:5';
    if (/circle/.test(text)) return 'lesson:4';
    if (/shoulder/.test(text)) return 'lesson:6';
    if (/upper.back|back beside/.test(text)) return 'lesson:7';
    if (/neck/.test(text)) return 'lesson:8';
    if (/foot|sole|heel/.test(text)) return 'lesson:12';
    if (/leg|calf|thigh/.test(text)) return 'lesson:11';
    if (/glid|forearm/.test(text)) return 'lesson:3';
    if (/still contact|settle|resting/.test(text)) return 'lesson:1';
    return 'lesson:' + (Number(stage.lesson) || 3);
  }

  function phaseForStep(step) {
    if (step.phase === 0) return 0;
    if (step.phase === 1) return 1;
    if (step.phase === 2) return 2;
    return 3;
  }

  function pointMarker(sequence, stepNumber) {
    if (sequence.kind !== 'point') return '';
    const visual = pressurePointVisualSpecs[sequence.pointId];
    if (!visual) return '';
    const x = visual.x * 10;
    const y = visual.y * 7.5;
    const marker = 'vl-point-arrow-' + sequence.pointId;
    return '<svg class="visual-point-marker" viewBox="0 0 1000 750" aria-hidden="true"' + (stepNumber === 1 ? ' hidden' : '') + '><defs><marker id="' + marker + '" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#8c3b2e"/></marker></defs><path d="M' + x + ' ' + (y - 76) + 'V' + (y - 29) + '" class="pp-photo-direction" marker-end="url(#' + marker + ')"/><circle cx="' + x + '" cy="' + y + '" r="18" class="pp-photo-target"/><circle cx="' + x + '" cy="' + y + '" r="5" class="pp-photo-target-core"/></svg>';
  }

  function motionForStep(sequence, stepNumber) {
    if (!sequence.motion) return '';
    let motion = sequence.motion;
    const suffix = sequence.key.replace(/[^a-z0-9-]/gi, '-');
    motion = motion.replace(/motion-arrow-(\d+)/g, 'vl-motion-' + suffix + '-$1');
    motion = motion.replace(/<svg\b([^>]*)class="[^"]*"/i, '<svg$1class="visual-learning-motion"');
    motion = motion.replace(/<path\b/g, '<path pathLength="100"');
    const progress = stepNumber <= 4 ? 0 : stepNumber === 5 ? 24 : stepNumber === 6 ? 48 : stepNumber === 7 ? 72 : 100;
    motion = motion.replace(/class="([^"]*motion-path[^"]*)"/g, 'class="$1" style="stroke-dasharray:100;stroke-dashoffset:' + (100 - progress) + '"');
    return motion.replace('<svg ', '<svg data-motion-progress="' + progress + '" ');
  }

  function stageVisualMarkup(sequence, step) {
    const stageId = step.number;
    const phase = phaseForStep(step);
    const motionProgress = stageId <= 4 ? 0 : stageId === 5 ? 24 : stageId === 6 ? 48 : stageId === 7 ? 72 : 100;
    const style = '--vl-zoom:' + step.zoom + ';--vl-motion-progress:' + motionProgress + '%';
    return '<div class="visual-learning-frame" data-visual-kind="' + escapeHtml(sequence.kind) + '" data-visual-step="' + stageId + '" data-visual-phase="' + phase + '" style="' + style + '"><img class="visual-learning-image" src="/assets/lessons/' + escapeHtml(sequence.image) + '" alt="' + escapeHtml(sequence.alt) + '" width="1448" height="1086" decoding="async" />' + motionForStep(sequence, stageId) + pointMarker(sequence, stageId) + '<span class="visual-learning-frame-label">' + String(stageId).padStart(2, '0') + ' · ' + phaseNames[phase] + ' · ' + escapeHtml(step.title) + '</span></div>';
  }

  function dialogMarkup() {
    return '<dialog class="visual-learning-dialog" aria-labelledby="visual-learning-title"><div class="visual-learning-shell"><header class="visual-learning-header"><div><p class="eyebrow">10-step visual lesson</p><p class="visual-learning-count" aria-live="polite" aria-atomic="true"></p><p class="sequence-key-hint visual-learning-key-hint">← Previous slide · → Next slide · Esc to close</p></div><button class="button subtle visual-learning-close" type="button">Exit guide</button></header><div class="visual-learning-layout"><figure class="visual-learning-figure"><div class="visual-learning-art"></div><figcaption class="visual-learning-caption">Technique-specific photo and location marker · the slide framing and action cue change at each step.</figcaption><ol class="visual-phase-track" aria-label="Learning phases"><li>SET UP</li><li>MOVE</li><li>RELEASE</li><li>CHECK</li></ol></figure><section class="visual-learning-guide"><p class="visual-learning-area"></p><h2 id="visual-learning-title" tabindex="-1"></h2><h3 class="visual-learning-step-title" aria-live="polite" aria-atomic="true"></h3><p class="visual-learning-instruction"></p><div class="visual-learning-what"><strong>WHAT AM I DOING?</strong><p></p></div><dl class="visual-learning-cues"><div><dt>BODY AREA</dt><dd class="visual-learning-body"></dd></div><div><dt>HAND POSITION</dt><dd class="visual-learning-hand"></dd></div><div><dt>MOVEMENT</dt><dd class="visual-learning-direction"></dd></div><div><dt>PRESSURE</dt><dd class="visual-learning-pressure"></dd></div></dl><p class="visual-learning-avoid"><strong>AVOID:</strong> <span></span></p><p class="visual-learning-safety">If this feels sharp, painful, numb, tingly, or unusually uncomfortable, stop. Reposition only if comfortable; stop if symptoms continue. Do not push through.</p><p class="visual-learning-tradition" hidden>Traditional point-location practice only; not a medical treatment or cure.</p><div class="visual-learning-timer"><div><span class="eyebrow">OPTIONAL STEP TIMER</span><output class="visual-learning-time" aria-live="off">—:—</output></div><button class="button small visual-learning-timer-toggle" type="button">Start timer</button><span class="visual-learning-timer-note"></span></div><p class="visual-learning-status" role="status" aria-live="polite">Move at your own pace. Timer is a guide—not a pressure dose.</p><div class="visual-learning-controls"><button class="button visual-learning-previous" type="button">← Previous</button><button class="button subtle visual-learning-restart" type="button">Restart</button><button class="button primary visual-learning-next" type="button">Next →</button></div><p class="visual-learning-completed" hidden>Sequence complete · saved on this device.</p></section></div></div></dialog>';
  }

  function triggerMarkup(key, completed) {
    return '<button class="button small visual-learning-trigger" type="button" data-visual-learning="' + escapeHtml(key) + '" aria-haspopup="dialog">' + (completed ? 'Review 10 visual steps' : 'START 10-STEP GUIDE') + '</button>';
  }

  function sequenceIsComplete(key) {
    return typeof progress !== 'undefined' && Array.isArray(progress.visualSequencesCompleted) && progress.visualSequencesCompleted.includes(key);
  }

  function mountTrigger(host, key) {
    if (!host || host.querySelector('[data-visual-learning]')) return;
    host.insertAdjacentHTML('beforeend', triggerMarkup(key, sequenceIsComplete(key)));
  }

  function mountLaunchers(root) {
    root.querySelectorAll('.hand-technique-card, .hand-quick-card').forEach(function (card) {
      const id = card.dataset.sequenceItem || card.dataset.handTechnique || '';
      const hand = handMassageTechniques.find(function (item) { return item.id === id; });
      if (!hand) return;
      const host = card.querySelector('.hand-technique-copy, div');
      mountTrigger(host, 'hand:' + hand.id);
    });
    root.querySelectorAll('.scalp-technique-card').forEach(function (card) {
      const technique = scalpTechniques.find(function (item) { return item.id === card.dataset.scalpTechnique; });
      mountTrigger(card.querySelector('.scalp-card-body'), technique && 'scalp:' + technique.id);
    });
    root.querySelectorAll('.pp-point-card').forEach(function (card) {
      mountTrigger(card.querySelector('.pp-point-head'), 'point:' + card.dataset.pointId);
    });
    root.querySelectorAll('.quick-version[data-quick-practice]').forEach(function (section) {
      const lessonId = Number(section.dataset.quickPractice);
      const host = section.querySelector('.quick-version-head, .scalp-module-header, .hand-quick-heading');
      mountTrigger(host, 'lesson:' + lessonId);
    });
    root.querySelectorAll('.routine-card-enhanced').forEach(function (card, routineIndex) {
      const stages = routineData[routineIndex] && routineCoachedStages(routineData[routineIndex]);
      const items = Array.from(card.querySelectorAll('.routine-step-list li'));
      if (!stages) return;
      items.forEach(function (item, index) {
        const host = item.querySelector('div');
        if (stages[index]) mountTrigger(host, visualKeyForRoutineStage(stages[index]));
      });
    });
  }

  function formatTime(seconds) {
    return String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0');
  }

  function createTimer(onUpdate) {
    let configured = 0;
    let remaining = 0;
    let deadline = 0;
    let interval = null;
    function clear() {
      if (interval !== null) window.clearInterval(interval);
      interval = null;
    }
    function state() { return { configured, remaining, running: interval !== null, complete: configured > 0 && remaining === 0 }; }
    function emit() { if (onUpdate) onUpdate(state()); }
    function setDuration(seconds) {
      clear(); configured = Math.max(0, Number(seconds) || 0); remaining = configured; emit();
    }
    function tick() {
      remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      if (remaining === 0) clear();
      emit();
    }
    function start() {
      if (!configured || interval !== null) return;
      if (remaining === 0) remaining = configured;
      deadline = Date.now() + remaining * 1000;
      interval = window.setInterval(tick, 250);
      emit();
    }
    function pause() {
      if (interval === null) return;
      remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      clear(); emit();
    }
    function reset() { clear(); remaining = configured; emit(); }
    function dispose() { clear(); }
    return { state, setDuration, start, pause, reset, dispose };
  }

  function canHandleArrow(event) {
    if (event.defaultPrevented || event.repeat || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.isComposing) return false;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return false;
    const target = event.target;
    return !(target && typeof target.closest === 'function' && target.closest('input, textarea, select, [contenteditable="true"], [role="textbox"], [role="searchbox"], [role="combobox"], [role="radio"], [role="slider"], [role="listbox"], [role="option"], [role="tablist"], [role="tab"], [role="grid"], [role="tree"], [role="menu"], [role="spinbutton"], [role="application"]'));
  }

  function bind() {
    const root = document.getElementById('app');
    if (!root) return;
    const dialog = root.querySelector('.visual-learning-dialog');
    if (!dialog) return;
    mountLaunchers(root);
    const ui = {
      count: dialog.querySelector('.visual-learning-count'), keyHint: dialog.querySelector('.visual-learning-key-hint'), image: dialog.querySelector('.visual-learning-art'),
      area: dialog.querySelector('.visual-learning-area'), title: dialog.querySelector('#visual-learning-title'),
      stepTitle: dialog.querySelector('.visual-learning-step-title'), instruction: dialog.querySelector('.visual-learning-instruction'),
      what: dialog.querySelector('.visual-learning-what p'), body: dialog.querySelector('.visual-learning-body'),
      hand: dialog.querySelector('.visual-learning-hand'), direction: dialog.querySelector('.visual-learning-direction'),
      pressure: dialog.querySelector('.visual-learning-pressure'), avoid: dialog.querySelector('.visual-learning-avoid span'),
      safety: dialog.querySelector('.visual-learning-safety'), tradition: dialog.querySelector('.visual-learning-tradition'),
      phases: Array.from(dialog.querySelectorAll('.visual-phase-track li')), time: dialog.querySelector('.visual-learning-time'),
      timerToggle: dialog.querySelector('.visual-learning-timer-toggle'), timerNote: dialog.querySelector('.visual-learning-timer-note'),
      status: dialog.querySelector('.visual-learning-status'), previous: dialog.querySelector('.visual-learning-previous'),
      next: dialog.querySelector('.visual-learning-next'), restart: dialog.querySelector('.visual-learning-restart'),
      completed: dialog.querySelector('.visual-learning-completed')
    };
    let current = null;
    let index = 0;
    let opener = null;
    let clock = createTimer(function (state) {
      ui.time.textContent = state.configured ? formatTime(state.remaining) : '—:—';
      ui.timerToggle.disabled = !state.configured;
      ui.timerToggle.textContent = state.running ? 'Pause timer' : state.complete ? 'Restart timer' : state.remaining < state.configured ? 'Resume timer' : 'Start timer';
      if (state.complete) ui.status.textContent = 'Time guide complete. Move on only when you feel ready and comfortable.';
    });

    function renderSlide() {
      if (!current) return;
      const step = current.steps[index];
      const position = sequencePosition(current.key);
      ui.count.textContent = (position ? position.label.toUpperCase() + ' ' + position.index + ' OF ' + position.total + ' · ' : '') + 'STEP ' + step.number + ' OF 10';
      ui.area.textContent = current.area.toUpperCase();
      ui.title.textContent = current.title;
      ui.stepTitle.textContent = step.title.toUpperCase();
      ui.instruction.textContent = step.instruction;
      ui.what.textContent = step.what;
      ui.body.textContent = step.area;
      ui.hand.textContent = step.hand;
      ui.direction.textContent = step.direction;
      ui.pressure.textContent = step.pressure;
      ui.avoid.textContent = step.avoid;
      ui.safety.textContent = current.kind === 'point'
        ? 'If this feels sharp, painful, numb, tingly, or unusually uncomfortable, stop. ' + current.safety
        : 'If this feels sharp, painful, numb, tingly, or unusually uncomfortable, stop. Reposition only if comfortable; stop if symptoms continue. Do not push through.';
      ui.tradition.hidden = current.kind !== 'point';
      ui.image.innerHTML = stageVisualMarkup(current, step);
      ui.phases.forEach(function (phase, phaseIndex) {
        if (phaseIndex === step.phase) phase.setAttribute('aria-current', 'step');
        else phase.removeAttribute('aria-current');
      });
      const previousKey = adjacentSequenceKey(current.key, -1);
      const previousSequence = previousKey && getSequence(previousKey);
      ui.previous.disabled = index === 0 && !previousSequence;
      ui.previous.textContent = index === 0 && previousSequence
        ? (previousSequence.kind === 'lesson' ? 'Previous lesson ←' : previousSequence.kind === 'point' ? 'Previous point ←' : 'Previous technique ←')
        : '← Previous';
      if (index === current.steps.length - 1) {
        const nextKey = adjacentSequenceKey(current.key, 1);
        const nextSequence = nextKey && getSequence(nextKey);
        ui.next.textContent = nextSequence ? (nextSequence.kind === 'lesson' ? 'Next lesson →' : nextSequence.kind === 'point' ? 'Next point →' : 'Next technique →') : 'Finish';
      } else ui.next.textContent = 'Next →';
      if (ui.keyHint) ui.keyHint.textContent = '← Previous slide · → Next slide' + (adjacentSequenceKey(current.key, -1) || adjacentSequenceKey(current.key, 1) ? ' · at guide ends, arrows switch guides' : '') + ' · Esc to close';
      ui.completed.hidden = !sequenceIsComplete(current.key);
      ui.timerNote.textContent = step.seconds
        ? (current.kind === 'point' ? 'Brief point hold only · timer is not a treatment dose.' : 'Optional pace cue · stop earlier if comfort changes.')
        : 'No timer needed on this step. Move on when ready.';
      clock.setDuration(step.seconds);
      ui.status.textContent = current.kind === 'point'
        ? 'Traditional location practice only. Stop if anything feels wrong; never press aggressively.'
        : 'Move at your own pace. Timer is a guide—not a pressure dose.';
    }

    function move(direction) {
      if (!current) return false;
      const next = index + direction;
      if (next < 0 || next >= current.steps.length) return false;
      clock.reset(); index = next; renderSlide();
      return true;
    }

    function completeCurrent() {
      if (!current) return;
      if (!Array.isArray(progress.visualSequencesCompleted)) progress.visualSequencesCompleted = [];
      if (!progress.visualSequencesCompleted.includes(current.key)) progress.visualSequencesCompleted.push(current.key);
      saveProgress();
      ui.completed.hidden = false;
      if (opener && opener.isConnected) opener.textContent = 'Review 10 visual steps';
    }

    function finish() {
      if (!current || index !== current.steps.length - 1) return;
      completeCurrent();
      clock.dispose();
      dialog.close();
    }

    function switchSequence(direction) {
      const nextKey = current && adjacentSequenceKey(current.key, direction);
      const nextSequence = nextKey && getSequence(nextKey);
      if (!nextSequence) return false;
      if (direction > 0) completeCurrent();
      current = nextSequence;
      index = direction > 0 ? 0 : nextSequence.steps.length - 1;
      opener = Array.from(document.querySelectorAll('[data-visual-learning]')).find(function (trigger) {
        return trigger.dataset.visualLearning === nextKey;
      }) || opener;
      clock.reset();
      renderSlide();
      ui.status.textContent = (direction > 0 ? 'Guide complete. Next: ' : 'Previous guide: ') + current.title + '. Continue at your own pace.';
      ui.title.focus({ preventScroll: true });
      return true;
    }

    function open(key, trigger) {
      const nextSequence = getSequence(key);
      if (!nextSequence) return;
      if (activeRoutineFollowAlong && dialog !== document.querySelector('.follow-along-dialog')) {
        activeRoutineFollowAlong.pause('Paused while you review the 10-step visual. Rest your hands; resume when ready.');
      }
      current = nextSequence; index = 0; opener = trigger || null;
      clock.setDuration(0);
      renderSlide();
      if (!dialog.open) dialog.showModal();
      ui.title.focus({ preventScroll: true });
    }

    function handleKeyboard(event) {
      if (!dialog.open || !dialog.contains(event.target) || !canHandleArrow(event)) return false;
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      if (direction > 0 && current && index === current.steps.length - 1) {
        if (!switchSequence(1)) finish();
      } else if (direction < 0 && index === 0) {
        if (!switchSequence(-1)) ui.status.textContent = 'You are at the first slide and first guide in this sequence.';
      } else if (!move(direction)) {
        ui.status.textContent = direction < 0 ? 'You are at the first slide.' : 'You are at the final slide.';
      }
      return true;
    }

    function closeGuide() {
      clock.dispose();
      current = null;
      if (dialog.open) dialog.close();
    }

    activeController = { open, move, handleKeyboard, close: closeGuide, dialog };
    if (!window.__craftVisualLearningBound) {
      window.__craftVisualLearningBound = true;
      document.addEventListener('click', function (event) {
        const trigger = event.target && event.target.closest ? event.target.closest('[data-visual-learning]') : null;
        if (trigger && activeController) activeController.open(trigger.dataset.visualLearning, trigger);
      });
    }

    dialog.querySelector('.visual-learning-close').addEventListener('click', function () { dialog.close(); });
    ui.previous.addEventListener('click', function () {
      if (index === 0) switchSequence(-1);
      else move(-1);
    });
    ui.next.addEventListener('click', function () {
      if (index === current.steps.length - 1) {
        if (!switchSequence(1)) finish();
      }
      else move(1);
    });
    ui.restart.addEventListener('click', function () { clock.reset(); index = 0; renderSlide(); });
    ui.timerToggle.addEventListener('click', function () {
      const state = clock.state();
      if (state.running) clock.pause();
      else clock.start();
    });
    dialog.addEventListener('click', function (event) { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('close', function () {
      clock.dispose();
      if (opener && opener.isConnected && typeof opener.focus === 'function') opener.focus({ preventScroll: true });
      opener = null;
    });
  }

  window.CraftVisualLearning = {
    getSequence,
    adjacentSequenceKey,
    sequencePosition,
    visualKeyForRoutineStage,
    dialogMarkup,
    stageVisualMarkup,
    createTimer,
    canHandleArrow,
    handleKeyboard: function (event) { return !!(activeController && activeController.handleKeyboard(event)); },
    bind,
    close: function () { if (activeController) activeController.close(); }
  };
})();
