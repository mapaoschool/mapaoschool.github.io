# PROTECTED.md — update (Nov 26 2026)

## Add this new rule:

## RULE 15 (PROTECTED) — Lesson bank from teacher manuals

* New files beside `index.html`: `lesson-bank.js` (engine) and `bank-al-aesop.js` (A.L., Aesop with Aquinas, Fables 1–5). Both `<script>` tags load before the main script. Upload all three together. The app file must be named exactly `index.html` (on Nov 26 it was first uploaded as `index.txt`, so the old app kept running).
* In each question the FIRST option is the correct one; the app shuffles. Taps are graded locally; typed/spoken answers are graded by the AI against the manual answer.
* Progress is read from Last Lesson: `Aquinas Fable N — Title (in progress|completed)`. After the last bank lesson the normal AI tutor runs.
* Hooks in `index.html` (all must stay): `beginSession()`, `openSubject()` (`bankReset`), `respondToAnswer()`, `nextQuestion()`, `reteachConcept()`, `giveHint()`, `handleNotebookReply()` (two lines), `startClassTimer()`.
* Right panel CSS: `.tutor-right` scrolls vertically, `.ai-question-box` is `flex:1 0 auto`, and its text is 16px (`.ai-question-box div`), so answer choices cannot squeeze the question into a thin strip. Layout checked Nov 26 on a stand-alone copy of the panel (1366 and 390 wide).
* `beginSession()` shows only the paragraph holding the tutor's question in the question box; `respondToAnswer()` and wrong bank answers scroll the feedback into view.
* `sanitizeForTTS()`: "in" becomes "inches" ONLY as a unit after a digit. Never restore the old `\bin\.?\b` rule (it read the English word "in" as "inches"). This replaces the Rule 13 advice to avoid the word "in".
* TEACH BEFORE ASKING: `UNIVERSAL_RULES` rule 19, plus a matching sentence in the `nextQuestion()` and `respondToAnswer()` prompts (both `max_tokens:600`); `nextQuestion()` also shows the explanation in `fb-area`. In banks, a question that needs a term not in the lesson text carries `concept:` (and `writingConcept:` for the paragraph), shown as "Learn first" before the question.
* Verification grep, plus: `bankPick`, `bankBegin`, `bankRespond`, `bank-al-aesop.js`, `lesson-bank.js`, `TEACH BEFORE ASKING`.
