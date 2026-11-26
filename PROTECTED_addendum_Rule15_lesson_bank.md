# PROTECTED.md — update (Nov 26 2026)

## Add this new rule:

## RULE 15 (PROTECTED) — Lesson bank from teacher manuals

* New files beside `index.html`: `lesson-bank.js` (engine) and `bank-al-aesop.js` (A.L., Aesop with Aquinas, Fables 1–5). Both `<script>` tags load before the main script. Upload all three together.
* In each question the FIRST option is the correct one; the app shuffles. Taps are graded locally; typed/spoken answers are graded by the AI against the manual answer.
* Progress is read from Last Lesson: `Aquinas Fable N — Title (in progress|completed)`. After the last bank lesson the normal AI tutor runs.
* Hooks in `index.html` (all must stay): `beginSession()`, `openSubject()` (`bankReset`), `respondToAnswer()`, `nextQuestion()`, `reteachConcept()`, `giveHint()`, `handleNotebookReply()` (two lines), `startClassTimer()`.
* CSS: `.tutor-right` scrolls vertically and `.ai-question-box` is `flex:1 0 auto`, so answer choices cannot squeeze the question out of view. (Not yet re-tested in a browser on Nov 26.)
* `sanitizeForTTS()`: "in" becomes "inches" ONLY as a unit after a digit. Never restore the old `\bin\.?\b` rule (it read the English word "in" as "inches"). This replaces the Rule 13 advice to avoid the word "in".
* Verification grep, plus: `bankPick`, `bankBegin`, `bankRespond`, `bank-al-aesop.js`, `lesson-bank.js`.
