// Base de datos de Items, Stats y Mazmorras
const gearData = [
    { id: 'weapon', nameKey: 'gear_weapon', image: 'source/gear/weapon.webp' },
    { id: 'head', nameKey: 'gear_head', image: 'source/gear/head.webp' },
    { id: 'armor', nameKey: 'gear_armor', image: 'source/gear/armor.webp' },
    { id: 'guante', nameKey: 'gear_guante', image: 'source/gear/guante.webp' },
    { id: 'bota', nameKey: 'gear_bota', image: 'source/gear/bota.webp' },
    { id: 'arete', nameKey: 'gear_arete', image: 'source/gear/arete.webp' },
    { id: 'collar', nameKey: 'gear_collar', image: 'source/gear/collar.webp' },
    { id: 'anillo', nameKey: 'gear_anillo', image: 'source/gear/anillo.webp' },
    { id: 'brazaleteL', nameKey: 'gear_brazaleteL', image: 'source/gear/brazaleteL.webp' },
    { id: 'brazaleteR', nameKey: 'gear_brazaleteR', image: 'source/gear/brazaleteR.webp' },
    { id: 'amuleto', nameKey: 'gear_amuleto', image: 'source/gear/amuleto.webp' }
];

const sigilData = [
  {
    id: 'cabbageKiller',
    nameKey: 'sigil_cabbage_killer',
    quality: 'Rare',
    image: 'source/sigil/Cabbage Killer Sigil.webp',
    stat: ''
  },
  {
    id: 'wastelandFoxen',
    nameKey: 'sigil_wasteland_foxen',
    quality: 'Rare',
    image: 'source/sigil/Wasteland Foxen Sigil.webp',
    stat: ''
  },
  {
    id: 'cabbageToughGuy',
    nameKey: 'sigil_cabbage_tough_guy',
    quality: 'Rare',
    image: 'source/sigil/Cabbage Tough Guy Sigil.webp',
    stat: ''
  },
  {
    id: 'glimmerCaprahorn',
    nameKey: 'sigil_glimmer_caprahorn',
    quality: 'Rare',
    image: 'source/sigil/Glimmer Caprahorn Sigil.webp',
    stat: ''
  },
  {
    id: 'cabbageBlaster',
    nameKey: 'sigil_cabbage_blaster',
    quality: 'Rare',
    image: 'source/sigil/Cabbage Blaster Sigil.webp',
    stat: ''
  },
  {
    id: 'netherCaprahorn',
    nameKey: 'sigil_nether_caprahorn',
    quality: 'Rare',
    image: 'source/sigil/Nether Caprahorn Sigil.webp',
    stat: ''
  },
  {
    id: 'cabbageHunter',
    nameKey: 'sigil_cabbage_hunter',
    quality: 'Rare',
    image: 'source/sigil/Cabbage Hunter Sigil.webp',
    stat: ''
  },
  {
    id: 'foxen',
    nameKey: 'sigil_foxen',
    quality: 'Rare',
    image: 'source/sigil/Foxen Sigil.webp',
    stat: ''
  },
  {
    id: 'frostLizard',
    nameKey: 'sigil_frost_lizard',
    quality: 'Rare',
    image: 'source/sigil/Frost Lizard Sigil.webp',
    stat: ''
  },
  {
    id: 'magmaLizard',
    nameKey: 'sigil_magma_lizard',
    quality: 'Rare',
    image: 'source/sigil/Magma Lizard Sigil.webp',
    stat: ''
  },
  {
    id: 'galeLizard',
    nameKey: 'sigil_gale_lizard',
    quality: 'Rare',
    image: 'source/sigil/Gale Lizard Sigil.webp',
    stat: ''
  },
  {
    id: 'lightningLizard',
    nameKey: 'sigil_lightning_lizard',
    quality: 'Rare',
    image: 'source/sigil/Lightning Lizard Sigil.webp',
    stat: ''
  },
  {
    id: 'blackstoneMarksman',
    nameKey: 'sigil_blackstone_marksman',
    quality: 'Rare',
    image: 'source/sigil/Blackstone Marksman Sigil.webp',
    stat: ''
  },
  {
    id: 'blackstoneGuard',
    nameKey: 'sigil_blackstone_guard',
    quality: 'Rare',
    image: 'source/sigil/Blackstone Guard Sigil.webp',
    stat: ''
  },
  {
    id: 'blackstoneWarrior',
    nameKey: 'sigil_blackstone_warrior',
    quality: 'Rare',
    image: 'source/sigil/Blackstone Warrior Sigil.webp',
    stat: ''
  },
  {
    id: 'blackstoneAssaulter',
    nameKey: 'sigil_blackstone_assaulter',
    quality: 'Rare',
    image: 'source/sigil/Blackstone Assaulter Sigil.webp',
    stat: ''
  },
  {
    id: 'goblinWarrior',
    nameKey: 'sigil_goblin_warrior',
    quality: 'Rare',
    image: 'source/sigil/Goblin Warrior Sigil.webp',
    stat: ''
  },
  {
    id: 'goblinAxeman',
    nameKey: 'sigil_goblin_axeman',
    quality: 'Rare',
    image: 'source/sigil/Goblin Axeman Sigil.webp',
    stat: ''
  },
  {
    id: 'goblinPriest',
    nameKey: 'sigil_goblin_priest',
    quality: 'Rare',
    image: 'source/sigil/Goblin Priest Sigil.webp',
    stat: ''
  },
  {
    id: 'goblinSentry',
    nameKey: 'sigil_goblin_sentry',
    quality: 'Rare',
    image: 'source/sigil/Goblin Sentry Sigil.webp',
    stat: ''
  },
  {
    id: 'bluespineLizard',
    nameKey: 'sigil_bluespine_lizard',
    quality: 'Epic',
    image: 'source/sigil/Bluespine Lizard Sigil.webp',
    stat: ''
  },
  {
    id: 'emeraldCaprahorn',
    nameKey: 'sigil_emerald_caprahorn',
    quality: 'Epic',
    image: 'source/sigil/Emerald Caprahorn Sigil.webp',
    stat: ''
  },
  {
    id: 'blackstoneCommander',
    nameKey: 'sigil_blackstone_commander',
    quality: 'Epic',
    image: 'source/sigil/Blackstone Commander Sigil.webp',
    stat: ''
  },
  {
    id: 'blackfireFoxen',
    nameKey: 'sigil_blackfire_foxen',
    quality: 'Epic',
    image: 'source/sigil/Blackfire Foxen Sigil.webp',
    stat: ''
  },
  {
    id: 'gloomyCabbage',
    nameKey: 'sigil_gloomy_cabbage',
    quality: 'Epic',
    image: 'source/sigil/Gloomy Cabbage Sigil.webp',
    stat: ''
  },
  {
    id: 'blackstoneVanguard',
    nameKey: 'sigil_blackstone_vanguard',
    quality: 'Epic',
    image: 'source/sigil/Blackstone Vanguard Sigil.webp',
    stat: ''
  },
  {
    id: 'ruthlessCabbage',
    nameKey: 'sigil_ruthless_cabbage',
    quality: 'Epic',
    image: 'source/sigil/Ruthless Cabbage Sigil.webp',
    stat: ''
  },
  {
    id: 'goblinTrickster',
    nameKey: 'sigil_goblin_trickster',
    quality: 'Epic',
    image: 'source/sigil/Goblin Trickster Sigil.webp',
    stat: ''
  },
  {
    id: 'goblinShaman',
    nameKey: 'sigil_goblin_shaman',
    quality: 'Epic',
    image: 'source/sigil/Goblin Shaman Sigil.webp',
    stat: ''
  },
  {
    id: 'basilisk',
    nameKey: 'sigil_basilisk',
    quality: 'Legendary',
    image: 'source/sigil/Basilisk Sigil.webp',
    stat: ''
  },
  {
    id: 'goblinChief',
    nameKey: 'sigil_goblin_chief',
    quality: 'Legendary',
    image: 'source/sigil/Goblin Chief Sigil.webp',
    stat: ''
  },
  {
    id: 'crimsonFoxen',
    nameKey: 'sigil_crimson_foxen',
    quality: 'Legendary',
    image: 'source/sigil/Crimson Foxen Sigil.webp',
    stat: ''
  },
  {
    id: 'cabbageKingpin',
    nameKey: 'sigil_cabbage_kingpin',
    quality: 'Legendary',
    image: 'source/sigil/Cabbage Kingpin Sigil.webp',
    stat: ''
  },
  {
    id: 'blackstoneCaptain',
    nameKey: 'sigil_blackstone_captain',
    quality: 'Legendary',
    image: 'source/sigil/Blackstone Captain Sigil.webp',
    stat: ''
  },
  {
    id: 'flamehorn',
    nameKey: 'sigil_flamehorn',
    quality: 'Legendary',
    image: 'source/sigil/Flamehorn Sigil.webp',
    stat: ''
  },
  {
    id: 'caprahornBloomSteel',
    nameKey: 'sigil_caprahorn_bloom_steel',
    quality: 'Mythic',
    image: 'source/sigil/Caprahorn - Bloom & Steel Sigil.webp',
    stat: ''
  },
  {
    id: 'witheredBloomshard',
    nameKey: 'sigil_withered_bloomshard',
    quality: 'Mythic',
    image: 'source/sigil/Withered Bloomshard Sigil.webp',
    stat: ''
  },
  {
    id: 'erosionBloomAfterimage',
    nameKey: 'sigil_erosion_bloom_afterimage',
    quality: 'Mythic',
    image: 'source/sigil/Erosion Bloom Afterimage Sigil.webp',
    stat: ''
  },
  {
    id: 'infernalArachnocrab',
    nameKey: 'sigil_infernal_arachnocrab',
    quality: 'Rare',
    image: 'source/sigil/Infernal Arachnocrab Sigil.webp',
    stat: ''
  },
  {
    id: 'wastelandArachnocrab',
    nameKey: 'sigil_wasteland_arachnocrab',
    quality: 'Rare',
    image: 'source/sigil/Wasteland Arachnocrab Sigil.webp',
    stat: ''
  },
  {
    id: 'sandstoneYeti',
    nameKey: 'sigil_sandstone_yeti',
    quality: 'Rare',
    image: 'source/sigil/Sandstone Yeti Sigil.webp',
    stat: ''
  },
  {
    id: 'ashenYeti',
    nameKey: 'sigil_ashen_yeti',
    quality: 'Rare',
    image: 'source/sigil/Ashen Yeti Sigil.webp',
    stat: ''
  },
  {
    id: 'wildMountainBoar',
    nameKey: 'sigil_wild_mountain_boar',
    quality: 'Rare',
    image: 'source/sigil/Wild Mountain Boar Sigil.webp',
    stat: ''
  },
  {
    id: 'hunterMountainBoar',
    nameKey: 'sigil_hunter_mountain_boar',
    quality: 'Rare',
    image: 'source/sigil/Hunter Mountain Boar Sigil.webp',
    stat: ''
  },
  {
    id: 'gnashingFurball',
    nameKey: 'sigil_gnashing_furball',
    quality: 'Rare',
    image: 'source/sigil/Gnashing Furball Sigil.webp',
    stat: ''
  },
  {
    id: 'spikyFurball',
    nameKey: 'sigil_spiky_furball',
    quality: 'Rare',
    image: 'source/sigil/Spiky Furball Sigil.webp',
    stat: ''
  },
  {
    id: 'patrollingOculoid',
    nameKey: 'sigil_patrolling_oculoid',
    quality: 'Rare',
    image: 'source/sigil/Patrolling Oculoid Sigil.webp',
    stat: ''
  },
  {
    id: 'mechcoreOculoid',
    nameKey: 'sigil_mechcore_oculoid',
    quality: 'Rare',
    image: 'source/sigil/Mechcore Oculoid Sigil.webp',
    stat: ''
  },
  {
    id: 'killerArachnocrab',
    nameKey: 'sigil_killer_arachnocrab',
    quality: 'Epic',
    image: 'source/sigil/Killer Arachnocrab Sigil.webp',
    stat: ''
  },
  {
    id: 'dogorman',
    nameKey: 'sigil_dogorman',
    quality: 'Epic',
    image: 'source/sigil/Dogorman Sigil.webp',
    stat: ''
  },
  {
    id: 'verdantFang',
    nameKey: 'sigil_verdant_fang',
    quality: 'Epic',
    image: 'source/sigil/Verdant Fang Sigil.webp',
    stat: ''
  },
  {
    id: 'manEatingFurball',
    nameKey: 'sigil_man_eating_furball',
    quality: 'Epic',
    image: 'source/sigil/Man-Eating Furball Sigil.webp',
    stat: ''
  },
  {
    id: 'sanctuaryEye',
    nameKey: 'sigil_sanctuary_eye',
    quality: 'Epic',
    image: 'source/sigil/Sanctuary Eye Sigil.webp',
    stat: ''
  },
  {
    id: 'predatorArachnocrab',
    nameKey: 'sigil_predator_arachnocrab',
    quality: 'Legendary',
    image: 'source/sigil/Predator Arachnocrab Sigil.webp',
    stat: ''
  },
  {
    id: 'rebelKing',
    nameKey: 'sigil_rebel_king',
    quality: 'Legendary',
    image: 'source/sigil/Rebel King Sigil.webp',
    stat: ''
  },
  {
    id: 'ridgeFang',
    nameKey: 'sigil_ridge_fang',
    quality: 'Legendary',
    image: 'source/sigil/Ridge Fang Sigil.webp',
    stat: ''
  },
  {
    id: 'bloodthirstyFurball',
    nameKey: 'sigil_bloodthirsty_furball',
    quality: 'Legendary',
    image: 'source/sigil/Bloodthirsty Furball Sigil.webp',
    stat: ''
  },
  {
    id: 'voidWatcher',
    nameKey: 'sigil_void_watcher',
    quality: 'Legendary',
    image: 'source/sigil/Void Watcher Sigil.webp',
    stat: ''
  },
  {
    id: 'paradoxCalamityRemnantOrigin',
    nameKey: 'sigil_paradox_calamity_remnant_origin',
    quality: 'Mythic',
    image: 'source/sigil/Paradox-Calamity Remnant - Origin Sigil.webp',
    stat: ''
  },
  {
    id: 'paradoxCalamityRemnantContinuation',
    nameKey: 'sigil_paradox_calamity_remnant_continuation',
    quality: 'Mythic',
    image: 'source/sigil/Paradox-Calamity Remnant - Continuation Sigil.webp',
    stat: ''
  },
  {
    id: 'paradoxCalamityRemnantFinal',
    nameKey: 'sigil_paradox_calamity_remnant_final',
    quality: 'Mythic',
    image: 'source/sigil/Paradox-Calamity Remnant - Final Sigil.webp',
    stat: ''
  }
];

const dungeonData = [
    { name: 'Void – Towering Ruin', image: 'source/DG/Void – Towering Ruin.webp', drops: ['bota', 'amuleto'] },
    { name: 'Mech Facility', image: 'source/DG/Mech Facility.webp', drops: ['head', 'collar'] },
    { name: 'Cursed Radiant Tomb', image: 'source/DG/Cursed Radiant Tomb.webp', drops: ['guante', 'arete'] },
    { name: 'Sea-Ringed Reef', image: 'source/DG/Sea-Ringed Reef.webp', drops: ['weapon'] },
    { name: 'Mistveil Hunting Ground', image: 'source/DG/Mistveil Hunting Ground.webp', drops: ['brazaleteR', 'brazaleteL'] },
    { name: 'Void - Tina\'s Mindrealm', image: 'source/DG/Void - Tina\'s Mindrealm.webp', drops: ['armor', 'anillo'] }
];

// Stats que NO están permitidos por Build
const bannedStats = {
    strength: { head: ['versatilidad'], armor: ['suerte'], guante: ['presteza'], bota: ['maestria'], arete: ['maestria'], collar: ['presteza'], anillo: ['suerte'], brazaleteL: ['critico'], brazaleteR: ['critico'], amuleto: ['versatilidad'], weapon: [] },
    intelligence: { head: ['critico'], armor: ['critico'], guante: ['versatilidad'], bota: ['suerte'], arete: ['versatilidad'], collar: ['suerte'], anillo: ['maestria'], brazaleteL: ['presteza'], brazaleteR: ['maestria'], amuleto: ['presteza'], weapon: [] },
    agility: { head: ['presteza'], armor: ['maestria'], guante: ['critico'], bota: ['critico'], arete: ['presteza'], collar: ['maestria'], anillo: ['versatilidad'], brazaleteL: ['versatilidad'], brazaleteR: ['suerte'], amuleto: ['suerte'], weapon: [] }
};

// Atributos raros por pieza. Nota: Estos se mantienen en string, pero podrías añadirlos a i18n.js en un futuro.
const rareStatsData = {
    strength: {
        weapon: ['ATK 3.5%', 'Attack Speed 3.5%', 'Resilience Break Efficiency 7%', 'DMG vs Bosses 3.5%'],
        head: ['Cast Speed 2%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 2%'],
        armor: ['Shield 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 2%'],
        guante: ['Attack Speed 1%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 2%'],
        bota: ['Movement Speed 1%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 2%'],
        arete: ['ATK 2%', 'Attack Speed 2%', 'Resilience Break Efficiency 9%', 'DMG vs Bosses 2%'],
        collar: ['ATK 2%', 'Attack Speed 2%', 'Resilience Break Efficiency 9%', 'DMG vs Bosses 2%'],
        anillo: ['ATK 2%', 'Attack Speed 2%', 'Resilience Break Efficiency 9%', 'DMG vs Bosses 2%'],
        brazaleteL: ['Healing Output 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        brazaleteR: ['Healing Output 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        amuleto: ['ATK 2%', 'Attack Speed 2%', 'Resilience Break Efficiency 9%', 'DMG vs Bosses 2%']
    },
    // ... (Mantén aquí Intelligence y Agility como los tenías)
    intelligence: {
        weapon: ['MATK 3.5%', 'Attack Speed 3.5%', 'Cast Speed 7%', 'DMG vs Bosses 3.5%'],
        head: ['Cast Speed 2%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 2%'],
        armor: ['Shield 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 2%'],
        guante: ['Attack Speed 1%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 2%'],
        bota: ['Movement Speed 1%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 2%'],
        arete: ['MATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%'],
        collar: ['MATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%'],
        anillo: ['MATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%'],
        brazaleteL: ['Healing Output 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        brazaleteR: ['Healing Output 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        amuleto: ['MATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%']
    },
    agility: {
        weapon: ['ATK 3.5%', 'Attack Speed 3.5%', 'Cast Speed 7%', 'DMG vs Bosses 3.5%'],
        head: ['Cast Speed 2%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 2%'],
        armor: ['Shield 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 2%'],
        guante: ['Attack Speed 1%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 2%'],
        bota: ['Movement Speed 1%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 2%'],
        arete: ['ATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%'],
        collar: ['ATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%'],
        anillo: ['ATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%'],
        brazaleteL: ['Healing Output 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        brazaleteR: ['Healing Output 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        amuleto: ['ATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%']
    }
};