const STORAGE_KEY = "kindred-touch-progress-v1";

const lessons = [
  {
    id: 1, title: "Massage Basics", short: "Build a safe, comfortable foundation before your hands begin.", time: 6, level: "Beginner", icon: "✦",
    learn: "Massage is a way to offer attentive, comfortable touch. This first lesson covers preparation, permission, communication, and noticing the other person’s response.",
    before: ["Ask for clear permission before touching.", "Trim or smooth nails and wash your hands.", "Choose a warm, quiet place with room to move."],
    position: [["Their position", "Choose a supported seated or lying position. Pillows can help the neck, knees, or arms relax."], ["Your position", "Stay close enough that your shoulders can drop. Move your whole body instead of leaning hard into your hands."]],
    steps: [["Agree on a plan.", "Ask which area and kind of touch are welcome, and agree that either person can pause at any time."], ["Settle into contact.", "Lower a warm, relaxed palm gradually onto a supported broad area. Let the person breathe normally; no breathing count is needed."], ["Ask about comfort.", "Say, “Does this feel comfortable? If you want lighter pressure, let me know.” Change only a little if wanted, then check again."], ["Ease out.", "Slow into still contact and gradually remove the hand. Keep your shoulders relaxed and stop whenever comfort changes."]],
    pressure: ["Start with a resting palm, without leaning in. Ask whether the contact feels comfortable; breathing should stay easy.", "More pressure is not automatically better. If more is wanted, change only a little and check again; stay lighter if unsure.", "Stop for sharp pain, guarding, numbness, tingling, dizziness, or any concerning symptom."],
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
    steps: [["Let the hand rest.", "Lower your palm onto a pillow or towel with soft fingers, an unlocked thumb, and a comfortable wrist."], ["Spread the contact.", "Notice how the whole palm feels broader than one fingertip. Keep elbows soft and shoulders down."], ["Try a tiny weight shift.", "On the pillow, slowly shift a little body weight forward, then ease back. Do not lock the elbow or force a perfectly straight wrist."], ["Return to rest.", "Keep contact as you soften, then gradually lift away. If your fingers grip or shoulders rise, slow down and switch hands or rest."]],
    pressure: ["Practice on a pillow first: start with just the relaxed hand's weight, not a strong lean.", "On another person, ask about comfort before adding a tiny weight shift. Keep elbows soft and check again; force is unnecessary.", "Pain in your wrist, thumb, or fingers is a signal to stop and reset."],
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
    steps: [["Settle first.", "Support the forearm. Lower a relaxed palm gradually and ask whether the contact feels comfortable."], ["Glide without dragging.", "Move slowly from wrist toward elbow over soft muscle, stopping short of the joint. Use a small, agreed amount of skin-safe lotion if needed; over clothing, use shorter strokes if fabric bunches."], ["Ease into the return.", "Slow before the end of the stroke and reduce pressure. Return with soft contact only if it glides freely; otherwise gradually lift while the other hand keeps light support."], ["Finish more softly.", "Repeat a few comfortable passes, vary the length slightly, then slow into still contact. Ease the hand away rather than stopping suddenly."]],
    pressure: ["Start with broad, resting contact and just enough touch for a smooth stroke. Ask whether it feels comfortable.", "If a little more is wanted, adjust slowly and ask again. More force will not fix dry skin or bunched fabric; shorten the stroke or stop to reset.", "Stop for sharp or unusual pain, numbness, tingling, or other concerning symptoms. Bracing means soften or pause, never press harder."],
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
    steps: [["Warm with broad contact.", "Begin with comfortable gliding over soft shoulder muscle. Settle a relaxed palm; keep the thumb loose."], ["Move the skin gently.", "Make a small, slow circle with the palm. Let the skin shift with the hand rather than scraping across it; shrink the circle if the skin pulls."], ["Keep an easy rhythm.", "Do a few circles, ask how they feel, then gradually soften and shift to a nearby area. Avoid grinding on one spot or forcing a fixed beat."], ["Blend into the finish.", "Let the circles become smaller and lighter. Return to a slow broad stroke, then rest before releasing."]],
    pressure: ["Start with the palm resting on soft muscle. Ask about comfort, then try a tiny skin movement without rubbing hard.", "Make the circle smaller or use still contact if the skin pulls. Only adjust pressure gradually when requested and check again; never work harder over a tender spot.", "Pause if the person tenses or the circle feels scratchy. Stop for pain, numbness, tingling, dizziness, or unusual symptoms."],
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
    steps: [["Warm and check.", "Support the calf and use a few broad, light strokes first. Ask whether a small rolling movement is welcome."], ["Gather with a soft hand.", "Rest the palm and finger pads around soft muscle. Gently roll a little tissue into the broad hand; keep fingers and thumb open rather than pinching them together."], ["Let the tissue settle.", "Release the gathering gradually while keeping light contact. A visible lift is optional; do not tug skin or pull the limb."], ["Move on and soothe.", "Try a few slow gather-and-release movements, then glide to another comfortable area. If gathering feels pinchy, use broad strokes instead and finish lightly."]],
    pressure: ["Warm with light strokes, then ask whether shallow gathering feels comfortable. Skin should never be trapped between fingertips.", "Keep contact broad and the rolling movement small. If more is wanted, adjust only a little and check again; return to gliding if it feels pinchy.", "Stop for sharp pain, cramping, bruising, numbness, tingling, or a strong urge to pull away."],
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
    steps: [["Settle and warm.", "Support the arms. Rest a broad palm on fleshy muscle behind the shoulder, then glide slowly outward, stopping before the bony shoulder tip."], ["Offer small circles.", "After a comfort check, settle the palm on the back shoulder muscle. Move the skin in small circles without pushing the shoulder downward."], ["Keep focused work optional.", "Try a few shallow gather-and-release movements only if wanted. Keep the thumb loose; return to gliding if the person braces or prefers broad touch."], ["Close with lighter contact.", "Blend back into slower broad strokes, then a soft resting hand. Reduce contact gradually and say when you are finished."]],
    pressure: ["Rest a broad hand on soft shoulder muscle and ask about comfort before moving. Do not push the shoulder downward.", "Only add a little pressure gradually if wanted, then check again. The person should relax rather than brace; gentle work is enough.", "Keep off the spine, collarbone, shoulder joint, and neck. Stop for pain, numbness, tingling, dizziness, or weakness."],
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
    steps: [["Settle beside the spine.", "With the person supported, lower relaxed palms onto broad muscle beside the bony spine. Ask whether this feels comfortable."], ["Follow a comfortable path.", "Glide slowly upward and outward toward the shoulders. Use a shorter path if clothing drags; keep off the spine and shoulder-blade edges."], ["Add a little variety.", "If welcome, use a few small palm circles over broad muscle. Gradually soften before changing zones; do not dig under a shoulder blade."], ["Soften the return and finish.", "Return with less pressure while keeping contact smooth. Finish with slower, lighter strokes and a brief resting hand, then release gradually."]],
    pressure: ["Start with relaxed palms beside the spine and no strong lean. Ask whether the broad contact feels comfortable.", "If more is wanted, gently shift a little body weight through broad hands and check again. Keep elbows soft; do not force tissue or chase tight spots.", "Stay off the spine, ribs, shoulder-blade edges, and painful spots. Stop for pain, numbness, tingling, dizziness, or unusual weakness."],
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
    position: [["Their position", "Keep the head resting independently on a pillow or headrest in its comfortable position. Never let it hang or force it to turn."], ["Your position", "Work beside the person with relaxed shoulders. Keep every neck surface clear; optional contact rests at the back skull edge without reaching or lifting."]],
    steps: [["Warm the shoulders first.", "Offer slow broad strokes on the upper back and shoulder muscle, keeping all neck surfaces clear."], ["Offer optional still contact.", "With the head already resting on a pillow or headrest, rest soft finger pads at the back skull edge without digging underneath or lifting the head. If this is awkward, stay with shoulders."], ["Keep the head still.", "Ask whether the resting contact feels comfortable. No neck circles are needed; never press the front or sides of the neck or steer the head."], ["Release gradually.", "Reduce hand contact to zero while the pillow continues to support the head. Ease the hands away without pulling; let the person move themselves when ready."]],
    pressure: ["Use only optional, light resting contact at the back skull edge with the head independently supported. Ask about comfort.", "Do not increase force at the skull base or neck because a spot feels tight. Switch to shoulder contact if it is awkward or unwelcome.", "Never twist, crack, pull, traction, or force the neck. Stop for dizziness, headache changes, pain, tingling, numbness, weakness, or nausea."],
    feel: "Calm support and warmth around the base of the skull and upper shoulders. The head remains neutral and easy.",
    mistakes: ["Pressing the front or side of the throat.", "Turning or stretching the head for the person.", "Treating a painful spot as something to push through."],
    safety: "Do not massage the neck if there is a recent injury, severe or unexplained pain, neurological symptoms, dizziness, or another concern without professional guidance. Never perform forceful neck manipulation.",
    practice: ["head stays still", "light touch only", "back of neck", "stop if unsure"], visual: ["neck", "Support the base of the skull gently; the head stays neutral.", "Neck diagram highlighting gentle contact at the base of the skull"],
    quiz: [["What must you never do in this lesson?", ["Ask how it feels", "Use light resting contact", "Forcefully twist or crack the neck"], 2, "Never force, twist, crack, or pull the neck."], ["Where is optional still contact placed?", ["The front of the throat", "The back skull edge with the head resting on a pillow", "Directly on the spine"], 1, "Keep the head independently supported. Soft pads can rest at the back skull edge without lifting or digging."]]
  },
  {
    id: 9, title: "Head & Scalp", short: "Explore 13 gentle scalp techniques with relaxed fingertips.", time: 12, level: "Beginner", icon: "✺",
    learn: "Practice light movements across the scalp, hairline, and temples. Keep the head supported and still; scalp massage never includes neck manipulation.",
    before: ["Ask about scalp sensitivity, hair styling, skin irritation, or headache symptoms.", "Remove rings and keep nails short.", "Sit where your arms can stay relaxed."],
    position: [["Their position", "A supported seat works well. Let the head stay upright and natural rather than pulling it into a new angle."], ["Your position", "Stand or sit close by with elbows loose. Move around the head instead of stretching across it."]],
    steps: [["Settle without pulling.", "Let the head rest on support. Place soft finger pads on an accessible scalp area and ask whether the contact is welcome."], ["Move skin, not hair.", "Use a few small, unhurried circles with finger pads resting in place. Keep nails clear; reduce movement if hair pulls or the scalp feels rubbed."], ["Change zones softly.", "Ease pressure to zero before repositioning. Keep another hand resting lightly if welcome, never gripping or steering the head. Optional temple contact stays outside the eye socket and almost weightless."], ["Finish with familiar touch.", "Return to whichever gentle contact felt best. Slow into still contact, then ease away. Raking, tapping, and temple work can all be skipped."]],
    pressure: ["Start with soft finger pads resting on the scalp and ask about comfort. Try a tiny skin movement, with nails clear.", "Change the movement size or location before adding force. Adjust only a little if wanted and ask again; keep temple and behind-ear contact almost weightless.", "Stop for headache changes, scalp pain, dizziness, nausea, numbness, tingling, weakness, or visual symptoms."],
    feel: "A gentle, rhythmic movement that feels warm and unhurried. Hair should not tug at the roots.",
    mistakes: ["Using fingernails.", "Pulling hair while moving the scalp.", "Pressing firmly on the temples or a tender area."],
    safety: "Avoid broken or inflamed skin, recent head injury, and active scalp irritation. Stop for new or unusual headache symptoms and seek appropriate care.",
    practice: ["finger pads", "light pressure", "no hair tug", "head stays still"], visual: ["scalp", "Move gently across scalp zones; keep hair relaxed and the head still.", "Therapist using relaxed finger pads to massage a supported scalp"],
    quiz: [["What should touch the scalp?", ["Fingernails", "Finger pads", "A clenched fist"], 1, "Finger pads are softer and avoid scratching."], ["What should happen to the hair?", ["It should be pulled slightly", "It should stay comfortable", "It should be twisted"], 1, "The scalp can move gently without tugging the hair."]]
  },
  {
    id: 10, title: "Arms & Hands", short: "Trace a calm path from forearm to fingertips.", time: 7, level: "Beginner", icon: "↗",
    learn: "Arms and hands respond well to broad, gentle strokes. Support the limb, glide along the forearm, and give the hand and fingers space to relax.",
    before: ["Ask about wrist pain, numbness, recent strain, or skin sensitivity.", "Support the elbow and wrist with a pillow or your hand.", "Use a small amount of lotion only if it is comfortable."],
    position: [["Their position", "Let the arm rest on a cushion with the palm supported. The shoulder should not hold the arm up."], ["Your position", "Sit beside the arm and keep both hands close. Avoid pulling the arm away from its natural range."]],
    steps: [["Support and warm.", "Rest the elbow and wrist on a cushion. Glide a relaxed palm slowly from just above the wrist toward the elbow, stopping before the joint and returning more lightly."], ["Offer small circles.", "If welcome, make a few small palm or finger-pad circles on soft forearm muscle. Keep off the wrist crease and bones; blend back into gliding."], ["Rest the palm.", "Ask the person to turn their hand only if comfortable. Support it with one hand and use the broad pads of the other hand for tiny circles across the palm; do not squeeze both sides together."], ["Finish without a tug.", "If wanted, softly stroke each finger toward its tip with almost no squeeze. Ease off before the tip; keep the wrist supported, then finish with a resting hand."]],
    pressure: ["Start with a light resting palm on supported forearm muscle and ask about comfort. Do not squeeze the wrist or fingers.", "If a little more broad forearm pressure is wanted, adjust gradually and check again. Keep hand and finger work lighter; never lean into a joint crease.", "Stop for tingling, numbness, sharp wrist pain, weakness, or any sensation that travels into the hand."],
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
    steps: [["Choose one supported area.", "Choose healthy calf or thigh muscle with permission. Support the knee and ankle and rest a broad palm lightly; never begin on an unexplained painful or swollen leg."], ["Glide at an easy pace.", "Follow soft calf muscle from above the ankle toward, but not into, the back of the knee. On the thigh, stay clear of the kneecap and groin. Keep strokes shorter if fabric or dry skin drags."], ["Make focused work optional.", "After warming and a comfort check, use a few small broad-hand circles on soft muscle. Keep off joints, shin, prominent veins, and tender spots."], ["Close softly.", "Blend into slower, lighter gliding, then a resting hand. Ease away without moving the leg; let the person change position themselves when ready."]],
    pressure: ["Use light, broad contact on healthy soft muscle and ask about comfort. Keep off joints, shin, prominent veins, and the back of the knee.", "Only adjust broad soft-muscle pressure a little if wanted, then check again. Do not push harder on a tense, tender, or swollen calf.", "Stop for pain, swelling, warmth, redness, numbness, tingling, or one-sided unusual symptoms."],
    feel: "A steady warming sensation in soft muscle, without pulling at the knee or ankle.",
    mistakes: ["Pressing directly on the shin or kneecap.", "Working through swelling or unexplained calf pain.", "Moving the leg farther than it wants to go."],
    safety: "Do not massage a swollen, hot, red, acutely painful, or recently injured leg. New one-sided pain and swelling need urgent medical assessment. If leg pain/swelling occurs with breathlessness or chest pain, call your local emergency service immediately.",
    practice: ["support joints", "soft muscle only", "long strokes", "no forced movement"], visual: ["leg", "Keep joints supported and let long strokes travel through soft muscle.", "Leg diagram showing safe soft-tissue paths around the knee and calf"],
    quiz: [["What should be avoided?", ["Broad thigh muscle", "A supported knee", "A hot, swollen, painful area"], 2, "Do not massage an acutely swollen, hot, red, or painful area."], ["What does the return stroke do?", ["Adds more force", "Stays lighter", "Pulls the ankle"], 1, "Keep the return light and comfortable."]]
  },
  {
    id: 12, title: "Feet", short: "Offer simple, gentle foot care with constant communication.", time: 6, level: "Beginner", icon: "⌂",
    learn: "Feet can be sensitive, so every movement stays small and easy to adjust. Warm the sole, use broad circles, and respect ticklishness or pain.",
    before: ["Ask permission and check for cuts, blisters, rash, swelling, or reduced sensation.", "Wash hands and support the ankle with a folded towel.", "Ask whether socks should stay on."],
    position: [["Their position", "Let the foot rest on a pillow with the ankle neutral. The person should not hold the leg up."], ["Your position", "Sit at the end or side with a straight, supported back. Keep the foot close to you."]],
    steps: [["Support and check sensitivity.", "Rest the ankle on a cushion and cup the heel without squeezing. Offer still, broad contact first; if it feels ticklish, ask whether still contact or stopping is preferred."], ["Warm the sole.", "Use slow broad strokes from heel toward the base of the toes. Stop short of the joints, soften on the return, and avoid rubbing dry skin."], ["Offer small circles.", "With the heel supported, use a relaxed broad thumb pad for a few tiny circles on comfortable sole tissue. Do not drive the thumb tip into the arch; switch hands or use a resting palm if your thumb strains."], ["Finish lightly.", "Return to broad strokes and still contact. Toe strokes are optional: use almost no squeeze and ease off before each tip. Never twist, pull, or bend toes, and release the supported foot gradually."]],
    pressure: ["Start with broad, still contact and ask whether it feels comfortable or ticklish. Do not respond to ticklishness by automatically pressing harder.", "If wanted, adjust sole contact a little and check again. Keep the thumb pad broad and relaxed; pressure should never feel like a dig. Avoid toes and ankle bones.", "Stop for sharpness, burning, numbness, tingling, or a skin change."],
    feel: "Warm and supported, without a dig or squeeze. If ticklish or uncomfortable, offer still contact or stop; do not automatically increase pressure.",
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
    steps: [["Settle and warm up.", "Agree on one healthy, supported area. Begin with still contact, then easy broad strokes. The opening is about two minutes; follow comfort rather than the clock."], ["Stay mostly broad.", "Continue slow gliding for a few minutes, softening before each return. Relax your own shoulders and ask whether the contact still feels comfortable."], ["Offer a little focused work.", "If wanted, add a few small circles or shallow kneading movements, alternating with broad strokes. Keep this short and change zones; gliding alone is a complete option."], ["Close gradually.", "Use the last couple of minutes for slower, lighter strokes, then still contact. Say you are finishing and reduce contact gradually. Stop earlier whenever either person wants to."]],
    pressure: ["Begin with light resting contact and ask about comfort before the first stroke. Keep the receiver free to request less or stop.", "Only adjust pressure gradually if wanted, checking after every change. Focused work is optional; more pressure does not make a routine better.", "Stop for sharp or severe pain, numbness, tingling, dizziness, faintness, unusual weakness, or any concerning symptom. The timer never overrides comfort."],
    feel: "The person feels listened to, supported, and no worse than when they began. Soreness is not the goal.",
    mistakes: ["Trying to use every technique in one session.", "Skipping the opening or closing check-in.", "Continuing because the timer has not ended when comfort changes."],
    safety: "Keep this educational routine separate from medical treatment. Avoid forceful manipulation of the spine, neck, joints, or injured areas. Refer health concerns to an appropriate professional.",
    practice: ["settle and warm", "mostly broad strokes", "optional short focus", "slow lighter finish"], visual: ["routine", "Settle → warm → broad strokes → optional focus → lighter finish.", "Therapist and client share a closing comfort check"],
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
    if (!value || !Array.isArray(value.completed)) return { completed: [], current: 1, practiceCompleted: [], scalpPracticeCompleted: [] };
    return {
      completed: value.completed.filter(Number.isInteger),
      current: value.current || 1,
      practiceCompleted: Array.isArray(value.practiceCompleted)
        ? value.practiceCompleted.filter(function (id) { return Number.isInteger(id) && id >= 1 && id <= lessons.length; })
        : [],
      scalpPracticeCompleted: Array.isArray(value.scalpPracticeCompleted)
        ? value.scalpPracticeCompleted.filter(function (id) { return typeof id === "string" && /^[a-z0-9-]+$/.test(id); })
        : []
    };
  } catch (error) {
    return { completed: [], current: 1, practiceCompleted: [], scalpPracticeCompleted: [] };
  }
}
function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
function isComplete(id) { return progress.completed.includes(id); }
function isPracticeComplete(id) { return (progress.practiceCompleted || []).includes(id); }
function markPracticeComplete(id) {
  if (!progress.practiceCompleted) progress.practiceCompleted = [];
  if (!progress.practiceCompleted.includes(id)) progress.practiceCompleted.push(id);
  saveProgress();
}
function percentComplete() { return Math.round(progress.completed.length / lessons.length * 100); }
function currentLesson() { return lessons.find(function (item) { return item.id === progress.current; }) || lessons[0]; }
function setCurrent(id) { progress.current = id; saveProgress(); }
function markLesson(id) { if (!isComplete(id)) progress.completed.push(id); setCurrent(Math.min(id + 1, lessons.length)); }
function route() {
  let path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (window.location.hash.startsWith("#/")) {
    const legacyRoute = window.location.hash.slice(2);
    const [page, query] = legacyRoute.split("?");
    let destination = page === "home" || !page ? "/" : "/" + page;
    if (/^lesson\/\d+$/.test(page)) destination = "/lessons/" + page.split("/")[1];
    if (query) destination += "?" + query;
    window.history.replaceState(null, "", destination);
    path = destination.split("?")[0].replace(/\/+$/, "") || "/";
  }
  const legacyLessonPath = path.match(/^\/lesson\/(\d+)$/);
  if (path === "/home" || legacyLessonPath) {
    path = legacyLessonPath ? "/lessons/" + legacyLessonPath[1] : "/";
    window.history.replaceState(null, "", path + window.location.search);
  }
  if (path === "/" || path === "/home") return "home";
  if (path === "/course" || path === "/lessons") return "course";
  const lessonMatch = path.match(/^\/(?:lessons|lesson)\/(\d+)$/);
  if (lessonMatch) return "lesson/" + lessonMatch[1];
  return path.slice(1);
}

function normalizeRouteLinks(root) {
  root.querySelectorAll('a[href^="#/"]').forEach(function (anchor) {
    const legacyRoute = anchor.getAttribute("href").slice(2);
    const [page, query] = legacyRoute.split("?");
    let path = !page || page === "home" ? "/" : "/" + page;
    if (/^lesson\/\d+$/.test(page)) path = "/lessons/" + page.split("/")[1];
    anchor.setAttribute("href", path + (query ? "?" + query : ""));
  });
}

function isAppPath(path) {
  return path === "/" || path === "/home" || path === "/course" || path === "/lessons" ||
    ["/quick-practice", "/techniques", "/body-areas", "/pressure-points", "/routines", "/safety", "/progress", "/reference"].includes(path) ||
    /^\/(?:lessons|lesson)\/\d+$/.test(path);
}

function updatePageMetadata(current) {
  const lessonMatch = window.location.pathname.match(/^\/(?:lessons|lesson)\/(\d+)$/);
  const requestedPractice = current === "quick-practice" ? Number(new URLSearchParams(window.location.search).get("lesson")) : 0;
  const lessonId = lessonMatch ? Number(lessonMatch[1]) : requestedPractice;
  const lesson = lessonId ? lessons.find(function (item) { return item.id === lessonId; }) : null;
  const pageDetails = {
    home: ["Learn simple, safe massage techniques", "Visual beginner lessons, short practices, clear safety boundaries, and private progress saved on your device."],
    course: ["Course map", "Explore 13 visual beginner massage lessons, follow your next recommended step, and keep your progress on this device."],
    "quick-practice": [lesson ? lesson.title + " quick practice" : "Quick practice", "Choose a short, visual massage practice with clear movement cues and gentle safety guidance."],
    techniques: ["Massage techniques", "Browse beginner massage movements with visual guidance and links back to the full lesson."],
    "body-areas": ["Body areas", "Choose a body area to find gentle beginner guidance, a matching lesson, and concise safety notes."],
    "pressure-points": ["Pressure Points", "Landmark-led beginner lessons for traditional acupressure points, with original diagrams, careful safety guidance, and evidence distinctions."],
    routines: ["Quick routines", "Follow short beginner massage routines with visual lesson links and clear comfort-first safety cues."],
    safety: ["Massage safety", "Review simple, safety-first boundaries for gentle, non-medical massage practice."],
    progress: ["Your learning progress", "Review lesson and practice progress saved privately in this browser. No account is needed."],
    reference: ["Learning reference", "Return to lessons, techniques, body areas, quick routines, and safety guidance." ]
  };
  const details = lesson && current === "quick-practice" ? ["Quick practice · " + lesson.title, "A short, visual practice for " + lesson.title.toLowerCase() + " with clear movement cues and gentle safety guidance."] : lesson ? ["Lesson " + String(lesson.id).padStart(2, "0") + " · " + lesson.title, lesson.short + " Learn the setup, movement, pressure cues, and safety boundary."] : (pageDetails[current] || ["Page not found", "The page could not be found. Return to The Craft learning path."]);
  const title = details[0] + " | The Craft";
  document.title = title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = details[1];
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = title;
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.content = details[1];
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.content = window.location.origin + "/assets/hero-massage.webp";
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.href = window.location.origin + (window.location.pathname === "/home" ? "/" : window.location.pathname);
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.content = canonical ? canonical.href : window.location.origin + window.location.pathname;
}

document.addEventListener("click", function (event) {
  const anchor = event.target.closest("a[href]");
  if (!anchor || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || anchor.target || anchor.hasAttribute("download")) return;
  const destination = new URL(anchor.href, window.location.href);
  if (destination.origin !== window.location.origin || !isAppPath(destination.pathname)) return;
  if (destination.hash && !destination.hash.startsWith("#/")) return;
  const nextUrl = destination.pathname + destination.search;
  if (nextUrl === window.location.pathname + window.location.search) return;
  event.preventDefault();
  window.history.pushState(null, "", nextUrl);
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
  const main = document.getElementById("main-content");
  if (main) { main.setAttribute("tabindex", "-1"); main.focus({ preventScroll: true }); }
});
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

function shell(content, active) {
  const nav = [["home", "Home"], ["course", "Course"], ["techniques", "Techniques"], ["body-areas", "Body areas"], ["safety", "Safety"], ["progress", "Progress"]];
  const links = nav.map(function (item) { return "<a class=\"nav-link " + (active === item[0] ? "active" : "") + "\" href=\"#/" + item[0] + "\">" + item[1] + "</a>"; }).join("");
  return "<header class=\"shell-header\"><a class=\"brand\" href=\"#/home\" aria-label=\"The Craft home\"><span class=\"brand-mark\"><span>C</span></span><span class=\"brand-text\">the <em>craft</em></span></a><button class=\"menu-toggle\" type=\"button\" aria-label=\"Open navigation\" aria-expanded=\"false\">☰</button><nav class=\"main-nav\" aria-label=\"Main navigation\">" + links + "</nav></header><main id=\"main-content\" class=\"page-wrap\">" + content + "</main><footer class=\"footer\"><div class=\"footer-inner\"><strong>The Craft</strong><span>Learn slowly. Listen closely. Keep it comfortable.</span></div></footer>";
}

const lessonArtworkByType = {
  welcome: { image: "lesson-01-welcome.webp", alt: "A therapist and fully clothed client calmly check in before touch.", caption: "Begin with permission, a supported position, and a calm pace." },
  hands: { image: "lesson-02-hands.webp", alt: "Two relaxed hands rest palm-down on a towel with neutral, straight wrists.", caption: "Keep fingers relaxed and let the broad palm spread contact." },
  glide: { image: "lesson-03-gliding.webp", alt: "A therapist's palm glides along a supported forearm while the wrist stays relaxed.", caption: "Use a smooth working stroke and ease pressure on the return." },
  circles: { image: "lesson-04-circles-relaxed.webp", alt: "A relaxed broad palm rests on the back shoulder of a seated, supported client, clearly below and away from the neck.", caption: "Settle the broad palm on soft back shoulder muscle; use only a tiny skin circle." },
  knead: { image: "lesson-05-kneading.webp", alt: "A therapist gently gathers soft calf tissue with a relaxed hand.", caption: "Lift and release a little tissue; do not pinch or squeeze." },
  shoulders: { image: "lesson-06-shoulders.webp", alt: "Two relaxed palms rest over a clothed client's shoulder muscles, away from the neck.", caption: "Stay on soft shoulder muscle; keep the neck and joints clear." },
  back: { image: "lesson-07-upper-back.webp", alt: "A therapist's hands rest on either side of the spine over a clothed client's back.", caption: "Move over broad muscle beside the spine, never directly on it." },
  neck: { image: "lesson-08-neck-support.webp", alt: "A reclined head rests on a pillow while soft fingers rest at the back skull edge without lifting.", caption: "The pillow carries the head. Hands offer optional still contact without lifting or pulling." },
  scalp: { image: "lesson-09-scalp.webp", alt: "A therapist lightly touches a reclined client's scalp with relaxed fingertips.", caption: "Use finger pads, keep nails away, and never tug the hair." },
  arm: { image: "lesson-10-arm-hand.webp", alt: "A therapist glides one hand along the forearm while the other supports the wrist.", caption: "Support the limb, glide smoothly, and do not pull the fingers." },
  leg: { image: "lesson-11-leg.webp", alt: "A therapist glides an open palm over a clothing-covered calf while the other hand supports the ankle.", caption: "Glide lightly along soft calf muscle; stay clear of the knee and ankle." },
  foot: { image: "lesson-12-foot-action.webp", alt: "One hand supports the heel as the broad pad of the other thumb gently works across the sole; toes stay free.", caption: "Anchor the heel, use a broad thumb pad on the sole, and leave toes free." },
  routine: { image: "lesson-13-routine.webp", alt: "A fully clothed client and therapist share a calm closing check-in.", caption: "Close slowly, release contact, and ask how the person feels." }
};

function lessonVisual(lesson) {
  const artwork = lessonArtworkByType[lesson.visual[0]] || lessonArtworkByType.welcome;
  return "<div class=\"lesson-visual\"><div class=\"visual-scene\"><img class=\"visual-image\" src=\"/assets/lessons/" + artwork.image + "\" alt=\"" + esc(artwork.alt) + "\" width=\"1448\" height=\"1086\" decoding=\"async\" /></div><p class=\"visual-caption\">" + esc(artwork.caption) + "</p></div>";
}
function aside(lesson) {
  return "<aside class=\"lesson-aside\"><div class=\"aside-card\"><p class=\"eyebrow\">Course progress</p><h3>" + progress.completed.length + " of " + lessons.length + " complete</h3><div class=\"progress-row\"><span>" + percentComplete() + "% learned</span><span>" + (isComplete(lesson.id) ? "Reviewed" : "In progress") + "</span></div>" + progressBar(true) + "<nav aria-label=\"Lesson list\">" + lessons.map(function (item) { return "<a class=\"lesson-link " + (isComplete(item.id) ? "done" : "") + "\" href=\"#/lesson/" + item.id + "\"><span class=\"small-num\">" + String(item.id).padStart(2, "0") + "</span><span>" + esc(item.title) + "</span>" + (isComplete(item.id) ? "<span aria-label=\"completed\">✓</span>" : "") + "</a>"; }).join("") + "</nav></div></aside>";
}

function home() {
  const started = progress.completed.length > 0 || progress.current > 1;
  const next = currentLesson();
  const continuePanel = started ? "<section class=\"continue-panel\"><div><p class=\"eyebrow\">Your next small step</p><h2>Continue with lesson " + String(next.id).padStart(2, "0") + " · " + esc(next.title) + "</h2><p>" + esc(next.short) + "</p>" + progressBar() + "</div><a class=\"button\" href=\"#/lesson/" + next.id + "\">" + (isComplete(next.id) ? "Review lesson" : "Continue learning") + " <span aria-hidden=\"true\">→</span></a></section>" : "";
  return shell("<div class=\"page\"><section class=\"hero\"><div class=\"hero-copy\"><p class=\"eyebrow\">A calm course in caring touch</p><h1>Learn massage with more confidence and less guesswork.</h1><p class=\"lede\">The Craft is a beginner-friendly learning path for thoughtful, comfortable massage. Learn one simple skill at a time, practice safely, and build a routine that listens.</p><div class=\"button-row\"><a class=\"button primary\" href=\"#/course\">Start learning <span aria-hidden=\"true\">→</span></a><a class=\"button\" href=\"#/safety\">Read the safety guide</a></div><p class=\"hero-note\"><span>✓</span> Educational guidance—not medical treatment.</p></div><div class=\"hero-art\"><div class=\"art-card art-main\"><svg class='hero-illustration' viewBox='0 0 440 360' preserveAspectRatio='xMidYMid meet' role='img' aria-label='Two people sharing supportive massage touch' xmlns='http://www.w3.org/2000/svg'><ellipse cx='266' cy='313' rx='147' ry='24' fill='#6f9e82' opacity='.25'/><path d='M213 160c16-27 46-39 78-31 34 9 51 39 56 77l13 91H185l10-88c2-21 5-35 18-49z' fill='#f4f0e9'/><circle cx='286' cy='92' r='39' fill='#bd8169'/><path d='M247 92c-3-34 20-58 50-54 29 3 43 26 35 59-12-12-20-27-23-46-12 16-31 27-62 32z' fill='#2c4f43'/><path d='M224 180c-35 1-65 15-91 40' fill='none' stroke='#bd8169' stroke-width='25' stroke-linecap='round'/><circle cx='130' cy='222' r='13' fill='#bd8169'/><path d='M118 221c-16-4-29-2-42 6' fill='none' stroke='#bd8169' stroke-width='9' stroke-linecap='round'/><path d='M159 191c-3-31-22-52-48-57-24-5-47 8-55 32-9 26 5 55 30 65 28 11 59-5 73-40z' fill='#d98a6e'/><circle cx='101' cy='114' r='31' fill='#bd8169'/><path d='M70 117c-2-28 15-48 39-49 25-1 40 19 34 47-11-10-18-21-21-36-12 15-27 25-52 28z' fill='#3d6855'/><path d='M80 151c23 15 50 14 68-2' fill='none' stroke='#f2c76a' stroke-width='8' stroke-linecap='round'/><path d='M244 219c-19 39-23 64-14 91' fill='none' stroke='#bd8169' stroke-width='22' stroke-linecap='round'/><path d='M295 260c29 20 42 36 48 54' fill='none' stroke='#bd8169' stroke-width='22' stroke-linecap='round'/><path d='M164 180c27-14 56-19 83-18' fill='none' stroke='#bd8169' stroke-width='23' stroke-linecap='round'/><path d='M263 147c16 10 26 23 30 39' fill='none' stroke='#f2c76a' stroke-width='6' stroke-linecap='round' stroke-dasharray='2 12'/></svg><div class=\"art-label\"><strong>Small steps, steady hands</strong><small>Designed for first-time learners</small></div></div><div class=\"art-card art-float one\">✦</div><div class=\"art-card art-float two\">☼</div></div></section><div class=\"stat-strip\"><div class=\"stat\"><strong>13</strong><span>guided lessons</span></div><div class=\"stat\"><strong>~75 min</strong><span>learning path</span></div><div class=\"stat\"><strong>Beginner</strong><span>friendly pace</span></div><div class=\"stat\"><strong>Local</strong><span>progress saved privately</span></div></div>" + continuePanel + "<section><div class=\"section-heading\"><div><p class=\"eyebrow\">How it works</p><h2>Learn by doing, not by guessing.</h2></div><p>Each lesson gives you a clear movement, a safe setup, a short practice, and a quick check before you move on.</p></div><div class=\"feature-grid\"><article class=\"feature-card\"><div class=\"feature-icon\">01</div><h3>One skill at a time</h3><p>Short lessons turn a big topic into a sequence you can actually remember and repeat.</p></article><article class=\"feature-card\"><div class=\"feature-icon\">⌁</div><h3>See the movement</h3><p>Detailed, lesson-specific photos show hand placement, with subtle cues to trace each movement.</p></article><article class=\"feature-card\"><div class=\"feature-icon\">✓</div><h3>Check your confidence</h3><p>Practice for a minute, answer two questions, and mark the lesson complete when it feels clear.</p></article></div></section><section class=\"safety-callout\"><div class=\"callout-icon\">!</div><div><h3>A gentle reminder before you begin</h3><p>Stop for sharp pain, numbness, tingling, dizziness, faintness, unusual weakness, difficulty breathing, or any sudden concerning symptom. Massage should never be forceful.</p></div></section></div>", "home");
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
  return shell("<div class=\"page\"><section class=\"safety-hero\"><p class=\"eyebrow\" style=\"color:var(--sun)\">The safety boundary</p><h1>Comfort is the skill.</h1><p>The Craft is educational guidance for gentle, non-medical massage. It does not diagnose, cure, or treat medical conditions. When in doubt, pause and ask an appropriate health professional.</p></section><div class=\"safety-grid\"><section class=\"safety-panel\"><h2>Stop right away for</h2><div class=\"stop-list\"><div class=\"stop-item\">Sharp or severe pain</div><div class=\"stop-item\">Numbness or tingling</div><div class=\"stop-item\">Dizziness or faintness</div><div class=\"stop-item\">Unusual weakness</div><div class=\"stop-item\">Difficulty breathing</div><div class=\"stop-item\">Any sudden concerning symptom</div></div></section><section class=\"safety-panel\"><h2>Ask for advice first</h2><ul><li>There is an injury, unexplained severe pain, or recent surgery.</li><li>A person has a medical condition, unusual swelling, or altered sensation.</li><li>The skin is broken, inflamed, bruised, or unusually hot or red.</li><li>You are unsure whether massage is appropriate or safe.</li></ul></section><section class=\"safety-panel\"><h2>Always keep out of bounds</h2><ul><li>Do not forcefully manipulate the spine, neck, joints, or injured areas.</li><li>Do not twist, crack, pull, or traction the neck.</li><li>Do not press directly on the spine, throat, open wounds, or acute pain.</li><li>Do not present massage as a cure or a replacement for professional care.</li></ul></section><section class=\"safety-panel\"><h2>Good communication sounds like</h2><ul><li>“Is this pressure comfortable?”</li><li>“Would you like me to stay here, change direction, or pause?”</li><li>“Tell me if you feel anything sharp, numb, tingly, or unusual.”</li><li>“We can stop now—there is no need to push through.”</li></ul></section></div></div>", "safety");
}
function progressPage() {
  return shell("<div class=\"page\"><div class=\"progress-hero\"><div><p class=\"eyebrow\">Your private learning record</p><h1>Progress</h1><p class=\"lede\">Your progress stays in this browser. No account, name, or sign-in is needed.</p></div><div class=\"progress-big\"><strong>" + percentComplete() + "%</strong><span>course complete</span></div></div><div class=\"progress-track\"><span style=\"width:" + percentComplete() + "%\"></span></div><div class=\"progress-caption\"><span>" + progress.completed.length + " of " + lessons.length + " lessons completed</span><span>Next: " + esc(currentLesson().title) + "</span></div><div class=\"button-row\" style=\"margin:27px 0 32px\"><a class=\"button primary\" href=\"#/lesson/" + currentLesson().id + "\">" + (progress.completed.length ? "Continue learning" : "Start learning") + " →</a><button class=\"button subtle reset-progress\" type=\"button\">Reset progress</button></div><div class=\"lesson-list\">" + lessons.map(function (lesson) { return "<article class=\"lesson-card " + (isComplete(lesson.id) ? "complete" : "") + "\"><div class=\"lesson-number\">" + String(lesson.id).padStart(2, "0") + "</div><div><h3>" + esc(lesson.title) + "</h3><p>" + (isComplete(lesson.id) ? "Completed and ready to revisit." : esc(lesson.short)) + "</p>" + statusMarkup(lesson) + "</div><div>" + lessonButton(lesson) + "</div></article>"; }).join("") + "</div></div>", "progress");
}
function notFound() { return shell("<div class=\"page not-found\"><p class=\"eyebrow\">A quiet detour</p><h1>That page wandered off.</h1><p class=\"lede\" style=\"margin:0 auto 25px\">Let’s take you back to the learning path.</p><a class=\"button primary\" href=\"#/home\">Return home →</a></div>", ""); }

function replaceHeroArtwork(app) {
  const heroArt = app.querySelector(".hero-art");
  if (!heroArt) return;
  const card = document.createElement("div");
  card.className = "art-card art-main";
  const heroImage = document.createElement("img");
  heroImage.className = "hero-illustration";
  heroImage.src = "/assets/hero-massage.webp";
  heroImage.alt = "A massage therapist gently places both hands on a client's bare upper back while towels cover the lower body.";
  heroImage.width = 1448;
  heroImage.height = 1086;
  heroImage.decoding = "async";
  heroImage.fetchPriority = "high";
  const label = document.createElement("div");
  label.className = "art-label";
  label.innerHTML = "<strong>Small steps, steady hands</strong><small>Designed for first-time learners</small>";
  card.append(heroImage, label);
  heroArt.replaceChildren(card);
}

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
  const app = document.getElementById("app");
  app.innerHTML = html;
  if (current === "home") replaceHeroArtwork(app);
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
  if (reset) reset.addEventListener("click", function () { if (window.confirm("Reset all lesson and practice progress? This cannot be undone.")) { progress = { completed: [], current: 1, practiceCompleted: [], scalpPracticeCompleted: [] }; saveProgress(); render(); } });
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
window.addEventListener("popstate", render);
window.addEventListener("DOMContentLoaded", render);
