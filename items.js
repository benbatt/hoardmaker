"use strict";

const Collections = new Map([
  [ "gear", { displayName: "Gear", data: `
name,value,bulk,url,transform
Candle,1 cp,,Equipment.aspx?ID=10,
Chalk x10,1 cp,,Equipment.aspx?ID=12,
Mug,1 cp,,Equipment.aspx?ID=36,
Oil,1 cp,,Equipment.aspx?ID=38,
Piton,1 cp,,Equipment.aspx?ID=39,
Sack,1 cp,L,Equipment.aspx?ID=45,
Ten-Foot Pole,1 cp,1,Equipment.aspx?ID=56,
Torch,1 cp,L,Equipment.aspx?ID=60,
Bedroll,2 cp,L,Equipment.aspx?ID=7,
Soap,2 cp,,Equipment.aspx?ID=52,
Ladder (10 ft.),3 cp,3,Equipment.aspx?ID=28,
Flint and Steel,5 cp,,Equipment.aspx?ID=21,
Waterskin,5 cp,L,Equipment.aspx?ID=62,
Signal Whistle,8 cp,,Equipment.aspx?ID=50,
Backpack,1 sp,,Equipment.aspx?ID=4,
Basic Crafter's Book,1 sp,L,Equipment.aspx?ID=6,
Clothing (Explorer's),1 sp,L,Equipment.aspx?ID=15,
Clothing (Ordinary),1 sp,,Equipment.aspx?ID=15,
Disguise Kit (Replacement Cosmetics),1 sp,L,Equipment.aspx?ID=19,
Grappling Hook,1 sp,L,Equipment.aspx?ID=23,
Hammer,1 sp,L,Equipment.aspx?ID=24,
Religious Symbol (Wooden),1 sp,L,Equipment.aspx?ID=41,type=deity&name=[Wooden Symbol] of $
Writing Set (Extra Ink and Paper),1 sp,L,Equipment.aspx?ID=63,
Lock (Poor),2 sp,,Equipment.aspx?ID=30,
Merchant's Scale,2 sp,L,Equipment.aspx?ID=34,
Saddlebags,2 sp,L,Equipment.aspx?ID=46,
Caltrops,3 sp,L,Equipment.aspx?ID=9,
Manacles (Poor),3 sp,,Equipment.aspx?ID=32,
Thieves' Tools (Replacement Picks),3 sp,L,Equipment.aspx?ID=58,
Clothing (Winter),4 sp,L,Equipment.aspx?ID=15,
Rations 1 week,4 sp,L,Equipment.aspx?ID=40,
Tool (Short),4 sp,L,Equipment.aspx?ID=59,type=tool&filter=short
Climbing Kit,5 sp,1,Equipment.aspx?ID=14,
Crowbar,5 sp,L,Equipment.aspx?ID=18,
Disguise Kit (Elite Cosmetics),5 sp,L,Equipment.aspx?ID=19,
Material Component Pouch,5 sp,L,Equipment.aspx?ID=33,
Rope 50 ft.,5 sp,L,Equipment.aspx?ID=44,
Chest,6 sp,2,Equipment.aspx?ID=13,
Lantern (Hooded),7 sp,L,Equipment.aspx?ID=29,
Fishing Tackle,8 sp,1,Equipment.aspx?ID=20,
Musical Instrument (Handheld),8 sp,1,Equipment.aspx?ID=37,
Tent (Pup),8 sp,L,Equipment.aspx?ID=57,
Compass,1 gp,,Equipment.aspx?ID=16,
Cookware,1 gp,2,Equipment.aspx?ID=17,
Formula Book (Blank),1 gp,L,Equipment.aspx?ID=22,
Lantern (Bull's-Eye),1 gp,1,Equipment.aspx?ID=29,
Mirror,1 gp,,Equipment.aspx?ID=35,
Religious Text,1 gp,L,Equipment.aspx?ID=42,type=deity&name=[Religious Text] of $
Spellbook (Blank),1 gp,L,Equipment.aspx?ID=53,
Tool (Long),1 gp,1,Equipment.aspx?ID=59,type=tool&filter=long
Writing Set,1 gp,L,Equipment.aspx?ID=63,
Adventurer's Pack,1.5 gp,1,Equipment.aspx?ID=1,
Clothing (Fine),2 gp,L,Equipment.aspx?ID=15,
Disguise Kit,2 gp,L,Equipment.aspx?ID=19,
Lock (Simple),2 gp,,Equipment.aspx?ID=30,
Musical Instrument (Heavy),2 gp,16,Equipment.aspx?ID=37,
Religious Symbol (Silver),2 gp,L,Equipment.aspx?ID=41,type=deity&name=[Silver Symbol] of $
Repair Kit,2 gp,1,Equipment.aspx?ID=43,
Alchemist's Tools,3 gp,1,Equipment.aspx?ID=2,
Hourglass,3 gp,L,Equipment.aspx?ID=27,
Manacles (Simple),3 gp,,Equipment.aspx?ID=32,
Thieves' Tools,3 gp,L,Equipment.aspx?ID=58,
Thieves' Tools (Infiltrator Picks),3 gp,L,Equipment.aspx?ID=58,
Artisan's Tools,4 gp,2,Equipment.aspx?ID=3,
Chain 10 ft.,4 gp,1,Equipment.aspx?ID=11,
Tack,4 gp,1,Equipment.aspx?ID=55,
Alchemist's Lab,5 gp,6,Equipment.aspx?ID=543,
Healer's Tools,5 gp,1,Equipment.aspx?ID=25,
Snare Kit,5 gp,2,Equipment.aspx?ID=51,
Tent (Four-Person),5 gp,1,Equipment.aspx?ID=57,
Scholarly Journal,6 gp,L,Equipment.aspx?ID=64,
Barding (Light; Small or Medium),10 gp,2,Equipment.aspx?ID=1552,
Survey Map,10 gp,L,Equipment.aspx?ID=65,
Lock (Average),15 gp,,Equipment.aspx?ID=30,
Barding (Light; Large),20 gp,4,Equipment.aspx?ID=1552,
Compass (Lensatic),20 gp,,Equipment.aspx?ID=16,
Crowbar (Levered),20 gp,L,Equipment.aspx?ID=18,
Fishing Tackle (Professional),20 gp,1,Equipment.aspx?ID=20,
Manacles (Average),20 gp,,Equipment.aspx?ID=32,
Spyglass,20 gp,L,Equipment.aspx?ID=54,
Barding (Heavy; Small or Medium),25 gp,4,Equipment.aspx?ID=1552,
Repair Kit (Superb),25 gp,1,Equipment.aspx?ID=43,
Scholarly Journal (Compendium),30 gp,L,Equipment.aspx?ID=64,
Climbing Kit (Extreme),40 gp,1,Equipment.aspx?ID=14,
Disguise Kit (Elite),40 gp,L,Equipment.aspx?ID=19,
Magnifying Glass,40 gp,,Equipment.aspx?ID=31,
Tent (Pavilion),40 gp,12,Equipment.aspx?ID=57,
Artisan's Tools (Sterling),50 gp,2,Equipment.aspx?ID=3,
Barding (Heavy; Large),50 gp,8,Equipment.aspx?ID=1552,
Healer's Tools (Expanded),50 gp,1,Equipment.aspx?ID=25,
Musical Instrument (Virtuoso Handheld),50 gp,1,Equipment.aspx?ID=37,
Survey Map (Atlas),50 gp,L,Equipment.aspx?ID=65,
Thieves' Tools (Infiltrator),50 gp,L,Equipment.aspx?ID=58,
Alchemist's Lab (Expanded),55 gp,6,Equipment.aspx?ID=543,
Clothing (High-Fashion Fine),55 gp,L,Equipment.aspx?ID=15,
Snare Kit (Specialist),55 gp,2,Equipment.aspx?ID=51,
Spyglass (Fine),80 gp,L,Equipment.aspx?ID=54,
Musical Instrument (Virtuoso Heavy),100 gp,16,Equipment.aspx?ID=37,
Lock (Good),200 gp,,Equipment.aspx?ID=30,
Manacles (Good),250 gp,,Equipment.aspx?ID=32,
Lock (Superior),"4,500 gp",,Equipment.aspx?ID=30,
Manacles (Superior),"5,000 gp",,Equipment.aspx?ID=32,
Holly and Mistletoe,,,Equipment.aspx?ID=26,
`}],

  [ "consumables", { displayName: "Consumables", data: `
name,value,bulk,url,transform
Feather Token (Ladder),3 gp,,Equipment.aspx?ID=244,
Holy Water,3 gp,L,Equipment.aspx?ID=245,
Nectar of Purification,3 gp,L,Equipment.aspx?ID=174,
Owlbear Claw,3 gp,,Equipment.aspx?ID=230,
Runestone,3 gp,L,Equipment.aspx?ID=247,
Shining Ammunition,3 gp,,Equipment.aspx?ID=165,type=ammunition&name=[Shining] $
Unholy Water,3 gp,L,Equipment.aspx?ID=248,
1st-Level Scroll,4 gp,L,Equipment.aspx?ID=640,type=spell&level=1&name=[Scroll] of $ (1st level)
Healing Potion (Minor),4 gp,L,Equipment.aspx?ID=186,
Potency Crystal,4 gp,,Equipment.aspx?ID=231,
Wolf Fang,4 gp,,Equipment.aspx?ID=239,
Feather Token (Holly Bush),6 gp,,Equipment.aspx?ID=244,
Hunter's Bane,6 gp,,Equipment.aspx?ID=217,
Jade Cat,6 gp,,Equipment.aspx?ID=223,
Monkey Pin,6 gp,,Equipment.aspx?ID=226,
Oil of Weightlessness,6 gp,L,Equipment.aspx?ID=181,
Bronze Bull Pendant,7 gp,,Equipment.aspx?ID=202,
Crying Angel Pendant,7 gp,,Equipment.aspx?ID=203,
Effervescent Ampoule,7 gp,,Equipment.aspx?ID=207,
Mesmerizing Opal,7 gp,,Equipment.aspx?ID=225,
Oil of Potency,7 gp,L,Equipment.aspx?ID=179,
Onyx Panther,7 gp,,Equipment.aspx?ID=229,
Savior Spike,7 gp,,Equipment.aspx?ID=232,
Feather Step Stone,8 gp,,Equipment.aspx?ID=212,
Feather Token (Bird),8 gp,,Equipment.aspx?ID=244,
Oil of Mending,9 gp,L,Equipment.aspx?ID=178,
Beacon Shot,10 gp,,Equipment.aspx?ID=159,type=ammunition&filter=arrow|bolt&name=[Beacon] $
Feather Token (Chest),10 gp,,Equipment.aspx?ID=244,
Vine Arrow,10 gp,,Equipment.aspx?ID=170,
Potion of Water Breathing,11 gp,L,Equipment.aspx?ID=196,
Sleep Arrow,11 gp,,Equipment.aspx?ID=166,
2nd-Level Scroll,12 gp,L,Equipment.aspx?ID=640,type=spell&level=2&name=[Scroll] of $ (2nd level)
Healing Potion (Lesser),12 gp,L,Equipment.aspx?ID=186,
Spellstrike Ammunition (Type I),12 gp,,Equipment.aspx?ID=167,type=ammunition&name=[Spellstrike] $ (Type I)
Dragon Turtle Scale,13 gp,,Equipment.aspx?ID=206,
Barkskin Potion,15 gp,L,Equipment.aspx?ID=184,
Climbing Bolt,15 gp,,Equipment.aspx?ID=160,
Feather Token (Fan),15 gp,,Equipment.aspx?ID=244,
Shrinking Potion,15 gp,L,Equipment.aspx?ID=197,
Viper Arrow,17 gp,,Equipment.aspx?ID=171,
Bloodseeker Beak,20 gp,,Equipment.aspx?ID=201,
Fear Gem,20 gp,,Equipment.aspx?ID=211,
Invisibility Potion,20 gp,L,Equipment.aspx?ID=187,
Potion of Leaping,21 gp,L,Equipment.aspx?ID=190,
Sneaky Key,22 gp,,Equipment.aspx?ID=234,
Shark Tooth Charm,23 gp,,Equipment.aspx?ID=233,
Salve of Slipperiness,25 gp,L,Equipment.aspx?ID=183,
3rd-Level Scroll,30 gp,L,Equipment.aspx?ID=640,type=spell&level=3&name=[Scroll] of $ (3rd level)
Emerald Grasshopper,30 gp,,Equipment.aspx?ID=208,
Spellstrike Ammunition (Type II),30 gp,,Equipment.aspx?ID=167,type=ammunition&name=[Spellstrike] $ (Type II)
Tiger Menuki,30 gp,,Equipment.aspx?ID=236,
Oil of Weightlessness (Greater),36 gp,L,Equipment.aspx?ID=181,
Feather Token (Tree),38 gp,,Equipment.aspx?ID=244,
Salve of Antiparalysis,40 gp,L,Equipment.aspx?ID=182,
Potion of Resistance (Lesser),45 gp,L,Equipment.aspx?ID=192,
Truth Potion,46 gp,L,Equipment.aspx?ID=200,
Dust of Appearance,50 gp,,Equipment.aspx?ID=241,
Healing Potion (Moderate),50 gp,L,Equipment.aspx?ID=186,
Iron Cube,50 gp,,Equipment.aspx?ID=218,
Potion of Swimming,50 gp,L,Equipment.aspx?ID=193,
Feather Token (Anchor),55 gp,,Equipment.aspx?ID=244,
Grim Trophy,55 gp,,Equipment.aspx?ID=216,
Serum of Sex Shift,60 gp,L,Equipment.aspx?ID=198,
Murderer's Knot,66 gp,,Equipment.aspx?ID=228,
4th-Level Scroll,70 gp,L,Equipment.aspx?ID=640,type=spell&level=4&name=[Scroll] of $ (4th level)
Dragon's Breath Potion (Young),70 gp,L,Equipment.aspx?ID=185,
Spellstrike Ammunition (Type III),70 gp,,Equipment.aspx?ID=167,type=ammunition&name=[Spellstrike] $ (Type III)
Swift Block Cabochon,70 gp,,Equipment.aspx?ID=235,
Candle of Truth,75 gp,,Equipment.aspx?ID=240,
Feather Token (Swan Boat),76 gp,,Equipment.aspx?ID=244,
Potion of Quickness,90 gp,L,Equipment.aspx?ID=191,
Shrinking Potion (Greater),90 gp,L,Equipment.aspx?ID=197,
Gallows Tooth,100 gp,,Equipment.aspx?ID=214,
Jade Bauble,100 gp,,Equipment.aspx?ID=222,
Potion of Flying,100 gp,L,Equipment.aspx?ID=189,
Javelin of Lightning,110 gp,L,Equipment.aspx?ID=246,
Explosive Ammunition,130 gp,,Equipment.aspx?ID=162,type=ammunition&name=[Explosive] $
Feather Token (Whip),130 gp,,Equipment.aspx?ID=244,
Storm Arrow,130 gp,,Equipment.aspx?ID=169,
Dust of Disappearance,135 gp,,Equipment.aspx?ID=242,
Aligned Oil,140 gp,L,Equipment.aspx?ID=173,
5th-Level Scroll,150 gp,L,Equipment.aspx?ID=640,type=spell&level=5&name=[Scroll] of $ (5th level)
Spellstrike Ammunition (Type IV),150 gp,,Equipment.aspx?ID=167,type=ammunition&name=[Spellstrike] $ (Type IV)
Vanishing Coin,160 gp,,Equipment.aspx?ID=237,
Iron Medallion,175 gp,,Equipment.aspx?ID=221,
Mummified Bat,175 gp,,Equipment.aspx?ID=227,
Potion of Resistance (Moderate),180 gp,L,Equipment.aspx?ID=192,
Elemental Gem,200 gp,,Equipment.aspx?ID=243,
Oil of Repulsion,175 gp,L,Equipment.aspx?ID=180,
Oil of Keen Edges,250 gp,L,Equipment.aspx?ID=177,
Potion of Swimming (Greater),250 gp,L,Equipment.aspx?ID=193,
6th-Level Scroll,300 gp,L,Equipment.aspx?ID=640,type=spell&level=6&name=[Scroll] of $ (6th level)
Spellstrike Ammunition (Type V),300 gp,,Equipment.aspx?ID=167,type=ammunition&name=[Spellstrike] $ (Type V)
Fade Band,320 gp,,Equipment.aspx?ID=210,
Potion of Tongues,320 gp,L,Equipment.aspx?ID=194,
Salve of Antiparalysis (Greater),325 gp,L,Equipment.aspx?ID=182,
Oil of Animation,330 gp,L,Equipment.aspx?ID=176,
Dragon's Breath Potion (Adult),400 gp,L,Equipment.aspx?ID=185,
Eye of Apprehension,400 gp,,Equipment.aspx?ID=209,
Healing Potion (Greater),400 gp,L,Equipment.aspx?ID=186,
Iron Equalizer,400 gp,,Equipment.aspx?ID=220,
Penetrating Ammunition,400 gp,,Equipment.aspx?ID=164,type=ammunition&filter=arrow|bolt&name=[Penetrating] $
Panacea,450 gp,L,Equipment.aspx?ID=188,
Explosive Ammunition (Greater),520 gp,,Equipment.aspx?ID=162,type=ammunition&name=[Greater Explosive] $
Mending Lattice,525 gp,,Equipment.aspx?ID=224,
7th-Level Scroll,600 gp,L,Equipment.aspx?ID=640,type=spell&level=7&name=[Scroll] of $ (7th level)
Spellstrike Ammunition (Type VI),600 gp,,Equipment.aspx?ID=167,type=ammunition&name=[Spellstrike] $ (Type VI)
Potion of Resistance (Greater),850 gp,L,Equipment.aspx?ID=192,
Viper's Fang,850 gp,,Equipment.aspx?ID=238,
Dazing Coil,900 gp,,Equipment.aspx?ID=204,
Ghost Ammunition,900 gp,,Equipment.aspx?ID=163,type=ammunition&name=[Ghost] $
Iron Cudgel,900 gp,,Equipment.aspx?ID=219,
Potion of Flying (Greater),"1,000 gp",L,Equipment.aspx?ID=189,
Obfuscation Oil,"1,200 gp",L,Equipment.aspx?ID=175,
8th-Level Scroll,"1,300 gp",L,Equipment.aspx?ID=640,type=spell&level=8&name=[Scroll] of $ (8th level)
Disintegration Bolt,"1,300 gp",,Equipment.aspx?ID=161,
Spellstrike Ammunition (Type VII),"1,300 gp",,Equipment.aspx?ID=167,type=ammunition&name=[Spellstrike] $ (Type VII)
Stone Bullet,"1,300 gp",,Equipment.aspx?ID=168,
Truesight Potion,"1,500 gp",L,Equipment.aspx?ID=199,
Flame Navette,"1,800 gp",,Equipment.aspx?ID=213,
Ghost Dust,"1,800 gp",,Equipment.aspx?ID=215,
Dispelling Sliver,"2,400 gp",,Equipment.aspx?ID=205,
9th-Level Scroll,"3,000 gp",L,Equipment.aspx?ID=640,type=spell&level=9&name=[Scroll] of $ (9th level)
Dragon's Breath Potion (Wyrm),"3,000 gp",L,Equipment.aspx?ID=185,
Spellstrike Ammunition (Type VIII),"3,000 gp",,Equipment.aspx?ID=167,type=ammunition&name=[Spellstrike] $ (Type VIII)
Potion of Undetectability,"4,400 gp",L,Equipment.aspx?ID=195,
Healing Potion (Major),"5,000 gp",L,Equipment.aspx?ID=186,
10th-Level Scroll,"8,000 gp",L,Equipment.aspx?ID=640,type=spell&level=10&name=[Scroll] of $ (10th level)
Spellstrike Ammunition (Type IX),"8,000 gp",,Equipment.aspx?ID=167,type=ammunition&name=[Spellstrike] $ (Type IX)
Antimagic Oil,"13,000 gp",L,Equipment.aspx?ID=172,
`}],

  [ "alchemicals", { displayName: "Alchemicals", data: `
name,value,bulk,url
Alcohol,1 cp (or more),L,Equipment.aspx?ID=622
Bloodeye Coffee,5 sp,L,Equipment.aspx?ID=623
Flayleaf,1 gp,L,Equipment.aspx?ID=624
Tindertwig,2 sp,,Equipment.aspx?ID=138
Refined Pesh,2 gp,L,Equipment.aspx?ID=626
Snake Oil,2 gp,L,Equipment.aspx?ID=136
Acid Flask (Lesser),3 gp,L,Equipment.aspx?ID=74
Alchemist's Fire (Lesser),3 gp,L,Equipment.aspx?ID=75
Antidote (Lesser),3 gp,L,Equipment.aspx?ID=80
Antiplague (Lesser),3 gp,L,Equipment.aspx?ID=81
Arsenic,3 gp,L,Equipment.aspx?ID=104
Bottled Lightning (Lesser),3 gp,L,Equipment.aspx?ID=76
Cheetah's Elixir (Lesser),3 gp,L,Equipment.aspx?ID=86
Elixir of Life (Minor),3 gp,L,Equipment.aspx?ID=91
Frost Vial (Lesser),3 gp,L,Equipment.aspx?ID=77
Leaper's Elixir (Lesser),3 gp,L,Equipment.aspx?ID=95
Smokestick (Lesser),3 gp,L,Equipment.aspx?ID=135
Sunrod,3 gp,L,Equipment.aspx?ID=137
Tanglefoot Bag (Lesser),3 gp,L,Equipment.aspx?ID=78
Thunderstone (Lesser),3 gp,L,Equipment.aspx?ID=79
Bestial Mutagen (Lesser),4 gp,L,Equipment.aspx?ID=82
Blood Sap,4 gp,L,Equipment.aspx?ID=625
Cognitive Mutagen (Lesser),4 gp,L,Equipment.aspx?ID=87
Eagle-Eye Elixir (Lesser),4 gp,L,Equipment.aspx?ID=90
Giant Centipede Venom,4 gp,L,Equipment.aspx?ID=113
Juggernaut Mutagen (Lesser),4 gp,L,Equipment.aspx?ID=94
Quicksilver Mutagen (Lesser),4 gp,L,Equipment.aspx?ID=97
Serene Mutagen (Lesser),4 gp,L,Equipment.aspx?ID=100
Silvertongue Mutagen (Lesser),4 gp,L,Equipment.aspx?ID=101
Belladonna,5 gp,L,Equipment.aspx?ID=105
Black Adder Venom,6 gp,L,Equipment.aspx?ID=106
Darkvision Elixir (Lesser),6 gp,L,Equipment.aspx?ID=89
Infiltrator's Elixir,6 gp,L,Equipment.aspx?ID=93
Silversheen,6 gp,L,Equipment.aspx?ID=134
Bravo's Brew (Lesser),7 gp,L,Equipment.aspx?ID=84
Cat's Eye Elixir,7 gp,L,Equipment.aspx?ID=85
Comprehension Elixir (Lesser),7 gp,L,Equipment.aspx?ID=88
Lethargy Poison,7 gp,L,Equipment.aspx?ID=120
Acid Flask (Moderate),10 gp,L,Equipment.aspx?ID=74
Alchemist's Fire (Moderate),10 gp,L,Equipment.aspx?ID=75
Bottled Lightning (Moderate),10 gp,L,Equipment.aspx?ID=76
Cytillesh Oil,10 gp,L,Equipment.aspx?ID=110
Frost Vial (Moderate),10 gp,L,Equipment.aspx?ID=77
Graveroot,10 gp,L,Equipment.aspx?ID=116
Shiver,10 gp,L,Equipment.aspx?ID=627
Tanglefoot Bag (Moderate),10 gp,L,Equipment.aspx?ID=78
Thunderstone (Moderate),10 gp,L,Equipment.aspx?ID=79
Bestial Mutagen (Moderate),12 gp,L,Equipment.aspx?ID=82
Cognitive Mutagen (Moderate),12 gp,L,Equipment.aspx?ID=87
Juggernaut Mutagen (Moderate),12 gp,L,Equipment.aspx?ID=94
Quicksilver Mutagen (Moderate),12 gp,L,Equipment.aspx?ID=97
Serene Mutagen (Moderate),12 gp,L,Equipment.aspx?ID=100
Silvertongue Mutagen (Moderate),12 gp,L,Equipment.aspx?ID=101
Darkvision Elixir (Moderate),11 gp,L,Equipment.aspx?ID=89
Dreamtime Tea,13 gp,L,Equipment.aspx?ID=628
Stone Fist Elixir,13 gp,L,Equipment.aspx?ID=102
Bomber's Eye Elixir (Lesser),14 gp,L,Equipment.aspx?ID=83
Salamander Elixir (Lesser),15 gp,L,Equipment.aspx?ID=98
Winter Wolf Elixir (Lesser),15 gp,L,Equipment.aspx?ID=103
Mistform Elixir (Lesser),18 gp,L,Equipment.aspx?ID=96
Zerk,20 gp,L,Equipment.aspx?ID=629
Sea Touch Elixir (Lesser),22 gp,L,Equipment.aspx?ID=99
Cheetah's Elixir (Moderate),25 gp,L,Equipment.aspx?ID=86
Elven Absinthe,25 gp,L,Equipment.aspx?ID=631
Hunting Spider Venom,25 gp,L,Equipment.aspx?ID=118
Eagle-Eye Elixir (Moderate),27 gp,L,Equipment.aspx?ID=90
Cytillesh,30 gp,L,Equipment.aspx?ID=630
Elixir of Life (Lesser),30 gp,L,Equipment.aspx?ID=91
Antidote (Moderate),35 gp,L,Equipment.aspx?ID=80
Antiplague (Moderate),35 gp,L,Equipment.aspx?ID=81
Giant Scorpion Venom,40 gp,L,Equipment.aspx?ID=114
Mistform Elixir (Moderate),56 gp,L,Equipment.aspx?ID=96
Smokestick (Greater),53 gp,L,Equipment.aspx?ID=135
Comprehension Elixir (Greater),54 gp,L,Equipment.aspx?ID=88
Giant Wasp Venom,55 gp,L,Equipment.aspx?ID=115
Leaper's Elixir (Greater),55 gp,L,Equipment.aspx?ID=95
Malyass Root Paste,55 gp,L,Equipment.aspx?ID=122
Nettleweed Residue,75 gp,L,Equipment.aspx?ID=124
Scour,80 gp,L,Equipment.aspx?ID=632
Wyvern Poison,80 gp,L,Equipment.aspx?ID=132
Darkvision Elixir (Greater),90 gp,L,Equipment.aspx?ID=89
Cheetah's Elixir (Greater),110 gp,L,Equipment.aspx?ID=86
Lich Dust,110 gp,L,Equipment.aspx?ID=121
Spider Root,110 gp,L,Equipment.aspx?ID=129
Elixir of Life (Moderate),150 gp,L,Equipment.aspx?ID=91
Bravo's Brew (Moderate),150 gp,L,Equipment.aspx?ID=84
Wolfsbane,155 gp,L,Equipment.aspx?ID=131
Antidote (Greater),160 gp,L,Equipment.aspx?ID=80
Antiplague (Greater),160 gp,L,Equipment.aspx?ID=81
Shadow Essence,160 gp,L,Equipment.aspx?ID=127
Mistform Elixir (Greater),180 gp,L,Equipment.aspx?ID=96
Eagle-Eye Elixir (Greater),200 gp,L,Equipment.aspx?ID=90
Blightburn Resin,225 gp,L,Equipment.aspx?ID=108
Acid Flask (Greater),250 gp,L,Equipment.aspx?ID=74
Alchemist's Fire (Greater),250 gp,L,Equipment.aspx?ID=75
Bottled Lightning (Greater),250 gp,L,Equipment.aspx?ID=76
Frost Vial (Greater),250 gp,L,Equipment.aspx?ID=77
Tanglefoot Bag (Greater),250 gp,L,Equipment.aspx?ID=78
Thunderstone (Greater),250 gp,L,Equipment.aspx?ID=79
Bestial Mutagen (Greater),300 gp,L,Equipment.aspx?ID=82
Cognitive Mutagen (Greater),300 gp,L,Equipment.aspx?ID=87
Juggernaut Mutagen (Greater),300 gp,L,Equipment.aspx?ID=94
Quicksilver Mutagen (Greater),300 gp,L,Equipment.aspx?ID=97
Serene Mutagen (Greater),300 gp,L,Equipment.aspx?ID=100
Silvertongue Mutagen (Greater),300 gp,L,Equipment.aspx?ID=101
Sea Touch Elixir (Moderate),300 gp,L,Equipment.aspx?ID=99
Salamander Elixir (Moderate),320 gp,L,Equipment.aspx?ID=98
Winter Wolf Elixir (Moderate),320 gp,L,Equipment.aspx?ID=103
Slumber Wine,325 gp,L,Equipment.aspx?ID=128
Deathcap Powder,450 gp,L,Equipment.aspx?ID=111
Purple Worm Venom,500 gp,L,Equipment.aspx?ID=126
Elixir of Life (Greater),600 gp,L,Equipment.aspx?ID=91
Antidote (Major),675 gp,L,Equipment.aspx?ID=80
Antiplague (Major),675 gp,L,Equipment.aspx?ID=81
Bomber's Eye Elixir (Greater),700 gp,L,Equipment.aspx?ID=83
Bravo's Brew (Greater),700 gp,L,Equipment.aspx?ID=84
Sea Touch Elixir (Greater),920 gp,L,Equipment.aspx?ID=99
Dragon Bile,925 gp,L,Equipment.aspx?ID=112
Mindfog Mist,"1,000 gp",L,Equipment.aspx?ID=123
Elixir of Life (Major),"1,300 gp",L,Equipment.aspx?ID=91
Nightmare Vapor,"1,400 gp",L,Equipment.aspx?ID=125
Salamander Elixir (Greater),"1,400 gp",L,Equipment.aspx?ID=98
Winter Wolf Elixir (Greater),"1,400 gp",L,Equipment.aspx?ID=103
Brimstone Fumes,"1,500 gp",L,Equipment.aspx?ID=109
Eagle-Eye Elixir (Major),"2,000 gp",L,Equipment.aspx?ID=90
Hemlock,"2,250 gp",L,Equipment.aspx?ID=117
Acid Flask (Major),"2,500 gp",L,Equipment.aspx?ID=74
`}],

  [ "holdables", { displayName: "Holdables", data: `
name,value,bulk,url
Everburning Torch,15 gp,L,Equipment.aspx?ID=255
Wondrous Figurine (Onyx Dog),34 gp,L,Equipment.aspx?ID=270
Thurible of Revelation (Lesser),55 gp,1,Equipment.aspx?ID=267
Maestro's Instrument (Lesser),60 gp,1,Equipment.aspx?ID=260
Bag of Holding (Type I),75 gp,1,Equipment.aspx?ID=249
Skeleton Key,125 gp,,Equipment.aspx?ID=266
Holy Prayer Beads,160 gp,,Equipment.aspx?ID=256
Traveler's Any-Tool,200 gp,1,Equipment.aspx?ID=268
Horn of Fog,230 gp,1,Equipment.aspx?ID=258
Primeval Mistletoe,230 gp,,Equipment.aspx?ID=263
Chime of Opening,235 gp,L,Equipment.aspx?ID=252
Bag of Holding (Type II),300 gp,1,Equipment.aspx?ID=249
Bottled Air,320 gp,L,Equipment.aspx?ID=250
Decanter of Endless Water,320 gp,L,Equipment.aspx?ID=254
Wondrous Figurine (Jade Serpent),340 gp,L,Equipment.aspx?ID=270
Rod of Wonder,465 gp,L,Equipment.aspx?ID=265
Immovable Rod,600 gp,1,Equipment.aspx?ID=259
Triton's Conch,640 gp,L,Equipment.aspx?ID=269
Horn of Blasting,700 gp,L,Equipment.aspx?ID=257
Maestro's Instrument (Moderate),900 gp,1,Equipment.aspx?ID=260
Thurible of Revelation (Moderate),900 gp,1,Equipment.aspx?ID=267
Wondrous Figurine (Golden Lions),900 gp,L,Equipment.aspx?ID=270
Bag of Holding (Type III),"1,200 gp",1,Equipment.aspx?ID=249
Skeleton Key (Greater),"1,250 gp",,Equipment.aspx?ID=266
Holy Prayer Beads (Greater),"1,400 gp",,Equipment.aspx?ID=256
Marvelous Medicines,"1,800 gp",1,Equipment.aspx?ID=261
Broom of Flying,"1,900 gp",1,Equipment.aspx?ID=251
Bag of Holding (Type IV),"2,400 gp",1,Equipment.aspx?ID=249
Wondrous Figurine (Marble Elephant),"2,700 gp",L,Equipment.aspx?ID=270
Crystal Ball (Clear Quartz),"3,800 gp",L,Equipment.aspx?ID=253
Primeval Mistletoe (Greater),"3,900 gp",,Equipment.aspx?ID=263
Rod of Negation,"4,300 gp",1,Equipment.aspx?ID=264
Wondrous Figurine (Obsidian Steed),"6,000 gp",L,Equipment.aspx?ID=270
Crystal Ball (Selenite),"7,000 gp",L,Equipment.aspx?ID=253
Crystal Ball (Moonstone),"7,500 gp",L,Equipment.aspx?ID=253
Crystal Ball (Peridot),"12,500 gp",L,Equipment.aspx?ID=253
Maestro's Instrument (Greater),"19,000 gp",1,Equipment.aspx?ID=260
Marvelous Medicines (Greater),"19,000 gp",1,Equipment.aspx?ID=261
Thurible of Revelation (Greater),"19,000 gp",1,Equipment.aspx?ID=267
Possibility Tome,"22,000 gp",2,Equipment.aspx?ID=262
Crystal Ball (Obsidian),"32,000 gp",L,Equipment.aspx?ID=253
`}],

  [ "wearables", { displayName: "Wearables", data: `
name,value,bulk,url
Aeon Stone (Dull Gray),9 gp,,Equipment.aspx?ID=407
Wayfinder,28 gp,,Equipment.aspx?ID=470
Brooch of Shielding,30 gp,,Equipment.aspx?ID=418
Hand of the Mage,30 gp,L,Equipment.aspx?ID=440
Hat of Disguise,30 gp,,Equipment.aspx?ID=442
Handwraps of Mighty Blows (+1),35 gp,,Equipment.aspx?ID=441
Doubling Rings,50 gp,,Equipment.aspx?ID=432
Hat of the Magi,50 gp,,Equipment.aspx?ID=443
Persona Mask,50 gp,,Equipment.aspx?ID=451
Bracers of Missile Deflection,52 gp,L,Equipment.aspx?ID=417
Channel Protection Amulet,56 gp,,Equipment.aspx?ID=421
Bracelet of Dashing,58 gp,L,Equipment.aspx?ID=415
Coyote Cloak,60 gp,,Equipment.aspx?ID=426
Crafter's Eyepiece,60 gp,,Equipment.aspx?ID=427
Dancing Scarf,60 gp,,Equipment.aspx?ID=428
Pendant of the Occult,60 gp,,Equipment.aspx?ID=450
Tracker's Goggles,60 gp,,Equipment.aspx?ID=467
Ventriloquist's Ring,60 gp,,Equipment.aspx?ID=468
Healer's Gloves,80 gp,L,Equipment.aspx?ID=444
Lifting Belt,80 gp,L,Equipment.aspx?ID=447
Demon Mask,85 gp,L,Equipment.aspx?ID=430
Alchemist Goggles,100 gp,,Equipment.aspx?ID=408
Handwraps of Mighty Blows (+1 Striking),100 gp,,Equipment.aspx?ID=441
Necklace of Fireballs I,44 gp,,Equipment.aspx?ID=449
Diplomat's Badge,125 gp,,Equipment.aspx?ID=431
Boots of Elvenkind,145 gp,L,Equipment.aspx?ID=413
Goggles of Night,150 gp,,Equipment.aspx?ID=438
Choker of Elocution,200 gp,L,Equipment.aspx?ID=422
Ring of the Ram,220 gp,,Equipment.aspx?ID=461
Aeon Stone (Gold Nodule),230 gp,,Equipment.aspx?ID=407
Clandestine Cloak,230 gp,L,Equipment.aspx?ID=423
Ring of Energy Resistance,245 gp,,Equipment.aspx?ID=455
Necklace of Fireballs II,115 gp,,Equipment.aspx?ID=449
Aeon Stone (Clear Spindle),325 gp,,Equipment.aspx?ID=407
Ring of Sustenance,325 gp,,Equipment.aspx?ID=459
Slippers of Spider Climbing,325 gp,L,Equipment.aspx?ID=465
Boots of Bounding,340 gp,L,Equipment.aspx?ID=412
Gloves of Storing,340 gp,,Equipment.aspx?ID=437
Hat of Disguise (Greater),340 gp,,Equipment.aspx?ID=442
Horseshoes of Speed,340 gp,1,Equipment.aspx?ID=406
Aeon Stone (Tourmaline Sphere),350 gp,,Equipment.aspx?ID=407
Cloak of Elvenkind,360 gp,L,Equipment.aspx?ID=424
Ring of Wizardry (Type I),360 gp,,Equipment.aspx?ID=462
Bracers of Armor I,450 gp,L,Equipment.aspx?ID=416
Collar of Inconspicuousness,475 gp,1,Equipment.aspx?ID=405
Necklace of Fireballs III,300 gp,,Equipment.aspx?ID=449
Collar of Empathy,600 gp,1,Equipment.aspx?ID=404
Armbands of Athleticism,645 gp,L,Equipment.aspx?ID=409
Belt of the Five Kings,650 gp,L,Equipment.aspx?ID=410
Bracers of Missile Deflection (Greater),650 gp,L,Equipment.aspx?ID=417
Coyote Cloak (Greater),650 gp,,Equipment.aspx?ID=426
Dancing Scarf (Greater),650 gp,,Equipment.aspx?ID=428
Hat of the Magi (Greater),650 gp,,Equipment.aspx?ID=443
Pendant of the Occult (Greater),650 gp,,Equipment.aspx?ID=450
Persona Mask (Greater),650 gp,,Equipment.aspx?ID=451
Tracker's Goggles (Greater),660 gp,,Equipment.aspx?ID=467
Ventriloquist's Ring (Greater),670 gp,,Equipment.aspx?ID=468
Knapsack of Halflingkind,675 gp,L,Equipment.aspx?ID=446
Phylactery of Faithfulness,680 gp,L,Equipment.aspx?ID=452
Eyes of the Eagle,700 gp,,Equipment.aspx?ID=436
Healer's Gloves (Greater),700 gp,L,Equipment.aspx?ID=444
Messenger's Ring,700 gp,,Equipment.aspx?ID=448
Choker of Elocution (Greater),850 gp,L,Equipment.aspx?ID=422
Ring of Lies,850 gp,,Equipment.aspx?ID=456
Winged Boots,850 gp,L,Equipment.aspx?ID=472
Barding of the Zephyr,900 gp,L,Equipment.aspx?ID=403
Clandestine Cloak (Greater),900 gp,L,Equipment.aspx?ID=423
Daredevil Boots,900 gp,L,Equipment.aspx?ID=429
Demon Mask (Greater),900 gp,L,Equipment.aspx?ID=430
Ring of Counterspells,925 gp,,Equipment.aspx?ID=454
Cloak of the Bat,950 gp,L,Equipment.aspx?ID=425
Ring of Energy Resistance (Greater),975 gp,,Equipment.aspx?ID=455
Cape of the Mountebank,980 gp,L,Equipment.aspx?ID=419
Druid's Vestments,"1,000 gp",L,Equipment.aspx?ID=434
Handwraps of Mighty Blows (+2 Striking),"1,000 gp",,Equipment.aspx?ID=441
Ring of Wizardry (Type II),"1,000 gp",,Equipment.aspx?ID=462
Necklace of Fireballs IV,700 gp,,Equipment.aspx?ID=449
Cassock of Devotion,"1,150 gp",L,Equipment.aspx?ID=420
Ring of Maniacal Devices,"1,175 gp",,Equipment.aspx?ID=457
Crafter's Eyepiece (Greater),"1,200 gp",,Equipment.aspx?ID=427
Boots of Elvenkind (Greater),"1,250 gp",L,Equipment.aspx?ID=413
Goggles of Night (Greater),"1,250 gp",,Equipment.aspx?ID=438
Gorget of the Primal Roar,"1,250 gp",L,Equipment.aspx?ID=439
Doubling Rings (Greater),"1,300 gp",,Equipment.aspx?ID=432
Alchemist Goggles (Greater),"1,400 gp",,Equipment.aspx?ID=408
Cloak of Elvenkind (Greater),"1,750 gp",L,Equipment.aspx?ID=424
Ring of Climbing,"1,750 gp",,Equipment.aspx?ID=453
Ring of Swimming,"1,750 gp",,Equipment.aspx?ID=460
Aeon Stone (Pink Rhomboid),"1,900 gp",,Equipment.aspx?ID=407
Berserker's Cloak,"2,000 gp",1,Equipment.aspx?ID=411
Handwraps of Mighty Blows (+2 Greater Striking),"2,000 gp",,Equipment.aspx?ID=441
Ring of Wizardry (Type III),"2,000 gp",,Equipment.aspx?ID=462
Necklace of Fireballs V,"1,600 gp",,Equipment.aspx?ID=449
Aeon Stone (Pale Lavender Ellipsoid),"2,200 gp",,Equipment.aspx?ID=407
Eye of Fortune,"2,700 gp",,Equipment.aspx?ID=435
Ring of the Ram (Greater),"2,700 gp",,Equipment.aspx?ID=461
Knapsack of Halflingkind (Greater),"2,850 gp",L,Equipment.aspx?ID=446
Boots of Speed,"3,000 gp",L,Equipment.aspx?ID=414
Bracers of Armor II,"4,000 gp",L,Equipment.aspx?ID=416
Boots of Bounding (Greater),"4,250 gp",L,Equipment.aspx?ID=412
Horseshoes of Speed (Greater),"4,250 gp",1,Equipment.aspx?ID=406
Ring of Energy Resistance (Major),"4,400 gp",,Equipment.aspx?ID=455
Ring of Wizardry (Type IV),"4,500 gp",,Equipment.aspx?ID=462
Necklace of Fireballs VI,"4,200 gp",,Equipment.aspx?ID=449
Robe of the Archmagi,"6,500 gp",1,Equipment.aspx?ID=464
Aeon Stone (Orange Prism),"9,750 gp",,Equipment.aspx?ID=407
Handwraps of Mighty Blows (+3 Greater Striking),"10,000 gp",,Equipment.aspx?ID=441
Necklace of Fireballs VII,"9,600 gp",,Equipment.aspx?ID=449
Armbands of Athleticism (Greater),"13,000 gp",L,Equipment.aspx?ID=409
Cloak of the Bat (Greater),"13,000 gp",L,Equipment.aspx?ID=425
Phylactery of Faithfulness (Greater),"13,000 gp",L,Equipment.aspx?ID=452
Robe of Eyes,"13,000 gp",1,Equipment.aspx?ID=463
Messenger's Ring (Greater),"13,500 gp",,Equipment.aspx?ID=448
Daredevil Boots (Greater),"14,000 gp",L,Equipment.aspx?ID=429
Voyager's Pack,"14,800 gp",,Equipment.aspx?ID=469
Alchemist Goggles (Major),"15,000 gp",,Equipment.aspx?ID=408
Anklets of Alacrity,"15,000 gp",,Equipment.aspx?ID=397
Belt of Giant Strength,"15,000 gp",L,Equipment.aspx?ID=398
Belt of Regeneration,"15,000 gp",L,Equipment.aspx?ID=399
Circlet of Persuasion,"15,000 gp",,Equipment.aspx?ID=400
Diadem of Intellect,"15,000 gp",L,Equipment.aspx?ID=401
Dread Blindfold,"15,000 gp",,Equipment.aspx?ID=433
Headband of Inspired Wisdom,"15,000 gp",,Equipment.aspx?ID=402
Inexplicable Apparatus,"19,000 gp",2,Equipment.aspx?ID=445
Goggles of Night (Major),"20,000 gp",,Equipment.aspx?ID=438
Ring of Maniacal Devices (Greater),"21,000 gp",,Equipment.aspx?ID=457
Aeon Stone (Lavender and Green Ellipsoid),"30,000 gp",,Equipment.aspx?ID=407
Robe of the Archmagi (Greater),"32,000 gp",1,Equipment.aspx?ID=464
Berserker's Cloak (Greater),"40,000 gp",1,Equipment.aspx?ID=411
Handwraps of Mighty Blows (+3 Major Striking),"40,000 gp",,Equipment.aspx?ID=441
Third Eye,"40,000 gp",,Equipment.aspx?ID=466
Bracers of Armor III,"60,000 gp",L,Equipment.aspx?ID=416
Whisper of the First Lie,"60,000 gp",,Equipment.aspx?ID=471
Ring of Spell Turning,"67,000 gp",,Equipment.aspx?ID=458
`}],

  [ "staves", { displayName: "Staves", data: `
name,value,bulk,url
Staff of Fire,60 gp,1,Equipment.aspx?ID=356
Animal Staff,90 gp,1,Equipment.aspx?ID=349
Mentalist's Staff,90 gp,1,Equipment.aspx?ID=350
Staff of Healing,90 gp,1,Equipment.aspx?ID=357
Verdant Staff,225 gp,1,Equipment.aspx?ID=364
Staff of Abjuration,230 gp,1,Equipment.aspx?ID=351
Staff of Conjuration,230 gp,1,Equipment.aspx?ID=352
Staff of Divination,230 gp,1,Equipment.aspx?ID=353
Staff of Enchantment,230 gp,1,Equipment.aspx?ID=354
Staff of Evocation,230 gp,1,Equipment.aspx?ID=355
Staff of Illusion,230 gp,1,Equipment.aspx?ID=359
Staff of Necromancy,230 gp,1,Equipment.aspx?ID=360
Staff of Transmutation,230 gp,1,Equipment.aspx?ID=363
Staff of Illumination,425 gp,1,Equipment.aspx?ID=358
Mentalist's Staff (Greater),450 gp,1,Equipment.aspx?ID=350
Staff of Fire (Greater),450 gp,1,Equipment.aspx?ID=356
Animal Staff (Greater),460 gp,1,Equipment.aspx?ID=349
Staff of Healing (Greater),470 gp,1,Equipment.aspx?ID=357
Staff of Abjuration (Greater),900 gp,1,Equipment.aspx?ID=351
Staff of Conjuration (Greater),900 gp,1,Equipment.aspx?ID=352
Staff of Divination (Greater),900 gp,1,Equipment.aspx?ID=353
Staff of Enchantment (Greater),900 gp,1,Equipment.aspx?ID=354
Staff of Evocation (Greater),900 gp,1,Equipment.aspx?ID=355
Staff of Illusion (Greater),900 gp,1,Equipment.aspx?ID=359
Staff of Necromancy (Greater),900 gp,1,Equipment.aspx?ID=360
Staff of Transmutation (Greater),900 gp,1,Equipment.aspx?ID=363
Verdant Staff (Greater),"1,750 gp",1,Equipment.aspx?ID=364
Mentalist's Staff (Major),"1,800 gp",1,Equipment.aspx?ID=350
Staff of Fire (Major),"1,800 gp",1,Equipment.aspx?ID=356
Staff of Healing (Major),"1,800 gp",1,Equipment.aspx?ID=357
Animal Staff (Major),"1,900 gp",1,Equipment.aspx?ID=349
Staff of Abjuration (Major),"4,000 gp",1,Equipment.aspx?ID=351
Staff of Conjuration (Major),"4,000 gp",1,Equipment.aspx?ID=352
Staff of Divination (Major),"4,000 gp",1,Equipment.aspx?ID=353
Staff of Enchantment (Major),"4,000 gp",1,Equipment.aspx?ID=354
Staff of Evocation (Major),"4,000 gp",1,Equipment.aspx?ID=355
Staff of Illusion (Major),"4,000 gp",1,Equipment.aspx?ID=359
Staff of Necromancy (Major),"4,000 gp",1,Equipment.aspx?ID=360
Staff of Transmutation (Major),"4,000 gp",1,Equipment.aspx?ID=363
Staff of Healing (True),"9,200 gp",1,Equipment.aspx?ID=357
Staff of Power,"10,000 gp",1,Equipment.aspx?ID=361
Staff of the Magi,"90,000 gp",1,Equipment.aspx?ID=362
`}],

  [ "wands", { displayName: "Wands", data: `
name,value,bulk,url,transform
Magic Wand (1st-Level Spell),60 gp,L,Equipment.aspx?ID=368,type=spell&level=1&name=[Wand] of $ (1st level)
Wand of Widening (1st-Level Spell),100 gp,L,Equipment.aspx?ID=373,type=widening&level=1&name=[Wand of Widening]: $ (1st level)
Magic Wand (2nd-Level Spell),160 gp,L,Equipment.aspx?ID=368,type=spell&level=2&name=[Wand] of $ (2nd level)
Wand of Continuation (1st-Level Spell),160 gp,L,Equipment.aspx?ID=369,type=continuation&level=1&name=[Wand of Continuation]: $ (1st level)
Wand of Manifold Missiles (1st-Level Spell),160 gp,L,Equipment.aspx?ID=370,
Wand of Widening (2nd-Level Spell),250 gp,L,Equipment.aspx?ID=373,type=widening&level=2&name=[Wand of Widening]: $ (2nd level)
Magic Wand (3rd-Level Spell),360 gp,L,Equipment.aspx?ID=368,type=spell&level=3&name=[Wand] of $ (3rd level)
Wand of Continuation (2nd-Level Spell),360 gp,L,Equipment.aspx?ID=369,type=continuation&level=2&name=[Wand of Continuation]: $ (2nd level)
Wand of Smoldering Fireballs (3rd-Level Spell),500 gp,L,Equipment.aspx?ID=372,
Wand of Widening (3rd-Level Spell),500 gp,L,Equipment.aspx?ID=373,type=widening&level=3&name=[Wand of Widening]: $ (3rd level)
Magic Wand (4th-Level Spell),700 gp,L,Equipment.aspx?ID=368,type=spell&level=4&name=[Wand] of $ (4th level)
Wand of Continuation (3rd-Level Spell),700 gp,L,Equipment.aspx?ID=369,type=continuation&level=3&name=[Wand of Continuation]: $ (3rd level)
Wand of Manifold Missiles (3rd-Level Spell),700 gp,L,Equipment.aspx?ID=370,
Wand of Widening (4th-Level Spell),"1,000 gp",L,Equipment.aspx?ID=373,type=widening&level=4&name=[Wand of Widening]: $ (4th level)
Magic Wand (5th-Level Spell),"1,500 gp",L,Equipment.aspx?ID=368,type=spell&level=5&name=[Wand] of $ (5th level)
Wand of Continuation (4th-Level Spell),"1,500 gp",L,Equipment.aspx?ID=369,type=continuation&level=4&name=[Wand of Continuation]: $ (4th level)
Wand of Smoldering Fireballs (5th-Level Spell),"2,000 gp",L,Equipment.aspx?ID=372,
Wand of Widening (5th-Level Spell),"2,000 gp",L,Equipment.aspx?ID=373,type=widening&level=5&name=[Wand of Widening]: $ (5th level)
Magic Wand (6th-Level Spell),"3,000 gp",L,Equipment.aspx?ID=368,type=spell&level=6&name=[Wand] of $ (6th level)
Wand of Continuation (5th-Level Spell),"3,000 gp",L,Equipment.aspx?ID=369,type=continuation&level=5&name=[Wand of Continuation]: $ (5th level)
Wand of Manifold Missiles (5th-Level Spell),"3,000 gp",L,Equipment.aspx?ID=370,
Wand of Widening (6th-Level Spell),"4,500 gp",L,Equipment.aspx?ID=373,type=widening&level=6&name=[Wand of Widening]: $ (6th level)
Magic Wand (7th-Level Spell),"6,500 gp",L,Equipment.aspx?ID=368,type=spell&level=7&name=[Wand] of $ (7th level)
Wand of Continuation (6th-Level Spell),"6,500 gp",L,Equipment.aspx?ID=369,type=continuation&level=6&name=[Wand of Continuation]: $ (6th level)
Wand of Slaying (7th-Level Spell),"10,000 gp",L,Equipment.aspx?ID=371,
Wand of Smoldering Fireballs (7th-Level Spell),"10,000 gp",L,Equipment.aspx?ID=372,
Wand of Widening (7th-Level Spell),"10,000 gp",L,Equipment.aspx?ID=373,type=widening&level=7&name=[Wand of Widening]: $ (7th level)
Magic Wand (8th-Level Spell),"15,000 gp",L,Equipment.aspx?ID=368,type=spell&level=8&name=[Wand] of $ (8th level)
Wand of Continuation (7th-Level Spell),"15,000 gp",L,Equipment.aspx?ID=369,type=continuation&level=7&name=[Wand of Continuation]: $ (7th level)
Wand of Manifold Missiles (7th-Level Spell),"15,000 gp",L,Equipment.aspx?ID=370,
Wand of Slaying (8th-Level Spell),"24,000 gp",L,Equipment.aspx?ID=371,
Wand of Widening (8th-Level Spell),"24,000 gp",L,Equipment.aspx?ID=373,type=widening&level=8&name=[Wand of Widening]: $ (8th level)
Magic Wand (9th-Level Spell),"40,000 gp",L,Equipment.aspx?ID=368,type=spell&level=9&name=[Wand] of $ (9th level)
Wand of Continuation (8th-Level Spell),"40,000 gp",L,Equipment.aspx?ID=369,type=continuation&level=8&name=[Wand of Continuation]: $ (8th level)
Wand of Slaying (9th-Level Spell),"70,000 gp",L,Equipment.aspx?ID=371,
Wand of Smoldering Fireballs (9th-Level Spell),"70,000 gp",L,Equipment.aspx?ID=372,
Wand of Widening (9th-Level Spell),"70,000 gp",L,Equipment.aspx?ID=373,type=widening&level=9&name=[Wand of Widening]: $ (9th level)
`}],

  [ "armour", { displayName: "Armour", data: `
name,value,bulk,url
Explorer's Clothing,1 sp,L,Armor.aspx?ID=2
Padded Armor,2 sp,L,Armor.aspx?ID=3
Leather Armor,2 gp,1,Armor.aspx?ID=4
Studded Leather Armor,3 gp,1,Armor.aspx?ID=5
Chain Shirt,5 gp,1,Armor.aspx?ID=6
Hide Armor,2 gp,2,Armor.aspx?ID=7
Scale Mail,4 gp,2,Armor.aspx?ID=8
Chain Mail,6 gp,2,Armor.aspx?ID=9
Breastplate,8 gp,2,Armor.aspx?ID=10
Splint Mail,13 gp,3,Armor.aspx?ID=11
Half Plate,18 gp,3,Armor.aspx?ID=12
Full Plate,30 gp,4,Armor.aspx?ID=13
`}],

  [ "shields", { displayName: "Shields", data: `
name,value,bulk,url
Buckler,1 gp,L,Shields.aspx?ID=1
Wooden Shield,1 gp,1,Shields.aspx?ID=2
Steel Shield,2 gp,1,Shields.aspx?ID=3
Tower Shield,10 gp,4,Shields.aspx?ID=4
`}],

  [ "weapons", { displayName: "Weapons", data: `
name,value,bulk,url
Clan Dagger,2 gp,L,Weapons.aspx?ID=13
Club,,1,Weapons.aspx?ID=2
Dagger,2 sp,L,Weapons.aspx?ID=3
Gauntlet,2 sp,L,Weapons.aspx?ID=4
Katar,3 sp,L,Weapons.aspx?ID=14
Light Mace,4 sp,L,Weapons.aspx?ID=5
Longspear,5 sp,2,Weapons.aspx?ID=6
Mace,1 gp,1,Weapons.aspx?ID=7
Morningstar,1 gp,1,Weapons.aspx?ID=8
Sickle,2 sp,L,Weapons.aspx?ID=9
Spear,1 sp,1,Weapons.aspx?ID=10
Spiked Gauntlet,3 sp,L,Weapons.aspx?ID=11
Staff,,1,Weapons.aspx?ID=12
Bastard Sword,4 gp,1,Weapons.aspx?ID=15
Battle Axe,1 gp,1,Weapons.aspx?ID=16
Bo Staff,2 sp,2,Weapons.aspx?ID=17
Dogslicer,1 sp,L,Weapons.aspx?ID=49
Elven Curve Blade,4 gp,2,Weapons.aspx?ID=50
Falchion,3 gp,2,Weapons.aspx?ID=18
Filcher's Fork,1 gp,L,Weapons.aspx?ID=51
Flail,8 sp,1,Weapons.aspx?ID=19
Glaive,1 gp,2,Weapons.aspx?ID=20
Gnome Hooked Hammer,2 gp,1,Weapons.aspx?ID=52
Greataxe,2 gp,2,Weapons.aspx?ID=21
Greatclub,1 gp,2,Weapons.aspx?ID=22
Greatpick,1 gp,2,Weapons.aspx?ID=23
Greatsword,2 gp,2,Weapons.aspx?ID=24
Guisarme,2 gp,2,Weapons.aspx?ID=25
Halberd,2 gp,2,Weapons.aspx?ID=26
Hatchet,4 sp,L,Weapons.aspx?ID=27
Horsechopper,9 sp,2,Weapons.aspx?ID=53
Kama,1 gp,L,Weapons.aspx?ID=54
Katana,2 gp,1,Weapons.aspx?ID=55
Kukri,6 sp,L,Weapons.aspx?ID=56
Lance,1 gp,2,Weapons.aspx?ID=28
Light Hammer,3 sp,L,Weapons.aspx?ID=29
Light Pick,4 sp,L,Weapons.aspx?ID=30
Longsword,1 gp,1,Weapons.aspx?ID=31
Main-gauche,5 sp,L,Weapons.aspx?ID=32
Maul,3 gp,2,Weapons.aspx?ID=33
Nunchaku,2 sp,L,Weapons.aspx?ID=57
Orc Knuckle Dagger,7 sp,L,Weapons.aspx?ID=58
Pick,7 sp,1,Weapons.aspx?ID=34
Ranseur,2 gp,2,Weapons.aspx?ID=35
Rapier,2 gp,1,Weapons.aspx?ID=36
Sai,6 sp,L,Weapons.aspx?ID=59
Sap,1 sp,L,Weapons.aspx?ID=37
Scimitar,1 gp,1,Weapons.aspx?ID=38
Scythe,2 gp,2,Weapons.aspx?ID=39
Shield Boss,5 sp,,Weapons.aspx?ID=41
Shield Spikes,5 sp,,Weapons.aspx?ID=42
Shortsword,9 sp,L,Weapons.aspx?ID=43
Spiked Chain,3 gp,1,Weapons.aspx?ID=60
Starknife,2 gp,L,Weapons.aspx?ID=44
Temple Sword,2 gp,1,Weapons.aspx?ID=61
Trident,1 gp,1,Weapons.aspx?ID=45
War Flail,2 gp,2,Weapons.aspx?ID=46
Warhammer,1 gp,1,Weapons.aspx?ID=47
Whip,1 sp,1,Weapons.aspx?ID=48
Dwarven War Axe,3 gp,2,Weapons.aspx?ID=62
Gnome Flickmace,3 gp,1,Weapons.aspx?ID=63
Orc Necksplitter,2 gp,1,Weapons.aspx?ID=64
Sawtooth Saber,5 gp,L,Weapons.aspx?ID=65
Blowgun,1 sp,L,Weapons.aspx?ID=66
Crossbow,3 gp,1,Weapons.aspx?ID=67
Dart,1 cp,L,Weapons.aspx?ID=68
Hand Crossbow,3 gp,L,Weapons.aspx?ID=69
`}],

  [ "magicweapons", { displayName: "Magic Weapons", data: `
name,value,bulk,url,transform
Magic Weapon (+1),35 gp,,Equipment.aspx?ID=380,type=weapon&name=[+1] $
Magic Weapon (+1 Striking),100 gp,,Equipment.aspx?ID=380,type=weapon&name=[+1 striking] $
Magic Weapon (+2 Striking),"1,000 gp",,Equipment.aspx?ID=380,type=weapon&name=[+2 striking] $
Magic Weapon (+2 Greater Striking),"2,000 gp",,Equipment.aspx?ID=380,type=weapon&name=[+2 greater striking] $
Magic Weapon (+3 Greater Striking),"10,000 gp",,Equipment.aspx?ID=380,type=weapon&name=[+3 greater striking] $
Magic Weapon (+3 Major Striking),"40,000 gp",,Equipment.aspx?ID=380,type=weapon&name=[+3 major striking] $
Fighter's Fork,50 gp,1,Equipment.aspx?ID=385
Retribution Axe,60 gp,2,Equipment.aspx?ID=393
Dagger of Venom,150 gp,L,Equipment.aspx?ID=383
Caterwaul Sling,155 gp,L,Equipment.aspx?ID=382
Bloodletting Kukri,240 gp,L,Equipment.aspx?ID=381
Twining Staff,250 gp,,Equipment.aspx?ID=396
Gloom Blade,700 gp,L,Equipment.aspx?ID=388
Oathbow,"1,300 gp",2,Equipment.aspx?ID=392
Dwarven Thrower,"2,750 gp",1,Equipment.aspx?ID=384
Flame Tongue,"2,800 gp",1,Equipment.aspx?ID=386
Storm Flash,"4,000 gp",1,Equipment.aspx?ID=395
Holy Avenger,"4,500 gp",1,Equipment.aspx?ID=389
Frost Brand,"10,000 gp",2,Equipment.aspx?ID=387
Flame Tongue (Greater),"13,800 gp",1,Equipment.aspx?ID=386
Luck Blade,"15,000 gp",L,Equipment.aspx?ID=390
Storm Flash (Greater),"21,000 gp",1,Equipment.aspx?ID=395
Luck Blade (Wishing),"30,000 gp",L,Equipment.aspx?ID=390
Mattock of the Titans,"36,000 gp",16,Equipment.aspx?ID=391
Sky Hammer,"70,000 gp",1,Equipment.aspx?ID=394
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

function getCollection(name) {
  let collection = Collections.get(name);

  if (collection && !collection.items) {
    let parseResult = Papa.parse(collection.data.trim(), { header: true });
    collection.items = parseResult.data;
  }

  return collection;
}
