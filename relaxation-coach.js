// Shared follow-along flow. Times are practice prompts, not pressure doses.
const coachedSessions = new Map();

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

function routineCoachedStages(routine) {
  return routine.steps.map(function (step) {
    const amount = Number.parseInt(step[0], 10);
    const seconds = step[0].includes('min') ? amount * 60 : amount;
    const artwork = lessonArtworkForId(step[2]);
    return { title: step[1], instruction: step[3], seconds, lesson: step[2], image: step[4] || artwork.image, alt: step[5] || artwork.alt };
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
    (withImage ? '<figure class="coach-stage-visual"><img src="/assets/lessons/' + esc(first.image) + '" alt="' + esc(first.alt) + '" width="1448" height="1086" loading="lazy" /><figcaption>Hand placement for the current stage · use comfortable, light contact.</figcaption></figure>' : '') +
    '<div class="coach-stage-heading"><div><p class="eyebrow coach-stage-count">Stage 1 of ' + stages.length + '</p><h3 class="coach-stage-title">' + esc(first.title) + '</h3></div><output class="coach-time" aria-live="off" aria-label="Suggested time left in current stage">' + formatScalpTime(first.seconds) + '</output></div>' +
    '<p class="coach-instruction">' + esc(first.instruction) + '</p><p class="coach-next">Next: ' + esc(stages[1] ? stages[1].title : 'Finish and check comfort') + '</p>' +
    '<p class="coach-status" role="status">Ready when you are. These times are guides; keep an easy rhythm.</p><div class="coach-actions"><button class="button primary small coach-toggle" type="button">Start guided practice</button><button class="button small coach-continue" type="button" hidden>Comfort checked · continue</button><button class="button subtle small coach-restart" type="button">Restart</button><button class="button subtle small coach-end" type="button" hidden>End practice</button></div>' +
    (withImage ? '<a class="coach-lesson-link" href="/lessons/' + first.lesson + '">Review this stage’s lesson →</a>' : '') + '</section>';
}

function routineTimelineMarkup(routine) {
  let elapsed = 0;
  return '<ol class="routine-step-list">' + routineCoachedStages(routine).map(function (stage) {
    const start = elapsed; elapsed += stage.seconds;
    return '<li><span>' + formatScalpTime(start) + '–' + formatScalpTime(elapsed) + '</span><div><a href="/lessons/' + stage.lesson + '">' + esc(stage.title) + ' ↗</a><p>' + esc(stage.instruction) + '</p></div></li>';
  }).join('') + '</ol>';
}

function relaxationEvidenceMarkup() {
  return '<section class="comfort-sources"><h2>Safety and individual comfort</h2><p>A photo cannot establish pressure or a comfortable pace. Ask the receiver; these timings are teaching prompts, not clinically validated doses or a promise of relaxation.</p><p>New one-sided leg pain and swelling need urgent assessment. If these occur with breathlessness or chest pain, call your local emergency service immediately.</p><p><a href="https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know" target="_blank" rel="noopener noreferrer">NCCIH: massage safety and evidence</a> · <a href="https://www.nhs.uk/conditions/deep-vein-thrombosis-dvt/" target="_blank" rel="noopener noreferrer">NHS: DVT symptoms and urgent help</a></p><p>For feedback on your actual hand placement and pressure, learn with a qualified massage instructor. Medical concerns need a health professional.</p></section>';
}

function stopAllCoachedSessions() {
  coachedSessions.forEach(function (session) { session.dispose(); });
  coachedSessions.clear();
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
    const status = root.querySelector('.coach-status');
    const time = root.querySelector('.coach-time');
    function clear() { if (interval !== null) window.clearInterval(interval); interval = null; }
    function updateStage() {
      const stage = stages[index];
      root.querySelector('.coach-stage-count').textContent = 'Stage ' + (index + 1) + ' of ' + stages.length;
      root.querySelector('.coach-stage-title').textContent = stage.title;
      root.querySelector('.coach-instruction').textContent = stage.instruction;
      root.querySelector('.coach-next').textContent = 'Next: ' + (stages[index + 1] ? stages[index + 1].title : 'Finish and check comfort');
      time.textContent = formatScalpTime(remaining);
      const image = root.querySelector('.coach-stage-visual img');
      if (image) { image.src = '/assets/lessons/' + stage.image; image.alt = stage.alt; }
      const link = root.querySelector('.coach-lesson-link');
      if (link) link.href = '/lessons/' + stage.lesson;
    }
    function finish(early) {
      clear(); mode = 'finished'; toggle.hidden = true; onward.hidden = true; end.hidden = true;
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
      mode = 'waiting'; toggle.hidden = true; onward.hidden = false;
      status.textContent = 'Ease the movement into light resting contact, without holding pressure. Ask “Does this still feel comfortable?” Continue when ready, or end now.';
    }
    function pause(message) {
      if (mode !== 'running') return;
      remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      clear(); mode = 'paused'; toggle.textContent = 'Resume'; time.textContent = formatScalpTime(remaining);
      status.textContent = message || 'Paused. Ease pressure off and rest your hands; resume only when both people are comfortable.';
    }
    function run() {
      coachedSessions.forEach(function (session) { if (session.key !== key) session.pause('Paused while another practice is open. Ease pressure off and rest.'); });
      mode = 'running'; toggle.hidden = false; toggle.textContent = 'Pause'; onward.hidden = true; end.hidden = false;
      status.textContent = stages[index].title + '. Slow down, keep your hand relaxed, and check comfort. Finish earlier if needed.';
      deadline = Date.now() + remaining * 1000;
      interval = window.setInterval(tick, 250);
    }
    toggle.addEventListener('click', function () { if (mode === 'running') pause(); else if (mode === 'ready' || mode === 'paused') run(); });
    onward.addEventListener('click', function () { index += 1; remaining = stages[index].seconds; updateStage(); run(); });
    root.querySelector('.coach-restart').addEventListener('click', function () {
      clear(); index = 0; remaining = stages[0].seconds; mode = 'ready'; updateStage();
      toggle.hidden = false; toggle.textContent = 'Start guided practice'; onward.hidden = true; end.hidden = true; root.classList.remove('coach-finished');
      status.textContent = 'Restarted. Ease pressure off before resetting your position; start when both people are ready.';
    });
    end.addEventListener('click', function () { finish(true); });
    coachedSessions.set(key, { key, pause, dispose: clear });
  });
}

// Prevent an unattended timer from advancing when the learner leaves the app.
document.addEventListener('visibilitychange', function () {
  if (document.hidden) coachedSessions.forEach(function (session) { session.pause('Paused while the page is hidden. Ease pressure off; resume when ready.'); });
});
