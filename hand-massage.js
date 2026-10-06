const handMassageTechniques = [
  {
    id: 'palm', title: 'Soft palm circles', image: 'hand-palm-contact.webp',
    alt: 'Soft finger pads rest on a palm-up hand while the wrist rests on a cushion and another relaxed hand supports underneath.',
    steps: ['Rest the forearm and wrist on a cushion. Ask the person to turn the palm up only if comfortable.', 'Support beneath the hand without squeezing. Set two or three soft finger pads on the fleshy palm and make a few tiny, slow skin circles.', 'Let circles become smaller and lighter, then rest the pads. Ease off before moving to another area.'],
    pressure: 'Begin with a light resting touch and ask about comfort. Keep the pads broad; more pressure is unnecessary.',
    notice: 'The hand and fingers can stay loose; skin shifts gently without scraping or pinching.',
    avoid: 'Digging with a thumb tip, pressing joint creases, gripping the hand, or working on tender skin.'
  },
  {
    id: 'fingers', title: 'Gentle finger strokes', image: 'hand-finger-stroke.webp',
    alt: 'Soft flat finger pads contact the palm-facing side of one relaxed finger near its base while the hand rests on a cushion.',
    steps: ['Ask whether finger touch is welcome. Keep the whole hand supported and let each finger rest in its comfortable position.', 'Lay soft pads along one finger and make a short, light stroke from its base toward its tip. Do not pinch around the finger or bend a joint.', 'Soften and lift before the tip; never pull. Try one comfortable pass on another finger only if wanted, then finish with still palm contact.'],
    pressure: 'Almost no squeeze. If dry skin drags, shorten the stroke or use still contact; do not add force.',
    notice: 'No tug at the fingertip or wrist. The person can relax rather than brace.',
    avoid: 'Traction, joint cracking, twisting, forceful stretching, and repeated rubbing over one sensitive spot.'
  }
];

function handMassageStages() {
  const palm = handMassageTechniques[0], fingers = handMassageTechniques[1];
  return [
    { title: 'Support, settle, and check', seconds: 30, lesson: 10, image: palm.image, alt: palm.alt, instruction: 'Support the forearm and wrist on a cushion. With permission, rest soft pads on the palm. Ask “Does this feel comfortable?” Keep your own shoulders loose.' },
    { title: 'Small palm circles', seconds: 60, lesson: 10, image: palm.image, alt: palm.alt, instruction: 'Try a few tiny, slow circles with soft finger pads, then rest or change to a nearby comfortable area. Keep the supporting hand loose and check comfort; skip any tender spot.' },
    { title: 'Optional gentle finger strokes', seconds: 30, lesson: 10, image: fingers.image, alt: fingers.alt, instruction: 'If wanted, use one short feather-light pass from finger base toward tip, easing off before the tip. Never squeeze, bend, or pull. Skip finger work and return to palm contact if unwelcome.' },
    { title: 'Soften and finish', seconds: 60, lesson: 10, image: palm.image, alt: palm.alt, instruction: 'Return to the preferred light palm contact. Let circles become smaller, rest softly, then announce the finish and ease hands away gradually. The cushion continues to support the wrist.' }
  ];
}

function handMassagePage() {
  const lesson = lessons.find(function (item) { return item.id === 10; });
  const handComfort = Object.assign({}, lesson, { pressure: [
    'Rest soft finger pads on the supported palm and ask whether contact feels comfortable. Keep the wrist and fingers free of squeezing.',
    'Keep circles small and finger strokes almost weightless. Adjust only a little if wanted and check again; never lean into a joint crease.',
    lesson.pressure[2]
  ] });
  const point = pressurePoints.find(function (item) { return item.id === 'li4'; });
  const cards = handMassageTechniques.map(function (technique, index) {
    return '<article class="hand-technique-card"><figure><img src="/assets/lessons/' + technique.image + '" alt="' + esc(technique.alt) + '" width="1448" height="1086" loading="lazy" /><figcaption>Hand placement · keep the wrist independently supported.</figcaption></figure><div class="hand-technique-copy"><p class="eyebrow">Technique ' + (index + 1) + ' · beginner</p><h3>' + esc(technique.title) + '</h3><ol class="hand-step-list">' + technique.steps.map(function (step, i) { return '<li><strong>' + ['Start', 'Action', 'Finish'][i] + '</strong><p>' + esc(step) + '</p></li>'; }).join('') + '</ol><dl class="hand-cues"><div><dt>Pressure</dt><dd>' + esc(technique.pressure) + '</dd></div><div><dt>Notice</dt><dd>' + esc(technique.notice) + '</dd></div><div><dt>Avoid</dt><dd>' + esc(technique.avoid) + '</dd></div></dl></div></article>';
  }).join('');
  return shell('<div class="page hand-massage-page"><header class="hand-page-hero"><div><p class="eyebrow">Hands · gentle touch · beginner</p><h1>Hand massage</h1><p class="lede">Support the hand, soften your fingers, and follow a calm sequence. Begin with comfortable palm contact; finger work is optional.</p><div class="button-row"><a class="button primary" href="#hand-practice">Try the 3-minute practice →</a><a class="button" href="#hand-pressure-point">Explore the hand pressure point</a></div><div class="hand-hero-facts"><span>2 gentle techniques</span><span>4 guided stages</span><span>Comfort before pressure</span></div></div><figure><img src="/assets/lessons/hand-palm-contact.webp" alt="' + esc(handMassageTechniques[0].alt) + '" width="1448" height="1086" /><figcaption>Rest the wrist on a cushion. Hands offer light contact, without squeezing.</figcaption></figure></header><aside class="hand-safety"><h2>Before you begin</h2><p>Ask permission, wash hands, and remove rings. Skip injured, swollen, bruised, inflamed, numb, or recently operated hands. Ask a clinician first if sensation or circulation is reduced.</p><p><strong>Stop for pain, burning, numbness, tingling, unusual weakness, dizziness, or skin colour change.</strong> Never force a wrist or finger joint. Persistent or worsening symptoms need professional advice.</p></aside><section aria-labelledby="hand-learn-title"><div class="section-heading"><div><p class="eyebrow">Learn</p><h2 id="hand-learn-title">Two small movements, an easy finish.</h2></div><p>Study the contact first. Slow down if either person tenses.</p></div><div class="hand-technique-list">' + cards + '</div></section><section id="hand-practice" class="hand-practice-panel" aria-labelledby="hand-practice-title"><p class="eyebrow">Practice</p><h2 id="hand-practice-title">Follow a gentle 3-minute sequence.</h2><p>These are flexible teaching prompts. Each stage pauses for a comfort check, and you can finish at any time.</p>' + coachedPracticeMarkup('hand-routine', handMassageStages(), true) + comfortCoachMarkup(handComfort) + '</section>' + quickCheck(lesson) + '<section id="hand-pressure-point" class="hand-point-section"><div class="section-heading"><div><p class="eyebrow">Optional learning · traditional acupressure</p><h2>Hand pressure point: Hegu · LI4</h2></div><a class="button small" href="/pressure-points">All pressure points →</a></div><p>Hand massage does not require pressure-point work. Learn this traditional landmark separately; it is not a treatment or cure. Read the location and safety guidance before trying it.</p>' + pressurePointCard(point) + '<p class="hand-point-source">Location reference: <a href="https://iris.who.int/bitstream/handle/10665/353407/9789290613831-eng.pdf?sequence=1" target="_blank" rel="noopener noreferrer">WHO standard point locations</a>. Practical safety: <a href="https://www.mskcc.org/cancer-care/patient-education/acupressure-pain-and-headaches" target="_blank" rel="noopener noreferrer">Memorial Sloan Kettering LI4 guidance</a>. Avoid LI4 during pregnancy; do not use it to postpone care.</p></section><div class="button-row"><a class="button" href="/lessons/10">Full Arms &amp; Hands lesson →</a><a class="button" href="/pressure-points#point-li4">LI4 in the Pressure Points library →</a></div></div>', 'hand-massage');
}
