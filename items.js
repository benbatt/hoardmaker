"use strict";

const Data = {
  gear: `
name,value,bulk,url
Candle,1 cp,,Equipment.aspx?ID=10
Chalk x10,1 cp,,Equipment.aspx?ID=12
Mug,1 cp,,Equipment.aspx?ID=36
Oil,1 cp,,Equipment.aspx?ID=38
Piton,1 cp,,Equipment.aspx?ID=39
Sack,1 cp,L,Equipment.aspx?ID=45
Ten-Foot Pole,1 cp,1,Equipment.aspx?ID=56
Torch,1 cp,L,Equipment.aspx?ID=60
Bedroll,2 cp,L,Equipment.aspx?ID=7
Soap,2 cp,,Equipment.aspx?ID=52
Ladder (10 ft.),3 cp,3,Equipment.aspx?ID=28
Flint and Steel,5 cp,,Equipment.aspx?ID=21
Waterskin,5 cp,L,Equipment.aspx?ID=62
Signal Whistle,8 cp,,Equipment.aspx?ID=50
Backpack,1 sp,,Equipment.aspx?ID=4
Basic Crafter's Book,1 sp,L,Equipment.aspx?ID=6
Clothing (Explorer's),1 sp,L,Equipment.aspx?ID=15
Clothing (Ordinary),1 sp,,Equipment.aspx?ID=15
Disguise Kit (Replacement Cosmetics),1 sp,L,Equipment.aspx?ID=19
Grappling Hook,1 sp,L,Equipment.aspx?ID=23
Hammer,1 sp,L,Equipment.aspx?ID=24
Religious Symbol (Wooden),1 sp,L,Equipment.aspx?ID=41
Writing Set (Extra Ink and Paper),1 sp,L,Equipment.aspx?ID=63
Lock (Poor),2 sp,,Equipment.aspx?ID=30
Merchant's Scale,2 sp,L,Equipment.aspx?ID=34
Saddlebags,2 sp,L,Equipment.aspx?ID=46
Caltrops,3 sp,L,Equipment.aspx?ID=9
Manacles (Poor),3 sp,,Equipment.aspx?ID=32
Thieves' Tools (Replacement Picks),3 sp,L,Equipment.aspx?ID=58
Clothing (Winter),4 sp,L,Equipment.aspx?ID=15
Rations 1 week,4 sp,L,Equipment.aspx?ID=40
Tool (Short),4 sp,L,Equipment.aspx?ID=59
Climbing Kit,5 sp,1,Equipment.aspx?ID=14
Crowbar,5 sp,L,Equipment.aspx?ID=18
Disguise Kit (Elite Cosmetics),5 sp,L,Equipment.aspx?ID=19
Material Component Pouch,5 sp,L,Equipment.aspx?ID=33
Rope 50 ft.,5 sp,L,Equipment.aspx?ID=44
Chest,6 sp,2,Equipment.aspx?ID=13
Lantern (Hooded),7 sp,L,Equipment.aspx?ID=29
Fishing Tackle,8 sp,1,Equipment.aspx?ID=20
Musical Instrument (Handheld),8 sp,1,Equipment.aspx?ID=37
Tent (Pup),8 sp,L,Equipment.aspx?ID=57
Compass,1 gp,,Equipment.aspx?ID=16
Cookware,1 gp,2,Equipment.aspx?ID=17
Formula Book (Blank),1 gp,L,Equipment.aspx?ID=22
Lantern (Bull's-Eye),1 gp,1,Equipment.aspx?ID=29
Mirror,1 gp,,Equipment.aspx?ID=35
Religious Text,1 gp,L,Equipment.aspx?ID=42
Spellbook (Blank),1 gp,L,Equipment.aspx?ID=53
Tool (Long),1 gp,1,Equipment.aspx?ID=59
Writing Set,1 gp,L,Equipment.aspx?ID=63
Adventurer's Pack,1.5 gp,1,Equipment.aspx?ID=1
Clothing (Fine),2 gp,L,Equipment.aspx?ID=15
Disguise Kit,2 gp,L,Equipment.aspx?ID=19
Lock (Simple),2 gp,,Equipment.aspx?ID=30
Musical Instrument (Heavy),2 gp,16,Equipment.aspx?ID=37
Religious Symbol (Silver),2 gp,L,Equipment.aspx?ID=41
Repair Kit,2 gp,1,Equipment.aspx?ID=43
Alchemist's Tools,3 gp,1,Equipment.aspx?ID=2
Hourglass,3 gp,L,Equipment.aspx?ID=27
Manacles (Simple),3 gp,,Equipment.aspx?ID=32
Thieves' Tools,3 gp,L,Equipment.aspx?ID=58
Thieves' Tools (Infiltrator Picks),3 gp,L,Equipment.aspx?ID=58
Artisan's Tools,4 gp,2,Equipment.aspx?ID=3
Chain 10 ft.,4 gp,1,Equipment.aspx?ID=11
Tack,4 gp,1,Equipment.aspx?ID=55
Alchemist's Lab,5 gp,6,Equipment.aspx?ID=543
Healer's Tools,5 gp,1,Equipment.aspx?ID=25
Snare Kit,5 gp,2,Equipment.aspx?ID=51
Tent (Four-Person),5 gp,1,Equipment.aspx?ID=57
Scholarly Journal,6 gp,L,Equipment.aspx?ID=64
Barding (Light; Small or Medium),10 gp,2,Equipment.aspx?ID=1552
Survey Map,10 gp,L,Equipment.aspx?ID=65
Lock (Average),15 gp,,Equipment.aspx?ID=30
Barding (Light; Large),20 gp,4,Equipment.aspx?ID=1552
Compass (Lensatic),20 gp,,Equipment.aspx?ID=16
Crowbar (Levered),20 gp,L,Equipment.aspx?ID=18
Fishing Tackle (Professional),20 gp,1,Equipment.aspx?ID=20
Manacles (Average),20 gp,,Equipment.aspx?ID=32
Spyglass,20 gp,L,Equipment.aspx?ID=54
Barding (Heavy; Small or Medium),25 gp,4,Equipment.aspx?ID=1552
Repair Kit (Superb),25 gp,1,Equipment.aspx?ID=43
Scholarly Journal (Compendium),30 gp,L,Equipment.aspx?ID=64
Climbing Kit (Extreme),40 gp,1,Equipment.aspx?ID=14
Disguise Kit (Elite),40 gp,L,Equipment.aspx?ID=19
Magnifying Glass,40 gp,,Equipment.aspx?ID=31
Tent (Pavilion),40 gp,12,Equipment.aspx?ID=57
Artisan's Tools (Sterling),50 gp,2,Equipment.aspx?ID=3
Barding (Heavy; Large),50 gp,8,Equipment.aspx?ID=1552
Healer's Tools (Expanded),50 gp,1,Equipment.aspx?ID=25
Musical Instrument (Virtuoso Handheld),50 gp,1,Equipment.aspx?ID=37
Survey Map (Atlas),50 gp,L,Equipment.aspx?ID=65
Thieves' Tools (Infiltrator),50 gp,L,Equipment.aspx?ID=58
Alchemist's Lab (Expanded),55 gp,6,Equipment.aspx?ID=543
Clothing (High-Fashion Fine),55 gp,L,Equipment.aspx?ID=15
Snare Kit (Specialist),55 gp,2,Equipment.aspx?ID=51
Spyglass (Fine),80 gp,L,Equipment.aspx?ID=54
Musical Instrument (Virtuoso Heavy),100 gp,16,Equipment.aspx?ID=37
Lock (Good),200 gp,,Equipment.aspx?ID=30
Manacles (Good),250 gp,,Equipment.aspx?ID=32
Lock (Superior),"4,500 gp",,Equipment.aspx?ID=30
Manacles (Superior),"5,000 gp",,Equipment.aspx?ID=32
Holly and Mistletoe,,,Equipment.aspx?ID=26
`,

  consumables: `
name,value,bulk,url
Feather Token (Ladder),3 gp,,Equipment.aspx?ID=244
Holy Water,3 gp,L,Equipment.aspx?ID=245
Nectar of Purification,3 gp,L,Equipment.aspx?ID=174
Owlbear Claw,3 gp,,Equipment.aspx?ID=230
Runestone,3 gp,L,Equipment.aspx?ID=247
Shining Ammunition,3 gp,,Equipment.aspx?ID=165
Unholy Water,3 gp,L,Equipment.aspx?ID=248
1st-Level Scroll,4 gp,L,Equipment.aspx?ID=640
Healing Potion (Minor),4 gp,L,Equipment.aspx?ID=186
Potency Crystal,4 gp,,Equipment.aspx?ID=231
Wolf Fang,4 gp,,Equipment.aspx?ID=239
Feather Token (Holly Bush),6 gp,,Equipment.aspx?ID=244
Hunter's Bane,6 gp,,Equipment.aspx?ID=217
Jade Cat,6 gp,,Equipment.aspx?ID=223
Monkey Pin,6 gp,,Equipment.aspx?ID=226
Oil of Weightlessness,6 gp,L,Equipment.aspx?ID=181
Bronze Bull Pendant,7 gp,,Equipment.aspx?ID=202
Crying Angel Pendant,7 gp,,Equipment.aspx?ID=203
Effervescent Ampoule,7 gp,,Equipment.aspx?ID=207
Mesmerizing Opal,7 gp,,Equipment.aspx?ID=225
Oil of Potency,7 gp,L,Equipment.aspx?ID=179
Onyx Panther,7 gp,,Equipment.aspx?ID=229
Savior Spike,7 gp,,Equipment.aspx?ID=232
Feather Step Stone,8 gp,,Equipment.aspx?ID=212
Feather Token (Bird),8 gp,,Equipment.aspx?ID=244
Oil of Mending,9 gp,L,Equipment.aspx?ID=178
Beacon Shot,10 gp,,Equipment.aspx?ID=159
Feather Token (Chest),10 gp,,Equipment.aspx?ID=244
Vine Arrow,10 gp,,Equipment.aspx?ID=170
Potion of Water Breathing,11 gp,L,Equipment.aspx?ID=196
Sleep Arrow,11 gp,,Equipment.aspx?ID=166
2nd-Level Scroll,12 gp,L,Equipment.aspx?ID=640
Healing Potion (Lesser),12 gp,L,Equipment.aspx?ID=186
Spellstrike Ammunition (Type I),12 gp,,Equipment.aspx?ID=167
Dragon Turtle Scale,13 gp,,Equipment.aspx?ID=206
Barkskin Potion,15 gp,L,Equipment.aspx?ID=184
Climbing Bolt,15 gp,,Equipment.aspx?ID=160
Feather Token (Fan),15 gp,,Equipment.aspx?ID=244
Shrinking Potion,15 gp,L,Equipment.aspx?ID=197
Viper Arrow,17 gp,,Equipment.aspx?ID=171
Bloodseeker Beak,20 gp,,Equipment.aspx?ID=201
Fear Gem,20 gp,,Equipment.aspx?ID=211
Invisibility Potion,20 gp,L,Equipment.aspx?ID=187
Potion of Leaping,21 gp,L,Equipment.aspx?ID=190
Sneaky Key,22 gp,,Equipment.aspx?ID=234
Shark Tooth Charm,23 gp,,Equipment.aspx?ID=233
Salve of Slipperiness,25 gp,L,Equipment.aspx?ID=183
3rd-Level Scroll,30 gp,L,Equipment.aspx?ID=640
Emerald Grasshopper,30 gp,,Equipment.aspx?ID=208
Spellstrike Ammunition (Type II),30 gp,,Equipment.aspx?ID=167
Tiger Menuki,30 gp,,Equipment.aspx?ID=236
Oil of Weightlessness (Greater),36 gp,L,Equipment.aspx?ID=181
Feather Token (Tree),38 gp,,Equipment.aspx?ID=244
Salve of Antiparalysis,40 gp,L,Equipment.aspx?ID=182
Potion of Resistance (Lesser),45 gp,L,Equipment.aspx?ID=192
Truth Potion,46 gp,L,Equipment.aspx?ID=200
Dust of Appearance,50 gp,,Equipment.aspx?ID=241
Healing Potion (Moderate),50 gp,L,Equipment.aspx?ID=186
Iron Cube,50 gp,,Equipment.aspx?ID=218
Potion of Swimming,50 gp,L,Equipment.aspx?ID=193
Feather Token (Anchor),55 gp,,Equipment.aspx?ID=244
Grim Trophy,55 gp,,Equipment.aspx?ID=216
Serum of Sex Shift,60 gp,L,Equipment.aspx?ID=198
Murderer's Knot,66 gp,,Equipment.aspx?ID=228
4th-Level Scroll,70 gp,L,Equipment.aspx?ID=640
Dragon's Breath Potion (Young),70 gp,L,Equipment.aspx?ID=185
Spellstrike Ammunition (Type III),70 gp,,Equipment.aspx?ID=167
Swift Block Cabochon,70 gp,,Equipment.aspx?ID=235
Candle of Truth,75 gp,,Equipment.aspx?ID=240
Feather Token (Swan Boat),76 gp,,Equipment.aspx?ID=244
Potion of Quickness,90 gp,L,Equipment.aspx?ID=191
Shrinking Potion (Greater),90 gp,L,Equipment.aspx?ID=197
Gallows Tooth,100 gp,,Equipment.aspx?ID=214
Jade Bauble,100 gp,,Equipment.aspx?ID=222
Potion of Flying,100 gp,L,Equipment.aspx?ID=189
Javelin of Lightning,110 gp,L,Equipment.aspx?ID=246
Explosive Ammunition,130 gp,,Equipment.aspx?ID=162
Feather Token (Whip),130 gp,,Equipment.aspx?ID=244
Storm Arrow,130 gp,,Equipment.aspx?ID=169
Dust of Disappearance,135 gp,,Equipment.aspx?ID=242
Aligned Oil,140 gp,L,Equipment.aspx?ID=173
5th-Level Scroll,150 gp,L,Equipment.aspx?ID=640
Spellstrike Ammunition (Type IV),150 gp,,Equipment.aspx?ID=167
Vanishing Coin,160 gp,,Equipment.aspx?ID=237
Iron Medallion,175 gp,,Equipment.aspx?ID=221
Mummified Bat,175 gp,,Equipment.aspx?ID=227
Potion of Resistance (Moderate),180 gp,L,Equipment.aspx?ID=192
Elemental Gem,200 gp,,Equipment.aspx?ID=243
Oil of Repulsion,175 gp,L,Equipment.aspx?ID=180
Oil of Keen Edges,250 gp,L,Equipment.aspx?ID=177
Potion of Swimming (Greater),250 gp,L,Equipment.aspx?ID=193
6th-Level Scroll,300 gp,L,Equipment.aspx?ID=640
Spellstrike Ammunition (Type V),300 gp,,Equipment.aspx?ID=167
Fade Band,320 gp,,Equipment.aspx?ID=210
Potion of Tongues,320 gp,L,Equipment.aspx?ID=194
Salve of Antiparalysis (Greater),325 gp,L,Equipment.aspx?ID=182
Oil of Animation,330 gp,L,Equipment.aspx?ID=176
Dragon's Breath Potion (Adult),400 gp,L,Equipment.aspx?ID=185
Eye of Apprehension,400 gp,,Equipment.aspx?ID=209
Healing Potion (Greater),400 gp,L,Equipment.aspx?ID=186
Iron Equalizer,400 gp,,Equipment.aspx?ID=220
Penetrating Ammunition,400 gp,,Equipment.aspx?ID=164
Panacea,450 gp,L,Equipment.aspx?ID=188
Explosive Ammunition (Greater),520 gp,,Equipment.aspx?ID=162
Mending Lattice,525 gp,,Equipment.aspx?ID=224
7th-Level Scroll,600 gp,L,Equipment.aspx?ID=640
Spellstrike Ammunition (Type VI),600 gp,,Equipment.aspx?ID=167
Potion of Resistance (Greater),850 gp,L,Equipment.aspx?ID=192
Viper's Fang,850 gp,,Equipment.aspx?ID=238
Dazing Coil,900 gp,,Equipment.aspx?ID=204
Ghost Ammunition,900 gp,,Equipment.aspx?ID=163
Iron Cudgel,900 gp,,Equipment.aspx?ID=219
Potion of Flying (Greater),"1,000 gp",L,Equipment.aspx?ID=189
Obfuscation Oil,"1,200 gp",L,Equipment.aspx?ID=175
8th-Level Scroll,"1,300 gp",L,Equipment.aspx?ID=640
Disintegration Bolt,"1,300 gp",,Equipment.aspx?ID=161
Spellstrike Ammunition (Type VII),"1,300 gp",,Equipment.aspx?ID=167
Stone Bullet,"1,300 gp",,Equipment.aspx?ID=168
Truesight Potion,"1,500 gp",L,Equipment.aspx?ID=199
Flame Navette,"1,800 gp",,Equipment.aspx?ID=213
Ghost Dust,"1,800 gp",,Equipment.aspx?ID=215
Dispelling Sliver,"2,400 gp",,Equipment.aspx?ID=205
9th-Level Scroll,"3,000 gp",L,Equipment.aspx?ID=640
Dragon's Breath Potion (Wyrm),"3,000 gp",L,Equipment.aspx?ID=185
Spellstrike Ammunition (Type VIII),"3,000 gp",,Equipment.aspx?ID=167
Potion of Undetectability,"4,400 gp",L,Equipment.aspx?ID=195
Healing Potion (Major),"5,000 gp",L,Equipment.aspx?ID=186
10th-Level Scroll,"8,000 gp",L,Equipment.aspx?ID=640
Spellstrike Ammunition (Type IX),"8,000 gp",,Equipment.aspx?ID=167
Antimagic Oil,"13,000 gp",L,Equipment.aspx?ID=172
`,
};

const Collections = new Map();

function getCollection(name) {
  if (!Collections.has(name) && Data[name]) {
    let parseResult = Papa.parse(Data[name].trim(), { header: true });
    Collections.set(name, parseResult.data);
  }

  return Collections.get(name);
}
