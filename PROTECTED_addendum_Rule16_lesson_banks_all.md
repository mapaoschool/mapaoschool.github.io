# PROTECTED.md — update (Nov 26 2026)

## Add this new rule:

## RULE 16 (PROTECTED) — Lesson banks for any student and subject (extends Rule 15)

* Files beside `index.html`: `lesson-bank.js` (engine), `bank-al-aesop.js`, `bank-fa-aesop.js`, `bank-fc-aesop.js`. Every `bank-*.js` has its own `<script>` tag BEFORE `lesson-bank.js`. Upload changed files together.
* One bank per subject id (`window.LESSON_BANKS['FA-aesop']`). `marker` is unique per bank: `Aquinas Fable` (A.L.), `FA Aquinas Fable`, `FC Aquinas Fable`.
* No student, subject or "Fable" wording in the engine. Bank fields: `student`, `unit`, `cite`, `minutes`, `sections` ([heading, lesson field] pairs; default story, moral, words, Aristotle, St. Thomas, Bible), `grader`, `gradeNote`, `writingStart` (`{n}` = lesson number), `checkLine`, `notYet`, `writingHint`, `readOptions`, `sayBlank`. Lesson `memorize` and `writingConcept` are optional.
* A lesson field that is not listed in `sections` (for example `habits`) is NOT shown or taught. F.A./F.C. banks list it as "Virtue and vice".
* `index.html` now calls `bankNotYetText()` in `handleNotebookReply()`.
* F.C. (and later L.J.): 3 options, `readOptions:true`. F.A./F.C. banks share the workbook: correct a lesson in both files.
* Verification grep, plus: `bankLessonText`, `bankNotYetText`, `bank-fa-aesop.js`, `bank-fc-aesop.js`.
