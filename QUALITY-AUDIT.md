# Relaxation instruction audit — 5 October 2026

This is an instruction, visual, and software audit. It is not a physical massage trial, a clinician's certification, or a guarantee of relaxation. Individual comfort must be checked with the receiver. A qualified instructor should assess actual hand placement and pressure.

## Coverage and changes

- Six named core techniques reviewed and their short descriptions revised: gliding, circles, kneading, still contact, palm support, and light finger strokes.
- All 13 course lessons and Quick Practice guides revised: support and consent, broad contact, slower movement, comfortable body mechanics, lighter returns, optional focused work, and gradual release.
- All 13 Head & Scalp technique instructions revised. Tapping and raking are explicitly optional; hair catching, dry skin drag, and awkward skull-base contact have alternatives.
- All seven routines revised: 3-Minute Quick Relaxation, 5-Minute Beginner, 10-Minute Relaxation, Head & Scalp, Hands & Arms, Shoulders, and Beginner Full Routine. Each has an actual timeline, detailed transition, stage-specific image, and guided timer. The Full Routine uses a supported forearm as a concrete example.
- Six traditional pressure-point lessons reviewed for pressure/hold/release guidance and safety. Their conservative teaching intervals remain explicitly distinct from treatment doses. GV20 wording clarified to avoid suggesting pressure into bone. Traditional use remains distinct from medically established claims.
- All 26 existing instructional photographs inspected. Circular-massage neck-adjacent hand placement replaced; a palm-specific photograph added for palm work. Misleading squeeze/large-circle arrows removed from circles, kneading, shoulders, feet, and scalp; verified forearm/calf/back direction cues retained. The routine practice now shows forearm action rather than a closing conversation. Original scalp photographs remain distinct.

## Safety corrections

Side-of-neck circles removed from the neck lesson. Head support comes from a pillow or headrest; hands do not lift, pull, or manipulate the head. Focused work never requires deeper pressure. Ticklish feet do not automatically call for more force. New one-sided leg pain/swelling calls for urgent assessment; breathlessness or chest pain with these symptoms calls for emergency help.

Sources: [NCCIH massage safety](https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know), [NHS DVT symptoms and urgent care](https://www.nhs.uk/conditions/deep-vein-thrombosis-dvt/). Pressure-point location/evidence sources remain on the Pressure Points page. The comfort sequencing is conservative teaching guidance, not a validated therapeutic protocol.

## Interaction checks

The shared controller supports start, pause/resume with preserved time, restart, early finish, completion, and a manual comfort confirmation between stages. It pauses when the page is hidden or another practice starts and clears timers on navigation. Countdown values are not announced every second to screen readers. Completion/progress remains a learner-controlled check.

Run `node tools/check-relaxation.cjs` for dependency-free render, local asset, duration, and timer regressions. JavaScript syntax and Git whitespace checks also apply. There is no compilation/build step in this static app; Vercel serves the root and uses the existing clean-route rewrites. `relaxation-coach.js` loads after the data/rendering scripts. Asset versions prevent old cached instructions from surviving this update.

Browser verification: 36 desktop and 36 mobile routes (390 px), including all lessons, main pages, and each Quick Practice choice, rendered without horizontal overflow or broken loaded images. New practice controls met the 44 px minimum tap height. Scalp lightbox, quiz answer checking, and practice-progress persistence across reload passed. Browser console had no errors. Generated images and all rendered local asset references passed file checks. A second editorial pass checked the revised start/action/finish flow and optional alternatives throughout.

## Generated visual assets

Built-in image generation used; images inspected before integration and converted to 1448 × 1086 WebP. Originals preserved.

- `assets/lessons/lesson-04-circles-relaxed.webp`: realistic rear three-quarter view, seated clothed adult with arms supported, one relaxed broad palm flat on soft back shoulder muscle clearly below and away from the neck, loose fingers/wrist/elbow, no downward push. Warm neutral spa light and sage/cream styling; no text, arrows, markers, logos, or watermarks.
- `assets/lessons/hand-palm-contact.webp`: realistic close view of a cushioned palm-up forearm and comfortable wrist, one relaxed hand supporting beneath the hand, two or three soft finger pads resting on the fleshy palm for tiny circles, no digging/squeezing/pulling. Matching warm neutral light and sage/cream styling; no text, arrows, markers, logos, or watermarks.

Prompts specified anatomically plausible normal five-finger hands and enough body/support context to understand contact. Photos demonstrate placement, not a measurable pressure level or proven clinical effect.

### Prompt set

Circular massage prompt: “Use case: scientific-educational. Create one realistic 4:3 landscape instructional photo for a beginner gentle massage training website. Warm natural spa light, neutral cream linen and muted sage clothing, photographic educational realism. Adult receiver fully clothed in a sage cotton shirt, seated upright comfortably with forearms supported on a pillow in the lap; adult therapist beside and slightly behind. Close rear three-quarter crop includes head, whole neck, shoulder and therapist forearm. Show exactly ONE relaxed open palm resting FLAT on fleshy posterior shoulder / upper back below the top of the shoulder and well LATERAL to the spine; all fingers together softly and thumb relaxed. The entire working hand is CLEARLY BELOW and AWAY FROM the neck. The palm contacts broad muscle between shoulder blade and back shoulder, not the shoulder joint or neck. Neutral comfortable therapist wrist, loose elbow, no tense gripping, no downward push. Other hand out of frame. Receiver head neutral with relaxed shoulders. Camera clearly shows hand contact on fabric. No arrows, words, markers, watermarks or logos. Anatomically plausible two adults with normal hands five fingers. This depicts the START of a tiny slow broad-palm skin circle; do not show vigorous kneading or finger pressure. Detailed crisp hands and body contact.”

Palm contact prompt: “Use case: scientific-educational. One photorealistic 4:3 landscape close instructional photograph for gentle beginner hand massage. Warm soft daylight, cream towel, sage cotton sleeve, neutral natural skin colors matching a calm spa photo library. Adult receiver's forearm and wrist rest FULLY on a cushion, palm facing up, fingers open naturally and completely relaxed. Adult therapist beside the arm; one relaxed hand lightly cups the underside of the receiver's hand without squeezing or lifting the wrist. The broad SOFT PADS OF TWO OR THREE FINGERS of the other hand rest flat on the middle fleshy palm, ready for tiny skin circles. Working thumb is relaxed and lifted slightly clear, not digging; no knuckles pressing, no pointy fingertip pokes. All hands anatomically clear with exactly five normal fingers each. Receiver wrist neutral and supported independently by towel/cushion; no traction, bending, gripping, finger pulling, or force. Show enough forearm and cushion to demonstrate support, clear unobstructed central palm contact. Therapist working wrist comfortably aligned, loose fingers. The image teaches light finger-pad contact on the palm, not forearm or foot work. No arrows, labels, text, logos or watermarks.”
