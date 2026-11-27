// BANCO DE LECCIONES — F.A. Natural Sciences: Fabre, The Story-Book of Science, Chapters 1–10 (Nov 27 2026)
// Source: Maria's Teacher's Manual and A.L./F.A./F.C. Workbook, checked against Fabre's book. Text in our own words.
// Bible quotations: Douay-Rheims. In every question the FIRST option is the correct one; the app shuffles them.
// F.C. has a separate file (bank-fc-science.js): correct a lesson in BOTH files.
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
window.LESSON_BANKS['FA-science'] = {
  marker: 'FA Fabre Lesson',
  student: 'F.A.',
  unit: 'Lesson',
  sections: [['','story'],['Words','words'],['Faith','faith']],
  cite: "Fabre, The Story-Book of Science — Teacher's Manual and F.A./F.C. Workbook",
  minutes: 15,
  grader: 'an elementary student',
  gradeNote: 'The student is young. Accept short answers and spelling mistakes. Use very simple words.',
  writingStart: 'Now open your science workbook to Lesson {n}. Do the Level-Up and Drawing page. One question is:',
  notYet: "That's okay! Finish your workbook page. Then show it to your mother.",
  writingHint: 'Think about the lesson. Give one example.',
  sayBlank: true,
  lessons: [

  { n:1, title:'The Six',
    story:'Uncle Paul is a wise and kind man who lives in the country. He loves God and loves to look at the wonders of nature. He rests by reading. People call him Maître Paul, which means Master Paul, because he uses what he knows to help others. Old Jacques takes care of the animals and the fields. His wife, Mother Ambroisine, takes care of the house. Uncle Paul’s nieces and nephews live there too. Claire is the oldest. She works hard and is gentle. Jules is curious, and he gets angry when someone crosses him, but he has a good heart. Emile is the youngest. He is full of fun and loves his box of toys.',
    words:'Seclusion: being alone, away from others. Industrious: hard-working. Learned: knowing a lot. Nephew and niece: the son and daughter of your brother or sister.',
    faith:'The home of Nazareth teaches us that every good work done with love has dignity. What we learn should help other people.',
    questions:[
      { part:'The story', q:'Who are the three children in the story?', options:['Claire, Jules and Emile','Claire, Jacques and Emile','Louise, Jules and Paul','Marie, Jules and Emile'], hint:'One girl and two boys.', reteach:'The three children are Claire, Jules and Emile.' },
      { part:'The story', q:'Who takes care of the animals and the fields?', options:['Jacques','Mother Ambroisine','Claire','Emile'], hint:'He is an old friend of the family.', reteach:'Jacques takes care of the animals and the fields.' },
      { part:'The story', q:'What does Mother Ambroisine take care of?', options:['The house','The king’s chess board','The village school','The ant-hills'], hint:'She works indoors.', reteach:'Mother Ambroisine takes care of the house.' },
      { part:'The story', q:'Why do people call him Maître Paul?', options:['He is learned and helps others with what he knows','He is rich and owns many shops','He is the strongest man in the village','He is a king who has many servants'], hint:'Think about his knowledge.', reteach:'He is called Master Paul because he is learned and uses his learning to help others.' },
      { part:'The story', q:'How does Uncle Paul rest?', options:['By reading','By sleeping all day','By racing horses','By going to parties'], hint:'He uses a book.', reteach:'Uncle Paul rests by reading.' },
      { part:'The children', q:'Who is the oldest, hard-working and gentle?', options:['Claire','Jules','Emile','Jacques'], hint:'The girl.', reteach:'Claire is the oldest. She works hard and is gentle.' },
      { part:'The children', q:'Which child is curious and gets angry when crossed?', options:['Jules','Claire','Emile','Paul'], hint:'The older boy.', reteach:'Jules is curious and quick to get angry, but he has a good heart.' },
      { part:'The children', q:'What does Emile love?', options:['His toys','His heavy plow','His knitting','His big book'], hint:'He keeps them in a box.', reteach:'Emile, the youngest, loves his box of toys.' }
    ],
    writing:'Describe one of the characters in 3 or 4 sentences. Give one detail from the lesson.' },

  { n:2, title:'The Fairy Tale and the True Story',
    story:'One evening Emile and Jules ask Mother Ambroisine for a story. She tells a made-up tale. An ant slips on the ice and breaks its leg. “Ice, the strong should be kind,” says the tale. But the sun is stronger than the ice, and the clouds are stronger than the sun. On and on it goes, because there is always someone stronger. Emile gets tired of it. When she starts another tale, Jules says it is not true. He wants a story that is really true. Uncle Paul closes his book. He says that true stories are wonderful and useful too, because truth is the work of God. Then he offers to tell them about real ants.',
    words:'Fabrication: something made up. Marvelous: wonderful. Moral: the lesson of a story. Truth: what really is so.',
    faith:'God is the author of truth. We must always tell the truth. A fable is not a lie, because everyone knows it is a made-up story that teaches something true.',
    questions:[
      { part:'The story', q:'Who tells the first story?', options:['Mother Ambroisine','Uncle Paul','Claire','Jacques'], hint:'She is spinning while she talks.', reteach:'Mother Ambroisine tells the made-up tale.' },
      { part:'The story', q:'What happens to the ant on the ice?', options:['It breaks its leg','It learns to skate','It finds some wheat','It turns into a fly'], hint:'The ice is slippery.', reteach:'The ant slips and breaks its leg.' },
      { part:'The moral', q:'The strong should be ____.', options:['kind','loud','first','alone'], hint:'How should a big friend treat a small one?', reteach:'The moral says that the strong should be kind.' },
      { part:'The story', q:'Why can the tale go on and on?', options:['There is always someone stronger','The ant never stops walking','Emile keeps asking new riddles','The ice melts and freezes again'], hint:'Ice, then sun, then clouds…', reteach:'Each time there is someone stronger, so the tale can continue.' },
      { part:'The story', q:'Which story does Jules call a fairy tale?', options:['Cinderella','The story of real ants','The story of Noah','The life of a saint'], hint:'It has a glass slipper.', reteach:'Jules says there is no truth in tales such as Cinderella.' },
      { part:'The story', q:'What kind of story does Jules want?', options:['A really true story','A story with a dragon','A story with an ogre','A story with no end'], hint:'He is tired of make-believe.', reteach:'Jules wants a story that is really true.' },
      { part:'Think', q:'Why does Uncle Paul say true stories are better?', options:['Truth is the work of God, wonderful and useful','True stories are always very short','True stories never have animals in them','Made-up stories are too hard to remember'], hint:'Who made what is true?', reteach:'Truth is the work of God. A true story is both wonderful and useful.' },
      { part:'The story', q:'What does Uncle Paul promise to tell about?', options:['Real ants','A fire dragon','A magic lamp','A talking cat'], hint:'Very small creatures.', reteach:'He offers to tell them about real ants.' }
    ],
    writing:'Say the moral “The strong should be kind” in your own words. Give an example from your family.' },

  { n:3, title:'The Building of the City',
    story:'Uncle Paul shows the children the ants at work. Many little miners come up out of the ground, each carrying a grain of earth in its jaws. Under the ground they are building a city with streets, bedrooms, storehouses and big halls, deep down where the rain cannot reach. Other ants are carpenters. A bit of straw becomes a beam, and a dry leaf stem becomes a post. One ant finds a piece of oat husk that is too heavy. It does not give up. It brings two helpers. The husk gets stuck at the hole, so they turn it point-down, and in it goes. Uncle Paul says that the pride of work is a noble pride.',
    words:'Subterranean: under the ground. Gallery: a long tunnel. Joist: a small beam. Perseverance: not giving up.',
    faith:'“Go to the ant, O sluggard, and consider her ways, and learn wisdom” (Proverbs 6:6). St. Joseph the Worker teaches us to work well for God.',
    questions:[
      { part:'The story', q:'Where is the ant city?', options:['Under the ground','On top of a tall tree','Inside the house','In the middle of a pond'], hint:'The miners dig.', reteach:'The ant city is under the ground.' },
      { part:'The story', q:'How do the ants carry the earth?', options:['In their jaws','On their backs in baskets','In little carts','With their feelers only'], hint:'Think of their mouths.', reteach:'Each ant carries a grain of earth in its jaws.' },
      { part:'The story', q:'Why do they build deep down?', options:['So the rain cannot reach them','So they can see the stars','So they can find ice','So they never have to work'], hint:'Water could flood the rooms.', reteach:'They dig deep so that the rain cannot reach their city.' },
      { part:'The story', q:'What do the carpenter ants use as a beam?', options:['A bit of straw','A steel nail','A fish bone','A piece of glass'], hint:'It grows in a wheat field.', reteach:'A bit of straw is a beam for the ants.' },
      { part:'The story', q:'What was too heavy for one ant?', options:['A piece of oat husk','A grain of sand','A drop of water','A tiny seed shell of dust'], hint:'It comes from a grain plant.', reteach:'The oat husk was too heavy for one ant.' },
      { part:'Perseverance', q:'What did the ant do about the heavy husk?', options:['It went to get two helpers','It gave up and went to sleep','It left it for the rain','It asked Uncle Paul to lift it'], hint:'Many are stronger than one.', reteach:'The ant did not give up. It brought two helpers.' },
      { part:'Think', q:'How did the husk get into the hole?', options:['They turned it point-down','They made it round like a ball','They waited for the wind','They pushed it flat across the hole'], hint:'They changed which end went first.', reteach:'When it was stuck, they turned it point-down and it went in.' },
      { part:'Virtue', q:'What does Uncle Paul call a noble pride?', options:['The pride of work','The pride of money','The pride of winning','The pride of new clothes'], hint:'The ants are very busy.', reteach:'The pride of work is a noble pride: being glad of work done well.' }
    ],
    writing:'How did the ants solve the problem of the oat husk? Use the words perseverance and teamwork.' },

  { n:4, title:'The Cows',
    story:'Uncle Paul takes the children to an elder bush. Ants are walking up and down the trunk. The ants going up are thin. The ants coming down are fat and slow. Under the leaves and on the soft twigs there are many tiny plant-lice. They suck the juice of the plant. Each one has two little tubes at its back, and a sweet drop comes out. The plant-lice are the ants’ cows! When no drop comes, an ant gently pats the plant-louse and tickles it with its feelers. Uncle Paul says, “What cannot gentleness accomplish!”',
    words:'Plant-louse: a tiny insect that lives on plants. Antennae: an insect’s feelers. Sap: the juice of a plant. Udder: the part of a cow that gives milk.',
    faith:'“Behold the birds of the air… and your heavenly Father feedeth them” (Matthew 6:26). God takes care of even the smallest creatures.',
    questions:[
      { part:'The story', q:'What are the ants’ cows?', options:['Plant-lice','Bees','Snails','Ladybugs'], hint:'Tiny insects on the leaves.', reteach:'The plant-lice are the ants’ cows.' },
      { part:'Observation', q:'Where are the plant-lice?', options:['Under the leaves and on soft twigs','Deep inside the hard trunk','At the bottom of the pond','Inside the white ant eggs'], hint:'Look under something green.', reteach:'They sit under the leaves and on the tender wood.' },
      { part:'The story', q:'What do plant-lice eat?', options:['The sap of the plant','Grains of wheat','Little ants','Bits of straw'], hint:'It is the plant’s juice.', reteach:'Plant-lice suck the sap.' },
      { part:'Observation', q:'Where does the sweet drop come from?', options:['Two little tubes on its back end','The tips of its feelers','The flowers of the bush','A crack in the trunk'], hint:'They are like little udders.', reteach:'The drop comes from two small tubes at the back of the plant-louse.' },
      { part:'The story', q:'How does the ant get a drop?', options:['It gently pats and tickles the plant-louse','It bites the plant-louse hard','It shakes the whole bush','It squeezes it with a big stick'], hint:'Be gentle!', reteach:'The ant pats and tickles the plant-louse gently with its antennae.' },
      { part:'Think', q:'Why are the ants going up thin?', options:['They are hungry and going to eat','They are sick and going to rest','They have just finished a big meal','They are carrying too much earth'], hint:'What is at the top?', reteach:'They are hungry. They are going up to find food.' },
      { part:'Think', q:'Why are the ants coming down fat?', options:['They are full and carrying food home','They are tired of walking in the sun','They are carrying water to the bush','They have grown older at the top'], hint:'They have had their milk.', reteach:'They are full of the sweet drops and are going home.' },
      { part:'Compare', q:'How is a plant-louse different from a cow?', options:['It is a tiny insect','It gives a drink','It is cared for gently','It eats from a plant'], hint:'Find something true of the louse but not of a cow.', reteach:'A cow is a big animal that gives milk. A plant-louse is a tiny insect.' }
    ],
    writing:'Why do the words cows, milk and udders fit this story? Write one way a plant-louse is different from a cow.' },

  { n:5, title:'The Sheepfold',
    story:'Jacques says that God gives the plant-louse to the ant, as He gives the cow to man. Some ants build a little summer house of damp clay for their plant-lice. They clear the earth from the top of a grass root and build a roof around it, with little doors. The herd is close by and out of the hot sun. Uncle Paul only tells what he has seen. At home, an ant that has eaten shares food from its mouth with the others. An egoist thinks only of himself, and a good ant is not like that. The baby ants look like little white worms with no feet. The workers feed them one mouthful at a time.',
    words:'Sheepfold: a pen for sheep. Châlet: a little hut in the mountains. Vault: a rounded roof. Egoist: someone who thinks only of himself.',
    faith:'God takes care of all He made. This care is called Providence. He asks us to share with the hungry.',
    questions:[
      { part:'The story', q:'Why do some ants build a little house for plant-lice?', options:['To keep them close and out of the hot sun','To keep them far away from the ants','To store wheat for the winter','To make a school for young ants'], hint:'A farmer keeps cows near.', reteach:'The house keeps the plant-lice near and shaded.' },
      { part:'The story', q:'What do the ants build it with?', options:['Damp earth','Pieces of stone','Wool from sheep','Pieces of ice'], hint:'Wet soil sticks together.', reteach:'They build a clay house of damp earth.' },
      { part:'The story', q:'What holds up the little house like a frame?', options:['The top of a grass root','A big iron post','The wing of a bird','A pile of oat husks'], hint:'It belongs to a tuft of grass.', reteach:'The ants uncover the top of a grass root and build around it.' },
      { part:'Truth', q:'What does Uncle Paul tell the children?', options:['Only what he has seen for himself','Everything that people say','Made-up things to surprise them','Things he dreamed at night'], hint:'He is very careful about truth.', reteach:'Uncle Paul will not promise what he has not seen.' },
      { part:'Words', q:'An egoist is someone who thinks only of ____.', options:['himself','his neighbours','the baby ants','his work'], hint:'Ego means I.', reteach:'An egoist thinks only of himself.' },
      { part:'Charity', q:'What does a good ant do after eating?', options:['It shares food with the others','It hides the food from the others','It sleeps for the whole winter','It chases the hungry ants away'], hint:'It is not selfish.', reteach:'A good ant shares food from its mouth with the hungry.' },
      { part:'The story', q:'What do the very young ants look like?', options:['Little white worms with no feet','Tiny ants with long wings','Little green leaves','Small black stones'], hint:'They cannot walk yet.', reteach:'They begin as little white worms without feet.' },
      { part:'The story', q:'Who feeds the young ants?', options:['The worker ants','They feed themselves','The plant-lice','Jacques'], hint:'The busy grown ants.', reteach:'The workers feed them mouthful by mouthful.' }
    ],
    writing:'What is an egoist? Give one example of acting like an egoist and one example of sharing like the ant.' },

  { n:6, title:'The Wily Dervish',
    story:'Uncle Paul tells a story to show how fast numbers can grow. A king in India was bored. A dervish, a man who left worldly things to pray, invented the game of chess for him. The king offered him a reward. The dervish asked for one grain of wheat on the first square of the board, two on the second, four on the third, doubling on every one of the 64 squares. The king thought this was very little and called him foolish. But the wise men counted: there was not enough wheat in the whole world! The king made the dervish his chief minister. Doubling is like a snowball that grows as it rolls.',
    words:'Dervish: a man who gives up worldly things to pray. Vizier: a king’s high helper. Double: two times as much. Wily: very clever.',
    faith:'Jesus tells of the tiny mustard seed that grows into a tree (Matthew 13:31–32). Small good habits can grow big. A wise person thinks ahead.',
    questions:[
      { part:'The story', q:'What game did the dervish invent?', options:['Chess','Hide-and-seek','Marbles','Tag'], hint:'It has a king and a queen on a board.', reteach:'The dervish invented chess.' },
      { part:'The story', q:'What did the dervish ask for?', options:['One grain of wheat, doubled on each square','One bag of gold for each square','The king’s best white horse','A new house with 64 windows'], hint:'It sounds very small at first.', reteach:'He asked for one grain on the first square and double on each next square.' },
      { part:'Math', q:'1, 2, 4, 8. What comes next?', options:['16','10','12','9'], hint:'Double 8.', reteach:'8 doubled is 16.' },
      { part:'Math', q:'How many squares does the chess board have?', options:['64','32','16','100'], hint:'8 rows of 8.', reteach:'A chess board has 8 times 8, which is 64 squares.' },
      { part:'The story', q:'What did the king think at first?', options:['The reward was very small','The reward was far too big','The dervish wanted his crown','The game was too hard to learn'], hint:'Just a few grains?', reteach:'The king thought a few grains of wheat were almost nothing.' },
      { part:'The story', q:'Could the king pay the reward?', options:['No, there was not enough wheat in the world','Yes, with one small sack','Yes, with what was in his pocket','Yes, after one good harvest'], hint:'The numbers grew enormous.', reteach:'Even all the wheat in the world was not enough.' },
      { part:'Words', q:'To double a number means to make it ____ times as big.', options:['two','three','ten','five'], hint:'Think of a pair.', reteach:'To double means to make two times as much.' },
      { part:'Think', q:'What is doubling again and again like?', options:['A rolling snowball that grows and grows','An ice cube that melts away','A candle that gets shorter','A ball that stays the same size'], hint:'It gets bigger as it goes.', reteach:'Uncle Paul compares it to a snowball that soon becomes too big to move.' }
    ],
    writing:'Explain doubling using the picture of a rolling snowball. Then double the number 1 six times.' },

  { n:7, title:'A Numerous Family',
    story:'Plant-lice have babies very fast. Their babies are born alive, grow up in about two weeks, and then have babies too. In half a year there can be twelve generations or more. Soon they would cover the plants and spoil the crops. This does not happen, because many creatures eat them. Young birds eat them. The ladybug, called the good God’s bug, eats them. So does a little green worm that later becomes a delicate insect with golden eyes. For these creatures the plant-lice are like daily bread.',
    words:'Devourer: one who eats a lot. Manna: daily food. Generation: all the babies born of one set of parents. Predator: an animal that hunts others.',
    faith:'“And God saw all the things that he had made, and they were very good” (Genesis 1:31). God made an order in nature. A good gardener protects the ladybug.',
    questions:[
      { part:'The story', q:'How fast do plant-lice have babies?', options:['Very fast: many families in a few months','Very slowly: one baby in ten years','Only once in their whole life, in winter','Not at all: they come from the rain'], hint:'Think of a huge family.', reteach:'Plant-lice multiply very quickly.' },
      { part:'The story', q:'About how soon is a young plant-louse grown up?', options:['In about two weeks','In about twenty years','In about ten months','In about one hundred days'], hint:'Very soon.', reteach:'It is full grown in about two weeks.' },
      { part:'The story', q:'Which of these eats plant-lice?', options:['The ladybug','The snail','The silkworm','The rabbit'], hint:'It is called the good God’s bug.', reteach:'The ladybug eats many plant-lice.' },
      { part:'The story', q:'Which other creatures eat plant-lice?', options:['Young birds','Big fish','Sheep','Rats'], hint:'They have beaks and wings.', reteach:'Young birds feed on plant-lice.' },
      { part:'Think', q:'What would happen if nothing ate plant-lice?', options:['They would spoil the plants and crops','The plants would grow much taller','The ants would learn to fly','Nothing at all would change'], hint:'So many hungry mouths!', reteach:'Too many plant-lice would harm plants and crops.' },
      { part:'Words', q:'In this lesson, manna means ____.', options:['daily food','a small house','a long tunnel','a big family'], hint:'God fed His people with it each day.', reteach:'Manna here means the regular food of many creatures.' },
      { part:'Math', q:'One louse has 3 babies. Each of those 3 has 3 babies. How many grandchildren does the first louse have?', options:['9','6','3','12'], hint:'3 groups of 3.', reteach:'3 times 3 is 9.' },
      { part:'Faith', q:'What did God see about all the things He had made?', options:['They were very good','They were too small','They were too many','They were all alike'], hint:'Genesis 1:31.', reteach:'God saw that all He had made was very good.' }
    ],
    writing:'Name two animals that eat plant-lice. How do they help the gardener?' },

  { n:8, title:'The Old Pear-Tree',
    story:'An old pear-tree is cut down. It is eaten by worms and gives no more fruit. On the stump Uncle Paul shows the children rings, one around another, from the middle to the bark. They look like the circles in water when a stone is thrown in. Each year the tree grows one new layer of wood, so one ring means one year. They count 45 rings. The pear-tree was 45 years old! Uncle Paul says that a beech tree that was cut had 170 rings.',
    words:'Annual: once every year. Layer: one thickness on top of another. Trunk: the thick stem of a tree.',
    faith:'Every year is a gift from God. The psalm prays that we may be “learned in heart, in wisdom” (Psalm 89:12).',
    questions:[
      { part:'The story', q:'Why was the pear-tree cut down?', options:['It was old, wormy and gave no fruit','It was too young and too small','It gave far too many pears','It was planted only last week'], hint:'It was not healthy any more.', reteach:'The tree was old, worm-eaten and had no more fruit.' },
      { part:'Observation', q:'What does Uncle Paul show on the stump?', options:['Rings of wood','A bird’s nest','A hidden coin','Small white flowers'], hint:'Circles.', reteach:'The cut stump shows rings.' },
      { part:'The story', q:'One ring means one ____.', options:['year','day','week','month'], hint:'The tree adds one layer from spring to spring.', reteach:'Each ring is one year of growth.' },
      { part:'The story', q:'How old was the pear-tree?', options:['45 years old','4 years old','170 years old','450 years old'], hint:'Remember the count of rings.', reteach:'They counted 45 rings, so it was 45 years old.' },
      { part:'Observation', q:'Which way do the rings go?', options:['From the middle out to the bark','From the leaves down to the roots in stripes','Only on one side of the trunk','Across the top of each branch only'], hint:'Like circles in water.', reteach:'The rings go round the middle, one after another, out to the bark.' },
      { part:'Math', q:'A tree has 12 rings. How old is it?', options:['12 years','6 years','24 years','120 years'], hint:'One ring, one year.', reteach:'12 rings mean 12 years.' },
      { part:'Math', q:'Which tree was older, the pear with 45 rings or the beech with 170?', options:['The beech','The pear','They were the same age','The rings cannot tell us'], hint:'Which number is greater?', reteach:'170 is more than 45, so the beech was older.' },
      { part:'Words', q:'Annual means once every ____.', options:['year','hour','day','night'], hint:'A birthday is annual.', reteach:'Annual means happening once a year.' }
    ],
    writing:'A tree has 45 rings. If it was cut this year, in what year did it begin to grow? Show your subtraction.' },

  { n:9, title:'The Age of Trees',
    story:'Some trees live for hundreds and even thousands of years. Uncle Paul tells of great chestnuts, lindens, oaks and yews. On a mountain called Etna stands the chestnut of a hundred horses. People tell that a queen and a hundred riders hid from a storm under it. In France there is an old oak in a cemetery. Its trunk is hollow, and inside is a little chapel to Our Lady of Peace. Some old yews were thought to be almost three thousand years old. Many old trees grow in churchyards, where people respect the holy ground and do not cut them. These ages are what people reckoned in Fabre’s time.',
    words:'Century: one hundred years. Churchyard: the holy ground by a church where the dead are buried. Ancient: very, very old.',
    faith:'In the old oak is a chapel where people pray to Our Lady of Peace. We treat holy places with respect.',
    questions:[
      { part:'The story', q:'How long can some trees live?', options:['Hundreds or thousands of years','Only one summer','About ten days','Never more than twenty years'], hint:'Much longer than people.', reteach:'Some trees live for many hundreds of years, even thousands.' },
      { part:'Words', q:'A century is ____ years.', options:['one hundred','ten','one thousand','twelve'], hint:'Think of one cent in a dollar.', reteach:'A century is one hundred years.' },
      { part:'The story', q:'Which chestnut tree was very famous?', options:['The chestnut of a hundred horses','The chestnut of a thousand ants','The chestnut of the three children','The chestnut of the wily dervish'], hint:'Horses!', reteach:'It is called the chestnut of a hundred horses.' },
      { part:'The story', q:'Who is said to have hidden from a storm under it?', options:['A queen and a hundred riders','Uncle Paul and Jacques','A king and his chess players','Claire and her two brothers'], hint:'A royal lady.', reteach:'A queen of Aragon and a hundred horsemen are said to have sheltered there.' },
      { part:'The story', q:'What is inside the hollow oak?', options:['A little chapel','A big beehive','A bag of wheat','A well of water'], hint:'A place to pray.', reteach:'The hollow oak holds a chapel to Our Lady of Peace.' },
      { part:'The story', q:'Where do many very old trees grow safely?', options:['In churchyards','In busy markets','On the sea floor','In the king’s kitchen'], hint:'A holy place.', reteach:'Many old trees grow in churchyards and cemeteries.' },
      { part:'Think', q:'Why were those trees not cut down?', options:['People respected the holy place','No one had ever made an axe','The wood was made of stone','The trees hid from the people'], hint:'How do we act near a church?', reteach:'Respect for holy ground protected the trees.' },
      { part:'The story', q:'Which tree was thought to reach about three thousand years?', options:['The yew','The pear-tree','The elder bush','The rose'], hint:'Its name sounds like the word you.', reteach:'Some yews were reckoned to be about three thousand years old.' }
    ],
    writing:'Describe the chestnut of a hundred horses in 3 sentences.' },

  { n:10, title:'The Length of Animal Life',
    story:'Uncle Paul tells how long animals can live. A rat lives about 4 years, a rabbit 8 to 10, a cat 15 at most, a dog 20 to 25, and a horse 30 to 35. A goose can live 25 years or more. Even the little goldfinch and sparrow can live 20 to 25 years. Farm animals often die sooner because they are overworked, not well cared for, or used for food. People may live 80 or 90 years. But Uncle Paul says that he lives most who works most. A good life is one spent doing our duty.',
    words:'Lifespan: how long something lives. Domestic: kept by people at home or on the farm. Duty: what we ought to do.',
    faith:'Jesus says: “Well done, good and faithful servant” (Matthew 25:21). God wants us to use our time well.',
    questions:[
      { part:'The story', q:'About how long may a dog live?', options:['20 to 25 years','2 to 3 years','80 to 90 years','200 years'], hint:'More than a cat.', reteach:'Uncle Paul says a dog may live 20 to 25 years.' },
      { part:'The story', q:'About how long does a rat live?', options:['4 years','40 years','25 years','100 years'], hint:'A very short life.', reteach:'A rat lives about 4 years.' },
      { part:'Compare', q:'Which lives longer, a rabbit or a rat?', options:['The rabbit','The rat','They live the same time','Neither lives a whole year'], hint:'8 to 10, or 4?', reteach:'A rabbit lives 8 to 10 years, longer than a rat.' },
      { part:'The story', q:'Which bird may live 25 years or more?', options:['The goose','The fly','The ant','The bee'], hint:'It honks.', reteach:'A goose may live 25 years or more.' },
      { part:'The story', q:'Which two small birds may live 20 to 25 years?', options:['The goldfinch and the sparrow','The eagle and the owl','The turkey and the hen','The swan and the stork'], hint:'Tiny singers.', reteach:'The goldfinch and the sparrow may live 20 to 25 years.' },
      { part:'The story', q:'Why do farm animals often die sooner?', options:['They are overworked, poorly cared for or used for food','They sleep far too long each night','They are all older than wild animals','They never drink any water'], hint:'Think how people use them.', reteach:'Hard work, poor care and use for food shorten their lives.' },
      { part:'Meaning', q:'“He lives most who ____ most.”', options:['works','sleeps','eats','plays'], hint:'Think about duty.', reteach:'He lives most who works most.' },
      { part:'Virtue', q:'What kind of life is best?', options:['A life spent doing our duty','A life spent doing nothing','A life spent wanting what others have','A life spent only counting years'], hint:'Good and faithful servant.', reteach:'The best life is spent faithfully doing what we ought, for God and others.' }
    ],
    writing:'Tell about someone who has lived “much” by serving others.' }
  ]
};
window.LESSON_BANKS['FA-science'].lessons.forEach(function(l){ l.pictures = PICTURES[l.n] || []; });
})();
