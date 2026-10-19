# Phonics Playground — setup guide (Oct 19, 2026)

## 1. Upload to GitHub (3 steps)

1. **Add** `phonics-games.html` to the repo, in the **same folder as `index.html`** (new file).
2. **Replace** `index.html` with the new one (only 3 small changes, listed in section 2).
3. Hard-refresh the app (Ctrl+Shift+R) and check it works: **F.A. / F.C. / L.J. → Bilingual Phonics → 🎮 Phonics Games**. The button opens Phonics Playground directly, with no list of other links, in a new tab, so the tutor session stays open behind it. Students tap **← Back to tutor** (or close the tab) when done.

Also upload the new `index.html` to Project knowledge, as usual.

> **Before you replace `index.html`:** I built on the Project knowledge copy. I could not pull the live GitHub file from here (network blocked), so please confirm GitHub and Project knowledge match. After the Sept 17 desync, an old GitHub copy would be overwritten by this one.

## 2. What changed in `index.html` (nothing else was touched)

| Line | Change |
|---|---|
| 682 | `PHONICS_GAMES` now holds only our game: `{name:'Phonics Playground — our workbook sounds (EN/ES)', url:'phonics-games.html', local:true}`. The old outside links (Teach Your Monster, Starfall, ABCya, PBS Kids, Funbrain) are removed. |
| 3817–3829 | `openExtGames()`: if a subject's only game has `local:true`, it opens that page directly in a new tab and skips the list. Grammar and Reading still show their lists as before. |

F.C. inherits it automatically (same `PHONICS_GAMES` list). A.L. has no phonics subject, so he doesn't see it. `logGameOpened()` records it under the student's session like the other games. All PROTECTED.md markers were checked before and after: unchanged.

## 3. Word-list check against the Order of Introduction

Source: the TEACHING ORDER in your Spaces Guide (v9/v12). I did not have the phonics PDF itself. If it differs, tell me.

| Book | In the Order | In the game | Verdict |
|---|---|---|---|
| 1-1 short a | -ad -an -at | -ad -an -at **-ap -ag** | -ap, -ag are yours. **Keep** (same short-a pattern, no new rule). |
| 1-2 short o | -op -ot | -op -ot **-og -ob** | -ob **keep**. -og **keep with a caution**: dog/log/fog can sound like "aw" in some accents, and the computer voice says them that way. Delete the -og line if it confuses the kids. |
| 1-4 short i | -id -ig -in -ip -it | same | ✓ |
| 1-5 short u | -ug -un **-up** -ut | -ug -un -ut | **-ut is already in the Order** (not an extra). **-up was missing, so I added it** (only *cup, pup*). Add your workbook's words. |
| 1-7 short e | -ed -eg -en -et | same | ✓ |
| 4-5 / 4-6 / 4-7 | ph, -ied, -tch | same | ✓ |

Picture fixes (Memory Match / Spell It): removed 🥯 for *bun* (it's a bagel), 🪀 *top* (yo-yo), 🐕 *pet* (clashes with 🐶 dog), 🐇 *hop* (reads as "rabbit"), and 🧙 *witch* (it's a wizard). Added 🥤 *cup*. Obscure words you may want to trim for the youngest: din, kin, wit, vat, jut, rut, gut.

## 4. How to add new sounds later

Everything lives in one block at the top of `phonics-games.html`, under the big comment **"PHONICS PLAYGROUND — word list"**. You never touch the game code.

**Step 1 — heading (only if it's a new book).** Add one line to `GROUPS`:
```js
{id:'ck',book:'2-2',en:'Sound of -ck',es:'Sonido -ck'}
```

**Step 2 — add one line per sound to `SETS`.**

| Kind of sound | Line | Games |
|---|---|---|
| Word **family** (same ending) | `S('ick','ck','kick lick pick sick tick')` | all 5 |
| Any **other** pattern (blend, ending, digraph) | `S('le','le','table apple little puddle candle',false,'-le')` | 4 (Build It skips it) |

Format: `S('id','groupId','word word word', false?, 'label?')`. Words are separated by single spaces, and a family's `id` is the ending its words share. Add `false` for non-families. The last text is the chip label (optional).

**Worked examples**
```js
// -ck (Book 2-2): as families, so Build It works too (b+ack, l+ick …)
S('ack','ck','back pack sack tack rack'),
S('eck','ck','deck neck peck'),
S('ick','ck','kick lick pick sick tick'),
S('ock','ck','dock lock rock sock'),
S('uck','ck','duck luck suck truck'),

// -le (Book 1-9): not a family
S('le','le','table apple little puddle candle',false,'-le'),

// a blend: add a GROUPS line first, e.g. {id:'bl',book:'…',en:'Blends: bl',es:'Mezclas: bl'}
S('bl','bl','black blob blot bled blip',false,'bl-'),
```

**Step 3 — pictures (optional).** In `EMOJI`, add `duck:'🦆'`. Only use a picture that has one clear meaning. Memory Match uses pictures when 6 or more of the chosen words have one; otherwise it matches word to word.

**Step 4 — check.** Open the page, press **F12 → Console**. `checkData()` prints a warning for a typo, a duplicate word, a word that doesn't end in its family, or a picture for a word that isn't in any list. No warning means it's good. Then upload `phonics-games.html`.

**To remove a sound:** delete its `S(...)` line. Saved selections adjust themselves.

## 5. Things to know

- **Tiger Mac (Safari 2/3):** no read-aloud and too old for this code, same as the tutor itself. The page won't crash on browsers that lack speech, but Listen and Spell are turned off there with a short notice.
- **Read-aloud** follows the app's rules: Zira/offline voice first, Edge retry, one `cancel()` then a 400 ms pause, silent unlock for iPhone. On Linux Chromium (snap) with no voices, a notice shows (same fix as the pending `speechSynthesis.getVoices().length` check).
- **Stars and sound choices** are saved per device in the browser (`pp-stars`, `pp-sel`, `pp-lang`). Students sharing one device share them.
- Needs internet only for the fonts. Without them it falls back to system fonts.

## 6. Add to PROTECTED.md

```
## RULE 14 — Phonics Playground (added Oct 2026)

* `phonics-games.html` is a standalone page in the repo root, opened from the Phonics "🎮 Games" overlay in a new tab. It is NOT inside index.html.
* `PHONICS_GAMES` contains only our game (`local:true`, url `phonics-games.html`). F.C. inherits it through the FA→FC spread. Do not remove it when editing game lists.
* `openExtGames()` opens a subject's game directly (new tab, no list) when its only game has `local:true`. Grammar and Reading keep their lists.
* The word list lives only in the top block of phonics-games.html (GROUPS, SETS, EMOJI); `checkData()` warns in the console.
* Its read-aloud copies the app's rules (Zira/offline first, 400 ms after cancel, Edge watchdog). Keep them in sync with COMPATIBILITY.md.txt.
* Verification grep: `phonics-games.html` and `local:true` in index.html.
```
