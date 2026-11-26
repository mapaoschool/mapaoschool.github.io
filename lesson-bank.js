// ══════════════════════════════════════════════
// LESSON BANK ENGINE (added Nov 26 2026)
// Teaches from the teacher's own manuals/workbooks instead of AI-invented lessons.
// Data lives in bank-*.js files (window.LESSON_BANKS[subjectId]). A subject with no
// bank, or whose bank lessons are all completed, uses the normal AI tutor unchanged.
// Tapped answers are graded locally; typed/spoken answers are graded by the AI
// against the manual's answer.
// ══════════════════════════════════════════════
let bankState = { active:false, bank:null, lesson:null, i:0 };

function bankReset(){ bankState = { active:false, bank:null, lesson:null, i:0 }; }

// lastLesson format: "Aquinas Fable 2 — Title (in progress|completed)".
// The teacher can type e.g. "Aquinas Fable 2 completed" on the Dashboard to jump ahead.
function bankPick(){
  const bank = window.LESSON_BANKS && curSubject && window.LESSON_BANKS[curSubject.id];
  if(!bank) return null;
  const last = getSession(curStudent, curSubject.id).lastLesson || '';
  const m = last.match(new RegExp(bank.marker + '\\s*(\\d+)', 'i'));
  let n = bank.lessons[0].n;
  if(m) n = /in progress/i.test(last) ? Number(m[1]) : Number(m[1]) + 1;
  const lesson = bank.lessons.find(function(l){ return l.n === n; });
  return lesson ? { bank:bank, lesson:lesson } : null;
}

function bankPosKey(){ return 'bankpos-' + curStudent + '-' + curSubject.id; }
function bankSavePos(){
  try{ localStorage.setItem(bankPosKey(), JSON.stringify({ n:bankState.lesson.n, i:bankState.i })); }catch(e){}
}
function bankLoadPos(n, max){
  try{ const p = JSON.parse(localStorage.getItem(bankPosKey())); if(p && p.n === n) return Math.min(p.i, max); }catch(e){}
  return 0;
}

function bankEsc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function bankFeedback(html, good){
  const style = good ? 'background:#1a3a22;color:#d4f0dc;border:1px solid #2d6b3a' : 'background:#2A0A08;color:#FFBBB0;border:1px solid #8B3A30';
  document.getElementById('fb-area').innerHTML = '<div class="feedback" style="' + style + ';line-height:1.7">' + html + '</div>';
  if(!good) document.getElementById('fb-area').scrollIntoView({block:'nearest'});
}
function bankTracker(){
  const sess = getSession(curStudent, curSubject.id);
  const t = 'Session ' + sess.sessionCount + ' · Last: ' + sess.lastLesson;
  ['tracker-text','tracker-text-right'].forEach(function(id){ const el = document.getElementById(id); if(el) el.textContent = t; });
}
function bankSetLastLesson(status){
  const sess = getSession(curStudent, curSubject.id);
  if(!sessionCountedThisOpen){ sess.sessionCount++; sessionCountedThisOpen = true; }
  const l = bankState.lesson;
  sess.lastLesson = bankState.bank.marker + ' ' + l.n + ' — ' + l.title + ' (' + status + ')';
  saveSession(curStudent, curSubject.id, sess);
  bankTracker();
}

// Shows question number bankState.i with its answer buttons; returns the text to read aloud.
function bankShowQuestion(){
  const qs = bankState.lesson.questions;
  const q = qs[bankState.i];
  const label = 'Question ' + (bankState.i + 1) + ' of ' + qs.length + ' (' + q.part + ')';
  const box = document.getElementById('ai-question-box');
  // TEACH BEFORE ASKING: show the concept this question needs; read it aloud only the first time in a row
  const prev = bankState.i > 0 ? qs[bankState.i - 1].concept : '';
  const learn = q.concept ? '<div style="background:#FFF6D6;border:1px solid #E8C870;border-radius:8px;padding:10px 12px;margin-bottom:8px;font-size:13px;color:#1A1A1A;line-height:1.7;font-family:\'Lato\',sans-serif;"><strong>📘 Learn first</strong><br>' + bankEsc(q.concept) + '</div>' : '';
  box.innerHTML = learn + '<div style="background:rgba(60,120,240,0.12);border:1px solid rgba(80,140,240,0.25);border-radius:8px;padding:10px 12px;margin-bottom:8px;font-size:13px;color:#1A1A1A;line-height:1.7;font-family:\'Lato\',sans-serif;"><strong>' + bankEsc(label) + '</strong><br>' + bankEsc(q.q) + '</div>';
  lastQuestion = q.q;
  const panel = document.querySelector('.tutor-right');
  if(panel) panel.scrollTop = 0;
  mcGen++; // cancels any pending AI-generated choices
  mcState = { key:mcNormalize(q.q), question:q.q, options:mcShuffle(q.options), correct:q.options[0], wrong:[], fixed:false };
  mcRender();
  bankSavePos();
  return ((q.concept && q.concept !== prev) ? 'Learn first. ' + q.concept + ' ' : '') + label + '. ' + q.q;
}

// After the last question: the written paragraph, checked by the mother.
function bankWritingText(){
  const l = bankState.lesson;
  return (l.writingConcept ? 'Learn first. ' + l.writingConcept + ' ' : '') + 'Now write a short paragraph in your workbook, Fable ' + l.n + ', part F: ' + l.writing + ' Then memorize this: ' + l.memorize + ' Show your workbook to your mother so she can correct it. ' + NOTEBOOK_CONFIRM_Q;
}
function bankStartWriting(prefix){
  notebookStage = 1;
  mcClear();
  bankSavePos();
  const text = (prefix ? prefix + ' ' : '') + bankWritingText();
  showNotebookMessage(text);
}

function bankAdvance(prefix){
  bankState.i++;
  if(bankState.i >= bankState.lesson.questions.length){ bankStartWriting(prefix); return; }
  const spoken = bankShowQuestion();
  safeReadAloud((prefix ? prefix + ' ' : '') + spoken);
}

// Called by handleNotebookReply() when the mother has checked the paragraph.
function bankComplete(){
  bankSetLastLesson('completed');
  try{ localStorage.removeItem(bankPosKey()); }catch(e){}
}

async function bankBegin(){
  const pick = bankPick();
  if(!pick) return;
  stopMicSilently();
  stopRead();
  const l = pick.lesson;
  bankState = { active:true, bank:pick.bank, lesson:l, i:bankLoadPos(l.n, l.questions.length) };
  notebookStage = 0;
  sessionAskedQuestions = [];
  const lessonText = 'Hello, A.L. Today: Fable ' + l.n + ', ' + l.title + '.\n\n'
    + l.story + '\n\nMoral: ' + l.moral
    + '\n\nWords: ' + l.words
    + '\n\nWhat Aristotle teaches: ' + l.aristotle
    + '\n\nWhat St. Thomas teaches: ' + l.thomas
    + '\n\nWhat the Bible teaches: ' + l.bible;
  currentLessonText = lessonText;

  const body = document.getElementById('ai-response');
  let wordIdx = 0;
  body.innerHTML = lessonText.split(/(\s+)/).map(function(part){
    if(/\S/.test(part)) return '<span class="hl-word" id="hw' + (wordIdx++) + '">' + bankEsc(part) + '</span>';
    return part.replace(/\n/g,'<br>');
  }).join('');
  document.getElementById('ai-cite').textContent = 'Source: ' + pick.bank.cite + ', Fable ' + l.n;
  document.getElementById('fb-area').innerHTML = '';
  document.getElementById('book-page-btn-wrap').style.display = 'none';
  document.getElementById('diag-banner').style.display = 'none';

  bankSetLastLesson('in progress');
  enableAnswerButtons();

  clearInterval(classTimerInterval); classTimerInterval = null;
  classTimerTotal = pick.bank.minutes * 60;
  classTimerSeconds = classTimerTotal;
  updateClassTimerDisplay();
  startClassTimer();

  const topBtn = document.getElementById('btn-begin-top');
  topBtn.disabled = false;
  topBtn.innerHTML = '✦ Begin Today\'s Lesson';

  if(bankState.i >= l.questions.length){ bankStartWriting(); }
  else {
    const spoken = lessonText + '\n\n' + bankShowQuestion();
    if(!NEEDS_GESTURE_FOR_TTS) readAloud(spoken); else promptTapToListen(spoken);
  }
  fetchImagesForLesson(l.title + '. ' + l.story);
}

// "Next →" button
function bankNext(){
  if(sessionEndedByTimer) return;
  stopMicSilently();
  stopRead();
  answerGeneration++; // discard any answer still being graded
  document.getElementById('fb-area').innerHTML = '';
  enableAnswerButtons();
  if(notebookStage === 1){ bankStartWriting(); return; }
  if(notebookStage === 2){
    bankFeedback('✅ This lesson is finished. Well done!', true);
    return;
  }
  bankAdvance();
}

function bankHint(){
  const q = bankState.lesson.questions[bankState.i];
  const hint = (notebookStage === 0 && q) ? q.hint : 'Start with the definition from today’s lesson, then apply it to the fable.';
  document.getElementById('fb-area').innerHTML = '<div class="feedback" style="background:#0D2040;color:#A8D0FF"><strong>Hint ' + sessionHints + ':</strong> ' + bankEsc(hint) + '</div>';
  safeReadAloud(hint);
}

function bankReteach(){
  const q = bankState.lesson.questions[bankState.i];
  if(!q) return;
  stopMicSilently();
  enableAnswerButtons();
  mcRender();
  bankFeedback('<strong>📖 Let me explain it another way:</strong><br><br>' + bankEsc(q.reteach) + '<br><br>Try the same question again.', false);
  safeReadAloud(q.reteach + ' Try the same question again.');
}

async function bankRespond(answer, mcInfo, myGen){
  const q = bankState.lesson.questions[bankState.i];
  if(!q || notebookStage !== 0){ enableAnswerButtons(); return; }
  let verdict, comment = '';
  if(mcInfo){
    verdict = mcInfo.correct ? 'CORRECT' : 'WRONG';
  } else {
    bankFeedback('<span class="spinner"></span> Thinking...', true);
    ['btn-send','btn-correct','btn-partial','btn-wrong','btn-hint','btn-next','mic-btn'].forEach(function(id){
      const el = document.getElementById(id); if(el) el.disabled = true;
    });
    try{
      const res = await fetchWithTimeout(MC_WORKER_URL, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({ model:'claude-sonnet-4-6', max_tokens:300, messages:[{role:'user',content:
`Grade a high school philosophy student's answer. The teacher's manual answer is the standard.

LESSON:
"${currentLessonText.substring(0,2500)}"
${q.concept ? '\nCONCEPT TAUGHT: ' + q.concept : ''}

QUESTION: "${q.q}"
MANUAL ANSWER: "${q.options[0]}"
STUDENT ANSWER: "${answer}"

Judge by meaning, not exact wording: a synonym or paraphrase of the manual answer is CORRECT.
Line 1 must be exactly one of: VERDICT: CORRECT / VERDICT: PARTIAL / VERDICT: WRONG
Then 1–2 warm sentences to the student in plain text. If PARTIAL or WRONG, do NOT reveal the manual answer. Do not ask any question. Do not start with "I".` }] })
      }, 30000);
      const data = await res.json();
      if(myGen !== answerGeneration || sessionEndedByTimer) return;
      if(data.error) throw new Error(data.error.message);
      const txt = (data.content.find(function(b){ return b.type === 'text'; }) || {}).text || '';
      const m = txt.match(/VERDICT:\s*(CORRECT|PARTIAL|WRONG)/i);
      if(!m) throw new Error('no verdict');
      verdict = m[1].toUpperCase();
      comment = stripDirectiveTags(txt.replace(/^.*VERDICT:.*$/im,'')).trim();
    }catch(e){
      if(myGen !== answerGeneration || sessionEndedByTimer) return;
      enableAnswerButtons();
      mcRender();
      bankFeedback('Connection error. You can tap an answer below — tapped answers work without the AI.', false);
      return;
    }
  }
  enableAnswerButtons();
  if(verdict === 'CORRECT'){
    const praise = 'Correct! ' + (comment || 'The answer is: ' + q.options[0].replace(/\.$/,'') + '.');
    bankFeedback('✅ ' + bankEsc(praise), true);
    bankAdvance(praise);
  } else {
    const msg = (verdict === 'PARTIAL' ? 'Almost. ' : 'Not quite. ') + (comment ? comment + ' ' : '') + q.reteach + ' Try the same question again.';
    mcRender();
    bankFeedback(bankEsc(msg), false);
    safeReadAloud(msg);
  }
}
