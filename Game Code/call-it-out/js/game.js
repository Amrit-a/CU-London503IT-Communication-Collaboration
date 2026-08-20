/* ================================================
   CALL IT OUT — Game Logic
   503IT · Coventry University London
   ================================================ */

const Game = (() => {

  /* ---------- State ---------- */
  let state = {
    trust:       50,
    situation:   0,
    points:      0,
    stagesDone:  [],
    currentStage: null,
    currentQ:    0,
    stageCorrect: 0,
    stageWrong:  0,
    stagePoints: 0,
    answered:    false,
    hintUsed:    false,
    hintShown:   false
  };

  /* ---------- Screen ---------- */
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------- Meters ---------- */
  function updateMeters() {
    const t = Math.round(state.trust);
    const s = Math.round(state.situation);
    const p = state.points;

    ['', '2'].forEach(sfx => {
      const tp = document.getElementById('trust-pct' + sfx);
      const tb = document.getElementById('trust-bar' + sfx);
      const sp = document.getElementById('sit-pct' + sfx);
      const sb = document.getElementById('sit-bar' + sfx);
      if (tp) tp.textContent = t + '%';
      if (tb) tb.style.width = t + '%';
      if (sp) sp.textContent = s + '%';
      if (sb) sb.style.width = s + '%';
    });

    ['pts-stages', 'pts-game'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = p;
    });
  }

  /* ---------- Stage Select ---------- */
  function goToStages() {
    updateMeters();
    const list = document.getElementById('stage-list');
    list.innerHTML = '';

    STAGES.forEach((stage, i) => {
      const done   = state.stagesDone.includes(i);
      const locked = i > 0 && !state.stagesDone.includes(i - 1) && !done;

      const card = document.createElement('div');
      card.className = 'stage-card' + (locked ? ' locked' : '') + (done ? ' completed' : '');

      const badgeText  = done ? 'Done' : locked ? '🔒 Locked' : stage.difficulty;
      const badgeClass = done ? 'done' : locked ? 'locked-badge' : '';

      card.innerHTML = `
        <div class="stage-icon">${stage.icon}</div>
        <div class="stage-info">
          <div class="stage-name">${stage.name}</div>
          <div class="stage-desc">${stage.desc}</div>
        </div>
        <div class="stage-badge ${badgeClass}">${badgeText}</div>
      `;

      if (!locked) {
        card.addEventListener('click', () => startStage(i));
      }

      list.appendChild(card);
    });

    showScreen('screen-stages');
  }

  /* ---------- Start Stage ---------- */
  function startStage(idx) {
    state.currentStage  = idx;
    state.currentQ      = 0;
    state.stageCorrect  = 0;
    state.stageWrong    = 0;
    state.stagePoints   = 0;
    state.answered      = false;
    state.hintUsed      = false;
    state.hintShown     = false;

    document.getElementById('game-stage-title').textContent =
      STAGES[idx].icon + ' ' + STAGES[idx].name;

    document.getElementById('restart-alert').style.display = 'none';

    showScreen('screen-game');
    loadQuestion();
  }

  /* ---------- Load Question ---------- */
  function loadQuestion() {
    const stage = STAGES[state.currentStage];
    const q     = stage.questions[state.currentQ];

    state.answered  = false;
    state.hintShown = false;

    /* counter */
    document.getElementById('stage-tag-phone').textContent =
      stage.icon + ' ' + stage.name;
    document.getElementById('q-counter-phone').textContent =
      'Q' + (state.currentQ + 1) + ' / ' + stage.questions.length;

    /* chat bubbles */
    const chatArea = document.getElementById('chat-area');
    chatArea.innerHTML = '';
    if (q.chat) {
      q.chat.forEach(m => {
        const b = document.createElement('div');
        if (m.system) {
          b.className = 'chat-bubble system-msg';
          b.textContent = m.msg;
        } else if (m.alex) {
          b.className = 'chat-bubble from-alex';
          b.innerHTML = '<div class="sender">Alex (you)</div>' + escHtml(m.msg);
        } else {
          b.className = 'chat-bubble';
          b.innerHTML = '<div class="sender">' + escHtml(m.from) + '</div>' + escHtml(m.msg);
        }
        chatArea.appendChild(b);
      });
    }

    /* question */
    document.getElementById('q-text').textContent = q.q;

    /* choices */
    const box     = document.getElementById('choices-box');
    const letters = ['A', 'B', 'C', 'D'];
    box.innerHTML = '';
    q.choices.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice';
      btn.innerHTML =
        '<span class="choice-letter">' + letters[i] + '</span>' + escHtml(c);
      btn.addEventListener('click', () => selectAnswer(i));
      box.appendChild(btn);
    });

    /* reset UI */
    const fb = document.getElementById('feedback-box');
    fb.style.display = 'none';
    fb.className = 'feedback-box';

    document.getElementById('nav-row').style.display    = 'none';
    document.getElementById('hint-row').style.display   = 'flex';
    document.getElementById('hint-text').style.display  = 'none';
    document.getElementById('hint-text').textContent    = '';
    document.getElementById('restart-alert').style.display = 'none';

    const hintBtn = document.getElementById('hint-btn');
    hintBtn.disabled = state.points < 5;

    updateMeters();
  }

  /* ---------- Select Answer ---------- */
  function selectAnswer(idx) {
    if (state.answered) return;
    state.answered = true;

    const stage   = STAGES[state.currentStage];
    const q       = stage.questions[state.currentQ];
    const correct = idx === q.correct;

    /* style choices */
    const choices = document.querySelectorAll('.choice');
    choices.forEach((c, i) => {
      c.disabled = true;
      if (i === q.correct) c.classList.add('correct');
      else if (i === idx && !correct) c.classList.add('wrong');
    });

    /* feedback */
    const fb = document.getElementById('feedback-box');
    fb.style.display = 'block';

    if (correct) {
      fb.className = 'feedback-box correct';
      fb.innerHTML = '<span class="feedback-icon">✓</span> ' + q.feedback.correct;
      state.trust     = clamp(state.trust     + q.trustGood, 0, 100);
      state.situation = clamp(state.situation + q.sitGood,   0, 100);
      state.points       += q.pts;
      state.stagePoints  += q.pts;
      state.stageCorrect += 1;
    } else {
      fb.className = 'feedback-box wrong';
      fb.innerHTML = '<span class="feedback-icon">✗</span> ' + q.feedback.wrong;
      if (q.hint && !state.hintShown) {
        fb.innerHTML += '<div class="feedback-hint">💡 Tip: ' + q.hint + '</div>';
      }
      state.trust     = clamp(state.trust     + q.trustBad, 0, 100);
      state.situation = clamp(state.situation + q.sitBad,   0, 100);
      state.stageWrong += 1;
    }

    document.getElementById('hint-btn').disabled = true;
    updateMeters();

    /* situation maxed — restart */
    if (state.situation >= 100) {
      document.getElementById('restart-alert').style.display = 'block';
      document.getElementById('nav-row').style.display = 'none';
      state.situation = 50;
      state.trust = clamp(state.trust - 10, 5, 100);
      setTimeout(() => startStage(state.currentStage), 2600);
      return;
    }

    /* next button */
    const navRow = document.getElementById('nav-row');
    const nextBtn = document.getElementById('next-btn');
    const isLast  = state.currentQ >= stage.questions.length - 1;
    nextBtn.textContent = isLast ? 'See Results →' : 'Next Question';
    navRow.style.display = 'flex';
  }

  /* ---------- Hint ---------- */
  function useHint() {
    if (state.answered || state.points < 5) return;
    const q = STAGES[state.currentStage].questions[state.currentQ];
    state.points      -= 5;
    state.stagePoints -= 5;
    const ht = document.getElementById('hint-text');
    ht.textContent = '💡 ' + q.hint;
    ht.style.display = 'block';
    document.getElementById('hint-btn').disabled = true;
    state.hintShown = true;
    updateMeters();
  }

  /* ---------- Next Question ---------- */
  function nextQuestion() {
    const stage = STAGES[state.currentStage];
    if (state.currentQ >= stage.questions.length - 1) {
      showSummary();
    } else {
      state.currentQ++;
      loadQuestion();
    }
  }

  /* ---------- Summary ---------- */
  function showSummary() {
    const idx = state.currentStage;
    if (!state.stagesDone.includes(idx)) {
      state.stagesDone.push(idx);
    }

    const stage = STAGES[idx];
    document.getElementById('sum-stage-name').textContent = stage.icon + ' ' + stage.name;
    document.getElementById('sum-pts').textContent = '+' + state.stagePoints;
    document.getElementById('sum-correct').textContent = state.stageCorrect;
    document.getElementById('sum-wrong').textContent   = state.stageWrong;
    document.getElementById('sum-trust').textContent   = Math.round(state.trust) + '%';
    document.getElementById('sum-sit').textContent     = Math.round(state.situation) + '%';

    /* summary feedback */
    const sf  = document.getElementById('sum-feedback');
    const tot = state.stageCorrect + state.stageWrong;
    const pct = tot > 0 ? state.stageCorrect / tot : 0;

    if (pct >= 0.8) {
      sf.className = 'feedback-box correct';
      sf.textContent = 'Excellent choices this stage. Jordan knows you have their back.';
    } else if (pct >= 0.5) {
      sf.className = 'feedback-box neutral';
      sf.textContent = 'Some tough decisions there. Review the feedback to build your understanding.';
    } else {
      sf.className = 'feedback-box wrong';
      sf.textContent = 'The situation escalated more than it needed to. Think carefully about Jordan\'s perspective in each scenario.';
    }

    /* buttons */
    const nextStageBtn  = document.getElementById('next-stage-btn');
    const finalScoreBtn = document.getElementById('final-score-btn');
    nextStageBtn.style.display  = 'none';
    finalScoreBtn.style.display = 'none';

    const allDone = state.stagesDone.length >= STAGES.length;
    if (allDone) {
      finalScoreBtn.style.display = 'block';
    } else if (idx < STAGES.length - 1) {
      nextStageBtn.style.display = 'block';
    }

    showScreen('screen-summary');
  }

  /* ---------- Next Stage ---------- */
  function goNextStage() {
    startStage(state.currentStage + 1);
  }

  /* ---------- Final Screen ---------- */
  function showFinal() {
    document.getElementById('final-score').textContent   = state.points;
    document.getElementById('final-trust').textContent   = Math.round(state.trust) + '%';
    document.getElementById('final-sit').textContent     = Math.round(state.situation) + '%';
    document.getElementById('final-stages').textContent  = state.stagesDone.length + ' / ' + STAGES.length;

    const msg = document.getElementById('final-message');

    if (state.trust >= 75) {
      msg.innerHTML = `<strong style="color:#6de0a0">Jordan made it through — because of you.</strong>
        You showed what it means to be a real ally. You spoke up when it was uncomfortable,
        kept evidence when it mattered, and made sure Jordan was never truly alone.
        That\'s what changes outcomes.`;
    } else if (state.trust >= 45) {
      msg.innerHTML = `<strong style="color:#ef9f27">Jordan got through it, but the road was harder than it needed to be.</strong>
        Some of your choices left Jordan feeling more isolated than they should have.
        Look back at the feedback — small decisions have a bigger impact than they seem.`;
    } else {
      msg.innerHTML = `<strong style="color:#f09595">Jordan struggled, partly because bystanders stayed silent.</strong>
        Cyberbullying thrives on inaction. Review the scenarios and think carefully
        about what a real friend would do differently at each stage.`;
    }

    showScreen('screen-final');
  }

  /* ---------- Reset ---------- */
  function resetGame() {
    state = {
      trust:        50,
      situation:    0,
      points:       0,
      stagesDone:   [],
      currentStage: null,
      currentQ:     0,
      stageCorrect: 0,
      stageWrong:   0,
      stagePoints:  0,
      answered:     false,
      hintUsed:     false,
      hintShown:    false
    };
    updateMeters();
    showScreen('screen-home');
  }

  /* ---------- Helpers ---------- */
  function clamp(val, min, max) {
    return Math.min(max, Math.max(min, val));
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ---------- Public API ---------- */
  return {
    showScreen,
    goToStages,
    startStage,
    selectAnswer,
    useHint,
    nextQuestion,
    goNextStage,
    showFinal,
    resetGame
  };

})();
