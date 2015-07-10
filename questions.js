var questions = [ { id: 0, text: '_?  There\'s an app for that.' },
  { id: 1, text: 'Why can\'t I sleep at night?' },
  { id: 2, text: 'What\'s that smell?' },
  { id: 3, text: 'I got 99 problems but _ ain\'t one.' },
  { id: 4, text: 'Maybe she\'s born with it.  Maybe it\'s _.' },
  { id: 5, text: 'What\'s the next Happy Meal&reg; toy?' },
  { id: 6,
    text: 'Anthropologists have recently discovered a primitive tribe that worships _.' },
  { id: 7,
    text: 'It\'s a pity that kids these days are all getting involved with _.' },
  { id: 8,
    text: 'During Picasso\'s often-overlooked Brown Period, he produced hundreds of paintings of _.' },
  { id: 9,
    text: 'Alternative medicine is now embracing the curative powers of _.' },
  { id: 10, text: 'What\'s that sound?' },
  { id: 11, text: 'What ended my last relationship?' },
  { id: 12,
    text: 'MTV\'s new reality show features eight washed-up celebrities living with _.' },
  { id: 13, text: 'I drink to forget _.' },
  { id: 14,
    text: 'I\'m sorry professor, but I couldn\'t complete my homework because of _.' },
  { id: 15, text: 'What is Batman\'s guilty pleasure?' },
  { id: 16,
    text: 'This is the way the world ends <br> This is the way the world ends <br> Not with a bang but with _.' },
  { id: 17, text: 'What\'s a girl\'s best friend?' },
  { id: 18, text: 'TSA guidelines now prohibit _ on airplanes.' },
  { id: 19, text: '_.  That\'s how I want to die.' },
  { id: 20,
    text: 'In the new Disney Channel Original Movie, Hannah Montana struggles with _ for the first time.' },
  { id: 21, text: 'What does Dick Cheney prefer?' },
  { id: 22,
    text: 'Dear Abby, I\'m having some trouble with _ and would like your advice.' },
  { id: 23,
    text: 'Instead of coal, Santa now gives the bad children _.' },
  { id: 24, text: 'What\'s the most emo?' },
  { id: 25,
    text: 'In 1,000 years when paper money is but a distant memory, _ will be our currency.' },
  { id: 26,
    text: 'A romantic, candlelit dinner would be incomplete without _.' },
  { id: 27, text: '_.  Becha can\'t have just one!' },
  { id: 28, text: 'White people like _.' },
  { id: 29, text: '_.  High five, bro.' },
  { id: 30,
    text: 'Next from J.K. Rowling: Harry Potter and the Chamber of _.' },
  { id: 31, text: 'BILLY MAYS HERE FOR _.' },
  { id: 32, text: 'War!  What is it good for?' },
  { id: 33, text: 'During sex, I like to think about _.' },
  { id: 34, text: 'What are my parents hiding from me?' },
  { id: 35, text: 'What will always get you laid?' },
  { id: 36,
    text: 'In L.A. County Jail, word is you can trade 200 cigarettes for _.' },
  { id: 37, text: 'What did I bring back from Mexico?' },
  { id: 38,
    text: 'What don\'t you want to find in your Chinese food?' },
  { id: 39,
    text: 'What will I bring back in time to convince people that I am a powerful wizard?' },
  { id: 40, text: 'How am I maintaining my relationship status?' },
  { id: 41, text: '_.  It\'s a trap!' },
  { id: 42,
    text: 'Coming to Broadway this season, _: The Musical.' },
  { id: 43,
    text: 'While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on _.' },
  { id: 44,
    text: 'After the earthquake, Sean Penn brought _ to the people of Haiti.' },
  { id: 45, text: 'Next on ESPN2, the World Series of _.' },
  { id: 46,
    text: 'But before I kill you, Mr. Bond, I must show you _.' },
  { id: 47, text: 'What gives me uncontrollable gas?' },
  { id: 48, text: 'What do old people smell like?' },
  { id: 49,
    text: 'The class field trip was completely ruined by _.' },
  { id: 50,
    text: 'When Pharaoh remained unmoved, Moses called down a Plague of _.' },
  { id: 51, text: 'What\'s my secret power?' },
  { id: 52, text: 'What\'s there a ton of in heaven?' },
  { id: 53,
    text: 'What would grandma find disturbing, yet oddly charming?' },
  { id: 54,
    text: 'What did the U.S. airdrop to the children of Afghanistan?' },
  { id: 55, text: 'What helps Obama unwind?' },
  { id: 56, text: 'What did Vin Diesel eat for dinner?' },
  { id: 57, text: '_: good to the last drop.' },
  { id: 58, text: 'Why am I sticky?' },
  { id: 59, text: 'What gets better with age?' },
  { id: 60, text: '_: kid-tested, mother-approved.' },
  { id: 61, text: 'What\'s the crustiest?' },
  { id: 62,
    text: 'What\'s Teach for America using to inspire inner city students to succeed?' },
  { id: 63,
    text: 'Studies show that lab rats navigate mazes 50% faster after being exposed to _.' },
  { id: 64,
    text: 'Life for American Indians was forever changed when the White Man introduced them to _.' },
  { id: 65,
    text: 'I do not know with what weapons World War III will be fought, but World War IV will be fought with _.' },
  { id: 66, text: 'Why do I hurt all over?' },
  { id: 67, text: 'What am I giving up for Lent?' },
  { id: 68,
    text: 'In Michael Jackson\'s final moments, he thought about _.' },
  { id: 69,
    text: 'In an attempt to reach a wider audience, the Smithsonian Museum of Natural History has opened an interactive exhibit on _.' },
  { id: 70,
    text: 'When I am President of the United States, I will create the Department of _.' },
  { id: 71,
    text: 'When I am a billionaire, I shall erect a 50-foot statue to commemorate _.' },
  { id: 72, text: 'What\'s my anti-drug?' },
  { id: 73, text: 'What never fails to liven up the party?' },
  { id: 74, text: 'What\'s the new fad diet?' },
  { id: 75,
    text: 'Major League Baseball has banned _ for giving players an unfair advantage.' },
  { id: 76, text: 'My plan for world domination begins with _.' },
  { id: 77,
    text: 'The CIA now interrogates enemy agents by repeatedly subjecting them to _.' },
  { id: 78,
    text: 'In Rome, there are whisperings that the Vatican has a secret room devoted to _.' },
  { id: 79, text: 'Science will never explain _.' },
  { id: 80,
    text: 'When all else fails, I can always masturbate to _.' },
  { id: 81,
    text: 'I learned the hard way that you can\'t cheer up a grieving friend with _.' },
  { id: 82,
    text: 'In its new tourism campaign, Detroit proudly proclaims that it has finally eliminated _.' },
  { id: 83,
    text: 'The socialist governments of Scandinavia have declared that access to _ is a basic human right.' },
  { id: 84,
    text: 'In his new self-produced album, Kanye West raps over the sounds of _.' },
  { id: 85, text: 'What\'s the gift that keeps on giving?' },
  { id: 86,
    text: 'Next season on Man vs. Wild, Bear Grylls must survive in the depths of the Amazon with only _ and his wits.' },
  { id: 87, text: 'When I pooped, what came out of my butt?' },
  { id: 88,
    text: 'In the distant future, historians will agree that _ marked the beginning of America\'s decline.' },
  { id: 89,
    text: 'What has been making life difficult at the nudist colony?' },
  { id: 90,
    text: 'And I would have gotten away with it, too, if it hadn\'t been for _.' },
  { id: 91, text: 'What brought the orgy to a grinding halt?' },
  { id: 92,
    text: 'During his midlife crisis, my dad got really into _.' },
  { id: 93,
    text: 'My new favorite porn star is Joey &#34;_&#34; McGee.' },
  { id: 94,
    text: 'Before I run for president, I must destroy all evidence of my involvement with _.' },
  { id: 95,
    text: 'This is your captain speaking. Fasten your seatbelts and prepare for _.' },
  { id: 96,
    text: 'In his newest and most difficult stunt, David Blaine must escape from _.' },
  { id: 97,
    text: 'The Five Stages of Grief: denial, anger, bargaining, _, and acceptance.' },
  { id: 98,
    text: 'Members of New York\'s social elite are paying thousands of dollars just to experience _.' },
  { id: 99,
    text: 'This month\'s Cosmo: &#34;Spice up your sex life by bringing _ into the bedroom.&#34;' },
  { id: 100,
    text: 'Little Miss Muffet Sat on a tuffet, Eating her curds and _.' },
  { id: 101, text: 'My country, \'tis of thee, sweet land of _.' },
  { id: 102,
    text: 'After months of debate, the Occupy Wall Street General Assembly could only agree on &#34;More _!&#34;' },
  { id: 103,
    text: 'Next time on Dr. Phil: How to talk to your child about _.' },
  { id: 104,
    text: 'Only two things in life are certain: death and _.' },
  { id: 105,
    text: 'Everyone down on the ground! We don\'t want to hurt anyone. We\'re just here for _.' },
  { id: 106,
    text: 'The healing process began when I joined a support group for victims of _.' },
  { id: 107,
    text: 'The votes are in, and the new high school mascot is _.' },
  { id: 108,
    text: 'Charades was ruined for me forever when my mom had to act out _.' },
  { id: 109,
    text: 'Tonight on 20/20: What you don\'t know about _ could kill you.' },
  { id: 110, text: 'D&D 4.0 isn\'t real D&D because of the _.' },
  { id: 111, text: 'It\'s a D&D retroclone with _ added.' },
  { id: 112, text: 'Storygames aren\'t RPGs because of the _.' },
  { id: 113, text: 'The Slayer\'s Guide to _.' },
  { id: 114, text: 'Alightment: Chaotic _' },
  { id: 115, text: 'It\'s a D&D retroclone with _ added.' },
  { id: 116, text: 'What made the paladin fall? _' },
  { id: 117,
    text: 'The portal leads to the quasi-elemental plane of _.' },
  { id: 118, text: 'The Temple of Elemental _.' },
  { id: 119, text: 'Pathfinder is basically D&D _ Edition.' },
  { id: 120, text: '_ : The Storytelling Game.' },
  { id: 121,
    text: 'People are wondering why Steve Jackson published GURPS _.' },
  { id: 122, text: 'Linear Fighter, Quadratic _.' },
  { id: 123, text: 'You start with 1d4 _ points.' },
  { id: 124,
    text: 'Back when I was 12 and I was just starting playing D&D, the game had _.' },
  { id: 125, text: 'Big Eyes, Small _.' },
  { id: 126,
    text: 'In the grim darkness of the future there is only _.' },
  { id: 127, text: 'My innovative new RPG has a stat for _.' },
  { id: 128, text: 'A true gamer has no problem with _.' },
  { id: 129, text: 'The Deck of Many _.' },
  { id: 130,
    text: 'You are all at a tavern when _ approach you.' },
  { id: 131,
    text: 'For the convention I cosplayed as Sailor Moon, except with _.' },
  { id: 132,
    text: 'The worst part of Grave of the Fireflies is all the _.' },
  { id: 133,
    text: 'In the Evangelion remake, Shinji has to deal with _.' },
  { id: 134, text: 'Worst anime convention purchase ever? _.' },
  { id: 135, text: 'While powering up Vegeta screamed, _!' },
  { id: 136, text: 'You evaded my _ attack. Most impressive.' },
  { id: 137,
    text: 'The magical girl found out that the Power of Love is useless against _.' },
  { id: 138,
    text: 'The Japanese government has spent billions of yen researching _.' },
  { id: 139, text: '_ is Best Pony.' },
  { id: 140, text: 'The _ of Haruhi Suzumiya.' },
  { id: 141,
    text: 'The new thing in Akihabara is fetish cafes where you can see girls dressed up as _.' },
  { id: 142, text: 'Your drill can pierce _!' },
  { id: 143, text: 'Avatar: The Last _ bender.' },
  { id: 144,
    text: 'In the name of _ Sailor Moon will punish you!' },
  { id: 145, text: 'No harem anime is complete without _.' },
  { id: 146, text: 'My boyfriend\'s a _ now.' },
  { id: 147, text: '_.tumblr.com' },
  { id: 148,
    text: 'Somehow they made a cute mascot girl out of _.' },
  { id: 149,
    text: 'Haruko hit Naoto in the head with her bass guitar and _ came out.' },
  { id: 150,
    text: 'After blacking out during New year\'s Eve, I was awoken by _.' },
  { id: 151,
    text: 'This holiday season, Tim Allen must overcome his fear of _ to save Christmas.' },
  { id: 152, text: 'Jesus is _.' },
  { id: 153,
    text: 'Every Christmas, my uncle gets drunk and tells the story about _.' },
  { id: 154,
    text: 'What keeps me warm during the cold, cold, winter?' },
  { id: 155,
    text: 'On the third day of Christmas, my true love gave to me: three French hens, two turtle doves, and _.' },
  { id: 156,
    text: 'Wake up, America. Christmas is under attack by secular liberals and their _.' },
  { id: 157,
    text: 'We got the third rope, now where\'s the fourth?' },
  { id: 158, text: 'Tackle, Dropdown, _.' },
  { id: 159, text: 'Christopher Daniels is late on his _.' },
  { id: 160, text: 'Genius is 10% inspiration, 90% _.' },
  { id: 161,
    text: 'The best thing I ever got for Christmas was _.' },
  { id: 162, text: 'There\'s no crying in _.' },
  { id: 163,
    text: 'Mastodon! Pterodactyl! Triceratops! Sabretooth Tiger! _!' },
  { id: 164, text: 'Don\'t eat the _.' },
  { id: 165, text: 'SOOOOO hot, want to touch the _.' },
  { id: 166, text: 'Stop looking at me _!' },
  { id: 167, text: 'I\'m cuckoo for _ puffs.' },
  { id: 168, text: 'Silly rabbit, _ are for kids.' },
  { id: 169, text: 'Between love and madness lies _.' },
  { id: 170,
    text: 'Instead of chess, the Grim Reaper now gambles for your soul with a game of _.' },
  { id: 171, text: 'Why is my throat sore?' },
  { id: 172,
    text: 'I’m very sorry Mrs. Smith, but Little Billy has tested positive for _.' },
  { id: 173,
    text: 'Instead of beating them, Chris Brown now does _ to women.' },
  { id: 174,
    text: 'Instead of cutting, trendy young emo girls now engage in _.' },
  { id: 175,
    text: 'The definition of rock bottom is gambling away _.' },
  { id: 176,
    text: 'The Mayan prophecies really heralded the coming of _ in 2012.' },
  { id: 177,
    text: 'When I was 10 I wrote to Santa wishing for _.' },
  { id: 178,
    text: 'Where or How I met my last signifigant other: _.' },
  { id: 179, text: '_, Never leave home without it.' },
  { id: 180, text: '_. This is my fetish.' },
  { id: 181, text: 'I did _ so you don\'t have to!' },
  { id: 182, text: 'I need your clothes, your bike, and _.' },
  { id: 183,
    text: 'In a new Cold War retro movie, the red menace tries to conquer the world through the cunning use of _.' },
  { id: 184,
    text: 'My zombie survival kit includes food, water, and _.' },
  { id: 185, text: 'The way to a man\'s heart is through _.' },
  { id: 186, text: 'What was the theme of my second wedding?' },
  { id: 187,
    text: 'What\'s the newest Japanese craze to head West?' },
  { id: 188, text: 'Everybody loves _.' },
  { id: 189, text: 'I can only express myself through _.' },
  { id: 190,
    text: 'My new porn DVD was completely ruined by the inclusion of _' },
  { id: 191,
    text: 'The latest horrifying school shooting was inspired by _.' },
  { id: 192,
    text: 'I got fired because of my not-so-secret obsession over _.' },
  { id: 193, text: 'My new favourite sexual position is _' },
  { id: 194,
    text: 'A successful job interview begins with a firm handshake and ends with _.' },
  { id: 195, text: 'Lovin\' you is easy \'cause you\'re _.' },
  { id: 196,
    text: 'The blind date was going horribly until we discovered our shared interest in _.' },
  { id: 197,
    text: '_. Awesome in theory, kind of a mess in practice.' },
  { id: 198,
    text: 'I\'m not like the rest of you. I\'m too rich and busy for _.' },
  { id: 199,
    text: 'In the seventh circle of Hell, sinners must endure _ for all eternity.' },
  { id: 200, text: 'What left this stain on my couch?' },
  { id: 201,
    text: 'Call the law offices of Goldstein & Goldstein, because no one should have to tolerate _ in the workplace.' },
  { id: 202,
    text: 'Turns out that _-Man was neither the hero we needed nor wanted.' },
  { id: 203,
    text: 'As part of his daily regimen, Anderson Cooper sets aside 15 minutes for _.' },
  { id: 204,
    text: 'Money can\'t buy me love, but it can buy me _.' },
  { id: 205, text: 'And what did you bring for show and tell?' },
  { id: 206,
    text: 'During high school, I never really fit in until I found _ club.' },
  { id: 207,
    text: 'Hey, baby, come back to my place and I\'ll show you _.' },
  { id: 208,
    text: 'To prepare for his upcoming role, Daniel Day-Lewis immersed himself in the world of _.' },
  { id: 209,
    text: 'Finally! A service that delivers _ right to your door.' },
  { id: 210,
    text: 'My gym teacher got fired for adding _ to the obstacle course.' },
  { id: 211,
    text: 'As part of his contract, Prince won\'t perform without _ in his dressing room.' },
  { id: 212, text: 'It\'s only _ if you get caught!' },
  { id: 213, text: '_: The Next Generation' },
  { id: 214, text: 'Terminator 4: _' },
  { id: 215, text: 'Disney presents _ on ice!' },
  { id: 216, text: '_. The other white meat.' },
  { id: 217, text: 'I love the smell of _ in the morning.' },
  { id: 218, text: 'You\'re not gonna believe this, but _.' },
  { id: 219, text: '_. All the cool kids are doing it.' },
  { id: 220, text: 'Baskin Robbins just added a 32nd flavor: _!' },
  { id: 221, text: 'I can drive and _ at the same time.' },
  { id: 222, text: '_ ain\'t nothin\' to fuck wit\'!' },
  { id: 223, text: 'Brace yourselves, _ is coming.' },
  { id: 224,
    text: 'In exchange for his sister, Viserys was given _.' },
  { id: 225,
    text: 'Despite his best efforts, King Robert filled his reign with _.' },
  { id: 226,
    text: '_ was proclaimed the true king of the Seven Kingdoms.' },
  { id: 227, text: 'In _, you win or you lose.' },
  { id: 228, text: 'There is no word for _ in Dothraki.' },
  { id: 229, text: 'A Lannister always pays _.' },
  { id: 230, text: 'First lesson, stick them with _.' },
  { id: 231, text: 'The things I do for _.' },
  { id: 232, text: 'Hodor only ever says _.' },
  { id: 233,
    text: 'A Dothraki wedding without _ is considered a dull affair.' },
  { id: 234,
    text: 'After I was caught _, I was forced to join the Night\'s Watch.' },
  { id: 235, text: 'A man without _ is a man without power.' },
  { id: 236,
    text: 'The most controversial game at PAX this year is an 8-bit indie platformer about _.' },
  { id: 237, text: 'What made Spock cry?' },
  { id: 238, text: '_: Achievement unlocked.' },
  { id: 239,
    text: 'There was a riot at the Gearbox panel when they gave the attendees _.' },
  { id: 240,
    text: 'In the new DLC for Mass Effect, Shepard must save the galaxy from _.' },
  { id: 241,
    text: 'What\'s the latest bullshit that\'s troubling this quaint fantasy town?' },
  { id: 242, text: 'No Enforcer wants to manage the panel on _.' },
  { id: 243,
    text: 'I have an idea even better than Kickstarter, and it\'s called _starter' },
  { id: 244,
    text: 'You have been waylaid by _ and must defend yourself.' },
  { id: 245,
    text: 'In the final round of this year\'s Omegathon, Omeganauts must face off in a game of _.' },
  { id: 246,
    text: 'Action stations! Action stations! Set condition one throughout the fleet and brace for _!' },
  { id: 247,
    text: 'Press &darr;&darr;&larr;&rarr; to unleash _.' },
  { id: 248,
    text: 'I don\'t know exactly how I got the PAX plague, but I suspect it had something to do with _.' },
  { id: 249, text: '/r/ _.' },
  { id: 250, text: 'The Ada Initiative is now attacking _.' },
  { id: 251, text: 'Not another _ in the hotel elevator!' },
  { id: 252,
    text: 'Closing Ceremonies drinking game: Every time _ is mentioned... DRINK!' },
  { id: 253,
    text: 'In a Congressional hearing, US CYBERCOM commander Gen. Alexander claimed the latest data breach was due to _.' },
  { id: 254,
    text: 'The Maker Faire was unexpectedly interrupted by _.' },
  { id: 255, text: 'Do you even _?' },
  { id: 256, text: 'Come to the dark side, we have _.' },
  { id: 257, text: 'Y U NO _!!!!!' },
  { id: 258, text: 'While alone in the server room I _.' },
  { id: 259, text: 'When I get drunk I am an expert on _' },
  { id: 260,
    text: 'Well, guess what? I’ve got a fever, and the only prescription is more _.' },
  { id: 261, text: 'We decided to _ to raise money for the EFF.' },
  { id: 262,
    text: 'TSA wouldn\'t allow me through because of my _.' },
  { id: 263,
    text: 'Tonight\'s Final Hacker Jeopardy category will be _!' },
  { id: 264, text: 'Today\'s PaulDotCom podcast featured _.' },
  { id: 265, text: 'These are not the _ you are looking for.' },
  { id: 266, text: 'The snozberries taste like _.' },
  { id: 267, text: 'The only winning move is to _.' },
  { id: 268, text: 'The next cyber war will feature _.' },
  { id: 269, text: 'The best part of Alexis Park was all the _.' },
  { id: 270, text: 'So long and thanks for all the _.' },
  { id: 271,
    text: 'Security through obscurity is better than _.' },
  { id: 272, text: 'Rule 34 _.' },
  { id: 273, text: 'Rock, Paper, Scissors, Lizard, _.' },
  { id: 274,
    text: 'Our most powerful weapon for the Zombie Apocalypse will be _.' },
  { id: 275,
    text: 'Only half of programming is coding. The other 90% is _.' },
  { id: 276, text: 'One does not simply _.' },
  { id: 277, text: 'On the Internet, no one can tell you\'re _.' },
  { id: 278, text: 'Occupy _.' },
  { id: 279, text: 'Next time we meet we should _.' },
  { id: 280,
    text: 'My extremely large _ is what makes me better than you.' },
  { id: 281, text: 'Most hackers smell like _.' },
  { id: 282, text: 'Las Vegas is best known for _.' },
  { id: 283, text: 'Keep calm and _.' },
  { id: 284, text: 'It\'s dangerous to go alone. Take _.' },
  { id: 285, text: 'It smells like _ in this room.' },
  { id: 286,
    text: 'In a shocking move Archive.org decided to NOT back up _.' },
  { id: 287, text: 'I\'m fucking tired of hearing about _.' },
  { id: 288,
    text: 'I would be doing more with my life, except for this _ in the way.' },
  { id: 289,
    text: 'I work 80 hours a week and still can\'t afford a _.' },
  { id: 290,
    text: 'I used to be a hacker like you, until I took a(n) _ to the knee.' },
  { id: 291, text: 'I use _ to secure all of my personal data.' },
  { id: 292, text: 'I spotted the fed and all I got was _.' },
  { id: 293,
    text: 'I look like a geeky hacker, but I don\'t know anything about _.' },
  { id: 294, text: 'I have the biggest _, ever!' },
  { id: 295, text: 'I find your lack of _ disturbing.' },
  { id: 296,
    text: 'I can\'t believe they rejected my talk on _.' },
  { id: 297, text: 'I can haz _.' },
  { id: 298, text: 'HOLY _ BATMAN!!' },
  { id: 299, text: 'Go home _, you\'re drunk.' },
  { id: 300, text: 'Go Go Gadget _!' },
  { id: 301,
    text: 'Def Con Kids will now focus on teaching young hackers _.' },
  { id: 302, text: 'Confession Bear Says: _' },
  { id: 303, text: 'But does _ run NetBSD?' },
  { id: 304, text: 'Am I the only one around here who _.' },
  { id: 305,
    text: 'All I did was _ but someone gave me a red card.' },
  { id: 306, text: '35% of all hackers have to deal with _.' },
  { id: 307, text: '_. There\'s an app for that.' },
  { id: 308, text: '_. This is why I can\'t have nice things!' },
  { id: 309,
    text: '_: You keep using that term. I do not think it means what you think it means.' },
  { id: 310,
    text: '_ is now outsourced to call centers in India.' },
  { id: 311, text: '_ shot first.' },
  { id: 312, text: '_ Killed the barrel roll' },
  { id: 313, text: '_ A\'int Nobody Got Time For Dat!!' },
  { id: 314, text: '_ Put a bird on it!' },
  { id: 315, text: '_ makes me puke rainbows.' },
  { id: 316, text: '_ is also monitored by Prism.' },
  { id: 317, text: '_ is what keeps us together.' },
  { id: 318, text: '_ is a better replacement for crypto.' },
  { id: 319, text: '_ riding a Segway' },
  { id: 320,
    text: 'One day, over my fireplace, I\'m going to have a massive painting of _. You know, to remind me where I came from.' },
  { id: 321,
    text: '2 AM in the city that never sleeps. The door swings open and she walks in, legs up to here. Something in her eyes tells me she\'s looking for _.' },
  { id: 322,
    text: 'Alright, bros. Our frat house is condemned, and all the hot slampieces are over at Gamma Phi. The time has come to commence Operation _.' },
  { id: 323,
    text: 'As king, how will I keep the peasants in line?' },
  { id: 324,
    text: 'Dear Leader Kim Jong-un, our village praises your infinite wisdom with a humble offering of _.' },
  { id: 325,
    text: 'Do not fuck with me! I am literally _ right now.' },
  { id: 326, text: 'How am I compensating for my tiny penis?' },
  { id: 327,
    text: 'I\'m pretty sure I\'m high right now, because I\'m absolutely mesmerized by _.' },
  { id: 328,
    text: 'I\'m sorry sir, but we don\'t allow _ at the country club.' },
  { id: 329,
    text: 'It lurks in the night. It hungers for flesh. This summer, no one is safe from _.' },
  { id: 330, text: 'Man, this is bullshit. Fuck _.' },
  { id: 331,
    text: 'She\'s up all night for good fun. I\'m up all night for _.' },
  { id: 332,
    text: 'The Japanese have developed a smaller, more efficient version of _.' },
  { id: 333,
    text: 'This is the prime of my life. I\'m young, hot, and full of _.' },
  { id: 334,
    text: 'Wes Anderson\'s new film tells the story of a precocious child coming to terms with _.' },
  { id: 335, text: 'What\'s fun until it gets weird?' },
  { id: 336,
    text: 'You\'ve seen the bearded lady! You\'ve seen the ring of fire! Now, ladies and gentlemen, feast your eyes upon _!' },
  { id: 337,
    text: 'They found some more lost episodes! They were found in _.' },
  { id: 338,
    text: 'The Doctor did it! He saved the world again! This time using a _.' },
  { id: 339, text: 'I\'d give up _ to travel with The Doctor.' },
  { id: 340,
    text: 'The next Doctor Who spin-off is going to be called _.' },
  { id: 341, text: 'Who should be the 13th doctor?' },
  { id: 342,
    text: 'The Chameleon circuit is working again... somewhat. Instead of a phone booth, the TARDIS is now a _.' },
  { id: 343,
    text: 'Originally, the 50th anniversary special was going to have _ appear, but the BBC decided against it in the end.' },
  { id: 344,
    text: 'After we watch an episode, I\'ve got some _-flavored Jelly Babies to hand out.' },
  { id: 345, text: 'Wibbly-wobbly timey-wimey _.' },
  { id: 346,
    text: 'What\'s going to be The Doctor\'s new catch phrase.' },
  { id: 347, text: 'Bowties are _.' },
  { id: 348,
    text: 'The voice chip of one of the Cybermen has malfunctioned. Instead of saying "DELETE!", it now says "_".' },
  { id: 349,
    text: 'Old and busted: "EXTERMINATE!" New hotness: _.' },
  { id: 350,
    text: 'There\'s a new dance on Gallifrey, it\'s called the _.' },
  { id: 351,
    text: 'They announced a LEGO Doctor Who game! Rumor has it that _ is an unlockable character.' },
  { id: 352,
    text: 'FUN FACT: The Daleks were originally shaped to look like _.' },
  { id: 353,
    text: 'At this new Doctor Who themed restaurant, you can get a free _ if you can eat a plate of bangers and mash in under 3 minutes.' },
  { id: 354,
    text: 'Who is going to be The Doctor\'s next companion?' },
  { id: 355,
    text: 'I think the BBC is losing it. They just released a Doctor Who-themed _.' },
  { id: 356,
    text: 'It\'s a little-known fact that if you send a _ to the BBC, they will send you a picture of The Doctor.' },
  { id: 357,
    text: 'I was okay with all the BAD WOLF graffiti, until someone wrote it on _.' },
  { id: 358,
    text: 'Jack Harkness, I can\'t leave you alone for a minute! I turn around and you\'re trying to seduce _.' },
  { id: 359,
    text: 'In all of time and space, you decide that _ is a good choice?!' },
  { id: 360,
    text: 'Adipose were thought to be made of fat, but are really made of _.' },
  { id: 361,
    text: 'I hear the next thing that will cause The Doctor to regenerate is _.' },
  { id: 362, text: '_ makes the Homestuck fandom uncomfortable.' },
  { id: 363, text: '_ totally makes me question my sexuality.' },
  { id: 364, text: '_. On the roof. Now.' },
  { id: 365, text: '_. It keeps happening!' },
  { id: 366,
    text: '"Sacred leggings" was a mistranslation. The Sufferer actually died in Sacred _.' },
  { id: 367,
    text: 'After throwing _ at Karkat’s head, Dave made the intriguing discover that troll horns are very sensitive.' },
  { id: 368, text: 'AG: Who needs luck when you have _?' },
  { id: 369, text: 'All _. All of it!' },
  { id: 370,
    text: 'Alternia’s political system was based upon _.' },
  { id: 371,
    text: 'Believe it or not, Kankri’s biggest trigger is _.' },
  { id: 372,
    text: 'Calliborn wants you to draw pornography of _.' },
  { id: 373, text: 'Dave Strider likes _, but only ironically.' },
  { id: 374, text: 'Equius beats up Eridan for _.' },
  { id: 375, text: 'Feferi secretly hates _.' },
  { id: 376,
    text: 'For Betty Crocker’s latest ad campaign/brainwashing scheme, she is using _ as inspiration.' },
  { id: 377, text: 'For his birthday, Dave gave John _.' },
  { id: 378, text: 'Fuckin’ _. How do they work?' },
  { id: 379,
    text: 'Gamzee not only likes using his clubs for juggling and strifing, he also uses them for_.' },
  { id: 380,
    text: 'Getting a friend to read Homestuck is like _.' },
  { id: 381, text: 'How do I live without _?' },
  { id: 382, text: 'I am _. It’s me.' },
  { id: 383,
    text: 'I finally became Tumblr famous when I released a gifset of _.' },
  { id: 384,
    text: 'I just found _ in my closet it is like fucking christmas up in here.' },
  { id: 385, text: 'I warned you about _, bro! I told you, dog!' },
  { id: 386,
    text: 'In the final battle, John distracts Lord English by showing him _.' },
  { id: 387,
    text: 'It’s hard, being _. It’s hard and no one understands.' },
  { id: 388, text: 'John is a good boy. And he loves _.' },
  { id: 389,
    text: 'John may not be a homosexual, but he has a serious thing for _.' },
  { id: 390,
    text: 'Kanaya reached into her dead lusus’s stomach and retrieved _.' },
  { id: 391,
    text: 'Kanaya tells Karkat about _ to cheer him up.' },
  { id: 392, text: 'Karkat gave our universe _.' },
  { id: 393,
    text: 'Latula and Porrin have decided to teach Kankri about the wonders of _.' },
  { id: 394,
    text: 'Little did they know, the key to defeating Lord English was actually _.' },
  { id: 395,
    text: 'Little known fact: Kurloz’s stitching is actually made out of _.' },
  { id: 396,
    text: 'Nanna baked a cake for John to commemorate _.' },
  { id: 397, text: 'Nepeta only likes Karkat for his _.' },
  { id: 398,
    text: 'Porrim made Kankri a sweater to cover his _.' },
  { id: 399,
    text: 'Problem Sleuth had a hard time investigating _.' },
  { id: 400,
    text: 'Rose was rather disgusted when she started reading about _.' },
  { id: 401, text: 'Terezi can top anyone except _.' },
  { id: 402,
    text: 'The hole in Kanaya’s stomach is so large, she can fit _ in it.' },
  { id: 403,
    text: 'The next thing Hussie will turn into a sex joke will be _.' },
  { id: 404,
    text: 'The only way to beat Vriska in an eating contest is to put _ on the table.' },
  { id: 405,
    text: 'The real reason Terezi stabbed Vriska was to punish her for _.' },
  { id: 406,
    text: 'The secret way to achieve God Tier is to die on top of _.' },
  { id: 407,
    text: 'The thing that made Kankri break his vow of celibacy was _.' },
  { id: 408,
    text: 'Turns out, pre-entry prototyping with _ was not the best idea.' },
  { id: 409, text: 'Vriska killed Spidermom with _.' },
  { id: 410, text: 'Vriska’s greatest regret is _.' },
  { id: 411, text: 'What did Jake get Dirk for his birthday?' },
  { id: 412,
    text: 'What is the worst thing that Terezi ever licked?' },
  { id: 413, text: 'What is your OT3? (Draw 2, play 3.)' },
  { id: 414, text: 'What makes your kokoro go "doki doki"?' },
  { id: 415, text: 'What\'s in the box, Jack?' },
  { id: 416,
    text: 'When a bucket is unavailable, trolls with use _.' },
  { id: 417,
    text: 'When Dave received _ from his Bro for his 9th birthday, be felt a little warm inside.' },
  { id: 418,
    text: 'Whenever I see _ on MSPARP, I disconnect immediately.' },
  { id: 419, text: 'where doing it man. where MAKING _ HAPEN!' },
  { id: 420,
    text: 'Your name is JOHN EGBERT and boy do you love _!' },
  { id: 421, text: 'Are you there, God? It\'s me, _' },
  { id: 422, text: '50 Shades of _.' },
  { id: 423, text: 'It\'s not length, it\'s _.' },
  { id: 424,
    text: 'Whatever, Peeta. You\'ll never understand my struggle with _.' },
  { id: 425,
    text: 'Why does the Komen Foundation hate Planned Parenthood?' },
  { id: 426, text: 'Math is hard. Let\'s go _!' },
  { id: 427,
    text: 'The latest proposal in the Texas legislature is to take away _ from women.' },
  { id: 428,
    text: 'If you don\'t mind my asking, how *do* lesbians have sex?' },
  { id: 429,
    text: 'In her next romcom, Katherine Heigl plays a woman who falls in love with her boss\'s _.' },
  { id: 430,
    text: 'The Pantone color of the year is inspired by _.' },
  { id: 431,
    text: 'What is Olivia Pope\'s secret to removing red wine stains from white clothes?' },
  { id: 432,
    text: 'Why exactly was Alanis so mad at Uncle Joey?' },
  { id: 433,
    text: 'Why do men on the Internet send me pictures of _?' },
  { id: 434,
    text: 'What\'s my weapon of choice in the "War on Women"?' },
  { id: 435,
    text: 'I couldn\'t help but wonder: was it Mr. Big, or was it _?' },
  { id: 436, text: 'What fell into my bra?' },
  { id: 437,
    text: 'What\'s my preferred method of contraception?' },
  { id: 438,
    text: 'Sofia Coppola\'s new film focuses on a wealthy young white woman feeling alienated by _.' },
  { id: 439, text: '_: the Tori Amos song that changed my life' },
  { id: 440,
    text: 'Something old, something new, something borrowed, and _.' },
  { id: 441, text: 'Why can\'t we have nice things?' } ]