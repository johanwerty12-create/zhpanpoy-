const routineData = [
  {
    title: "3-Minute Quick Relaxation", time: "3 min", tag: "Fast reset", description: "A tiny routine for a calm, comfortable start or finish.", lesson: 3,
    steps: [["1 min", "Still contact and two slow breaths", 1], ["1 min", "Gentle gliding on a broad area", 3], ["1 min", "Lighter return and a comfort check", 3]],
    safety: "Use light pressure. Stop for pain, numbness, tingling, dizziness, or anything unusual."
  },
  {
    title: "5-Minute Beginner Routine", time: "5 min", tag: "Start here", description: "A simple first routine using the course’s safest building blocks.", lesson: 13,
    steps: [["1 min", "Prepare, ask permission, and settle", 1], ["2 min", "Gentle gliding with a relaxed palm", 3], ["1 min", "Small circles over broad soft muscle", 4], ["1 min", "Light finish and check comfort", 3]],
    safety: "Keep the movement easy to receive. Never work through pain."
  },
  {
    title: "10-Minute Relaxation Routine", time: "10 min", tag: "Most complete", description: "A calm sequence for shoulders and upper back with time to listen.", lesson: 13,
    steps: [["2 min", "Arrive with still contact and gliding", 3], ["3 min", "Broad shoulder strokes and gentle circles", 6], ["3 min", "Upper-back paths beside the spine", 7], ["2 min", "Lighter gliding, close, and check in", 13]],
    safety: "Stay beside the spine. Avoid the neck, joints, and any injured or painful area."
  },
  {
    title: "Head & Scalp Routine", time: "5 min", tag: "Head", description: "A light, quiet rhythm for the scalp without tugging hair.", lesson: 9,
    steps: [["1 min", "Scalp glides and light contact", 9], ["3 min", "Small circles across scalp zones", 9], ["1 min", "Finish with light glides and a check-in", 9]],
    safety: "Keep nails out of the way. Stop for a new or unusual headache, nausea, dizziness, or scalp pain."
  },
  {
    title: "Hands & Arms Routine", time: "5 min", tag: "Hands", description: "A practical desk-break flow that supports the arm before it moves.", lesson: 10,
    steps: [["1 min", "Support the elbow and wrist", 10], ["2 min", "Glide the forearm toward the elbow", 10], ["1 min", "Cup the palm and circle gently", 10], ["1 min", "Stroke fingers without pulling", 10]],
    safety: "Do not force the wrist or fingers. Stop for tingling, numbness, or sharp pain."
  },
  {
    title: "Shoulders Routine", time: "6 min", tag: "Shoulders", description: "A compact shoulder sequence that keeps the neck and joints clear.", lesson: 6,
    steps: [["1 min", "Warm the upper back with broad strokes", 6], ["3 min", "Circle soft shoulder muscle", 6], ["1 min", "Use a gentle palm hold", 6], ["1 min", "Release and ask how it feels", 6]],
    safety: "Stay on soft muscle. Never press hard on the spine, collarbone, shoulder joint, or neck."
  },
  {
    title: "Beginner Full Routine", time: "10 min", tag: "Course finish", description: "A repeatable flow that combines the skills from the whole course.", lesson: 13,
    steps: [["2 min", "Arrive and warm up", 13], ["5 min", "Choose one technique and stay focused", 13], ["1 min", "Check pressure and comfort", 13], ["2 min", "Lightly close the routine", 13]],
    safety: "A shorter comfortable routine is always better than pushing through. Massage is not medical treatment."
  }
];

const libraryItems = [
  ["Gentle gliding", "Long, smooth strokes for beginning, connecting, and finishing.", "→", 3, "movement", "Any broad area", "Beginner"],
  ["Small circles", "A patient circular movement for broad, comfortable muscle.", "◌", 4, "movement", "Shoulders · back · limbs", "Beginner"],
  ["Beginner kneading", "A shallow lift-and-release that never pinches or digs.", "≈", 5, "movement", "Soft muscle", "Beginner"],
  ["Still contact", "A quiet hand that helps someone settle before movement.", "○", 1, "movement", "Any comfortable area", "Beginner"],
  ["Palm support", "Broad contact that keeps pressure spread and easy to adjust.", "☼", 2, "movement", "Any comfortable area", "Beginner"],
  ["Light finger strokes", "A soft, unhurried touch for hands, feet, and scalp.", "✺", 9, "movement", "Head · hands · feet", "Beginner"]
];

const areaInfo = [
  { title: "Head", icon: "✺", description: "Light scalp contact with finger pads and no hair tugging.", techniques: "Small circles · still contact", routine: "Head & Scalp · 5 min", lesson: 9, safety: "Stop for new or unusual headache symptoms." },
  { title: "Neck", icon: "○", description: "Supportive contact only; keep the head neutral and still.", techniques: "Still contact · light circles", routine: "Shoulders first · 6 min", lesson: 8, safety: "Never twist, crack, pull, or force the neck." },
  { title: "Shoulders", icon: "⌁", description: "Broad strokes and small circles over soft shoulder muscle.", techniques: "Gliding · circles · kneading", routine: "Shoulders · 6 min", lesson: 6, safety: "Keep the spine, collarbone, shoulder joint, and neck clear." },
  { title: "Back", icon: "▱", description: "A broad path beside the spine, never directly on it.", techniques: "Gliding · circles", routine: "10-Minute Relaxation · 10 min", lesson: 7, safety: "Avoid injury, swelling, unexplained pain, and direct spine pressure." },
  { title: "Arms", icon: "↗", description: "Support the limb before tracing the forearm with broad contact.", techniques: "Gliding · palm support", routine: "Hands & Arms · 5 min", lesson: 10, safety: "Stop for tingling, numbness, or sharp pain." },
  { title: "Hands", icon: "☼", description: "Cup the hand and move across the palm without pulling fingers.", techniques: "Palm circles · light strokes", routine: "Hands & Arms · 5 min", lesson: 10, safety: "Keep the wrist neutral and never force a finger joint." },
  { title: "Legs", icon: "↕", description: "Long strokes on soft muscle while the knee and ankle stay supported.", techniques: "Gliding · circles", routine: "Legs lesson · 7 min", lesson: 11, safety: "Do not massage hot, red, swollen, or acutely painful areas." },
  { title: "Feet", icon: "⌂", description: "Small, easy-to-adjust movements across the sole and heel.", techniques: "Palm circles · light strokes", routine: "Feet lesson · 6 min", lesson: 12, safety: "Avoid broken skin, reduced sensation, and forceful toe movement." }
];

function shell(content, active) {
  const nav = [["home", "Home"], ["course", "Course"], ["techniques", "Techniques"], ["body-areas", "Body areas"], ["routines", "Routines"], ["safety", "Safety"], ["progress", "Progress"], ["reference", "Reference"]];
  const links = nav.map(function (item) {
    return "<a class=\"nav-link " + (active === item[0] ? "active" : "") + "\" href=\"#/" + item[0] + "\">" + item[1] + "</a>";
  }).join("");
  return "<header class=\"shell-header\"><a class=\"brand\" href=\"#/home\" aria-label=\"Kindred Touch home\"><span class=\"brand-mark\"><span aria-hidden=\"true\">k</span></span><span class=\"brand-text\">kindred <em>touch</em></span></a><button class=\"menu-toggle\" type=\"button\" aria-label=\"Open navigation\" aria-controls=\"main-nav\" aria-expanded=\"false\">☰</button><nav class=\"main-nav\" id=\"main-nav\" aria-label=\"Main navigation\">" + links + "</nav></header><main id=\"main-content\" class=\"page-wrap\">" + content + "</main><footer class=\"footer\"><div class=\"footer-inner\"><strong>kindred touch</strong><span>Learn slowly. Listen closely. Keep it comfortable.</span></div></footer>";
}

function goalCard(icon, title, text, href, tone) {
  return "<a class=\"goal-card " + (tone || "") + "\" href=\"" + href + "\"><span class=\"goal-icon\">" + icon + "</span><span><strong>" + title + "</strong><small>" + text + "</small></span><b aria-hidden=\"true\">→</b></a>";
}

function home() {
  const started = progress.completed.length > 0 || progress.current > 1;
  const next = currentLesson();
  const mainHref = started ? "#/lesson/" + next.id : "#/course";
  const mainLabel = started ? "Continue learning" : "Start learning";
  const continuePanel = started ? "<section class=\"continue-panel\"><div><p class=\"eyebrow\">Your next small step</p><h2>Lesson " + String(next.id).padStart(2, "0") + " · " + esc(next.title) + "</h2><p>" + esc(next.short) + "</p>" + progressBar() + "</div><a class=\"button\" href=\"#/lesson/" + next.id + "\">Continue learning <span aria-hidden=\"true\">→</span></a></section>" : "";
  const goals = [
    goalCard("01", "I’m completely new", "Start with the course map", "#/course", "sage"),
    goalCard("◷", "I have 5 minutes", "Follow a short routine", "#/routines", "sun"),
    goalCard("⌁", "A specific body area", "Browse the body explorer", "#/body-areas", "coral"),
    goalCard("→", "Practice a technique", "Open the quick reference", "#/techniques", "blue"),
    goalCard("✓", "I want to review safety", "See clear boundaries", "#/safety", "cream"),
    goalCard("↺", "Remember yesterday’s lesson", "Check your progress", "#/progress", "sage")
  ].join("");
  const markup = `
    <div class="page">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">A calm course in caring touch</p>
          <h1>Learn massage with more confidence and less guesswork.</h1>
          <p class="lede">A beginner-friendly learning path for thoughtful, comfortable massage. Learn one small skill, practice safely, and build a routine that listens.</p>
          <div class="button-row">
            <a class="button primary" href="${mainHref}">${mainLabel} <span aria-hidden="true">→</span></a>
            <a class="button" href="#/safety">Read the safety guide</a>
          </div>
          <p class="hero-note"><span aria-hidden="true">✓</span> Educational guidance—not medical treatment.</p>
        </div>
        <div class="hero-art" aria-label="Massage lesson preview"></div>
      </section>
      <div class="stat-strip" aria-label="Course at a glance">
        <div class="stat"><strong>13</strong><span>guided lessons</span></div>
        <div class="stat"><strong>~75 min</strong><span>learning path</span></div>
        <div class="stat"><strong>Beginner</strong><span>friendly pace</span></div>
        <div class="stat"><strong>Local</strong><span>progress saved privately</span></div>
      </div>
      <section class="today-section">
        <div class="section-heading">
          <div><p class="eyebrow">Choose your starting point</p><h2>What do you want to learn today?</h2></div>
          <p>Go straight to the useful part. You can always return to the guided course later.</p>
        </div>
        <div class="goal-grid">${goals}</div>
      </section>
      ${continuePanel}
      <section>
        <div class="section-heading">
          <div><p class="eyebrow">How it works</p><h2>Learn by doing, not by guessing.</h2></div>
          <p>Each lesson pairs a safe setup, an instructional visual, a short practice, and a clear next step.</p>
        </div>
        <div class="feature-grid">
          <article class="feature-card"><div class="feature-icon" aria-hidden="true">01</div><h3>One skill at a time</h3><p>Short lessons turn a big topic into a sequence you can remember and repeat.</p></article>
          <article class="feature-card"><div class="feature-icon" aria-hidden="true">⌁</div><h3>See the movement</h3><p>Lesson-specific photographs show hand placement; movement cues trace the intended path.</p></article>
          <article class="feature-card"><div class="feature-icon" aria-hidden="true">✓</div><h3>Check your confidence</h3><p>Practice for a minute, check your understanding, and mark each lesson when it feels clear.</p></article>
        </div>
      </section>
      <section class="safety-callout">
        <div class="callout-icon" aria-hidden="true">!</div>
        <div><h3>A gentle reminder before you begin</h3><p>Stop for sharp pain, numbness, tingling, dizziness, faintness, unusual weakness, difficulty breathing, or any sudden concerning symptom. Massage should never be forceful.</p></div>
      </section>
    </div>`;
  return shell(markup, "home");
}

function course() {
  const next = currentLesson();
  const nextText = isComplete(next.id) ? "You’ve reached the end of the path. Revisit any lesson or practice the complete routine." : "Your next recommended step is ready whenever you are.";
  return shell("<div class=\"page\"><div class=\"course-top\"><div><p class=\"eyebrow\">The guided path</p><h1>Course map</h1><p class=\"lede\">Start at the top and build a small, safe toolkit. Every lesson ends with practice and a clear next step.</p></div><div class=\"course-stat\"><strong>" + progress.completed.length + " / " + lessons.length + "</strong><span>lessons completed</span>" + progressBar(true) + "</div></div><section class=\"course-next\"><div class=\"course-next-mark\">" + String(next.id).padStart(2, "0") + "</div><div><p class=\"eyebrow\">Next recommended</p><h2>" + esc(next.title) + "</h2><p>" + nextText + "</p></div><a class=\"button primary small\" href=\"#/lesson/" + next.id + "\">" + (isComplete(next.id) ? "Review lesson" : "Continue") + " →</a></section><div class=\"lesson-list\">" + lessons.map(function (lesson) { return "<article class=\"lesson-card " + (isComplete(lesson.id) ? "complete" : "") + "\"><div class=\"lesson-number\">" + String(lesson.id).padStart(2, "0") + "</div><div><h3>" + esc(lesson.title) + "</h3><p>" + esc(lesson.short) + "</p><div class=\"lesson-meta\"><span>" + esc(lesson.level) + "</span><span>" + lesson.time + " min</span></div></div><div>" + statusMarkup(lesson) + lessonButton(lesson) + "</div></article>"; }).join("") + "</div><div class=\"button-row\" style=\"margin-top:26px\"><a class=\"button subtle\" href=\"#/progress\">View your progress</a><a class=\"button\" href=\"#/safety\">Review safety</a></div></div>", "course");
}

const quickPracticeGuides = {
  1: {
    category: "Foundation", title: "Start with permission", skill: "Consent & first contact", imageAlt: "A therapist and fully clothed client make eye contact during a check-in before massage.",
    goal: "Begin with clear permission and a touch that feels easy to receive.",
    steps: ["Ask which area and pressure feel okay.", "Wait for a clear yes, then rest one warm palm lightly.", "Pause and ask if the contact feels comfortable."],
    watch: ["The person knows what you will do.", "Breathing stays easy and unhurried."],
    avoid: "Touching before permission or starting with pressure.", cue: "Ask → agree → rest lightly"
  },
  2: {
    category: "Hand foundations", title: "Prepare a relaxed hand", skill: "Relaxed palm & neutral wrist", imageAlt: "Relaxed palms lie flat on a towel, with soft fingers and straight wrists.",
    goal: "Keep the palm broad while the wrist stays in line with the forearm.",
    steps: ["Rest your palm on a towel or pillow.", "Let the fingers soften and line up your wrist.", "Shift a little weight, then release and reset."],
    watch: ["The palm stays broad and warm.", "Fingers and shoulders remain relaxed."],
    avoid: "Bending the wrist sharply or poking with a thumb.", cue: "Broad palm · straight wrist"
  },
  3: {
    category: "Core strokes", title: "Glide and return", skill: "Gentle forearm glide", imageAlt: "A therapist's palm glides along a supported forearm while the other hand steadies the wrist.",
    goal: "Make one smooth working stroke, then return with less pressure.",
    steps: ["Support the forearm and place your whole palm down.", "Glide slowly toward the elbow in one steady pass.", "Soften or lift your hand on the return."],
    watch: ["The palm stays in broad contact.", "The return feels lighter than the working stroke."],
    avoid: "Rushing, dragging back with equal pressure, or pressing through pain.", cue: "Smooth glide → lighter return"
  },
  4: {
    category: "Core strokes", title: "Circle slowly", skill: "Small shoulder circles", imageAlt: "A therapist's relaxed palm rests on the back shoulder muscle of a seated, clothed client.",
    goal: "Move the skin gently with a small, slow circle over soft muscle.",
    steps: ["Place your broad palm on the back of the shoulder.", "Make a small circle over soft muscle; count two seconds.", "Keep the wrist loose and ask how it feels."],
    watch: ["The circle stays small and even.", "The shoulder stays soft; the client does not brace."],
    avoid: "Circling on the neck, collarbone, bony tip, or a tender spot.", cue: "Small, slow circles ↻"
  },
  5: {
    category: "Core strokes", title: "Lift and release", skill: "Gentle lift-and-release", imageAlt: "A therapist gently gathers soft calf muscle with a relaxed hand while the leg is supported.",
    goal: "Move a little soft tissue without pinching or squeezing hard.",
    steps: ["Rest your palm and finger pads on soft calf muscle.", "Gather and lift only a small amount of tissue.", "Release smoothly, then move to a nearby spot."],
    watch: ["The movement is shallow and rhythmic.", "The skin is not pinched between fingertips."],
    avoid: "A deep squeeze, pinching, or working over a joint or injury.", cue: "Gather → tiny lift → release"
  },
  6: {
    category: "Body-area skills", title: "Warm the shoulders", skill: "Broad shoulder contact", imageAlt: "Two relaxed palms rest over the shoulder muscles of a clothed client, away from the neck.",
    goal: "Stay on soft shoulder muscle and keep the neck and joints clear.",
    steps: ["Invite the person to sit supported with arms resting.", "Place open palms on the upper shoulder muscles.", "Glide broadly, then pause and check comfort."],
    watch: ["Hands stay on soft muscle behind the collarbone.", "The person can breathe and let their shoulders drop."],
    avoid: "Pressing the neck, collarbone, spine, or shoulder joint.", cue: "Broad contact · neck stays clear"
  },
  7: {
    category: "Body-area skills", title: "Follow a safe back path", skill: "Upper-back path beside the spine", imageAlt: "Two flat hands rest on broad back muscles on either side of the spine over clothing.",
    goal: "Travel up and outward over broad muscle, never directly on the spine.",
    steps: ["Place both broad palms beside the spine.", "Glide up and outward toward the shoulders.", "Return with a lighter touch and stay on the surface."],
    watch: ["Both hands remain beside the bony spine.", "The path is broad, slow, and easy to follow."],
    avoid: "Pressing on the spine or hooking under the shoulder blade.", cue: "Beside spine → outward → lighter return"
  },
  8: {
    category: "Body-area skills", title: "Support the skull base", skill: "Still support at the skull base", imageAlt: "A therapist cradles the base of a reclined client's skull while the head stays neutral and supported.",
    goal: "Offer light, still support without moving the head or pressing the throat.",
    steps: ["Keep the head resting in a neutral position.", "Cradle below the skull with soft finger pads.", "Hold lightly, then lift your hands away slowly."],
    watch: ["The head stays still and supported.", "Contact remains gentle at the back of the skull."],
    avoid: "Turning, pulling, tractioning, or pressing the front or side of the throat.", cue: "Still support · no turning or pulling"
  },
  9: {
    category: "Body-area skills", title: "Make gentle scalp circles", skill: "Scalp circles with finger pads", imageAlt: "Relaxed fingertips rest in the scalp of a reclined client without pulling the hair.",
    goal: "Move the scalp gently with finger pads while the hair stays relaxed.",
    steps: ["Set relaxed finger pads lightly into the hair.", "Make tiny circles that move the scalp, not the strands.", "Lift and reposition without tugging."],
    watch: ["Nails stay away from the skin.", "Hair does not pull and pressure stays light."],
    avoid: "Scratching with nails, gripping hair, or pressing hard at the temples.", cue: "Finger-pad circles ↻ · no tugging"
  },
  10: {
    category: "Body-area skills", title: "Support, glide, and cup", skill: "Supported forearm and hand", imageAlt: "One hand supports a client's wrist while the other glides along the forearm toward the hand.",
    goal: "Support the limb before moving; keep the wrist and fingers easy.",
    steps: ["Rest the forearm and support the wrist with one hand.", "Glide your other palm along the forearm in a smooth pass.", "Cup the hand gently; let the fingers stay free."],
    watch: ["The wrist stays neutral and supported.", "The fingers are not pulled or forced."],
    avoid: "Pulling the hand, bending the wrist, or tugging individual fingers.", cue: "Support → glide → cup the hand"
  },
  11: {
    category: "Body-area skills", title: "Glide the supported calf", skill: "Supported calf glide", imageAlt: "An open palm glides over a clothing-covered calf while the other hand supports the ankle.",
    goal: "Use a long, light stroke over soft calf muscle while the leg is supported.",
    steps: ["Support the leg so the calf can relax.", "Glide your open palm along the soft calf toward the knee.", "Ease pressure on the return and keep clear of joints."],
    watch: ["The knee and ankle remain comfortable.", "The palm travels smoothly without a deep press."],
    avoid: "Pressing behind the knee or working over swelling, heat, or acute pain.", cue: "Long calf stroke → lighter return"
  },
  12: {
    category: "Body-area skills", title: "Massage the sole gently", skill: "Supported sole circles", imageAlt: "One hand supports the heel as the broad pad of the other thumb makes gentle contact across the sole; the toes stay relaxed.",
    goal: "Anchor the heel, use a broad thumb pad on the sole, and keep the toes free.",
    steps: ["Rest the ankle on a pillow and cup the heel.", "Use the broad thumb pad—not its tip—on the sole.", "Make a small, light circle and check sensitivity."],
    watch: ["The heel stays supported and toes stay free.", "The thumb stays broad; pressure remains light."],
    avoid: "Poking with the thumb tip, pulling toes, or pressing hard on a sensitive or injured foot.", cue: "Anchor heel · broad thumb pad circles · toes free"
  },
  13: {
    category: "Routine integration", title: "Close a calm routine", skill: "A calm 10-minute flow", imageAlt: "A fully clothed client and therapist sit facing one another for a calm end-of-routine check-in.",
    goal: "Join familiar skills with a clear check-in and a gentle finish.",
    steps: ["Arrive and agree on one comfortable focus area.", "Use one familiar stroke for a few minutes; check in once.", "Slow down, release contact, and ask how they feel."],
    watch: ["The pace stays unhurried and easy to pause.", "The routine ends with a clear check-in."],
    avoid: "Trying to cover every body area or continuing when comfort changes.", cue: "Arrive → one focus → check in → close"
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
  { id: "scalp-gliding", group: "scalp", title: "Scalp gliding", image: "scalp-gliding.webp", alt: "Therapist's relaxed finger pads contact the front scalp and begin a gentle glide toward the crown.", how: ["Set relaxed finger pads at the hairline.", "Glide slowly toward the crown.", "Lift to reset; keep hair untugged."], pressure: "Light, comfortable contact.", watch: "Scalp shifts softly; hair stays easy.", avoid: "Nails, friction, or pulling strands.", duration: 45, motion: [{ d: "M720 360 C715 325 710 288 710 248" }] },
  { id: "small-circles", group: "scalp", title: "Small scalp circles", image: "scalp-small-circles.webp", alt: "Several relaxed fingertip pads rest on the side scalp for small, controlled circles.", how: ["Place two or three finger pads.", "Make tiny circles in one spot.", "Lift and move to a nearby area."], pressure: "Light; no digging.", watch: "Skin moves gently under the pads.", avoid: "Scratching or dragging hair.", duration: 45, motion: [{ d: "M600 430 C570 395 610 365 640 390 C670 415 645 450 615 445 C590 442 585 420 600 405", className: "motion-loop" }] },
  { id: "crown-circles", group: "scalp", title: "Crown circles", image: "scalp-crown-circles.webp", alt: "Therapist's soft finger pads contact the top-center crown of a supported head.", how: ["Find the top-center crown.", "Use two or three finger pads for tiny circles.", "Release and shift to another point."], pressure: "Light and steady.", watch: "The head remains settled on support.", avoid: "Pressing down or pulling hair.", duration: 45, motion: [{ d: "M710 590 C680 555 715 525 748 548 C780 570 760 610 730 612 C700 614 690 588 706 567", className: "motion-loop" }] },
  { id: "side-circles", group: "scalp", title: "Side-of-head circles", image: "scalp-side-circles.webp", alt: "Relaxed fingertips make a small circle on the side scalp above the ear.", how: ["Place finger pads above the ear.", "Make small, slow circles in place.", "Move around the side scalp gently."], pressure: "Light finger-pad contact.", watch: "The jaw and shoulders stay relaxed.", avoid: "Pressing into the ear or temple.", duration: 45, motion: [{ d: "M470 420 C440 385 480 355 510 380 C540 405 515 440 485 435 C460 432 455 410 470 395", className: "motion-loop" }] },
  { id: "scalp-lifting", group: "scalp", title: "Scalp lifting", image: "scalp-lifting.webp", alt: "Relaxed finger pads make a tiny sideways shift on the scalp through short curls without lifting the hair.", how: ["Set soft finger pads on the scalp.", "Shift the skin a very small amount.", "Release; do not lift or grip hair."], pressure: "Very light; small movement only.", watch: "Scalp shifts without strands pulling.", avoid: "Gripping, tugging, or pinching hair.", duration: 45, motion: [{ d: "M555 455 C595 438 645 438 687 455" }, { d: "M685 488 C645 502 600 502 560 488", className: "motion-path-return" }] },
  { id: "fingertip-tapping", group: "scalp", title: "Fingertip tapping", image: "scalp-fingertip-tapping.webp", alt: "Relaxed fingertips lightly tap across the upper scalp while the other hand hovers softly.", how: ["Let fingertips curve and soften.", "Tap lightly across one small area.", "Keep an easy, unhurried rhythm."], pressure: "Feather-light; no impact.", watch: "Taps feel soft and predictable.", avoid: "Striking with stiff fingers or nails.", duration: 45, motion: [{ d: "M585 335 C600 322 615 322 630 335", className: "motion-tap", arrow: false }, { d: "M655 335 C670 322 685 322 700 335", className: "motion-tap", arrow: false }, { d: "M725 335 C740 322 755 322 770 335", className: "motion-tap", arrow: false }] },
  { id: "fingertip-raking", group: "scalp", title: "Gentle fingertip raking", image: "scalp-fingertip-raking.webp", alt: "Relaxed, curved finger pads move lightly through the hair toward the crown with nails lifted away from the skin.", how: ["Curve and relax the fingertips.", "Make one light pass through the hair.", "Keep nails lifted away from skin."], pressure: "Light enough to avoid scalp drag.", watch: "Hair separates easily; no snagging.", avoid: "Scratching, snagging, or pulling.", duration: 45, motion: [{ d: "M790 360 C740 340 685 345 640 380" }] },
  { id: "forehead-gliding", group: "front", title: "Forehead gliding", image: "scalp-forehead-gliding.webp", alt: "Soft fingers glide outward across the forehead above the brows, well away from the closed eyes.", how: ["Place soft fingers above the brows.", "Glide from center outward slowly.", "Stay clear of eyelids and eyes."], pressure: "Feather-light.", watch: "Eyes remain untouched and relaxed.", avoid: "Pressing into eyes or eyelids.", duration: 45, motion: [{ d: "M500 350 C600 325 705 325 820 345" }] },
  { id: "hairline-massage", group: "front", title: "Hairline massage", image: "scalp-hairline-massage.webp", alt: "Fingertips trace the hairline gently from the forehead toward one temple.", how: ["Set finger pads at the hairline.", "Follow the curve slowly toward one side.", "Lift and repeat on the other side."], pressure: "Light fingertip touch.", watch: "The path stays on the hairline.", avoid: "Rubbing brows or pulling hair.", duration: 45, motion: [{ d: "M590 290 C665 285 745 305 815 350" }] },
  { id: "temple-circles", group: "front", title: "Temple circles", image: "scalp-temple-circles.webp", alt: "Two soft fingertips make a very small circle at the temple outside the eye socket.", how: ["Use two or three fingertips outside the eye.", "Make tiny, slow circles.", "Ease off immediately if sensitive."], pressure: "Very light.", watch: "The eye socket stays untouched.", avoid: "Pressure on eyes, brow, or tender spots.", duration: 45, motion: [{ d: "M370 430 C345 402 377 380 401 400 C426 420 405 448 382 446 C361 444 357 424 370 408", className: "motion-loop" }] },
  { id: "behind-ear", group: "around", title: "Behind-the-ear massage", image: "scalp-behind-ear.webp", alt: "One or two finger pads make a tiny light circle in the soft area behind the outer ear.", how: ["Locate the soft area behind the outer ear.", "Make a tiny circle with one or two pads.", "Keep the ear opening clear."], pressure: "Very light.", watch: "The ear and head remain still.", avoid: "Pushing the ear or entering the ear canal.", duration: 45, motion: [{ d: "M620 450 C598 427 624 407 645 424 C667 441 648 465 628 464 C610 463 606 445 618 432", className: "motion-loop" }] },
  { id: "base-of-skull", group: "around", title: "Base-of-skull circles", image: "scalp-base-skull.webp", alt: "Hands support the neutral head while soft fingertips make tiny circles at the uppermost muscles beneath the skull edge.", how: ["Keep the head resting and neutral.", "Use soft pads at the uppermost muscles below the skull.", "Make tiny circles without moving the head."], pressure: "Very light, still support.", watch: "Head stays fully supported and still.", avoid: "Pulling, lifting, twisting, or neck manipulation.", duration: 45, motion: [{ d: "M630 610 C608 588 634 568 655 585 C677 602 658 626 638 625 C620 624 616 606 628 593", className: "motion-loop" }] },
  { id: "whole-sequence", group: "finish", title: "Whole-scalp sequence", image: "scalp-whole-sequence.webp", alt: "Both hands rest lightly at the sides of a supported head as a calm scalp sequence begins.", how: ["Move hairline → temples → sides → crown.", "Continue over the back of the scalp; keep the head still.", "Finish with two slow, light glides."], pressure: "Light and even throughout.", watch: "Check comfort between zones.", avoid: "Rushing, tugging, eyes, or neck movement.", duration: 120, motion: [{ d: "M720 365 C630 375 545 430 505 520 C470 610 500 700 575 760" }, { d: "M720 365 C810 375 895 430 935 520 C970 610 940 700 865 760" }, { d: "M575 760 C625 785 670 800 720 805 C770 800 815 785 865 760", className: "motion-path-return" }] }
];

let scalpPracticeTimer = null;
let scalpPracticeTimerOwner = null;

function formatScalpTime(seconds) {
  return String(Math.floor(seconds / 60)).padStart(2, "0") + ":" + String(seconds % 60).padStart(2, "0");
}

function stopScalpPracticeTimer(resetOwner) {
  if (scalpPracticeTimer) window.clearInterval(scalpPracticeTimer);
  scalpPracticeTimer = null;
  if (resetOwner && scalpPracticeTimerOwner && scalpPracticeTimerOwner.isConnected) {
    const owner = scalpPracticeTimerOwner;
    const card = owner.closest(".scalp-technique-card");
    const duration = Number(owner.dataset.duration) || 45;
    owner.disabled = false;
    owner.textContent = "Practice again";
    const output = card && card.querySelector(".scalp-practice-time");
    if (output) output.textContent = formatScalpTime(duration);
  }
  scalpPracticeTimerOwner = null;
}

function startScalpPracticeTimer(button) {
  stopScalpPracticeTimer(true);
  const duration = Number(button.dataset.duration) || 45;
  const card = button.closest(".scalp-technique-card");
  const output = card && card.querySelector(".scalp-practice-time");
  let remaining = duration;
  scalpPracticeTimerOwner = button;
  button.disabled = true;
  button.textContent = "Practice gently…";
  if (output) output.textContent = formatScalpTime(remaining);
  scalpPracticeTimer = window.setInterval(function () {
    remaining -= 1;
    if (output) output.textContent = formatScalpTime(Math.max(remaining, 0));
    if (remaining <= 0) {
      stopScalpPracticeTimer(false);
      button.disabled = false;
      button.textContent = "Practice again";
      if (output) output.textContent = "Done ✓";
    }
  }, 1000);
}

function scalpMotionSvg(technique) {
  const markerId = "scalp-arrow-" + technique.id;
  const paths = technique.motion.map(function (item) {
    return "<path class=\"motion-path " + (item.className || "") + "\" d=\"" + item.d + "\"" + (item.arrow === false ? "" : " marker-end=\"url(#" + markerId + ")\"") + "/>";
  }).join("");
  return "<svg class=\"scalp-motion\" viewBox=\"0 0 1448 1086\" aria-hidden=\"true\" focusable=\"false\"><defs><marker id=\"" + markerId + "\" markerWidth=\"16\" markerHeight=\"16\" markerUnits=\"userSpaceOnUse\" refX=\"13\" refY=\"8\" orient=\"auto\"><path d=\"M1 1 15 8 1 15z\" class=\"motion-arrowhead\"/></marker></defs>" + paths + "</svg>";
}

function scalpTechniqueCard(technique, index) {
  const done = Array.isArray(progress.scalpPracticeCompleted) && progress.scalpPracticeCompleted.includes(technique.id);
  const steps = technique.how.map(function (step) { return "<li>" + esc(step) + "</li>"; }).join("");
  const seconds = technique.duration;
  const initialTime = seconds >= 60 ? String(Math.floor(seconds / 60)).padStart(2, "0") + ":" + String(seconds % 60).padStart(2, "0") : "00:" + String(seconds).padStart(2, "0");
  return "<article class=\"scalp-technique-card" + (done ? " is-technique-done" : "") + "\" id=\"technique-" + technique.id + "\" data-scalp-technique=\"" + technique.id + "\"><div class=\"scalp-card-heading\"><span class=\"scalp-card-number\">" + String(index + 1).padStart(2, "0") + "</span><div><p class=\"scalp-card-group\">" + esc(technique.group === "front" ? "Face / Front" : technique.group === "around" ? "Around the head" : technique.group === "finish" ? "Finish" : "Scalp") + "</p><h4>" + esc(technique.title) + "</h4></div><span class=\"scalp-done-label\" " + (done ? "" : "hidden") + ">Practiced</span></div><button class=\"scalp-visual-enlarge\" type=\"button\" aria-label=\"Enlarge instructional visual: " + esc(technique.title) + "\"><span class=\"scalp-visual-art\"><img src=\"assets/lessons/" + technique.image + "\" alt=\"" + esc(technique.alt) + "\" width=\"1448\" height=\"1086\" loading=\"lazy\" decoding=\"async\" />" + scalpMotionSvg(technique) + "</span><span class=\"scalp-zoom-hint\">View detailed visual</span></button><div class=\"scalp-card-body\"><h5>How</h5><ol class=\"scalp-how\">" + steps + "</ol><dl class=\"scalp-cues\"><div><dt>Pressure</dt><dd>" + esc(technique.pressure) + "</dd></div><div><dt>Watch for</dt><dd>" + esc(technique.watch) + "</dd></div><div class=\"scalp-avoid\"><dt>Avoid</dt><dd>" + esc(technique.avoid) + "</dd></div></dl><div class=\"scalp-practice-controls\"><button class=\"button primary small scalp-practice-start\" type=\"button\" data-duration=\"" + seconds + "\" aria-controls=\"timer-" + technique.id + "\">Practice " + (seconds >= 60 ? Math.floor(seconds / 60) + " min" : seconds + " sec") + "</button><output class=\"scalp-practice-time\" id=\"timer-" + technique.id + "\" aria-live=\"polite\">" + initialTime + "</output><button class=\"button subtle small scalp-practice-complete\" type=\"button\" data-technique-id=\"" + technique.id + "\" " + (done ? "disabled aria-disabled=\"true\"" : "") + ">" + (done ? "Practiced ✓" : "Mark done") + "</button></div></div></article>";
}

function headScalpQuickPractice(lesson) {
  const techniquesDone = Array.isArray(progress.scalpPracticeCompleted) ? progress.scalpPracticeCompleted.length : 0;
  const completedCount = (progress.practiceCompleted || []).length;
  const sections = scalpTechniqueGroups.map(function (group) {
    const cards = scalpTechniques.filter(function (technique) { return technique.group === group.id; }).map(scalpTechniqueCard).join("");
    return "<section class=\"scalp-technique-group\" aria-labelledby=\"scalp-group-" + group.id + "\"><div class=\"scalp-group-heading\"><div><p class=\"eyebrow\">Technique set</p><h3 id=\"scalp-group-" + group.id + "\">" + esc(group.title) + "</h3></div><p>" + esc(group.intro) + "</p></div><div class=\"scalp-technique-grid\">" + cards + "</div></section>";
  }).join("");
  const done = isPracticeComplete(lesson.id);
  return "<section class=\"quick-version scalp-module\" data-quick-practice=\"9\"><div class=\"quick-practice-path\"><div><p class=\"eyebrow\">Quick practice · Head &amp; Scalp</p><p class=\"practice-count\">Skill 09 of " + lessons.length + " · " + completedCount + " lessons checked</p></div><ol class=\"practice-progression\" aria-label=\"Practice progression\"><li>Learn</li><li aria-current=\"step\">Practice</li><li>Check</li><li>Next skill</li></ol></div><header class=\"scalp-module-header\"><h2>13 gentle techniques, one small movement at a time.</h2><p>Choose a card. Study the hand placement, then try its short practice.</p><p class=\"scalp-technique-progress\" aria-live=\"polite\"><strong>" + techniquesDone + " of " + scalpTechniques.length + " techniques practiced</strong></p></header><p class=\"scalp-safety-note\"><strong>Stay gentle.</strong> Keep the head supported and still. Scalp work is not neck manipulation—never pull, twist, crack, or force the head. Keep all pressure away from the eyes.</p>" + sections + "<div class=\"scalp-module-complete\"><div><strong>Finished your chosen practices?</strong><p>Mark this lesson practice complete when the movements feel clear.</p></div><button class=\"button primary small practice-check\" type=\"button\" data-practice-id=\"9\" " + (done ? "disabled aria-disabled=\"true\"" : "") + ">" + (done ? "Lesson practice checked ✓" : "Mark lesson practice complete") + "</button><p class=\"practice-status\" aria-live=\"polite\">" + (done ? "Practice saved on this device." : "Each technique has its own timer and completion check.") + "</p></div><dialog class=\"scalp-lightbox\" aria-label=\"Enlarged Head &amp; Scalp instructional visual\"><div class=\"scalp-lightbox-head\"><strong class=\"scalp-lightbox-title\">Instructional visual</strong><button class=\"button small scalp-lightbox-close\" type=\"button\">Close</button></div><div class=\"scalp-lightbox-frame\"><div class=\"scalp-lightbox-art\"></div></div><div class=\"practice-lightbox-actions\"><button class=\"button small scalp-lightbox-zoom\" type=\"button\">Zoom in</button><span>Inspect the hand placement and movement cue.</span></div></dialog></section>";
}

function quickVersion(lesson) {
  if (lesson.id === 9) return headScalpQuickPractice(lesson);
  const guide = quickPracticeGuides[lesson.id];
  const artwork = lessonArtworkByType[lesson.visual[0]];
  const motion = practiceMotionByLesson[lesson.id] || "";
  const modalMotion = motion.replace(new RegExp("motion-arrow-" + lesson.id, "g"), "motion-arrow-" + lesson.id + "-modal");
  const next = lessons.find(function (item) { return item.id === lesson.id + 1; });
  const complete = isPracticeComplete(lesson.id);
  const completedCount = (progress.practiceCompleted || []).length;
  const instructions = guide.steps.map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("");
  const watchFor = guide.watch.map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("");
  const nextLink = next
    ? "<a class=\"button practice-next\" href=\"#/lesson/" + next.id + "\">Next skill <span aria-hidden=\"true\">→</span></a>"
    : "<a class=\"button practice-next\" href=\"#/progress\">Review progress <span aria-hidden=\"true\">→</span></a>";
  return "<section class=\"quick-version\" data-quick-practice=\"" + lesson.id + "\"><div class=\"quick-practice-path\"><div><p class=\"eyebrow\">Quick practice · " + esc(guide.category) + "</p><p class=\"practice-count\">Skill " + String(lesson.id).padStart(2, "0") + " of " + lessons.length + " · " + completedCount + " checked</p></div><ol class=\"practice-progression\" aria-label=\"Practice progression\"><li>Learn</li><li aria-current=\"step\">Practice</li><li>Check</li><li>Next skill</li></ol></div><div class=\"quick-version-head\"><div><h2>" + esc(guide.title) + "</h2><p><strong class=\"practice-skill-inline\">Skill: " + esc(guide.skill) + "</strong> · See the hand placement, then practice the small action below.</p></div><div class=\"timer\" aria-live=\"polite\">01:00</div></div><div class=\"quick-practice-grid\"><figure class=\"practice-visual\"><button class=\"practice-image-enlarge\" type=\"button\" aria-label=\"Enlarge visual: " + esc(guide.skill) + "\"><img class=\"practice-image\" src=\"assets/lessons/" + artwork.image + "\" alt=\"" + esc(guide.imageAlt) + "\" width=\"1448\" height=\"1086\" loading=\"lazy\" decoding=\"async\" />" + motion + "<span class=\"practice-enlarge-hint\">View larger <span aria-hidden=\"true\">⤢</span></span></button><figcaption><span class=\"practice-visual-label\">Visual cue</span><strong>" + esc(guide.cue) + "</strong></figcaption></figure><div class=\"practice-coach\"><div class=\"practice-brief\"><div><span>Goal</span><strong>" + esc(guide.goal) + "</strong></div></div><div class=\"practice-instructions\"><h3>What to do</h3><ol>" + instructions + "</ol></div><div class=\"practice-watch\"><h3>Watch for</h3><ul>" + watchFor + "</ul></div><div class=\"practice-avoid\"><h3>Common mistake</h3><p>" + esc(guide.avoid) + "</p></div></div></div><div class=\"quick-version-bottom\"><div class=\"quick-safety\"><span aria-hidden=\"true\">!</span><span>Keep it gentle. <strong>Comfort is the goal.</strong></span></div><div class=\"button-row practice-actions\"><button class=\"button primary small practice-start\" type=\"button\">Start 1-minute practice</button><button class=\"button subtle small practice-reset\" type=\"button\" hidden>Reset timer</button><button class=\"button small practice-check\" type=\"button\" data-practice-id=\"" + lesson.id + "\" " + (complete ? "disabled\" aria-disabled=\"true\"" : "") + ">" + (complete ? "Practice checked ✓" : "Mark practice complete") + "</button>" + nextLink + "<button class=\"button small reveal-full\" type=\"button\">Full lesson ↓</button></div></div><p class=\"practice-status\" aria-live=\"polite\">" + (complete ? "Practice saved on this device." : "Start when you are ready; check it off when the movement feels clear.") + "</p><dialog class=\"practice-lightbox\" aria-label=\"Enlarged practice visual\"><div class=\"practice-lightbox-head\"><strong>" + esc(guide.skill) + "</strong><button class=\"button small practice-lightbox-close\" type=\"button\">Close</button></div><div class=\"practice-lightbox-frame\"><div class=\"practice-lightbox-art\"><img class=\"practice-lightbox-image\" src=\"assets/lessons/" + artwork.image + "\" alt=\"" + esc(guide.imageAlt) + "\" width=\"1448\" height=\"1086\" decoding=\"async\" />" + modalMotion + "</div></div><div class=\"practice-lightbox-actions\"><button class=\"button small practice-zoom\" type=\"button\">Zoom in</button><span>Use the enlarged view to inspect hand placement and movement.</span></div></dialog></section>";
}

function fullLesson(lesson) {
  const positions = lesson.position.map(function (item, index) { return "<div class=\"position-item\"><strong>" + (index === 0 ? "A" : "B") + "</strong><div><strong>" + esc(item[0]) + "</strong><p>" + esc(item[1]) + "</p></div></div>"; }).join("");
  const steps = lesson.steps.map(function (step) { return "<div class=\"step\"><div><h3>" + esc(step[0]) + "</h3><p>" + esc(step[1]) + "</p></div></div>"; }).join("");
  return "<details class=\"full-lesson\" id=\"full-lesson\"><summary><span><b>Full lesson</b><small>Setup, technique, pressure, and safety details</small></span><strong>Show details</strong></summary><div class=\"full-lesson-body\"><section class=\"lesson-section\"><h2>What you will learn</h2><p class=\"section-intro\">" + esc(lesson.learn) + "</p><div class=\"two-column\"><div class=\"info-card\"><h3>Before you start</h3><ul>" + lesson.before.map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("") + "</ul></div><div class=\"info-card\"><h3>Make it comfortable</h3><p>Keep checking the person’s breathing, body language, and words. A pause is always useful—not a failure.</p></div></div></section><section class=\"lesson-section\"><h2>Position</h2><div class=\"position-grid\"><div class=\"position-list\">" + positions + "</div><div class=\"info-card\"><h3>Find your neutral</h3><p>Can you breathe freely, keep your shoulders down, and move without reaching? If not, adjust the setup before your hands begin.</p></div></div></section><section class=\"lesson-section\"><h2>How to do it</h2><div class=\"step-list\">" + steps + "</div></section><section class=\"lesson-section\"><h2>Pressure guide</h2><div class=\"pressure-grid\"><div class=\"pressure gentle\"><h3>🟢 Gentle</h3><p>" + esc(lesson.pressure[0]) + "</p></div><div class=\"pressure moderate\"><h3>🟡 Moderate</h3><p>" + esc(lesson.pressure[1]) + "</p></div><div class=\"pressure stop\"><h3>🔴 Too much</h3><p>" + esc(lesson.pressure[2]) + "</p></div></div></section><section class=\"lesson-section\"><h2>Notice the difference</h2><div class=\"feel-grid\"><div class=\"feel-card good\"><h3>What it should feel like</h3><p>" + esc(lesson.feel) + "</p></div><div class=\"feel-card mistake\"><h3>Common beginner mistakes</h3><ul class=\"mistake-list\">" + lesson.mistakes.map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("") + "</ul></div></div></section><section class=\"lesson-section\"><div class=\"safety-callout\"><div class=\"callout-icon\">!</div><div><h3>Safety for this lesson</h3><p>" + esc(lesson.safety) + "</p></div></div></section></div></details>";
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
    return "<article class=\"reference-card enhanced-reference-card\" data-category=\"" + item[4] + "\" data-search=\"" + esc((item[0] + " " + item[1] + " " + item[5]).toLowerCase()) + "\"><div><div class=\"ref-icon\">" + item[2] + "</div><div class=\"reference-card-meta\"><span>" + item[6] + "</span><span>" + item[5] + "</span></div><h3>" + esc(item[0]) + "</h3><p>" + esc(item[1]) + "</p></div><a class=\"ref-link\" href=\"#/lesson/" + item[3] + "\">Open lesson →</a></article>";
  }).join("");
  return shell("<div class=\"page\"><div class=\"reference-hero\"><div><p class=\"eyebrow\">Fast reference</p><h1>Techniques</h1><p class=\"lede\">Find one movement quickly, then open its lesson for setup, boundaries, and practice.</p></div><div class=\"library-toolbar\"><label class=\"search-box\"><span class=\"sr-only\">Search techniques</span><input id=\"technique-search\" type=\"search\" placeholder=\"Search movements or areas\" /></label><label class=\"filter-label\"><span>Show</span><select id=\"technique-filter\"><option value=\"all\">All techniques</option><option value=\"movement\">Core movements</option></select></label></div></div><div class=\"reference-grid\" id=\"reference-grid\">" + cards + "</div></div>", "techniques");
}

function areas() {
  const cards = areaInfo.map(function (area) {
    return "<article class=\"area-explorer-card\"><div class=\"area-explorer-top\"><span class=\"area-icon\">" + area.icon + "</span><div><h2>" + esc(area.title) + "</h2><p>" + esc(area.description) + "</p></div></div><div class=\"area-detail\"><span class=\"detail-label\">Try</span><strong>" + esc(area.techniques) + "</strong></div><div class=\"area-detail\"><span class=\"detail-label\">Routine</span><strong>" + esc(area.routine) + "</strong></div><p class=\"area-safety\"><span>!</span>" + esc(area.safety) + "</p><a class=\"button small\" href=\"#/lesson/" + area.lesson + "\">Open lesson →</a></article>";
  }).join("");
  return shell("<div class=\"page\"><p class=\"eyebrow\">Find a comfortable starting place</p><h1>Body areas</h1><p class=\"lede\" style=\"margin-bottom:34px\">Choose an area to see a beginner technique, a short routine, a relevant lesson, and the safety boundary in one glance.</p><div class=\"area-explorer-grid\">" + cards + "</div></div>", "body-areas");
}

function routineCard(routine) {
  return "<article class=\"routine-card-enhanced\"><div class=\"routine-card-top\"><div><span class=\"routine-tag\">" + routine.tag + "</span><h2>" + routine.title + "</h2></div><strong class=\"routine-time-large\">" + routine.time + "</strong></div><p>" + routine.description + "</p><ol class=\"routine-step-list\">" + routine.steps.map(function (step) { return "<li><span>" + step[0] + "</span><a href=\"#/lesson/" + step[2] + "\">" + esc(step[1]) + " <b aria-hidden=\"true\">↗</b></a></li>"; }).join("") + "</ol><div class=\"routine-safety\"><span>!</span>" + routine.safety + "</div></article>";
}

function routines() {
  return shell("<div class=\"page\"><div class=\"reference-hero routine-heading\"><div><p class=\"eyebrow\">Follow along, no planning needed</p><h1>Quick routines</h1><p class=\"lede\">Short, practical sequences for everyday use. Each step links back to the lesson that teaches it.</p></div><a class=\"button subtle\" href=\"#/safety\">Safety first →</a></div><div class=\"routine-stack\">" + routineData.map(routineCard).join("") + "</div></div>", "routines");
}

function reference() {
  return shell("<div class=\"page\"><p class=\"eyebrow\">Your quick index</p><h1>Reference</h1><p class=\"lede\" style=\"margin-bottom:34px\">Jump to the kind of help you need today. The guided course remains the best place to learn a new skill from the beginning.</p><div class=\"reference-hub-grid\"><a class=\"reference-hub-card sage\" href=\"#/techniques\"><span>→</span><strong>Techniques</strong><p>Find a movement by name and open its lesson.</p><b>Browse movements →</b></a><a class=\"reference-hub-card coral\" href=\"#/body-areas\"><span>⌁</span><strong>Body areas</strong><p>Choose a body area and see a safe starting point.</p><b>Explore body areas →</b></a><a class=\"reference-hub-card sun\" href=\"#/routines\"><span>◷</span><strong>Quick routines</strong><p>Follow a 3-, 5-, or 10-minute sequence.</p><b>Choose a routine →</b></a><a class=\"reference-hub-card blue\" href=\"#/safety\"><span>!</span><strong>Safety</strong><p>Review the stop signs and boundaries at a glance.</p><b>Review safety →</b></a></div><section class=\"reference-callout\"><div><p class=\"eyebrow\">Want the full learning path?</p><h2>Start with lesson 1, then come back here anytime.</h2></div><a class=\"button primary\" href=\"#/course\">Open the course map →</a></section></div>", "reference");
}

function safety() {
  return shell("<div class=\"page\"><section class=\"safety-hero\"><p class=\"eyebrow\" style=\"color:var(--sun)\">The safety boundary</p><h1>Comfort is the skill.</h1><p>Kindred Touch is educational guidance for gentle, non-medical massage. It does not diagnose, cure, or treat medical conditions. When in doubt, pause and ask an appropriate health professional.</p></section><section class=\"safety-at-a-glance\"><div><strong>Stop</strong><span>sharp or severe pain</span></div><div><strong>Stop</strong><span>numbness or tingling</span></div><div><strong>Stop</strong><span>dizziness or faintness</span></div><div><strong>Ask first</strong><span>injury, surgery, or a condition</span></div></section><div class=\"safety-grid\"><section class=\"safety-panel\"><h2>Stop right away for</h2><div class=\"stop-list\"><div class=\"stop-item\">Sharp or severe pain</div><div class=\"stop-item\">Numbness or tingling</div><div class=\"stop-item\">Dizziness or faintness</div><div class=\"stop-item\">Unusual weakness</div><div class=\"stop-item\">Difficulty breathing</div><div class=\"stop-item\">Any sudden concerning symptom</div></div></section><section class=\"safety-panel\"><h2>Ask for advice first</h2><ul><li>There is an injury, unexplained severe pain, or recent surgery.</li><li>A person has a medical condition, unusual swelling, or altered sensation.</li><li>The skin is broken, inflamed, bruised, or unusually hot or red.</li><li>You are unsure whether massage is appropriate or safe.</li></ul></section><section class=\"safety-panel\"><h2>Always keep out of bounds</h2><ul><li>Do not forcefully manipulate the spine, neck, joints, or injured areas.</li><li>Do not twist, crack, pull, or traction the neck.</li><li>Do not press directly on the spine, throat, open wounds, or acute pain.</li><li>Do not present massage as a cure or replacement for professional care.</li></ul></section><section class=\"safety-panel\"><h2>Good communication sounds like</h2><ul><li>“Is this pressure comfortable?”</li><li>“Would you like me to stay here, change direction, or pause?”</li><li>“Tell me if you feel anything sharp, numb, tingly, or unusual.”</li><li>“We can stop now—there is no need to push through.”</li></ul></section></div></div>", "safety");
}

function progressPage() {
  const completed = lessons.filter(function (lesson) { return isComplete(lesson.id); });
  const next = currentLesson();
  return shell("<div class=\"page\"><div class=\"progress-hero\"><div><p class=\"eyebrow\">Your private learning record</p><h1>Progress</h1><p class=\"lede\">Your progress stays in this browser. No account, name, or sign-in is needed.</p></div><div class=\"progress-big\"><strong>" + percentComplete() + "%</strong><span>course complete</span></div></div><div class=\"progress-track\"><span style=\"width:" + percentComplete() + "%\"></span></div><div class=\"progress-caption\"><span>" + completed.length + " of " + lessons.length + " lessons completed</span><span>Next: " + esc(next.title) + "</span></div><section class=\"progress-next\"><div><p class=\"eyebrow\">Pick up where you left off</p><h2>Lesson " + String(next.id).padStart(2, "0") + " · " + esc(next.title) + "</h2><p>" + esc(next.short) + "</p></div><a class=\"button primary\" href=\"#/lesson/" + next.id + "\">" + (completed.length ? "Continue learning" : "Start learning") + " →</a></section><div class=\"button-row\" style=\"margin:22px 0 32px\"><button class=\"button subtle reset-progress\" type=\"button\">Reset progress</button><a class=\"button\" href=\"#/course\">View course map</a></div><div class=\"lesson-list\">" + lessons.map(function (lesson) { return "<article class=\"lesson-card " + (isComplete(lesson.id) ? "complete" : "") + "\"><div class=\"lesson-number\">" + String(lesson.id).padStart(2, "0") + "</div><div><h3>" + esc(lesson.title) + "</h3><p>" + (isComplete(lesson.id) ? "Completed and ready to revisit." : esc(lesson.short)) + "</p>" + statusMarkup(lesson) + "</div><div>" + lessonButton(lesson) + "</div></article>"; }).join("") + "</div></div>", "progress");
}

function notFound() {
  return shell("<div class=\"page not-found\"><p class=\"eyebrow\">A quiet detour</p><h1>That page wandered off.</h1><p class=\"lede\" style=\"margin:0 auto 25px\">Let’s take you back to the learning path.</p><a class=\"button primary\" href=\"#/home\">Return home →</a></div>", "");
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
  const reveal = document.querySelector(".reveal-full");
  if (reveal) reveal.addEventListener("click", function () { const detail = document.querySelector(".full-lesson"); if (detail) { detail.open = true; detail.scrollIntoView({ behavior: "smooth", block: "start" }); } });
  const search = document.querySelector("#technique-search");
  const filter = document.querySelector("#technique-filter");
  function filterLibrary() {
    const query = search ? search.value.toLowerCase().trim() : "";
    const category = filter ? filter.value : "all";
    document.querySelectorAll(".enhanced-reference-card").forEach(function (card) {
      card.hidden = Boolean((query && !card.dataset.search.includes(query)) || (category !== "all" && card.dataset.category !== category));
    });
  }
  if (search) search.addEventListener("input", filterLibrary);
  if (filter) filter.addEventListener("change", filterLibrary);
  const start = document.querySelector(".practice-start");
  if (start) start.addEventListener("click", function (event) { startTimer(event.currentTarget); });
  const practiceReset = document.querySelector(".practice-reset");
  if (practiceReset) practiceReset.addEventListener("click", resetTimer);
  const quiz = document.querySelector(".quiz");
  if (quiz) quiz.addEventListener("submit", function (event) { event.preventDefault(); checkQuiz(event.currentTarget); });
}

function render() {
  if (practiceTimer) { clearInterval(practiceTimer); practiceTimer = null; }
  stopScalpPracticeTimer(false);
  const current = route();
  let html;
  if (current === "home") html = home();
  else if (current === "course") html = course();
  else if (current === "techniques") html = techniques();
  else if (current === "body-areas") html = areas();
  else if (current === "routines") html = routines();
  else if (current === "safety") html = safety();
  else if (current === "progress") html = progressPage();
  else if (current === "reference") html = reference();
  else if (/^lesson\/\d+$/.test(current)) html = lessonPage(Number(current.split("/")[1]));
  else html = notFound();
  const app = document.getElementById("app");
  app.innerHTML = html;
  if (current === "home") replaceHeroArtwork(app);
  bindEvents();
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
function bindEvents() {
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
  const practiceCheck = document.querySelector(".practice-check");
  if (practiceCheck) practiceCheck.addEventListener("click", function (event) {
    const lessonId = Number(event.currentTarget.dataset.practiceId);
    markPracticeComplete(lessonId);
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
  document.querySelectorAll(".scalp-technique-card").forEach(function (card) {
    const timer = card.querySelector(".scalp-practice-time");
    const heading = card.querySelector("h4");
    if (timer && heading) timer.setAttribute("aria-label", heading.textContent + " practice timer");
  });
  document.querySelectorAll(".scalp-practice-start").forEach(function (button) {
    button.addEventListener("click", function () { startScalpPracticeTimer(button); });
  });
  document.querySelectorAll(".scalp-practice-complete").forEach(function (button) {
    button.addEventListener("click", function () {
      const techniqueId = button.dataset.techniqueId;
      if (!Array.isArray(progress.scalpPracticeCompleted)) progress.scalpPracticeCompleted = [];
      if (!progress.scalpPracticeCompleted.includes(techniqueId)) progress.scalpPracticeCompleted.push(techniqueId);
      saveProgress();
      const card = button.closest(".scalp-technique-card");
      if (scalpPracticeTimerOwner && card.contains(scalpPracticeTimerOwner)) stopScalpPracticeTimer(true);
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
  const start = document.querySelector(".practice-start");
  if (start) start.addEventListener("click", function (event) { startTimer(event.currentTarget); });
  const practiceReset = document.querySelector(".practice-reset");
  if (practiceReset) practiceReset.addEventListener("click", resetTimer);
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
