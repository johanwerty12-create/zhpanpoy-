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
    steps: [["1 min", "Settle with soft fingertip contact", 9], ["3 min", "Small circles with finger pads", 9], ["1 min", "Light temple contact and release", 9]],
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
  return "<header class=\"shell-header\"><a class=\"brand\" href=\"#/home\" aria-label=\"Kindred Touch home\"><span class=\"brand-mark\"><span>k</span></span><span class=\"brand-text\">kindred <em>touch</em></span></a><button class=\"menu-toggle\" type=\"button\" aria-label=\"Open navigation\" aria-expanded=\"false\">☰</button><nav class=\"main-nav\" aria-label=\"Main navigation\">" + links + "</nav></header><main id=\"main-content\" class=\"page-wrap\">" + content + "</main><footer class=\"footer\"><div class=\"footer-inner\"><strong>kindred touch</strong><span>Learn slowly. Listen closely. Keep it comfortable.</span></div></footer>";
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
  return shell("<div class=\"page\"><section class=\"hero\"><div class=\"hero-copy\"><p class=\"eyebrow\">A calm course in caring touch</p><h1>Learn massage with more confidence and less guesswork.</h1><p class=\"lede\">A beginner-friendly learning path for thoughtful, comfortable massage. Learn one small skill, practice safely, and build a routine that listens.</p><div class=\"button-row\"><a class=\"button primary\" href=\"" + mainHref + "\">" + mainLabel + " <span aria-hidden=\"true\">→</span></a><a class=\"button\" href=\"#/safety\">Read the safety guide</a></div><p class=\"hero-note\"><span>✓</span> Educational guidance—not medical treatment.</p></div><div class=\"hero-art\"><div class=\"art-card art-main\"><svg class='hero-illustration' viewBox='0 0 440 360' preserveAspectRatio='xMidYMid meet' role='img' aria-label='Two people sharing supportive massage touch' xmlns='http://www.w3.org/2000/svg'><ellipse cx='266' cy='313' rx='147' ry='24' fill='#6f9e82' opacity='.25'/><path d='M213 160c16-27 46-39 78-31 34 9 51 39 56 77l13 91H185l10-88c2-21 5-35 18-49z' fill='#f4f0e9'/><circle cx='286' cy='92' r='39' fill='#bd8169'/><path d='M247 92c-3-34 20-58 50-54 29 3 43 26 35 59-12-12-20-27-23-46-12 16-31 27-62 32z' fill='#2c4f43'/><path d='M224 180c-35 1-65 15-91 40' fill='none' stroke='#bd8169' stroke-width='25' stroke-linecap='round'/><circle cx='130' cy='222' r='13' fill='#bd8169'/><path d='M118 221c-16-4-29-2-42 6' fill='none' stroke='#bd8169' stroke-width='9' stroke-linecap='round'/><path d='M159 191c-3-31-22-52-48-57-24-5-47 8-55 32-9 26 5 55 30 65 28 11 59-5 73-40z' fill='#d98a6e'/><circle cx='101' cy='114' r='31' fill='#bd8169'/><path d='M70 117c-2-28 15-48 39-49 25-1 40 19 34 47-11-10-18-21-21-36-12 15-27 25-52 28z' fill='#3d6855'/><path d='M80 151c23 15 50 14 68-2' fill='none' stroke='#f2c76a' stroke-width='8' stroke-linecap='round'/><path d='M244 219c-19 39-23 64-14 91' fill='none' stroke='#bd8169' stroke-width='22' stroke-linecap='round'/><path d='M295 260c29 20 42 36 48 54' fill='none' stroke='#bd8169' stroke-width='22' stroke-linecap='round'/><path d='M164 180c27-14 56-19 83-18' fill='none' stroke='#bd8169' stroke-width='23' stroke-linecap='round'/><path d='M263 147c16 10 26 23 30 39' fill='none' stroke='#f2c76a' stroke-width='6' stroke-linecap='round' stroke-dasharray='2 12'/></svg><div class=\"art-label\"><strong>Small steps, steady hands</strong><small>Designed for first-time learners</small></div></div><div class=\"art-card art-float one\">✦</div><div class=\"art-card art-float two\">☼</div></div></section><div class=\"stat-strip\"><div class=\"stat\"><strong>13</strong><span>guided lessons</span></div><div class=\"stat\"><strong>~75 min</strong><span>learning path</span></div><div class=\"stat\"><strong>Beginner</strong><span>friendly pace</span></div><div class=\"stat\"><strong>Local</strong><span>progress saved privately</span></div></div><section class=\"today-section\"><div class=\"section-heading\"><div><p class=\"eyebrow\">Choose your starting point</p><h2>What do you want to learn today?</h2></div><p>Go straight to the useful part. You can always return to the guided course later.</p></div><div class=\"goal-grid\">" + goalCard("01", "I’m completely new", "Start with the course map", "#/course", "sage") + goalCard("◷", "I have 5 minutes", "Follow a short routine", "#/routines", "sun") + goalCard("⌁", "A specific body area", "Browse the body explorer", "#/body-areas", "coral") + goalCard("→", "Practice a technique", "Open the quick reference", "#/techniques", "blue") + goalCard("✓", "I want to review safety", "See clear boundaries", "#/safety", "cream") + goalCard("↺", "Remember yesterday’s lesson", "Check your progress", "#/progress", "sage") + "</div></section>" + continuePanel + "<section><div class=\"section-heading\"><div><p class=\"eyebrow\">How it works</p><h2>Learn by doing, not by guessing.</h2></div><p>Each lesson gives you a clear movement, a safe setup, a short practice, and a quick check before you move on.</p></div><div class=\"feature-grid\"><article class=\"feature-card\"><div class=\"feature-icon\">01</div><h3>One skill at a time</h3><p>Short lessons turn a big topic into a sequence you can actually remember and repeat.</p></article><article class=\"feature-card\"><div class=\"feature-icon\">⌁</div><h3>See the movement</h3><p>Simple diagrams show where hands go, what stays still, and how pressure should travel.</p></article><article class=\"feature-card\"><div class=\"feature-icon\">✓</div><h3>Check your confidence</h3><p>Practice for a minute, answer two questions, and mark the lesson complete when it feels clear.</p></article></div></section><section class=\"safety-callout\"><div class=\"callout-icon\">!</div><div><h3>A gentle reminder before you begin</h3><p>Stop for sharp pain, numbness, tingling, dizziness, faintness, unusual weakness, difficulty breathing, or any sudden concerning symptom. Massage should never be forceful.</p></div></section></div>", "home");
}

function course() {
  const next = currentLesson();
  const nextText = isComplete(next.id) ? "You’ve reached the end of the path. Revisit any lesson or practice the complete routine." : "Your next recommended step is ready whenever you are.";
  return shell("<div class=\"page\"><div class=\"course-top\"><div><p class=\"eyebrow\">The guided path</p><h1>Course map</h1><p class=\"lede\">Start at the top and build a small, safe toolkit. Every lesson ends with practice and a clear next step.</p></div><div class=\"course-stat\"><strong>" + progress.completed.length + " / " + lessons.length + "</strong><span>lessons completed</span>" + progressBar(true) + "</div></div><section class=\"course-next\"><div class=\"course-next-mark\">" + String(next.id).padStart(2, "0") + "</div><div><p class=\"eyebrow\">Next recommended</p><h2>" + esc(next.title) + "</h2><p>" + nextText + "</p></div><a class=\"button primary small\" href=\"#/lesson/" + next.id + "\">" + (isComplete(next.id) ? "Review lesson" : "Continue") + " →</a></section><div class=\"lesson-list\">" + lessons.map(function (lesson) { return "<article class=\"lesson-card " + (isComplete(lesson.id) ? "complete" : "") + "\"><div class=\"lesson-number\">" + String(lesson.id).padStart(2, "0") + "</div><div><h3>" + esc(lesson.title) + "</h3><p>" + esc(lesson.short) + "</p><div class=\"lesson-meta\"><span>" + esc(lesson.level) + "</span><span>" + lesson.time + " min</span></div></div><div>" + statusMarkup(lesson) + lessonButton(lesson) + "</div></article>"; }).join("") + "</div><div class=\"button-row\" style=\"margin-top:26px\"><a class=\"button subtle\" href=\"#/progress\">View your progress</a><a class=\"button\" href=\"#/safety\">Review safety</a></div></div>", "course");
}

function quickVersion(lesson) {
  const quick = [
    "Choose a supported position and relax your hands.",
    lesson.steps[0][1],
    lesson.steps[1][1],
    "Check comfort before changing pressure or direction.",
    "Stop for sharp pain, numbness, tingling, dizziness, or anything concerning."
  ];
  return "<section class=\"quick-version\"><div class=\"quick-version-head\"><div><p class=\"eyebrow\">Start here · 1 minute</p><h2>Quick practice</h2><p>Use this short version when you want to practice without rereading the full lesson.</p></div><div class=\"timer\" aria-live=\"polite\">01:00</div></div><ol class=\"quick-steps\">" + quick.map(function (item, index) { return "<li class=\"quick-step\"><span>" + String(index + 1).padStart(2, "0") + "</span><strong>" + esc(item) + "</strong></li>"; }).join("") + "</ol><div class=\"quick-version-bottom\"><div class=\"quick-safety\"><span>!</span><span>Keep it gentle. <strong>Comfort is the goal.</strong></span></div><div class=\"button-row\"><button class=\"button primary small practice-start\" type=\"button\">Start timer</button><button class=\"button subtle small practice-reset\" type=\"button\" hidden>Reset</button><button class=\"button small reveal-full\" type=\"button\">Open full lesson ↓</button></div></div></section>";
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
  if (reset) reset.addEventListener("click", function () { if (window.confirm("Reset all completed lessons? This cannot be undone.")) { progress = { completed: [], current: 1 }; saveProgress(); render(); } });
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
    menu.textContent = open ? "×" : "☰";
  });
  if (nav) nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      if (menu) { menu.setAttribute("aria-expanded", "false"); menu.textContent = "☰"; }
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
    if (window.confirm("Reset all completed lessons? This cannot be undone.")) {
      progress = { completed: [], current: 1 };
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
