// LESSON BANK — History of Christendom, Volume 1 (Nov 27 2026)
// Source: Warren H. Carroll, The Founding of Christendom (the teacher's copy). Everything here is a short
// summary in our own words; no book text is copied. The tutor teaches, then asks multiple-choice questions.
// There is no writing activity. A lesson lasts at most 15 minutes; long chapters take several days.
// Left out on purpose: Carroll's discussion of evolution and his dates earlier than 4000 B.C.
// Question wording is a DRAFT until Maria reviews it.
// In every question the FIRST option is the correct one; the app shuffles them.
// Lessons ready: 1 Introduction, 2 Prologue, 3-5 Chapter 1.
// tl = what the CLAA timeline shows for the lesson (names must match timeline.js).
(function(){
window.LESSON_BANKS = window.LESSON_BANKS || {};

const TL = {
  1:{ names:['Life of Jesus Christ','Christian Church founded','Edict of Milan'], when:'from the time of Christ', note:'Volume 1 of this history begins before Christ and ends in A.D. 324.' },
  2:{ names:[], when:'the very beginning', note:'Creation and the Fall come before the first date on this timeline.' },
  3:{ names:['Ancient Sumeria begins','Life of Noah'], when:'the earliest ages' },
  4:{ names:['Ancient Sumeria begins','Life of Abraham'], when:'about 2700–2000 BC' },
  5:{ names:['Ancient Egypt begins','Life of Abraham'], when:'about 3100–1500 BC', note:'Carroll dates the union of Egypt about 3100 BC. The CLAA list begins Ancient Egypt at 2900 BC.' }
};
function q(part, question, options, hint, reteach, concept){
  const o = { part:part, q:question, options:options, hint:hint, reteach:reteach };
  if(concept) o.concept = concept;
  return o;
}
function bank(student, grader, extra, lessons){
  lessons.forEach(function(l){ l.tl = TL[l.n]; });
  return Object.assign({
    marker:'Christendom Lesson', student:student, unit:'Lesson', noWriting:true, minutes:15, sayBlank:true, grader:grader,
    sections:[['','story'],['','more'],['Words','words'],['Faith','faith']],
    cite:'Warren H. Carroll, The Founding of Christendom (summary in our own words)',
    lessons:lessons
  }, extra);
}

// ───────── HIGH SCHOOL ─────────
window.LESSON_BANKS['AL-writing-history'] = bank('A.L.', 'a high school student studying the history of Christendom', {}, [
{ n:1, title:'What Is Christendom? (Introduction)',
  story:'Christendom is the reign of Christ, the reign of God as men recognize it. Much of that reign is invisible, because His kingdom is not of this world, and much of it is personal. But part of it is public and historical. Where men with courage and missionary spirit acknowledge Christ as Lord and proclaim Him, Christendom appears as a social, cultural and political presence. It grows through that courage, and above all through prayer and example. It fades through timidity, indifference, apostasy and lack of holiness.\n\nFor fifteen centuries Christendom shaped Western civilization. Yet in the spring of A.D. 30, between Passover and Pentecost, all of it could meet in one upper room in Jerusalem: a few men headed by a fisherman, and a few women from Galilee. From that room came the greatest force in history.\n\nA history of Christendom differs from a history of the Church alone. It includes the lay and temporal order as far as Christianity penetrates it, so it joins Church history with political history.',
  more:'Carroll states his viewpoint openly. He writes as a Catholic, convinced that Jesus Christ founded a visible Church, the Roman Catholic Church, which continues through the succession of Popes and always will be His Church. He holds that every historian must choose what matters, and so every historian has a view of the world. Unbelief is as much a position as belief. Objectivity does not mean having no point of view; it means honesty and respect for truth. He also sees history as the story of persons and their free choices, not mainly of nameless forces. And he believes that a good history should be a good story.\n\nThe work was planned in six volumes: Founding (to A.D. 324), Building (324 to 1100), Glory (1100 to 1517), Cleaving (1517 to 1774), Revolution Against (1774 to 1914) and Martyrdom (since 1914).',
  words:'Christendom: the reign of Christ recognized by men, especially in public life. Apostasy: abandoning the faith. Temporal: belonging to the life of this world. Historian: one who studies and tells the past.',
  questions:[
    q('Meaning', 'What is Christendom, as Carroll defines it?', ['The reign of Christ recognized by men', 'The lands that belonged to the Pope', 'Every building used for Christian worship', 'The history of the clergy alone'], 'Think of whose reign it is.', 'Christendom is the reign of Christ, the reign of God recognized by men.'),
    q('Meaning', 'When does Christendom appear as a social, cultural and political presence?', ['When men courageously recognize and proclaim Christ as Lord', 'When governments grow rich and powerful', 'When all disagreements among people end', 'When history is written by scholars'], 'It depends on what believers do.', 'It appears where courageous men recognize Christ as Lord and proclaim Him.'),
    q('Meaning', 'What makes Christendom fade?', ['Timidity, indifference, apostasy and lack of holiness', 'Prayer, example and courage', 'The study of history', 'The building of cities'], 'These are the opposites of courage and holiness.', 'Christendom fades with timidity, indifference, apostasy and lack of holiness.'),
    q('When', 'Where was all of Christendom in the spring of A.D. 30?', ['In one upper room in Jerusalem', 'In the palace of the emperor in Rome', 'In a monastery in Egypt', 'In the Temple courts of Babylon'], 'It was a very small place.', 'All of Christendom met in one upper room in Jerusalem.'),
    q('Method', 'How does this history differ from a history of the Church alone?', ['It also tells how Christianity shaped lay and political life', 'It leaves out the Popes', 'It studies only economics', 'It stops at the death of the Apostles'], 'Think of the lay and temporal order.', 'It blends Church history with the lay and political order that Christianity penetrated.'),
    q('Method', 'What does Carroll say objectivity requires?', ['Honesty and respect for truth', 'Having no point of view at all', 'Writing only about unbelievers', 'Leaving out every difficult fact'], 'Every historian has a viewpoint, so it cannot mean having none.', 'Objectivity requires honesty and respect for truth; history cannot be written without a point of view.'),
    q('Method', 'What mainly drives the drama of history, in Carroll’s view?', ['The thoughts, actions and free will of persons', 'Nameless economic forces', 'Chance alone', 'The climate'], 'Christians see persons as God’s creatures.', 'History is chiefly the story of persons and the working of the will.'),
    q('Plan', 'Which years does the first volume, the Founding, reach?', ['To A.D. 324', 'To A.D. 1517', 'To A.D. 1914', 'To A.D. 30'], 'The next volume, Building, begins in that year.', 'The Founding reaches to A.D. 324.')
  ] },
{ n:2, title:'In the Beginning (Prologue)',
  story:'God is, and God is love. He alone must exist; only He can truly bear the name I AM. Because He exists, He can give being; because He is love, He did create the material universe and spiritual creatures. Nothing else exists of necessity or can keep itself in being. All creatures are contingent: they depend on God.\n\nTime began with creation, and history began when man appeared. For the Christian, history has a center that gives it meaning and direction: Jesus Christ. The Word who was with God and was God, through whom all things were made, was born a child in Bethlehem and crucified in Jerusalem. Because this happened on earth, our earth is, in the order of Heaven, the center of the universe.\n\nThe Church teaches that God directly creates man’s immortal soul, and that all human beings descend from one first man and woman. Their souls were uncorrupted, and their bodies shared the immortality of their souls.',
  more:'Yet we now live with a contradiction: an immortal soul joined to a body that dies. People have found death strange and fearful. The earliest men buried their dead, feared them, and still left food beside them. To an animal death is simply the end; man feels that it ought not to be.\n\nMaterialism ignores this problem. Agnostic existentialism is defeated by it. Reincarnation only multiplies it. Carroll holds that one account explains it: the third chapter of Genesis. The first man and woman wished to know evil by experience, believing it would make them like God, and they did so against God’s clear command and warning. They lost their innocence and failed in the purpose of their creation: to know, love and serve God. They tried to hide and to excuse themselves. God passed a just sentence: toil, thorns, and a return to dust. From that day man was an exile on the earth; in time he would also become a pilgrim.',
  words:'Contingent: depending on another for existence. Necessary being: one who must exist, God alone. Original sin: the sin of our first parents and its consequences, passed to their descendants.',
  faith:'“In the beginning was the Word” (John 1:1). The Church gives us the remedy for original sin in holy Baptism.',
  questions:[
    q('God', 'Which being alone must necessarily exist?', ['God', 'The universe', 'The human race', 'The stars'], 'His Name is I AM.', 'Only God must necessarily be; all else depends on Him.'),
    q('Words', 'What does it mean to say that creatures are contingent?', ['They depend on God for their existence', 'They can never be destroyed', 'They created themselves', 'They are equal to God'], 'Can the hardest mountain keep itself in being?', 'Contingent creatures cannot explain or preserve their own being.'),
    q('History', 'Who is the center of history for the Christian?', ['Jesus Christ', 'The first great conqueror', 'The wisest philosopher', 'The Roman emperor'], 'He is the Word through whom all things were made.', 'Jesus Christ is the center of history and gives it meaning and direction.'),
    q('Man', 'What does the Church teach about the human soul?', ['God creates it directly, and it is immortal', 'It comes from the soul of an animal', 'It dies with the body', 'It is born again in many bodies'], 'Souls do not die.', 'God directly creates each immortal soul.'),
    q('Man', 'From whom do all human beings descend?', ['One first man and woman', 'Several unrelated first families', 'The angels', 'The kings of Mesopotamia'], 'Genesis speaks of our first parents.', 'All human beings descend from one original pair.'),
    q('Death', 'What do ancient burials show about the way people see death?', ['People sense that death is strange and ought not to be', 'People thought nothing about death', 'People saw death just as animals do', 'People left their dead without burial'], 'Remember the contradiction of an immortal soul in a mortal body.', 'People have found death strange and fearful.'),
    q('The Fall', 'What gives the one adequate explanation of human death?', ['The third chapter of Genesis', 'The doctrine of reincarnation', 'Materialist philosophy', 'Agnostic existentialism'], 'It tells of the first sin.', 'Genesis chapter 3 explains it: death came through the sin of our first parents.'),
    q('Purpose', 'For what purpose was man given being?', ['To know, love and serve God', 'To rule without any law', 'To gather riches', 'To build great cities'], 'Think of your catechism.', 'Man was made to know, love and serve God.')
  ] },
{ n:3, title:'After Eden: Flood, Farms and the First Cities (Chapter 1, part 1)',
  story:'Outside the Garden, the first people faced a dangerous world with simple stone tools. Original sin had taken away immortality, harmony within human nature and easy mastery over creation. Man could neither merit salvation nor reach it alone. God did not destroy him. His answer would come in a way human reason could not foresee, and it waited for writing, civilization and disciplined thought, which could receive it and carry it to the world.\n\nPeople fell into magic and idols. Yet in nearly every ancient mythology there remained a faint memory of a pure Sky God who made and ruled the world. He seemed far away, with no bridge from heaven to earth. Still God called men to worship Him.\n\nThen came the Flood. Memories of a great deluge are found among so many peoples that Carroll holds they recall a real event. Genesis tells how God warned Noah, who built the ark and was saved.',
  more:'Afterward the Middle East grew drier. Men gathered wild grain and tamed sheep and goats, and farming began there before anywhere else. Civilization differs from barbarism above all by cities and writing. The ancient city was three things: a shrine, which drew people together; a market, where they traded; and a wall, which guarded both.\n\nJericho, beside a great spring near the river Jordan, is the earliest walled city Carroll knew of. Its huge stone wall shows how greed already threatened men who had grown prosperous.\n\nThat land was Palestine. It stands near the place where Europe, Asia and Africa meet, so from it the Word of God could travel quickly to the world. Being a crossroads, it was often fought over, a hard place for a long preparation. Yet something endured there through every storm, for it was the Promised Land.',
  words:'Deluge: a great flood. Idol: a false god or its image. Shrine: a holy place. Civilization: settled life marked by cities and writing.',
  questions:[
    q('The Fall', 'Could fallen man earn salvation by his own power?', ['No, he could neither merit it nor reach it alone', 'Yes, by building large cities', 'Yes, by practicing magic', 'Yes, by inventing writing'], 'This is why God had to act.', 'Man could neither merit salvation nor attain it by himself.'),
    q('Religion', 'What faint memory remained in nearly every ancient mythology?', ['A pure Sky God who made and ruled the world', 'A clear account of the Mass', 'A king who never made war', 'A law against all trade'], 'Look up.', 'There remained the idea of a Sky God, creator and ruler, who seemed far away.'),
    q('The Flood', 'Why does Carroll hold that the Flood recalls a real event?', ['Its memory is found among very many ancient peoples', 'Only one late story mentions it', 'The Pharaohs built a monument to it', 'Gilgamesh saw it begin'], 'Think about how widespread the story is.', 'The tradition is too widespread and deep to be explained by borrowing alone.'),
    q('Civilization', 'Which two things above all distinguish civilization from barbarism?', ['Cities and writing', 'Hunting and fishing', 'Stone tools and fire', 'Armies and slaves'], 'One is a place; the other records words.', 'Civilization is marked by cities and writing.'),
    q('Cities', 'Which three things made up the ancient city?', ['A shrine, a market and a wall', 'A palace, a prison and a port', 'A school, a farm and a road', 'A tower, a theatre and a bridge'], 'Worship, trade and defense.', 'The ancient city was a shrine, a market and a wall.'),
    q('Jericho', 'What made the site of Jericho so valuable?', ['A great, ever-flowing spring', 'Rich mines of gold', 'A harbor on the ocean', 'Snow from high mountains'], 'In a hot dry valley, people need it.', 'Jericho had a great life-giving spring.'),
    q('Palestine', 'Why was Palestine a fitting place for the Incarnation?', ['It stands near the meeting of three continents', 'It was the most isolated land on earth', 'It was never attacked', 'It was the largest empire'], 'Think of how news travels.', 'At the meeting of Europe, Asia and Africa, the Word could spread quickly.'),
    q('Palestine', 'What difficulty did Palestine have as a crossroads?', ['It was fought over again and again', 'No traveller ever passed through it', 'It had no memory of the past', 'It was cut off by endless ice'], 'Armies use crossroads too.', 'It was repeatedly fought over, which made a long preparation difficult.')
  ] },
{ n:4, title:'Sumer and the Cry of Gilgamesh (Chapter 1, part 2)',
  story:'On the flat plain of southern Mesopotamia the Sumerians built Eridu and other cities, among them Kish, Uruk and Ur, where Abraham would be born. Genesis tells how men settled in the plain of Shinar, baked bricks, used tar for mortar and began a city with a high tower. This matches Sumer, which had much clay and almost no stone. The Sumerians raised stepped temple towers called ziggurats, like the Tower of Babel.\n\nFrom this point Bible history can often be checked against other records, and Carroll shows that research has repeatedly upheld it.\n\nAbout 2700 B.C. Gilgamesh was king of Uruk. History tells that he defended his city against the king of Kish and built its first wall. Legend made him a great hero. The Epic of Gilgamesh, written in wedge-shaped cuneiform letters on clay tablets, is the oldest work of its kind. Much of it was found in the library of the Assyrian king Ashurbanipal.',
  more:'In the story Gilgamesh slays a monster with a brave companion. Then his dear friend Enkidu dies. Gilgamesh grieves and goes to seek Utnapishtim, the one survivor of the Flood, to whom the gods had given endless life. He crosses every barrier, even the waters of death, only to learn that this gift cannot be shared and that nothing on earth lasts. Death waits everywhere.\n\nCarroll calls this despair the clearest proof of original sin and its effects from people who did not know the story of Eden. Great conquerors followed, such as Sargon of Agade about 2350 B.C., but death took kings and common men alike.\n\nThe greatness of early Mesopotamia was its honesty about death. It was no mere chance that Abraham came from there, because there can be no hope or promise for man unless he is first willing to face the truth.',
  words:'Sumer: the land of the first cities in southern Mesopotamia. Cuneiform: wedge-shaped writing on clay. Ziggurat: a stepped temple tower. Epic: a long poem about a hero.',
  questions:[
    q('Where', 'In which land did the Sumerians build their cities?', ['Southern Mesopotamia', 'The Nile Delta', 'The Indus Valley', 'The hills of Greece'], 'It lies between great rivers.', 'Sumer was in southern Mesopotamia.'),
    q('Building', 'Why did the Sumerians build with baked and mud bricks?', ['They had much clay and almost no stone', 'Stone was forbidden by law', 'Bricks floated in floods', 'They had no tools of any kind'], 'What lay under their feet?', 'The plain had plenty of clay but very little stone.'),
    q('Bible', 'Which Biblical building is like the Sumerian ziggurat?', ['The Tower of Babel', 'The Ark of Noah', 'The Temple of Solomon', 'The walls of Jericho'], 'It was meant to reach to heaven.', 'The ziggurats resemble the Tower of Babel.'),
    q('Gilgamesh', 'Of which city was Gilgamesh king?', ['Uruk', 'Jericho', 'Memphis', 'Mohenjo-daro'], 'Its name begins with U.', 'Gilgamesh was king of Uruk.'),
    q('Writing', 'What is cuneiform?', ['Wedge-shaped writing pressed on clay', 'Picture writing carved on pyramids', 'Writing on rolls of parchment', 'A knotted cord for counting'], 'Think of wedges.', 'Cuneiform is wedge-shaped writing on clay tablets.'),
    q('Gilgamesh', 'What sends Gilgamesh on his greatest search?', ['The death of his friend Enkidu', 'A command to conquer Egypt', 'The loss of his city wall', 'A wish to find new farmland'], 'It is a great sorrow.', 'Enkidu’s death drives him to seek a way past death.'),
    q('Gilgamesh', 'What does Gilgamesh learn at the end of his search?', ['He cannot gain the endless life he seeks', 'He will rule forever', 'His friend will return next spring', 'Death comes only to the poor'], 'The story ends without hope.', 'The gift cannot be shared; nothing on earth is permanent.'),
    q('Meaning', 'Why was it no mere chance that Abraham came from Mesopotamia?', ['Hope can begin only where people are willing to face the truth', 'It was the strongest empire', 'Its people already knew the whole Gospel', 'It was the only land with farms'], 'Think of its honesty about death.', 'There can be no hope or promise unless man first faces the truth.')
  ] },
{ n:5, title:'Egypt and the Indus Valley (Chapter 1, part 3)',
  story:'Two other civilizations arose before 2000 B.C., and neither faced death as honestly as Mesopotamia. In Egypt, about 3100 B.C., King Menes, also called Narmer, united the long valley of the Nile and its delta, with his capital at the city of the White Wall, later called Memphis. Egyptian writing probably received its first inspiration from Mesopotamia.\n\nThe Pharaoh was treated as a god. Vast pyramids rose to guard his body and secure a happy eternity. The yearly flood of the Nile gave rich harvests, yet life was locked into one pattern that changed little in centuries. King Akhenaten tried to change it and failed. Desert and sea surrounded the valley, so it was a land of bondage that was hard to leave.',
  more:'The third civilization grew in the Indus River valley, around the cities of Harappa and Mohenjo-daro. Its writing has not been read. For about a thousand years, roughly 2500 to 1500 B.C., it scarcely changed. Its streets were rigidly planned, with blank brick walls and no monuments. Great granaries stored the food. It seems to have had no kings and only weak weapons, but each city had one great temple mound, and some historians think that priests controlled all life. Invaders called Aryans destroyed it. Carroll suggests that later Indian ideas, such as reincarnation and the unreality of the world, may have begun there; this cannot yet be proved.\n\nSo these great works ended in the despair of Gilgamesh, the weight of the pyramids or the endless wheel of rebirth. Human labor in stone, clay and bronze held no answer. To human eyes man stood in darkness. God’s answer would begin with Abraham.',
  words:'Pharaoh: the king of Egypt. Monolith: here, a society locked in one unchanging pattern. Granary: a storehouse for grain. Reincarnation: the false belief that a soul is born again in other bodies.',
  faith:'Scripture teaches that “it is appointed unto men once to die, and after this the judgment” (Hebrews 9:27, Douay-Rheims). We do not live many lives; Christ redeems us.',
  questions:[
    q('Egypt', 'Who united Egypt about 3100 B.C.?', ['King Menes, also called Narmer', 'King Gilgamesh', 'King Akhenaten', 'Sargon of Agade'], 'His capital was the city of the White Wall.', 'Menes, or Narmer, united Egypt.'),
    q('Egypt', 'How was the Pharaoh regarded?', ['As a god', 'As an ordinary farmer', 'As a servant of the priests of India', 'As an elected judge'], 'Think of why his tomb was so huge.', 'The Pharaoh was treated as a god.'),
    q('Egypt', 'Why were the great pyramids built?', ['To guard the Pharaoh’s body and secure his eternity', 'To store the grain of the poor', 'To watch for enemy ships', 'To teach children to write'], 'They were tombs.', 'The pyramids were royal tombs meant to secure a happy eternity.'),
    q('Egypt', 'Why was Egypt hard to leave?', ['Desert and sea surrounded the Nile valley', 'A great wall circled the whole country', 'The Nile flowed in a circle', 'Snowy mountains closed every side'], 'Think of what lies beside the valley.', 'The fertile valley was enclosed by desert and sea.'),
    q('Indus', 'Which two cities belong to the Indus valley civilization?', ['Harappa and Mohenjo-daro', 'Kish and Uruk', 'Thebes and Memphis', 'Eridu and Ur'], 'One gave the civilization its name.', 'Harappa and Mohenjo-daro were its two chief cities.'),
    q('Indus', 'What was most unusual about the Harappa civilization?', ['It remained almost unchanged for about a thousand years', 'It changed its laws every year', 'It filled its streets with statues', 'It conquered all of Mesopotamia'], 'Think of its rigid plan.', 'It stayed almost the same for about a thousand years.'),
    q('Faith', 'What does Catholic teaching say about reincarnation?', ['It is false: we die once and then are judged', 'It is true for every person', 'It is true only for kings', 'It replaces the Resurrection'], 'Remember Hebrews 9:27.', 'We die once and then are judged.'),
    q('Meaning', 'What conclusion closes the chapter?', ['Human works alone held no answer to man’s darkness', 'Egypt had solved the problem of death', 'Cities made redemption unnecessary', 'The Indus people received the promise first'], 'Who would have to act?', 'No work of human hands held the answer; it had to come from God.')
  ] }
]);

// ───────── ELEMENTARY (F.A.; F.C. uses the same lessons) ─────────
const FA = bank('F.A.', 'an elementary student studying the history of Christendom', {}, [
{ n:1, title:'What Is Christendom?',
  story:'Christendom is the reign of Christ. It means that people know Jesus is their King and live that way. Much of His reign is hidden in our hearts. But some of it can be seen: when brave people follow Jesus and tell others about Him, it shapes families, towns, art, laws and whole countries. It grows through prayer, courage and good example. It grows weak when people are afraid, do not care, or leave the faith.\n\nIn the spring of the year A.D. 30, all of Christendom could fit in one upstairs room in Jerusalem. There was a small group of men led by a fisherman, and a few women from Galilee. From that little room the faith went out to the world.',
  more:'The man who wrote our book was Warren Carroll. He tells us openly that he is a Catholic. He believes that Jesus founded the Catholic Church, led by the Popes. He says a historian must always be honest and love the truth. He also says that a good history should be a good story.',
  words:'Christendom: the reign of Christ among people. Historian: a person who studies and tells the past. Pope: the visible head of the Church on earth.',
  questions:[
    q('Meaning', 'What is Christendom?', ['The reign of Christ', 'A kind of castle', 'The name of one city', 'A book of maps'], 'Think of who is King.', 'Christendom is the reign of Christ.'),
    q('Meaning', 'What helps Christendom grow?', ['Prayer, courage and good example', 'Fear and silence', 'Not caring about God', 'Quarrelling and pride'], 'Choose the good things.', 'It grows through prayer, courage and good example.'),
    q('When', 'Where could all of Christendom fit in the year A.D. 30?', ['In one upstairs room in Jerusalem', 'In a huge stadium in Rome', 'In a ship on the Nile', 'In a pyramid in Egypt'], 'It was a small place.', 'They were in one upper room in Jerusalem.'),
    q('Who', 'Who led the small group in that room?', ['A fisherman', 'A Roman soldier', 'A king of Egypt', 'A merchant'], 'He used nets in his work.', 'A fisherman, Saint Peter, led them.'),
    q('Church', 'Who leads the Church that Jesus founded?', ['The Pope', 'The mayor', 'The oldest historian', 'The emperor'], 'He is the successor of Saint Peter.', 'The Pope leads the Church.'),
    q('History', 'What must a good historian always do?', ['Be honest and love the truth', 'Make up exciting facts', 'Hide what he believes', 'Tell only about money'], 'God loves truth.', 'A historian must be honest and respect the truth.')
  ] },
{ n:2, title:'In the Beginning',
  story:'God has always existed. His Name is I AM. Because God is love, He created the whole universe, the angels and mankind. Everything else needs God in order to exist.\n\nTime began when God created. Jesus Christ is the center of history. He is the Son of God, through whom all things were made, and He was born a baby in Bethlehem.\n\nGod made the first man and woman. He gave each of them a soul that never dies. All people come from these first parents. In the beginning their bodies were not going to die.',
  more:'God gave them a command and warned them. They disobeyed Him, wanting to be like God. Then they tried to hide, and they made excuses. Because of this first sin, called original sin, suffering, hard work and death came into the world. But God still loved them. People were made to know, love and serve God.',
  words:'Create: to make from nothing, as only God can. Soul: the spiritual part of a person that never dies. Original sin: the first sin and what came from it.',
  faith:'Holy Baptism washes away original sin.',
  questions:[
    q('God', 'Why did God create the world?', ['Because He is love', 'Because He was forced to', 'Because someone asked Him', 'Because He needed a house'], 'God is . . . what?', 'God is love, and so He created.'),
    q('History', 'Who is the center of history?', ['Jesus Christ', 'A great soldier', 'A clever king', 'The first farmer'], 'He was born in Bethlehem.', 'Jesus Christ is the center of history.'),
    q('Man', 'What part of a person never dies?', ['The soul', 'The hair', 'The shadow', 'The voice'], 'God gives it to each person.', 'The soul never dies.'),
    q('Man', 'From whom do all people come?', ['One first man and woman', 'Many different first families', 'The angels', 'The first kings'], 'Think of the Garden.', 'All people come from our first parents.'),
    q('The Fall', 'What came into the world because of the first sin?', ['Suffering and death', 'The sun and moon', 'Rivers and seas', 'Love and joy'], 'It is something sad.', 'Original sin brought suffering and death.'),
    q('Purpose', 'Why did God make people?', ['To know, love and serve Him', 'To become very rich', 'To live without rules', 'To build the tallest towers'], 'Remember your catechism.', 'We are made to know, love and serve God.')
  ] },
{ n:3, title:'After Eden: The Flood and the First Cities',
  story:'After they left the Garden, people lived in a hard and dangerous world. They could not save themselves, but God did not give up on them. Many people began to worship idols. Still, many peoples remembered a great God in the sky who made the world.\n\nThen came the great Flood. Very many peoples have stories about it. The Bible tells us that God warned Noah. Noah built the ark, and he and his family were saved.',
  more:'Later people learned to farm and to keep sheep and goats. They built cities. An old city had a shrine for worship, a market for trading and a wall for safety. Jericho, near the Jordan River, was one of the first walled cities. It had a great spring of water.\n\nJericho was in the land later called the Promised Land. This land is near the place where Europe, Asia and Africa meet. From there the good news about Jesus could travel to many places.',
  words:'Idol: a false god. Ark: Noah’s great boat. Shrine: a holy place. Market: a place to buy and sell.',
  questions:[
    q('The Fall', 'Could people save themselves after the first sin?', ['No, they needed God', 'Yes, with stone tools', 'Yes, by building walls', 'Yes, by farming'], 'Only God can save.', 'People needed God to save them.'),
    q('The Flood', 'Whom did God warn about the Flood?', ['Noah', 'Gilgamesh', 'Pharaoh', 'Peter'], 'He built the ark.', 'God warned Noah.'),
    q('The Flood', 'What did Noah build?', ['The ark', 'A pyramid', 'A tower', 'A market'], 'It could float.', 'Noah built the ark.'),
    q('Cities', 'Why did an old city have a wall?', ['For safety', 'For worship', 'For farming', 'For writing'], 'It kept enemies out.', 'The wall protected the city.'),
    q('Jericho', 'What gave water to Jericho?', ['A great spring', 'A snowy mountain top', 'A salty ocean', 'A water truck'], 'Water came up from the ground.', 'Jericho had a great spring.'),
    q('Where', 'Which three continents meet near the Promised Land?', ['Europe, Asia and Africa', 'Europe, America and Africa', 'Asia, Australia and America', 'Africa, America and Australia'], 'They are the old world.', 'Europe, Asia and Africa meet there.')
  ] },
{ n:4, title:'Sumer and King Gilgamesh',
  story:'The Sumerians lived in southern Mesopotamia. They built cities such as Eridu, Uruk and Ur. Abraham would later be born at Ur. The land had lots of clay but almost no stone, so they built with bricks. They built tall temple towers with steps, called ziggurats. The Bible tells of the Tower of Babel, built with bricks on such a plain.',
  more:'The Sumerians wrote on clay with wedge-shaped marks. This is called cuneiform. Their most famous story is about Gilgamesh, king of Uruk. When his dear friend Enkidu died, Gilgamesh was very sad. He traveled far to find a way to live forever, but he could not find it.\n\nPeople needed hope that only God could give. God later chose Abraham, who came from this land.',
  words:'Ziggurat: a temple tower with steps. Cuneiform: wedge-shaped writing. Mesopotamia: the land between two great rivers.',
  questions:[
    q('Building', 'What did the Sumerians use to build?', ['Bricks made from clay', 'Blocks of ice', 'Iron beams', 'Huge logs'], 'They had lots of clay.', 'They built with clay bricks.'),
    q('Words', 'What is a ziggurat?', ['A temple tower with steps', 'A kind of boat', 'A writing stick', 'A wild animal'], 'It is very tall.', 'A ziggurat is a stepped temple tower.'),
    q('Writing', 'What is the wedge-shaped writing called?', ['Cuneiform', 'Alphabet soup', 'Hieroglyphics', 'Cursive'], 'It begins with C.', 'It is called cuneiform.'),
    q('Gilgamesh', 'Who was Gilgamesh?', ['The king of Uruk', 'The builder of the ark', 'The king of Rome', 'A fisherman from Galilee'], 'He ruled a city.', 'Gilgamesh was king of Uruk.'),
    q('Gilgamesh', 'What was Gilgamesh looking for?', ['A way to live forever', 'A bag of gold', 'A new horse', 'A better farm'], 'His friend had died.', 'He wanted to live forever.'),
    q('Abraham', 'Whom did God later choose from this land?', ['Abraham', 'Noah', 'Moses', 'David'], 'He was born at Ur.', 'God chose Abraham.')
  ] },
{ n:5, title:'Egypt and the Indus Valley',
  story:'Egypt lies along the Nile River. About 3100 B.C. a king named Menes joined Egypt into one kingdom. Egypt’s kings were called Pharaohs, and people treated them as gods. Huge pyramids were built as their tombs. Every year the Nile flooded and left rich soil for crops. Desert and sea were all around.',
  more:'Another civilization grew far away in the Indus River valley. Two of its cities were Harappa and Mohenjo-daro. Their streets were laid out in straight lines, and they had big storehouses for grain. We still cannot read their writing.\n\nThese people built great things, but their works could not save anyone. Only God could bring light to the world.',
  words:'Pharaoh: a king of Egypt. Pyramid: a great tomb. Granary: a storehouse for grain.',
  faith:'We live only one life on earth, and then comes God’s judgment.',
  questions:[
    q('Egypt', 'Which river runs through Egypt?', ['The Nile', 'The Jordan', 'The Indus', 'The Ottawa'], 'It begins with N.', 'The Nile runs through Egypt.'),
    q('Egypt', 'What were the kings of Egypt called?', ['Pharaohs', 'Popes', 'Emperors', 'Judges'], 'It begins with Ph.', 'They were called Pharaohs.'),
    q('Egypt', 'What were the pyramids?', ['Tombs for the kings', 'Barns for animals', 'Schools for scribes', 'Homes for farmers'], 'Kings were buried there.', 'Pyramids were royal tombs.'),
    q('Egypt', 'What did the Nile flood leave behind?', ['Rich soil for crops', 'Piles of snow', 'Salt and sand only', 'Gold coins'], 'Farmers were glad of it.', 'The flood left rich soil.'),
    q('Indus', 'Which city was in the Indus River valley?', ['Harappa', 'Jericho', 'Uruk', 'Memphis'], 'It begins with H.', 'Harappa was in the Indus valley.'),
    q('Faith', 'Who alone could bring light to the world?', ['God', 'The Pharaoh', 'The grain keepers', 'The tower builders'], 'People could not save themselves.', 'Only God could bring that light.')
  ] }
]);
window.LESSON_BANKS['FA-writing-history'] = FA;
window.LESSON_BANKS['FC-writing-history'] = Object.assign({}, FA, { student:'F.C.', marker:'Christendom Lesson' });

// ───────── KINDERGARTEN ─────────
window.LESSON_BANKS['LJ-writing-history'] = bank('L.J.', 'a kindergarten student', { readOptions:true }, [
{ n:1, title:'Jesus Is King',
  story:'Jesus is our King. When people love Him and follow Him, we call it Christendom. At first His friends were few. They met in one room in Jerusalem. Then they told the whole world about Jesus.',
  questions:[
    q('Listen', 'Who is our King?', ['Jesus', 'A giant', 'A robot'], 'We pray to Him.', 'Jesus is our King.', 'Jesus is our King.'),
    q('Listen', 'Where did His friends meet?', ['In a room', 'On the moon', 'In a cave of bears'], 'It was inside a house.', 'They met in one room.', 'His friends met in one room in Jerusalem.'),
    q('Listen', 'Whom did they tell about Jesus?', ['The whole world', 'Nobody', 'Only the fish'], 'Think of many, many people.', 'They told the whole world.', 'His friends told the whole world about Jesus.')
  ] },
{ n:2, title:'God Made the World',
  story:'God made the sun, the stars, the earth and all living things. He made the first man and woman. He gave them souls that never die. They disobeyed God. That was the first sin. God still loved them.',
  questions:[
    q('Listen', 'Who made the world?', ['God', 'A farmer', 'A king'], 'He made the sun and stars.', 'God made the world.', 'God made the world.'),
    q('Listen', 'What did the first man and woman do?', ['They disobeyed God', 'They flew to the stars', 'They built a car'], 'It was the first sin.', 'They disobeyed God.', 'The first man and woman disobeyed God.'),
    q('Listen', 'Did God still love them?', ['Yes', 'No', 'Only one day'], 'God is love.', 'Yes, God still loved them.', 'God still loved them.')
  ] },
{ n:3, title:'Noah and the First Cities',
  story:'A great flood came. God told Noah to build a big boat called the ark. God kept Noah and his family safe. Later people built cities. A city had a wall to keep people safe.',
  questions:[
    q('Listen', 'Who built the ark?', ['Noah', 'Jonah', 'A Pharaoh'], 'God told him to build it.', 'Noah built the ark.', 'Noah built the ark.'),
    q('Listen', 'What is the ark?', ['A big boat', 'A tall tree', 'A little hat'], 'It floats.', 'The ark is a big boat.', 'The ark is a big boat.'),
    q('Listen', 'What kept a city safe?', ['A wall', 'A flower', 'A spoon'], 'It goes around the city.', 'A wall kept the city safe.', 'A city had a wall to keep people safe.')
  ] },
{ n:4, title:'Bricks and Towers',
  story:'In a flat land people made bricks from clay. They built tall towers. A king named Gilgamesh was sad when his friend died. He could not find a way to live forever. Only God can give life forever.',
  questions:[
    q('Listen', 'What did the people make from clay?', ['Bricks', 'Bread', 'Shoes'], 'We build with them.', 'They made bricks.', 'People made bricks from clay.'),
    q('Listen', 'Why was the king sad?', ['His friend died', 'He lost a sock', 'It was sunny'], 'He missed someone.', 'His friend died.', 'The king was sad when his friend died.'),
    q('Listen', 'Who can give life forever?', ['God', 'A tower', 'A brick'], 'He made us.', 'Only God can give life forever.', 'Only God can give life forever.')
  ] },
{ n:5, title:'Egypt and the Pyramids',
  story:'Egypt has a long river called the Nile. The king of Egypt was called Pharaoh. People built big pyramids for the kings. There is only one true God, and Pharaoh was not God.',
  questions:[
    q('Listen', 'What is the river in Egypt?', ['The Nile', 'The Moon', 'The Mountain'], 'It begins with N.', 'The river is the Nile.', 'Egypt has a river called the Nile.'),
    q('Listen', 'What was the king of Egypt called?', ['Pharaoh', 'Captain', 'Doctor'], 'It starts with an F sound.', 'He was called Pharaoh.', 'The king of Egypt was called Pharaoh.'),
    q('Listen', 'How many true Gods are there?', ['One', 'Ten', 'None'], 'Hold up that many fingers.', 'There is only one true God.', 'There is only one true God.')
  ] }
]);
})();
