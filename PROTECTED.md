# PROTECTED — Ma Pao's Classical Catholic Homeschool Tutor

## Do Not Change Without Explicit Permission

This document lists every feature, pattern, and function that has been confirmed working.
**Before delivering any edit, verify that nothing on this list has been touched unless the change was explicitly requested.**

\---

## RULE 1 — ABSOLUTE: Never Remove These

|Item|Location (line \~)|Why it must stay|
|-|-|-|
|`supabaseKeepAlive()` function|\~858|Prevents Supabase free-tier auto-pause via daily HEAD ping|
|`supabaseKeepAlive()` startup call|startup block|If removed, Supabase pauses and all progress sync breaks|
|`NEEDS\_GESTURE\_FOR\_TTS = true`|\~703|Required on ALL browsers/platforms — speech must fire within a user gesture|

\---

## RULE 2 — TTS System (Hard-Won Fixes — Do Not Touch)

**Root cause resolved May 2026. Do not "simplify" or "clean up" this logic.**

* `VOICE\_PROFILES` — `'Zira'` must be **first** in every profile's `prefer` array.
Microsoft Zira (offline) is the only voice that works reliably on Edge.
Microsoft Online voices (Aria, etc.) silently fail on Edge. Do not reorder.
* Pause/Resume uses chunk-restart approach — `speechSynthesis.pause()` is unreliable on Edge offline voices. Do not replace with native pause/resume.
* Always `cancel()` before `speak()` with a 120ms+ settle delay (especially Edge).
* `readGeneration` counter — prevents stale `setTimeout` closures from firing after a new read starts. Do not remove or simplify.
* \- `splitIntoChunks()` call — must use \*\*20 words\*\* as the max chunk size. 
* &#x20; Do NOT increase this. Larger chunks (e.g. 200) cause the entire lesson to 
* &#x20; fit in one chunk, making pause/resume always restart from the beginning.
* &#x20; Confirmed broken at 200 words; confirmed working at 20 words (Chrome Windows, June 2026).
* \- `pauseReadAloud()` — must NOT set `readingStopped = true`. Must increment 
* &#x20; `readGeneration` before calling `cancel()`. 
* \- `resumeReadAloud()` — must increment `readGeneration` before calling `\_doReadAloud()`.
* \- `speakChunk()` — must capture `const myGen = readGeneration` per utterance, 
* &#x20; and guard `onstart`, `onend`, and `onerror` with `if(myGen !== readGeneration) return`.
* &#x20; This prevents stale utterance closures from firing `speakChunk()` after a pause/resume.
* `splitIntoChunks()` — must capture trailing non-punctuated text. The regex handles this. Do not simplify.
* `onboundary` timed fallback — activates if no `onboundary` event fires within 600ms of `onstart`. Do not remove the fallback.
* `ttsGestureUnlocked` flag — set to `true` on the Read button's `onpointerdown`. Do not remove this attribute from the button.
* `safeReadAloud()` / `promptTapToListen()` — the gate for gesture-locked TTS. Do not bypass.

\---

## RULE 3 — Session \& Progress Logic

* `sessionQuestionIndex` — must be **restored** from `savedProgress.questionIndex` in `beginSession()`, not reset to 0 unconditionally.
* `sessionCountedThisOpen` — resets to `false` in `openSubject()`, prevents double-incrementing `sessionCount`. Do not remove reset.
* `lastLesson` — extracted from the first substantive AI sentence on lesson load (skipping greeting phrases). `saveProgress` called at that point.
* `saveProgress()` and `syncToSupabase()` — both must be called at session end. `syncToSupabase` is called inside `saveSession()` automatically; do not add a second call that would duplicate it unless explicitly requested.
* `endSessionByTimer()` must: call AI for closing message → disable buttons → mark done in localStorage → increment `sessionCount` → update `lastLesson` → call `saveSession()` and `syncToSupabase()` → refresh tracker display. Do not shorten this sequence.
* `sessionAskedQuestions` array — tracks all questions asked this session to prevent repeats. Must be reset in `openSubject()` and populated in `beginSession()`, `nextQuestion()`, and `respondToAnswer()`.

\---

## RULE 4 — FC Subject Generation

```javascript
// Line \~635-636
SUBJECTS.FC = SUBJECTS.FA.map(s => ({
  ...s,
  id: s.id.replace('FA-', 'FC-'),
  prompt: s.prompt.replace(/F\\.A\\./g, 'F.C.').replace(/Grade 1–4/g, 'Grade 1–4')
}));
```

* FC subjects are generated at **runtime** via full object spread from FA.
* All FA flags (`isAesop: true`, `isBible: true`, `isMath: true`, etc.) are **automatically inherited**.
* Do **not** add a separate FC subject block.
* Do **not** add FC-specific flag overrides — they come from FA automatically.

\---

## RULE 5 — Subject Flags \& Timer Logic

* `isAesop: true` and `isBible: true` — on FA subjects only (FC inherits automatically).
* Timer is **10 minutes** for Math, Arithmetic, Aesop, Bible; **15 minutes** for all others.
This check appears in: `startClassTimer()`, `resetClassTimer()`, `openSubject()`, `beginSession()`, `endSessionByTimer()`.
All five locations must stay consistent.
* `isMath` is detected by `curSubject.id.includes('math')` in image logic — do not change subject IDs.

\---

## RULE 6 — Answer Evaluation \& Race Condition Prevention

* Buttons `btn-send`, `btn-correct`, `btn-partial`, `btn-wrong`, `btn-hint` are **disabled at the start of every async AI call** and re-enabled only after full resolution.
* `lastQuestion` is **snapshot** at the top of `respondToAnswer()` into `questionForThisAnswer` before any `await`. This prevents mapping answers to the wrong question.
* `micAccumulated` is cleared after a typed submit consumes it.
* `submitTextAnswer()` stops any active mic recording before evaluating — do not reorder this.

\---

## RULE 7 — Speech Recognition (Mic)

* A fresh `SpeechRecognition` instance is created on every tap (iOS requirement). Do not cache the instance.
* Silence grace period extended for Chrome/Windows (interim-only results are common).
* Answer display is populated live during interim results.
* Both the silence timer and `onend` handler fall back to the displayed transcript text.
* Set `recognition = null` only on real errors, not on normal `onend`.

\---

## RULE 8 — Color \& CSS Rules

* All tracker/progress text and backgrounds use **solid hex colors only** — never `rgba()`.

  * Tracker text: `#d4f0dc` on background `#1a3a22` with border `#2d6b3a`.
* `openSubject()` applies subject `bg`/`color` to **every panel element simultaneously**.
* `resetSubjColors()` is called on navigation away — prevents color bleed.
* CSS variables: `--vg-bg`, `--vg-gold`, `--vg-text`, etc. — do not rename or remove.

\---

## RULE 9 — Tag System (AI Response Parsing)

These tags are parsed from AI responses and must remain supported:

|Tag|Purpose|
|-|-|
|`\[SHOW\_PAGE: N]`|Triggers PDF page display for page N|
|`\[SHOW\_IMAGE: description]`|Triggers Wikipedia image search (Art subject obsolete-object exception)|
|`\[EXAMPLE:LABEL]...\[/EXAMPLE]`|Color-coded grammar example rendering|
|`\[KEY]word\[/KEY]`|Grammar keyword highlight|

\---

## RULE 10 — Image \& PDF System

* Wikipedia `pageimages` API — current image source (replaced deprecated Unsplash). Do not reintroduce Unsplash.
* PDF rendering: PDF.js via Mozilla hosted viewer with Dropbox `dl=1` links.
* `pdfPageUrl()` constructs the Mozilla viewer URL — do not change the format.
* Images are suppressed for Math subjects (`curSubject.id.includes('math')` check in `fetchImagesForLesson()`).

\---

## RULE 11 — VOICE\_PROFILES Priority Order

Every profile must keep `'Zira'` first. Current confirmed-working order per profile:

```
aesop/narnia: \['Zira','Linda','David','Samantha','Karen','Moira','Fiona','Victoria','Serena','Aria','Jenny']
bible/history/science: \['Zira','Linda','David','Samantha','Karen','Moira','Victoria','Serena','Aria','Jenny']
math/arithmetic/grammar: \['Zira','Linda','David','Samantha','Karen','Aria','Jenny','Alice']
art: \['Zira','Linda','David','Samantha','Karen','Moira','Fiona','Aria','Jenny']
```

\---

## HOW TO USE THIS DOCUMENT

Before delivering any edit:

1. Read the change you are about to make.
2. Check each rule above — does the edit touch anything listed here?
3. If yes and the change was NOT explicitly requested → do not make that change.
4. After editing, run verification grep for: `supabaseKeepAlive`, `NEEDS\_GESTURE\_FOR\_TTS`, `Zira`, `SUBJECTS.FC = SUBJECTS.FA.map`, `sessionCountedThisOpen`, `readGeneration`, splitIntoChunks(text, 20).

\---

*Generated June 2026 from confirmed-working index.html
Update this document whenever a new fix is confirmed working.*

