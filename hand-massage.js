const handMassageTechniques = [
  {
    id: 'palm-gliding', title: 'Palm Gliding', image: 'hand-palm-gliding.webp',
    alt: 'A relaxed palm heel glides from the wrist-side palm toward the finger bases of a supported palm-up hand.',
    what: 'Make one slow, broad glide across the palm, then lift or return with almost no pressure.',
    place: 'Receiving hand rests palm-up on a cushion; keep its wrist straight and supported.',
    contact: 'Use the broad heel and relaxed palm of your other hand, not a thumb tip.',
    direction: 'From the wrist-side palm toward the finger bases; stop before the fingers.',
    pressure: 'Light, even surface contact. Let the palm stay broad.',
    notice: 'The skin moves smoothly and the receiving fingers stay loose.',
    avoid: 'Dragging dry skin, pressing the wrist crease, gripping, or pushing into pain.'
  },
  {
    id: 'palm-circles', title: 'Palm Circles', image: 'hand-palm-circles.webp',
    alt: 'The broad heel of a relaxed massaging palm makes a small circle on the fleshy middle of a supported palm-up hand.',
    what: 'Make a few slow, small circles in place across a comfortable fleshy part of the palm.',
    place: 'Rest the palm-up hand and support beneath it without squeezing.',
    contact: 'Use the broad heel of your palm, keeping the rest of your hand relaxed.',
    direction: 'A small circle in place; lift or soften before moving to another spot.',
    pressure: 'Light and broad; do not lean your body weight into the hand.',
    notice: 'The palm remains soft and the circles feel unhurried.',
    avoid: 'Scrubbing, pinching, fast circles, or staying on a tender spot.'
  },
  {
    id: 'center-palm-circles', title: 'Center-Palm Circles', image: 'hand-center-palm-circles.webp',
    alt: 'One relaxed index-finger pad makes tiny circles at the center of a supported palm-up hand.',
    what: 'Trace two or three tiny circles at the center of the palm, then pause.',
    place: 'Keep the hand palm-up, wrist neutral, and the back of the hand supported.',
    contact: 'Use one soft index-finger pad on the central palm.',
    direction: 'Tiny circles in place; do not sweep toward the wrist crease.',
    pressure: 'Very light. The finger pad should not dimple deeply into the palm.',
    notice: 'The skin shifts a little without a sharp or poking sensation.',
    avoid: 'A nail, thumb tip, deep pressure, or repeated work on a sore spot.'
  },
  {
    id: 'thumb-line-glide', title: 'Thumb-Line Glide', image: 'hand-thumb-line-glide.webp',
    alt: 'A flat thumb pad glides in a straight line along the middle of a relaxed palm from wrist side toward finger bases.',
    what: 'Make one short, straight glide along the middle of the palm.',
    place: 'Rest the palm-up hand on a towel and support its fingers from underneath.',
    contact: 'Lay the broad pad of your thumb flat on the palm; keep its tip relaxed.',
    direction: 'From the wrist-side palm toward the finger bases; ease off before the creases.',
    pressure: 'Light and steady, lighter on the return.',
    notice: 'The thumb pad stays flat and the wrist does not bend.',
    avoid: 'Digging with the thumb tip, crossing a tender crease, or pressing hard.'
  },
  {
    id: 'thenar-massage', title: 'Thenar Massage', image: 'hand-thenar-massage.webp',
    alt: 'A broad thumb pad rests on the fleshy mound at the base of the receiving hand’s thumb, with the wrist supported.',
    what: 'Slowly soften and release the broad fleshy mound at the base of the thumb.',
    place: 'Keep the receiving hand palm-up and the wrist resting on a cushion.',
    contact: 'Use the broad pad of your thumb on the center of the thenar mound.',
    direction: 'Small, shallow circles in place; keep off the thumb joint and web space.',
    pressure: 'Light enough that the receiving thumb stays loose.',
    notice: 'The mound yields gently without the thumb being pushed aside.',
    avoid: 'Pinching, digging, pressing the thumb joint, or making the person brace.'
  },
  {
    id: 'thumb-base-circles', title: 'Thumb Base Circles', image: 'hand-thumb-base-circles.webp',
    alt: 'Two soft finger pads trace tiny skin circles along the palm-side edge of the thumb-base mound, distinct from the central mound.',
    what: 'Trace tiny circles along the palm-side edge where the thumb mound meets the palm.',
    place: 'Rest the palm-up hand with the thumb naturally open, not stretched wide.',
    contact: 'Use the pads of your index and middle fingers together.',
    direction: 'Move in small circles along the soft edge of the mound; do not enter the thumb web.',
    pressure: 'Feather-light, with no squeezing of the thumb.',
    notice: 'The thumb stays comfortable and can move freely afterward.',
    avoid: 'Forcing the thumb open, pressing the thumb joint, or pinching the web space.'
  },
  {
    id: 'finger-base-circles', title: 'Finger Base Circles', image: 'hand-finger-base-circles.webp',
    alt: 'Soft finger pads make tiny circles on the palm just below the base of one relaxed finger.',
    what: 'Make a few tiny circles where one finger meets the palm, then move on only if welcome.',
    place: 'Keep the receiving palm up and the fingers resting in their natural position.',
    contact: 'Use one or two soft finger pads on the palm just below a finger base.',
    direction: 'Small circles in place; do not press into the finger joint or web space.',
    pressure: 'Very light and brief.',
    notice: 'The finger remains loose and does not curl away.',
    avoid: 'Poking between fingers, pressing a joint crease, or working over a sore area.'
  },
  {
    id: 'individual-finger-gliding', title: 'Individual Finger Gliding', image: 'hand-individual-finger-gliding.webp',
    alt: 'Flat finger pads glide gently along one supported relaxed finger from its base toward the tip without pulling.',
    what: 'Glide once along a single relaxed finger, then ease off before its tip.',
    place: 'Support the whole hand; let the chosen finger rest without straightening it.',
    contact: 'Use soft pads of two fingers laid lightly along the finger.',
    direction: 'From finger base toward the tip; release before reaching the fingertip.',
    pressure: 'Almost no squeeze; use still contact if skin drags.',
    notice: 'There is no tug at the fingertip and no change in wrist position.',
    avoid: 'Pinching around the finger, pulling, twisting, or bending a joint.'
  },
  {
    id: 'finger-joint-circles', title: 'Finger Joint Circles', image: 'hand-finger-joint-circles.webp',
    alt: 'One soft pad traces a tiny circle on the skin beside a relaxed middle finger joint without moving or pressing the joint.',
    what: 'If wanted, make one tiny skin circle beside a finger joint; do not mobilize it.',
    place: 'Rest the hand and let the finger lie in its comfortable position.',
    contact: 'Use one soft fingertip pad on the skin beside—not on top of—the joint.',
    direction: 'A tiny circle on the surrounding skin; leave the joint still.',
    pressure: 'Feather-light; skip if the joint is tender or sensitive.',
    notice: 'The finger stays completely relaxed and still.',
    avoid: 'Pressing the knuckle, squeezing the joint, bending, cracking, or twisting.'
  },
  {
    id: 'finger-squeeze-release', title: 'Finger Squeeze-and-Release', image: 'hand-finger-squeeze-release.webp',
    alt: 'Broad thumb and finger pads gently meet around the soft middle of one supported finger, then release without pinching.',
    what: 'Offer one tiny, gentle squeeze to the soft middle of a finger, then fully release.',
    place: 'Support the hand and choose a relaxed finger away from its joints.',
    contact: 'Use broad thumb and finger pads, not the tips or nails.',
    direction: 'A mild even contact from opposite sides, followed by a complete release.',
    pressure: 'Barely perceptible; one short squeeze only.',
    notice: 'Normal finger colour and comfort return immediately after release.',
    avoid: 'Pinching, holding pressure, squeezing a joint, or continuing through discomfort.'
  },
  {
    id: 'gentle-finger-stretch', title: 'Gentle Finger Stretch', image: 'hand-gentle-finger-stretch-receiver-led.svg',
    alt: 'Two-panel palm-up hand diagram: a supported, relaxed index finger then the recipient gently straightens that finger themselves. No practitioner grips or pulls it.',
    visualCue: 'Recipient moves; support the palm only; never pull the finger.',
    what: 'Invite the receiver to gently straighten one relaxed finger themselves; never move it for them.',
    place: 'Rest the palm-up hand on a towel; keep the wrist straight and relaxed.',
    contact: 'Keep the moving finger free; offer still palm support only if asked.',
    direction: 'The receiver straightens their own finger within an easy range, then relaxes.',
    pressure: 'No traction or external force; the receiver controls the whole motion.',
    notice: 'Movement is small, voluntary, and comfortable; stopping is easy.',
    avoid: 'Passive pulling, levering, end-range stretch, pain, or any stiff/injured finger.'
  },
  {
    id: 'finger-web-massage', title: 'Finger Web Massage', image: 'hand-finger-web-massage.webp',
    alt: 'A broad thumb pad makes a light surface stroke over the soft web skin between the thumb and index finger without pinching.',
    what: 'Make one light surface stroke across the soft web skin between thumb and index finger.',
    place: 'Support the relaxed hand with the thumb resting in its natural open position.',
    contact: 'Use a broad thumb pad on the skin; keep the other hand supporting, not pinching.',
    direction: 'A short outward stroke across the web surface, then lift away.',
    pressure: 'Very light. This is not focused point pressure.',
    notice: 'The thumb web stays soft and there is no deep or sharp sensation.',
    avoid: 'Pinching the web, pressing deeply, or using this as treatment. Skip targeted pressure-point work during pregnancy unless a maternity clinician advises otherwise.'
  },
  {
    id: 'back-of-hand-gliding', title: 'Back-of-Hand Gliding', image: 'hand-back-gliding.webp',
    alt: 'A relaxed broad hand glides lightly across the back of a supported hand toward the finger bases, avoiding prominent knuckles.',
    what: 'Make a short, light glide across the back of the hand, then ease away.',
    place: 'Rest the receiving hand palm-down on a soft towel with the wrist neutral.',
    contact: 'Use the broad pads of relaxed fingers or palm, not a thumb tip.',
    direction: 'Along the back of the hand from wrist toward finger bases, between prominent bones.',
    pressure: 'Feather-light; this area has little padding.',
    notice: 'Skin moves easily and tendons and knuckles are not pushed down.',
    avoid: 'Deep pressure, rubbing over sore tendons, pressing the wrist, or bending fingers.'
  },
  {
    id: 'gentle-wrist-circles', title: 'Gentle Wrist Circles', image: 'hand-gentle-wrist-circles-v2.webp',
    alt: 'Two relaxed fingertip pads make tiny circles on the soft back-of-wrist skin just above the crease while the hand stays fully supported and still.',
    what: 'Make tiny circles on soft skin just above the wrist crease, then release.',
    place: 'Rest the hand palm-down with the full forearm supported and the wrist straight.',
    contact: 'Use two broad fingertip pads on soft skin beside the wrist crease, clear of the tendons and bony prominences.',
    direction: 'Circle lightly on the skin; the wrist joint itself stays still.',
    pressure: 'Very light, surface-only contact.',
    notice: 'The supported hand remains motionless; there is no tenderness or tingling.',
    avoid: 'Pressing the crease, tendons, or bones; rotating, bending, pulling, or otherwise mobilizing the wrist.'
  },
  {
    id: 'complete-hand-finish', title: 'Complete Hand Finishing Sequence', image: 'hand-finishing-sequence.webp',
    alt: 'A relaxed broad palm rests over the supported receiving palm for a calm finish, with both wrists cushioned and no squeezing.',
    what: 'Blend one lighter palm glide into still contact, pause, then ease both hands away.',
    place: 'Leave the receiving hand supported palm-up and check that finishing touch is welcome.',
    contact: 'Use a relaxed broad palm, then simply rest it softly over the palm.',
    direction: 'One slow glide from wrist-side palm toward finger bases, followed by stillness.',
    pressure: 'Lighten gradually to no pressure before lifting away.',
    notice: 'The person has time to notice the finish; no hand or finger is moved.',
    avoid: 'Abruptly lifting, squeezing, adding a new technique, or moving the wrist.'
  }
];

const handMassageRoutine = {
  title: 'Hand & Fingers · 8 min', time: '8 min', tag: '15 gentle steps',
  description: 'A slow palm-to-finger sequence with supported hands, easy transitions, and a lighter closing touch.',
  lesson: 10, visualLesson: 10,
  steps: handMassageTechniques.map(function (technique) {
    const seconds = technique.id === 'complete-hand-finish' ? 60 : 30;
    return [seconds + ' sec', technique.title, 10, technique.what + ' ' + technique.pressure, technique.image, technique.alt];
  }),
  safety: 'Ask permission before each new contact. Keep pressure comfortable; stop for pain, tingling, numbness, colour change, or anything unusual.'
};
routineData.push(handMassageRoutine);
routineFollowAlongGuides.push(handMassageTechniques.map(function (technique) {
  return {
    area: "Hands",
    technique: technique.title,
    techniqueId: technique.id,
    short: technique.what,
    direction: technique.direction,
    pressure: technique.pressure,
    image: technique.image,
    alt: technique.alt
  };
}));
const pressurePointRoutineCues = {
  gv20: "Keep the head supported. Touch only if the midline and ear landmarks are clear; otherwise skip.",
  yintang: "Touch only the skin between inner brow ends; keep eyes and eyelids completely clear.",
  pc6: "Find the wrist crease and tendon interval without probing. Skip in pregnancy unless a maternity clinician advises otherwise.",
  li4: "Use the back-of-hand landmark on the index metacarpal, not the web. Avoid during pregnancy unless a maternity clinician advises otherwise.",
  st36: "Stay on soft muscle outside the shin bone. Skip a hot, red, swollen, injured, or painful lower leg.",
  ki1: "Stay seated and support the foot. Skip reduced sensation, circulation problems, broken skin, or uncertain balance."
};
const pressurePointRoutine = {
  title: 'Point Landmark Tour · 3 min', time: '3 min', tag: 'Optional · gentle only',
  description: 'A short educational tour of six named landmarks. Find the site, use at most a feather-light 5–10-second touch if appropriate, fully release, then pause. Skip any unclear or unsuitable point.',
  lesson: 10, visualLesson: 10,
  steps: pressurePoints.map(function (point) {
    const visual = pressurePointVisualSpecs[point.id];
    return ['30 sec', point.code + ' · ' + point.name, 10, pressurePointRoutineCues[point.id] + ' Try no more than 5–10 seconds, then fully release; the timer is not a pressure dose.', visual.image, visual.alt];
  }),
  safety: 'Traditional education only, not treatment. Pregnancy cautions apply to LI4 and PC6. Never press the throat, eyes, spine, joints, or injured areas; stop for any unusual symptom.'
};
routineData.push(pressurePointRoutine);
routineFollowAlongGuides.push(pressurePoints.map(function (point) {
  return {
    area: point.area,
    technique: point.code + ' · ' + point.name,
    short: pressurePointRoutineCues[point.id],
    direction: 'Straight, feather-light surface contact; do not dig or twist.',
    pressure: 'At most 5–10 seconds, then fully release · not a medical dose.',
    image: pressurePointVisualSpecs[point.id].image,
    alt: pressurePointVisualSpecs[point.id].alt,
    pointId: point.id
  };
}));

handMassageTechniques.forEach(function (technique) {
  libraryItems.push([
    technique.title, technique.what, '✋', 10, 'hand-massage', 'Hands', 'Beginner', technique.image, technique.alt, technique.id
  ]);
});

function handMassageStages() {
  return handMassageTechniques.map(function (technique) {
    return {
      title: technique.title,
      techniqueId: technique.id,
      seconds: technique.id === 'complete-hand-finish' ? 60 : 30,
      lesson: 10,
      image: technique.image,
      alt: technique.alt,
      instruction: technique.what + ' ' + technique.pressure
    };
  });
}

function handTechniqueVisualMarkup(technique) {
  return '<div class="hand-visual-wrap"><img src="/assets/lessons/' + technique.image + '" alt="' + esc(technique.alt) + '" width="1448" height="1086" loading="lazy" decoding="async" />' + handMovementCueSvg(technique.id, 'hand-motion-cue') + '</div>';
}

function handMassageQuickPracticeMarkup(lesson) {
  const items = handMassageTechniques.map(function (technique, index) {
    const previous = index ? '<button class="button small" type="button" data-sequence-previous aria-label="Previous hand movement: ' + esc(handMassageTechniques[index - 1].title) + '">← Previous</button>' : '<span></span>';
    const next = index < handMassageTechniques.length - 1 ? '<button class="button small" type="button" data-sequence-next aria-label="Next hand movement: ' + esc(handMassageTechniques[index + 1].title) + '">Next →</button>' : '<span></span>';
    return '<article class="hand-quick-card" data-sequence-item="' + technique.id + '"><figure>' + handTechniqueVisualMarkup(technique) + '<figcaption>Visual · ' + esc(technique.visualCue || technique.direction) + '</figcaption></figure><div><p class="eyebrow">' + String(index + 1).padStart(2, '0') + ' / 15</p><h3 tabindex="-1">' + esc(technique.title) + '</h3><p>' + esc(technique.what) + '</p><dl><div><dt>Contact</dt><dd>' + esc(technique.contact) + '</dd></div><div><dt>Pressure</dt><dd>' + esc(technique.pressure) + '</dd></div><div><dt>Notice</dt><dd>' + esc(technique.notice) + '</dd></div><div><dt>Avoid</dt><dd>' + esc(technique.avoid) + '</dd></div></dl><nav class="hand-technique-nav" aria-label="Hand practice steps">' + previous + next + '</nav><p class="sequence-key-hint" role="status" aria-live="polite">Technique ' + (index + 1) + ' of 15 · ← Previous <span aria-hidden="true">·</span> Next →</p></div></article>';
  }).join('');
  const nextLesson = lessons.find(function (item) { return item.id === lesson.id + 1; });
  return '<section class="quick-version hand-quick-practice" data-quick-practice="10"><div class="quick-practice-path"><div><p class="eyebrow">Quick practice · Hands &amp; fingers</p><p class="practice-count">15 distinct visual steps · ' + ((progress.practiceCompleted || []).length) + ' lesson practices checked</p></div><ol class="practice-progression" aria-label="Practice progression"><li>Learn</li><li aria-current="step">Practice</li><li>Check</li><li>Next skill</li></ol></div><header class="hand-quick-heading"><h2>Fifteen small, different movements.</h2><p>Follow the contact in each photo. Keep the wrist supported, use a light touch, and skip any step that is not welcome.</p></header>' + comfortCoachMarkup(lesson) + '<div class="hand-quick-list" data-sequence="hand-quick-practice">' + items + '</div><section class="hand-practice-panel"><p class="eyebrow">Practice · follow along</p><h3>15 steps · 8 minutes</h3><p>Each step has its own matching image; the final light finish gets extra time.</p>' + coachedPracticeMarkup('hand-routine', handMassageStages(), true) + '</section><div class="quick-version-bottom"><div class="quick-safety"><span aria-hidden="true">!</span><span>Stop for pain, tingling, numbness, colour change, or anything unusual.</span></div><div class="button-row practice-actions"><button class="button small practice-check" type="button" data-practice-id="10">Mark practice complete</button>' + (nextLesson ? '<a class="button practice-next" href="#/lesson/' + nextLesson.id + '">Next skill →</a>' : '') + '<a class="button" href="/hand-massage">Open complete hand-massage guide →</a></div><p class="practice-status" aria-live="polite">Start when you are ready; check it off when the movements feel clear.</p></div></section>';
}

function handMassagePage() {
  const lesson = lessons.find(function (item) { return item.id === 10; });
  const handComfort = Object.assign({}, lesson, { pressure: [
    'Keep hand, wrist, and forearm supported; ask what feels comfortable before starting.',
    'Use soft pads and small movements. More pressure does not make a better hand massage.',
    'Stop for pain, tingling, numbness, colour change, or an unusual sensation. Never force a finger or wrist joint.'
  ] });
  const pickerOptions = handMassageTechniques.map(function (technique, index) {
    return '<option value="' + technique.id + '" ' + (index === 0 ? 'selected' : '') + '>' + String(index + 1).padStart(2, '0') + ' · ' + esc(technique.title) + '</option>';
  }).join('');
  const picker = '<div class="sequence-picker-row"><label for="hand-technique-picker">Choose a technique<select id="hand-technique-picker" data-sequence-picker="hand-techniques">' + pickerOptions + '</select></label><p class="sequence-picker-progress" data-sequence-progress role="status" aria-live="polite">Technique 1 of ' + handMassageTechniques.length + '</p></div>';
  const cards = handMassageTechniques.map(function (technique, index) {
    const previous = index ? '<button class="button small" type="button" data-sequence-previous aria-label="Previous technique: ' + esc(handMassageTechniques[index - 1].title) + '">← Previous</button>' : '<span></span>';
    const next = index < handMassageTechniques.length - 1 ? '<button class="button small" type="button" data-sequence-next aria-label="Next technique: ' + esc(handMassageTechniques[index + 1].title) + '">Next →</button>' : '<a class="button small" href="/routines">Practice the full routine →</a>';
    const state = index === 0 ? ' aria-current="step"' : ' hidden';
    return '<article class="hand-technique-card" id="hand-technique-' + technique.id + '" data-sequence-item="' + technique.id + '"' + state + '><figure>' + handTechniqueVisualMarkup(technique) + '<figcaption>' + esc(technique.visualCue || 'Contact and movement · keep the hand supported.') + '</figcaption></figure><div class="hand-technique-copy"><p class="eyebrow">Technique ' + String(index + 1).padStart(2, '0') + ' of 15 · beginner</p><h3 tabindex="-1">' + esc(technique.title) + '</h3><p>' + esc(technique.what) + '</p><dl class="hand-cues"><div><dt>Position</dt><dd>' + esc(technique.place) + '</dd></div><div><dt>Contact</dt><dd>' + esc(technique.contact) + '</dd></div><div><dt>Direction</dt><dd>' + esc(technique.direction) + '</dd></div><div><dt>Pressure</dt><dd>' + esc(technique.pressure) + '</dd></div><div><dt>Notice</dt><dd>' + esc(technique.notice) + '</dd></div><div><dt>Avoid</dt><dd>' + esc(technique.avoid) + '</dd></div></dl><nav class="hand-technique-nav" aria-label="Hand technique sequence">' + previous + next + '</nav><p class="sequence-key-hint" role="status" aria-live="polite">Technique ' + (index + 1) + ' of 15 · ← Previous <span aria-hidden="true">·</span> Next →</p></div></article>';
  }).join('');
  return shell('<div class="page hand-massage-page"><header class="hand-page-hero"><div><p class="eyebrow">Hands · gentle touch · beginner</p><h1>Hand massage</h1><p class="lede">Fifteen distinct movements, taught one at a time. Keep the hand supported, check comfort, and skip anything unwelcome.</p><div class="button-row"><a class="button primary" href="#hand-practice">Practice all 15 steps →</a><a class="button" href="#hand-pressure-point">Explore hand point safety</a></div><div class="hand-hero-facts"><span>15 distinct techniques</span><span>8-minute guided sequence</span><span>Comfort before pressure</span></div></div><figure><img src="/assets/lessons/hand-palm-gliding.webp" alt="A broad relaxed palm glides across a supported palm-up hand." width="1448" height="1086" /></figure></header><aside class="hand-safety"><h2>Before you begin</h2><p>Ask permission, wash hands, and remove rings. Skip injured, swollen, bruised, inflamed, numb, or recently operated hands. Ask a clinician first if sensation or circulation is reduced.</p><p><strong>Stop for pain, burning, numbness, tingling, unusual weakness, dizziness, or skin colour change.</strong> Never force a wrist or finger joint. Persistent or worsening symptoms need professional advice.</p></aside><section aria-labelledby="hand-learn-title"><div class="section-heading"><div><p class="eyebrow">Learn · 01–15</p><h2 id="hand-learn-title">One technique at a time</h2></div><p>Choose from the menu or use Previous/Next. The image and every contact cue match the selected movement.</p></div>' + picker + '<div class="hand-technique-list" data-sequence="hand-techniques">' + cards + '</div></section><section id="hand-practice" class="hand-practice-panel" aria-labelledby="hand-practice-title"><p class="eyebrow">Practice · follow along</p><h2 id="hand-practice-title">Follow all 15 techniques</h2><p>Each step has its own photo and a short cue; the final light finish lasts longer. Pause, skip, or stop whenever needed.</p>' + coachedPracticeMarkup('hand-routine', handMassageStages(), true) + comfortCoachMarkup(handComfort) + '<div class="button-row"><a class="button primary" href="/routines">Open full-screen Follow Along →</a><a class="button subtle" href="/quick-practice?lesson=10">Open Quick Practice →</a></div></section>' + quickCheck(lesson) + '<section id="hand-pressure-point" class="hand-point-section"><div class="section-heading"><div><p class="eyebrow">Optional reference · traditional acupressure</p><h2>Hegu · LI4</h2></div><a class="button small" href="/pressure-points#point-li4">Open the LI4 point lesson →</a></div><p>Hand massage does not require point work. LI4 is a separate landmark lesson on the back of the hand—not the thumb-index web—and includes location references, pregnancy precautions, and full safety guidance.</p></section><div class="button-row"><a class="button" href="/lessons/10">Full Arms &amp; Hands lesson →</a><a class="button" href="/pressure-points">Browse Pressure Points →</a></div></div>', 'hand-massage');
}
