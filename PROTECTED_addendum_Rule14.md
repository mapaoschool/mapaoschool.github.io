# PROTECTED.md — update (Nov 20 2026)

## Add this new rule:

## RULE 14 — Multiple-choice answers (mic fallback) (added Nov 20 2026)

* Every lesson question in every subject also gets 3–4 tappable options (3 for L.J.) in `#mc-box`, directly under `#ai-question-box`. Mic and typed answers still work unchanged.
* Code lives in the "MULTIPLE-CHOICE ANSWERS" section just above "STUDENT TEXT INPUT": `mcShowFor(question)`, `mcRender()`, `mcPick()`, `mcClear()`, `mcShowNotebook()`, `mcState`, `mcGen`. Buttons are built with the DOM API (no inline onclick).
* Options come from a separate small AI call (JSON, first item = correct, shuffled client-side). The tap is graded locally and passed to `respondToAnswer(answer, mcInfo)`; `mcInfo = {right, correct}` only adds one line to the grading prompt. Everything else in `respondToAnswer()` is unchanged (answerGeneration guard, notebook branch).
* Hooks (all must stay): `mcShowFor(lastQuestion)` in `beginSession()`, `nextQuestion()` (+ its catch), and the success path of `respondToAnswer()`; `mcRender()` in the `respondToAnswer()` catch; `mcClear()` in `openSubject()` reset, `endSessionByTimer()`, `nextQuestion()` start, and the notebook-confirmed branch of `handleNotebookReply()`; `mcShowNotebook()` in `showNotebookMessage()` (Yes / Not yet buttons).
* Same question re-asked after a wrong answer (Rule 15) keeps the same options with the wrong pick struck out (cache keyed by `mcNormalize(question)`).
* CSS uses solid hex colors only (`.mc-opt`, `.mc-right`, `.mc-wrong`).
* Verification grep stays the same, plus: `mcShowFor`, `mcPick`, `mcClear`, `id="mc-box"`.
