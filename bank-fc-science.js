// BANCO DE LECCIONES — F.C. Natural Sciences: Fabre, The Story-Book of Science, Chapters 1–10 (Nov 27 2026)
// Source: Maria's Teacher's Manual and A.L./F.A./F.C. Workbook, checked against Fabre's book. Text in our own words.
// Bible quotations: Douay-Rheims. In every question the FIRST option is the correct one; the app shuffles them.
// F.C. version: short sentences, 3 choices, choices are read aloud.
// F.A. has a separate file (bank-fa-science.js): correct a lesson in BOTH files.
(function(){
// OLD-BOOK PICTURES by lesson number (public domain, Wikimedia Commons; each one looked at Nov 27 2026).
// The same list is in all four science bank files.
const PICTURES = {
  1: [{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Daniel_Chodowiecki_Andacht.jpg/500px-Daniel_Chodowiecki_Andacht.jpg', label:'A family gathered at the table — Daniel Chodowiecki'}],
  2: [{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Musaeus_Volksm%C3%A4rchen_Illustrationen_von_L._Richter_Hoff-Budde-Nr._919.jpg/500px-Musaeus_Volksm%C3%A4rchen_Illustrationen_von_L._Richter_Hoff-Budde-Nr._919.jpg', label:'A grandmother and a listening child — Ludwig Richter'}, {src:'https://upload.wikimedia.org/wikipedia/commons/2/22/Page_87_illustration_from_The_Fables_of_%C3%86sop_%28Jacobs%29.png', label:'An ant and a grasshopper — Richard Heighway'}],
  3: [{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/PSM_V07_D280_Foraging_ants.jpg/500px-PSM_V07_D280_Foraging_ants.jpg', label:'Ants at work'}],
  4: [{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/PSM_V16_D810_Ant_milking_an_aphis.jpg/500px-PSM_V16_D810_Ant_milking_an_aphis.jpg', label:'An ant milking a plant-louse'}],
  5: [{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/PSM_V16_D810_Ant_milking_an_aphis.jpg/500px-PSM_V16_D810_Ant_milking_an_aphis.jpg', label:'An ant caring for its plant-lice'}],
  6: [{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Caxton_The_Game_and_Playe_of_the_Chesse_13.jpg/500px-Caxton_The_Game_and_Playe_of_the_Chesse_13.jpg', label:'A wise man with a chess board — from William Caxton’s book of chess'}],
  7: [{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/PSM_V54_D086_Cocoon_larva_eggs_and_adult_aphis_lion.png/500px-PSM_V54_D086_Cocoon_larva_eggs_and_adult_aphis_lion.png', label:'A plant-louse hunter: the lacewing, its eggs, young and cocoon'}],
  8: [{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/PSM_V45_D333_Cross_section_of_pin_oak.jpg/500px-PSM_V45_D333_Cross_section_of_pin_oak.jpg', label:'Rings in the wood of an oak'}],
  9: [{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/PSM_V03_D337_Great_chestnut_of_mount_aetna.jpg/500px-PSM_V03_D337_Great_chestnut_of_mount_aetna.jpg', label:'The great chestnut of Mount Etna'}],
  10: [{src:'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/The_Tame_Goose_Thomas_Bewick.jpg/500px-The_Tame_Goose_Thomas_Bewick.jpg', label:'The Tame Goose — Thomas Bewick'}]
};
window.LESSON_BANKS = window.LESSON_BANKS || {};
window.LESSON_BANKS['FC-science'] = {
  marker: 'FC Fabre Lesson',
  student: 'F.C.',
  unit: 'Lesson',
  sections: [['','story'],['Words','words'],['Faith','faith']],
  cite: "Fabre, The Story-Book of Science — Teacher's Manual and F.A./F.C. Workbook",
  minutes: 15,
  grader: 'a young elementary student',
  gradeNote: 'The student is young. Accept very short answers and spelling mistakes. Use very short, simple sentences.',
  writingStart: 'Now open your science workbook to Lesson {n}. Do your drawing and your words. Then answer this:',
  notYet: "That's okay! Finish your workbook page. Then show it to your mother.",
  writingHint: 'Think about the lesson. One or two sentences are enough.',
  sayBlank: true,
  readOptions: true,
  lessons: [

  { n:1, title:'The Six',
    story:'Uncle Paul is a wise, kind man. He loves God and loves nature. He likes to read. He uses what he knows to help people. Jacques takes care of the animals and the fields. His wife, Mother Ambroisine, takes care of the house. Three children live there too. Claire is the oldest. She is a hard worker. Jules asks many questions. Emile is the youngest. He loves his toys.',
    words:'Learned: knowing a lot. Industrious: hard-working.',
    faith:'God is happy when we do our work with love and help others.',
    questions:[
      { part:'The story', q:'Who are the three children?', options:['Claire, Jules and Emile','Claire, Jacques and Paul','Louise, Anne and Emile'], hint:'One girl and two boys.', reteach:'The children are Claire, Jules and Emile.' },
      { part:'The story', q:'What does Uncle Paul like to do?', options:['Read','Sleep all day','Race horses'], hint:'He uses a book.', reteach:'Uncle Paul likes to read.' },
      { part:'The story', q:'Who takes care of the animals?', options:['Jacques','Emile','Claire'], hint:'A grown man.', reteach:'Jacques takes care of the animals and the fields.' },
      { part:'The story', q:'Who takes care of the house?', options:['Mother Ambroisine','Jules','Uncle Paul'], hint:'Jacques’s wife.', reteach:'Mother Ambroisine takes care of the house.' },
      { part:'The story', q:'Who is the oldest child?', options:['Claire','Jules','Emile'], hint:'The girl.', reteach:'Claire is the oldest.' },
      { part:'The story', q:'Who loves his toys?', options:['Emile','Jacques','Uncle Paul'], hint:'The youngest boy.', reteach:'Emile, the youngest, loves his toys.' },
      { part:'Think', q:'What does Uncle Paul do with what he knows?', options:['He helps people','He hides it','He forgets it'], hint:'He is kind.', reteach:'Uncle Paul uses what he knows to help people.' }
    ],
    writing:'Which person in the story would you like to talk with? What would you ask?' },

  { n:2, title:'The Fairy Tale and the True Story',
    story:'Mother Ambroisine tells a made-up story. An ant slips on the ice and breaks its leg. The story says, “The strong should be kind.” The story goes on and on, because there is always someone stronger. Jules wants a story that is really true. Uncle Paul says true stories are wonderful, because truth is the work of God. He will tell them about real ants!',
    words:'Truth: what really is so. Marvelous: wonderful.',
    faith:'God made all that is true. We always tell the truth.',
    questions:[
      { part:'The story', q:'Who hurts its leg on the ice?', options:['The ant','The cat','The ox'], hint:'A tiny insect.', reteach:'The ant slips and breaks its leg.' },
      { part:'The moral', q:'The strong should be ____.', options:['kind','mean','loud'], hint:'How should we treat small ones?', reteach:'The strong should be kind.' },
      { part:'The story', q:'Who tells the made-up story?', options:['Mother Ambroisine','Uncle Paul','Emile'], hint:'She takes care of the house.', reteach:'Mother Ambroisine tells it.' },
      { part:'The story', q:'What kind of story does Jules want?', options:['A true story','A dragon story','A sleepy story'], hint:'Not make-believe.', reteach:'Jules wants a really true story.' },
      { part:'Think', q:'Truth is the work of ____.', options:['God','a king','a rat'], hint:'Who made all things?', reteach:'Uncle Paul says truth is the work of God.' },
      { part:'The story', q:'What will Uncle Paul tell about?', options:['Real ants','A flying horse','A magic hat'], hint:'Very small creatures.', reteach:'He will tell them about real ants.' },
      { part:'Words', q:'Truth means what ____.', options:['really is so','we only pretend','sounds funny'], hint:'Not make-believe.', reteach:'Truth is what really is so.' }
    ],
    writing:'Can a true story be as exciting as a made-up one? Why?' },

  { n:3, title:'The Building of the City',
    story:'Ants are building a city under the ground. They carry bits of earth in their jaws. They make roads, rooms and big halls. The rain cannot reach them. Carpenter ants use straw and dry stems like wood. One ant has an oat husk that is too heavy. It does not give up. It gets two friends. They turn the husk point-down, and in it goes!',
    words:'Subterranean: under the ground. Perseverance: not giving up.',
    faith:'The Bible says: “Go to the ant, O sluggard, and consider her ways, and learn wisdom” (Proverbs 6:6). We can learn to work well.',
    questions:[
      { part:'The story', q:'Where is the ant city?', options:['Under the ground','In a tall tree','In a boat'], hint:'The ants dig.', reteach:'The ant city is under the ground.' },
      { part:'The story', q:'How do ants carry the earth?', options:['In their jaws','In a tiny wagon','In a little hat'], hint:'Their mouths.', reteach:'Ants carry earth in their jaws.' },
      { part:'The story', q:'What cannot reach the deep rooms?', options:['The rain','The ants','The earth'], hint:'It is wet.', reteach:'They dig deep so the rain cannot reach them.' },
      { part:'The story', q:'What is too heavy for one ant?', options:['An oat husk','A grain of sand','A drop of dew'], hint:'From a grain plant.', reteach:'The oat husk is too heavy.' },
      { part:'Perseverance', q:'What does the ant do then?', options:['It gets two friends','It gives up','It goes away to sleep'], hint:'It asks for help.', reteach:'The ant gets two helpers.' },
      { part:'The story', q:'How does the husk go in?', options:['They turn it point-down','They paint it','They blow on it'], hint:'Turn it!', reteach:'They turn it point-down and it drops in.' },
      { part:'Words', q:'Perseverance means not ____.', options:['giving up','eating','singing'], hint:'Keep trying!', reteach:'Perseverance means not giving up.' }
    ],
    writing:'When is it good to ask for help?' },

  { n:4, title:'The Cows',
    story:'Ants walk up and down an elder bush. The ants going up are thin. The ants coming down are fat. Under the leaves are tiny plant-lice. They drink the plant’s juice. They give a sweet drop from two little tubes. They are the ants’ cows! The ant gently pats a plant-louse with its feelers to get a drop.',
    words:'Antennae: an insect’s feelers. Sap: the juice of a plant.',
    faith:'God, our heavenly Father, feeds even the birds (Matthew 6:26). He cares for little creatures.',
    questions:[
      { part:'The story', q:'What are the ants’ cows?', options:['Plant-lice','Bees','Frogs'], hint:'Tiny bugs on the leaves.', reteach:'Plant-lice are the ants’ cows.' },
      { part:'The story', q:'Where are the plant-lice?', options:['Under the leaves','At the bottom of a pond','In the house'], hint:'Look on the bush.', reteach:'They are under the leaves and on soft twigs.' },
      { part:'The story', q:'What do plant-lice drink?', options:['Plant juice','Cow’s milk','Sea water'], hint:'It is called sap.', reteach:'They drink sap, the juice of the plant.' },
      { part:'The story', q:'How does the ant get a drop?', options:['It pats gently','It hits hard','It shouts'], hint:'Be gentle!', reteach:'The ant gently pats the plant-louse.' },
      { part:'Words', q:'Antennae are an insect’s ____.', options:['feelers','wings','shoes'], hint:'They are on its head.', reteach:'Antennae are feelers.' },
      { part:'Think', q:'The ants going UP are ____.', options:['thin and hungry','fat and full','fast asleep'], hint:'They have not eaten yet.', reteach:'Going up, they are thin and hungry.' },
      { part:'Think', q:'The ants coming DOWN are ____.', options:['fat and full','thin and hungry','made of wood'], hint:'They have had a sweet meal.', reteach:'Coming down, they are fat and full.' }
    ],
    writing:'Why are the ants going up thin, and the ants coming down fat?' },

  { n:5, title:'The Sheepfold',
    story:'Some ants make a little clay house for their plant-lice. The house keeps the herd close and out of the hot sun. Uncle Paul tells only what he has seen. A good ant shares its food with the others. Baby ants look like little white worms. They have no feet. The worker ants feed them.',
    words:'Sheepfold: a pen for sheep. Egoist: someone who thinks only of himself.',
    faith:'God takes care of all He made. He wants us to share.',
    questions:[
      { part:'The story', q:'Who is the little clay house for?', options:['Plant-lice','Little horses','Birds'], hint:'The ants’ cows.', reteach:'The ants build it for their plant-lice.' },
      { part:'The story', q:'The house keeps them out of the hot ____.', options:['sun','sand','soup'], hint:'It is up in the sky.', reteach:'It gives them shade from the sun.' },
      { part:'Truth', q:'What does Uncle Paul tell?', options:['Only what he has seen','Things that he made up','Nothing at all'], hint:'He is truthful.', reteach:'He tells only what he has seen.' },
      { part:'Charity', q:'What does a good ant do with food?', options:['Shares it','Hides it','Throws it away'], hint:'Be like this ant!', reteach:'A good ant shares.' },
      { part:'The story', q:'Baby ants look like little white ____.', options:['worms','birds','fish'], hint:'They wiggle and have no feet.', reteach:'They look like little white worms.' },
      { part:'The story', q:'Who feeds the baby ants?', options:['The worker ants','The plant-lice','The rain'], hint:'The busy ants.', reteach:'The worker ants feed them.' },
      { part:'Words', q:'An egoist thinks only of ____.', options:['himself','his friends','his mother'], hint:'Me, me, me.', reteach:'An egoist thinks only of himself.' }
    ],
    writing:'Why did Uncle Paul tell only what he had seen?' },

  { n:6, title:'The Wily Dervish',
    story:'A king was bored. A wise man called a dervish made the game of chess for him. The king wanted to give him a gift. The dervish asked for wheat: 1 grain, then 2, then 4, then 8, doubling on every square of the board. The king thought it was very little. But it was more wheat than in the whole world! Numbers that double grow very fast.',
    words:'Double: two times as much. Wily: very clever.',
    faith:'Jesus tells of a tiny mustard seed that grows into a big tree (Matthew 13:31–32). Little things can grow great.',
    questions:[
      { part:'The story', q:'What game did the dervish make?', options:['Chess','Tag','Marbles'], hint:'It has a king on a board.', reteach:'He made the game of chess.' },
      { part:'The story', q:'What did he ask for?', options:['Grains of wheat','A white horse','A gold crown'], hint:'Farmers grow it.', reteach:'He asked for grains of wheat.' },
      { part:'Math', q:'1, 2, 4, ____.', options:['8','5','6'], hint:'4 and 4.', reteach:'4 doubled is 8.' },
      { part:'Words', q:'To double means ____ times as much.', options:['two','ten','five'], hint:'A pair.', reteach:'Double means two times as much.' },
      { part:'The story', q:'What did the king think at first?', options:['It was very little','It was far too much','It was too heavy'], hint:'Just a few grains?', reteach:'The king thought it was very little.' },
      { part:'The story', q:'Could the king pay it all?', options:['No','Yes, with one bag','Yes, with one cup'], hint:'It grew and grew!', reteach:'No. There was not enough wheat in the whole world.' },
      { part:'Math', q:'Double 5 is ____.', options:['10','7','55'], hint:'5 and 5.', reteach:'5 and 5 make 10.' }
    ],
    writing:'Why did the king think the dervish asked for very little?' },

  { n:7, title:'A Numerous Family',
    story:'Plant-lice have many babies, very fast. Soon they could cover the plants. But many animals eat them. Young birds eat them. The ladybug eats them. So there are not too many, and the plants can grow. God made a good order in nature.',
    words:'Predator: an animal that hunts and eats others. Generation: the babies born of one set of parents.',
    faith:'“And God saw all the things that he had made, and they were very good” (Genesis 1:31).',
    questions:[
      { part:'The story', q:'Plant-lice have many babies very ____.', options:['fast','slowly','rarely'], hint:'In just a few weeks.', reteach:'They multiply very fast.' },
      { part:'The story', q:'Which bug eats plant-lice?', options:['The ladybug','The snail','The bee'], hint:'It is red with spots, or called the good God’s bug.', reteach:'The ladybug eats plant-lice.' },
      { part:'The story', q:'Who else eats them?', options:['Young birds','Big brown cows','Rabbits'], hint:'They fly.', reteach:'Young birds eat plant-lice.' },
      { part:'Think', q:'What if nothing ate them?', options:['They would spoil the plants','The plants would be happier','They would turn into birds'], hint:'Too many mouths!', reteach:'Too many plant-lice would harm the plants.' },
      { part:'Faith', q:'All that God made was very ____.', options:['good','bad','sad'], hint:'Genesis 1:31.', reteach:'God saw that all He made was very good.' },
      { part:'Words', q:'A predator ____ other animals.', options:['hunts and eats','feeds and bathes','paints'], hint:'The ladybug is one.', reteach:'A predator hunts and eats other animals.' },
      { part:'Math', q:'3 groups of 3 babies make ____.', options:['9','6','33'], hint:'Count 3, 6, …', reteach:'3 and 3 and 3 make 9.' }
    ],
    writing:'Why is it good that many animals eat plant-lice?' },

  { n:8, title:'The Old Pear-Tree',
    story:'An old pear-tree is cut down. It has worms and no more fruit. Uncle Paul shows rings on the stump. The tree grows one new ring each year. If we count the rings, we know how old it was. The pear-tree had 45 rings. It was 45 years old!',
    words:'Trunk: the thick stem of a tree. Annual: once every year.',
    faith:'Each year of life is a gift from God.',
    questions:[
      { part:'The story', q:'What kind of tree was cut down?', options:['A pear-tree','A palm tree','A pine tree'], hint:'Its fruit is juicy and green or yellow.', reteach:'It was an old pear-tree.' },
      { part:'The story', q:'What is on the stump?', options:['Rings','Nests','Letters'], hint:'Circles.', reteach:'There are rings on the stump.' },
      { part:'The story', q:'One ring is one ____.', options:['year','day','hour'], hint:'A birthday comes once each ____.', reteach:'One ring is one year.' },
      { part:'The story', q:'How old was the pear-tree?', options:['45 years','5 years','100 years'], hint:'It had 45 rings.', reteach:'It was 45 years old.' },
      { part:'Math', q:'A tree has 7 rings. It is ____ years old.', options:['7','17','2'], hint:'One ring, one year.', reteach:'7 rings mean 7 years.' },
      { part:'Words', q:'The thick stem of a tree is the ____.', options:['trunk','leaf','seed'], hint:'You can hug it.', reteach:'The thick stem is the trunk.' },
      { part:'Math', q:'Which tree is older?', options:['One with 10 rings','One with 3 rings','One with 1 ring'], hint:'More rings, more years.', reteach:'More rings mean more years.' }
    ],
    writing:'What can you learn by counting the rings of a tree?' },

  { n:9, title:'The Age of Trees',
    story:'Some trees live for hundreds of years. There are great chestnuts, oaks and yews. A famous one is called the chestnut of a hundred horses. One old oak has a little chapel inside its trunk! Many old trees grow in churchyards. People respect the holy ground, so they do not cut the trees.',
    words:'Century: one hundred years. Ancient: very, very old.',
    faith:'A chapel is a holy place to pray. We are quiet and respectful there.',
    questions:[
      { part:'The story', q:'How long can some trees live?', options:['Hundreds of years','Only one short week','Two days'], hint:'Very, very long.', reteach:'Some trees live hundreds of years.' },
      { part:'The story', q:'A famous tree is the chestnut of a hundred ____.', options:['horses','hats','fish'], hint:'You can ride them.', reteach:'It is the chestnut of a hundred horses.' },
      { part:'The story', q:'What is inside the old oak?', options:['A little chapel','A big deep lake','A school bus'], hint:'A place to pray.', reteach:'There is a little chapel inside the oak.' },
      { part:'The story', q:'Where do many old trees grow?', options:['In churchyards','On top of roofs','In the sea'], hint:'Near a church.', reteach:'Many old trees grow in churchyards.' },
      { part:'Think', q:'Why are they safe there?', options:['People respect the holy place','The trees can run away if they see an axe','Nobody has eyes'], hint:'We are respectful near a church.', reteach:'People respect holy ground and do not cut the trees.' },
      { part:'Words', q:'A century is ____ years.', options:['one hundred','five','two'], hint:'A very long time.', reteach:'A century is one hundred years.' },
      { part:'Words', q:'Ancient means very ____.', options:['old','new','small'], hint:'Like these great trees.', reteach:'Ancient means very old.' }
    ],
    writing:'Why do old trees grow safely in churchyards?' },

  { n:10, title:'The Length of Animal Life',
    story:'Animals live for different times. A rat lives about 4 years. A dog may live 20 years or more. A goose may live 25 years or more. Some farm animals die sooner because they work too hard or are not cared for well. Uncle Paul says, “He lives most who works most.” A good life is full of good work.',
    words:'Duty: what we ought to do.',
    faith:'Jesus says: “Well done, good and faithful servant” (Matthew 25:21).',
    questions:[
      { part:'The story', q:'Which lives only about 4 years?', options:['The rat','The dog','The goose'], hint:'It is small with a long tail.', reteach:'A rat lives about 4 years.' },
      { part:'The story', q:'Which lives longer?', options:['The dog','The rat','They are the same'], hint:'20 years or 4 years?', reteach:'The dog lives much longer than the rat.' },
      { part:'The story', q:'Which bird may live 25 years or more?', options:['The goose','The fly','The ant'], hint:'It honks.', reteach:'A goose may live 25 years or more.' },
      { part:'The story', q:'Why do some farm animals die sooner?', options:['They work too hard','They read too much','They sing too loud'], hint:'They get very tired.', reteach:'Too much work and poor care make their lives shorter.' },
      { part:'Meaning', q:'He lives most who ____ most.', options:['works','sleeps','cries'], hint:'Think of the busy ants.', reteach:'He lives most who works most.' },
      { part:'Words', q:'Duty means what we ____.', options:['ought to do','like to eat','see in dreams'], hint:'Like chores.', reteach:'Duty is what we ought to do.' },
      { part:'Faith', q:'“Well done, good and faithful ____.”', options:['servant','sailor','singer'], hint:'One who serves.', reteach:'Jesus praises the good and faithful servant.' }
    ],
    writing:'What does “He lives most who works most” mean?' }
  ]
};
window.LESSON_BANKS['FC-science'].lessons.forEach(function(l){ l.pictures = PICTURES[l.n] || []; });
})();
