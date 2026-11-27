// ══════════════════════════════════════════════
// CLAA TIMELINE (added Nov 27 2026)
// Shown above every History, History of Christendom and Bible History lesson so the
// student can see where the lesson fits.
// Events: World Chronology Timeline, © 2021 Classical Liberal Arts Academy (the teacher's copy),
// redrawn for the screen. Two dates were corrected and carry a note: World War I ended in 1918
// (list: 1917) and St. Francis died in 1226 (list: 1225).
// Years BC are negative numbers.
// ══════════════════════════════════════════════
const TL_PRES = 2026;
const TL_ERAS = [
  { name:'Ancient',   dates:'3500–750 BC',   from:-3500, to:-750,    color:'#E8D3A0' },
  { name:'Classical', dates:'750 BC–AD 500', from:-750,  to:500,     color:'#E9BFA8' },
  { name:'Medieval',  dates:'AD 500–1500',   from:500,   to:1500,    color:'#BFD3EA' },
  { name:'Modern',    dates:'AD 1500–today', from:1500,  to:TL_PRES, color:'#C5E0C0' }
];
// [date as printed, first year, last year, event, words that name it in a lesson, note]
const TL_EVENTS = [
  ['3500 BC',-3500,-3500,'Ancient Sumeria begins','sumer|sumeria|sumerians'],
  ['2900 BC',-2900,-2900,'Ancient Egypt begins','egypt|egyptians'],
  ['2845–1885 BC',-2845,-1885,'Life of Noah','noah|ark and the flood|great flood'],
  ['2000–1780 BC',-2000,-1780,'Life of Abraham','abraham|abram'],
  ['1855–1751 BC',-1855,-1751,'Life of Isaac','isaac'],
  ['1795–1647 BC',-1795,-1647,'Life of Jacob','jacob'],
  ['1792–1750 BC',-1792,-1750,'Code of Hammurabi','hammurabi'],
  ['1704–1594 BC',-1704,-1594,'Life of Joseph','joseph in egypt|joseph and his brothers|coat of many colo'],
  ['1660–1450 BC',-1660,-1450,'Hebrews slaves in Egypt','slaves in egypt|slavery in egypt'],
  ['1528–1409 BC',-1528,-1409,'Life of Moses','moses'],
  ['1450–1410 BC',-1450,-1410,'Hebrew Exodus','exodus|red sea|ten commandments'],
  ['1368–1050 BC',-1368,-1050,'Judges in Israel','judges|gideon'],
  ['1200 BC',-1200,-1200,'Trojan War','trojan war|trojan horse'],
  ['1200–600 BC',-1200,-600,'Assyrian Empire','assyrians?|assyria|nineveh'],
  ['1100 BC',-1100,-1100,'Life of Samson','samson'],
  ['1000–722 BC',-1000,-722,'Kings in Israel','king saul|kings of israel'],
  ['1000–960 BC',-1000,-960,'Reign of King David','david|goliath'],
  ['960–920 BC',-960,-920,'Reign of King Solomon','solomon'],
  ['960 BC',-960,-960,'Solomon builds the Temple','builds the temple|built the temple'],
  ['930 BC',-930,-930,'Israel divided','divided kingdom|kingdom was divided|kingdom split'],
  ['927–800 BC',-927,-800,'Prophet Elijah in Israel','elijah'],
  ['780 BC',-780,-780,'Jonah in Israel','jonah|jonas'],
  ['777–692 BC',-777,-692,'Isaiah the Prophet in Judah','isaiah|isaias'],
  ['753 BC',-753,-753,'City of Rome built','romulus|founding of rome'],
  ['753–509 BC',-753,-509,'Early Rome','early rome|kings of rome'],
  ['750 BC',-750,-750,'Homer writes the Iliad and Odyssey','homer|iliad|odyssey'],
  ['722 BC',-722,-722,'Assyrian Captivity (Israel)','assyrian captivity'],
  ['700 BC',-700,-700,'Assyrians destroy Babylon','destroyed babylon'],
  ['612 BC',-612,-612,'Babylonians conquer Assyrians','fall of nineveh'],
  ['625–550 BC',-625,-550,'Jeremiah the Prophet','jeremiah|jeremias'],
  ['600–560 BC',-600,-560,'Life of King Nebuchadnezzar','nebuchadnezzar|nabuchodonosor'],
  ['600–535 BC',-600,-535,'Daniel, prophet in Babylon','daniel'],
  ['600 BC',-600,-600,'Persian Empire begins','persian empire|persians'],
  ['590–570 BC',-590,-570,'Ezekiel the Prophet in Judah','ezekiel|ezechiel'],
  ['586 BC',-586,-586,'Babylonian Captivity (Judah)','babylonian captivity|captivity in babylon'],
  ['539 BC',-539,-539,'Persians conquer Babylon','fall of babylon'],
  ['536 BC',-536,-536,'King Cyrus sets the Jews free','cyrus'],
  ['530–450 BC',-530,-450,'Ezra the Scribe','ezra|esdras'],
  ['516 BC',-516,-516,'Second Temple completed','second temple|rebuil[dt] the temple'],
  ['509–31 BC',-509,-31,'Roman Republic','roman republic'],
  ['490–480 BC',-490,-480,'Greek-Persian Wars','marathon|thermopylae|salamis|darius|xerxes'],
  ['480–323 BC',-480,-323,'Classical Greece','pericles|parthenon|athens'],
  ['480 BC',-480,-480,'Life of Esther','esther'],
  ['469–399 BC',-469,-399,'Life of Socrates','socrates'],
  ['458 BC',-458,-458,'Jews return from captivity','return from captivity'],
  ['450 BC',-450,-450,'Malachi the Prophet','malachi|malachias'],
  ['444–400 BC',-444,-400,'Nehemiah, prophet in Israel','nehemiah|nehemias'],
  ['431–404 BC',-431,-404,'Peloponnesian Wars','peloponnesian|sparta against athens'],
  ['427–348 BC',-427,-348,'Life of Plato','plato'],
  ['384–322 BC',-384,-322,'Life of Aristotle','aristotle'],
  ['336–323 BC',-336,-323,'Alexander the Great','alexander the great|alexander'],
  ['323–146 BC',-323,-146,'Hellenistic Age','hellenistic'],
  ['264–146 BC',-264,-146,'Punic Wars','punic|hannibal|carthage'],
  ['168–37 BC',-168,-37,'Maccabees in Israel','maccabees|machabees|maccabaeus'],
  ['106–43 BC',-106,-43,'Life of Cicero','cicero'],
  ['100–44 BC',-100,-44,'Life of Julius Caesar','julius caesar'],
  ['70–19 BC',-70,-19,'Life of Vergil, poet','vergil|virgil|aeneid'],
  ['27 BC–AD 476',-27,476,'Roman Empire','roman empire'],
  ['27 BC–AD 14',-27,14,'Reign of Augustus Caesar','augustus'],
  ['5 BC–AD 33',-5,33,'Life of Jesus Christ','jesus|christ child|nativity|bethlehem|crucifixion|resurrection'],
  ['AD 33',33,33,'Christian Church founded','pentecost'],
  ['AD 64, 67',64,67,'Saints Peter and Paul martyred','nero|saint paul|st\\. paul|saint peter|st\\. peter'],
  ['AD 70',70,70,'Romans destroy Jerusalem','destruction of jerusalem'],
  ['AD 50–100',50,100,'New Testament written','new testament|gospels were written'],
  ['AD 100',100,100,"Apostles' Creed","apostles' creed|apostles’ creed"],
  ['AD 306–337',306,337,'Life of St. Constantine','constantine'],
  ['AD 313',313,313,'Edict of Milan','edict of milan'],
  ['AD 325',325,325,'Nicene Creed','nicaea|nicea|nicene'],
  ['AD 354–430',354,430,'Life of St. Augustine','augustine|agustine'],
  ['AD 380',380,380,'Roman Empire converted','theodosius'],
  ['AD 395',395,395,'Roman Empire splits','empire was split|two empires'],
  ['AD 395–1453',395,1453,'Byzantine Empire','byzantine|constantinople'],
  ['AD 432',432,432,'St. Patrick in Ireland','patrick'],
  ['AD 476',476,476,'End of the Roman Empire','fall of rome'],
  ['AD 480–547',480,547,'Life of St. Benedict','benedict'],
  ['AD 800',800,800,'Charlemagne, Holy Roman Emperor','charlemagne'],
  ['AD 793–1066',793,1066,'Viking period','vikings?|northmen'],
  ['AD 1054',1054,1054,'East–West Church split','east-west|schism of 1054'],
  ['AD 1066',1066,1066,'Norman Conquest','norman conquest|william the conqueror|hastings'],
  ['AD 1100–1300',1100,1300,'Crusades','crusades?|crusaders'],
  ['AD 1170–1221',1170,1221,'Life of St. Dominic','dominic'],
  ['AD 1182–1226',1182,1226,'Life of St. Francis','francis of assisi','St. Francis died in 1226 (the CLAA list prints 1225).'],
  ['AD 1225–1274',1225,1274,'Life of St. Thomas Aquinas','aquinas'],
  ['AD 1350–1600',1350,1600,'Renaissance','renaissance'],
  ['AD 1492',1492,1492,'Columbus crosses the Atlantic','columbus'],
  ['AD 1517–1555',1517,1555,'Protestant Revolution','luther|protestant'],
  ['AD 1543–1750',1543,1750,'Scientific Revolution','scientific revolution|copernicus|galileo'],
  ['AD 1564–1616',1564,1616,'Life of Shakespeare','shakespeare'],
  ['AD 1687–1789',1687,1789,'Enlightenment','enlightenment'],
  ['AD 1750–1950',1750,1950,'Industrial Revolution','industrial revolution|steam engine'],
  ['AD 1776–today',1776,TL_PRES,'United States of America','united states'],
  ['AD 1776',1776,1776,'U.S. Declaration of Independence','declaration of independence'],
  ['AD 1789',1789,1789,'U.S. Constitution','u\\.s\\. constitution|american constitution'],
  ['AD 1861–1865',1861,1865,'U.S. Civil War','civil war between the states|american civil war'],
  ['AD 1914–1918',1914,1918,'World War I','world war i\\b|first world war','World War I ended in 1918 (the CLAA list prints 1917).'],
  ['AD 1939–1945',1939,1945,'World War II','world war ii|second world war']
];

// Period of each World History (Hillyer) bank lesson: [first year, last year]. Lesson 5 is an overview.
const TL_HILLYER = {
  6:[-2900,-2900], 7:[-2900,-2900], 8:[-3500,-1750], 9:[-2000,-1410], 10:[-750,-750], 11:[-1200,-1200],
  12:[-1000,-930], 13:[-1000,-722], 14:[-750,-480], 15:[-776,-750], 16:[-753,-509], 17:[-1200,-612],
  18:[-625,-536], 19:[-600,-516], 20:[-600,-480], 21:[-621,-480], 22:[-509,-480], 23:[-490,-480],
  24:[-490,-480], 25:[-490,-480], 26:[-480,-429], 27:[-431,-399], 28:[-469,-322], 29:[-336,-323],
  30:[-264,-146], 31:[-264,-146], 32:[-264,-100], 33:[-106,-44], 34:[-27,14], 35:[-5,67], 36:[54,70],
  37:[96,192], 38:[306,395], 39:[354,476], 40:[450,500], 41:[476,700], 42:[480,547], 43:[570,732],
  44:[700,900], 45:[768,814], 46:[849,901], 47:[900,1066], 48:[1000,1300], 49:[1000,1300],
  50:[1066,1066], 51:[1095,1100], 52:[1189,1250], 53:[1170,1274], 54:[1199,1216], 55:[1254,1324],
  56:[1214,1350], 57:[1337,1453], 58:[1440,1480], 59:[1492,1506], 60:[1497,1522]
};

// Longer events that are the subject of a lesson although they began earlier.
const TL_HILLYER_KEYS = { 17:['Assyrian Empire'], 37:['Roman Empire'], 39:['Roman Empire'], 40:['Roman Empire'],
  47:['Viking period'], 49:['Crusades'], 52:['Crusades'] };

function tlApplies(){ return !!curSubject && (/history$/.test(curSubject.id) || !!curSubject.isBible); }
function tlYear(y){ return y < 0 ? (-y) + ' BC' : 'AD ' + y; }
function tlSpan(a, b){
  if(a === b) return 'about ' + tlYear(a);
  if(a < 0 && b < 0) return 'about ' + (-a) + '–' + (-b) + ' BC';
  if(a > 0 && b > 0) return 'about AD ' + a + '–' + b;
  return 'about ' + tlYear(a) + ' – ' + tlYear(b);
}

// Events that belong to a period: those beginning inside it (and any named in "keys").
// If none begins inside it, the ones already going on at that time.
function tlInRange(lo, hi, keys){
  const inside = [], during = [];
  TL_EVENTS.forEach(function(e, i){
    if((keys || []).indexOf(e[3]) > -1 || (e[1] >= lo && e[1] <= hi)) inside.push(i);
    else if(e[1] <= hi && e[2] >= lo) during.push(i);
  });
  if(inside.length) return inside;
  return during;
}

// Events named in a lesson's own words (used for lessons that have no fixed period).
function tlFromText(text){
  const t = String(text || '').toLowerCase();
  const found = [];
  TL_EVENTS.forEach(function(e, i){
    const m = t.match(new RegExp('\\b(?:' + e[4] + ')(?![a-z])', 'g'));
    if(m) found.push({ i:i, n:m.length });
  });
  if(!found.length) return [];
  const top = Math.max.apply(null, found.map(function(f){ return f.n; }));
  return found.filter(function(f){ return f.n * 3 >= top; })
    .sort(function(a, b){ return b.n - a.n; }).slice(0, 6)
    .map(function(f){ return f.i; }).sort(function(a, b){ return a - b; });
}

// Where a year falls on the four-era bar, in percent (each era gets a quarter of the width).
function tlPercent(y){
  for(let k = 0; k < TL_ERAS.length; k++){
    const e = TL_ERAS[k];
    if(y <= e.to || k === TL_ERAS.length - 1){
      const f = Math.max(0, Math.min(1, (y - e.from) / (e.to - e.from)));
      return (k + f) * 25;
    }
  }
  return 0;
}

function tlClear(){ const p = document.getElementById('tl-panel'); if(p) p.innerHTML = ''; }

// opts: { range:[lo,hi], keys:[names], events:[indexes], when:'text', note:'text' }
function tlDraw(opts){
  const panel = document.getElementById('tl-panel');
  if(!panel) return;
  panel.innerHTML = '';
  if(!tlApplies()) return;
  const range = opts.range || null;
  let hit = opts.events || (range ? tlInRange(range[0], range[1], opts.keys) : []);
  function el(parent, cls, text){ const d = document.createElement('div'); d.className = cls; if(text !== undefined) d.textContent = text; parent.appendChild(d); return d; }
  const box = el(panel, 'tl-box');
  const when = opts.when || (range ? tlSpan(range[0], range[1]) : (hit.length ? tlSpan(TL_EVENTS[hit[0]][1], TL_EVENTS[hit[hit.length - 1]][1]) : ''));
  el(box, 'tl-title', '🕰 Timeline' + (when ? ' — this lesson: ' + when : ''));

  const bar = el(box, 'tl-bar');
  TL_ERAS.forEach(function(e){
    const s = el(bar, 'tl-era');
    s.style.background = e.color;
    el(s, 'tl-era-name', e.name);
    el(s, 'tl-era-dates', e.dates);
  });
  const lo = range ? range[0] : (hit.length ? TL_EVENTS[hit[0]][1] : null);
  const hi = range ? range[1] : (hit.length ? TL_EVENTS[hit[hit.length - 1]][1] : null);
  const track = el(box, 'tl-track');
  if(lo !== null){
    const a = tlPercent(lo), b = tlPercent(hi);
    const mark = el(track, 'tl-mark');
    mark.style.left = Math.min(a, 98) + '%';
    mark.style.width = Math.max(2, b - a) + '%';
  }

  if(opts.note) el(box, 'tl-note', opts.note);
  if(!hit.length && !opts.note) el(box, 'tl-note', 'Ask your mother to help you find where this lesson fits on the timeline.');

  const list = el(box, 'tl-list');
  let whole = false;
  function drawList(){
    list.innerHTML = '';
    let show = [];
    if(whole){ show = TL_EVENTS.map(function(e, i){ return i; }); }
    else if(hit.length){
      const shown = hit.slice(0, 10);
      const before = shown[0] - 1, after = shown[shown.length - 1] + 1;
      show = (before >= 0 ? [before] : []).concat(shown, after < TL_EVENTS.length ? [after] : []);
    }
    show.forEach(function(i){
      const e = TL_EVENTS[i];
      const row = el(list, 'tl-row' + (hit.indexOf(i) > -1 ? ' tl-hit' : ''));
      el(row, 'tl-date', e[0]);
      el(row, 'tl-name', (hit.indexOf(i) > -1 ? '▶ ' : '') + e[3] + (e[5] ? ' *' : ''));
    });
    show.forEach(function(i){ if(TL_EVENTS[i][5] && hit.indexOf(i) > -1) el(list, 'tl-note', '* ' + TL_EVENTS[i][5]); });
    list.className = 'tl-list' + (whole ? ' tl-whole' : '');
    const first = list.querySelector('.tl-hit');
    if(whole && first) list.scrollTop = first.offsetTop - list.offsetTop;
  }
  drawList();
  const btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'tl-btn'; btn.textContent = 'Show the whole timeline';
  btn.onclick = function(){ whole = !whole; btn.textContent = whole ? 'Show only this lesson' : 'Show the whole timeline'; drawList(); };
  box.appendChild(btn);
  el(box, 'tl-credit', 'World Chronology Timeline © 2021 Classical Liberal Arts Academy');
}

// Called when a subject is opened, when a lesson begins, and when a tutor lesson has been written.
function tlLesson(text){
  tlClear();
  if(!tlApplies()) return;
  const u = curSubject.unit;
  if(u){ tlDraw({ range:u.years, keys:u.keys, when:u.when, note:u.note, events:u.years ? null : [] }); return; }
  if(/-history$/.test(curSubject.id) && window.LESSON_BANKS && window.LESSON_BANKS[curSubject.id]){
    const pick = (typeof bankState !== 'undefined' && bankState.active) ? bankState : bankPick();
    if(pick && pick.lesson){
      const n = pick.lesson.n;
      if(n === 5){ tlDraw({ events:[], note:'This first lesson looks over the whole story of history. Tap “Show the whole timeline”.' }); return; }
      if(TL_HILLYER[n]){ tlDraw({ range:TL_HILLYER[n], keys:TL_HILLYER_KEYS[n] }); return; }
    }
  }
  if(text) tlDraw({ events:tlFromText(text) });
}
