// BANCO DE LECCIONES — L.J. Natural Sciences: Fabre, The Story-Book of Science, Chapters 1–10 (Nov 27 2026)
// Source: Maria's Teacher's Manual and L.J. Science Workbook, checked against Fabre's book. Text in our own words.
// Three-choice questions are new wording of the workbook ideas: DRAFT until Maria reviews.
// In every question the FIRST option is the correct one; the app shuffles them.
// Kindergarten version: short sentences, 3 short choices read aloud, then draw and trace.
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
window.LESSON_BANKS['LJ-science'] = {
  marker: 'LJ Fabre Lesson',
  student: 'L.J.',
  unit: 'Lesson',
  sections: [['','story'],['New word','words'],['God','faith']],
  cite: 'The Story-Book of Science — L.J. Science Workbook',
  minutes: 15,
  grader: 'a kindergarten student',
  gradeNote: 'The student is very young. Accept one-word answers, baby talk and speech recognition mistakes. Use one or two very short, playful sentences.',
  writingStart: 'Now open your science workbook to Lesson {n}.',
  checkLine: 'Show your workbook to your mother.',
  notYet: "That's okay! Finish your drawing and your tracing. Then show your mother.",
  writingHint: 'Think about the story. Draw the part you liked best.',
  sayBlank: true,
  readOptions: true,
  lessons: [

  { n:1, title:'The Six',
    story:'Uncle Paul is a kind man. He knows many things. He helps people. Jacques takes care of the animals. Mother Ambroisine takes care of the house. Three children live there: Claire, Jules and Emile. Emile loves his toys.',
    words:'A family lives together and loves one another.',
    faith:'God gave us our family.',
    questions:[
      { part:'Listen', concept:'Uncle Paul knows many things. He helps people with what he knows.', q:'Who helps people with what he knows?', options:['Uncle Paul','A big bear','A robot'], hint:'He is the uncle.', reteach:'Uncle Paul helps people.' },
      { part:'Listen', concept:'Mother Ambroisine takes care of the house. She helps at home.', q:'Who takes care of the house?', options:['Mother Ambroisine','Emile','A cat'], hint:'She is a mother.', reteach:'Mother Ambroisine takes care of the house.' },
      { part:'Listen', concept:'Jacques takes care of the animals.', q:'What does Jacques take care of?', options:['The animals','The moon','The ships'], hint:'They say moo and baa.', reteach:'Jacques takes care of the animals.' },
      { part:'Listen', concept:'Emile is little. He loves his toys.', q:'What does Emile love?', options:['His toys','His taxes','Hot pepper'], hint:'You play with them.', reteach:'Emile loves his toys.' },
      { part:'Word', concept:'A family lives together and loves one another.', q:'People who live together and love one another are a ____.', options:['family','shoe','cloud'], hint:'You have one too!', reteach:'They are a family.' }
    ],
    writing:'Draw your family at home. Trace: “Uncle Paul tells true stories.” Then tell your mother one thing about your picture.' },

  { n:2, title:'The Fairy Tale and the True Story',
    story:'Mother Ambroisine tells a story about an ant. The story never seems to end. The story says, “The strong should be kind.” Jules wants a true story. Uncle Paul will tell about real ants.',
    words:'True means it is really so.',
    faith:'God loves the truth. We tell the truth.',
    questions:[
      { part:'Listen', concept:'Mother Ambroisine tells a story about an ant.', q:'The first story is about an ____.', options:['ant','elephant','egg'], hint:'It is very small.', reteach:'The story is about an ant.' },
      { part:'Good', concept:'The strong should be kind.', q:'The strong should be ____.', options:['kind','mean','noisy'], hint:'Be nice to little ones.', reteach:'The strong should be kind.' },
      { part:'Word', concept:'True means it is really so.', q:'What kind of story does Jules want?', options:['A true story','A dragon story','A silly rhyme'], hint:'It is really so.', reteach:'Jules wants a true story.' },
      { part:'Listen', concept:'Uncle Paul will tell about real ants.', q:'What will Uncle Paul tell about?', options:['Real ants','A dragon','A magic shoe'], hint:'Tiny and busy.', reteach:'He will tell about real ants.' },
      { part:'Good', concept:'We tell the truth. God loves the truth.', q:'God wants us to tell the ____.', options:['truth','soup','chair'], hint:'Not a fib.', reteach:'We tell the truth.' }
    ],
    writing:'Draw a BIG friend helping a small friend. Trace: “The strong should be kind.” Then tell your mother one thing about your picture.' },

  { n:3, title:'The Building of the City',
    story:'Ants build a city under the ground. They carry earth in their jaws. One ant finds a piece of husk that is too heavy. It gets two friends. Together they put it in.',
    words:'A city is a place with many homes.',
    faith:'The Bible says to look at the ant and learn to be wise.',
    questions:[
      { part:'Listen', concept:'Ants build a city under the ground.', q:'Where is the ant city?', options:['Under the ground','Up in the sky','In a shoe'], hint:'Look down.', reteach:'The city is under the ground.' },
      { part:'Listen', concept:'Ants carry earth in their jaws. Jaws are part of the mouth.', q:'Ants carry earth in their ____.', options:['jaws','bags','boots'], hint:'Their mouths.', reteach:'Ants carry earth in their jaws.' },
      { part:'Listen', concept:'One ant has a husk that is too heavy. It gets two friends.', q:'Did the ant give up?', options:['No, it got friends','Yes, it went home','Yes, it cried'], hint:'It asked for help.', reteach:'The ant did not give up. It got two friends.' },
      { part:'Good', concept:'Ants work together.', q:'Ants work ____.', options:['together','never','asleep'], hint:'With friends.', reteach:'Ants work together.' },
      { part:'Word', concept:'A city is a place with many homes.', q:'A place with many homes is a ____.', options:['city','spoon','sock'], hint:'Ants built one.', reteach:'It is a city.' }
    ],
    writing:'Draw tunnels, rooms and ants. Trace: “Ants work together.” Then tell your mother one thing about your picture.' },

  { n:4, title:'The Cows',
    story:'Tiny plant-lice sit under the leaves. They give the ants a sweet drop. They are like the ants’ cows! Hungry ants go up the bush. The ant pats a plant-louse gently.',
    words:'A cow gives milk.',
    faith:'God takes care of little creatures.',
    questions:[
      { part:'Listen', concept:'Plant-lice give ants a sweet drop. They are like the ants’ cows.', q:'What are the ants’ cows?', options:['Plant-lice','Big dogs','Fish'], hint:'Tiny bugs on leaves.', reteach:'Plant-lice are the ants’ cows.' },
      { part:'Listen', concept:'Plant-lice sit under the leaves.', q:'Where are the plant-lice?', options:['Under the leaves','In a bed','On the moon'], hint:'On the bush.', reteach:'They are under the leaves.' },
      { part:'Listen', concept:'The ant pats the plant-louse gently. There is no bucket!', q:'How does the ant get the sweet drop?', options:['It pats gently','With a bucket','With a hammer'], hint:'Be gentle.', reteach:'The ant pats gently.' },
      { part:'Think', concept:'Hungry ants go UP the bush to get food.', q:'The hungry ants go ____.', options:['up','to bed','swimming'], hint:'To the leaves.', reteach:'Hungry ants go up.' },
      { part:'Word', concept:'A cow gives milk.', q:'A ____ gives milk.', options:['cow','rock','kite'], hint:'It says moo.', reteach:'A cow gives milk.' }
    ],
    writing:'Draw an ant and a plant-louse on a leaf. Trace: “Ants milk plant-lice.” Then tell your mother one thing about your picture.' },

  { n:5, title:'The Sheepfold',
    story:'Some ants make a little clay house for the plant-lice. It keeps them out of the hot sun. A good ant shares its food. Baby ants look like little white worms.',
    words:'Share means give some to others.',
    faith:'God wants us to share.',
    questions:[
      { part:'Listen', concept:'Ants make a little clay house for the plant-lice.', q:'Who is the clay house for?', options:['Plant-lice','Elephants','Whales'], hint:'The ants’ cows.', reteach:'The house is for the plant-lice.' },
      { part:'Listen', concept:'The house keeps them out of the hot sun.', q:'The house keeps them out of the hot ____.', options:['sun','soup','sock'], hint:'It shines.', reteach:'It keeps them out of the hot sun.' },
      { part:'Good', concept:'A good ant shares its food. A good ant does not forget the hungry.', q:'What does a good ant do with food?', options:['Shares it','Hides it','Throws it'], hint:'Be kind!', reteach:'A good ant shares.' },
      { part:'Listen', concept:'Baby ants look like little white worms.', q:'Baby ants look like little white ____.', options:['worms','horses','hats'], hint:'They wiggle.', reteach:'They look like little white worms.' },
      { part:'Word', concept:'Share means give some to others.', q:'To give some to others is to ____.', options:['share','shout','sleep'], hint:'Like the good ant.', reteach:'It is to share.' }
    ],
    writing:'Draw a clay house with two little doors. Trace: “Ants share.” Then tell your mother one thing about your picture.' },

  { n:6, title:'The Wily Dervish',
    story:'A wise man called a dervish made the game of chess for a king. He asked for wheat: one grain, then two, then four, and more and more. It grew too big! The king did not have enough.',
    words:'Double means two times as much.',
    faith:'Jesus tells of a tiny seed that grows into a big tree.',
    questions:[
      { part:'Listen', concept:'A dervish made the game of chess for a king.', q:'What game did he make?', options:['Chess','Tag','Hopscotch'], hint:'It has a king on a board.', reteach:'He made chess.' },
      { part:'Listen', concept:'The dervish asked for grains of wheat.', q:'What did he ask for?', options:['Wheat','Candy','A boat'], hint:'We make bread from it.', reteach:'He asked for wheat.' },
      { part:'Listen', concept:'It grew too big. The king did not have enough wheat.', q:'Could the king pay it all?', options:['No, it was too much','Yes, one cup','Yes, one spoon'], hint:'It grew and grew.', reteach:'No. It was too much.' },
      { part:'Word', concept:'Double means two times as much. One and one make two.', q:'Double 1 is ____.', options:['2','5','9'], hint:'Hold up one finger on each hand.', reteach:'Double 1 is 2.' },
      { part:'Count', concept:'Two and two make four.', q:'Double 2 is ____.', options:['4','3','7'], hint:'Count two fingers and two more.', reteach:'Double 2 is 4.' }
    ],
    writing:'Draw a snowball getting bigger. Trace: “Double and double again!” Then tell your mother one thing about your picture.' },

  { n:7, title:'A Numerous Family',
    story:'Plant-lice have many, many babies. Very soon there are lots of them! Birds eat them. Ladybugs eat them. So the plants can grow.',
    words:'Many means a lot.',
    faith:'God saw all that He made, and it was very good.',
    questions:[
      { part:'Listen', concept:'Plant-lice have many babies very fast.', q:'How many babies do plant-lice have?', options:['Many','None','Only one ever'], hint:'A lot!', reteach:'They have many babies.' },
      { part:'Listen', concept:'Ladybugs eat plant-lice.', q:'Which bug eats plant-lice?', options:['The ladybug','The snail','The bee'], hint:'It is often red with black dots.', reteach:'The ladybug eats plant-lice.' },
      { part:'Listen', concept:'Birds eat plant-lice too.', q:'Who else eats them?', options:['Birds','Cows','Fish'], hint:'They chirp.', reteach:'Birds eat plant-lice.' },
      { part:'Word', concept:'Many means a lot.', q:'A lot means ____.', options:['many','none','one'], hint:'More than you can count on one hand.', reteach:'A lot means many.' },
      { part:'God', concept:'God saw all that He made, and it was very good.', q:'All that God made was very ____.', options:['good','bad','sad'], hint:'God is happy with it.', reteach:'It was very good.' }
    ],
    writing:'Draw a ladybug eating plant-lice. Trace: “Ladybugs eat plant-lice.” Then tell your mother one thing about your picture.' },

  { n:8, title:'The Old Pear-Tree',
    story:'An old pear-tree is cut down. On the stump there are rings. The tree makes one ring each year. We count the rings to know how old it was.',
    words:'A tree has a thick trunk.',
    faith:'God gives us each new year.',
    questions:[
      { part:'Listen', concept:'An old pear-tree is cut down.', q:'What was cut down?', options:['A pear-tree','A house','A flag'], hint:'It grew pears.', reteach:'The pear-tree was cut down.' },
      { part:'Listen', concept:'On the stump there are rings. A ring is a circle.', q:'What is on the stump?', options:['Rings','Shoes','Fish'], hint:'Circles!', reteach:'There are rings on the stump.' },
      { part:'Count', concept:'One ring is one year.', q:'One ring is one ____.', options:['year','minute','spoon'], hint:'You have a birthday each ____.', reteach:'One ring is one year.' },
      { part:'Count', concept:'Count the rings to know how old the tree was. Three rings mean three years.', q:'A tree with 3 rings is ____ years old.', options:['3','10','1'], hint:'Same number as the rings.', reteach:'3 rings mean 3 years.' },
      { part:'Word', concept:'The trunk is the thick part of the tree.', q:'The thick part of a tree is the ____.', options:['trunk','leaf','flower'], hint:'You can hug it.', reteach:'It is the trunk.' }
    ],
    writing:'Draw a big tree with a trunk and rings. Trace: “One ring is one year.” Then tell your mother one thing about your picture.' },

  { n:9, title:'The Age of Trees',
    story:'Some trees live for hundreds of years. They grow very big. Many old trees grow by churches. People take care of that holy place. One old tree has a little chapel inside!',
    words:'Old means it has lived a long time.',
    faith:'A chapel is a holy place to pray.',
    questions:[
      { part:'Listen', concept:'Some trees live for hundreds of years. That is a very long time.', q:'Can a tree live a very long time?', options:['Yes, very long','No, one day','No, one hour'], hint:'Hundreds of years!', reteach:'Yes. Some trees live very long.' },
      { part:'Listen', concept:'Many old trees grow by churches.', q:'Where do many old trees grow?', options:['By churches','In bathtubs','On cars'], hint:'Where we go to Mass.', reteach:'Many old trees grow by churches.' },
      { part:'Listen', concept:'One old tree has a little chapel inside.', q:'What is inside one old tree?', options:['A little chapel','A big whale','A train'], hint:'A place to pray.', reteach:'A little chapel is inside.' },
      { part:'Word', concept:'Old means it has lived a long time.', q:'A thing that has lived a long time is ____.', options:['old','new','tiny'], hint:'Like these great trees.', reteach:'It is old.' },
      { part:'God', concept:'A chapel is a holy place. We pray there.', q:'What do we do in a chapel?', options:['Pray','Throw balls','Yell'], hint:'We talk to God.', reteach:'We pray in a chapel.' }
    ],
    writing:'Draw a very big old tree. Trace: “Old trees are great.” Then tell your mother one thing about your picture.' },

  { n:10, title:'The Length of Animal Life',
    story:'A rat lives a short time. A rabbit lives longer than a rat. A dog lives longer than a rabbit. Uncle Paul says that he lives most who works most. A good life is full of good work.',
    words:'Work means doing a job.',
    faith:'God is happy when we are good and faithful helpers.',
    questions:[
      { part:'Listen', concept:'A rabbit lives longer than a rat.', q:'Who lives longer?', options:['The rabbit','The rat','Not one of them'], hint:'It has long ears.', reteach:'The rabbit lives longer than the rat.' },
      { part:'Listen', concept:'A dog lives longer than a rabbit.', q:'Who lives longer, a dog or a rabbit?', options:['The dog','The rabbit','A flower'], hint:'It says woof.', reteach:'The dog lives longer.' },
      { part:'Good', concept:'Uncle Paul says that he lives most who works most.', q:'He lives most who ____ most.', options:['works','sleeps','pouts'], hint:'Doing a job.', reteach:'He lives most who works most.' },
      { part:'Word', concept:'Work means doing a job.', q:'Doing a job is ____.', options:['work','rain','soup'], hint:'Like putting toys away.', reteach:'It is work.' },
      { part:'Good', concept:'We can do helpful jobs at home. We can set the table.', q:'Which is a helpful job?', options:['Set the table','Make a mess','Hide the shoes'], hint:'It helps at dinner.', reteach:'Setting the table is helpful.' }
    ],
    writing:'Draw yourself doing a helpful job. Trace: “He lives most who works most.” Then tell your mother one thing about your picture.' }
  ]
};
window.LESSON_BANKS['LJ-science'].lessons.forEach(function(l){ l.pictures = PICTURES[l.n] || []; });
})();
