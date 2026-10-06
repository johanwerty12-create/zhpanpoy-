const routineData = [
  {
    title: "3-Minute Quick Relaxation", time: "3 min", tag: "Fast reset", description: "A tiny routine for a calm, comfortable start or finish.", lesson: 3, visualLesson: 3,
    steps: [["30 sec", "Settle a supported forearm", 3, "Ask permission, lower a relaxed palm gently, and ask whether the contact feels comfortable. Breathe normally."], ["90 sec", "Warm with broad strokes", 3, "Glide slowly toward the elbow, stopping short of the joint. Soften the return and shorten strokes if skin or clothing drags."], ["1 min", "Soften into a finish", 3, "Slow and lighten familiar strokes, then rest the hand. Announce the finish, ease away gradually, and check comfort."]],
    safety: "Use light pressure. Stop for pain, numbness, tingling, dizziness, or anything unusual."
  },
  {
    title: "5-Minute Beginner Routine", time: "5 min", tag: "Start here", description: "A simple first routine using the course’s safest building blocks.", lesson: 13, visualLesson: 1,
    steps: [["1 min", "Settle the supported shoulders", 6, "Ask permission, support the arms, and rest broad palms on soft back shoulder muscle without pushing down."], ["2 min", "Warm and glide broadly", 6, "Glide slowly outward, stopping before the bony shoulder tip. Keep the neck clear and soften every return."], ["1 min", "Offer a few small circles", 4, "Ask whether circles are wanted. Alternate a few relaxed-palm circles with broad strokes; gliding alone is fine."], ["1 min", "Finish with lighter strokes", 6, "Slow and lighten familiar strokes, rest briefly, then release gradually and check comfort."]],
    safety: "Keep the movement easy to receive. Never work through pain."
  },
  {
    title: "10-Minute Relaxation Routine", time: "10 min", tag: "Most complete", description: "A calm sequence for shoulders and upper back with time to listen.", lesson: 13, visualLesson: 7,
    steps: [["2 min", "Settle and warm the upper back", 7, "Support the person and ask permission. Rest broad hands beside the spine, then introduce slow gliding and check comfort."], ["3 min", "Flow toward the shoulders", 7, "Glide upward and outward over broad muscle. Keep off bones, soften the return, and shorten the path if fabric drags."], ["2 min", "Offer gentle focused work", 6, "Soften into back shoulder contact. If wanted, alternate a few small palm circles with broad strokes; avoid prolonged pressure in one spot."], ["1 min", "Reconnect with broad strokes", 7, "Ease back to familiar upper-back strokes. Check comfort and relax your own shoulders and wrists."], ["2 min", "Slow the closing strokes", 7, "Gradually slow and lighten the strokes, rest briefly, announce the finish, then ease away."]],
    safety: "Stay beside the spine. Avoid the neck, joints, and any injured or painful area."
  },
  {
    title: "Head & Scalp Routine", time: "5 min", tag: "Head", description: "A light, quiet rhythm for the scalp without tugging hair.", lesson: 9, visualLesson: 9,
    steps: [["1 min", "Settle with soft finger pads", 9, "Support the head independently. Ask about hair and scalp sensitivity, then rest soft pads without pulling strands."], ["2 min", "Small circles and gentle zone changes", 9, "Try a few tiny circles. Ease pressure to zero before shifting zones; check hair comfort and avoid grinding on one spot."], ["1 min", "Return to the preferred contact", 9, "Ask which contact felt best and repeat it softly. Temple work, tapping, and raking can all be skipped."], ["1 min", "Still contact and slow release", 9, "Let movement become smaller and quieter, then rest softly and ease away. Keep the head still."]],
    safety: "Keep nails out of the way. Stop for a new or unusual headache, nausea, dizziness, or scalp pain."
  },
  {
    title: "Hands & Arms Routine", time: "5 min", tag: "Hands", description: "A practical desk-break flow that supports the arm before it moves.", lesson: 10, visualLesson: 10,
    steps: [["1 min", "Support and settle", 10, "Rest elbow and wrist on cushions. Ask permission and lower a broad palm; keep the wrist in its comfortable position."], ["2 min", "Warm the forearm slowly", 10, "Glide toward the elbow, stopping before the joint. Soften the return and ask about comfort."], ["1 min", "Optional palm and finger contact", 10, "Ask the person to turn the palm up only if comfortable. Support it and offer tiny finger-pad circles; optional finger strokes ease off before the tip without tugging.", "hand-palm-contact.webp", "Soft finger pads contact a supported palm-up hand without squeezing or pulling."], ["1 min", "Return to a quiet finish", 10, "Ease back into lighter forearm strokes, then still contact. Keep the limb supported as you gradually release."]],
    safety: "Do not force the wrist or fingers. Stop for tingling, numbness, or sharp pain."
  },
  {
    title: "Shoulders Routine", time: "6 min", tag: "Shoulders", description: "A compact shoulder sequence that keeps the neck and joints clear.", lesson: 6, visualLesson: 6,
    steps: [["1 min", "Settle the shoulders", 6, "Ask permission, support the arms, and rest relaxed palms on soft back shoulder muscle. Do not push down."], ["2 min", "Warm with broad outward strokes", 6, "Glide slowly outward, keeping clear of the neck and bony shoulder tip. Ease pressure before each return."], ["1 min", "Optional small circles", 4, "Check comfort, then alternate a few small palm circles with broad strokes. Skip circles if the person braces."], ["2 min", "Soften and close", 6, "Return to slower, lighter strokes, then still contact. Announce the finish, release gradually, and ask how it felt."]],
    safety: "Stay on soft muscle. Never press hard on the spine, collarbone, shoulder joint, or neck."
  },
  {
    title: "Beginner Full Routine", time: "10 min", tag: "Course finish", description: "A repeatable flow that combines the skills from the whole course.", lesson: 13, visualLesson: 13,
    steps: [["2 min", "Settle and warm one forearm", 10, "Use a healthy, supported forearm for this guided example. Ask permission, rest the palm, then introduce short light glides."], ["3 min", "Continue broad, easy strokes", 10, "Glide toward the elbow with lighter returns. Keep shoulders loose and ask whether contact still feels comfortable."], ["2 min", "Offer short focused movements", 10, "If wanted, alternate a few tiny finger-pad circles on soft forearm muscle with gliding. Change zones and keep off joints."], ["1 min", "Blend back into broad contact", 10, "Let circles soften into familiar lighter strokes. Check comfort and pause if either person becomes tense."], ["2 min", "Finish slowly", 10, "Slow and lighten the strokes, then rest the hand. Announce the finish and ease away without moving the arm."]],
    safety: "A shorter comfortable routine is always better than pushing through. Massage is not medical treatment."
  }
];

const libraryItems = [
  ["Gentle gliding", "Slow broad strokes, a lighter return, and a gradual finish.", "→", 3, "movement", "Any broad area", "Beginner"],
  ["Small circles", "Warm first, make a few tiny palm circles, then soften into gliding.", "◌", 4, "movement", "Shoulders · back · limbs", "Beginner"],
  ["Beginner kneading", "Warm first, gather shallowly without pinching, and release gradually.", "≈", 5, "movement", "Soft muscle", "Beginner"],
  ["Still contact", "Lower a relaxed hand gently, check comfort, and ease away slowly.", "○", 1, "movement", "Any comfortable area", "Beginner"],
  ["Palm support", "Relax the whole palm and keep wrists, elbows, and shoulders comfortable.", "☼", 2, "movement", "Any comfortable area", "Beginner"],
  ["Light finger strokes", "Soft pads, short easy movements, and no nails, pulling, or dry-skin drag.", "✺", 9, "movement", "Head · hands · feet", "Beginner"]
];

const areaInfo = [
  { title: "Head", icon: "✺", description: "Light scalp contact with finger pads and no hair tugging.", techniques: "Small circles · still contact", routine: "Head & Scalp · 5 min", lesson: 9, safety: "Stop for new or unusual headache symptoms." },
  { title: "Neck", icon: "○", description: "Supportive contact only; keep the head neutral and still.", techniques: "Optional still contact · shoulder strokes", routine: "Shoulders first · 6 min", lesson: 8, safety: "Never twist, crack, pull, or force the neck." },
  { title: "Shoulders", icon: "⌁", description: "Broad strokes and small circles over soft shoulder muscle.", techniques: "Gliding · circles · kneading", routine: "Shoulders · 6 min", lesson: 6, safety: "Keep the spine, collarbone, shoulder joint, and neck clear." },
  { title: "Back", icon: "▱", description: "A broad path beside the spine, never directly on it.", techniques: "Gliding · circles", routine: "10-Minute Relaxation · 10 min", lesson: 7, safety: "Avoid injury, swelling, unexplained pain, and direct spine pressure." },
  { title: "Arms", icon: "↗", description: "Support the limb before tracing the forearm with broad contact.", techniques: "Gliding · palm support", routine: "Hands & Arms · 5 min", lesson: 10, safety: "Stop for tingling, numbness, or sharp pain." },
  { title: "Hands", icon: "☼", description: "Rest the palm, soften the fingers, and keep the wrist neutral.", techniques: "Palm support · relaxed wrist", routine: "Hands & Arms · 5 min", lesson: 2, safety: "Keep the wrist neutral and never force a finger joint." },
  { title: "Legs", icon: "↕", description: "Long strokes on soft muscle while the knee and ankle stay supported.", techniques: "Gliding · circles", routine: "Legs lesson · 7 min", lesson: 11, safety: "Do not massage hot, red, swollen, or acutely painful areas." },
  { title: "Feet", icon: "⌂", description: "Small, easy-to-adjust movements across the sole and heel.", techniques: "Broad thumb-pad circles · light strokes", routine: "Feet lesson · 6 min", lesson: 12, safety: "Avoid broken skin, reduced sensation, and forceful toe movement." }
];

const pressurePointAreas = ["Head", "Face", "Neck", "Shoulders", "Arms", "Hands", "Back", "Legs", "Feet"];

const pressurePoints = [
  {
    id: "gv20", name: "Baihui", code: "GV20", area: "Head", tradition: "Governing Vessel (Du Mai)", difficulty: "Beginner · very light touch",
    where: "On the scalp midline at the crown. The WHO location is 5 proportional bone-cun (B-cun) above the front hairline; a cross-check is the midpoint between the ear apices when the ears are folded forward. A B-cun is a body-proportional measure, not a fixed number of centimetres.",
    landmarks: "Front hairline, the centre line running from forehead to back of head, and the highest points of the folded outer ears (auricular apices). Hair whorls and the apparent top of the skull are not reliable substitutes.",
    find: ["Sit or lie with your head supported and scalp comfortable.", "Find the centre of your front hairline, then trace the centre line over the scalp toward the back of your head.", "Use the WHO proportional measurement (5 B-cun from the front hairline) or gently fold each outer ear forward and identify the midpoint between the ear apices on the scalp midline.", "The two methods are cross-checks; if they do not agree clearly, skip the point rather than guessing. The drawing is relational, not to scale."],
    position: "Keep your head still and supported. Use the broad pad of one index or middle finger; keep the nail away from the scalp.",
    pressure: "Rest the broad pad very lightly on the scalp, directly at the landmark. Do not dig, scrape, or drive pressure into the underlying bone; check comfort before continuing.",
    hold: "Try 5–10 seconds, then reassess. This is a cautious learning cue, not a validated therapeutic dose.",
    release: "Soften the pressure over about two seconds, then lift the finger straight away. Do not suddenly jab or drag across the scalp.",
    traditional: "Traditional point systems include GV20 in practitioner-selected head-area and settling routines. Uses vary by tradition; this is not evidence that pressing it treats headache, dizziness, sleep, or any condition.",
    feel: "A mild, comfortable skin/scalp contact. You should be able to relax your jaw and breathe normally.",
    notFeel: "No sharp or deep pain, headache, dizziness, nausea, tingling, numbness, visual change, or pressure inside the head.",
    mistakes: "Using the hair whorl or a guessed crown as the location; pushing with a nail; pressing hard through hair; or continuing when landmarks are unclear.",
    avoid: "Skip on a tender, bruised, inflamed, injured, or recently operated scalp, or if you have altered sensation there. Ask a clinician first after head injury or cranial surgery.",
    stop: "Lift off immediately for pain, headache that starts or worsens, dizziness, nausea, numbness, visual symptoms, or any unusual feeling.",
    seek: "Get medical advice for a new, recurring, worsening, or unexplained headache or dizziness. Sudden severe headache, fainting, new weakness, confusion, or vision loss needs urgent medical assessment.",
    traditionalNote: "Point name and location belong to a traditional system; they do not establish a special anatomical structure or medical effect."
  },
  {
    id: "yintang", name: "Yintang", code: "EX-HN3", area: "Face", tradition: "Extra point · between the eyebrows", difficulty: "Beginner · feather-light touch",
    where: "At the midpoint between the medial ends (inner ends) of the two eyebrows, on the forehead midline. Do not shift upward onto the forehead or downward toward the eyes.",
    landmarks: "The inner ends of both eyebrows and the midline above the bridge of the nose. The eyeballs and eyelids are nearby but are not contact areas.",
    find: ["Sit with your head supported and eyes relaxed or closed.", "Find where each eyebrow begins nearest the bridge of the nose.", "Imagine a short line joining those two inner eyebrow ends; its midpoint is Yintang.", "If the midpoint is unclear or tender, leave it alone—do not search by pressing around the eye."],
    position: "Rest the elbow or hand so it does not hover. Place one clean index-finger pad flat on the skin between the brows; keep the finger off both eyelids.",
    pressure: "Feather-light, directly inward. This is delicate facial skin: do not press down toward the nose, rub, or push on an eye socket.",
    hold: "Try 5 seconds, then lift and check. No validated self-acupressure dose is established here; longer or harder is not better.",
    release: "Ease off slowly, then lift straight away. Do not pull or rub the skin afterward.",
    traditional: "Yintang is traditionally described in Chinese medicine as a settling or calming point. Evidence from point traditions is not proof that it treats anxiety, insomnia, or a medical condition.",
    feel: "A light touch on the skin between the brows, with no need to feel a special sensation.",
    notFeel: "No eye pressure, sharp pain, headache, burning, tingling, numbness, dizziness, or worsening facial discomfort.",
    mistakes: "Pressing on the eyeball/eyelid, pushing into the nose bridge, using a fingernail, or treating any sensation as proof of a therapeutic effect.",
    avoid: "Avoid broken, irritated, bruised, infected, recently treated, or painful skin. Do not use this point to self-manage eye pain or a new severe headache.",
    stop: "Stop immediately for eye discomfort or visual change, sharp pain, burning, numbness, dizziness, or symptoms that worsen.",
    seek: "Seek professional advice for persistent or worsening headache, eye pain, vision change, or significant anxiety affecting daily life; urgent or sudden symptoms need prompt care.",
    traditionalNote: "The point name/location are traditional terminology; they are not proof of a medical mechanism or treatment effect."
  },
  {
    id: "pc6", name: "Neiguan", code: "PC6", area: "Arms", tradition: "Pericardium channel", difficulty: "Beginner · gentle surface pressure",
    where: "On the palm-facing (anterior) forearm, between the palmaris longus and flexor carpi radialis tendons, 2 proportional bone-cun proximal (toward the elbow) from the palmar wrist crease. If the palmaris longus tendon is absent, WHO places the point medial to the flexor carpi radialis tendon.",
    landmarks: "The palmar wrist crease and the two cord-like tendons that become easier to see when the fist is gently clenched, wrist turned palm-up, and elbow slightly bent. Palmaris longus is not present in everyone.",
    find: ["Rest the forearm palm-up on a table or cushion; keep the wrist relaxed.", "Gently make a fist for a moment to bring the tendons into view, then relax the hand.", "Identify the palmar wrist crease and the palmaris longus and flexor carpi radialis tendons. If one tendon is not easy to identify, do not probe or squeeze to find it.", "Measure 2 B-cun up the forearm from the wrist crease, between the tendons. If palmaris longus is absent, the standardized location is just medial to the flexor carpi radialis tendon. The proportional measure is not a fixed centimetre value."],
    position: "Support the forearm fully. Use the soft pad of the opposite thumb or index finger, not the thumb tip; keep the wrist neutral.",
    pressure: "Light, straight inward pressure between the tendons. Do not push deeply, squeeze across the forearm, or cause tingling into the hand.",
    hold: "Try 5–10 seconds and check comfort. There is no validated dose provided by this beginner lesson.",
    release: "Gradually soften, lift straight off, then let the wrist rest. Do not flick or massage over any tingling.",
    traditional: "PC6 is traditionally selected in acupressure practice for nausea. That traditional use is not a guarantee of benefit and must not replace medical care or prescribed anti-nausea treatment.",
    feel: "Gentle, local pressure on the forearm skin with the hand remaining relaxed.",
    notFeel: "No electric, shooting, tingling, numb, burning, or sharp sensation; no hand weakness, dizziness, or worsening nausea.",
    mistakes: "Pressing on a tendon rather than the soft space between the landmarks; using a sharp fingertip; bending the wrist; or pressing harder to create a sensation.",
    avoid: "Avoid a sore, injured, bruised, swollen, numb, or recently operated wrist/forearm. During pregnancy, skip LI4 and PC6 self-acupressure unless your maternity clinician specifically advises it; pregnancy-related point use belongs with qualified care.",
    stop: "Release at once for tingling, numbness, pain, skin colour change, weakness, dizziness, or increasing nausea.",
    seek: "Ask a clinician about persistent or repeated nausea, dehydration, severe abdominal pain, vomiting blood, or symptoms during pregnancy. Acupressure is not a substitute for finding the cause.",
    traditionalNote: "Evidence for acupuncture or other acupoint stimulation cannot automatically be applied to manual self-pressure; this lesson makes no treatment claim."
  },
  {
    id: "li4", name: "Hegu", code: "LI4", area: "Hands", tradition: "Large Intestine channel", difficulty: "Beginner · gentle pressure only",
    where: "On the back (dorsum) of the hand, on the thumb-side (radial side) of the midpoint of the second metacarpal bone—the long bone running from the index-finger knuckle toward the wrist. The WHO-standard location is on the metacarpal landmark, not simply the webbing between thumb and index finger.",
    landmarks: "The second metacarpal shaft, the index-finger knuckle, and the thumb-side edge of that bone. Keep the thumb-index web space distinct from the standardized marker.",
    find: ["Rest the hand palm-down, fingers soft, on a cushion.", "Trace the long bone from the index-finger knuckle back toward the wrist; this is the second metacarpal.", "Find the midpoint of that bone, then move to its thumb-side edge. The diagram shows this WHO landmark; the common web-space pinch is not a precise substitute.", "If you cannot clearly feel the bone and its midpoint, do not pinch around searching for a tender spot."],
    position: "Support the hand. Place the broad pad of your opposite thumb on the point, with the other fingers supporting the palm underneath.",
    pressure: "Gentle pressure straight into the soft tissue at the marked landmark. Do not pinch the web space or press hard against the bone.",
    hold: "Try 5–10 seconds, then reassess. No validated therapeutic dose is established here.",
    release: "Soften slowly and lift the thumb; open the hand without pulling the fingers.",
    traditional: "Traditional acupressure systems often select LI4 in head- or face-area routines. That is a description of practice, not proof that it relieves pain or treats a condition.",
    feel: "Mild pressure under the thumb pad. The hand stays relaxed and comfortable.",
    notFeel: "No sharp pain, electric sensation, tingling, numbness, bruising, hand weakness, or pain that travels into a finger.",
    mistakes: "Using a hard pinch in the thumb-index web; locating solely by the highest muscle bulge; pressing the bone; or confusing a traditional rough cue with the WHO standardized location.",
    avoid: "Do not self-press LI4 during pregnancy unless your maternity clinician specifically approves it. Also avoid injured, swollen, bruised, numb, inflamed, or recently operated hands and areas with broken skin.",
    stop: "Stop immediately for pain, tingling, numbness, colour change, weakness, or any unusual hand sensation.",
    seek: "Seek advice for ongoing hand pain, swelling, numbness, or weakness. A sudden severe headache or new neurological symptoms need urgent medical care; do not try to treat them with a pressure point.",
    traditionalNote: "LI4 has varied traditional descriptions. The exact marker here follows the WHO standardized landmark; pressure is only gentle surface contact."
  },
  {
    id: "st36", name: "Zusanli", code: "ST36", area: "Legs", tradition: "Stomach channel", difficulty: "Beginner · gentle surface pressure",
    where: "On the anterior aspect of the lower leg, on the line connecting ST35 to ST41, 3 proportional bone-cun below ST35. WHO notes it lies on the tibialis anterior muscle—the soft muscle just to the outside of the front shin bone.",
    landmarks: "ST35 is the small hollow just below and outside the kneecap; ST41 is at the front ankle crease. The hard front edge of the tibia (shin bone) and the softer tibialis anterior muscle are the key references.",
    find: ["Sit with the knee bent and the leg supported; let the foot rest.", "Find the kneecap, then the small hollow just below and to its outside (ST35). Find the front ankle crease (ST41).", "Follow the surface line between those landmarks. Measure 3 B-cun down from ST35 using proportional body measurement—not a fixed centimetre guess.", "Gently lift the toes toward the shin: the tibialis anterior muscle firms just outside the front shin bone. The standardized point is on that muscle at the described level, not on the hard tibial crest. If the landmarks do not line up clearly, skip it."],
    position: "Keep the knee and ankle supported. Use a relaxed thumb pad or two finger pads on the muscle; do not brace by digging fingers into the back of the leg.",
    pressure: "Light, straight inward pressure into soft muscle only. Keep clear of the hard shin bone and do not press deeply into the lower leg.",
    hold: "Try 5–10 seconds, then release and reassess. This conservative interval is a learning cue, not a medical dose.",
    release: "Ease off gradually and lift away; let the leg relax before standing.",
    traditional: "ST36 is a commonly named point in traditional routines, including some selected for digestive or general-wellness themes. Traditional use does not establish a proven digestive or energy effect.",
    feel: "A mild, broad pressure in soft muscle; no need to find tenderness or a special sensation.",
    notFeel: "No sharp pain, pins-and-needles, numbness, burning, cramp, weakness, or pain that travels down the leg.",
    mistakes: "Pressing on the shin bone; guessing a fixed distance; pressing into a tender spot to make it ‘count’; or confusing the knee/ankle landmarks.",
    avoid: "Avoid a painful, swollen, bruised, hot, red, injured, numb, or recently operated lower leg. If you have reduced sensation or circulation problems, do not self-press without clinician guidance.",
    stop: "Stop immediately for pain, cramping, tingling, numbness, weakness, skin colour change, or an unusual cold/warm feeling.",
    seek: "Seek medical advice for unexplained leg pain or swelling. A suddenly swollen, warm, red, or painful leg needs prompt professional assessment rather than massage.",
    traditionalNote: "The point’s traditional name/channel does not indicate a special muscle or prove an effect on internal organs."
  },
  {
    id: "ki1", name: "Yongquan", code: "KI1", area: "Feet", tradition: "Kidney channel · sole of foot", difficulty: "Beginner · only if foot sensation is normal",
    where: "On the sole, in the deepest depression that appears when the toes are flexed. WHO’s note places it approximately at the junction of the anterior one-third and posterior two-thirds of the line from the heel to the web margin between the bases of the second and third toes (about two-thirds of that line from the heel).",
    landmarks: "Heel, the web margin between the second and third toe bases, and the central soft sole. The location is a surface landmark—not a fixed mark on every foot.",
    find: ["Sit down and support the foot; do not balance while reaching for the sole.", "Trace an imaginary line from the centre of the heel toward the web between the second and third toe bases.", "Gently curl the toes. Notice where a shallow depression forms on the sole, roughly two-thirds of the way from the heel toward that web margin.", "Use the depression and the line together. If there is no clear comfortable landmark, do not guess or push around the sole."],
    position: "Keep the foot fully supported. Use the broad thumb pad, with the other hand cradling the top of the foot; keep toes relaxed.",
    pressure: "Very gentle pressure straight into the sole. Do not drive the thumb deeply, use knuckles/tools, or force the toes into flexion.",
    hold: "Try 5–10 seconds, then check the foot before any repeat. This is a conservative practice cue, not an evidence-based therapeutic dose.",
    release: "Reduce pressure slowly, lift the thumb, then let the foot rest. Do not stand until normal feeling and balance are clear.",
    traditional: "Yongquan is a named point in traditional Chinese medicine, sometimes included in settling or grounding routines. Those traditional associations are not established medical effects.",
    feel: "A mild, comfortable pressure on the sole while the foot remains relaxed.",
    notFeel: "No sharp or burning pain, cramp, tingling, numbness, skin injury, dizziness, or lingering soreness.",
    mistakes: "Pressing hard because the sole feels thick; using a hard object; forcing toe curl; or self-treating a foot whose sensation is reduced.",
    avoid: "Do not self-press if you have diabetes-related nerve changes, reduced foot sensation, poor circulation, an ulcer, broken skin, infection, bruising, acute injury, or recent foot surgery unless a clinician clears it.",
    stop: "Stop immediately for pain, tingling, numbness, cramp, colour change, unsteadiness, dizziness, or any unusual sensation.",
    seek: "Ask a clinician about persistent foot pain, numbness, wounds, swelling, or balance changes. A new wound or sudden loss of sensation needs prompt care.",
    traditionalNote: "A traditional point label is not a diagnosis and does not show that pressure on the sole affects kidney function."
  }
];

const pressureAreaNotes = {
  Neck: { title: "No focused neck point in this beginner guide", text: "Front and side neck tissues include vulnerable structures, and a point diagram here could encourage unsafe pressure. This page intentionally gives no neck pressure-point marker. For gentle, broad support only, use the existing neck lesson; never press the throat or side of the neck, and never twist or traction the head.", lesson: 8, action: "Review the gentle neck-support lesson" },
  Shoulders: { title: "No shoulder pressure point taught here", text: "Named traditional shoulder points can sit close to the neck and other sensitive structures, and some point-use traditions include pregnancy cautions. This page does not guess a shoulder marker. Use the existing broad, comfortable shoulder lesson instead of focused digging.", lesson: 6, action: "Review the broad shoulder lesson" },
  Back: { title: "No focused back point in this beginner guide", text: "Back point systems use proportional landmarks and include areas near the spine, ribs, and deeper tissues. Without supervised location training, a guessed marker would be misleading. Follow the existing broad back lesson and stay off the spine; skip focused pressure here.", lesson: 7, action: "Review the upper-back lesson" }
};

function pressurePointVisualMarkup(id) {
  const diagrams = {
    gv20: `<svg viewBox="0 0 640 430" role="img" aria-labelledby="gv20-title gv20-desc"><title id="gv20-title">GV20 Baihui on a top-view scalp diagram</title><desc id="gv20-desc">A top view of the head shows the anterior hairline, the front-to-back midline, both ear apices, and GV20 at the midpoint between the ear apices on the midline. A finger pad approaches straight down.</desc><defs><marker id="gv20-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#285b40"/></marker></defs><rect width="640" height="430" rx="22" fill="#f6f3ed"/><text x="28" y="36" class="pp-svg-kicker">HEAD · TOP VIEW</text><path d="M320 60 C216 60 154 133 154 241 C154 321 219 375 320 380 C421 375 486 321 486 241 C486 133 424 60 320 60Z" fill="#f2d9c7" stroke="#684c3d" stroke-width="4"/><path d="M154 193 C124 172 113 204 132 246 C141 263 154 263 164 250 M486 193 C516 172 527 204 508 246 C499 263 486 263 476 250" fill="#f2d9c7" stroke="#684c3d" stroke-width="4"/><path d="M251 83 Q320 104 389 83" fill="none" stroke="#9b765f" stroke-width="4"/><text x="24" y="112" class="pp-svg-label">Front hairline</text><path d="M126 117H245" class="pp-svg-leader"/><path d="M320 91V352" stroke="#526a5b" stroke-width="3" stroke-dasharray="8 7"/><text x="352" y="350" class="pp-svg-label">Scalp midline</text><path d="M345 340L324 315" class="pp-svg-leader"/><path d="M149 190H491" stroke="#b88722" stroke-width="2" stroke-dasharray="7 7"/><text x="26" y="286" class="pp-svg-label">Ear apex cross-check</text><path d="M200 275L175 206" class="pp-svg-leader"/><circle cx="320" cy="190" r="16" fill="#fff" stroke="#b27410" stroke-width="6"/><circle cx="320" cy="190" r="5" fill="#b27410"/><text x="342" y="188" class="pp-svg-point">GV20</text><path d="M320 122V158" stroke="#285b40" stroke-width="4" marker-end="url(#gv20-arrow)"/><path d="M293 84 Q320 60 347 84 L340 103 Q320 92 300 103Z" fill="#d9b99f" stroke="#684c3d" stroke-width="3"/><text x="386" y="113" class="pp-svg-label">Soft finger pad</text><path d="M380 119L344 101" class="pp-svg-leader"/><rect x="26" y="382" width="588" height="28" rx="14" fill="#fff"/><text x="42" y="402" class="pp-svg-note">Marker uses WHO midline + folded-ear-apex relationship; illustration is not to scale.</text></svg>`,
    yintang: `<svg viewBox="0 0 640 430" role="img" aria-labelledby="yintang-title yintang-desc"><title id="yintang-title">Yintang between the eyebrows</title><desc id="yintang-desc">A front view of the brow region shows the two inner eyebrow ends, their midpoint on the forehead midline, and a flat finger pad pressing very lightly toward the skin, clear of the eyes.</desc><defs><marker id="yintang-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#285b40"/></marker></defs><rect width="640" height="430" rx="22" fill="#f6f3ed"/><text x="28" y="36" class="pp-svg-kicker">FACE · FRONT VIEW</text><path d="M320 65 C210 65 164 131 171 252 C176 333 232 379 320 385 C408 379 464 333 469 252 C476 131 430 65 320 65Z" fill="#f2d9c7" stroke="#684c3d" stroke-width="4"/><path d="M207 180 Q253 151 292 175 M348 175 Q387 151 433 180" fill="none" stroke="#684c3d" stroke-width="11" stroke-linecap="round"/><path d="M207 210 Q251 187 291 209 M349 209 Q389 187 433 210" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/><path d="M207 210 Q251 226 291 209 M349 209 Q389 226 433 210" fill="none" stroke="#684c3d" stroke-width="3"/><path d="M320 91V247" stroke="#9f856f" stroke-width="2" stroke-dasharray="6 7"/><circle cx="320" cy="175" r="14" fill="#fff" stroke="#b27410" stroke-width="6"/><circle cx="320" cy="175" r="4" fill="#b27410"/><path d="M320 108V144" stroke="#285b40" stroke-width="4" marker-end="url(#yintang-arrow)"/><path d="M296 80 Q320 55 344 80 L340 94 Q320 85 300 94Z" fill="#d9b99f" stroke="#684c3d" stroke-width="3"/><text x="26" y="147" class="pp-svg-label">Inner ends of brows</text><path d="M183 153L212 170 M457 153L428 170" class="pp-svg-leader"/><text x="405" y="258" class="pp-svg-label">Eyes stay clear</text><path d="M402 247L385 218" class="pp-svg-leader"/><text x="344" y="173" class="pp-svg-point">Yintang</text><path d="M338 179L331 177" class="pp-svg-leader"/><rect x="26" y="382" width="588" height="28" rx="14" fill="#fff"/><text x="42" y="402" class="pp-svg-note">Exact midpoint between inner brow ends; finger pad stays above the eyes.</text></svg>`,
    pc6: `<svg viewBox="0 0 640 430" role="img" aria-labelledby="pc6-title pc6-desc"><title id="pc6-title">PC6 Neiguan on the palm-facing forearm</title><desc id="pc6-desc">A palm-up forearm diagram labels the wrist crease, flexor carpi radialis and palmaris longus tendons, and PC6 two proportional bone-cun above the crease between the tendons. An opposite thumb pad applies light straight pressure.</desc><defs><marker id="pc6-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#285b40"/></marker></defs><rect width="640" height="430" rx="22" fill="#f6f3ed"/><text x="28" y="36" class="pp-svg-kicker">ARM · PALM-FACING VIEW</text><path d="M246 72 Q220 122 229 273 L242 335 Q280 350 320 346 Q360 350 398 335 L411 273 Q420 122 394 72Z" fill="#f2d9c7" stroke="#684c3d" stroke-width="4"/><path d="M242 334 Q218 352 214 385 Q266 402 320 397 Q374 402 426 385 Q422 352 398 334" fill="#f2d9c7" stroke="#684c3d" stroke-width="4"/><path d="M250 334L240 398 M390 334L400 398" stroke="#684c3d" stroke-width="3"/><path d="M286 106 Q278 210 281 326" fill="none" stroke="#6e7e70" stroke-width="7" stroke-linecap="round"/><path d="M352 106 Q359 210 353 326" fill="none" stroke="#6e7e70" stroke-width="7" stroke-linecap="round"/><path d="M229 321H411" stroke="#704e3c" stroke-width="4"/><text x="424" y="326" class="pp-svg-label">Palmar wrist crease</text><path d="M420 320L407 320" class="pp-svg-leader"/><text x="28" y="164" class="pp-svg-label">Flexor carpi</text><text x="28" y="184" class="pp-svg-label">radialis tendon</text><path d="M164 177L280 185" class="pp-svg-leader"/><text x="421" y="170" class="pp-svg-label">Palmaris</text><text x="421" y="190" class="pp-svg-label">longus tendon</text><path d="M416 185L358 194" class="pp-svg-leader"/><path d="M428 321V208" stroke="#b88722" stroke-width="3"/><path d="M421 321H435 M421 208H435" stroke="#b88722" stroke-width="3"/><text x="448" y="260" class="pp-svg-point">2 B-cun</text><circle cx="320" cy="208" r="15" fill="#fff" stroke="#b27410" stroke-width="6"/><circle cx="320" cy="208" r="4" fill="#b27410"/><text x="339" y="205" class="pp-svg-point">PC6</text><path d="M320 125V173" stroke="#285b40" stroke-width="4" marker-end="url(#pc6-arrow)"/><path d="M293 73 Q320 48 347 73 L341 93 Q320 85 299 93Z" fill="#d9b99f" stroke="#684c3d" stroke-width="3"/><text x="28" y="278" class="pp-svg-label">Toward elbow ↑</text><rect x="26" y="382" width="588" height="28" rx="14" fill="#fff"/><text x="42" y="402" class="pp-svg-note">WHO tendon interval + 2 proportional B-cun; scale is schematic, not centimetres.</text></svg>`,
    li4: `<svg viewBox="0 0 640 430" role="img" aria-labelledby="li4-title li4-desc"><title id="li4-title">LI4 Hegu on the back of the hand</title><desc id="li4-desc">The back of an open hand shows the second metacarpal from the index knuckle toward the wrist. The marker is at the thumb-side edge of the bone midpoint, matching the WHO-standard description. A thumb pad presses gently perpendicular to the hand.</desc><defs><marker id="li4-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#285b40"/></marker></defs><rect width="640" height="430" rx="22" fill="#f6f3ed"/><text x="28" y="36" class="pp-svg-kicker">HAND · BACK (DORSUM) VIEW</text><path d="M227 357 Q205 327 200 274 L188 172 Q186 150 201 148 Q216 147 220 168 L232 235 L222 87 Q221 65 239 63 Q257 63 259 86 L266 225 L267 68 Q267 45 285 45 Q304 46 303 68 L304 225 L315 83 Q317 61 336 64 Q354 67 350 89 L339 238 L365 142 Q371 122 388 128 Q404 135 396 157 L373 266 Q363 324 337 357 Q285 382 227 357Z" fill="#f2d9c7" stroke="#684c3d" stroke-width="4"/><path d="M203 286Q273 319 366 286" fill="none" stroke="#9f806d" stroke-width="3"/><path d="M220 168L281 294 M253 87L282 294 M286 68L294 293 M333 91L311 293" fill="none" stroke="#8c715e" stroke-width="5" stroke-linecap="round"/><path d="M264 87L290 284" stroke="#506c5b" stroke-width="11" opacity=".42" stroke-linecap="round"/><circle cx="275" cy="187" r="15" fill="#fff" stroke="#b27410" stroke-width="6"/><circle cx="275" cy="187" r="4" fill="#b27410"/><text x="294" y="183" class="pp-svg-point">LI4</text><text x="32" y="119" class="pp-svg-label">2nd metacarpal</text><text x="32" y="139" class="pp-svg-label">(index-finger bone)</text><path d="M181 143L247 161" class="pp-svg-leader"/><text x="404" y="233" class="pp-svg-label">Thumb-side edge</text><text x="404" y="253" class="pp-svg-label">of bone midpoint</text><path d="M397 230L288 191" class="pp-svg-leader"/><text x="28" y="328" class="pp-svg-label">Wrist</text><text x="405" y="105" class="pp-svg-label">Index knuckle</text><path d="M400 110L336 91" class="pp-svg-leader"/><path d="M274 94V151" stroke="#285b40" stroke-width="4" marker-end="url(#li4-arrow)"/><path d="M250 70 Q276 48 300 70 L296 89 Q276 81 255 90Z" fill="#d9b99f" stroke="#684c3d" stroke-width="3"/><rect x="26" y="382" width="588" height="28" rx="14" fill="#fff"/><text x="42" y="402" class="pp-svg-note">WHO site: radial to the 2nd metacarpal midpoint—not a guessed web-space spot.</text></svg>`,
    st36: `<svg viewBox="0 0 640 430" role="img" aria-labelledby="st36-title st36-desc"><title id="st36-title">ST36 Zusanli on the front of the lower leg</title><desc id="st36-desc">An anterior lower-leg diagram labels ST35 below the outer kneecap, ST41 at the front ankle crease, the tibial crest, and ST36 three proportional bone-cun below ST35 on the line toward ST41 over tibialis anterior muscle.</desc><defs><marker id="st36-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#285b40"/></marker></defs><rect width="640" height="430" rx="22" fill="#f6f3ed"/><text x="28" y="36" class="pp-svg-kicker">LEG · FRONT VIEW</text><path d="M247 65 Q235 116 242 167 L251 250 L258 354 Q320 371 382 354 L389 250 L398 167 Q405 116 393 65Z" fill="#f2d9c7" stroke="#684c3d" stroke-width="4"/><ellipse cx="320" cy="108" rx="63" ry="48" fill="#f5dfcf" stroke="#684c3d" stroke-width="3"/><path d="M274 146 Q258 158 266 171" fill="none" stroke="#b27410" stroke-width="4"/><text x="44" y="101" class="pp-svg-label">ST35 · hollow</text><text x="44" y="121" class="pp-svg-label">below outer kneecap</text><path d="M185 111L263 151" class="pp-svg-leader"/><path d="M320 152V342" stroke="#8f725f" stroke-width="8" stroke-linecap="round"/><text x="410" y="270" class="pp-svg-label">Tibial crest</text><path d="M405 263L326 263" class="pp-svg-leader"/><path d="M367 174 Q393 232 365 324" fill="none" stroke="#8eaa92" stroke-width="35" opacity=".65" stroke-linecap="round"/><text x="418" y="212" class="pp-svg-label">Tibialis anterior</text><text x="418" y="232" class="pp-svg-label">(soft muscle)</text><path d="M410 232L382 245" class="pp-svg-leader"/><path d="M267 161L359 340" stroke="#b88722" stroke-width="3" stroke-dasharray="7 7"/><circle cx="310" cy="245" r="15" fill="#fff" stroke="#b27410" stroke-width="6"/><circle cx="310" cy="245" r="4" fill="#b27410"/><text x="270" y="221" class="pp-svg-point">ST36</text><path d="M268 164V233" stroke="#285b40" stroke-width="4" marker-end="url(#st36-arrow)"/><path d="M282 162H302 M282 233H302" stroke="#b88722" stroke-width="3"/><text x="28" y="212" class="pp-svg-point">3 B-cun</text><path d="M128 216L280 198" class="pp-svg-leader"/><path d="M262 351H378" stroke="#684c3d" stroke-width="4"/><text x="410" y="355" class="pp-svg-label">ST41 · front ankle crease</text><path d="M403 350L379 350" class="pp-svg-leader"/><rect x="26" y="382" width="588" height="28" rx="14" fill="#fff"/><text x="42" y="402" class="pp-svg-note">WHO landmarks: ST35 → ST41 line; marker sits on muscle, not the shin bone.</text></svg>`,
    ki1: `<svg viewBox="0 0 640 430" role="img" aria-labelledby="ki1-title ki1-desc"><title id="ki1-title">KI1 Yongquan on the sole of the foot</title><desc id="ki1-desc">A sole-view foot diagram labels the heel and the web margin between the second and third toe bases. A reference line between them places KI1 at the depression when the toes flex, approximately two-thirds of the way from the heel.</desc><defs><marker id="ki1-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#285b40"/></marker></defs><rect width="640" height="430" rx="22" fill="#f6f3ed"/><text x="28" y="36" class="pp-svg-kicker">FOOT · SOLE VIEW</text><path d="M320 376 C266 376 225 349 218 309 C207 252 220 199 226 155 C231 115 238 77 259 62 C275 50 290 65 292 99 L299 142 C302 105 300 62 320 57 C340 62 338 105 341 142 L348 99 C350 65 365 50 381 62 C402 77 409 115 414 155 C420 199 433 252 422 309 C415 349 374 376 320 376Z" fill="#f2d9c7" stroke="#684c3d" stroke-width="4"/><path d="M320 83V347" stroke="#8eaa92" stroke-width="4" stroke-dasharray="8 7"/><path d="M320 348V92" stroke="#b88722" stroke-width="3" stroke-dasharray="7 7"/><path d="M303 87Q320 78 337 87" fill="none" stroke="#684c3d" stroke-width="3"/><text x="410" y="89" class="pp-svg-label">Web margin between</text><text x="410" y="109" class="pp-svg-label">2nd &amp; 3rd toe bases</text><path d="M404 111L337 96" class="pp-svg-leader"/><ellipse cx="320" cy="201" rx="25" ry="20" fill="#b27410" opacity=".22"/><circle cx="320" cy="201" r="14" fill="#fff" stroke="#b27410" stroke-width="6"/><circle cx="320" cy="201" r="4" fill="#b27410"/><text x="346" y="202" class="pp-svg-point">KI1</text><text x="410" y="266" class="pp-svg-label">Approx. ⅔ from heel</text><text x="410" y="286" class="pp-svg-label">(1/3 from toe web)</text><path d="M403 266L338 221" class="pp-svg-leader"/><text x="28" y="346" class="pp-svg-label">Heel</text><path d="M75 342L237 337" class="pp-svg-leader"/><path d="M320 134V174" stroke="#285b40" stroke-width="4" marker-end="url(#ki1-arrow)"/><path d="M292 68Q320 40 348 68L342 89Q320 80 298 89Z" fill="#d9b99f" stroke="#684c3d" stroke-width="3"/><rect x="26" y="382" width="588" height="28" rx="14" fill="#fff"/><text x="42" y="402" class="pp-svg-note">Marker combines WHO toe-flexion depression + heel-to-web proportional landmark.</text></svg>`
  };
  // Keep the ST36 marker on the WHO ST35→ST41 landmark line and on the
  // tibialis-anterior side of the tibial crest (the SVG is schematic, not scaled).
  diagrams.st36 = diagrams.st36
    .replace("M274 146 Q258 158 266 171", "M355 146 Q370 153 362 166")
    .replace("M185 111L263 151", "M185 111L360 151")
    .replace("M367 174 Q393 232 365 324", "M337 174 Q365 232 345 324")
    .replace("M267 161L359 340", "M367 161L320 340")
    .replace('cx="310" cy="245"', 'cx="351" cy="220"')
    .replace('x="270" y="221" class="pp-svg-point">ST36', 'x="368" y="224" class="pp-svg-point">ST36')
    .replace("M268 164V233", "M350 168V197")
    .replace("M282 162H302 M282 233H302", "M326 161H344 M326 220H344");
  // LI4 is the thumb/radial edge of the second metacarpal midpoint, not the
  // web space; keep its marker, contact pad and pressure arrow on that side.
  diagrams.li4 = diagrams.li4
    .replace('cx="275" cy="187"', 'cx="266" cy="187"')
    .replace('x="294" y="183" class="pp-svg-point">LI4', 'x="285" y="183" class="pp-svg-point">LI4')
    .replace("M397 230L288 191", "M397 230L273 190")
    .replace("M274 94V151", "M266 94V151")
    .replace("M250 70 Q276 48 300 70 L296 89 Q276 81 255 90Z", "M240 70 Q266 48 290 70 L286 89 Q266 81 245 90Z");
  return diagrams[id] || "";
}

function pressurePointCard(point) {
  const stepMarkup = [
    ["FIND IT", point.find.join(" ")], ["POSITION", point.position], ["PRESS", point.pressure],
    ["HOLD", point.hold], ["RELEASE", point.release]
  ].map(function (item, index) { return "<li><span>" + String(index + 1).padStart(2, "0") + " · " + item[0] + "</span><p>" + esc(item[1]) + "</p></li>"; }).join("");
  return "<article class=\"pp-point-card\" id=\"point-" + point.id + "\" data-point-id=\"" + point.id + "\"><div class=\"pp-point-head\"><div><p class=\"pp-point-area\">" + esc(point.area) + " · " + esc(point.difficulty) + "</p><h3>" + esc(point.name) + " <span>" + esc(point.code) + "</span></h3><p class=\"pp-channel\">" + esc(point.tradition) + "</p></div><span class=\"pp-point-index\" aria-hidden=\"true\">" + esc(point.code) + "</span></div><figure class=\"pp-visual-frame\">" + pressurePointVisualMarkup(point.id) + "<figcaption>Original landmark schematic · marker is tied to the written location; not to scale.</figcaption></figure><div class=\"pp-instruction-column\"><section class=\"pp-detail\"><h4>WHERE · exact location</h4><p>" + esc(point.where) + "</p><p class=\"pp-landmarks\"><strong>Nearby landmarks:</strong> " + esc(point.landmarks) + "</p></section><details class=\"pp-show-how\"><summary><span>Show me how</span><span aria-hidden=\"true\">＋</span></summary><ol>" + stepMarkup + "</ol></details><div class=\"pp-notice-grid\"><section class=\"pp-notice pp-notice-calm\"><h4>WHAT TO NOTICE</h4><p><strong>Usually okay:</strong> " + esc(point.feel) + "</p><p><strong>Not okay:</strong> " + esc(point.notFeel) + "</p></section><section class=\"pp-notice pp-notice-tradition\"><h4>TRADITIONAL PRACTICE · NOT A MEDICAL CLAIM</h4><p>" + esc(point.traditional) + "</p><small>" + esc(point.traditionalNote) + "</small></section></div><section class=\"pp-safety-box\"><h4>SAFETY · read before trying</h4><dl><div><dt>Common mistakes</dt><dd>" + esc(point.mistakes) + "</dd></div><div><dt>Avoid when</dt><dd>" + esc(point.avoid) + "</dd></div><div><dt>Stop immediately for</dt><dd>" + esc(point.stop) + "</dd></div><div><dt>Seek professional advice</dt><dd>" + esc(point.seek) + "</dd></div></dl></section></div></article>";
}

function pressurePointsPage() {
  const areaButtons = ["All areas"].concat(pressurePointAreas).map(function (area) {
    const key = area === "All areas" ? "all" : area.toLowerCase();
    return "<button class=\"pp-area-chip\" type=\"button\" data-pressure-area=\"" + key + "\" aria-pressed=\"" + (key === "all" ? "true" : "false") + "\">" + esc(area) + "</button>";
  }).join("");
  const grouped = pressurePointAreas.map(function (area) {
    const key = area.toLowerCase();
    const points = pressurePoints.filter(function (point) { return point.area === area; });
    const note = pressureAreaNotes[area];
    const content = points.length ? points.map(pressurePointCard).join("") : "<article class=\"pp-region-note\"><div class=\"pp-region-label\">Beginner boundary · no point marker provided</div><h3>" + esc(note.title) + "</h3><p>" + esc(note.text) + "</p><a class=\"button small\" href=\"/lessons/" + note.lesson + "\">" + esc(note.action) + " →</a></article>";
    return "<section class=\"pp-area-section\" data-pressure-section=\"" + key + "\" id=\"pressure-" + key + "\"><div class=\"pp-area-heading\"><p class=\"eyebrow\">BODY AREA</p><h2>" + esc(area) + "</h2><span>" + (points.length ? points.length + (points.length === 1 ? " verified point lesson" : " verified point lessons") : "No focused point instruction") + "</span></div>" + content + "</section>";
  }).join("");
  const body = "<div class=\"page pressure-page\"><section class=\"pp-hero\"><p class=\"eyebrow\">Landmark-led · beginner-safe</p><h1>Pressure Points</h1><p class=\"lede\">Learn a few clearly located traditional acupressure points without guessing. Each original diagram names its landmarks and shows light finger placement; the written landmarks remain the source of location, not the drawing scale.</p><div class=\"pp-hero-facts\"><span><strong>6</strong> point lessons</span><span><strong>9</strong> body areas reviewed</span><span><strong>0</strong> cure claims</span></div></section><section class=\"pp-safety-banner\" aria-labelledby=\"pp-safety-title\"><div class=\"pp-safety-symbol\" aria-hidden=\"true\">!</div><div><h2 id=\"pp-safety-title\">Comfort only. This is not treatment.</h2><p>Acupoint names and locations come from traditional systems; a named point is not proof of a special anatomical structure or medical effect. Evidence for acupuncture, electrical stimulation, or wrist bands does not automatically prove that manual pressure works. Do not delay diagnosis or care, change medication, or press through symptoms.</p><ul><li>Ask permission before touching another person. Start with light surface contact; pressure should never hurt.</li><li>Avoid injured, bruised, swollen, inflamed, numb, infected, or recently operated areas. If sensation or circulation is reduced, ask a clinician first.</li><li>Stop for pain, tingling, numbness, weakness, dizziness, nausea, skin colour change, or any unusual/worsening symptom.</li><li>Do not press the throat, sides of the neck, eyes, spine, open wounds, or acute pain. New, severe, persistent, or worsening symptoms need professional assessment.</li></ul></div></section><section class=\"pp-controls\" aria-label=\"Find a pressure point\"><div class=\"pp-control-copy\"><h2>Find a lesson</h2><p>Search a point name, landmark, or body area.</p></div><label class=\"pp-search-label\" for=\"pressure-search\">Search points<input id=\"pressure-search\" type=\"search\" placeholder=\"Try “wrist crease” or “foot”\" autocomplete=\"off\" /></label><div class=\"pp-area-filter\" aria-label=\"Filter by body area\">" + areaButtons + "</div><p id=\"pressure-results-status\" class=\"pp-results-status\" aria-live=\"polite\">Showing 9 body areas · 6 point lessons</p></section><p id=\"pressure-no-results\" class=\"pp-no-results\" hidden>No lessons match this search. Try a point name or a nearby landmark.</p><div class=\"pp-area-list\">" + grouped + "</div><section class=\"pp-sources\"><h2>Location and evidence notes</h2><p>Classical point locations below follow the World Health Organization’s Western Pacific standard where available. Yintang is an extra point, so its between-brow description is separately identified. Proportional B-cun measurements vary with the person; the diagrams are relational teaching aids, not rulers. The short pressure intervals are conservative practice cues, not validated treatment doses.</p><ul><li><a href=\"https://iris.who.int/bitstream/handle/10665/353407/9789290613831-eng.pdf?sequence=1\" target=\"_blank\" rel=\"noopener noreferrer\">WHO · Standard Acupuncture Point Locations in the Western Pacific Region</a> — location standard for GV20, PC6, LI4, ST36, and KI1.</li><li><a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC5908420/\" target=\"_blank\" rel=\"noopener noreferrer\">Review of acupuncture/acupressure at Yintang (EX-HN3)</a> — describes the point tradition and notes that single-point evidence remains preliminary.</li><li><a href=\"https://www.nccih.nih.gov/health/acupuncture-effectiveness-and-safety\" target=\"_blank\" rel=\"noopener noreferrer\">U.S. National Center for Complementary and Integrative Health · Acupuncture: Effectiveness and Safety</a> — evidence and safety overview for acupuncture; not a direct efficacy claim for manual acupressure.</li><li><a href=\"https://www.health.gov.au/sites/default/files/2025-03/11_appendix_f1.2-acupressure-study_details-final.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Australian Government · Natural Therapies Review, acupressure evidence appendix</a> — study-level evidence context; results vary and do not justify cure claims.</li><li><a href=\"https://www.mskcc.org/cancer-care/patient-education/acupressure-pain-and-headaches\" target=\"_blank\" rel=\"noopener noreferrer\">Memorial Sloan Kettering · Acupressure for Pain and Headaches</a> — practical LI4 safety guidance, including a pregnancy precaution.</li><li><a href=\"https://medlineplus.gov/ency/article/002117.htm\" target=\"_blank\" rel=\"noopener noreferrer\">MedlinePlus · Nausea and acupressure</a> — practical PC6 location/use information; it does not make acupressure a replacement for medical evaluation.</li></ul><p class=\"pp-disclaimer\">This educational page is not medical advice and is not a substitute for licensed, supervised training or care from a qualified health professional.</p></section></div>";
  const accessibleBody = body
    .replace('<div class="pp-area-filter" aria-label="Filter by body area">', '<div class="pp-area-filter" role="group" aria-label="Filter by body area">')
    .replace("dizziness, nausea, skin colour change", "dizziness, new or worsening nausea, skin colour change")
    .replace("New, severe, persistent, or worsening symptoms need professional assessment.", "New, severe, persistent, or worsening symptoms need professional assessment; emergency symptoms such as chest pain, trouble breathing, fainting, sudden severe headache, or sudden weakness need urgent care.")
    .replace("— study-level evidence context; results vary and do not justify cure claims.", "— included study details and risk-of-bias context, not a manual-pressure treatment recommendation.");
  return shell(accessibleBody, "pressure-points");
}

function lessonArtworkForId(lessonId) {
  const lesson = lessons.find(function (item) { return item.id === lessonId; });
  if (!lesson) return null;
  return lessonArtworkByType[lesson.visual[0]] || lessonArtworkByType.welcome;
}

function lessonImageMarkup(lessonId, className) {
  const artwork = lessonArtworkForId(lessonId);
  if (!artwork) return "";
  return "<img class=\"" + className + "\" src=\"/assets/lessons/" + artwork.image + "\" alt=\"" + esc(artwork.alt) + "\" width=\"1448\" height=\"1086\" loading=\"lazy\" decoding=\"async\" />";
}

function shell(content, active) {
  const nav = [["home", "Home"], ["course", "Course"], ["quick-practice", "Quick practice"], ["techniques", "Techniques"], ["body-areas", "Body areas"], ["hand-massage", "Hand massage"], ["pressure-points", "Pressure points"], ["routines", "Routines"], ["safety", "Safety"], ["progress", "Progress"], ["reference", "Reference"]];
  const links = nav.map(function (item) {
    const href = item[0] === "home" ? "/" : "/" + item[0];
    return "<a class=\"nav-link " + (active === item[0] ? "active" : "") + "\" href=\"" + href + "\">" + item[1] + "</a>";
  }).join("");
  return "<header class=\"shell-header\"><a class=\"brand\" href=\"/\" aria-label=\"The Craft home\"><span class=\"brand-mark\"><span aria-hidden=\"true\">C</span></span><span class=\"brand-text\">the <em>craft</em></span></a><button class=\"menu-toggle\" type=\"button\" aria-label=\"Open navigation\" aria-controls=\"main-nav\" aria-expanded=\"false\">☰</button><nav class=\"main-nav\" id=\"main-nav\" aria-label=\"Main navigation\">" + links + "</nav></header><main id=\"main-content\" class=\"page-wrap\">" + content + "</main><footer class=\"footer\"><div class=\"footer-inner\"><strong>The Craft</strong><span>Learn slowly. Listen closely. Keep it comfortable.</span></div></footer>";
}

function goalCard(icon, title, text, href, tone) {
  return "<a class=\"goal-card " + (tone || "") + "\" href=\"" + href + "\"><span class=\"goal-icon\">" + icon + "</span><span><strong>" + title + "</strong><small>" + text + "</small></span><b aria-hidden=\"true\">→</b></a>";
}

function home() {
  const started = progress.completed.length > 0 || progress.current > 1;
  const next = currentLesson();
  const mainHref = started ? "/lessons/" + next.id : "/course";
  const mainLabel = started ? "Continue learning" : "Start learning";
  const continuePanel = started ? "<section class=\"continue-panel home-continue\"><div><p class=\"eyebrow\">Your next lesson</p><h2>" + String(next.id).padStart(2, "0") + " · " + esc(next.title) + "</h2><p>" + esc(next.short) + "</p>" + progressBar() + "</div><a class=\"button\" href=\"/lessons/" + next.id + "\">Continue learning <span aria-hidden=\"true\">→</span></a></section>" : "";
  const goals = [
    goalCard("◷", "Start a routine", "Choose a guided 3–10 minute flow", "/routines", "sun"),
    goalCard("→", "Explore techniques", "Find a movement and its lesson", "/techniques", "blue"),
    goalCard("⌁", "Browse body areas", "Choose a gentle starting point", "/body-areas", "coral"),
    goalCard("☼", "Hand massage", "Palm circles and gentle finger strokes", "/hand-massage", "sage"),
    goalCard("◎", "Pressure points", "Find landmarks and read safety guidance", "/pressure-points", "cream"),
    goalCard("✓", "Comfort and safety", "Know when to pause or seek advice", "/safety", "sage")
  ].join("");
  const markup = `
    <div class="page">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">The Craft · Beginner learning</p>
          <h1>Learn simple, safe massage techniques.</h1>
          <p class="lede">A visual, beginner-friendly course. Learn one small skill at a time and keep every movement comfortable.</p>
          <div class="button-row">
            <a class="button primary" href="${mainHref}">${mainLabel} <span aria-hidden="true">→</span></a>
            <a class="button" href="/quick-practice">Quick practice <span aria-hidden="true">→</span></a>
          </div>
          <p class="hero-note"><span aria-hidden="true">✓</span> Gentle educational guidance—not medical treatment.</p>
        </div>
        <div class="hero-art" aria-label="Massage lesson preview"></div>
      </section>
      ${continuePanel}
      <section class="today-section">
        <div class="section-heading">
          <div><p class="eyebrow">A few useful paths</p><h2>Go straight to what you need.</h2></div>
          <p>Start with the course or pick a short, focused way to practice.</p>
        </div>
        <div class="goal-grid">${goals}</div>
      </section>
    </div>`;
  return shell(markup, "home");
}

function lessonCardMarkup(lesson, forProgress) {
  const lessonNumber = String(lesson.id).padStart(2, "0");
  const summary = forProgress && isComplete(lesson.id) ? "Completed and ready to revisit." : esc(lesson.short);
  const details = forProgress
    ? statusMarkup(lesson)
    : "<div class=\"lesson-meta\"><span>" + esc(lesson.level) + "</span><span>" + lesson.time + " min</span></div>";
  const status = forProgress ? "" : statusMarkup(lesson);
  return "<article class=\"lesson-card " + (isComplete(lesson.id) ? "complete" : "") + "\"><div class=\"lesson-card-visual\">" + lessonImageMarkup(lesson.id, "lesson-card-image") + "<span aria-hidden=\"true\">" + lessonNumber + "</span></div><div><h3>" + esc(lesson.title) + "</h3><p>" + summary + "</p>" + details + "</div><div>" + status + lessonButton(lesson) + "</div></article>";
}

function course() {
  const next = currentLesson();
  const nextText = isComplete(next.id) ? "You’ve reached the end of the path. Revisit any lesson or practice the complete routine." : "Your next recommended step is ready whenever you are.";
  return shell("<div class=\"page\"><div class=\"course-top\"><div><p class=\"eyebrow\">The guided path</p><h1>Course map</h1><p class=\"lede\">Start at the top and build a small, safe toolkit. Every lesson ends with practice and a clear next step.</p></div><div class=\"course-stat\"><strong>" + progress.completed.length + " / " + lessons.length + "</strong><span>lessons completed</span>" + progressBar(true) + "</div></div><section class=\"course-next\"><div class=\"course-next-mark\">" + String(next.id).padStart(2, "0") + "</div><div><p class=\"eyebrow\">Next recommended</p><h2>" + esc(next.title) + "</h2><p>" + nextText + "</p></div><a class=\"button primary small\" href=\"#/lesson/" + next.id + "\">" + (isComplete(next.id) ? "Review lesson" : "Continue") + " →</a></section><div class=\"lesson-list\">" + lessons.map(function (lesson) { return lessonCardMarkup(lesson, false); }).join("") + "</div><div class=\"button-row\" style=\"margin-top:26px\"><a class=\"button subtle\" href=\"#/progress\">View your progress</a><a class=\"button\" href=\"#/safety\">Review safety</a></div></div>", "course");
}

const quickPracticeGuides = {
  "1": {
    "category": "Foundation",
    "title": "Start with permission",
    "skill": "Consent & first contact",
    "imageAlt": "A therapist and fully clothed client make eye contact during a check-in before massage.",
    "goal": "Begin with clear permission and a touch that feels easy to receive.",
    "steps": [
      "Agree on an area, the touch wanted, and a pause signal.",
      "Lower a warm, relaxed palm onto a supported broad area and ask about comfort.",
      "Let contact settle, then soften and ease away gradually."
    ],
    "watch": [
      "The person knows what you will do.",
      "Breathing stays easy and unhurried."
    ],
    "avoid": "Touching before permission or starting with pressure.",
    "cue": "Ask → agree → rest lightly"
  },
  "2": {
    "category": "Hand foundations",
    "title": "Prepare a relaxed hand",
    "skill": "Relaxed palm & neutral wrist",
    "imageAlt": "Relaxed palms lie flat on a towel, with soft fingers and straight wrists.",
    "goal": "Keep the palm broad while the wrist stays in line with the forearm.",
    "steps": [
      "Rest your whole palm on a pillow with soft fingers and a comfortable wrist.",
      "Slowly shift a little body weight with soft elbows; ease back without gripping.",
      "Return to rest, then gradually lift away. Switch hands if tired."
    ],
    "watch": [
      "The palm stays broad and warm.",
      "Fingers and shoulders remain relaxed."
    ],
    "avoid": "Bending the wrist sharply or poking with a thumb.",
    "cue": "Broad palm · straight wrist"
  },
  "3": {
    "category": "Core strokes",
    "title": "Glide and return",
    "skill": "Gentle forearm glide",
    "imageAlt": "A therapist's palm glides along a supported forearm while the other hand steadies the wrist.",
    "goal": "Make one smooth working stroke, then return with less pressure.",
    "steps": [
      "Support the forearm, settle your broad palm, and check comfort.",
      "Glide slowly toward the elbow, stopping before the joint; shorten the path if skin or fabric drags.",
      "Slow at the end, soften the return, and finish with a resting hand."
    ],
    "watch": [
      "The palm stays in broad contact.",
      "The return feels lighter than the working stroke."
    ],
    "avoid": "Rushing, dragging back with equal pressure, or pressing through pain.",
    "cue": "Smooth glide → lighter return"
  },
  "4": {
    "category": "Core strokes",
    "title": "Circle slowly",
    "skill": "Small shoulder circles",
    "imageAlt": "A therapist's relaxed palm rests on the back shoulder muscle of a seated, clothed client.",
    "goal": "Move the skin gently with a small, slow circle over soft muscle.",
    "steps": [
      "Warm soft back shoulder muscle with broad light strokes.",
      "Settle a relaxed palm and make a few tiny, slow circles that shift skin gently.",
      "Soften before changing zones; blend into a lighter stroke and rest."
    ],
    "watch": [
      "The circle stays small and even.",
      "The shoulder stays soft; the client does not brace."
    ],
    "avoid": "Circling on the neck, collarbone, bony tip, or a tender spot.",
    "cue": "Warm → tiny circles → lighter glide"
  },
  "5": {
    "category": "Core strokes",
    "title": "Lift and release",
    "skill": "Gentle lift-and-release",
    "imageAlt": "A therapist gently gathers soft calf muscle with a relaxed hand while the leg is supported.",
    "goal": "Move a little soft tissue without pinching or squeezing hard.",
    "steps": [
      "Warm healthy, supported calf muscle with slow strokes; ask whether gathering is welcome.",
      "Use palm and soft pads to gather a little tissue without trapping skin between fingers.",
      "Let tissue settle gradually; follow a few rolls with lighter gliding. Skip gathering if pinchy."
    ],
    "watch": [
      "The movement is shallow and rhythmic.",
      "The skin is not pinched between fingertips."
    ],
    "avoid": "A deep squeeze, pinching, or working over a joint or injury.",
    "cue": "Warm → shallow gather → soften → glide"
  },
  "6": {
    "category": "Body-area skills",
    "title": "Warm the shoulders",
    "skill": "Broad shoulder contact",
    "imageAlt": "Two relaxed palms rest over the shoulder muscles of a clothed client, away from the neck.",
    "goal": "Stay on soft shoulder muscle and keep the neck and joints clear.",
    "steps": [
      "Support the arms and settle a broad palm on soft back shoulder muscle.",
      "Glide slowly outward, keeping off the neck and stopping before the bony shoulder tip.",
      "Check comfort, soften the return, and finish with light still contact."
    ],
    "watch": [
      "Hands stay on soft muscle behind the collarbone.",
      "The person can breathe and let their shoulders drop."
    ],
    "avoid": "Pressing the neck, collarbone, spine, or shoulder joint.",
    "cue": "Broad contact · neck stays clear"
  },
  "7": {
    "category": "Body-area skills",
    "title": "Follow a safe back path",
    "skill": "Upper-back path beside the spine",
    "imageAlt": "Two flat hands rest on broad back muscles on either side of the spine over clothing.",
    "goal": "Travel up and outward over broad muscle, never directly on the spine.",
    "steps": [
      "Support the person and settle broad palms beside the spine, never on it.",
      "Glide slowly upward and outward over muscle; shorten the path if clothing bunches.",
      "Slow before returning more lightly, then rest and gradually release."
    ],
    "watch": [
      "Both hands remain beside the bony spine.",
      "The path is broad, slow, and easy to follow."
    ],
    "avoid": "Pressing on the spine or hooking under the shoulder blade.",
    "cue": "Beside spine → outward → lighter return"
  },
  "8": {
    "category": "Body-area skills",
    "title": "Rest at the skull edge",
    "skill": "Optional still contact · supported head",
    "imageAlt": "A reclined head rests on a pillow while soft fingers rest at the back skull edge without lifting.",
    "goal": "Keep the head independently supported; light contact at the back skull edge is optional.",
    "steps": [
      "Rest the head independently on a pillow or headrest in a comfortable position.",
      "Offer optional soft-pad still contact at the back skull edge; do not dig, lift, or press the neck.",
      "Check comfort, then ease hands away while the pillow supports the head. Stay with shoulders if awkward."
    ],
    "watch": [
      "The pillow or headrest, not your hands, carries the head.",
      "No lifting, digging, neck pressure, or head movement."
    ],
    "avoid": "Touching the front or sides of the neck, digging under the skull, turning, or pulling the head.",
    "cue": "Still contact · pillow supports the head"
  },
  "9": {
    "category": "Body-area skills",
    "title": "Make gentle scalp circles",
    "skill": "Scalp circles with finger pads",
    "imageAlt": "Relaxed fingertips rest in the scalp of a reclined client without pulling the hair.",
    "goal": "Move the scalp gently with finger pads while the hair stays relaxed.",
    "steps": [
      "Rest soft pads on a supported scalp; ask about hair comfort.",
      "Make a few tiny slow circles in place, moving skin rather than strands.",
      "Ease pressure to zero before repositioning, then finish with gentle still contact."
    ],
    "watch": [
      "Nails stay away from the skin.",
      "Hair does not pull and pressure stays light."
    ],
    "avoid": "Scratching with nails, gripping hair, or pressing hard at the temples.",
    "cue": "Finger-pad circles ↻ · no tugging"
  },
  "10": {
    "category": "Body-area skills",
    "title": "Support and glide",
    "skill": "Supported forearm and hand",
    "imageAlt": "A broad palm rests near the elbow while the other hand supports the wrist of a cushioned forearm.",
    "goal": "Glide the supported forearm smoothly with a lighter return.",
    "steps": [
      "Rest elbow and wrist on cushions; use one relaxed hand for light support.",
      "Glide the other broad palm from above the wrist toward the elbow, stopping before the joint.",
      "Return more lightly, then rest. Palm and finger work are optional in the full lesson."
    ],
    "watch": [
      "The wrist stays neutral and supported.",
      "The fingers are not pulled or forced."
    ],
    "avoid": "Pulling the hand, bending the wrist, or tugging individual fingers.",
    "cue": "Wrist → toward elbow · lighter return"
  },
  "11": {
    "category": "Body-area skills",
    "title": "Glide the supported calf",
    "skill": "Supported calf glide",
    "imageAlt": "An open palm glides over a clothing-covered calf while the other hand supports the ankle.",
    "goal": "Use a long, light stroke over soft calf muscle while the leg is supported.",
    "steps": [
      "Support knee and ankle; rest a broad palm on healthy soft calf muscle.",
      "Glide slowly from above the ankle toward, but not into, the back of the knee.",
      "Keep off shin and prominent veins. Soften the return and finish with a resting hand."
    ],
    "watch": [
      "The knee and ankle remain comfortable.",
      "The palm travels smoothly without a deep press."
    ],
    "avoid": "Pressing behind the knee or working over swelling, heat, or acute pain.",
    "cue": "Long calf stroke → lighter return"
  },
  "12": {
    "category": "Body-area skills",
    "title": "Massage the sole gently",
    "skill": "Supported sole circles",
    "imageAlt": "One hand supports the heel as the broad pad of the other thumb makes gentle contact across the sole; the toes stay relaxed.",
    "goal": "Anchor the heel, use a broad thumb pad on the sole, and keep the toes free.",
    "steps": [
      "Rest the ankle on a pillow and cup the heel without squeezing; check sensitivity.",
      "Use a relaxed broad thumb pad for a few tiny circles on comfortable sole tissue; never dig.",
      "Ease into lighter strokes and still contact. Switch hands if tired; keep toes free."
    ],
    "watch": [
      "The heel stays supported and toes stay free.",
      "The thumb stays broad; pressure remains light."
    ],
    "avoid": "Poking with the thumb tip, pulling toes, or pressing hard on a sensitive or injured foot.",
    "cue": "Anchor heel · broad thumb pad circles · toes free"
  },
  "13": {
    "category": "Routine integration",
    "title": "Join a calm sequence",
    "skill": "Settle, warm, flow, and finish",
    "imageAlt": "A broad palm rests near the elbow while the other hand supports the wrist of a cushioned forearm.",
    "goal": "Practice a short supported-forearm sequence with an optional focus and a gradual finish.",
    "steps": [
      "Settle one healthy, supported forearm and ask about comfort.",
      "Use slow broad strokes with lighter returns; offer only a few tiny circles if wanted.",
      "Blend into familiar strokes, slow and lighten them, then rest and ease away."
    ],
    "watch": [
      "The pace stays unhurried and easy to pause.",
      "The routine ends with a clear check-in."
    ],
    "avoid": "Trying to cover every body area or continuing when comfort changes.",
    "cue": "Settle → broad strokes → optional focus → lighter finish"
  }
};

const practiceMotionByLesson = {
  3: "<svg class=\"practice-motion\" viewBox=\"0 0 1448 1086\" aria-hidden=\"true\" focusable=\"false\"><defs><marker id=\"motion-arrow-3\" markerWidth=\"12\" markerHeight=\"12\" refX=\"9\" refY=\"6\" orient=\"auto\"><path d=\"M0 0 12 6 0 12z\" class=\"motion-arrowhead\"/></marker></defs><path class=\"motion-path\" d=\"M460 735 C600 680 760 645 930 600\" marker-end=\"url(#motion-arrow-3)\"/><path class=\"motion-path motion-path-return\" d=\"M945 650 C790 704 630 735 505 780\" marker-end=\"url(#motion-arrow-3)\"/></svg>",
  4: "<svg class=\"practice-motion\" viewBox=\"0 0 1448 1086\" aria-hidden=\"true\" focusable=\"false\"><defs><marker id=\"motion-arrow-4\" markerWidth=\"12\" markerHeight=\"12\" refX=\"9\" refY=\"6\" orient=\"auto\"><path d=\"M0 0 12 6 0 12z\" class=\"motion-arrowhead\"/></marker></defs><path class=\"motion-path motion-loop\" d=\"M680 490 C665 405 760 365 825 410 C890 455 875 535 810 558 C740 583 680 540 688 485\" marker-end=\"url(#motion-arrow-4)\"/></svg>",
  5: "<svg class=\"practice-motion\" viewBox=\"0 0 1448 1086\" aria-hidden=\"true\" focusable=\"false\"><defs><marker id=\"motion-arrow-5\" markerWidth=\"12\" markerHeight=\"12\" refX=\"9\" refY=\"6\" orient=\"auto\"><path d=\"M0 0 12 6 0 12z\" class=\"motion-arrowhead\"/></marker></defs><path class=\"motion-path\" d=\"M500 690 C555 685 615 670 670 650\" marker-end=\"url(#motion-arrow-5)\"/><path class=\"motion-path\" d=\"M850 615 C800 625 755 642 710 655\" marker-end=\"url(#motion-arrow-5)\"/><path class=\"motion-path motion-path-return\" d=\"M685 710 C640 725 590 730 555 720\"/></svg>",
  6: "<svg class=\"practice-motion\" viewBox=\"0 0 1448 1086\" aria-hidden=\"true\" focusable=\"false\"><defs><marker id=\"motion-arrow-6\" markerWidth=\"12\" markerHeight=\"12\" refX=\"9\" refY=\"6\" orient=\"auto\"><path d=\"M0 0 12 6 0 12z\" class=\"motion-arrowhead\"/></marker></defs><path class=\"motion-path\" d=\"M720 690 C640 660 550 635 450 620\" marker-end=\"url(#motion-arrow-6)\"/><path class=\"motion-path\" d=\"M735 690 C820 660 920 640 1030 620\" marker-end=\"url(#motion-arrow-6)\"/></svg>",
  7: "<svg class=\"practice-motion\" viewBox=\"0 0 1448 1086\" aria-hidden=\"true\" focusable=\"false\"><defs><marker id=\"motion-arrow-7\" markerWidth=\"12\" markerHeight=\"12\" refX=\"9\" refY=\"6\" orient=\"auto\"><path d=\"M0 0 12 6 0 12z\" class=\"motion-arrowhead\"/></marker></defs><path class=\"motion-path\" d=\"M555 690 C535 615 505 545 455 465\" marker-end=\"url(#motion-arrow-7)\"/><path class=\"motion-path\" d=\"M895 690 C920 610 955 535 1005 465\" marker-end=\"url(#motion-arrow-7)\"/></svg>",
  9: "<svg class=\"practice-motion\" viewBox=\"0 0 1448 1086\" aria-hidden=\"true\" focusable=\"false\"><defs><marker id=\"motion-arrow-9\" markerWidth=\"12\" markerHeight=\"12\" refX=\"9\" refY=\"6\" orient=\"auto\"><path d=\"M0 0 12 6 0 12z\" class=\"motion-arrowhead\"/></marker></defs><path class=\"motion-path motion-loop\" d=\"M900 430 C865 385 910 345 950 370 C990 395 970 445 932 450 C900 454 880 432 890 405\" marker-end=\"url(#motion-arrow-9)\"/><path class=\"motion-path motion-loop motion-loop-secondary\" d=\"M1050 485 C1025 445 1065 415 1098 438 C1133 462 1113 505 1080 508\" marker-end=\"url(#motion-arrow-9)\"/></svg>",
  10: "<svg class=\"practice-motion\" viewBox=\"0 0 1448 1086\" aria-hidden=\"true\" focusable=\"false\"><defs><marker id=\"motion-arrow-10\" markerWidth=\"12\" markerHeight=\"12\" refX=\"9\" refY=\"6\" orient=\"auto\"><path d=\"M0 0 12 6 0 12z\" class=\"motion-arrowhead\"/></marker></defs><path class=\"motion-path\" d=\"M910 760 C810 690 700 625 570 575\" marker-end=\"url(#motion-arrow-10)\"/><path class=\"motion-path motion-path-return\" d=\"M555 630 C670 680 780 735 870 795\" marker-end=\"url(#motion-arrow-10)\"/></svg>",
  11: "<svg class=\"practice-motion\" viewBox=\"0 0 1448 1086\" aria-hidden=\"true\" focusable=\"false\"><defs><marker id=\"motion-arrow-11\" markerWidth=\"12\" markerHeight=\"12\" refX=\"9\" refY=\"6\" orient=\"auto\"><path d=\"M0 0 12 6 0 12z\" class=\"motion-arrowhead\"/></marker></defs><path class=\"motion-path\" d=\"M760 610 C665 590 555 585 455 610\" marker-end=\"url(#motion-arrow-11)\"/><path class=\"motion-path motion-path-return\" d=\"M440 665 C550 650 660 660 748 680\" marker-end=\"url(#motion-arrow-11)\"/></svg>",
  12: "<svg class=\"practice-motion\" viewBox=\"0 0 1448 1086\" aria-hidden=\"true\" focusable=\"false\"><defs><marker id=\"motion-arrow-12\" markerWidth=\"12\" markerHeight=\"12\" refX=\"9\" refY=\"6\" orient=\"auto\"><path d=\"M0 0 12 6 0 12z\" class=\"motion-arrowhead\"/></marker></defs><path class=\"motion-path motion-loop\" d=\"M720 450 C685 410 715 375 755 385 C790 394 790 438 760 452 C735 465 710 445 720 420\" marker-end=\"url(#motion-arrow-12)\"/></svg>"
};

const scalpTechniqueGroups = [
  { id: "scalp", title: "Scalp", intro: "Keep the scalp moving gently; let the hair stay relaxed." },
  { id: "front", title: "Face / Front", intro: "Stay above the eyes and use almost no pressure at the temples." },
  { id: "around", title: "Around the head", intro: "Work around the ears and skull base only; keep the head still." },
  { id: "finish", title: "Finish", intro: "Join the familiar light movements into one calm sequence." }
];

const scalpTechniques = [
  {
    "id": "scalp-gliding",
    "group": "scalp",
    "title": "Scalp gliding",
    "image": "scalp-gliding.webp",
    "alt": "Soft finger pads rest on the front scalp for a short skin movement toward the crown without dragging hair.",
    "how": [
      "Rest soft pads at the front scalp; ask about hair comfort.",
      "Move scalp skin a tiny distance toward the crown, keeping pads with the skin. Do not drag through strands.",
      "Ease to zero before repositioning, then finish with resting pads. Skip glides if hair catches."
    ],
    "pressure": "Light, comfortable contact.",
    "watch": "Scalp shifts softly; hair stays easy. Ask whether this still feels comfortable.",
    "avoid": "Nails, friction, or pulling strands.",
    "duration": 45
  },
  {
    "id": "small-circles",
    "group": "scalp",
    "title": "Small scalp circles",
    "image": "scalp-small-circles.webp",
    "alt": "Several relaxed fingertip pads rest on the side scalp for small, controlled circles.",
    "how": [
      "Settle soft pads on the scalp and ask about comfort.",
      "Make a few tiny, slow circles in place; scalp skin moves with the pads.",
      "Soften before changing zones, then finish with resting contact."
    ],
    "pressure": "Light; no digging.",
    "watch": "Skin moves gently under the pads. Ask whether this still feels comfortable.",
    "avoid": "Scratching or dragging hair.",
    "duration": 45
  },
  {
    "id": "crown-circles",
    "group": "scalp",
    "title": "Crown circles",
    "image": "scalp-crown-circles.webp",
    "alt": "Therapist's soft finger pads contact the top-center crown of a supported head.",
    "how": [
      "Keep the head supported and rest soft pads at the crown.",
      "Make a few small, unhurried circles without pushing down.",
      "Ease before repositioning, then rest softly; do not grind on one spot."
    ],
    "pressure": "Light and steady.",
    "watch": "The head remains settled on support. Ask whether this still feels comfortable.",
    "avoid": "Pressing down or pulling hair.",
    "duration": 45
  },
  {
    "id": "side-circles",
    "group": "scalp",
    "title": "Side-of-head circles",
    "image": "scalp-side-circles.webp",
    "alt": "Relaxed fingertips make a small circle on the side scalp above the ear.",
    "how": [
      "Rest soft pads above the ear, away from the temple.",
      "Make a few small slow circles with the skin, keeping your shoulders relaxed.",
      "Soften before shifting, then rest; never steer the head."
    ],
    "pressure": "Light finger-pad contact.",
    "watch": "The jaw and shoulders stay relaxed. Ask whether this still feels comfortable.",
    "avoid": "Pressing into the ear or temple.",
    "duration": 45
  },
  {
    "id": "scalp-lifting",
    "group": "scalp",
    "title": "Scalp lifting",
    "image": "scalp-lifting.webp",
    "alt": "Relaxed finger pads make a tiny sideways shift on the scalp through short curls without lifting the hair.",
    "how": [
      "Rest soft pads on the scalp without gathering hair.",
      "Shift skin a tiny distance sideways; this name does not mean lifting hair or the head.",
      "Let skin settle gradually, then rest. Skip if strands pull."
    ],
    "pressure": "Tiny skin shift only; no hair or head lifting.",
    "watch": "Scalp shifts without strands pulling. Ask whether this still feels comfortable.",
    "avoid": "Gripping, tugging, or pinching hair.",
    "duration": 45
  },
  {
    "id": "fingertip-tapping",
    "group": "scalp",
    "title": "Fingertip tapping",
    "image": "scalp-fingertip-tapping.webp",
    "alt": "Relaxed fingertips lightly tap across the upper scalp while the other hand hovers softly.",
    "how": [
      "Ask first: tapping may feel stimulating rather than relaxing.",
      "Offer a few widely spaced, barely touching taps with soft curved fingers; keep nails clear.",
      "Return to resting pads. Skip if startling, ticklish, or unwelcome."
    ],
    "pressure": "Optional barely touching taps; skip if unwelcome.",
    "watch": "Taps feel soft and predictable. Ask whether this still feels comfortable.",
    "avoid": "Striking with stiff fingers or nails.",
    "duration": 45
  },
  {
    "id": "fingertip-raking",
    "group": "scalp",
    "title": "Gentle fingertip raking",
    "image": "scalp-fingertip-raking.webp",
    "alt": "Relaxed, curved finger pads move lightly through the hair toward the crown with nails lifted away from the skin.",
    "how": [
      "Ask first; skip tangles, extensions, or sensitive styling.",
      "Make one very light short pass with soft pads and nails clear. Stop at the first catch; never comb through resistance.",
      "Ease away, then rest. Circles or still contact are alternatives."
    ],
    "pressure": "Optional light contact; no resistance or scalp drag.",
    "watch": "Hair separates easily; no snagging. Ask whether this still feels comfortable.",
    "avoid": "Scratching, snagging, or pulling.",
    "duration": 45
  },
  {
    "id": "forehead-gliding",
    "group": "front",
    "title": "Forehead gliding",
    "image": "scalp-forehead-gliding.webp",
    "alt": "Soft fingers glide outward across the forehead above the brows, well away from the closed eyes.",
    "how": [
      "Rest soft pads above the brows with permission; keep eyelids clear.",
      "Glide from center outward slowly. Shorten the stroke or stop if dry skin drags.",
      "Ease off before resetting, then finish with resting contact."
    ],
    "pressure": "Feather-light.",
    "watch": "Eyes remain untouched and relaxed. Ask whether this still feels comfortable.",
    "avoid": "Pressing into eyes or eyelids.",
    "duration": 45
  },
  {
    "id": "hairline-massage",
    "group": "front",
    "title": "Hairline massage",
    "image": "scalp-hairline-massage.webp",
    "alt": "Fingertips trace the hairline gently from the forehead toward one temple.",
    "how": [
      "Settle soft pads at the front hairline with nails clear.",
      "Trace a short section toward one side; use tiny skin circles instead if hair catches.",
      "Soften before resetting for the other side, then rest softly."
    ],
    "pressure": "Light fingertip touch.",
    "watch": "The path stays on the hairline. Ask whether this still feels comfortable.",
    "avoid": "Rubbing brows or pulling hair.",
    "duration": 45
  },
  {
    "id": "temple-circles",
    "group": "front",
    "title": "Temple circles",
    "image": "scalp-temple-circles.webp",
    "alt": "Two soft fingertips make a very small circle at the temple outside the eye socket.",
    "how": [
      "Ask first; rest soft pads on the flat temple outside the eye socket and above the cheekbone.",
      "Offer a few almost-weightless tiny circles; do not seek tender or pulsing spots.",
      "Gradually ease away. Skip if sensitive and return to comfortable scalp contact."
    ],
    "pressure": "Very light.",
    "watch": "The eye socket stays untouched. Ask whether this still feels comfortable.",
    "avoid": "Pressure on eyes, brow, or tender spots.",
    "duration": 45
  },
  {
    "id": "behind-ear",
    "group": "around",
    "title": "Behind-the-ear massage",
    "image": "scalp-behind-ear.webp",
    "alt": "One or two finger pads make a tiny light circle in the soft area behind the outer ear.",
    "how": [
      "Ask first; rest soft pads on intact skin just behind the outer ear, above the neck.",
      "Offer a few tiny skin circles with almost no pressure; do not dig behind the ear.",
      "Soften into rest and ease away. Skip tenderness, swelling, or ear problems."
    ],
    "pressure": "Very light.",
    "watch": "The ear and head remain still. Ask whether this still feels comfortable.",
    "avoid": "Pushing the ear or entering the ear canal.",
    "duration": 45
  },
  {
    "id": "base-of-skull",
    "group": "around",
    "title": "Base-of-skull circles",
    "image": "scalp-base-skull.webp",
    "alt": "A head rests independently on a pillow while soft finger pads offer light contact at the back skull edge without lifting.",
    "how": [
      "Keep the head independently resting on a pillow; hands never lift or pull it.",
      "Rest soft pads at the back skull edge without digging underneath. Optional tiny skin circles stay almost weightless.",
      "Prefer still contact if awkward; ease hands away while support stays in place."
    ],
    "pressure": "Almost-weightless contact; head rests independently on a pillow.",
    "watch": "Head stays fully supported and still. Ask whether this still feels comfortable.",
    "avoid": "Pulling, lifting, twisting, or neck manipulation.",
    "duration": 45
  },
  {
    "id": "whole-sequence",
    "group": "finish",
    "title": "Whole-scalp sequence",
    "image": "scalp-whole-sequence.webp",
    "alt": "Both hands rest lightly at the sides of a supported head as a calm scalp sequence begins.",
    "how": [
      "Settle on a supported scalp and ask which touches are welcome.",
      "Offer a few small circles across crown, sides, and back, easing pressure before changing zones. Face work is optional.",
      "Return to the preferred contact; make movement smaller, rest, then gradually ease away."
    ],
    "pressure": "Light and even throughout.",
    "watch": "Check comfort between zones. Ask whether this still feels comfortable.",
    "avoid": "Rushing, tugging, eyes, or neck movement.",
    "duration": 120
  }
];

function formatScalpTime(seconds) {
  return String(Math.floor(seconds / 60)).padStart(2, "0") + ":" + String(seconds % 60).padStart(2, "0");
}

function scalpTechniqueCard(technique, index) {
  const done = Array.isArray(progress.scalpPracticeCompleted) && progress.scalpPracticeCompleted.includes(technique.id);
  const steps = technique.how.map(function (step) { return "<li>" + esc(step) + "</li>"; }).join("");
  return "<article class=\"scalp-technique-card" + (done ? " is-technique-done" : "") + "\" id=\"technique-" + technique.id + "\" data-scalp-technique=\"" + technique.id + "\"><div class=\"scalp-card-heading\"><span class=\"scalp-card-number\">" + String(index + 1).padStart(2, "0") + "</span><div><p class=\"scalp-card-group\">" + esc(technique.group === "front" ? "Face / Front" : technique.group === "around" ? "Around the head" : technique.group === "finish" ? "Finish" : "Scalp") + "</p><h4>" + esc(technique.title) + "</h4></div><span class=\"scalp-done-label\" " + (done ? "" : "hidden") + ">Practiced</span></div><button class=\"scalp-visual-enlarge\" type=\"button\" aria-label=\"Enlarge hand placement: " + esc(technique.title) + "\"><span class=\"scalp-visual-art\"><img src=\"/assets/lessons/" + technique.image + "\" alt=\"" + esc(technique.alt) + "\" width=\"1448\" height=\"1086\" loading=\"lazy\" decoding=\"async\" />" + "</span><span class=\"scalp-zoom-hint\">View detailed visual</span></button><div class=\"scalp-card-body\"><h5>How</h5><ol class=\"scalp-how\">" + steps + "</ol><dl class=\"scalp-cues\"><div><dt>Pressure</dt><dd>" + esc(technique.pressure) + "</dd></div><div><dt>Watch for</dt><dd>" + esc(technique.watch) + "</dd></div><div class=\"scalp-avoid\"><dt>Avoid</dt><dd>" + esc(technique.avoid) + "</dd></div></dl>" + coachedPracticeMarkup("scalp-" + technique.id, scalpCoachedStages(technique), false) + "<div class=\"scalp-practice-controls\"><button class=\"button subtle small scalp-practice-complete\" type=\"button\" data-technique-id=\"" + technique.id + "\" " + (done ? "disabled aria-disabled=\"true\"" : "") + ">" + (done ? "Practiced ✓" : "Mark done") + "</button></div></div></article>";
}

function headScalpQuickPractice(lesson) {
  const techniquesDone = Array.isArray(progress.scalpPracticeCompleted) ? progress.scalpPracticeCompleted.length : 0;
  const completedCount = (progress.practiceCompleted || []).length;
  const sections = scalpTechniqueGroups.map(function (group) {
    const cards = scalpTechniques.filter(function (technique) { return technique.group === group.id; }).map(scalpTechniqueCard).join("");
    return "<section class=\"scalp-technique-group\" aria-labelledby=\"scalp-group-" + group.id + "\"><div class=\"scalp-group-heading\"><div><p class=\"eyebrow\">Technique set</p><h3 id=\"scalp-group-" + group.id + "\">" + esc(group.title) + "</h3></div><p>" + esc(group.intro) + "</p></div><div class=\"scalp-technique-grid\">" + cards + "</div></section>";
  }).join("");
  const done = isPracticeComplete(lesson.id);
  return "<section class=\"quick-version scalp-module\" data-quick-practice=\"9\"><div class=\"quick-practice-path\"><div><p class=\"eyebrow\">Quick practice · Head &amp; Scalp</p><p class=\"practice-count\">Skill 09 of " + lessons.length + " · " + completedCount + " lessons checked</p></div><ol class=\"practice-progression\" aria-label=\"Practice progression\"><li>Learn</li><li aria-current=\"step\">Practice</li><li>Check</li><li>Next skill</li></ol></div><header class=\"scalp-module-header\"><h2>13 gentle techniques, one small movement at a time.</h2><p>Choose a card. Study the hand placement, then try its short practice.</p><p class=\"scalp-technique-progress\" aria-live=\"polite\"><strong>" + techniquesDone + " of " + scalpTechniques.length + " techniques practiced</strong></p></header><p class=\"scalp-safety-note\"><strong>Stay gentle.</strong> Keep the head supported and still. Scalp work is not neck manipulation—never pull, twist, crack, or force the head. Keep all pressure away from the eyes.</p>" + comfortCoachMarkup(lesson) + sections + "<div class=\"scalp-module-complete\"><div><strong>Finished your chosen practices?</strong><p>Mark this lesson practice complete when the movements feel clear.</p></div><button class=\"button primary small practice-check\" type=\"button\" data-practice-id=\"9\" " + (done ? "disabled aria-disabled=\"true\"" : "") + ">" + (done ? "Lesson practice checked ✓" : "Mark lesson practice complete") + "</button><p class=\"practice-status\" aria-live=\"polite\">" + (done ? "Practice saved on this device." : "Each technique has its own timer and completion check.") + "</p></div><dialog class=\"scalp-lightbox\" aria-label=\"Enlarged Head &amp; Scalp instructional visual\"><div class=\"scalp-lightbox-head\"><strong class=\"scalp-lightbox-title\">Instructional visual</strong><button class=\"button small scalp-lightbox-close\" type=\"button\">Close</button></div><div class=\"scalp-lightbox-frame\"><div class=\"scalp-lightbox-art\"></div></div><div class=\"practice-lightbox-actions\"><button class=\"button small scalp-lightbox-zoom\" type=\"button\">Zoom in</button><span>Inspect the hand placement; follow the short movement instructions.</span></div></dialog></section>";
}

function quickVersion(lesson) {
  if (lesson.id === 9) return headScalpQuickPractice(lesson);
  const guide = quickPracticeGuides[lesson.id];
  const artwork = lessonArtworkForId(lesson.id === 13 ? 10 : lesson.id);
  const motion = [4, 5, 6, 12].includes(lesson.id) ? "" : (practiceMotionByLesson[lesson.id] || "");
  const modalMotion = motion.replace(new RegExp("motion-arrow-" + lesson.id, "g"), "motion-arrow-" + lesson.id + "-modal");
  const next = lessons.find(function (item) { return item.id === lesson.id + 1; });
  const complete = isPracticeComplete(lesson.id);
  const completedCount = (progress.practiceCompleted || []).length;
  const instructions = guide.steps.map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("");
  const watchFor = guide.watch.map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("");
  const nextLink = next
    ? "<a class=\"button practice-next\" href=\"#/lesson/" + next.id + "\">Next skill <span aria-hidden=\"true\">→</span></a>"
    : "<a class=\"button practice-next\" href=\"#/progress\">Review progress <span aria-hidden=\"true\">→</span></a>";
  return "<section class=\"quick-version\" data-quick-practice=\"" + lesson.id + "\"><div class=\"quick-practice-path\"><div><p class=\"eyebrow\">Quick practice · " + esc(guide.category) + "</p><p class=\"practice-count\">Skill " + String(lesson.id).padStart(2, "0") + " of " + lessons.length + " · " + completedCount + " checked</p></div><ol class=\"practice-progression\" aria-label=\"Practice progression\"><li>Learn</li><li aria-current=\"step\">Practice</li><li>Check</li><li>Next skill</li></ol></div><div class=\"quick-version-head\"><div><h2>" + esc(guide.title) + "</h2><p><strong class=\"practice-skill-inline\">Skill: " + esc(guide.skill) + "</strong> · See the hand placement, then practice the small action below.</p></div><span class=\"badge\">Guided practice</span></div><div class=\"quick-practice-grid\"><figure class=\"practice-visual\"><button class=\"practice-image-enlarge\" type=\"button\" aria-label=\"Enlarge visual: " + esc(guide.skill) + "\"><img class=\"practice-image\" src=\"/assets/lessons/" + artwork.image + "\" alt=\"" + esc(guide.imageAlt) + "\" width=\"1448\" height=\"1086\" loading=\"lazy\" decoding=\"async\" />" + motion + "<span class=\"practice-enlarge-hint\">View larger <span aria-hidden=\"true\">⤢</span></span></button><figcaption><span class=\"practice-visual-label\">Visual cue</span><strong>" + esc(guide.cue) + "</strong></figcaption></figure><div class=\"practice-coach\"><div class=\"practice-brief\"><div><span>Goal</span><strong>" + esc(guide.goal) + "</strong></div></div><div class=\"practice-instructions\"><h3>What to do</h3><ol>" + instructions + "</ol></div><div class=\"practice-watch\"><h3>Watch for</h3><ul>" + watchFor + "</ul></div><div class=\"practice-avoid\"><h3>Common mistake</h3><p>" + esc(guide.avoid) + "</p></div></div></div>" + comfortCoachMarkup(lesson) + coachedPracticeMarkup("lesson-" + lesson.id, lessonCoachedStages(lesson), false) + "<div class=\"quick-version-bottom\"><div class=\"quick-safety\"><span aria-hidden=\"true\">!</span><span>Keep it gentle. <strong>Comfort is the goal.</strong></span></div><div class=\"button-row practice-actions\"><button class=\"button small practice-check\" type=\"button\" data-practice-id=\"" + lesson.id + "\" " + (complete ? "disabled aria-disabled=\"true\"" : "") + ">" + (complete ? "Practice checked ✓" : "Mark practice complete") + "</button>" + nextLink + "<button class=\"button small reveal-full\" type=\"button\">Full lesson ↓</button></div></div><p class=\"practice-status\" aria-live=\"polite\">" + (complete ? "Practice saved on this device." : "Start when you are ready; check it off when the movement feels clear.") + "</p><dialog class=\"practice-lightbox\" aria-label=\"Enlarged practice visual\"><div class=\"practice-lightbox-head\"><strong>" + esc(guide.skill) + "</strong><button class=\"button small practice-lightbox-close\" type=\"button\">Close</button></div><div class=\"practice-lightbox-frame\"><div class=\"practice-lightbox-art\"><img class=\"practice-lightbox-image\" src=\"/assets/lessons/" + artwork.image + "\" alt=\"" + esc(guide.imageAlt) + "\" width=\"1448\" height=\"1086\" decoding=\"async\" />" + modalMotion + "</div></div><div class=\"practice-lightbox-actions\"><button class=\"button small practice-zoom\" type=\"button\">Zoom in</button><span>Use the enlarged view to inspect hand placement and movement.</span></div></dialog></section>";
}

function quickPracticePage() {
  const requestedLesson = Number(new URLSearchParams(window.location.search).get("lesson"));
  const selectedLesson = lessons.find(function (lesson) { return lesson.id === requestedLesson; }) || currentLesson();
  const choices = lessons.map(function (lesson) {
    const current = lesson.id === selectedLesson.id;
    return "<a class=\"practice-picker-link\" href=\"/quick-practice?lesson=" + lesson.id + "\"" + (current ? " aria-current=\"page\"" : "") + "><span class=\"practice-picker-thumb\">" + lessonImageMarkup(lesson.id, "practice-picker-image") + "<span class=\"practice-picker-number\" aria-hidden=\"true\">" + String(lesson.id).padStart(2, "0") + "</span></span><span><strong>" + esc(lesson.title) + "</strong><small>" + esc(lesson.time + " min lesson") + "</small></span><span class=\"practice-picker-arrow\" aria-hidden=\"true\">→</span></a>";
  }).join("");
  return shell("<div class=\"page quick-practice-page\"><div class=\"reference-hero\"><div><p class=\"eyebrow\">See it · try it · keep it gentle</p><h1>Quick practice</h1><p class=\"lede\">Short, visual practice for one skill at a time. Choose a lesson below to switch the movement.</p></div><a class=\"button subtle\" href=\"/course\">Course map →</a></div>" + quickVersion(selectedLesson) + "<section class=\"practice-picker-panel\" aria-labelledby=\"practice-picker-title\"><div class=\"section-heading\"><div><p class=\"eyebrow\">13 visual practices</p><h2 id=\"practice-picker-title\">Choose another skill</h2></div><p>Every practice opens with its own detailed instructional visual and safety cues.</p></div><nav class=\"practice-picker-grid\" aria-label=\"Choose a quick practice\">" + choices + "</nav></section></div>", "quick-practice");
}

function fullLesson(lesson) {
  const positions = lesson.position.map(function (item, index) { return "<div class=\"position-item\"><strong>" + (index === 0 ? "A" : "B") + "</strong><div><strong>" + esc(item[0]) + "</strong><p>" + esc(item[1]) + "</p></div></div>"; }).join("");
  const steps = lesson.steps.map(function (step) { return "<div class=\"step\"><div><h3>" + esc(step[0]) + "</h3><p>" + esc(step[1]) + "</p></div></div>"; }).join("");
  return "<details class=\"full-lesson\" id=\"full-lesson\"><summary><span><b>Full lesson</b><small>Setup, technique, pressure, and safety details</small></span><strong>Show details</strong></summary><div class=\"full-lesson-body\"><section class=\"lesson-section\"><h2>What you will learn</h2><p class=\"section-intro\">" + esc(lesson.learn) + "</p><div class=\"two-column\"><div class=\"info-card\"><h3>Before you start</h3><ul>" + lesson.before.map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("") + "</ul></div><div class=\"info-card\"><h3>Make it comfortable</h3><p>Keep checking the person’s breathing, body language, and words. A pause is always useful—not a failure.</p></div></div></section><section class=\"lesson-section\"><h2>Position</h2><div class=\"position-grid\"><div class=\"position-list\">" + positions + "</div><div class=\"info-card\"><h3>Find your neutral</h3><p>Can you breathe freely, keep your shoulders down, and move without reaching? If not, adjust the setup before your hands begin.</p></div></div></section><section class=\"lesson-section\"><h2>How to do it</h2><div class=\"step-list\">" + steps + "</div></section><section class=\"lesson-section\"><h2>Pressure guide</h2><div class=\"pressure-grid\"><div class=\"pressure gentle\"><h3>Start light</h3><p>" + esc(lesson.pressure[0]) + "</p></div><div class=\"pressure moderate\"><h3>Check before adjusting</h3><p>" + esc(lesson.pressure[1]) + "</p></div><div class=\"pressure stop\"><h3>Stop or pause</h3><p>" + esc(lesson.pressure[2]) + "</p></div></div></section><section class=\"lesson-section\"><h2>Notice the difference</h2><div class=\"feel-grid\"><div class=\"feel-card good\"><h3>What it should feel like</h3><p>" + esc(lesson.feel) + "</p></div><div class=\"feel-card mistake\"><h3>Common beginner mistakes</h3><ul class=\"mistake-list\">" + lesson.mistakes.map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("") + "</ul></div></div></section><section class=\"lesson-section\"><div class=\"safety-callout\"><div class=\"callout-icon\">!</div><div><h3>Safety for this lesson</h3><p>" + esc(lesson.safety) + "</p></div></div></section></div></details>";
}

function lessonPage(id) {
  const lesson = lessons.find(function (item) { return item.id === id; });
  if (!lesson) return notFound();
  if (!isComplete(lesson.id)) setCurrent(lesson.id);
  const prev = lessons.find(function (item) { return item.id === lesson.id - 1; });
  const next = lessons.find(function (item) { return item.id === lesson.id + 1; });
  const previous = prev ? "<a href=\"#/lesson/" + prev.id + "\"><small>← Previous lesson</small><strong>" + String(prev.id).padStart(2, "0") + " · " + esc(prev.title) + "</strong></a>" : "<span></span>";
  const following = next ? "<a class=\"next\" href=\"#/lesson/" + next.id + "\"><small>Next lesson →</small><strong>" + String(next.id).padStart(2, "0") + " · " + esc(next.title) + "</strong></a>" : "<a class=\"next\" href=\"#/progress\"><small>Course complete →</small><strong>See your progress</strong></a>";
  return shell("<div class=\"page\"><div class=\"lesson-hero\"><div><div class=\"lesson-kicker\">Lesson " + String(lesson.id).padStart(2, "0") + "</div><h1>" + esc(lesson.title) + "</h1><p class=\"lede\">" + esc(lesson.short) + "</p><div class=\"lesson-badges\"><span class=\"badge\">" + esc(lesson.level) + "</span><span class=\"badge\">◷ " + lesson.time + " minutes</span>" + (lesson.id === 8 ? "<span class=\"badge safety\">Safety first</span>" : "") + "</div><div class=\"lesson-progress-label\"><span>Course progress</span><strong>" + progress.completed.length + " of " + lessons.length + " complete</strong></div>" + progressBar(true) + "</div>" + lessonVisual(lesson) + "</div><div class=\"lesson-layout\"><article class=\"lesson-main\">" + quickVersion(lesson) + quickCheck(lesson) + fullLesson(lesson) + "<section class=\"completion-box\"><div><strong>" + (isComplete(lesson.id) ? "Lesson complete ✓" : "Ready to keep this one?") + "</strong><p>" + (isComplete(lesson.id) ? "You can revisit this lesson anytime from the course map." : "Mark it complete when you understand the movement and its safety boundary.") + "</p></div><button class=\"button " + (isComplete(lesson.id) ? "subtle" : "primary") + " complete-button\" type=\"button\" data-lesson=\"" + lesson.id + "\">" + (isComplete(lesson.id) ? "Completed ✓" : "✓ Mark lesson complete") + "</button></section><div class=\"lesson-footer\">" + previous + following + "</div></article>" + aside(lesson) + "</div></div>", "course");
}

function techniques() {
  const cards = libraryItems.map(function (item) {
    return "<article class=\"reference-card enhanced-reference-card\" data-category=\"" + item[4] + "\" data-search=\"" + esc((item[0] + " " + item[1] + " " + item[5]).toLowerCase()) + "\"><div class=\"reference-photo\">" + lessonImageMarkup(item[3], "section-photo") + "</div><div class=\"reference-card-meta\"><span>" + item[6] + "</span><span>" + item[5] + "</span></div><h3>" + esc(item[0]) + "</h3><p>" + esc(item[1]) + "</p><a class=\"ref-link\" href=\"#/lesson/" + item[3] + "\">Open lesson →</a></article>";
  }).join("");
  return shell("<div class=\"page\"><div class=\"reference-hero\"><div><p class=\"eyebrow\">Fast reference</p><h1>Techniques</h1><p class=\"lede\">Find one movement quickly, then open its lesson for setup, boundaries, and practice.</p></div><div class=\"library-toolbar\"><label class=\"search-box\"><span class=\"sr-only\">Search techniques</span><input id=\"technique-search\" type=\"search\" placeholder=\"Search movements or areas\" /></label><label class=\"filter-label\"><span>Show</span><select id=\"technique-filter\"><option value=\"all\">All techniques</option><option value=\"movement\">Core movements</option></select></label></div></div><div class=\"reference-grid\" id=\"reference-grid\">" + cards + "</div></div>", "techniques");
}

function areas() {
  const cards = areaInfo.map(function (area) {
    return "<article class=\"area-explorer-card\"><div class=\"area-photo\">" + (area.title === "Hands" ? '<img class="section-photo" src="/assets/lessons/hand-palm-contact.webp" alt="Soft finger pads contact a supported palm-up hand." width="1448" height="1086" loading="lazy" />' : lessonImageMarkup(area.lesson, "section-photo")) + "</div><div class=\"area-explorer-top\"><div><h2>" + esc(area.title) + "</h2><p>" + esc(area.description) + "</p></div></div><div class=\"area-detail\"><span class=\"detail-label\">Try</span><strong>" + esc(area.techniques) + "</strong></div><div class=\"area-detail\"><span class=\"detail-label\">Routine</span><strong>" + esc(area.routine) + "</strong></div><p class=\"area-safety\"><span>!</span>" + esc(area.safety) + "</p><a class=\"button small\" href=\"" + (area.title === "Hands" ? "/hand-massage" : "/lessons/" + area.lesson) + "\">Open lesson →</a></article>";
  }).join("");
  return shell("<div class=\"page\"><p class=\"eyebrow\">Find a comfortable starting place</p><h1>Body areas</h1><p class=\"lede\" style=\"margin-bottom:34px\">Choose an area to see a beginner technique, a short routine, a relevant lesson, and the safety boundary in one glance.</p><div class=\"area-explorer-grid\">" + cards + "</div></div>", "body-areas");
}

function routineCard(routine, index) {
  const stages = routineCoachedStages(routine);
  return '<article class="routine-card-enhanced"><div class="routine-card-top"><div><span class="routine-tag">' + esc(routine.tag) + '</span><h2>' + esc(routine.title) + '</h2></div><strong class="routine-time-large">' + esc(routine.time) + '</strong></div><p>' + esc(routine.description) + '</p><p class="coach-time-note">Suggested sequence · pause between stages and follow comfort, not the clock.</p>' + routineTimelineMarkup(routine) + comfortCoachMarkup(lessons.find(function (lesson) { return lesson.id === stages[0].lesson; })) + coachedPracticeMarkup("routine-" + index, stages, true) + '<div class="routine-safety"><span>!</span>' + esc(routine.safety) + '</div></article>';
}

function routines() {
  return shell("<div class=\"page\"><div class=\"reference-hero routine-heading\"><div><p class=\"eyebrow\">Follow along, no planning needed</p><h1>Quick routines</h1><p class=\"lede\">Short, practical sequences for everyday use. Each step links back to the lesson that teaches it.</p></div><a class=\"button subtle\" href=\"#/safety\">Safety first →</a></div><div class=\"routine-stack\">" + routineData.map(routineCard).join("") + "</div></div>", "routines");
}

function reference() {
  return shell("<div class=\"page\"><p class=\"eyebrow\">Your quick index</p><h1>Reference</h1><p class=\"lede\" style=\"margin-bottom:34px\">Jump to the kind of help you need today. The guided course remains the best place to learn a new skill from the beginning.</p><div class=\"reference-hub-grid\"><a class=\"reference-hub-card sage\" href=\"#/techniques\">" + lessonImageMarkup(3, "section-photo") + "<strong>Techniques</strong><p>Find a movement by name and open its lesson.</p><b>Browse movements →</b></a><a class=\"reference-hub-card coral\" href=\"#/body-areas\">" + lessonImageMarkup(7, "section-photo") + "<strong>Body areas</strong><p>Choose a body area and see a safe starting point.</p><b>Explore body areas →</b></a><a class=\"reference-hub-card sun\" href=\"#/routines\">" + lessonImageMarkup(13, "section-photo") + "<strong>Quick routines</strong><p>Follow a 3-, 5-, or 10-minute sequence.</p><b>Choose a routine →</b></a><a class=\"reference-hub-card blue\" href=\"#/safety\">" + lessonImageMarkup(1, "section-photo") + "<strong>Safety</strong><p>Review the stop signs and boundaries at a glance.</p><b>Review safety →</b></a></div><section class=\"reference-callout\"><div><p class=\"eyebrow\">Want the full learning path?</p><h2>Start with lesson 1, then come back here anytime.</h2></div><a class=\"button primary\" href=\"#/course\">Open the course map →</a></section></div>", "reference");
}

function safety() {
  return shell("<div class=\"page\"><section class=\"safety-hero\"><div class=\"safety-hero-copy\"><p class=\"eyebrow\" style=\"color:var(--sun)\">The safety boundary</p><h1>Comfort is the skill.</h1><p>The Craft is educational guidance for gentle, non-medical massage. It does not diagnose, cure, or treat medical conditions. When in doubt, pause and ask an appropriate health professional.</p></div><figure class=\"safety-hero-visual\">" + lessonImageMarkup(1, "section-photo") + "<figcaption>Ask first. Pause whenever needed.</figcaption></figure></section><section class=\"safety-at-a-glance\"><div><strong>Stop</strong><span>sharp or severe pain</span></div><div><strong>Stop</strong><span>numbness or tingling</span></div><div><strong>Stop</strong><span>dizziness or faintness</span></div><div><strong>Ask first</strong><span>injury, surgery, or a condition</span></div></section><div class=\"safety-grid\"><section class=\"safety-panel\"><h2>Stop right away for</h2><div class=\"stop-list\"><div class=\"stop-item\">Sharp or severe pain</div><div class=\"stop-item\">Numbness or tingling</div><div class=\"stop-item\">Dizziness or faintness</div><div class=\"stop-item\">Unusual weakness</div><div class=\"stop-item\">Difficulty breathing</div><div class=\"stop-item\">Any sudden concerning symptom</div></div></section><section class=\"safety-panel\"><h2>Ask for advice first</h2><ul><li>There is an injury, unexplained severe pain, or recent surgery.</li><li>A person has a medical condition, unusual swelling, or altered sensation.</li><li>The skin is broken, inflamed, bruised, or unusually hot or red.</li><li>You are unsure whether massage is appropriate or safe.</li></ul></section><section class=\"safety-panel\"><h2>Always keep out of bounds</h2><ul><li>Do not forcefully manipulate the spine, neck, joints, or injured areas.</li><li>Do not twist, crack, pull, or traction the neck.</li><li>Do not press directly on the spine, throat, open wounds, or acute pain.</li><li>Do not present massage as a cure or replacement for professional care.</li></ul></section><section class=\"safety-panel\"><h2>Good communication sounds like</h2><ul><li>“Is this pressure comfortable?”</li><li>“Would you like me to stay here, change direction, or pause?”</li><li>“Tell me if you feel anything sharp, numb, tingly, or unusual.”</li><li>“We can stop now—there is no need to push through.”</li></ul></section></div>" + relaxationEvidenceMarkup() + "</div>", "safety");
}

function progressPage() {
  const completed = lessons.filter(function (lesson) { return isComplete(lesson.id); });
  const next = currentLesson();
  return shell("<div class=\"page\"><div class=\"progress-hero\"><div><p class=\"eyebrow\">Your private learning record</p><h1>Progress</h1><p class=\"lede\">Your progress stays in this browser. No account, name, or sign-in is needed.</p></div><div class=\"progress-big\"><strong>" + percentComplete() + "%</strong><span>course complete</span></div></div><div class=\"progress-track\"><span style=\"width:" + percentComplete() + "%\"></span></div><div class=\"progress-caption\"><span>" + completed.length + " of " + lessons.length + " lessons completed</span><span>Next: " + esc(next.title) + "</span></div><section class=\"progress-next\"><div><p class=\"eyebrow\">Pick up where you left off</p><h2>Lesson " + String(next.id).padStart(2, "0") + " · " + esc(next.title) + "</h2><p>" + esc(next.short) + "</p></div><a class=\"button primary\" href=\"#/lesson/" + next.id + "\">" + (completed.length ? "Continue learning" : "Start learning") + " →</a></section><div class=\"button-row\" style=\"margin:22px 0 32px\"><button class=\"button subtle reset-progress\" type=\"button\">Reset progress</button><a class=\"button\" href=\"#/course\">View course map</a></div><div class=\"lesson-list\">" + lessons.map(function (lesson) { return lessonCardMarkup(lesson, true); }).join("") + "</div></div>", "progress");
}

function notFound() {
  return shell("<div class=\"page not-found\"><p class=\"eyebrow\">A quiet detour</p><h1>That page wandered off.</h1><p class=\"lede\" style=\"margin:0 auto 25px\">Let’s take you back to the learning path.</p><a class=\"button primary\" href=\"#/home\">Return home →</a></div>", "");
}

function render() {
  stopAllCoachedSessions();
  if (practiceTimer) { clearInterval(practiceTimer); practiceTimer = null; }
  const current = route();
  let html;
  if (current === "home") html = home();
  else if (current === "course") html = course();
  else if (current === "quick-practice") html = quickPracticePage();
  else if (current === "techniques") html = techniques();
  else if (current === "body-areas") html = areas();
  else if (current === "pressure-points") html = pressurePointsPage();
  else if (current === "hand-massage") html = handMassagePage();
  else if (current === "routines") html = routines();
  else if (current === "safety") html = safety();
  else if (current === "progress") html = progressPage();
  else if (current === "reference") html = reference();
  else if (/^lesson\/\d+$/.test(current)) html = lessonPage(Number(current.split("/")[1]));
  else html = notFound();
  const app = document.getElementById("app");
  app.innerHTML = html;
  normalizeRouteLinks(app);
  updatePageMetadata(current);
  if (current === "home") replaceHeroArtwork(app);
  bindEvents();
  if (/^#[a-z][a-z0-9-]*$/i.test(window.location.hash)) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) target.scrollIntoView({ block: "start" });
  }
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
function bindEvents() {
  bindGuidedPractices();
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menu) menu.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menu.textContent = open ? "×" : "☰";
  });
  if (nav) nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      if (menu) { menu.setAttribute("aria-expanded", "false"); menu.setAttribute("aria-label", "Open navigation"); menu.textContent = "☰"; }
    });
  });
  const complete = document.querySelector(".complete-button");
  if (complete) complete.addEventListener("click", function (event) {
    markLesson(Number(event.currentTarget.dataset.lesson));
    render();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
  const reset = document.querySelector(".reset-progress");
  if (reset) reset.addEventListener("click", function () {
    if (window.confirm("Reset all lesson and practice progress? This cannot be undone.")) {
      progress = { completed: [], current: 1, practiceCompleted: [], scalpPracticeCompleted: [] };
      saveProgress();
      render();
    }
  });
  const reveal = document.querySelector(".reveal-full");
  if (reveal) reveal.addEventListener("click", function () {
    const detail = document.querySelector(".full-lesson");
    if (detail) {
      detail.open = true;
      detail.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
  const detail = document.querySelector(".full-lesson");
  if (detail) detail.addEventListener("toggle", function () {
    const label = detail.querySelector("summary > strong");
    if (label) label.textContent = detail.open ? "Hide details ↑" : "Show details";
  });
  const search = document.querySelector("#technique-search");
  const filter = document.querySelector("#technique-filter");
  const grid = document.querySelector("#reference-grid");
  function filterLibrary() {
    const query = search ? search.value.toLowerCase().trim() : "";
    const category = filter ? filter.value : "all";
    const cards = document.querySelectorAll(".enhanced-reference-card");
    cards.forEach(function (card) {
      card.hidden = Boolean((query && !card.dataset.search.includes(query)) || (category !== "all" && card.dataset.category !== category));
    });
    if (grid) grid.classList.toggle("has-no-results", Array.from(cards).every(function (card) { return card.hidden; }));
  }
  if (search) search.addEventListener("input", filterLibrary);
  if (filter) filter.addEventListener("change", filterLibrary);
  const pressureSearch = document.querySelector("#pressure-search");
  const pressureSections = Array.from(document.querySelectorAll("[data-pressure-section]"));
  const pressureStatus = document.querySelector("#pressure-results-status");
  const pressureNoResults = document.querySelector("#pressure-no-results");
  const pressureChips = Array.from(document.querySelectorAll(".pp-area-chip"));
  let pressureArea = "all";
  function filterPressurePoints() {
    const query = pressureSearch ? pressureSearch.value.toLowerCase().trim() : "";
    let shownAreas = 0;
    let shownPoints = 0;
    pressureSections.forEach(function (section) {
      const categoryMatches = pressureArea === "all" || section.dataset.pressureSection === pressureArea;
      const textMatches = !query || section.textContent.toLowerCase().includes(query);
      const visible = categoryMatches && textMatches;
      section.hidden = !visible;
      if (visible) {
        shownAreas += 1;
        shownPoints += section.querySelectorAll(".pp-point-card").length;
      }
    });
    if (pressureStatus) pressureStatus.textContent = shownAreas
      ? "Showing " + shownAreas + " of 9 body areas · " + shownPoints + " point " + (shownPoints === 1 ? "lesson" : "lessons")
      : "No body areas match. Try another point name or landmark.";
    if (pressureNoResults) pressureNoResults.hidden = shownAreas > 0;
  }
  if (pressureSearch) pressureSearch.addEventListener("input", filterPressurePoints);
  pressureChips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      pressureArea = chip.dataset.pressureArea;
      pressureChips.forEach(function (item) { item.setAttribute("aria-pressed", String(item === chip)); });
      filterPressurePoints();
    });
  });
  const practiceCheck = document.querySelector(".practice-check");
  if (practiceCheck) practiceCheck.addEventListener("click", function (event) {
    const lessonId = Number(event.currentTarget.dataset.practiceId);
    markPracticeComplete(lessonId);
    const session = coachedSessions.get("lesson-" + lessonId);
    if (session) session.pause("Practice marked complete. Ease contact off and rest.");
    event.currentTarget.disabled = true;
    event.currentTarget.textContent = "Practice checked ✓";
    const practice = event.currentTarget.closest(".quick-version");
    practice.classList.add("is-practice-complete");
    const status = practice.querySelector(".practice-status");
    if (status) status.textContent = "Practice saved on this device. Move on when you feel ready.";
    const count = practice.querySelector(".practice-count");
    if (count) count.textContent = "Skill " + String(lessonId).padStart(2, "0") + " of " + lessons.length + " · " + progress.practiceCompleted.length + " checked";
  });
  const practiceLightbox = document.querySelector(".practice-lightbox");
  if (practiceLightbox) {
    const openLightbox = document.querySelector(".practice-image-enlarge");
    const closeLightbox = practiceLightbox.querySelector(".practice-lightbox-close");
    const zoomButton = practiceLightbox.querySelector(".practice-zoom");
    const zoomImage = practiceLightbox.querySelector(".practice-lightbox-art");
    if (openLightbox) openLightbox.addEventListener("click", function () { practiceLightbox.showModal(); });
    if (closeLightbox) closeLightbox.addEventListener("click", function () { practiceLightbox.close(); });
    if (zoomButton) zoomButton.addEventListener("click", function () {
      const zoomed = zoomImage.classList.toggle("is-zoomed");
      zoomButton.textContent = zoomed ? "Reset zoom" : "Zoom in";
    });
    practiceLightbox.addEventListener("click", function (event) {
      if (event.target === practiceLightbox) practiceLightbox.close();
    });
    practiceLightbox.addEventListener("close", function () {
      zoomImage.classList.remove("is-zoomed");
      if (zoomButton) zoomButton.textContent = "Zoom in";
    });
  }
  const scalpLightbox = document.querySelector(".scalp-lightbox");
  if (scalpLightbox) {
    const art = scalpLightbox.querySelector(".scalp-lightbox-art");
    const title = scalpLightbox.querySelector(".scalp-lightbox-title");
    const close = scalpLightbox.querySelector(".scalp-lightbox-close");
    const zoom = scalpLightbox.querySelector(".scalp-lightbox-zoom");
    document.querySelectorAll(".scalp-visual-enlarge").forEach(function (button) {
      button.addEventListener("click", function () {
        const card = button.closest(".scalp-technique-card");
        const techniqueId = card.dataset.scalpTechnique;
        const technique = scalpTechniques.find(function (item) { return item.id === techniqueId; });
        if (!technique || !art) return;
        art.innerHTML = card.querySelector(".scalp-visual-art").innerHTML.replace(new RegExp("scalp-arrow-" + techniqueId, "g"), "scalp-arrow-" + techniqueId + "-modal");
        if (title) title.textContent = technique.title;
        if (zoom) zoom.textContent = "Zoom in";
        scalpLightbox.showModal();
      });
    });
    if (close) close.addEventListener("click", function () { scalpLightbox.close(); });
    if (zoom) zoom.addEventListener("click", function () {
      const zoomed = art.classList.toggle("is-zoomed");
      zoom.textContent = zoomed ? "Reset zoom" : "Zoom in";
    });
    scalpLightbox.addEventListener("click", function (event) { if (event.target === scalpLightbox) scalpLightbox.close(); });
    scalpLightbox.addEventListener("close", function () {
      art.classList.remove("is-zoomed");
      art.replaceChildren();
      if (zoom) zoom.textContent = "Zoom in";
    });
  }
  document.querySelectorAll(".scalp-practice-complete").forEach(function (button) {
    button.addEventListener("click", function () {
      const techniqueId = button.dataset.techniqueId;
      if (!Array.isArray(progress.scalpPracticeCompleted)) progress.scalpPracticeCompleted = [];
      if (!progress.scalpPracticeCompleted.includes(techniqueId)) progress.scalpPracticeCompleted.push(techniqueId);
      saveProgress();
      const card = button.closest(".scalp-technique-card");
      const session = coachedSessions.get("scalp-" + techniqueId);
      if (session) session.pause("Practice marked complete. Ease contact off and rest.");
      card.classList.add("is-technique-done");
      button.disabled = true;
      button.setAttribute("aria-disabled", "true");
      button.textContent = "Practiced ✓";
      const badge = card.querySelector(".scalp-done-label");
      if (badge) badge.hidden = false;
      const count = document.querySelector(".scalp-technique-progress strong");
      const total = scalpTechniques.filter(function (technique) { return progress.scalpPracticeCompleted.includes(technique.id); }).length;
      if (count) count.textContent = total + " of " + scalpTechniques.length + " techniques practiced";
    });
  });
  const quiz = document.querySelector(".quiz");
  if (quiz) quiz.addEventListener("submit", function (event) { event.preventDefault(); checkQuiz(event.currentTarget); });
}
function quickCheck(lesson) {
  const questions = lesson.quiz.map(function (question, qIndex) {
    const options = question[1].map(function (option, optionIndex) {
      return "<label class=\"quiz-option\"><input type=\"radio\" name=\"question-" + qIndex + "\" value=\"" + optionIndex + "\" />" + esc(option) + "</label>";
    }).join("");
    return "<fieldset class=\"quiz-question\"><legend>" + (qIndex + 1) + ". " + esc(question[0]) + "</legend><div class=\"quiz-options\">" + options + "</div><div class=\"quiz-feedback\" data-feedback=\"" + qIndex + "\">" + esc(question[3]) + "</div></fieldset>";
  }).join("");
  return "<section class=\"lesson-section quick-check\"><h2>Quick check</h2><p class=\"section-intro\">Two quick questions to help the key idea stick.</p><form class=\"quiz\" data-lesson=\"" + lesson.id + "\">" + questions + "<div class=\"button-row\"><button class=\"button coral quiz-submit\" type=\"submit\">Check answers</button><div class=\"quiz-result\" aria-live=\"polite\"></div></div></form></section>";
}
