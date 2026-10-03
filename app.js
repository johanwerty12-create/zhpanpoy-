const STORAGE_KEY = "kindred-touch-progress-v1";

const lessons = [
  {
    id: 1, title: "Massage Basics", short: "Build a safe, comfortable foundation before your hands begin.", time: 6, level: "Beginner", icon: "✦",
    learn: "Massage is a way to offer attentive, comfortable touch. This first lesson covers preparation, permission, communication, and noticing the other person’s response.",
    before: ["Ask for clear permission before touching.", "Trim or smooth nails and wash your hands.", "Choose a warm, quiet place with room to move."],
    position: [["Their position", "Choose a supported seated or lying position. Pillows can help the neck, knees, or arms relax."], ["Your position", "Stay close enough that your shoulders can drop. Move your whole body instead of leaning hard into your hands."]],
    steps: [["Set a shared plan.", "Say which area you will work on, how long you have, and how the person can ask you to pause."], ["Start with still contact.", "Rest a warm, relaxed hand on a broad area for a moment so both of you can settle."], ["Use less pressure than you think.", "Begin gently. Comfort and communication matter more than intensity."], ["Check in often.", "Ask, “How is this pressure?” and watch for changes in breathing or tension."]],
    pressure: ["Start with light, broad contact. The person should be able to breathe and relax normally.", "Increase only a little if they ask for more and the tissue still feels comfortable.", "Stop for sharp pain, guarding, numbness, tingling, dizziness, or any concerning symptom."],
    feel: "Warm, steady, and easy to receive. A relaxed breath or softer shoulders are useful clues, but always trust what the person tells you.",
    mistakes: ["Starting without permission or a shared plan.", "Trying to fix pain with more pressure.", "Staying in one position until your own wrists or shoulders strain."],
    safety: "Massage is educational comfort care, not a diagnosis or a substitute for medical care. Do not work over injuries, unexplained severe pain, or recent surgery without appropriate professional advice.",
    practice: ["permission first", "relaxed shoulders", "light contact", "simple check-in"], visual: ["welcome", "Start with permission, a supported position, and a calm pace.", "Abstract illustration of two people sharing calm, supportive touch"],
    quiz: [["What should happen before you begin?", ["Ask for clear permission", "Apply firm pressure", "Skip the check-in"], 0, "Permission and a shared plan come first."], ["What is the safest starting pressure?", ["The deepest pressure you can manage", "Light and comfortable", "Whatever feels intense"], 1, "Begin lightly and adjust only with communication."]]
  },
  {
    id: 2, title: "Hand Preparation", short: "Make your hands warm, relaxed, and ready to listen.", time: 5, level: "Beginner", icon: "☼",
    learn: "Good technique begins with a comfortable hand. Practice a neutral wrist, soft fingers, and using the palm so the work feels broad rather than pokey.",
    before: ["Wash and warm your hands.", "Shake out your fingers and roll your shoulders.", "Use a small amount of lotion only if it is wanted and safe for the skin."],
    position: [["Their position", "Let the person rest the area you are practicing on so it does not have to hold itself up."], ["Your position", "Keep wrists long and hands close to your body. Let your knees and feet help you shift weight."]],
    steps: [["Soften your fingers.", "Keep fingers together or gently spaced. Avoid poking with fingertips or locking the thumb."], ["Find the palm base.", "Notice the broad, cushioned area below the fingers. It spreads contact over a larger surface."], ["Practice a weight shift.", "Place your palm on a pillow and lean a few centimeters, then return. Keep the arm easy."], ["Reset often.", "If the wrist bends, fingers grip, or shoulders rise, pause and shake your hands loose."]],
    pressure: ["The palm should feel warm and broad, like a resting hand.", "Use a little more body weight only when the hand stays relaxed and the receiver agrees.", "Pain in your wrist, thumb, or fingers is a signal to stop and reset."],
    feel: "Your hand feels connected but not gripping. The receiver notices steady warmth rather than sudden pokes.",
    mistakes: ["Bending the wrist sharply.", "Using the thumb as a small digging tool.", "Holding your breath while you concentrate."],
    safety: "Keep pressure away from broken skin, irritated rashes, and areas that are acutely painful. Stop if either person feels pain, tingling, or numbness.",
    practice: ["warm palms", "soft fingers", "neutral wrists", "easy breathing"], visual: ["hands", "A broad palm spreads contact; relaxed fingers stay together.", "Diagram showing a relaxed palm and neutral wrist resting on a surface"],
    quiz: [["Which part spreads pressure most broadly?", ["The tip of one finger", "The palm", "A locked thumb"], 1, "The palm gives you broad, comfortable contact."], ["What should you do if your wrist bends sharply?", ["Press harder", "Move faster", "Pause and reset"], 2, "Reset your position before continuing."]]
  },
  {
    id: 3, title: "Gentle Gliding", short: "Learn the smooth, flowing stroke that connects a whole routine.", time: 5, level: "Beginner", icon: "→",
    learn: "Gliding is a smooth stroke that helps you begin, connect areas, and finish. The goal is steady contact, not speed or force.",
    before: ["Choose a broad area such as the forearm or upper back.", "Keep lotion minimal so the skin is not slippery.", "Agree on a simple pressure scale: light, more, or pause."],
    position: [["Their position", "Support the limb or let the person lie comfortably with the area easy to reach."], ["Your position", "Stand or sit along the direction of travel. Step or shift your weight instead of stretching your arm."]],
    steps: [["Make a full contact.", "Place the palm and fingers down together, slowly enough that the person can anticipate your touch."], ["Glide in one direction.", "Move toward the body’s center on the working stroke with an unhurried, even pace."], ["Return lightly.", "Lift or soften pressure for the return so the movement never drags the skin."], ["Repeat with a rhythm.", "Keep strokes similar in length. Let your breath set a calm, repeatable pace."]],
    pressure: ["Light pressure should move the skin gently without discomfort.", "Moderate pressure is optional and should remain easy to receive.", "Too much pressure causes guarding, sharpness, or a braced breath—reduce immediately."],
    feel: "A smooth, warming sweep with no sudden stops or scraping. The person should not need to brace for the next stroke.",
    mistakes: ["Rushing the stroke.", "Changing pressure halfway through without warning.", "Dragging back over the same spot with equal force."],
    safety: "Do not glide over bruises, open wounds, inflamed skin, varicose veins, or areas of unexplained pain. Seek professional advice for concerning symptoms.",
    practice: ["one direction", "steady rhythm", "light return", "check in"], visual: ["glide", "Long arrows show the working direction; soften the return.", "Forearm diagram with a long arrow showing a smooth gliding direction"],
    quiz: [["How should the return stroke feel?", ["Lighter or lifted", "Deeper than the working stroke", "Fast and abrupt"], 0, "A lighter return avoids dragging the skin."], ["What is the main goal of gliding?", ["Maximum intensity", "Smooth, steady contact", "Finding painful spots"], 1, "Smooth, steady contact is the skill."]]
  },
  {
    id: 4, title: "Circular Massage", short: "Use small, patient circles to warm a comfortable area.", time: 5, level: "Beginner", icon: "◌",
    learn: "Small circles can add variety after gliding. Move the skin gently with the whole hand while keeping the circle predictable and comfortable.",
    before: ["Select a broad, comfortable muscle area—not a bony point.", "Begin with a few gliding strokes to introduce contact.", "Ask whether small circles feel pleasant before continuing."],
    position: [["Their position", "Support the area so it can stay soft. Avoid asking a joint to hold an awkward angle."], ["Your position", "Keep the circle under your relaxed hand and move from your elbow and shoulder, not only your wrist."]],
    steps: [["Place a broad hand.", "Use the palm or several finger pads together. Keep the thumb relaxed."], ["Make small circles.", "Start about the size of a coin. Let the skin move with you instead of rubbing quickly across it."], ["Keep the tempo slow.", "Count two seconds around each circle. Regular rhythm is more useful than a large motion."], ["Widen or finish.", "If it feels good, gradually make circles a little wider, then return to gentle gliding."]],
    pressure: ["Use enough pressure to feel the skin move under your hand.", "A little more can be comfortable over soft muscle, never over bone or a tender spot.", "Reduce pressure if the skin pulls, the person tenses, or the circle feels scratchy."],
    feel: "A warm, rhythmic movement that stays easy to predict. There should be no pinching or concentrated pain.",
    mistakes: ["Making circles too large or fast.", "Circling directly on a bony point.", "Using a stiff wrist and a poking thumb."],
    safety: "Avoid front-of-neck pressure, inflamed areas, bruises, and recent injuries. Stop for pain, tingling, numbness, dizziness, or unusual symptoms.",
    practice: ["small circles", "broad contact", "slow count", "soft wrist"], visual: ["circles", "Small, even circles keep the movement clear and easy to adjust.", "Diagram of a hand making small circular arrows over a soft muscle area"],
    quiz: [["Where should circular massage be focused?", ["A bony point", "A broad, comfortable muscle area", "The front of the throat"], 1, "Choose broad soft tissue and avoid sensitive structures."], ["What should move with the circle?", ["Only a locked thumb", "The skin gently under a broad hand", "The person’s joint"], 1, "A broad hand should move the skin gently."]]
  },
  {
    id: 5, title: "Kneading", short: "Practice a simple lift-and-release without squeezing hard.", time: 6, level: "Beginner", icon: "≈",
    learn: "Kneading is a gentle lift-and-release of soft muscle. This beginner version stays shallow and rhythmic; it is never a deep squeeze or a test of strength.",
    before: ["Use a broad, fleshy area such as the upper shoulder or calf.", "Warm the area with gliding first.", "Keep the skin comfortable and use little or no lotion."],
    position: [["Their position", "Let the muscle rest fully. A supported arm or leg avoids accidental pulling."], ["Your position", "Face the area and keep your elbows soft. Shift your weight rather than gripping with your fingers."]],
    steps: [["Gather gently.", "Use the palm and finger pads to gather a small amount of soft tissue. Do not pinch the skin."], ["Lift a little.", "Lift or roll the tissue only a small distance, keeping the motion slow and shallow."], ["Release smoothly.", "Let the tissue return without dropping it. Keep a soft, even rhythm."], ["Move along.", "Work a nearby area after a few repetitions rather than staying on one spot."]],
    pressure: ["The tissue should move a little without being squeezed.", "If the person asks for more, increase gradually and keep hands broad.", "Stop for sharp pain, cramping, bruising, or a strong urge to pull away."],
    feel: "A gentle rolling or lifting sensation in soft muscle. The area should feel warmer, not sore or bruised.",
    mistakes: ["Pinching the skin between fingertips.", "Squeezing as if kneading dough.", "Working over a tendon, joint, bruise, or acute injury."],
    safety: "Do not knead injured, swollen, inflamed, or acutely painful areas. If there is an injury or medical condition, ask a qualified professional before massage.",
    practice: ["gather, do not pinch", "small lift", "smooth release", "keep moving"], visual: ["knead", "A small lift and release creates rhythm without force.", "Hand diagram showing a gentle lift and release over soft tissue"],
    quiz: [["What is beginner kneading?", ["A deep squeeze", "A small lift and release", "A fast pinch"], 1, "Keep the lift small, shallow, and rhythmic."], ["What should you avoid?", ["Soft muscle", "Moving along gradually", "Pinching the skin"], 2, "Use the broad palm and finger pads instead of pinching."]]
  },
  {
    id: 6, title: "Shoulders", short: "Help the shoulders soften with broad, easy techniques.", time: 7, level: "Beginner", icon: "⌁",
    learn: "The shoulders often hold everyday tension. Combine gliding, small circles, and a gentle hold while keeping the neck and shoulder joints free from force.",
    before: ["Invite the person to sit supported or lie comfortably.", "Ask about sensitivity, old injuries, and preferred pressure.", "Keep the front and side of the neck out of the routine."],
    position: [["Their position", "A supported seat with feet on the floor works well. Arms can rest in the lap or on pillows."], ["Your position", "Stand behind or beside them with one foot forward. Keep your shoulders lower than your ears."]],
    steps: [["Warm the upper back.", "Use broad gliding over the shoulder muscle, staying away from the spine and front of the neck."], ["Circle the shoulder cap.", "Use small circles over soft muscle at the top and back of the shoulder, never the bony tip."], ["Soften the upper shoulder.", "Use a gentle palm hold or shallow kneading. There is no need to squeeze or lift."], ["Finish with stillness.", "Rest a hand broadly for one breath, release, and ask how the person feels."]],
    pressure: ["Start with light, broad pressure on the upper shoulder muscle.", "Moderate pressure is only for soft tissue and only with clear agreement.", "Never press hard on the spine, collarbone, shoulder joint, or neck."],
    feel: "Warmth and a sense of space around the shoulders. The person should be able to let the shoulders drop naturally.",
    mistakes: ["Pushing down on the top of the shoulder joint.", "Working too close to the front of the neck.", "Using both hands so heavily that the person cannot relax."],
    safety: "Avoid direct pressure on the spine, collarbone, shoulder joint, bruises, or recent injuries. Stop if pain travels down the arm or there is numbness or tingling.",
    practice: ["broad strokes", "shoulders down", "soft shoulder cap", "ask before more"], visual: ["shoulders", "Stay on soft shoulder muscle; keep the spine and neck clear.", "Upper-body diagram highlighting the soft shoulder area and a safe hand path"],
    quiz: [["Which area is appropriate for gentle circles?", ["The soft shoulder muscle", "The front of the neck", "The collarbone"], 0, "Stay with soft muscle and avoid the neck and bony areas."], ["What is a useful sign of comfort?", ["Shoulders gradually soften", "Breath becomes held", "The person braces"], 0, "Softer shoulders and easy breathing are helpful comfort clues."]]
  },
  {
    id: 7, title: "Upper Back", short: "Map a safe path across the upper back with broad hands.", time: 7, level: "Beginner", icon: "▱",
    learn: "This lesson uses a simple upper-back sequence that stays beside the spine and uses wide, predictable contact. The back is broad, so less precision and less force are needed.",
    before: ["Use a comfortable seated or supported lying position.", "Explain that you will stay on the muscle beside the spine.", "Keep the spine, shoulder blades, and kidneys free from focused pressure."],
    position: [["Their position", "Seated with forearms supported or lying on the side can keep the back comfortable. Do not force a face-down position."], ["Your position", "Stand to one side and keep your feet moving. Use body weight lightly through the palm."]],
    steps: [["Begin beside the spine.", "Place both hands on broad muscle beside the spine, not directly on the bony line."], ["Glide toward the shoulders.", "Move upward and outward in a slow path, following the shape of the upper back."], ["Circle the broad muscle.", "Use small palm circles beside the shoulder blade, never digging under its edge."], ["Return with less pressure.", "Glide back down with a lighter touch and finish away from the spine."]],
    pressure: ["Keep contact broad and shallow. The back does not need heavy force.", "Let the person request any small increase, then check again.", "Never force into the spine, ribs, shoulder blade edge, or a painful spot."],
    feel: "A broad warming sweep and gentle movement across soft muscle. No sharp, electric, or deep ache should appear.",
    mistakes: ["Pressing directly on the spine.", "Trying to hook under the shoulder blade.", "Leaning in while your back or wrists strain."],
    safety: "Avoid areas of injury, unexplained pain, rash, recent surgery, and direct pressure over the spine or ribs. Seek professional advice when symptoms are concerning.",
    practice: ["beside the spine", "broad palms", "outward path", "light return"], visual: ["back", "The safe path stays beside the spine and spreads toward the shoulders.", "Back diagram with shaded safe muscle zones beside the spine"],
    quiz: [["Where should your hands travel?", ["Directly along the spine", "Beside the spine on broad muscle", "Under the shoulder blade edge"], 1, "Stay on broad muscle beside the bony spine."], ["How should you return?", ["With more force", "With a lighter touch", "By pulling the shoulder"], 1, "A lighter return keeps the sequence comfortable."]]
  },
  {
    id: 8, title: "Neck", short: "Offer gentle support around the neck without manipulating it.", time: 6, level: "Safety first", icon: "○",
    learn: "The neck needs restraint, not intensity. This lesson teaches safe contact around the base of the skull and upper shoulders—without twisting, cracking, pulling, or forcing movement.",
    before: ["Ask about neck pain, headaches, dizziness, injuries, and medical advice.", "Use a supported seated or lying position.", "Agree that the person can say stop at any moment."],
    position: [["Their position", "Keep the head in a neutral, supported position. Never let the head hang or force it to turn."], ["Your position", "Work beside the person. Keep your touch outside the front and sides of the throat."]],
    steps: [["Warm the shoulders first.", "Use light gliding over the upper shoulders so the neck does not carry the whole session."], ["Rest at the base of the skull.", "Use soft finger pads or the palm for still, supportive contact below the skull—no digging."], ["Make tiny circles beside the neck.", "Stay on soft muscle at the back and sides. Keep pressure light and the head still."], ["Release without pulling.", "Lift your hands slowly and ask how the person feels before they move."]],
    pressure: ["Use only light, supportive pressure around the back of the neck.", "Do not add force because a spot feels tight. Comfort and stillness come first.", "Never twist, crack, pull, traction, or force the neck. Stop for dizziness, headache changes, pain, tingling, numbness, weakness, or nausea."],
    feel: "Calm support and warmth around the base of the skull and upper shoulders. The head remains neutral and easy.",
    mistakes: ["Pressing the front or side of the throat.", "Turning or stretching the head for the person.", "Treating a painful spot as something to push through."],
    safety: "Do not massage the neck if there is a recent injury, severe or unexplained pain, neurological symptoms, dizziness, or another concern without professional guidance. Never perform forceful neck manipulation.",
    practice: ["head stays still", "light touch only", "back of neck", "stop if unsure"], visual: ["neck", "Support the base of the skull gently; the head stays neutral.", "Neck diagram highlighting gentle contact at the base of the skull"],
    quiz: [["What must you never do in this lesson?", ["Ask how it feels", "Use light support", "Forcefully twist or crack the neck"], 2, "Never force, twist, crack, or pull the neck."], ["Where should pressure stay?", ["The front of the throat", "Soft muscle at the back of the neck", "Directly on the spine"], 1, "Use very light contact on soft muscle at the back, with the head still."]]
  },
  {
    id: 9, title: "Head & Scalp", short: "Create a soothing scalp rhythm with relaxed fingertips.", time: 5, level: "Beginner", icon: "✺",
    learn: "Scalp massage uses light contact and small movements. Use finger pads rather than nails while protecting hair, skin, and the temples.",
    before: ["Ask about scalp sensitivity, hair styling, skin irritation, or headache symptoms.", "Remove rings and keep nails short.", "Sit where your arms can stay relaxed."],
    position: [["Their position", "A supported seat works well. Let the head stay upright and natural rather than pulling it into a new angle."], ["Your position", "Stand or sit close by with elbows loose. Move around the head instead of stretching across it."]],
    steps: [["Settle with still contact.", "Rest fingertips lightly on the scalp for one breath so the person knows where you are."], ["Make small circles.", "Use finger pads to move the scalp gently. Keep circles small and avoid scratching with nails."], ["Change zones.", "Move from crown to sides and back, checking pressure and hair comfort as you go."], ["Finish at the temples lightly.", "If wanted, make tiny circles at the temples with almost no pressure, then lift away."]],
    pressure: ["Light fingertip contact is enough to move the scalp.", "A little more may be comfortable on a resilient scalp, but never pull hair.", "Stop for headache changes, scalp pain, dizziness, nausea, or visual symptoms."],
    feel: "A gentle, rhythmic movement that feels warm and unhurried. Hair should not tug at the roots.",
    mistakes: ["Using fingernails.", "Pulling hair while moving the scalp.", "Pressing firmly on the temples or a tender area."],
    safety: "Avoid broken or inflamed skin, recent head injury, and active scalp irritation. Stop for new or unusual headache symptoms and seek appropriate care.",
    practice: ["finger pads", "small circles", "no hair tug", "light temples"], visual: ["scalp", "Finger pads move the scalp; nails stay out of the way.", "Head diagram showing fingertips making small circles across the scalp"],
    quiz: [["What should touch the scalp?", ["Fingernails", "Finger pads", "A clenched fist"], 1, "Finger pads are softer and avoid scratching."], ["What should happen to the hair?", ["It should be pulled slightly", "It should stay comfortable", "It should be twisted"], 1, "The scalp can move gently without tugging the hair."]]
  },
  {
    id: 10, title: "Arms & Hands", short: "Trace a calm path from forearm to fingertips.", time: 7, level: "Beginner", icon: "↗",
    learn: "Arms and hands respond well to broad, gentle strokes. Support the limb, glide along the forearm, and give the hand and fingers space to relax.",
    before: ["Ask about wrist pain, numbness, recent strain, or skin sensitivity.", "Support the elbow and wrist with a pillow or your hand.", "Use a small amount of lotion only if it is comfortable."],
    position: [["Their position", "Let the arm rest on a cushion with the palm supported. The shoulder should not hold the arm up."], ["Your position", "Sit beside the arm and keep both hands close. Avoid pulling the arm away from its natural range."]],
    steps: [["Warm the forearm.", "Glide from wrist toward elbow with a broad palm, then return lightly."], ["Circle soft forearm muscle.", "Use small circles on the top and sides of the forearm, away from tender bones and the wrist crease."], ["Cup the hand.", "Hold the hand with both palms and make slow circles across the palm."], ["Visit each finger gently.", "Stroke from base toward fingertip with almost no squeeze, then release without pulling."]],
    pressure: ["Use light pressure around the wrist, hand, and fingers.", "Soft forearm muscle may accept a little more broad pressure if the person agrees.", "Stop for tingling, numbness, sharp wrist pain, or any sensation that travels into the hand."],
    feel: "Supported, warm, and easy. Fingers should stay loose; the wrist should never be bent or pulled.",
    mistakes: ["Pulling the fingers to stretch them.", "Pressing hard into the wrist crease.", "Letting the elbow or shoulder hang unsupported."],
    safety: "Avoid inflamed joints, recent fractures or strains, swelling, bruises, and areas with altered sensation. Do not force a range of motion.",
    practice: ["support the arm", "broad forearm", "cup the hand", "no finger pulling"], visual: ["arm", "Support first, glide the forearm, then give the hand gentle space.", "Arm and hand diagram with arrows from the forearm toward the fingers"],
    quiz: [["How should fingers be handled?", ["Pulled firmly", "Stroked gently without pulling", "Twisted until loose"], 1, "Use almost no squeeze and never force the fingers."], ["What should support the limb?", ["The person’s shoulder alone", "A cushion or your hand", "A hanging position"], 1, "Support keeps the shoulder and wrist comfortable."]]
  },
  {
    id: 11, title: "Legs", short: "Use long, calm strokes on the legs while respecting joints.", time: 7, level: "Beginner", icon: "↕",
    learn: "This lesson focuses on simple relaxation for the thigh and calf. Support the leg, stay on soft muscle, and avoid pressing into joints or sensitive areas.",
    before: ["Ask about circulation concerns, recent injury, swelling, varicose veins, and pain.", "Use a supported seated or lying position.", "Keep the person warm and preserve their privacy."],
    position: [["Their position", "Support the knee and ankle with pillows. The leg should be able to rest rather than hold itself rigidly."], ["Your position", "Work from the side with a stable stance. Move around the leg instead of leaning across it."]],
    steps: [["Start above the knee.", "Glide over soft thigh muscle with broad hands, staying away from the kneecap and inner groin."], ["Follow the leg’s length.", "Use slow, comfortable strokes along thigh or calf, then return lightly."], ["Circle soft muscle.", "Add small circles to broad muscle areas, never directly on the knee, shin, ankle, or a swollen spot."], ["Finish with support.", "Place a calm hand on the leg, release slowly, and help the person move only when ready."]],
    pressure: ["Keep pressure light, especially around the knee, shin, ankle, and calf.", "Soft thigh muscle may accept moderate pressure only when comfortable and agreed.", "Stop for pain, swelling, warmth, redness, numbness, or one-sided unusual symptoms."],
    feel: "A steady warming sensation in soft muscle, without pulling at the knee or ankle.",
    mistakes: ["Pressing directly on the shin or kneecap.", "Working through swelling or unexplained calf pain.", "Moving the leg farther than it wants to go."],
    safety: "Do not massage a swollen, hot, red, acutely painful, or recently injured leg. Seek medical advice for concerning symptoms, especially new one-sided calf symptoms or difficulty breathing.",
    practice: ["support joints", "soft muscle only", "long strokes", "no forced movement"], visual: ["leg", "Keep joints supported and let long strokes travel through soft muscle.", "Leg diagram showing safe soft-tissue paths around the knee and calf"],
    quiz: [["What should be avoided?", ["Broad thigh muscle", "A supported knee", "A hot, swollen, painful area"], 2, "Do not massage an acutely swollen, hot, red, or painful area."], ["What does the return stroke do?", ["Adds more force", "Stays lighter", "Pulls the ankle"], 1, "Keep the return light and comfortable."]]
  },
  {
    id: 12, title: "Feet", short: "Offer simple, gentle foot care with constant communication.", time: 6, level: "Beginner", icon: "⌂",
    learn: "Feet can be sensitive, so every movement stays small and easy to adjust. Warm the sole, use broad circles, and respect ticklishness or pain.",
    before: ["Ask permission and check for cuts, blisters, rash, swelling, or reduced sensation.", "Wash hands and support the ankle with a folded towel.", "Ask whether socks should stay on."],
    position: [["Their position", "Let the foot rest on a pillow with the ankle neutral. The person should not hold the leg up."], ["Your position", "Sit at the end or side with a straight, supported back. Keep the foot close to you."]],
    steps: [["Warm the foot.", "Cup the foot between your hands and make slow strokes from heel toward toes."], ["Circle the sole gently.", "Use the broad palm or thumb pad for small circles. Never dig into a tender spot."], ["Move across heel and arch.", "Stay gentle and change zones often. Avoid forceful work on ankle bones."], ["Finish the toes softly.", "Stroke each toe once or twice without twisting or pulling, then support the ankle as you release."]],
    pressure: ["Begin very lightly because feet vary in sensitivity.", "A little more may be comfortable on the broad sole, not the toes or ankle bones.", "Stop for sharpness, burning, numbness, tingling, or a skin change."],
    feel: "Warm, supported, and easy to tolerate. Ticklishness or discomfort is a reason to change pressure or stop.",
    mistakes: ["Digging into the arch.", "Twisting or pulling toes.", "Ignoring reduced sensation or a skin change."],
    safety: "Avoid open skin, blisters, inflamed skin, recent injury, and areas with reduced sensation unless a clinician has advised it is safe.",
    practice: ["support the ankle", "broad sole", "small circles", "ask about sensitivity"], visual: ["foot", "Cup the foot, keep circles broad, and let the toes stay free.", "Foot diagram showing broad hand contact under the sole and gentle toe strokes"],
    quiz: [["What is a good starting pressure for feet?", ["Very light", "As deep as possible", "A hard pinch"], 0, "Feet can be sensitive, so begin very lightly."], ["What should you do with the toes?", ["Twist them", "Pull them firmly", "Stroke without pulling"], 2, "Keep toe contact gentle and never force a joint."]]
  },
  {
    id: 13, title: "Complete Beginner Routine", short: "Put the course together in a calm, repeatable 10-minute flow.", time: 10, level: "Beginner", icon: "↺",
    learn: "You now have enough building blocks for a short routine. Choose a comfortable area, sequence your skills, and finish with a clear check-in.",
    before: ["Choose one area and set a 10-minute boundary.", "Ask for permission, preferences, and a stop signal.", "Keep it simple: gliding, one focused technique, then gliding again."],
    position: [["Their position", "Use the most supported position for the chosen area. Comfort is the structure of the whole routine."], ["Your position", "Keep a stable stance, relaxed hands, and an easy route around the person. You can always pause."]],
    steps: [["Arrive and warm up.", "Spend about two minutes with still contact and gentle gliding. Notice breathing and comfort."], ["Choose one focus.", "Spend five minutes on one skill—circles, kneading, or a body-area sequence—without chasing every tight spot."], ["Keep communicating.", "Check pressure and comfort halfway through. If the answer is unclear, return to lighter contact."], ["Close slowly.", "Use two minutes of lighter gliding, then still contact. Say the routine is finished before lifting away."]],
    pressure: ["A complete routine should feel easy to receive from beginning to end.", "Use moderate pressure only on broad soft muscle and only when requested.", "Any concerning symptom means stop. A shorter comfortable routine is always successful."],
    feel: "The person feels listened to, supported, and no worse than when they began. Soreness is not the goal.",
    mistakes: ["Trying to use every technique in one session.", "Skipping the opening or closing check-in.", "Continuing because the timer has not ended when comfort changes."],
    safety: "Keep this educational routine separate from medical treatment. Avoid forceful manipulation of the spine, neck, joints, or injured areas. Refer health concerns to an appropriate professional.",
    practice: ["2 min warm-up", "5 min focus", "1 check-in", "2 min close"], visual: ["routine", "A clear rhythm: arrive → focus → check in → close.", "Four-part routine diagram showing warm-up, focus, check-in, and closing"],
    quiz: [["What makes a good beginner routine?", ["Using every technique", "A short, comfortable sequence", "Working through pain"], 1, "Keep the routine short, clear, and comfortable."], ["When should you stop?", ["Only when the timer ends", "When comfort or safety changes", "Never"], 1, "Safety and comfort take priority over the timer."]]
  }
];

const referenceItems = [
  ["Gentle gliding", "Long, smooth strokes for beginning, connecting, and finishing.", "→", 3],
  ["Small circles", "A patient circular movement for broad, comfortable muscle.", "◌", 4],
  ["Beginner kneading", "A shallow lift-and-release that never pinches or digs.", "≈", 5],
  ["Still contact", "A quiet hand that helps someone settle before movement.", "○", 1],
  ["Palm support", "Broad contact that keeps pressure spread and easy to adjust.", "☼", 2],
  ["Light finger strokes", "A soft, unhurried touch for hands, feet, and scalp.", "✺", 9]
];

const bodyAreas = [
  ["Shoulders", "Broad upper-shoulder work with the neck kept clear.", 6],
  ["Upper back", "A safe path beside the spine and toward the shoulders.", 7],
  ["Neck", "Gentle support only—no twisting, cracking, or pulling.", 8],
  ["Head & scalp", "Light finger-pad circles without hair tugging.", 9],
  ["Arms & hands", "Support the limb, then trace a calm path to the fingers.", 10],
  ["Legs", "Long strokes on soft muscle with joints supported.", 11],
  ["Feet", "Small, easy-to-adjust movements and constant check-ins.", 12],
  ["A full routine", "A simple ten-minute sequence using the building blocks.", 13]
];

let progress = loadProgress();
let practiceTimer = null;

function loadProgress() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!value || !Array.isArray(value.completed)) return { completed: [], current: 1 };
    return { completed: value.completed.filter(Number.isInteger), current: value.current || 1 };
  } catch (error) {
    return { completed: [], current: 1 };
  }
}
function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
function isComplete(id) { return progress.completed.includes(id); }
function percentComplete() { return Math.round(progress.completed.length / lessons.length * 100); }
function currentLesson() { return lessons.find(function (item) { return item.id === progress.current; }) || lessons[0]; }
function setCurrent(id) { progress.current = id; saveProgress(); }
function markLesson(id) { if (!isComplete(id)) progress.completed.push(id); setCurrent(Math.min(id + 1, lessons.length)); }
function route() { return window.location.hash.replace(/^#\/?/, "") || "home"; }
function esc(value) { return String(value).replace(/[&<>'"]/g, function (char) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]; }); }
function link(path, label, className) { return "<a class=\"button " + (className || "") + "\" href=\"#/" + path + "\">" + label + "</a>"; }

function progressBar(light) {
  return "<div class=\"mini-progress " + (light ? "light-progress" : "") + "\" aria-label=\"" + percentComplete() + "% complete\"><span style=\"width:" + percentComplete() + "%\"></span></div>";
}
function statusMarkup(lesson) {
  if (isComplete(lesson.id)) return "<span class=\"status completed\">Completed</span>";
  if (progress.current === lesson.id) return "<span class=\"status in-progress\">In progress</span>";
  return "<span class=\"status\">Not started</span>";
}
function lessonButton(lesson) {
  const label = isComplete(lesson.id) ? "Review lesson" : progress.current === lesson.id ? "Continue" : "Start lesson";
  return "<a class=\"button small " + (isComplete(lesson.id) ? "subtle" : "primary") + "\" href=\"#/lesson/" + lesson.id + "\">" + label + " <span aria-hidden=\"true\">→</span></a>";
}

function visualSvg(type) {
  const common = "fill=\"none\" stroke=\"#29513f\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"";
  const svg = {
    welcome: "<circle cx=\"106\" cy=\"83\" r=\"23\" fill=\"#bd8169\"/><path d=\"M83 77c9-29 46-30 53-4\" fill=\"#2c4f43\"/><path d=\"M69 128c27-24 72-22 89 1\" " + common + "/><path d=\"M36 117c33-26 58-11 78 6\" stroke=\"#bd8169\" stroke-width=\"22\" stroke-linecap=\"round\"/><path d=\"M63 126c23-8 38-6 61 5\" " + common + "/>",
    hands: "<path d=\"M47 112c8-33 19-56 30-56 7 0 8 9 4 24l-4 15 12-39c3-9 11-9 13 0l-4 38 9-34c3-10 11-8 12 1l-6 38 9-25c3-8 10-5 10 3l-4 27c-5 22-24 33-48 30-16-2-25-10-33-22z\" fill=\"#bd8169\"/><path d=\"M135 133c22-7 40-18 46-30\" " + common + "/>",
    glide: "<path d=\"M52 120c13-33 38-55 81-61\" fill=\"none\" stroke=\"#bd8169\" stroke-width=\"32\" stroke-linecap=\"round\"/><path d=\"M67 88l22 27 21-22\" " + common + "/><path d=\"M49 132h119\" stroke=\"#29513f\" stroke-width=\"3\" stroke-dasharray=\"7 8\"/>",
    circles: "<path d=\"M44 117c22-36 66-41 112-17\" fill=\"none\" stroke=\"#bd8169\" stroke-width=\"33\" stroke-linecap=\"round\"/><path d=\"M107 71c25 0 41 20 35 39-6 19-34 24-51 10-16-12-14-35 3-45 10-6 22-7 32-3\" " + common + "/><path d=\"M124 68l12 1-5 11\" " + common + "/>",
    knead: "<path d=\"M57 112c11-33 35-45 76-38 24 4 38 20 33 35-5 17-31 20-54 16-28-4-48 8-55-13z\" fill=\"#bd8169\"/><path d=\"M85 94c7 20 19 27 34 27\" " + common + "/><path d=\"M79 81c6 9 9 18 8 27\" " + common + "/><path d=\"M126 82c-4 12-3 23 4 32\" " + common + "/>",
    shoulders: "<path d=\"M78 49h57l24 25-13 69H56L44 74z\" fill=\"#f4f0e9\"/><path d=\"M69 76c-18 1-31 10-37 24M143 76c18 1 31 10 37 24\" stroke=\"#bd8169\" stroke-width=\"22\" stroke-linecap=\"round\"/><path d=\"M76 65c10 16 48 16 60 0\" " + common + "/><circle cx=\"63\" cy=\"93\" r=\"11\" fill=\"#f2c76a\"/><circle cx=\"148\" cy=\"93\" r=\"11\" fill=\"#f2c76a\"/>",
    back: "<path d=\"M73 42c-15 19-19 69-13 104h91c6-35 2-85-13-104\" fill=\"#f4f0e9\"/><path d=\"M105 49v93\" stroke=\"#bd8169\" stroke-width=\"5\" stroke-dasharray=\"4 7\"/><path d=\"M82 63c-22 13-23 40-15 58M128 63c22 13 23 40 15 58\" stroke=\"#9bbda7\" stroke-width=\"19\" stroke-linecap=\"round\"/><path d=\"M53 92l26 0M157 92l-26 0\" " + common + "/>",
    neck: "<circle cx=\"106\" cy=\"56\" r=\"22\" fill=\"#bd8169\"/><path d=\"M80 76h52l22 65H58z\" fill=\"#f4f0e9\"/><path d=\"M80 78c8 14 44 14 52 0\" fill=\"#bd8169\"/><path d=\"M85 83c7 18 6 34 1 48M127 83c-7 18-6 34-1 48\" " + common + "/><path d=\"M90 84c7-6 25-6 32 0\" stroke=\"#f2c76a\" stroke-width=\"10\" stroke-linecap=\"round\"/>",
    scalp: "<circle cx=\"106\" cy=\"98\" r=\"43\" fill=\"#bd8169\"/><path d=\"M64 90c-3-34 23-54 49-45 25-4 39 17 35 45-13-12-19-27-22-41-11 12-28 21-56 25z\" fill=\"#2c4f43\"/><path d=\"M77 91c-11-24 8-43 24-45M103 73c2-18 16-28 30-24M130 81c7-16 13-18 19-18\" " + common + "/><circle cx=\"87\" cy=\"105\" r=\"6\" fill=\"#f2c76a\"/><circle cx=\"115\" cy=\"83\" r=\"6\" fill=\"#f2c76a\"/><circle cx=\"135\" cy=\"107\" r=\"6\" fill=\"#f2c76a\"/>",
    arm: "<path d=\"M41 86c20-2 45-3 75 7l44 18\" stroke=\"#bd8169\" stroke-width=\"30\" stroke-linecap=\"round\"/><path d=\"M45 87l-19-11M47 91L24 88M47 96l-20 8\" stroke=\"#bd8169\" stroke-width=\"8\" stroke-linecap=\"round\"/><path d=\"M71 72l8 26 18-13M103 79l2 24 18-10\" " + common + "/>",
    leg: "<path d=\"M76 44c-3 26-1 54 15 74l4 30\" stroke=\"#bd8169\" stroke-width=\"35\" stroke-linecap=\"round\"/><path d=\"M136 43c-3 26-4 49-17 75l-7 30\" stroke=\"#bd8169\" stroke-width=\"35\" stroke-linecap=\"round\"/><path d=\"M75 74h28M112 74h28\" stroke=\"#f2c76a\" stroke-width=\"9\" stroke-linecap=\"round\"/><path d=\"M70 122c15 10 26 8 38-1M111 121c13 9 23 9 35-1\" " + common + "/>",
    foot: "<path d=\"M103 43c5 30 13 49 30 63 12 9 18 20 12 29-7 11-34 5-46-8-17-19-31-44-36-66\" fill=\"#bd8169\"/><path d=\"M82 82c17 3 31 12 40 26\" " + common + "/><path d=\"M116 108l21 2M113 115l24 8M110 121l18 14\" " + common + "/>",
    routine: "<circle cx=\"106\" cy=\"95\" r=\"49\" fill=\"#f4f0e9\"/><path d=\"M106 46v19M106 125v19M57 95H38M155 95h19\" " + common + "/><path d=\"M106 66c-22 0-36 12-42 28M106 124c22 0 36-12 42-28\" " + common + "/><path d=\"M59 95l8-8M153 95l-8 8\" " + common + "/><circle cx=\"106\" cy=\"95\" r=\"9\" fill=\"#f2c76a\"/>"
  };
  return "<svg class=\"visual-svg\" viewBox=\"0 0 212 170\" preserveAspectRatio=\"xMidYMid meet\" role=\"img\" aria-label=\"" + esc(type) + " movement illustration\" xmlns=\"http://www.w3.org/2000/svg\">" + (svg[type] || svg.welcome) + "</svg>";
}

function shell(content, active) {
  const nav = [["home", "Home"], ["course", "Course"], ["techniques", "Techniques"], ["body-areas", "Body areas"], ["safety", "Safety"], ["progress", "Progress"]];
  const links = nav.map(function (item) { return "<a class=\"nav-link " + (active === item[0] ? "active" : "") + "\" href=\"#/" + item[0] + "\">" + item[1] + "</a>"; }).join("");
  return "<header class=\"shell-header\"><a class=\"brand\" href=\"#/home\" aria-label=\"Kindred Touch home\"><span class=\"brand-mark\"><span>k</span></span><span class=\"brand-text\">kindred <em>touch</em></span></a><button class=\"menu-toggle\" type=\"button\" aria-label=\"Open navigation\" aria-expanded=\"false\">☰</button><nav class=\"main-nav\" aria-label=\"Main navigation\">" + links + "</nav></header><main id=\"main-content\" class=\"page-wrap\">" + content + "</main><footer class=\"footer\"><div class=\"footer-inner\"><strong>kindred touch</strong><span>Learn slowly. Listen closely. Keep it comfortable.</span></div></footer>";
}

function lessonVisual(lesson) {
  return "<div class=\"lesson-visual\"><div class=\"visual-scene\">" + visualSvg(lesson.visual[0]) + "</div><p class=\"visual-caption\">" + esc(lesson.visual[1]) + "</p><span class=\"sr-only\">" + esc(lesson.visual[2]) + "</span></div>";
}
function aside(lesson) {
  return "<aside class=\"lesson-aside\"><div class=\"aside-card\"><p class=\"eyebrow\">Course progress</p><h3>" + progress.completed.length + " of " + lessons.length + " complete</h3><div class=\"progress-row\"><span>" + percentComplete() + "% learned</span><span>" + (isComplete(lesson.id) ? "Reviewed" : "In progress") + "</span></div>" + progressBar(true) + "<nav aria-label=\"Lesson list\">" + lessons.map(function (item) { return "<a class=\"lesson-link " + (isComplete(item.id) ? "done" : "") + "\" href=\"#/lesson/" + item.id + "\"><span class=\"small-num\">" + String(item.id).padStart(2, "0") + "</span><span>" + esc(item.title) + "</span>" + (isComplete(item.id) ? "<span aria-label=\"completed\">✓</span>" : "") + "</a>"; }).join("") + "</nav></div></aside>";
}

function home() {
  const started = progress.completed.length > 0 || progress.current > 1;
  const next = currentLesson();
  const continuePanel = started ? "<section class=\"continue-panel\"><div><p class=\"eyebrow\">Your next small step</p><h2>Continue with lesson " + String(next.id).padStart(2, "0") + " · " + esc(next.title) + "</h2><p>" + esc(next.short) + "</p>" + progressBar() + "</div><a class=\"button\" href=\"#/lesson/" + next.id + "\">" + (isComplete(next.id) ? "Review lesson" : "Continue learning") + " <span aria-hidden=\"true\">→</span></a></section>" : "";
  return shell("<div class=\"page\"><section class=\"hero\"><div class=\"hero-copy\"><p class=\"eyebrow\">A calm course in caring touch</p><h1>Learn massage with more confidence and less guesswork.</h1><p class=\"lede\">Kindred Touch is a beginner-friendly learning path for thoughtful, comfortable massage. Learn one simple skill at a time, practice safely, and build a routine that listens.</p><div class=\"button-row\"><a class=\"button primary\" href=\"#/course\">Start learning <span aria-hidden=\"true\">→</span></a><a class=\"button\" href=\"#/safety\">Read the safety guide</a></div><p class=\"hero-note\"><span>✓</span> Educational guidance—not medical treatment.</p></div><div class=\"hero-art\"><div class=\"art-card art-main\"><svg class='hero-illustration' viewBox='0 0 440 360' preserveAspectRatio='xMidYMid meet' role='img' aria-label='Two people sharing supportive massage touch' xmlns='http://www.w3.org/2000/svg'><ellipse cx='266' cy='313' rx='147' ry='24' fill='#6f9e82' opacity='.25'/><path d='M213 160c16-27 46-39 78-31 34 9 51 39 56 77l13 91H185l10-88c2-21 5-35 18-49z' fill='#f4f0e9'/><circle cx='286' cy='92' r='39' fill='#bd8169'/><path d='M247 92c-3-34 20-58 50-54 29 3 43 26 35 59-12-12-20-27-23-46-12 16-31 27-62 32z' fill='#2c4f43'/><path d='M224 180c-35 1-65 15-91 40' fill='none' stroke='#bd8169' stroke-width='25' stroke-linecap='round'/><circle cx='130' cy='222' r='13' fill='#bd8169'/><path d='M118 221c-16-4-29-2-42 6' fill='none' stroke='#bd8169' stroke-width='9' stroke-linecap='round'/><path d='M159 191c-3-31-22-52-48-57-24-5-47 8-55 32-9 26 5 55 30 65 28 11 59-5 73-40z' fill='#d98a6e'/><circle cx='101' cy='114' r='31' fill='#bd8169'/><path d='M70 117c-2-28 15-48 39-49 25-1 40 19 34 47-11-10-18-21-21-36-12 15-27 25-52 28z' fill='#3d6855'/><path d='M80 151c23 15 50 14 68-2' fill='none' stroke='#f2c76a' stroke-width='8' stroke-linecap='round'/><path d='M244 219c-19 39-23 64-14 91' fill='none' stroke='#bd8169' stroke-width='22' stroke-linecap='round'/><path d='M295 260c29 20 42 36 48 54' fill='none' stroke='#bd8169' stroke-width='22' stroke-linecap='round'/><path d='M164 180c27-14 56-19 83-18' fill='none' stroke='#bd8169' stroke-width='23' stroke-linecap='round'/><path d='M263 147c16 10 26 23 30 39' fill='none' stroke='#f2c76a' stroke-width='6' stroke-linecap='round' stroke-dasharray='2 12'/></svg><div class=\"art-label\"><strong>Small steps, steady hands</strong><small>Designed for first-time learners</small></div></div><div class=\"art-card art-float one\">✦</div><div class=\"art-card art-float two\">☼</div></div></section><div class=\"stat-strip\"><div class=\"stat\"><strong>13</strong><span>guided lessons</span></div><div class=\"stat\"><strong>~75 min</strong><span>learning path</span></div><div class=\"stat\"><strong>Beginner</strong><span>friendly pace</span></div><div class=\"stat\"><strong>Local</strong><span>progress saved privately</span></div></div>" + continuePanel + "<section><div class=\"section-heading\"><div><p class=\"eyebrow\">How it works</p><h2>Learn by doing, not by guessing.</h2></div><p>Each lesson gives you a clear movement, a safe setup, a short practice, and a quick check before you move on.</p></div><div class=\"feature-grid\"><article class=\"feature-card\"><div class=\"feature-icon\">01</div><h3>One skill at a time</h3><p>Short lessons turn a big topic into a sequence you can actually remember and repeat.</p></article><article class=\"feature-card\"><div class=\"feature-icon\">⌁</div><h3>See the movement</h3><p>Simple reusable diagrams show where hands go, what stays still, and how pressure should travel.</p></article><article class=\"feature-card\"><div class=\"feature-icon\">✓</div><h3>Check your confidence</h3><p>Practice for a minute, answer two questions, and mark the lesson complete when it feels clear.</p></article></div></section><section class=\"safety-callout\"><div class=\"callout-icon\">!</div><div><h3>A gentle reminder before you begin</h3><p>Stop for sharp pain, numbness, tingling, dizziness, faintness, unusual weakness, difficulty breathing, or any sudden concerning symptom. Massage should never be forceful.</p></div></section></div>", "home");
}

function course() {
  return shell("<div class=\"page\"><div class=\"course-top\"><div><p class=\"eyebrow\">The guided path</p><h1>Course map</h1><p class=\"lede\">Start at the top and build a small, safe toolkit. Every lesson ends with practice and a clear next step.</p></div><div class=\"course-stat\"><strong>" + progress.completed.length + " / " + lessons.length + "</strong><span>lessons completed</span>" + progressBar(true) + "</div></div><div class=\"lesson-list\">" + lessons.map(function (lesson) { return "<article class=\"lesson-card " + (isComplete(lesson.id) ? "complete" : "") + "\"><div class=\"lesson-number\">" + String(lesson.id).padStart(2, "0") + "</div><div><h3>" + esc(lesson.title) + "</h3><p>" + esc(lesson.short) + "</p><div class=\"lesson-meta\"><span>" + esc(lesson.level) + "</span><span>" + lesson.time + " min</span></div></div><div>" + statusMarkup(lesson) + lessonButton(lesson) + "</div></article>"; }).join("") + "</div><div class=\"button-row\" style=\"margin-top:26px\"><a class=\"button subtle\" href=\"#/progress\">View your progress</a><a class=\"button\" href=\"#/safety\">Review safety</a></div></div>", "course");
}

function lessonPage(id) {
  const lesson = lessons.find(function (item) { return item.id === id; }) || lessons[0];
  if (!isComplete(lesson.id)) setCurrent(lesson.id);
  const prev = lessons.find(function (item) { return item.id === lesson.id - 1; });
  const next = lessons.find(function (item) { return item.id === lesson.id + 1; });
  const positions = lesson.position.map(function (item, index) { return "<div class=\"position-item\"><strong>" + (index === 0 ? "A" : "B") + "</strong><div><strong>" + esc(item[0]) + "</strong><p>" + esc(item[1]) + "</p></div></div>"; }).join("");
  const steps = lesson.steps.map(function (step) { return "<div class=\"step\"><div><h3>" + esc(step[0]) + "</h3><p>" + esc(step[1]) + "</p></div></div>"; }).join("");
  const quiz = lesson.quiz.map(function (question, qIndex) { return "<fieldset class=\"quiz-question\"><legend>" + (qIndex + 1) + ". " + esc(question[0]) + "</legend><div class=\"quiz-options\">" + question[1].map(function (option, optionIndex) { return "<label class=\"quiz-option\"><input type=\"radio\" name=\"question-" + qIndex + "\" value=\"" + optionIndex + "\" />" + esc(option) + "</label>"; }).join("") + "</div><div class=\"quiz-feedback\" data-feedback=\"" + qIndex + "\">" + esc(question[3]) + "</div></fieldset>"; }).join("");
  const previous = prev ? "<a href=\"#/lesson/" + prev.id + "\"><small>← Previous lesson</small><strong>" + String(prev.id).padStart(2, "0") + " · " + esc(prev.title) + "</strong></a>" : "<span></span>";
  const following = next ? "<a class=\"next\" href=\"#/lesson/" + next.id + "\"><small>Next lesson →</small><strong>" + String(next.id).padStart(2, "0") + " · " + esc(next.title) + "</strong></a>" : "<a class=\"next\" href=\"#/progress\"><small>Course complete →</small><strong>See your progress</strong></a>";
  return shell("<div class=\"page\"><div class=\"lesson-hero\"><div><div class=\"lesson-kicker\">Lesson " + String(lesson.id).padStart(2, "0") + "</div><h1>" + esc(lesson.title) + "</h1><p class=\"lede\">" + esc(lesson.short) + "</p><div class=\"lesson-badges\"><span class=\"badge\">" + esc(lesson.level) + "</span><span class=\"badge\">◷ " + lesson.time + " minutes</span>" + (lesson.id === 8 ? "<span class=\"badge safety\">Safety first</span>" : "") + "</div></div>" + lessonVisual(lesson) + "</div><div class=\"lesson-layout\"><article class=\"lesson-main\"><section class=\"lesson-section\"><h2>What you will learn</h2><p class=\"section-intro\">" + esc(lesson.learn) + "</p><div class=\"two-column\"><div class=\"info-card\"><h3>Before you start</h3><ul>" + lesson.before.map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("") + "</ul></div><div class=\"info-card\"><h3>Make it comfortable</h3><p>Keep checking the person’s breathing, body language, and words. A pause is always useful—not a failure.</p></div></div></section><section class=\"lesson-section\"><h2>Position</h2><div class=\"position-grid\"><div class=\"position-list\">" + positions + "</div><div class=\"info-card\"><h3>Find your neutral</h3><p>Can you breathe freely, keep your shoulders down, and move without reaching? If not, adjust the setup before your hands begin.</p></div></div></section><section class=\"lesson-section\"><h2>Step-by-step</h2><div class=\"step-list\">" + steps + "</div></section><section class=\"lesson-section\"><h2>Pressure guide</h2><div class=\"pressure-grid\"><div class=\"pressure gentle\"><h3>🟢 Gentle</h3><p>" + esc(lesson.pressure[0]) + "</p></div><div class=\"pressure moderate\"><h3>🟡 Moderate</h3><p>" + esc(lesson.pressure[1]) + "</p></div><div class=\"pressure stop\"><h3>🔴 Too much</h3><p>" + esc(lesson.pressure[2]) + "</p></div></div></section><section class=\"lesson-section\"><h2>Notice the difference</h2><div class=\"feel-grid\"><div class=\"feel-card good\"><h3>What it should feel like</h3><p>" + esc(lesson.feel) + "</p></div><div class=\"feel-card mistake\"><h3>Common beginner mistakes</h3><ul class=\"mistake-list\">" + lesson.mistakes.map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("") + "</ul></div></div></section><section class=\"lesson-section\"><div class=\"safety-callout\"><div class=\"callout-icon\">!</div><div><h3>Safety for this lesson</h3><p>" + esc(lesson.safety) + "</p></div></div></section><section class=\"lesson-section\"><h2>Quick practice</h2><div class=\"practice-card\"><div class=\"practice-top\"><div><h3>Practice for 60 seconds.</h3><p>Stay curious. There is no need to make the movement bigger or deeper.</p></div><div class=\"timer\" aria-live=\"polite\">01:00</div></div><div class=\"practice-focus\">" + lesson.practice.map(function (item) { return "<span class=\"focus-chip\">✓ " + esc(item) + "</span>"; }).join("") + "</div><div class=\"button-row\" style=\"margin-top:20px\"><button class=\"button primary small practice-start\" type=\"button\">Start practice timer</button><button class=\"button subtle small practice-reset\" type=\"button\" hidden>Reset timer</button></div></div></section><section class=\"lesson-section\"><h2>Quick check</h2><p class=\"section-intro\">Answer both questions to reflect on the skill. You can try again as many times as you like.</p><form class=\"quiz\" data-lesson=\"" + lesson.id + "\">" + quiz + "<div class=\"button-row\"><button class=\"button coral quiz-submit\" type=\"submit\">Check answers</button><div class=\"quiz-result\" aria-live=\"polite\"></div></div></form></section><section class=\"completion-box\"><div><strong>" + (isComplete(lesson.id) ? "Lesson complete ✓" : "Ready to keep this one?") + "</strong><p>" + (isComplete(lesson.id) ? "You can revisit this lesson anytime from the course map." : "Mark it complete when you understand the movement and its safety boundary.") + "</p></div><button class=\"button " + (isComplete(lesson.id) ? "subtle" : "primary") + " complete-button\" type=\"button\" data-lesson=\"" + lesson.id + "\">" + (isComplete(lesson.id) ? "Completed ✓" : "✓ Mark lesson complete") + "</button></section><div class=\"lesson-footer\">" + previous + following + "</div></article>" + aside(lesson) + "</div></div>", "course");
}

function techniques() {
  const cards = referenceItems.map(function (item) { return "<article class=\"reference-card\" data-search=\"" + esc((item[0] + " " + item[1]).toLowerCase()) + "\"><div><div class=\"ref-icon\">" + item[2] + "</div><h3>" + esc(item[0]) + "</h3><p>" + esc(item[1]) + "</p></div><a class=\"ref-link\" href=\"#/lesson/" + item[3] + "\">Open lesson →</a></article>"; }).join("");
  return shell("<div class=\"page\"><div class=\"reference-hero\"><div><p class=\"eyebrow\">Quick reference</p><h1>Techniques</h1><p class=\"lede\">A quick lookup for movements you have met in the guided course. Return to the full lesson for setup and safety.</p></div><label class=\"search-box\"><span class=\"sr-only\">Search techniques</span><input id=\"technique-search\" type=\"search\" placeholder=\"Search by movement\" /></label></div><div class=\"reference-grid\" id=\"reference-grid\">" + cards + "</div></div>", "techniques");
}
function areas() {
  return shell("<div class=\"page\"><p class=\"eyebrow\">Quick reference</p><h1>Body areas</h1><p class=\"lede\" style=\"margin-bottom:34px\">Choose an area when you need a refresher. The lesson keeps positioning, pressure, and boundaries together.</p><div class=\"area-grid\">" + bodyAreas.map(function (area) { return "<a class=\"area-card\" href=\"#/lesson/" + area[2] + "\"><strong>" + esc(area[0]) + " <span aria-hidden=\"true\">↗</span></strong><p>" + esc(area[1]) + "</p></a>"; }).join("") + "</div><section style=\"margin-top:70px\"><div class=\"section-heading\"><div><p class=\"eyebrow\">Keep it simple</p><h2>Not sure where to begin?</h2></div><p>Start with the course. It builds hand confidence before asking you to work on a new body area.</p></div><a class=\"button primary\" href=\"#/course\">Open the course map →</a></section></div>", "body-areas");
}
function routines() {
  return shell("<div class=\"page\"><p class=\"eyebrow\">Short practice ideas</p><h1>Quick routines</h1><p class=\"lede\" style=\"margin-bottom:34px\">Keep a routine short enough to stay attentive. These are practice structures, not medical treatments.</p><div class=\"routine-grid\"><article class=\"routine-card\"><div class=\"routine-time\">05 MIN · RESET</div><h3>Hands & forearms</h3><p>A desk-break sequence for learning broad, light contact.</p><ul><li>1 min warm palms</li><li>2 min forearm gliding</li><li>1 min palm circles</li><li>1 min still finish</li></ul><a class=\"ref-link\" href=\"#/lesson/10\">Learn the area →</a></article><article class=\"routine-card\"><div class=\"routine-time\">07 MIN · UNWIND</div><h3>Shoulders & upper back</h3><p>A supported sequence that stays away from the spine and neck.</p><ul><li>2 min shoulder gliding</li><li>2 min upper-back path</li><li>2 min soft circles</li><li>1 min check-in</li></ul><a class=\"ref-link\" href=\"#/lesson/6\">Learn the area →</a></article><article class=\"routine-card\"><div class=\"routine-time\">10 MIN · COMPLETE</div><h3>Beginner flow</h3><p>Combine the course building blocks into one easy rhythm.</p><ul><li>2 min arrive</li><li>5 min one focus</li><li>1 check-in</li><li>2 min close</li></ul><a class=\"ref-link\" href=\"#/lesson/13\">Open final lesson →</a></article></div><section class=\"safety-callout\" style=\"margin-top:35px\"><div class=\"callout-icon\">!</div><div><h3>Shorter is always okay.</h3><p>Stop when comfort changes. A routine is successful when the person feels listened to—not when every minute is used.</p></div></section></div>", "");
}
function safety() {
  return shell("<div class=\"page\"><section class=\"safety-hero\"><p class=\"eyebrow\" style=\"color:var(--sun)\">The safety boundary</p><h1>Comfort is the skill.</h1><p>Kindred Touch is educational guidance for gentle, non-medical massage. It does not diagnose, cure, or treat medical conditions. When in doubt, pause and ask an appropriate health professional.</p></section><div class=\"safety-grid\"><section class=\"safety-panel\"><h2>Stop right away for</h2><div class=\"stop-list\"><div class=\"stop-item\">Sharp or severe pain</div><div class=\"stop-item\">Numbness or tingling</div><div class=\"stop-item\">Dizziness or faintness</div><div class=\"stop-item\">Unusual weakness</div><div class=\"stop-item\">Difficulty breathing</div><div class=\"stop-item\">Any sudden concerning symptom</div></div></section><section class=\"safety-panel\"><h2>Ask for advice first</h2><ul><li>There is an injury, unexplained severe pain, or recent surgery.</li><li>A person has a medical condition, unusual swelling, or altered sensation.</li><li>The skin is broken, inflamed, bruised, or unusually hot or red.</li><li>You are unsure whether massage is appropriate or safe.</li></ul></section><section class=\"safety-panel\"><h2>Always keep out of bounds</h2><ul><li>Do not forcefully manipulate the spine, neck, joints, or injured areas.</li><li>Do not twist, crack, pull, or traction the neck.</li><li>Do not press directly on the spine, throat, open wounds, or acute pain.</li><li>Do not present massage as a cure or a replacement for professional care.</li></ul></section><section class=\"safety-panel\"><h2>Good communication sounds like</h2><ul><li>“Is this pressure comfortable?”</li><li>“Would you like me to stay here, change direction, or pause?”</li><li>“Tell me if you feel anything sharp, numb, tingly, or unusual.”</li><li>“We can stop now—there is no need to push through.”</li></ul></section></div></div>", "safety");
}
function progressPage() {
  return shell("<div class=\"page\"><div class=\"progress-hero\"><div><p class=\"eyebrow\">Your private learning record</p><h1>Progress</h1><p class=\"lede\">Your progress stays in this browser. No account, name, or sign-in is needed.</p></div><div class=\"progress-big\"><strong>" + percentComplete() + "%</strong><span>course complete</span></div></div><div class=\"progress-track\"><span style=\"width:" + percentComplete() + "%\"></span></div><div class=\"progress-caption\"><span>" + progress.completed.length + " of " + lessons.length + " lessons completed</span><span>Next: " + esc(currentLesson().title) + "</span></div><div class=\"button-row\" style=\"margin:27px 0 32px\"><a class=\"button primary\" href=\"#/lesson/" + currentLesson().id + "\">" + (progress.completed.length ? "Continue learning" : "Start learning") + " →</a><button class=\"button subtle reset-progress\" type=\"button\">Reset progress</button></div><div class=\"lesson-list\">" + lessons.map(function (lesson) { return "<article class=\"lesson-card " + (isComplete(lesson.id) ? "complete" : "") + "\"><div class=\"lesson-number\">" + String(lesson.id).padStart(2, "0") + "</div><div><h3>" + esc(lesson.title) + "</h3><p>" + (isComplete(lesson.id) ? "Completed and ready to revisit." : esc(lesson.short)) + "</p>" + statusMarkup(lesson) + "</div><div>" + lessonButton(lesson) + "</div></article>"; }).join("") + "</div></div>", "progress");
}
function notFound() { return shell("<div class=\"page not-found\"><p class=\"eyebrow\">A quiet detour</p><h1>That page wandered off.</h1><p class=\"lede\" style=\"margin:0 auto 25px\">Let’s take you back to the learning path.</p><a class=\"button primary\" href=\"#/home\">Return home →</a></div>", ""); }

function render() {
  if (practiceTimer) { clearInterval(practiceTimer); practiceTimer = null; }
  const current = route();
  let html;
  if (current === "home") html = home();
  else if (current === "course") html = course();
  else if (current === "techniques") html = techniques();
  else if (current === "body-areas") html = areas();
  else if (current === "routines") html = routines();
  else if (current === "safety") html = safety();
  else if (current === "progress") html = progressPage();
  else if (/^lesson\/\d+$/.test(current)) html = lessonPage(Number(current.split("/")[1]));
  else html = notFound();
  document.getElementById("app").innerHTML = html;
  bindEvents();
}

function bindEvents() {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menu) menu.addEventListener("click", function () { const open = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", String(open)); menu.textContent = open ? "×" : "☰"; });
  if (nav) nav.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", function () { nav.classList.remove("open"); if (menu) { menu.setAttribute("aria-expanded", "false"); menu.textContent = "☰"; } }); });
  const complete = document.querySelector(".complete-button");
  if (complete) complete.addEventListener("click", function (event) { markLesson(Number(event.currentTarget.dataset.lesson)); render(); window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); });
  const reset = document.querySelector(".reset-progress");
  if (reset) reset.addEventListener("click", function () { if (window.confirm("Reset all completed lessons? This cannot be undone.")) { progress = { completed: [], current: 1 }; saveProgress(); render(); } });
  const search = document.querySelector("#technique-search");
  if (search) search.addEventListener("input", function (event) { const query = event.target.value.toLowerCase().trim(); document.querySelectorAll(".reference-card").forEach(function (card) { card.hidden = query && !card.dataset.search.includes(query); }); });
  const start = document.querySelector(".practice-start");
  if (start) start.addEventListener("click", function (event) { startTimer(event.currentTarget); });
  const practiceReset = document.querySelector(".practice-reset");
  if (practiceReset) practiceReset.addEventListener("click", resetTimer);
  const quiz = document.querySelector(".quiz");
  if (quiz) quiz.addEventListener("submit", function (event) { event.preventDefault(); checkQuiz(event.currentTarget); });
}

function startTimer(button) {
  let seconds = 60;
  button.hidden = true;
  document.querySelector(".practice-reset").hidden = false;
  const timer = document.querySelector(".timer");
  practiceTimer = setInterval(function () { seconds -= 1; if (timer) timer.textContent = "00:" + String(seconds).padStart(2, "0"); if (seconds <= 0) { clearInterval(practiceTimer); practiceTimer = null; if (timer) timer.textContent = "Done ✓"; } }, 1000);
}
function resetTimer() {
  if (practiceTimer) clearInterval(practiceTimer);
  practiceTimer = null;
  const timer = document.querySelector(".timer");
  if (timer) timer.textContent = "01:00";
  const start = document.querySelector(".practice-start");
  if (start) { start.hidden = false; start.textContent = "Start practice timer"; }
  const reset = document.querySelector(".practice-reset");
  if (reset) reset.hidden = true;
}
function checkQuiz(form) {
  const lesson = lessons.find(function (item) { return item.id === Number(form.dataset.lesson); });
  let score = 0;
  lesson.quiz.forEach(function (question, index) {
    const selected = form.querySelector("input[name=\"question-" + index + "\"]:checked");
    form.querySelectorAll("input[name=\"question-" + index + "\"]").forEach(function (input) {
      const label = input.closest(".quiz-option");
      label.classList.toggle("selected", input.checked);
      label.classList.toggle("correct", input.checked && Number(input.value) === question[2]);
      label.classList.toggle("incorrect", input.checked && Number(input.value) !== question[2]);
      if (selected && Number(input.value) === question[2]) label.classList.add("correct");
    });
    if (selected && Number(selected.value) === question[2]) score += 1;
    form.querySelector("[data-feedback=\"" + index + "\"]").classList.add("show");
  });
  const result = form.querySelector(".quiz-result");
  result.textContent = score === lesson.quiz.length ? "Nice work — " + score + "/" + lesson.quiz.length + ". You’re ready to practice this skill." : "You got " + score + "/" + lesson.quiz.length + ". Review the highlighted answers and try again.";
  result.classList.add("show");
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
