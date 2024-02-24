"use strict";

const Collections = new Map([
  [ "gear", { displayName: "Gear", data: `
url,name,value,bulk,level,rarity,transform
Equipment.aspx?ID=10,Candle,1 cp,,0,Common,
Equipment.aspx?ID=12,Chalk x10,1 cp,,0,Common,
Equipment.aspx?ID=36,Mug,1 cp,,0,Common,
Equipment.aspx?ID=38,Oil,1 cp,,0,Common,
Equipment.aspx?ID=39,Piton,1 cp,,0,Common,
Equipment.aspx?ID=45,Sack,1 cp,L,0,Common,
Equipment.aspx?ID=56,Ten-Foot Pole,1 cp,1,0,Common,
Equipment.aspx?ID=60,Torch,1 cp,L,0,Common,
Equipment.aspx?ID=7,Bedroll,2 cp,L,0,Common,
Equipment.aspx?ID=52,Soap,2 cp,,0,Common,
Equipment.aspx?ID=28,Ladder (10 ft.),3 cp,3,0,Common,
Equipment.aspx?ID=21,Flint and Steel,5 cp,,0,Common,
Equipment.aspx?ID=62,Waterskin,5 cp,L,0,Common,
Equipment.aspx?ID=50,Signal Whistle,8 cp,,0,Common,
Equipment.aspx?ID=4,Backpack,1 sp,,0,Common,
Equipment.aspx?ID=6,Basic Crafter's Book,1 sp,L,0,Common,
Equipment.aspx?ID=15,Clothing (Explorer's),1 sp,L,0,Common,
Equipment.aspx?ID=15,Clothing (Ordinary),1 sp,,0,Common,
Equipment.aspx?ID=19,Disguise Kit (Replacement Cosmetics),1 sp,L,0,Common,
Equipment.aspx?ID=23,Grappling Hook,1 sp,L,0,Common,
Equipment.aspx?ID=24,Hammer,1 sp,L,0,Common,
Equipment.aspx?ID=41,Religious Symbol (Wooden),1 sp,L,0,Common,type=deity&name=[Wooden Symbol] of $
Equipment.aspx?ID=63,Writing Set (Extra Ink and Paper),1 sp,L,0,Common,
Equipment.aspx?ID=30,Lock (Poor),2 sp,,0,Common,
Equipment.aspx?ID=34,Merchant's Scale,2 sp,L,0,Common,
Equipment.aspx?ID=46,Saddlebags,2 sp,L,0,Common,
Equipment.aspx?ID=9,Caltrops,3 sp,L,0,Common,
Equipment.aspx?ID=32,Manacles (Poor),3 sp,,0,Common,
Equipment.aspx?ID=58,Thieves' Tools (Replacement Picks),3 sp,L,0,Common,
Equipment.aspx?ID=15,Clothing (Winter),4 sp,L,0,Common,
Equipment.aspx?ID=40,Rations 1 week,4 sp,L,0,Common,
Equipment.aspx?ID=59,Tool (Short),4 sp,L,0,Common,type=tool&filter=short
Equipment.aspx?ID=14,Climbing Kit,5 sp,1,0,Common,
Equipment.aspx?ID=18,Crowbar,5 sp,L,0,Common,
Equipment.aspx?ID=19,Disguise Kit (Elite Cosmetics),5 sp,L,3,Common,
Equipment.aspx?ID=33,Material Component Pouch,5 sp,L,0,Common,
Equipment.aspx?ID=44,Rope 50 ft.,5 sp,L,0,Common,
Equipment.aspx?ID=13,Chest,6 sp,2,0,Common,
Equipment.aspx?ID=29,Lantern (Hooded),7 sp,L,0,Common,
Equipment.aspx?ID=20,Fishing Tackle,8 sp,1,0,Common,
Equipment.aspx?ID=37,Musical Instrument (Handheld),8 sp,1,0,Common,
Equipment.aspx?ID=57,Tent (Pup),8 sp,L,0,Common,
Equipment.aspx?ID=16,Compass,1 gp,,0,Common,
Equipment.aspx?ID=17,Cookware,1 gp,2,0,Common,
Equipment.aspx?ID=22,Formula Book (Blank),1 gp,L,0,Common,
Equipment.aspx?ID=29,Lantern (Bull's-Eye),1 gp,1,0,Common,
Equipment.aspx?ID=35,Mirror,1 gp,,0,Common,
Equipment.aspx?ID=42,Religious Text,1 gp,L,0,Common,type=deity&name=[Religious Text] of $
Equipment.aspx?ID=53,Spellbook (Blank),1 gp,L,0,Common,
Equipment.aspx?ID=59,Tool (Long),1 gp,1,0,Common,type=tool&filter=long
Equipment.aspx?ID=63,Writing Set,1 gp,L,0,Common,
Equipment.aspx?ID=15,Clothing (Fine),2 gp,L,0,Common,
Equipment.aspx?ID=19,Disguise Kit,2 gp,L,0,Common,
Equipment.aspx?ID=30,Lock (Simple),2 gp,,1,Common,
Equipment.aspx?ID=37,Musical Instrument (Heavy),2 gp,16,0,Common,
Equipment.aspx?ID=41,Religious Symbol (Silver),2 gp,L,0,Common,type=deity&name=[Silver Symbol] of $
Equipment.aspx?ID=43,Repair Kit,2 gp,1,0,Common,
Equipment.aspx?ID=2,Alchemist's Tools,3 gp,1,0,Common,
Equipment.aspx?ID=27,Hourglass,3 gp,L,0,Common,
Equipment.aspx?ID=32,Manacles (Simple),3 gp,,1,Common,
Equipment.aspx?ID=58,Thieves' Tools,3 gp,L,0,Common,
Equipment.aspx?ID=58,Thieves' Tools (Infiltrator Picks),3 gp,L,3,Common,
Equipment.aspx?ID=3,Artisan's Tools,4 gp,2,0,Common,
Equipment.aspx?ID=11,Chain 10 ft.,4 gp,1,0,Common,
Equipment.aspx?ID=55,Tack,4 gp,1,0,Common,
Equipment.aspx?ID=543,Alchemist's Lab,5 gp,6,0,Common,
Equipment.aspx?ID=25,Healer's Tools,5 gp,1,0,Common,
Equipment.aspx?ID=51,Snare Kit,5 gp,2,0,Common,
Equipment.aspx?ID=57,Tent (Four-Person),5 gp,1,0,Common,
Equipment.aspx?ID=64,Scholarly Journal,6 gp,L,3,Uncommon,
Equipment.aspx?ID=1552,Barding (Light; Small or Medium),10 gp,2,0,Common,
Equipment.aspx?ID=65,Survey Map,10 gp,L,3,Uncommon,
Equipment.aspx?ID=30,Lock (Average),15 gp,,3,Common,
Equipment.aspx?ID=1552,Barding (Light; Large),20 gp,4,0,Common,
Equipment.aspx?ID=16,Compass (Lensatic),20 gp,,3,Common,
Equipment.aspx?ID=18,Crowbar (Levered),20 gp,L,3,Common,
Equipment.aspx?ID=20,Fishing Tackle (Professional),20 gp,1,3,Common,
Equipment.aspx?ID=32,Manacles (Average),20 gp,,3,Common,
Equipment.aspx?ID=54,Spyglass,20 gp,L,0,Common,
Equipment.aspx?ID=1552,Barding (Heavy; Small or Medium),25 gp,4,2,Common,
Equipment.aspx?ID=43,Repair Kit (Superb),25 gp,1,3,Common,
Equipment.aspx?ID=64,Scholarly Journal (Compendium),30 gp,L,3,Uncommon,
Equipment.aspx?ID=14,Climbing Kit (Extreme),40 gp,1,3,Common,
Equipment.aspx?ID=19,Disguise Kit (Elite),40 gp,L,3,Common,
Equipment.aspx?ID=31,Magnifying Glass,40 gp,,3,Common,
Equipment.aspx?ID=57,Tent (Pavilion),40 gp,12,2,Common,
Equipment.aspx?ID=3,Artisan's Tools (Sterling),50 gp,2,3,Common,
Equipment.aspx?ID=1552,Barding (Heavy; Large),50 gp,8,3,Common,
Equipment.aspx?ID=25,Healer's Tools (Expanded),50 gp,1,3,Common,
Equipment.aspx?ID=37,Musical Instrument (Virtuoso Handheld),50 gp,1,3,Common,
Equipment.aspx?ID=65,Survey Map (Atlas),50 gp,L,3,Uncommon,
Equipment.aspx?ID=58,Thieves' Tools (Infiltrator),50 gp,L,3,Common,
Equipment.aspx?ID=543,Alchemist's Lab (Expanded),55 gp,6,3,Common,
Equipment.aspx?ID=15,Clothing (High-Fashion Fine),55 gp,L,3,Common,
Equipment.aspx?ID=51,Snare Kit (Specialist),55 gp,2,3,Common,
Equipment.aspx?ID=54,Spyglass (Fine),80 gp,L,4,Common,
Equipment.aspx?ID=37,Musical Instrument (Virtuoso Heavy),100 gp,16,3,Common,
Equipment.aspx?ID=30,Lock (Good),200 gp,,9,Common,
Equipment.aspx?ID=32,Manacles (Good),250 gp,,9,Common,
Equipment.aspx?ID=30,Lock (Superior),"4,500 gp",,17,Common,
Equipment.aspx?ID=32,Manacles (Superior),"5,000 gp",,17,Common,
Equipment.aspx?ID=26,Holly and Mistletoe,,,0,Common,
`}],

  [ "consumables", { displayName: "Consumables", data: `
url,name,value,bulk,level,rarity,transform
Equipment.aspx?ID=244,Feather Token (Ladder),3 gp,,1,Common,
Equipment.aspx?ID=245,Holy Water,3 gp,L,1,Common,
Equipment.aspx?ID=174,Nectar of Purification,3 gp,L,1,Common,
Equipment.aspx?ID=230,Owlbear Claw,3 gp,,1,Common,
Equipment.aspx?ID=247,Runestone,3 gp,L,1,Common,
Equipment.aspx?ID=165,Shining Ammunition,3 gp,,1,Common,type=ammunition&name=[Shining] $
Equipment.aspx?ID=248,Unholy Water,3 gp,L,1,Common,
Equipment.aspx?ID=640,1st-Level Scroll,4 gp,L,1,Common,type=spell&level=1&name=[Scroll] of $ (1st level)
Equipment.aspx?ID=186,Healing Potion (Minor),4 gp,L,1,Common,
Equipment.aspx?ID=231,Potency Crystal,4 gp,,1,Common,
Equipment.aspx?ID=239,Wolf Fang,4 gp,,1,Common,
Equipment.aspx?ID=244,Feather Token (Holly Bush),6 gp,,2,Common,
Equipment.aspx?ID=217,Hunter's Bane,6 gp,,2,Common,
Equipment.aspx?ID=223,Jade Cat,6 gp,,2,Common,
Equipment.aspx?ID=226,Monkey Pin,6 gp,,2,Common,
Equipment.aspx?ID=181,Oil of Weightlessness,6 gp,L,2,Common,
Equipment.aspx?ID=202,Bronze Bull Pendant,7 gp,,2,Common,
Equipment.aspx?ID=203,Crying Angel Pendant,7 gp,,2,Common,
Equipment.aspx?ID=207,Effervescent Ampoule,7 gp,,2,Common,
Equipment.aspx?ID=225,Mesmerizing Opal,7 gp,,2,Common,
Equipment.aspx?ID=179,Oil of Potency,7 gp,L,2,Common,
Equipment.aspx?ID=229,Onyx Panther,7 gp,,2,Common,
Equipment.aspx?ID=232,Savior Spike,7 gp,,2,Common,
Equipment.aspx?ID=212,Feather Step Stone,8 gp,,3,Common,
Equipment.aspx?ID=244,Feather Token (Bird),8 gp,,3,Common,
Equipment.aspx?ID=178,Oil of Mending,9 gp,L,3,Common,
Equipment.aspx?ID=159,Beacon Shot,10 gp,,3,Common,type=ammunition&filter=arrow|bolt&name=[Beacon] $
Equipment.aspx?ID=244,Feather Token (Chest),10 gp,,3,Common,
Equipment.aspx?ID=170,Vine Arrow,10 gp,,3,Common,
Equipment.aspx?ID=196,Potion of Water Breathing,11 gp,L,3,Common,
Equipment.aspx?ID=166,Sleep Arrow,11 gp,,3,Common,
Equipment.aspx?ID=640,2nd-Level Scroll,12 gp,L,3,Common,type=spell&level=2&name=[Scroll] of $ (2nd level)
Equipment.aspx?ID=186,Healing Potion (Lesser),12 gp,L,3,Common,
Equipment.aspx?ID=167,Spellstrike Ammunition (Type I),12 gp,,3,Common,type=ammunition&name=[Spellstrike] $ (Type I)
Equipment.aspx?ID=206,Dragon Turtle Scale,13 gp,,4,Common,
Equipment.aspx?ID=184,Barkskin Potion,15 gp,L,4,Common,
Equipment.aspx?ID=160,Climbing Bolt,15 gp,,4,Common,
Equipment.aspx?ID=244,Feather Token (Fan),15 gp,,4,Common,
Equipment.aspx?ID=197,Shrinking Potion,15 gp,L,4,Common,
Equipment.aspx?ID=171,Viper Arrow,17 gp,,4,Common,
Equipment.aspx?ID=201,Bloodseeker Beak,20 gp,,4,Common,
Equipment.aspx?ID=211,Fear Gem,20 gp,,4,Common,
Equipment.aspx?ID=187,Invisibility Potion,20 gp,L,4,Uncommon,
Equipment.aspx?ID=190,Potion of Leaping,21 gp,L,5,Common,
Equipment.aspx?ID=234,Sneaky Key,22 gp,,5,Common,
Equipment.aspx?ID=233,Shark Tooth Charm,23 gp,,5,Common,
Equipment.aspx?ID=183,Salve of Slipperiness,25 gp,L,5,Common,
Equipment.aspx?ID=640,3rd-Level Scroll,30 gp,L,5,Common,type=spell&level=3&name=[Scroll] of $ (3rd level)
Equipment.aspx?ID=208,Emerald Grasshopper,30 gp,,5,Common,
Equipment.aspx?ID=167,Spellstrike Ammunition (Type II),30 gp,,5,Common,type=ammunition&name=[Spellstrike] $ (Type II)
Equipment.aspx?ID=236,Tiger Menuki,30 gp,,5,Common,
Equipment.aspx?ID=181,Oil of Weightlessness (Greater),36 gp,L,6,Common,
Equipment.aspx?ID=244,Feather Token (Tree),38 gp,,6,Common,
Equipment.aspx?ID=182,Salve of Antiparalysis,40 gp,L,6,Common,
Equipment.aspx?ID=192,Potion of Resistance (Lesser),45 gp,L,6,Common,
Equipment.aspx?ID=200,Truth Potion,46 gp,L,6,Uncommon,
Equipment.aspx?ID=241,Dust of Appearance,50 gp,,6,Common,
Equipment.aspx?ID=186,Healing Potion (Moderate),50 gp,L,6,Common,
Equipment.aspx?ID=218,Iron Cube,50 gp,,6,Common,
Equipment.aspx?ID=193,Potion of Swimming,50 gp,L,6,Common,
Equipment.aspx?ID=244,Feather Token (Anchor),55 gp,,7,Common,
Equipment.aspx?ID=216,Grim Trophy,55 gp,,7,Common,
Equipment.aspx?ID=198,Serum of Sex Shift,60 gp,L,7,Common,
Equipment.aspx?ID=228,Murderer's Knot,66 gp,,7,Common,
Equipment.aspx?ID=640,4th-Level Scroll,70 gp,L,7,Common,type=spell&level=4&name=[Scroll] of $ (4th level)
Equipment.aspx?ID=185,Dragon's Breath Potion (Young),70 gp,L,7,Common,
Equipment.aspx?ID=167,Spellstrike Ammunition (Type III),70 gp,,7,Common,type=ammunition&name=[Spellstrike] $ (Type III)
Equipment.aspx?ID=235,Swift Block Cabochon,70 gp,,7,Uncommon,
Equipment.aspx?ID=240,Candle of Truth,75 gp,,8,Uncommon,
Equipment.aspx?ID=244,Feather Token (Swan Boat),76 gp,,8,Common,
Equipment.aspx?ID=191,Potion of Quickness,90 gp,L,8,Common,
Equipment.aspx?ID=197,Shrinking Potion (Greater),90 gp,L,8,Common,
Equipment.aspx?ID=214,Gallows Tooth,100 gp,,8,Common,
Equipment.aspx?ID=222,Jade Bauble,100 gp,,8,Common,
Equipment.aspx?ID=189,Potion of Flying,100 gp,L,8,Common,
Equipment.aspx?ID=246,Javelin of Lightning,110 gp,L,9,Common,
Equipment.aspx?ID=162,Explosive Ammunition,130 gp,,9,Common,type=ammunition&name=[Explosive] $
Equipment.aspx?ID=244,Feather Token (Whip),130 gp,,9,Common,
Equipment.aspx?ID=169,Storm Arrow,130 gp,,9,Common,
Equipment.aspx?ID=242,Dust of Disappearance,135 gp,,9,Uncommon,
Equipment.aspx?ID=173,Aligned Oil,140 gp,L,9,Common,
Equipment.aspx?ID=640,5th-Level Scroll,150 gp,L,9,Common,type=spell&level=5&name=[Scroll] of $ (5th level)
Equipment.aspx?ID=167,Spellstrike Ammunition (Type IV),150 gp,,9,Common,type=ammunition&name=[Spellstrike] $ (Type IV)
Equipment.aspx?ID=237,Vanishing Coin,160 gp,,10,Common,
Equipment.aspx?ID=221,Iron Medallion,175 gp,,10,Common,
Equipment.aspx?ID=227,Mummified Bat,175 gp,,10,Common,
Equipment.aspx?ID=192,Potion of Resistance (Moderate),180 gp,L,10,Common,
Equipment.aspx?ID=243,Elemental Gem,200 gp,,10,Common,
Equipment.aspx?ID=180,Oil of Repulsion,175 gp,L,11,Common,
Equipment.aspx?ID=177,Oil of Keen Edges,250 gp,L,11,Uncommon,
Equipment.aspx?ID=193,Potion of Swimming (Greater),250 gp,L,11,Common,
Equipment.aspx?ID=640,6th-Level Scroll,300 gp,L,11,Common,type=spell&level=6&name=[Scroll] of $ (6th level)
Equipment.aspx?ID=167,Spellstrike Ammunition (Type V),300 gp,,11,Common,type=ammunition&name=[Spellstrike] $ (Type V)
Equipment.aspx?ID=210,Fade Band,320 gp,,12,Common,
Equipment.aspx?ID=194,Potion of Tongues,320 gp,L,12,Uncommon,
Equipment.aspx?ID=182,Salve of Antiparalysis (Greater),325 gp,L,12,Common,
Equipment.aspx?ID=176,Oil of Animation,330 gp,L,12,Uncommon,
Equipment.aspx?ID=185,Dragon's Breath Potion (Adult),400 gp,L,12,Common,
Equipment.aspx?ID=209,Eye of Apprehension,400 gp,,12,Common,
Equipment.aspx?ID=186,Healing Potion (Greater),400 gp,L,12,Common,
Equipment.aspx?ID=220,Iron Equalizer,400 gp,,12,Common,
Equipment.aspx?ID=164,Penetrating Ammunition,400 gp,,12,Common,type=ammunition&filter=arrow|bolt&name=[Penetrating] $
Equipment.aspx?ID=188,Panacea,450 gp,L,13,Uncommon,
Equipment.aspx?ID=162,Explosive Ammunition (Greater),520 gp,,13,Common,type=ammunition&name=[Greater Explosive] $
Equipment.aspx?ID=224,Mending Lattice,525 gp,,13,Uncommon,
Equipment.aspx?ID=640,7th-Level Scroll,600 gp,L,13,Common,type=spell&level=7&name=[Scroll] of $ (7th level)
Equipment.aspx?ID=167,Spellstrike Ammunition (Type VI),600 gp,,13,Common,type=ammunition&name=[Spellstrike] $ (Type VI)
Equipment.aspx?ID=192,Potion of Resistance (Greater),850 gp,L,14,Common,
Equipment.aspx?ID=238,Viper's Fang,850 gp,,14,Common,
Equipment.aspx?ID=204,Dazing Coil,900 gp,,14,Common,
Equipment.aspx?ID=163,Ghost Ammunition,900 gp,,14,Common,type=ammunition&name=[Ghost] $
Equipment.aspx?ID=219,Iron Cudgel,900 gp,,14,Common,
Equipment.aspx?ID=189,Potion of Flying (Greater),"1,000 gp",L,15,Common,
Equipment.aspx?ID=175,Obfuscation Oil,"1,200 gp",L,15,Common,
Equipment.aspx?ID=640,8th-Level Scroll,"1,300 gp",L,15,Common,type=spell&level=8&name=[Scroll] of $ (8th level)
Equipment.aspx?ID=161,Disintegration Bolt,"1,300 gp",,15,Uncommon,
Equipment.aspx?ID=167,Spellstrike Ammunition (Type VII),"1,300 gp",,15,Common,type=ammunition&name=[Spellstrike] $ (Type VII)
Equipment.aspx?ID=168,Stone Bullet,"1,300 gp",,15,Common,
Equipment.aspx?ID=199,Truesight Potion,"1,500 gp",L,16,Common,
Equipment.aspx?ID=213,Flame Navette,"1,800 gp",,16,Common,
Equipment.aspx?ID=215,Ghost Dust,"1,800 gp",,16,Common,
Equipment.aspx?ID=205,Dispelling Sliver,"2,400 gp",,17,Common,
Equipment.aspx?ID=640,9th-Level Scroll,"3,000 gp",L,17,Common,type=spell&level=9&name=[Scroll] of $ (9th level)
Equipment.aspx?ID=185,Dragon's Breath Potion (Wyrm),"3,000 gp",L,17,Common,
Equipment.aspx?ID=167,Spellstrike Ammunition (Type VIII),"3,000 gp",,17,Common,type=ammunition&name=[Spellstrike] $ (Type VIII)
Equipment.aspx?ID=195,Potion of Undetectability,"4,400 gp",L,18,Common,
Equipment.aspx?ID=186,Healing Potion (Major),"5,000 gp",L,18,Common,
Equipment.aspx?ID=640,10th-Level Scroll,"8,000 gp",L,19,Common,type=spell&level=10&name=[Scroll] of $ (10th level)
Equipment.aspx?ID=167,Spellstrike Ammunition (Type IX),"8,000 gp",,19,Common,type=ammunition&name=[Spellstrike] $ (Type IX)
Equipment.aspx?ID=172,Antimagic Oil,"13,000 gp",L,20,Rare,
`}],

  [ "alchemicals", { displayName: "Alchemicals", data: `
url,name,value,bulk,level,rarity
Equipment.aspx?ID=622,Alcohol,1 cp (or more),L,0,Common
Equipment.aspx?ID=623,Bloodeye Coffee,5 sp,L,0,Common
Equipment.aspx?ID=624,Flayleaf,1 gp,L,0,Common
Equipment.aspx?ID=138,Tindertwig,2 sp,,1,Common
Equipment.aspx?ID=626,Refined Pesh,2 gp,L,1,Common
Equipment.aspx?ID=136,Snake Oil,2 gp,L,1,Common
Equipment.aspx?ID=74,Acid Flask (Lesser),3 gp,L,1,Common
Equipment.aspx?ID=75,Alchemist's Fire (Lesser),3 gp,L,1,Common
Equipment.aspx?ID=80,Antidote (Lesser),3 gp,L,1,Common
Equipment.aspx?ID=81,Antiplague (Lesser),3 gp,L,1,Common
Equipment.aspx?ID=104,Arsenic,3 gp,L,1,Common
Equipment.aspx?ID=76,Bottled Lightning (Lesser),3 gp,L,1,Common
Equipment.aspx?ID=86,Cheetah's Elixir (Lesser),3 gp,L,1,Common
Equipment.aspx?ID=91,Elixir of Life (Minor),3 gp,L,1,Common
Equipment.aspx?ID=77,Frost Vial (Lesser),3 gp,L,1,Common
Equipment.aspx?ID=95,Leaper's Elixir (Lesser),3 gp,L,1,Common
Equipment.aspx?ID=135,Smokestick (Lesser),3 gp,L,1,Common
Equipment.aspx?ID=137,Sunrod,3 gp,L,1,Common
Equipment.aspx?ID=78,Tanglefoot Bag (Lesser),3 gp,L,1,Common
Equipment.aspx?ID=79,Thunderstone (Lesser),3 gp,L,1,Common
Equipment.aspx?ID=82,Bestial Mutagen (Lesser),4 gp,L,1,Common
Equipment.aspx?ID=625,Blood Sap,4 gp,L,1,Common
Equipment.aspx?ID=87,Cognitive Mutagen (Lesser),4 gp,L,1,Common
Equipment.aspx?ID=90,Eagle-Eye Elixir (Lesser),4 gp,L,1,Common
Equipment.aspx?ID=113,Giant Centipede Venom,4 gp,L,1,Common
Equipment.aspx?ID=94,Juggernaut Mutagen (Lesser),4 gp,L,1,Common
Equipment.aspx?ID=97,Quicksilver Mutagen (Lesser),4 gp,L,1,Common
Equipment.aspx?ID=100,Serene Mutagen (Lesser),4 gp,L,1,Common
Equipment.aspx?ID=101,Silvertongue Mutagen (Lesser),4 gp,L,1,Common
Equipment.aspx?ID=105,Belladonna,5 gp,L,2,Common
Equipment.aspx?ID=106,Black Adder Venom,6 gp,L,2,Common
Equipment.aspx?ID=89,Darkvision Elixir (Lesser),6 gp,L,2,Common
Equipment.aspx?ID=93,Infiltrator's Elixir,6 gp,L,2,Common
Equipment.aspx?ID=134,Silversheen,6 gp,L,2,Common
Equipment.aspx?ID=84,Bravo's Brew (Lesser),7 gp,L,2,Common
Equipment.aspx?ID=85,Cat's Eye Elixir,7 gp,L,2,Common
Equipment.aspx?ID=88,Comprehension Elixir (Lesser),7 gp,L,2,Common
Equipment.aspx?ID=120,Lethargy Poison,7 gp,L,2,Uncommon
Equipment.aspx?ID=74,Acid Flask (Moderate),10 gp,L,3,Common
Equipment.aspx?ID=75,Alchemist's Fire (Moderate),10 gp,L,3,Common
Equipment.aspx?ID=76,Bottled Lightning (Moderate),10 gp,L,3,Common
Equipment.aspx?ID=110,Cytillesh Oil,10 gp,L,3,Common
Equipment.aspx?ID=77,Frost Vial (Moderate),10 gp,L,3,Common
Equipment.aspx?ID=116,Graveroot,10 gp,L,3,Common
Equipment.aspx?ID=627,Shiver,10 gp,L,3,Common
Equipment.aspx?ID=78,Tanglefoot Bag (Moderate),10 gp,L,3,Common
Equipment.aspx?ID=79,Thunderstone (Moderate),10 gp,L,3,Common
Equipment.aspx?ID=82,Bestial Mutagen (Moderate),12 gp,L,3,Common
Equipment.aspx?ID=87,Cognitive Mutagen (Moderate),12 gp,L,3,Common
Equipment.aspx?ID=94,Juggernaut Mutagen (Moderate),12 gp,L,3,Common
Equipment.aspx?ID=97,Quicksilver Mutagen (Moderate),12 gp,L,3,Common
Equipment.aspx?ID=100,Serene Mutagen (Moderate),12 gp,L,3,Common
Equipment.aspx?ID=101,Silvertongue Mutagen (Moderate),12 gp,L,3,Common
Equipment.aspx?ID=89,Darkvision Elixir (Moderate),11 gp,L,4,Common
Equipment.aspx?ID=628,Dreamtime Tea,13 gp,L,4,Common
Equipment.aspx?ID=102,Stone Fist Elixir,13 gp,L,4,Common
Equipment.aspx?ID=83,Bomber's Eye Elixir (Lesser),14 gp,L,4,Common
Equipment.aspx?ID=98,Salamander Elixir (Lesser),15 gp,L,4,Common
Equipment.aspx?ID=103,Winter Wolf Elixir (Lesser),15 gp,L,4,Common
Equipment.aspx?ID=96,Mistform Elixir (Lesser),18 gp,L,4,Common
Equipment.aspx?ID=629,Zerk,20 gp,L,4,Common
Equipment.aspx?ID=99,Sea Touch Elixir (Lesser),22 gp,L,5,Common
Equipment.aspx?ID=86,Cheetah's Elixir (Moderate),25 gp,L,5,Common
Equipment.aspx?ID=631,Elven Absinthe,25 gp,L,5,Common
Equipment.aspx?ID=118,Hunting Spider Venom,25 gp,L,5,Common
Equipment.aspx?ID=90,Eagle-Eye Elixir (Moderate),27 gp,L,5,Common
Equipment.aspx?ID=630,Cytillesh,30 gp,L,5,Uncommon
Equipment.aspx?ID=91,Elixir of Life (Lesser),30 gp,L,5,Common
Equipment.aspx?ID=80,Antidote (Moderate),35 gp,L,6,Common
Equipment.aspx?ID=81,Antiplague (Moderate),35 gp,L,6,Common
Equipment.aspx?ID=114,Giant Scorpion Venom,40 gp,L,6,Common
Equipment.aspx?ID=96,Mistform Elixir (Moderate),56 gp,L,6,Common
Equipment.aspx?ID=135,Smokestick (Greater),53 gp,L,7,Common
Equipment.aspx?ID=88,Comprehension Elixir (Greater),54 gp,L,7,Common
Equipment.aspx?ID=115,Giant Wasp Venom,55 gp,L,7,Common
Equipment.aspx?ID=95,Leaper's Elixir (Greater),55 gp,L,7,Common
Equipment.aspx?ID=122,Malyass Root Paste,55 gp,L,7,Common
Equipment.aspx?ID=124,Nettleweed Residue,75 gp,L,8,Common
Equipment.aspx?ID=632,Scour,80 gp,L,8,Uncommon
Equipment.aspx?ID=132,Wyvern Poison,80 gp,L,8,Common
Equipment.aspx?ID=89,Darkvision Elixir (Greater),90 gp,L,8,Common
Equipment.aspx?ID=86,Cheetah's Elixir (Greater),110 gp,L,9,Common
Equipment.aspx?ID=121,Lich Dust,110 gp,L,9,Common
Equipment.aspx?ID=129,Spider Root,110 gp,L,9,Common
Equipment.aspx?ID=91,Elixir of Life (Moderate),150 gp,L,9,Common
Equipment.aspx?ID=84,Bravo's Brew (Moderate),150 gp,L,10,Common
Equipment.aspx?ID=131,Wolfsbane,155 gp,L,10,Common
Equipment.aspx?ID=80,Antidote (Greater),160 gp,L,10,Common
Equipment.aspx?ID=81,Antiplague (Greater),160 gp,L,10,Common
Equipment.aspx?ID=127,Shadow Essence,160 gp,L,10,Common
Equipment.aspx?ID=96,Mistform Elixir (Greater),180 gp,L,10,Common
Equipment.aspx?ID=90,Eagle-Eye Elixir (Greater),200 gp,L,10,Common
Equipment.aspx?ID=108,Blightburn Resin,225 gp,L,11,Common
Equipment.aspx?ID=74,Acid Flask (Greater),250 gp,L,11,Common
Equipment.aspx?ID=75,Alchemist's Fire (Greater),250 gp,L,11,Common
Equipment.aspx?ID=76,Bottled Lightning (Greater),250 gp,L,11,Common
Equipment.aspx?ID=77,Frost Vial (Greater),250 gp,L,11,Common
Equipment.aspx?ID=78,Tanglefoot Bag (Greater),250 gp,L,11,Common
Equipment.aspx?ID=79,Thunderstone (Greater),250 gp,L,11,Common
Equipment.aspx?ID=82,Bestial Mutagen (Greater),300 gp,L,11,Common
Equipment.aspx?ID=87,Cognitive Mutagen (Greater),300 gp,L,11,Common
Equipment.aspx?ID=94,Juggernaut Mutagen (Greater),300 gp,L,11,Common
Equipment.aspx?ID=97,Quicksilver Mutagen (Greater),300 gp,L,11,Common
Equipment.aspx?ID=100,Serene Mutagen (Greater),300 gp,L,11,Common
Equipment.aspx?ID=101,Silvertongue Mutagen (Greater),300 gp,L,11,Common
Equipment.aspx?ID=99,Sea Touch Elixir (Moderate),300 gp,L,12,Common
Equipment.aspx?ID=98,Salamander Elixir (Moderate),320 gp,L,12,Common
Equipment.aspx?ID=103,Winter Wolf Elixir (Moderate),320 gp,L,12,Common
Equipment.aspx?ID=128,Slumber Wine,325 gp,L,12,Common
Equipment.aspx?ID=111,Deathcap Powder,450 gp,L,13,Common
Equipment.aspx?ID=126,Purple Worm Venom,500 gp,L,13,Common
Equipment.aspx?ID=91,Elixir of Life (Greater),600 gp,L,13,Common
Equipment.aspx?ID=80,Antidote (Major),675 gp,L,14,Common
Equipment.aspx?ID=81,Antiplague (Major),675 gp,L,14,Common
Equipment.aspx?ID=83,Bomber's Eye Elixir (Greater),700 gp,L,14,Common
Equipment.aspx?ID=84,Bravo's Brew (Greater),700 gp,L,15,Common
Equipment.aspx?ID=99,Sea Touch Elixir (Greater),920 gp,L,15,Common
Equipment.aspx?ID=112,Dragon Bile,925 gp,L,15,Common
Equipment.aspx?ID=123,Mindfog Mist,"1,000 gp",L,15,Common
Equipment.aspx?ID=91,Elixir of Life (Major),"1,300 gp",L,15,Common
Equipment.aspx?ID=125,Nightmare Vapor,"1,400 gp",L,16,Common
Equipment.aspx?ID=98,Salamander Elixir (Greater),"1,400 gp",L,16,Common
Equipment.aspx?ID=103,Winter Wolf Elixir (Greater),"1,400 gp",L,16,Common
Equipment.aspx?ID=109,Brimstone Fumes,"1,500 gp",L,16,Common
Equipment.aspx?ID=90,Eagle-Eye Elixir (Major),"2,000 gp",L,16,Common
Equipment.aspx?ID=117,Hemlock,"2,250 gp",L,17,Common
Equipment.aspx?ID=74,Acid Flask (Major),"2,500 gp",L,17,Common
Equipment.aspx?ID=75,Alchemist's Fire (Major),"2,500 gp",L,17,Common
Equipment.aspx?ID=76,Bottled Lightning (Major),"2,500 gp",L,17,Common
Equipment.aspx?ID=77,Frost Vial (Major),"2,500 gp",L,17,Common
Equipment.aspx?ID=78,Tanglefoot Bag (Major),"2,500 gp",L,17,Common
Equipment.aspx?ID=79,Thunderstone (Major),"2,500 gp",L,17,Common
Equipment.aspx?ID=82,Bestial Mutagen (Major),"3,000 gp",L,17,Common
Equipment.aspx?ID=87,Cognitive Mutagen (Major),"3,000 gp",L,17,Common
Equipment.aspx?ID=94,Juggernaut Mutagen (Major),"3,000 gp",L,17,Common
Equipment.aspx?ID=97,Quicksilver Mutagen (Major),"3,000 gp",L,17,Common
Equipment.aspx?ID=100,Serene Mutagen (Major),"3,000 gp",L,17,Common
Equipment.aspx?ID=101,Silvertongue Mutagen (Major),"3,000 gp",L,17,Common
Equipment.aspx?ID=119,King's Sleep,"4,000 gp",L,18,Common
Equipment.aspx?ID=107,Black Lotus Extract,"6,500 gp",L,19,Common
Equipment.aspx?ID=91,Elixir of Life (True),"8,000 gp",L,19,Common
Equipment.aspx?ID=130,Tears of Death,"12,000 gp",L,20,Common
Equipment.aspx?ID=92,Elixir of Rejuvenation,,L,20,Uncommon
Equipment.aspx?ID=133,Philosopher's Stone,,2,20,Uncommon
`}],

  [ "holdables", { displayName: "Holdables", data: `
url,name,value,bulk,level,rarity
Equipment.aspx?ID=255,Everburning Torch,15 gp,L,1,Common
Equipment.aspx?ID=270,Wondrous Figurine (Onyx Dog),34 gp,L,2,Common
Equipment.aspx?ID=267,Thurible of Revelation (Lesser),55 gp,1,3,Common
Equipment.aspx?ID=260,Maestro's Instrument (Lesser),60 gp,1,3,Common
Equipment.aspx?ID=249,Bag of Holding (Type I),75 gp,1,4,Common
Equipment.aspx?ID=266,Skeleton Key,125 gp,,5,Common
Equipment.aspx?ID=256,Holy Prayer Beads,160 gp,,5,Uncommon
Equipment.aspx?ID=268,Traveler's Any-Tool,200 gp,1,6,Common
Equipment.aspx?ID=258,Horn of Fog,230 gp,1,6,Common
Equipment.aspx?ID=263,Primeval Mistletoe,230 gp,,6,Common
Equipment.aspx?ID=252,Chime of Opening,235 gp,L,6,Uncommon
Equipment.aspx?ID=249,Bag of Holding (Type II),300 gp,1,7,Common
Equipment.aspx?ID=250,Bottled Air,320 gp,L,7,Common
Equipment.aspx?ID=254,Decanter of Endless Water,320 gp,L,7,Common
Equipment.aspx?ID=270,Wondrous Figurine (Jade Serpent),340 gp,L,7,Common
Equipment.aspx?ID=265,Rod of Wonder,465 gp,L,8,Rare
Equipment.aspx?ID=259,Immovable Rod,600 gp,1,9,Common
Equipment.aspx?ID=269,Triton's Conch,640 gp,L,9,Common
Equipment.aspx?ID=257,Horn of Blasting,700 gp,L,9,Common
Equipment.aspx?ID=260,Maestro's Instrument (Moderate),900 gp,1,10,Common
Equipment.aspx?ID=267,Thurible of Revelation (Moderate),900 gp,1,10,Common
Equipment.aspx?ID=270,Wondrous Figurine (Golden Lions),900 gp,L,10,Common
Equipment.aspx?ID=249,Bag of Holding (Type III),"1,200 gp",1,11,Common
Equipment.aspx?ID=266,Skeleton Key (Greater),"1,250 gp",,11,Common
Equipment.aspx?ID=256,Holy Prayer Beads (Greater),"1,400 gp",,11,Uncommon
Equipment.aspx?ID=261,Marvelous Medicines,"1,800 gp",1,12,Common
Equipment.aspx?ID=251,Broom of Flying,"1,900 gp",1,12,Common
Equipment.aspx?ID=249,Bag of Holding (Type IV),"2,400 gp",1,13,Common
Equipment.aspx?ID=270,Wondrous Figurine (Marble Elephant),"2,700 gp",L,13,Common
Equipment.aspx?ID=253,Crystal Ball (Clear Quartz),"3,800 gp",L,14,Uncommon
Equipment.aspx?ID=263,Primeval Mistletoe (Greater),"3,900 gp",,14,Common
Equipment.aspx?ID=264,Rod of Negation,"4,300 gp",1,14,Common
Equipment.aspx?ID=270,Wondrous Figurine (Obsidian Steed),"6,000 gp",L,15,Uncommon
Equipment.aspx?ID=253,Crystal Ball (Selenite),"7,000 gp",L,15,Uncommon
Equipment.aspx?ID=253,Crystal Ball (Moonstone),"7,500 gp",L,16,Uncommon
Equipment.aspx?ID=253,Crystal Ball (Peridot),"12,500 gp",L,17,Uncommon
Equipment.aspx?ID=260,Maestro's Instrument (Greater),"19,000 gp",1,18,Common
Equipment.aspx?ID=261,Marvelous Medicines (Greater),"19,000 gp",1,18,Common
Equipment.aspx?ID=267,Thurible of Revelation (Greater),"19,000 gp",1,18,Common
Equipment.aspx?ID=262,Possibility Tome,"22,000 gp",2,18,Common
Equipment.aspx?ID=253,Crystal Ball (Obsidian),"32,000 gp",L,19,Uncommon
`}],

  [ "wearables", { displayName: "Wearables", data: `
url,name,value,bulk,level,rarity
Equipment.aspx?ID=407,Aeon Stone (Dull Gray),9 gp,,1,Uncommon
Equipment.aspx?ID=470,Wayfinder,28 gp,,2,Uncommon
Equipment.aspx?ID=418,Brooch of Shielding,30 gp,,2,Uncommon
Equipment.aspx?ID=440,Hand of the Mage,30 gp,L,2,Common
Equipment.aspx?ID=442,Hat of Disguise,30 gp,,2,Common
Equipment.aspx?ID=441,Handwraps of Mighty Blows (+1),35 gp,,2,Common
Equipment.aspx?ID=432,Doubling Rings,50 gp,,3,Common
Equipment.aspx?ID=443,Hat of the Magi,50 gp,,3,Common
Equipment.aspx?ID=451,Persona Mask,50 gp,,3,Common
Equipment.aspx?ID=417,Bracers of Missile Deflection,52 gp,L,3,Common
Equipment.aspx?ID=421,Channel Protection Amulet,56 gp,,3,Uncommon
Equipment.aspx?ID=415,Bracelet of Dashing,58 gp,L,3,Common
Equipment.aspx?ID=426,Coyote Cloak,60 gp,,3,Common
Equipment.aspx?ID=427,Crafter's Eyepiece,60 gp,,3,Common
Equipment.aspx?ID=428,Dancing Scarf,60 gp,,3,Common
Equipment.aspx?ID=450,Pendant of the Occult,60 gp,,3,Common
Equipment.aspx?ID=467,Tracker's Goggles,60 gp,,3,Common
Equipment.aspx?ID=468,Ventriloquist's Ring,60 gp,,3,Common
Equipment.aspx?ID=444,Healer's Gloves,80 gp,L,4,Common
Equipment.aspx?ID=447,Lifting Belt,80 gp,L,4,Common
Equipment.aspx?ID=430,Demon Mask,85 gp,L,4,Common
Equipment.aspx?ID=408,Alchemist Goggles,100 gp,,4,Common
Equipment.aspx?ID=441,Handwraps of Mighty Blows (+1 Striking),100 gp,,4,Common
Equipment.aspx?ID=449,Necklace of Fireballs I,44 gp,,5,Common
Equipment.aspx?ID=431,Diplomat's Badge,125 gp,,5,Common
Equipment.aspx?ID=413,Boots of Elvenkind,145 gp,L,5,Common
Equipment.aspx?ID=438,Goggles of Night,150 gp,,5,Common
Equipment.aspx?ID=422,Choker of Elocution,200 gp,L,6,Common
Equipment.aspx?ID=461,Ring of the Ram,220 gp,,6,Common
Equipment.aspx?ID=407,Aeon Stone (Gold Nodule),230 gp,,6,Uncommon
Equipment.aspx?ID=423,Clandestine Cloak,230 gp,L,6,Uncommon
Equipment.aspx?ID=455,Ring of Energy Resistance,245 gp,,6,Common
Equipment.aspx?ID=449,Necklace of Fireballs II,115 gp,,7,Common
Equipment.aspx?ID=407,Aeon Stone (Clear Spindle),325 gp,,7,Uncommon
Equipment.aspx?ID=459,Ring of Sustenance,325 gp,,7,Uncommon
Equipment.aspx?ID=465,Slippers of Spider Climbing,325 gp,L,7,Common
Equipment.aspx?ID=412,Boots of Bounding,340 gp,L,7,Common
Equipment.aspx?ID=437,Gloves of Storing,340 gp,,7,Uncommon
Equipment.aspx?ID=442,Hat of Disguise (Greater),340 gp,,7,Common
Equipment.aspx?ID=406,Horseshoes of Speed,340 gp,1,7,Common
Equipment.aspx?ID=407,Aeon Stone (Tourmaline Sphere),350 gp,,7,Uncommon
Equipment.aspx?ID=424,Cloak of Elvenkind,360 gp,L,7,Common
Equipment.aspx?ID=462,Ring of Wizardry (Type I),360 gp,,7,Uncommon
Equipment.aspx?ID=416,Bracers of Armor I,450 gp,L,8,Common
Equipment.aspx?ID=405,Collar of Inconspicuousness,475 gp,1,8,Common
Equipment.aspx?ID=449,Necklace of Fireballs III,300 gp,,9,Common
Equipment.aspx?ID=404,Collar of Empathy,600 gp,1,9,Common
Equipment.aspx?ID=409,Armbands of Athleticism,645 gp,L,9,Common
Equipment.aspx?ID=410,Belt of the Five Kings,650 gp,L,9,Uncommon
Equipment.aspx?ID=417,Bracers of Missile Deflection (Greater),650 gp,L,9,Common
Equipment.aspx?ID=426,Coyote Cloak (Greater),650 gp,,9,Common
Equipment.aspx?ID=428,Dancing Scarf (Greater),650 gp,,9,Common
Equipment.aspx?ID=443,Hat of the Magi (Greater),650 gp,,9,Common
Equipment.aspx?ID=450,Pendant of the Occult (Greater),650 gp,,9,Common
Equipment.aspx?ID=451,Persona Mask (Greater),650 gp,,9,Common
Equipment.aspx?ID=467,Tracker's Goggles (Greater),660 gp,,9,Common
Equipment.aspx?ID=468,Ventriloquist's Ring (Greater),670 gp,,9,Common
Equipment.aspx?ID=446,Knapsack of Halflingkind,675 gp,L,9,Uncommon
Equipment.aspx?ID=452,Phylactery of Faithfulness,680 gp,L,9,Common
Equipment.aspx?ID=436,Eyes of the Eagle,700 gp,,9,Common
Equipment.aspx?ID=444,Healer's Gloves (Greater),700 gp,L,9,Common
Equipment.aspx?ID=448,Messenger's Ring,700 gp,,9,Common
Equipment.aspx?ID=422,Choker of Elocution (Greater),850 gp,L,10,Common
Equipment.aspx?ID=456,Ring of Lies,850 gp,,10,Uncommon
Equipment.aspx?ID=472,Winged Boots,850 gp,L,10,Common
Equipment.aspx?ID=403,Barding of the Zephyr,900 gp,L,10,Common
Equipment.aspx?ID=423,Clandestine Cloak (Greater),900 gp,L,10,Uncommon
Equipment.aspx?ID=429,Daredevil Boots,900 gp,L,10,Common
Equipment.aspx?ID=430,Demon Mask (Greater),900 gp,L,10,Common
Equipment.aspx?ID=454,Ring of Counterspells,925 gp,,10,Uncommon
Equipment.aspx?ID=425,Cloak of the Bat,950 gp,L,10,Common
Equipment.aspx?ID=455,Ring of Energy Resistance (Greater),975 gp,,10,Common
Equipment.aspx?ID=419,Cape of the Mountebank,980 gp,L,10,Uncommon
Equipment.aspx?ID=434,Druid's Vestments,"1,000 gp",L,10,Common
Equipment.aspx?ID=441,Handwraps of Mighty Blows (+2 Striking),"1,000 gp",,10,Common
Equipment.aspx?ID=462,Ring of Wizardry (Type II),"1,000 gp",,10,Uncommon
Equipment.aspx?ID=449,Necklace of Fireballs IV,700 gp,,11,Common
Equipment.aspx?ID=420,Cassock of Devotion,"1,150 gp",L,11,Common
Equipment.aspx?ID=457,Ring of Maniacal Devices,"1,175 gp",,11,Common
Equipment.aspx?ID=427,Crafter's Eyepiece (Greater),"1,200 gp",,11,Common
Equipment.aspx?ID=413,Boots of Elvenkind (Greater),"1,250 gp",L,11,Common
Equipment.aspx?ID=438,Goggles of Night (Greater),"1,250 gp",,11,Common
Equipment.aspx?ID=439,Gorget of the Primal Roar,"1,250 gp",L,11,Common
Equipment.aspx?ID=432,Doubling Rings (Greater),"1,300 gp",,11,Common
Equipment.aspx?ID=408,Alchemist Goggles (Greater),"1,400 gp",,11,Common
Equipment.aspx?ID=424,Cloak of Elvenkind (Greater),"1,750 gp",L,12,Common
Equipment.aspx?ID=453,Ring of Climbing,"1,750 gp",,12,Common
Equipment.aspx?ID=460,Ring of Swimming,"1,750 gp",,12,Common
Equipment.aspx?ID=407,Aeon Stone (Pink Rhomboid),"1,900 gp",,12,Uncommon
Equipment.aspx?ID=411,Berserker's Cloak,"2,000 gp",1,12,Common
Equipment.aspx?ID=441,Handwraps of Mighty Blows (+2 Greater Striking),"2,000 gp",,12,Common
Equipment.aspx?ID=462,Ring of Wizardry (Type III),"2,000 gp",,12,Uncommon
Equipment.aspx?ID=449,Necklace of Fireballs V,"1,600 gp",,13,Common
Equipment.aspx?ID=407,Aeon Stone (Pale Lavender Ellipsoid),"2,200 gp",,13,Uncommon
Equipment.aspx?ID=435,Eye of Fortune,"2,700 gp",,13,Common
Equipment.aspx?ID=461,Ring of the Ram (Greater),"2,700 gp",,13,Common
Equipment.aspx?ID=446,Knapsack of Halflingkind (Greater),"2,850 gp",L,13,Uncommon
Equipment.aspx?ID=414,Boots of Speed,"3,000 gp",L,13,Common
Equipment.aspx?ID=416,Bracers of Armor II,"4,000 gp",L,14,Common
Equipment.aspx?ID=412,Boots of Bounding (Greater),"4,250 gp",L,14,Common
Equipment.aspx?ID=406,Horseshoes of Speed (Greater),"4,250 gp",1,14,Common
Equipment.aspx?ID=455,Ring of Energy Resistance (Major),"4,400 gp",,14,Common
Equipment.aspx?ID=462,Ring of Wizardry (Type IV),"4,500 gp",,14,Uncommon
Equipment.aspx?ID=449,Necklace of Fireballs VI,"4,200 gp",,15,Common
Equipment.aspx?ID=464,Robe of the Archmagi,"6,500 gp",1,15,Uncommon
Equipment.aspx?ID=407,Aeon Stone (Orange Prism),"9,750 gp",,16,Uncommon
Equipment.aspx?ID=441,Handwraps of Mighty Blows (+3 Greater Striking),"10,000 gp",,16,Common
Equipment.aspx?ID=449,Necklace of Fireballs VII,"9,600 gp",,17,Common
Equipment.aspx?ID=409,Armbands of Athleticism (Greater),"13,000 gp",L,17,Common
Equipment.aspx?ID=425,Cloak of the Bat (Greater),"13,000 gp",L,17,Common
Equipment.aspx?ID=452,Phylactery of Faithfulness (Greater),"13,000 gp",L,17,Common
Equipment.aspx?ID=463,Robe of Eyes,"13,000 gp",1,17,Uncommon
Equipment.aspx?ID=448,Messenger's Ring (Greater),"13,500 gp",,17,Common
Equipment.aspx?ID=429,Daredevil Boots (Greater),"14,000 gp",L,17,Common
Equipment.aspx?ID=469,Voyager's Pack,"14,800 gp",,17,Uncommon
Equipment.aspx?ID=408,Alchemist Goggles (Major),"15,000 gp",,17,Common
Equipment.aspx?ID=397,Anklets of Alacrity,"15,000 gp",,17,Common
Equipment.aspx?ID=398,Belt of Giant Strength,"15,000 gp",L,17,Common
Equipment.aspx?ID=399,Belt of Regeneration,"15,000 gp",L,17,Common
Equipment.aspx?ID=400,Circlet of Persuasion,"15,000 gp",,17,Common
Equipment.aspx?ID=401,Diadem of Intellect,"15,000 gp",L,17,Common
Equipment.aspx?ID=433,Dread Blindfold,"15,000 gp",,17,Common
Equipment.aspx?ID=402,Headband of Inspired Wisdom,"15,000 gp",,17,Common
Equipment.aspx?ID=445,Inexplicable Apparatus,"19,000 gp",2,18,Common
Equipment.aspx?ID=438,Goggles of Night (Major),"20,000 gp",,18,Common
Equipment.aspx?ID=457,Ring of Maniacal Devices (Greater),"21,000 gp",,18,Common
Equipment.aspx?ID=407,Aeon Stone (Lavender and Green Ellipsoid),"30,000 gp",,19,Uncommon
Equipment.aspx?ID=464,Robe of the Archmagi (Greater),"32,000 gp",1,19,Uncommon
Equipment.aspx?ID=411,Berserker's Cloak (Greater),"40,000 gp",1,19,Common
Equipment.aspx?ID=441,Handwraps of Mighty Blows (+3 Major Striking),"40,000 gp",,19,Common
Equipment.aspx?ID=466,Third Eye,"40,000 gp",,19,Common
Equipment.aspx?ID=416,Bracers of Armor III,"60,000 gp",L,20,Common
Equipment.aspx?ID=471,Whisper of the First Lie,"60,000 gp",,20,Rare
Equipment.aspx?ID=458,Ring of Spell Turning,"67,000 gp",,20,Rare
`}],

  [ "staves", { displayName: "Staves", data: `
url,name,value,bulk,level,rarity
Equipment.aspx?ID=356,Staff of Fire,60 gp,1,3,Common
Equipment.aspx?ID=349,Animal Staff,90 gp,1,4,Common
Equipment.aspx?ID=350,Mentalist's Staff,90 gp,1,4,Common
Equipment.aspx?ID=357,Staff of Healing,90 gp,1,4,Common
Equipment.aspx?ID=364,Verdant Staff,225 gp,1,6,Common
Equipment.aspx?ID=351,Staff of Abjuration,230 gp,1,6,Common
Equipment.aspx?ID=352,Staff of Conjuration,230 gp,1,6,Common
Equipment.aspx?ID=353,Staff of Divination,230 gp,1,6,Common
Equipment.aspx?ID=354,Staff of Enchantment,230 gp,1,6,Common
Equipment.aspx?ID=355,Staff of Evocation,230 gp,1,6,Common
Equipment.aspx?ID=359,Staff of Illusion,230 gp,1,6,Common
Equipment.aspx?ID=360,Staff of Necromancy,230 gp,1,6,Common
Equipment.aspx?ID=363,Staff of Transmutation,230 gp,1,6,Common
Equipment.aspx?ID=358,Staff of Illumination,425 gp,1,8,Common
Equipment.aspx?ID=350,Mentalist's Staff (Greater),450 gp,1,8,Common
Equipment.aspx?ID=356,Staff of Fire (Greater),450 gp,1,8,Common
Equipment.aspx?ID=349,Animal Staff (Greater),460 gp,1,8,Common
Equipment.aspx?ID=357,Staff of Healing (Greater),470 gp,1,8,Common
Equipment.aspx?ID=351,Staff of Abjuration (Greater),900 gp,1,10,Common
Equipment.aspx?ID=352,Staff of Conjuration (Greater),900 gp,1,10,Common
Equipment.aspx?ID=353,Staff of Divination (Greater),900 gp,1,10,Common
Equipment.aspx?ID=354,Staff of Enchantment (Greater),900 gp,1,10,Common
Equipment.aspx?ID=355,Staff of Evocation (Greater),900 gp,1,10,Common
Equipment.aspx?ID=359,Staff of Illusion (Greater),900 gp,1,10,Common
Equipment.aspx?ID=360,Staff of Necromancy (Greater),900 gp,1,10,Common
Equipment.aspx?ID=363,Staff of Transmutation (Greater),900 gp,1,10,Common
Equipment.aspx?ID=364,Verdant Staff (Greater),"1,750 gp",1,12,Common
Equipment.aspx?ID=350,Mentalist's Staff (Major),"1,800 gp",1,12,Common
Equipment.aspx?ID=356,Staff of Fire (Major),"1,800 gp",1,12,Common
Equipment.aspx?ID=357,Staff of Healing (Major),"1,800 gp",1,12,Common
Equipment.aspx?ID=349,Animal Staff (Major),"1,900 gp",1,12,Common
Equipment.aspx?ID=351,Staff of Abjuration (Major),"4,000 gp",1,14,Common
Equipment.aspx?ID=352,Staff of Conjuration (Major),"4,000 gp",1,14,Common
Equipment.aspx?ID=353,Staff of Divination (Major),"4,000 gp",1,14,Common
Equipment.aspx?ID=354,Staff of Enchantment (Major),"4,000 gp",1,14,Uncommon
Equipment.aspx?ID=355,Staff of Evocation (Major),"4,000 gp",1,14,Common
Equipment.aspx?ID=359,Staff of Illusion (Major),"4,000 gp",1,14,Common
Equipment.aspx?ID=360,Staff of Necromancy (Major),"4,000 gp",1,14,Common
Equipment.aspx?ID=363,Staff of Transmutation (Major),"4,000 gp",1,14,Common
Equipment.aspx?ID=357,Staff of Healing (True),"9,200 gp",1,16,Common
Equipment.aspx?ID=361,Staff of Power,"10,000 gp",1,16,Rare
Equipment.aspx?ID=362,Staff of the Magi,"90,000 gp",1,20,Rare
`}],

  [ "wands", { displayName: "Wands", data: `
url,name,value,bulk,level,rarity,transform
Equipment.aspx?ID=368,Magic Wand (1st-Level Spell),60 gp,L,3,Common,type=spell&level=1&name=[Wand] of $ (1st level)
Equipment.aspx?ID=373,Wand of Widening (1st-Level Spell),100 gp,L,4,Common,type=widening&level=1&name=[Wand of Widening]: $ (1st level)
Equipment.aspx?ID=368,Magic Wand (2nd-Level Spell),160 gp,L,5,Common,type=spell&level=2&name=[Wand] of $ (2nd level)
Equipment.aspx?ID=369,Wand of Continuation (1st-Level Spell),160 gp,L,5,Common,type=continuation&level=1&name=[Wand of Continuation]: $ (1st level)
Equipment.aspx?ID=370,Wand of Manifold Missiles (1st-Level Spell),160 gp,L,5,Common,
Equipment.aspx?ID=373,Wand of Widening (2nd-Level Spell),250 gp,L,6,Common,type=widening&level=2&name=[Wand of Widening]: $ (2nd level)
Equipment.aspx?ID=368,Magic Wand (3rd-Level Spell),360 gp,L,7,Common,type=spell&level=3&name=[Wand] of $ (3rd level)
Equipment.aspx?ID=369,Wand of Continuation (2nd-Level Spell),360 gp,L,7,Common,type=continuation&level=2&name=[Wand of Continuation]: $ (2nd level)
Equipment.aspx?ID=372,Wand of Smoldering Fireballs (3rd-Level Spell),500 gp,L,8,Common,
Equipment.aspx?ID=373,Wand of Widening (3rd-Level Spell),500 gp,L,8,Common,type=widening&level=3&name=[Wand of Widening]: $ (3rd level)
Equipment.aspx?ID=368,Magic Wand (4th-Level Spell),700 gp,L,9,Common,type=spell&level=4&name=[Wand] of $ (4th level)
Equipment.aspx?ID=369,Wand of Continuation (3rd-Level Spell),700 gp,L,9,Common,type=continuation&level=3&name=[Wand of Continuation]: $ (3rd level)
Equipment.aspx?ID=370,Wand of Manifold Missiles (3rd-Level Spell),700 gp,L,9,Common,
Equipment.aspx?ID=373,Wand of Widening (4th-Level Spell),"1,000 gp",L,10,Common,type=widening&level=4&name=[Wand of Widening]: $ (4th level)
Equipment.aspx?ID=368,Magic Wand (5th-Level Spell),"1,500 gp",L,11,Common,type=spell&level=5&name=[Wand] of $ (5th level)
Equipment.aspx?ID=369,Wand of Continuation (4th-Level Spell),"1,500 gp",L,11,Common,type=continuation&level=4&name=[Wand of Continuation]: $ (4th level)
Equipment.aspx?ID=372,Wand of Smoldering Fireballs (5th-Level Spell),"2,000 gp",L,12,Common,
Equipment.aspx?ID=373,Wand of Widening (5th-Level Spell),"2,000 gp",L,12,Common,type=widening&level=5&name=[Wand of Widening]: $ (5th level)
Equipment.aspx?ID=368,Magic Wand (6th-Level Spell),"3,000 gp",L,13,Common,type=spell&level=6&name=[Wand] of $ (6th level)
Equipment.aspx?ID=369,Wand of Continuation (5th-Level Spell),"3,000 gp",L,13,Common,type=continuation&level=5&name=[Wand of Continuation]: $ (5th level)
Equipment.aspx?ID=370,Wand of Manifold Missiles (5th-Level Spell),"3,000 gp",L,13,Common,
Equipment.aspx?ID=373,Wand of Widening (6th-Level Spell),"4,500 gp",L,14,Common,type=widening&level=6&name=[Wand of Widening]: $ (6th level)
Equipment.aspx?ID=368,Magic Wand (7th-Level Spell),"6,500 gp",L,15,Common,type=spell&level=7&name=[Wand] of $ (7th level)
Equipment.aspx?ID=369,Wand of Continuation (6th-Level Spell),"6,500 gp",L,15,Common,type=continuation&level=6&name=[Wand of Continuation]: $ (6th level)
Equipment.aspx?ID=371,Wand of Slaying (7th-Level Spell),"10,000 gp",L,16,Common,
Equipment.aspx?ID=372,Wand of Smoldering Fireballs (7th-Level Spell),"10,000 gp",L,16,Common,
Equipment.aspx?ID=373,Wand of Widening (7th-Level Spell),"10,000 gp",L,16,Common,type=widening&level=7&name=[Wand of Widening]: $ (7th level)
Equipment.aspx?ID=368,Magic Wand (8th-Level Spell),"15,000 gp",L,17,Common,type=spell&level=8&name=[Wand] of $ (8th level)
Equipment.aspx?ID=369,Wand of Continuation (7th-Level Spell),"15,000 gp",L,17,Common,type=continuation&level=7&name=[Wand of Continuation]: $ (7th level)
Equipment.aspx?ID=370,Wand of Manifold Missiles (7th-Level Spell),"15,000 gp",L,17,Common,
Equipment.aspx?ID=371,Wand of Slaying (8th-Level Spell),"24,000 gp",L,18,Common,
Equipment.aspx?ID=373,Wand of Widening (8th-Level Spell),"24,000 gp",L,18,Common,type=widening&level=8&name=[Wand of Widening]: $ (8th level)
Equipment.aspx?ID=368,Magic Wand (9th-Level Spell),"40,000 gp",L,19,Common,type=spell&level=9&name=[Wand] of $ (9th level)
Equipment.aspx?ID=369,Wand of Continuation (8th-Level Spell),"40,000 gp",L,19,Common,type=continuation&level=8&name=[Wand of Continuation]: $ (8th level)
Equipment.aspx?ID=371,Wand of Slaying (9th-Level Spell),"70,000 gp",L,20,Common,
Equipment.aspx?ID=372,Wand of Smoldering Fireballs (9th-Level Spell),"70,000 gp",L,20,Common,
Equipment.aspx?ID=373,Wand of Widening (9th-Level Spell),"70,000 gp",L,20,Common,type=widening&level=9&name=[Wand of Widening]: $ (9th level)
`}],

  [ "armour", { displayName: "Armour", data: `
url,name,value,bulk,level,rarity
Armor.aspx?ID=2,Explorer's Clothing,1 sp,L,0,Common
Armor.aspx?ID=3,Padded Armor,2 sp,L,0,Common
Armor.aspx?ID=4,Leather Armor,2 gp,1,0,Common
Armor.aspx?ID=5,Studded Leather Armor,3 gp,1,0,Common
Armor.aspx?ID=6,Chain Shirt,5 gp,1,0,Common
Armor.aspx?ID=7,Hide Armor,2 gp,2,0,Common
Armor.aspx?ID=8,Scale Mail,4 gp,2,0,Common
Armor.aspx?ID=9,Chain Mail,6 gp,2,0,Common
Armor.aspx?ID=10,Breastplate,8 gp,2,0,Common
Armor.aspx?ID=11,Splint Mail,13 gp,3,1,Common
Armor.aspx?ID=12,Half Plate,18 gp,3,1,Common
Armor.aspx?ID=13,Full Plate,30 gp,4,2,Common
`}],

  [ "shields", { displayName: "Shields", data: `
url,name,value,bulk,level,rarity
Shields.aspx?ID=1,Buckler,1 gp,L,0,Common
Shields.aspx?ID=2,Wooden Shield,1 gp,1,0,Common
Shields.aspx?ID=3,Steel Shield,2 gp,1,0,Common
Shields.aspx?ID=4,Tower Shield,10 gp,4,0,Common
`}],

  [ "weapons", { displayName: "Weapons", data: `
url,name,value,bulk,level,rarity
Weapons.aspx?ID=13,Clan Dagger,2 gp,L,0,Uncommon
Weapons.aspx?ID=2,Club,,1,0,Common
Weapons.aspx?ID=3,Dagger,2 sp,L,0,Common
Weapons.aspx?ID=4,Gauntlet,2 sp,L,0,Common
Weapons.aspx?ID=14,Katar,3 sp,L,0,Uncommon
Weapons.aspx?ID=5,Light Mace,4 sp,L,0,Common
Weapons.aspx?ID=6,Longspear,5 sp,2,0,Common
Weapons.aspx?ID=7,Mace,1 gp,1,0,Common
Weapons.aspx?ID=8,Morningstar,1 gp,1,0,Common
Weapons.aspx?ID=9,Sickle,2 sp,L,0,Common
Weapons.aspx?ID=10,Spear,1 sp,1,0,Common
Weapons.aspx?ID=11,Spiked Gauntlet,3 sp,L,0,Common
Weapons.aspx?ID=12,Staff,,1,0,Common
Weapons.aspx?ID=15,Bastard Sword,4 gp,1,0,Common
Weapons.aspx?ID=16,Battle Axe,1 gp,1,0,Common
Weapons.aspx?ID=17,Bo Staff,2 sp,2,0,Common
Weapons.aspx?ID=49,Dogslicer,1 sp,L,0,Uncommon
Weapons.aspx?ID=50,Elven Curve Blade,4 gp,2,0,Uncommon
Weapons.aspx?ID=18,Falchion,3 gp,2,0,Common
Weapons.aspx?ID=51,Filcher's Fork,1 gp,L,0,Uncommon
Weapons.aspx?ID=19,Flail,8 sp,1,0,Common
Weapons.aspx?ID=20,Glaive,1 gp,2,0,Common
Weapons.aspx?ID=52,Gnome Hooked Hammer,2 gp,1,0,Uncommon
Weapons.aspx?ID=21,Greataxe,2 gp,2,0,Common
Weapons.aspx?ID=22,Greatclub,1 gp,2,0,Common
Weapons.aspx?ID=23,Greatpick,1 gp,2,0,Common
Weapons.aspx?ID=24,Greatsword,2 gp,2,0,Common
Weapons.aspx?ID=25,Guisarme,2 gp,2,0,Common
Weapons.aspx?ID=26,Halberd,2 gp,2,0,Common
Weapons.aspx?ID=27,Hatchet,4 sp,L,0,Common
Weapons.aspx?ID=53,Horsechopper,9 sp,2,0,Uncommon
Weapons.aspx?ID=54,Kama,1 gp,L,0,Uncommon
Weapons.aspx?ID=55,Katana,2 gp,1,0,Uncommon
Weapons.aspx?ID=56,Kukri,6 sp,L,0,Uncommon
Weapons.aspx?ID=28,Lance,1 gp,2,0,Common
Weapons.aspx?ID=29,Light Hammer,3 sp,L,0,Common
Weapons.aspx?ID=30,Light Pick,4 sp,L,0,Common
Weapons.aspx?ID=31,Longsword,1 gp,1,0,Common
Weapons.aspx?ID=32,Main-gauche,5 sp,L,0,Common
Weapons.aspx?ID=33,Maul,3 gp,2,0,Common
Weapons.aspx?ID=57,Nunchaku,2 sp,L,0,Uncommon
Weapons.aspx?ID=58,Orc Knuckle Dagger,7 sp,L,0,Uncommon
Weapons.aspx?ID=34,Pick,7 sp,1,0,Common
Weapons.aspx?ID=35,Ranseur,2 gp,2,0,Common
Weapons.aspx?ID=36,Rapier,2 gp,1,0,Common
Weapons.aspx?ID=59,Sai,6 sp,L,0,Uncommon
Weapons.aspx?ID=37,Sap,1 sp,L,0,Common
Weapons.aspx?ID=38,Scimitar,1 gp,1,0,Common
Weapons.aspx?ID=39,Scythe,2 gp,2,0,Common
Weapons.aspx?ID=41,Shield Boss,5 sp,,0,Common
Weapons.aspx?ID=42,Shield Spikes,5 sp,,0,Common
Weapons.aspx?ID=43,Shortsword,9 sp,L,0,Common
Weapons.aspx?ID=60,Spiked Chain,3 gp,1,0,Uncommon
Weapons.aspx?ID=44,Starknife,2 gp,L,0,Common
Weapons.aspx?ID=61,Temple Sword,2 gp,1,0,Uncommon
Weapons.aspx?ID=45,Trident,1 gp,1,0,Common
Weapons.aspx?ID=46,War Flail,2 gp,2,0,Common
Weapons.aspx?ID=47,Warhammer,1 gp,1,0,Common
Weapons.aspx?ID=48,Whip,1 sp,1,0,Common
Weapons.aspx?ID=62,Dwarven War Axe,3 gp,2,0,Uncommon
Weapons.aspx?ID=63,Gnome Flickmace,3 gp,1,0,Uncommon
Weapons.aspx?ID=64,Orc Necksplitter,2 gp,1,0,Uncommon
Weapons.aspx?ID=65,Sawtooth Saber,5 gp,L,0,Uncommon
Weapons.aspx?ID=66,Blowgun,1 sp,L,0,Common
Weapons.aspx?ID=67,Crossbow,3 gp,1,0,Common
Weapons.aspx?ID=68,Dart,1 cp,L,0,Common
Weapons.aspx?ID=69,Hand Crossbow,3 gp,L,0,Common
Weapons.aspx?ID=70,Heavy Crossbow,4 gp,2,0,Common
Weapons.aspx?ID=71,Javelin,1 sp,L,0,Common
Weapons.aspx?ID=72,Sling,,L,0,Common
Weapons.aspx?ID=74,Composite Longbow,20 gp,2,0,Common
Weapons.aspx?ID=75,Composite Shortbow,14 gp,1,0,Common
Weapons.aspx?ID=78,Halfling Sling Staff,5 gp,1,0,Uncommon
Weapons.aspx?ID=76,Longbow,6 gp,2,0,Common
Weapons.aspx?ID=77,Shortbow,3 gp,1,0,Common
Weapons.aspx?ID=79,Shuriken,1 cp,,0,Uncommon
Weapons.aspx?ID=83,Arrows x10,1 sp,L,0,Common
Weapons.aspx?ID=80,Blowgun Darts x10,5 cp,L,0,Common
Weapons.aspx?ID=81,Bolts x10,1 sp,L,0,Common
Weapons.aspx?ID=82,Sling Bullets x10,1 cp,L,0,Common
`}],

  [ "magicweapons", { displayName: "Magic Weapons", data: `
url,name,value,bulk,level,rarity,transform
Equipment.aspx?ID=380,Magic Weapon (+1),35 gp,,2,Common,type=weapon&name=[+1] $
Equipment.aspx?ID=380,Magic Weapon (+1 Striking),100 gp,,4,Common,type=weapon&name=[+1 striking] $
Equipment.aspx?ID=380,Magic Weapon (+2 Striking),"1,000 gp",,10,Common,type=weapon&name=[+2 striking] $
Equipment.aspx?ID=380,Magic Weapon (+2 Greater Striking),"2,000 gp",,12,Common,type=weapon&name=[+2 greater striking] $
Equipment.aspx?ID=380,Magic Weapon (+3 Greater Striking),"10,000 gp",,16,Common,type=weapon&name=[+3 greater striking] $
Equipment.aspx?ID=380,Magic Weapon (+3 Major Striking),"40,000 gp",,19,Common,type=weapon&name=[+3 major striking] $
Equipment.aspx?ID=385,Fighter's Fork,50 gp,1,3,Common,
Equipment.aspx?ID=393,Retribution Axe,60 gp,2,3,Common,
Equipment.aspx?ID=383,Dagger of Venom,150 gp,L,5,Common,
Equipment.aspx?ID=382,Caterwaul Sling,155 gp,L,5,Common,
Equipment.aspx?ID=381,Bloodletting Kukri,240 gp,L,6,Uncommon,
Equipment.aspx?ID=396,Twining Staff,250 gp,,6,Common,
Equipment.aspx?ID=388,Gloom Blade,700 gp,L,9,Common,
Equipment.aspx?ID=392,Oathbow,"1,300 gp",2,11,Common,
Equipment.aspx?ID=384,Dwarven Thrower,"2,750 gp",1,13,Common,
Equipment.aspx?ID=386,Flame Tongue,"2,800 gp",1,13,Common,
Equipment.aspx?ID=395,Storm Flash,"4,000 gp",1,14,Common,
Equipment.aspx?ID=389,Holy Avenger,"4,500 gp",1,14,Uncommon,
Equipment.aspx?ID=387,Frost Brand,"10,000 gp",2,16,Common,
Equipment.aspx?ID=386,Flame Tongue (Greater),"13,800 gp",1,17,Common,
Equipment.aspx?ID=390,Luck Blade,"15,000 gp",L,17,Rare,
Equipment.aspx?ID=395,Storm Flash (Greater),"21,000 gp",1,18,Common,
Equipment.aspx?ID=390,Luck Blade (Wishing),"30,000 gp",L,19,Rare,
Equipment.aspx?ID=391,Mattock of the Titans,"36,000 gp",16,19,Uncommon,
Equipment.aspx?ID=394,Sky Hammer,"70,000 gp",1,20,Rare,
`}],

  [ "tradeGoods", { displayName: "Trade Goods", data: `
url,name,value,bulk,level,rarity,transform
Rules.aspx?ID=1110,Lesser Semiprecious Stone,20 sp,,0,Common,type=gem&group=lesserSemiprecious&baseValue=5 sp
Rules.aspx?ID=1110,Moderate Semiprecious Stone,100 sp,,1,Common,type=gem&group=moderateSemiprecious&baseValue=25 sp
Rules.aspx?ID=1110,Greater Semiprecious Stone,20 gp,,1,Common,type=gem&group=greaterSemiprecious&baseValue=5 gp
Rules.aspx?ID=1110,Lesser Precious Stone,200 gp,,4,Common,type=gem&group=lesserPrecious&baseValue=50 gp
Rules.aspx?ID=1110,Moderate Precious Stone,400 gp,,4,Common,type=gem&group=moderatePrecious&baseValue=100 gp
Rules.aspx?ID=1110,Greater Precious Stone,2000 gp,,7,Common,type=gem&group=greaterPrecious&baseValue=500 gp
Rules.aspx?ID=1110,Minor Art Object,4 gp,,0,Common,type=art&group=minor&baseValue=1 gp
Rules.aspx?ID=1110,Lesser Art Object,40 gp,,0,Common,type=art&group=lesser&baseValue=10 gp
Rules.aspx?ID=1110,Moderate Art Object,100 gp,,0,Common,type=art&group=moderate&baseValue=25 gp
Rules.aspx?ID=1110,Greater Art Object,1000 gp,,0,Common,type=art&group=greater&baseValue=250 gp
Rules.aspx?ID=1110,Major Art Object,4000 gp,,0,Common,type=art&group=major&baseValue=1000 gp
`}],
]);

const Ammunition = [
  { name: "arrow", displayName: "Arrow", url: "Weapons.aspx?ID=83" },
  { name: "bolt", displayName: "Bolt", url: "Weapons.aspx?ID=81" },
  { name: "blowdart", displayName: "Blowgun Dart", url: "Weapons.aspx?ID=80" },
  { name: "slingbullet", displayName: "Sling Bullet", url: "Weapons.aspx?ID=82" },
];

const Deities = [
  { name: "Azar" },
  { name: "Erastil" },
  { name: "Gorum" },
  { name: "Lielel" },
  { name: "Mesha" },
  { name: "Nemue" },
  { name: "Thorondil" },
  { name: "Torag" },
];

const Gems = {
  lesserSemiprecious: [
    "Agate",
    "Alabaster",
    "Azurite",
    "Hematite",
    "Lapis lazuli",
    "Malachite",
    "Obsidian",
    "Irregular freshwater pearl",
    "Pyrite",
    "Rhodochrosite",
    "Rock Crystal Quartz",
    "Shell",
    "Tiger’s-eye",
    "Turquoise",
  ],
  moderateSemiprecious: [
    "Bloodstone",
    "Carnelian",
    "Chrysoprase",
    "Citrine",
    "Ivory",
    "Jasper",
    "Moonstone",
    "Onyx",
    "Peridot",
    "Milky Quartz",
    "Rose Quartz",
    "Smoky Quartz",
    "Sard",
    "Sardonyx",
    "Red Spinel",
    "Green Spinel",
    "Zircon",
  ],
  greaterSemiprecious: [
    "Amber",
    "Amethyst",
    "Chrysoberyl",
    "Coral",
    "Garnet",
    "Jade",
    "Jet",
    "Saltwater Pearl",
    "Deep Blue Spinel",
    "Tourmaline",
  ],
  lesserPrecious: [
    "Aquamarine",
    "Opal",
    "Black Pearl",
    "Topaz",
  ],
  moderatePrecious: [
    "Small Diamond",
    "Emerald",
    "Small Ruby",
    "Sapphire",
  ],
  greaterPrecious: [
    "Large Diamond",
    "Brilliant Green Emerald",
    "Large Ruby",
    "Star Sapphire",
  ],
};

const ArtObjects = new Map([
  [ "minor", { data: `
name,bulk
Elegant cloth doll,
Scrimshaw whale bone,
Illustrated book,L
Brass statuette of a bull,L
Carved wooden game set,L
Set of six ivory dice,
Engraved copper ring,
Lapis lazuli pendant,
Hand mirror with decorated frame,L
Colorful velvet half mask,
Set of decorated ceramic plates,1
Leather flagon with religious symbol,L
Bronze bowl with wave imagery,L
Brass anklet,
Iron cauldron with gargoyle faces,1
Silver religious symbol,
Bronze brazier with demonic artwork,1
Plain brass censer,
Simple sculpture,L
Simple painting,1
`}],

  [ "lesser", { data: `
name,bulk
Silk ceremonial armor,L
Inscribed crocodile skull,L
Illuminated manuscript,L
Simple silver circlet,
Copper statuette of a salamander,L
Alabaster and obsidian game set,L
Silk fan decorated with turquoise,
Ceremonial dagger with onyx hilt,L
Amphora with lavish scenes,1
Colorful pastoral tapestry,1
Chrysoberyl symbol of an evil eye,
Alabaster idol,L
Silk mask decorated with citrines,
Set of decorated porcelain plates,1
Etched copper ewer,1
Brass scepter with amethyst head,L
Bronze chalice with bloodstones,L
Iron and rock crystal brazier,1
Quality sculpture by an unknown,L
Quality painting by an unknown,1
`}],

  [ "moderate", { data: `
name,bulk
Porcelain doll with amber eyes,L
Marble altar,4
Parade armor with flourishes,2
Silver coronet with peridots,L
Moonstone and onyx game set,L
Gold and garnet ring,
Ceremonial shortsword with spinels,L
Silver statuette of a raven,L
Porcelain vase inlaid with gold,L
Enormous tapestry of a major battle,2
Gold necklace with peridots,
Virtuoso silver flute,L
Coral idol of an elemental lord,L
Silver mirror with gilded frame,L
Silver flagon inscribed with fields,1
Copper and spinel puzzle box,1
Small cold iron cauldron with onyx,1
Silver and jade censer,
Life-size sculpture by an expert,3
Wide landscape by an expert,1
`}],

 [ "greater", { data: `
name,bulk
Gilded ceremonial armor,2
Ancient dragon skull etched with mystic sigils,2
Original manuscript from a world-famous author,L
Gold and aquamarine diadem,
Gold dragon statuette,L
Jet and white gold game set,L
Gold rapier with amethysts,1
Gold urn with scenes of judgment,1
Splendid lyre of world-famous lyrist,1
Platinum-framed monocle,
Gold mask of a high priest,L
Crystal dinner set with fine silverware,1
Gold and opal bracelet,
Intricate silver and gold music box,L
Jeweled orrery of the planes,2
Gilded scepter with sapphire,L
Fine gold spyglass,L
Gold chalice with black pearls,L
Towering sculpture by a master,4
Famous portrait by a master,1
`}],

  [ "major", { data: `
name,bulk
Jewel-encrusted gold altar,6
Saint’s bone with lost scriptures,L
Previously lost volume from a legendary author,L
Jeweled mithral crown,L
Platinum dragon statuette,L
Diamond ring with platinum band,
Star sapphire necklace,
Darkwood violin by a legend,1
Platinum image of a fey noble with a bit of orichalcum,L
Jeweled gold puzzle box,L
Crystallized dragon heart,1
Living flame shaped into a phoenix,L
Phasing ether silk tapestry,2
Solidified moment of time,
Tankard owned by a famous hero,L
Thought lens of astral essence,L
Divine art piece created by a god,1
Chandelier crafted from dreams,2
Enormous chryselephantine sculpture by a legend,8
Major painting by a legend,2
`}],
])

const Tools = [
  { type: "short", displayName: "Hand Adze" },
  { type: "short", displayName: "Awl" },
  { type: "short", displayName: "Chisel" },
  { type: "short", displayName: "Hand Drill" },
  { type: "short", displayName: "Ice Hook" },
  { type: "short", displayName: "Spanner" },
  { type: "short", displayName: "Tongs" },
  { type: "short", displayName: "Trowel" },
  { type: "long", displayName: "Axe" },
  { type: "long", displayName: "Hoe" },
  { type: "long", displayName: "Foot Adze" },
  { type: "long", displayName: "Rake" },
  { type: "long", displayName: "Saw" },
  { type: "long", displayName: "Shovel" },
  { type: "long", displayName: "Sledgehammer" },
];

function getTable(tables, name) {
  let table = tables.get(name);

  if (table && !table.items) {
    let parseResult = Papa.parse(table.data.trim(), { header: true });

    for (let error of parseResult.errors) {
      console.log(`In ${name}, row ${error.row}: ${error.message}`);
    }

    table.items = parseResult.data;
  }

  return table;
}

function getCollection(name) {
  return getTable(Collections, name);
}

function getArtObjects(group) {
  return getTable(ArtObjects, group);
}
