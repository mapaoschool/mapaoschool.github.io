# PROTECTED.md — update (Oct 2026)

## In RULE 12, replace the bullet that starts "Math Games now has **four** tabs" with:

* Math Games now has **seven** tabs: Times Tables, Skip Counting, Division, Speed Quiz, **Clock, Calendar, Roman Numerals**. Mode names: `'tables'`, `'skip'`, `'division'`, `'quiz'`, `'clock'`, `'calendar'`, `'roman'`. Adding another mode means updating together: the tab buttons (HTML), the `forEach` list in `mgSelectMode()`, `mgNumsFor()`, `mgNewQuestionForMode()`, and `mgSpokenText()`.

## Add this new rule:

## RULE 13 — Math Games: Clock, Calendar & Roman Numerals (added Oct 2026)

* These three are **level-based** modes: the picker row holds a level (1..N), not a times table. Levels are defined in `MG_LEVELS`; `mgIsLevelMode()`, `mgLevelNums()` and `mgNumsFor()` decide which picker to show. Do not fold them back into `MG_TABLE_NUMS`.
* Their answer buttons are built with `mgRenderChoicesAny()` (DOM API, no inline onclick) because answers can be text ("3:45", "Tuesday", "XIV"). `mgCheckAnswer()` is shared by all modes and was **not** changed — keep it that way.
* `mgSelectMode()` resets the pick (level 1, or table 2 when leaving them) when switching between a level mode and a number mode, using `prevMode`.
* Read-aloud for these modes uses the `data-spoken` attribute on `.mg-question-text` (Roman numerals are spelled out by letter name; never speak the answer). Spoken text must **avoid the word "in"** and abbreviations like "st", "ft", "oz" — `sanitizeForTTS()` turns "in" into "inches".
* Clock face uses Arabic numerals 1–12 on purpose, and `mgToRoman` distractors never use "IIII".
* Calendar uses real dates (`Date`), so leap years are correct. Weeks start on Sunday.
* Added `flex-wrap:wrap` to `.mg-tabs` and `flex:1 1 22%` to `.mg-tab` so seven tabs fit on two rows. Best streaks save as `clock-<level>`, `calendar-<level>`, `roman-<level>` in the existing `math_scores` table (no schema change).
* Verification grep stays the same, plus: `mgNewClockQuestion`, `mgNewCalendarQuestion`, `mgNewRomanQuestion`, `mgRenderChoicesAny`.
