// Base de datos de Items, Stats y Mazmorras
const gearData = [
    // Void - Tina's Mindrealm
    { id: 'armor', nameKey: 'gear_armor', image: 'source/gear/armor.webp' },
    { id: 'anillo', nameKey: 'gear_anillo', image: 'source/gear/anillo.webp' },
    
    // Cursed Radiant Tomb
    { id: 'guante', nameKey: 'gear_guante', image: 'source/gear/guante.webp' },
    { id: 'arete', nameKey: 'gear_arete', image: 'source/gear/arete.webp' },
    
    // Mech Facility
    { id: 'head', nameKey: 'gear_head', image: 'source/gear/head.webp' },
    { id: 'collar', nameKey: 'gear_collar', image: 'source/gear/collar.webp' },
    
    // Mistveil Hunting Ground
    { id: 'brazaleteR', nameKey: 'gear_brazaleteR', image: 'source/gear/brazaleteR.webp' },
    { id: 'brazaleteL', nameKey: 'gear_brazaleteL', image: 'source/gear/brazaleteL.webp' },
    
    // Void – Towering Ruin
    { id: 'bota', nameKey: 'gear_bota', image: 'source/gear/bota.webp' },
    { id: 'amuleto', nameKey: 'gear_amuleto', image: 'source/gear/amuleto.webp' },
    
    // Sea-Ringed Reef
    { id: 'weapon', nameKey: 'gear_weapon', image: 'source/gear/weapon.webp' }
];

const sigilData = [
  {
    id: 'cabbageKiller',
    nameKey: 'sigil_cabbage_killer',
    quality: 'Rare',
    image: 'source/sigil/Cabbage Killer Sigil.webp',
    stat: 'Crit 200'
  },
  {
    id: 'wastelandFoxen',
    nameKey: 'sigil_wasteland_foxen',
    quality: 'Rare',
    image: 'source/sigil/Wasteland Foxen Sigil.webp',
    stat: 'Haste +200'
  },
  {
    id: 'cabbageToughGuy',
    nameKey: 'sigil_cabbage_tough_guy',
    quality: 'Rare',
    image: 'source/sigil/Cabbage Tough Guy Sigil.webp',
    stat: 'Luck +200'
  },
  {
    id: 'glimmerCaprahorn',
    nameKey: 'sigil_glimmer_caprahorn',
    quality: 'Rare',
    image: 'source/sigil/Glimmer Caprahorn Sigil.webp',
    stat: 'Mastery +200'
  },
  {
    id: 'cabbageBlaster',
    nameKey: 'sigil_cabbage_blaster',
    quality: 'Rare',
    image: 'source/sigil/Cabbage Blaster Sigil.webp',
    stat: 'Versatility +200'
  },
  {
    id: 'netherCaprahorn',
    nameKey: 'sigil_nether_caprahorn',
    quality: 'Rare',
    image: 'source/sigil/Nether Caprahorn Sigil.webp',
    stat: 'Endurance +50',
    stat2: 'Strength +15'
  },
  {
    id: 'cabbageHunter',
    nameKey: 'sigil_cabbage_hunter',
    quality: 'Rare',
    image: 'source/sigil/Cabbage Hunter Sigil.webp',
    stat: 'Endurance +50',
    stat2: 'Intellect +15'
  },
  {
    id: 'foxen',
    nameKey: 'sigil_foxen',
    quality: 'Rare',
    image: 'source/sigil/Foxen Sigil.webp',
    stat: 'Endurance +50',
    stat2: 'Agility +15'
  },
  {
    id: 'frostLizard',
    nameKey: 'sigil_frost_lizard',
    quality: 'Rare',
    image: 'source/sigil/Frost Lizard Sigil.webp',
    stat: 'Strength +12',
    stat2: 'Crit +140'
  },
  {
    id: 'magmaLizard',
    nameKey: 'sigil_magma_lizard',
    quality: 'Rare',
    image: 'source/sigil/Magma Lizard Sigil.webp',
    stat: 'Strength +12',
    stat2: 'Haste +140'
  },
  {
    id: 'galeLizard',
    nameKey: 'sigil_gale_lizard',
    quality: 'Rare',
    image: 'source/sigil/Gale Lizard Sigil.webp',
    stat: 'Strength +12',
    stat2: 'Luck +140'
  },
  {
    id: 'lightningLizard',
    nameKey: 'sigil_lightning_lizard',
    quality: 'Rare',
    image: 'source/sigil/Lightning Lizard Sigil.webp',
    stat: 'Strength +12',
    stat2: 'Mastery +140'
  },
  {
    id: 'blackstoneMarksman',
    nameKey: 'sigil_blackstone_marksman',
    quality: 'Rare',
    image: 'source/sigil/Blackstone Marksman Sigil.webp',
    stat: 'Intellect +12',
    stat2: 'Crit +140'
  },
  {
    id: 'blackstoneGuard',
    nameKey: 'sigil_blackstone_guard',
    quality: 'Rare',
    image: 'source/sigil/Blackstone Guard Sigil.webp',
    stat: 'Intellect +12',
    stat2: 'Haste +140'
  },
  {
    id: 'blackstoneWarrior',
    nameKey: 'sigil_blackstone_warrior',
    quality: 'Rare',
    image: 'source/sigil/Blackstone Warrior Sigil.webp',
    stat: 'Intellect +12',
    stat2: 'Luck +140'
  },
  {
    id: 'blackstoneAssaulter',
    nameKey: 'sigil_blackstone_assaulter',
    quality: 'Rare',
    image: 'source/sigil/Blackstone Assaulter Sigil.webp',
    stat: 'Intellect +12',
    stat2: 'Mastery +140'
  },
  {
    id: 'goblinWarrior',
    nameKey: 'sigil_goblin_warrior',
    quality: 'Rare',
    image: 'source/sigil/Goblin Warrior Sigil.webp',
    stat: 'Agility +12',
    stat2: 'Crit +140'
  },
  {
    id: 'goblinAxeman',
    nameKey: 'sigil_goblin_axeman',
    quality: 'Rare',
    image: 'source/sigil/Goblin Axeman Sigil.webp',
    stat: 'Agility +12',
    stat2: 'Haste +140'
  },
  {
    id: 'goblinPriest',
    nameKey: 'sigil_goblin_priest',
    quality: 'Rare',
    image: 'source/sigil/Goblin Priest Sigil.webp',
    stat: 'Agility +12',
    stat2: 'Luck +140'
  },
  {
    id: 'goblinSentry',
    nameKey: 'sigil_goblin_sentry',
    quality: 'Rare',
    image: 'source/sigil/Goblin Sentry Sigil.webp',
    stat: 'Agility +12',
    stat2: 'Mastery +140'
  },
  {
    id: 'bluespineLizard',
    nameKey: 'sigil_bluespine_lizard',
    quality: 'Epic',
    image: 'source/sigil/Bluespine Lizard Sigil.webp',
    stat: 'All Element Attack +20'
  },
  {
    id: 'emeraldCaprahorn',
    nameKey: 'sigil_emerald_caprahorn',
    quality: 'Epic',
    image: 'source/sigil/Emerald Caprahorn Sigil.webp',
    stat: 'Endurance +80',
    stat2: 'Strength +25'
  },
  {
    id: 'blackstoneCommander',
    nameKey: 'sigil_blackstone_commander',
    quality: 'Epic',
    image: 'source/sigil/Blackstone Commander Sigil.webp',
    stat: 'Endurance +80',
    stat2: 'Intellect +25'
  },
  {
    id: 'blackfireFoxen',
    nameKey: 'sigil_blackfire_foxen',
    quality: 'Epic',
    image: 'source/sigil/Blackfire Foxen Sigil.webp',
    stat: 'Endurance +80',
    stat2: 'Agility +25'
  },
  {
    id: 'gloomyCabbage',
    nameKey: 'sigil_gloomy_cabbage',
    quality: 'Epic',
    image: 'source/sigil/Gloomy Cabbage Sigil.webp',
    stat: 'Crit 300'
  },
  {
    id: 'blackstoneVanguard',
    nameKey: 'sigil_blackstone_vanguard',
    quality: 'Epic',
    image: 'source/sigil/Blackstone Vanguard Sigil.webp',
    stat: 'Haste +300'
  },
  {
    id: 'ruthlessCabbage',
    nameKey: 'sigil_ruthless_cabbage',
    quality: 'Epic',
    image: 'source/sigil/Ruthless Cabbage Sigil.webp',
    stat: 'Luck +300'
  },
  {
    id: 'goblinTrickster',
    nameKey: 'sigil_goblin_trickster',
    quality: 'Epic',
    image: 'source/sigil/Goblin Trickster Sigil.webp',
    stat: 'Mastery +300'
  },
  {
    id: 'goblinShaman',
    nameKey: 'sigil_goblin_shaman',
    quality: 'Epic',
    image: 'source/sigil/Goblin Shaman Sigil.webp',
    stat: 'Versatility +300'
  },
  {
    id: 'basilisk',
    nameKey: 'sigil_basilisk',
    quality: 'Legendary',
    image: 'source/sigil/Basilisk Sigil.webp',
    stat: 'All Element Attack +40'
  },
  {
    id: 'goblinChief',
    nameKey: 'sigil_goblin_chief',
    quality: 'Legendary',
    image: 'source/sigil/Goblin Chief Sigil.webp',
    stat: 'Crit 500'
  },
  {
    id: 'crimsonFoxen',
    nameKey: 'sigil_crimson_foxen',
    quality: 'Legendary',
    image: 'source/sigil/Crimson Foxen Sigil.webp',
    stat: 'Haste +500'
  },
  {
    id: 'cabbageKingpin',
    nameKey: 'sigil_cabbage_kingpin',
    quality: 'Legendary',
    image: 'source/sigil/Cabbage Kingpin Sigil.webp',
    stat: 'Luck +500'
  },
  {
    id: 'blackstoneCaptain',
    nameKey: 'sigil_blackstone_captain',
    quality: 'Legendary',
    image: 'source/sigil/Blackstone Captain Sigil.webp',
    stat: 'Mastery +500'
  },
  {
    id: 'flamehorn',
    nameKey: 'sigil_flamehorn',
    quality: 'Legendary',
    image: 'source/sigil/Flamehorn Sigil.webp',
    stat: 'Versatility +500'
  },
  {
    id: 'caprahornBloomSteel',
    nameKey: 'sigil_caprahorn_bloom_steel',
    quality: 'Mythic',
    image: 'source/sigil/Caprahorn - Bloom & Steel Sigil.webp',
    stat: 'All Element Attack +40',
    stat2: 'Strength +50'
  },
  {
    id: 'witheredBloomshard',
    nameKey: 'sigil_withered_bloomshard',
    quality: 'Mythic',
    image: 'source/sigil/Withered Bloomshard Sigil.webp',
    stat: 'All Element Attack +40',
    stat2: 'Intellect +50'
  },
  {
    id: 'erosionBloomAfterimage',
    nameKey: 'sigil_erosion_bloom_afterimage',
    quality: 'Mythic',
    image: 'source/sigil/Erosion Bloom Afterimage Sigil.webp',
    stat: 'All Element Attack +40',
    stat2: 'Agility +50'
  },
  {
    id: 'infernalArachnocrab',
    nameKey: 'sigil_infernal_arachnocrab',
    quality: 'Rare',
    image: 'source/sigil/Infernal Arachnocrab Sigil.webp',
    stat: 'ATK +38'
  },
  {
    id: 'wastelandArachnocrab',
    nameKey: 'sigil_wasteland_arachnocrab',
    quality: 'Rare',
    image: 'source/sigil/Wasteland Arachnocrab Sigil.webp',
    stat: 'MATK +38'
  },
  {
    id: 'sandstoneYeti',
    nameKey: 'sigil_sandstone_yeti',
    quality: 'Rare',
    image: 'source/sigil/Sandstone Yeti Sigil.webp',
    stat: 'Strength +60',
    stat2: 'Endurance +195'
  },
  {
    id: 'ashenYeti',
    nameKey: 'sigil_ashen_yeti',
    quality: 'Rare',
    image: 'source/sigil/Ashen Yeti Sigil.webp',
    stat: 'Intellect +60',
    stat2: 'Endurance +195'
  },
  {
    id: 'wildMountainBoar',
    nameKey: 'sigil_wild_mountain_boar',
    quality: 'Rare',
    image: 'source/sigil/Wild Mountain Boar Sigil.webp',
    stat: 'Agility +60',
    stat2: 'Endurance +195'
  },
  {
    id: 'hunterMountainBoar',
    nameKey: 'sigil_hunter_mountain_boar',
    quality: 'Rare',
    image: 'source/sigil/Hunter Mountain Boar Sigil.webp',
    stat: 'Crit +620'
  },
  {
    id: 'gnashingFurball',
    nameKey: 'sigil_gnashing_furball',
    quality: 'Rare',
    image: 'source/sigil/Gnashing Furball Sigil.webp',
    stat: 'Haste +620'
  },
  {
    id: 'spikyFurball',
    nameKey: 'sigil_spiky_furball',
    quality: 'Rare',
    image: 'source/sigil/Spiky Furball Sigil.webp',
    stat: 'Luck +620'
  },
  {
    id: 'patrollingOculoid',
    nameKey: 'sigil_patrolling_oculoid',
    quality: 'Rare',
    image: 'source/sigil/Patrolling Oculoid Sigil.webp',
    stat: 'Mastery +620'
  },
  {
    id: 'mechcoreOculoid',
    nameKey: 'sigil_mechcore_oculoid',
    quality: 'Rare',
    image: 'source/sigil/Mechcore Oculoid Sigil.webp',
    stat: 'Versatility +620'
  },
  {
    id: 'killerArachnocrab',
    nameKey: 'sigil_killer_arachnocrab',
    quality: 'Epic',
    image: 'source/sigil/Killer Arachnocrab Sigil.webp',
    stat: 'Endurance +235',
    stat2: 'Adaptive Strength/Intellect/Agility +70'
  },
  {
    id: 'dogorman',
    nameKey: 'sigil_dogorman',
    quality: 'Epic',
    image: 'source/sigil/Dogorman Sigil.webp',
    stat: 'Crit +750',
    stat2: 'Versatility +620'
  },
  {
    id: 'verdantFang',
    nameKey: 'sigil_verdant_fang',
    quality: 'Epic',
    image: 'source/sigil/Verdant Fang Sigil.webp',
    stat: 'Haste +750',
    stat2: 'Versatility +620'
  },
  {
    id: 'manEatingFurball',
    nameKey: 'sigil_man_eating_furball',
    quality: 'Epic',
    image: 'source/sigil/Man-Eating Furball Sigil.webp',
    stat: 'Luck +750',
    stat2: 'Versatility +620'
  },
  {
    id: 'sanctuaryEye',
    nameKey: 'sigil_sanctuary_eye',
    quality: 'Epic',
    image: 'source/sigil/Sanctuary Eye Sigil.webp',
    stat: 'MASTERY +750',
    stat2: 'Versatility +620'
  },
  {
    id: 'predatorArachnocrab',
    nameKey: 'sigil_predator_arachnocrab',
    quality: 'Legendary',
    image: 'source/sigil/Predator Arachnocrab Sigil.webp',
    stat: 'All Element Attack +66'
  },
  {
    id: 'rebelKing',
    nameKey: 'sigil_rebel_king',
    quality: 'Legendary',
    image: 'source/sigil/Rebel King Sigil.webp',
    stat: 'Crit +1010',
    stat2: 'Versatility +880'
  },
  {
    id: 'ridgeFang',
    nameKey: 'sigil_ridge_fang',
    quality: 'Legendary',
    image: 'source/sigil/Ridge Fang Sigil.webp',
    stat: 'Haste +1010',
    stat2: 'Versatility +880'
  },
  {
    id: 'bloodthirstyFurball',
    nameKey: 'sigil_bloodthirsty_furball',
    quality: 'Legendary',
    image: 'source/sigil/Bloodthirsty Furball Sigil.webp',
    stat: 'Luck +1010',
    stat2: 'Versatility +880'
  },
  {
    id: 'voidWatcher',
    nameKey: 'sigil_void_watcher',
    quality: 'Legendary',
    image: 'source/sigil/Void Watcher Sigil.webp',
    stat: 'Mastery +1010',
    stat2: 'Versatility +880'
  },
  {
    id: 'paradoxCalamityRemnantOrigin',
    nameKey: 'sigil_paradox_calamity_remnant_origin',
    quality: 'Mythic',
    image: 'source/sigil/Paradox-Calamity Remnant - Origin Sigil.webp',
    stat: 'All Element Attack +72',
    stat2: 'Strength +95'
  },
  {
    id: 'paradoxCalamityRemnantContinuation',
    nameKey: 'sigil_paradox_calamity_remnant_continuation',
    quality: 'Mythic',
    image: 'source/sigil/Paradox-Calamity Remnant - Continuation Sigil.webp',
    stat: 'All Element Attack +72',
    stat2: 'Intellect +95'
  },
  {
    id: 'paradoxCalamityRemnantFinal',
    nameKey: 'sigil_paradox_calamity_remnant_final',
    quality: 'Mythic',
    image: 'source/sigil/Paradox-Calamity Remnant - Final Sigil.webp',
    stat: 'All Element Attack +72',
    stat2: 'Agility +95'
  }
];

const dungeonData = [
    { name: 'Void – Towering Ruin', image: 'source/DG/Void – Towering Ruin.png', drops: ['bota', 'amuleto'] },
    { name: 'Mech Facility', image: 'source/DG/Mech Facility.png', drops: ['head', 'collar'] },
    { name: 'Cursed Radiant Tomb', image: 'source/DG/Cursed Radiant Tomb.png', drops: ['guante', 'arete'] },
    { name: 'Sea-Ringed Reef', image: 'source/DG/Sea-Ringed Reef.png', drops: ['weapon'] },
    { name: 'Mistveil Hunting Ground', image: 'source/DG/Mistveil Hunting Ground.png', drops: ['brazaleteR', 'brazaleteL'] },
    { name: 'Void - Tina\'s Mindrealm', image: 'source/DG/Void - Tina\'s Mindrealm.png', drops: ['armor', 'anillo'] }
];

// Stats que NO están permitidos por Build
const bannedStats = {
    strength: { head: ['versatilidad'], armor: ['suerte'], guante: ['presteza'], bota: ['maestria'], arete: ['maestria'], collar: ['presteza'], anillo: ['suerte'], brazaleteL: ['critico'], brazaleteR: ['critico'], amuleto: ['versatilidad'], weapon: [] },
    intelligence: { head: ['critico'], armor: ['critico'], guante: ['versatilidad'], bota: ['suerte'], arete: ['versatilidad'], collar: ['suerte'], anillo: ['maestria'], brazaleteL: ['presteza'], brazaleteR: ['maestria'], amuleto: ['presteza'], weapon: [] },
    agility: { head: ['presteza'], armor: ['maestria'], guante: ['critico'], bota: ['critico'], arete: ['presteza'], collar: ['maestria'], anillo: ['versatilidad'], brazaleteL: ['versatilidad'], brazaleteR: ['suerte'], amuleto: ['suerte'], weapon: [] }
};

const _rareLv220 = {
    strength: {
        weapon: ['ATK 3.5%', 'Attack Speed 3.5%', 'Resilience Break Efficiency 18%', 'DMG vs Bosses 3.5%'],
        head: ['Cast Speed 2%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        armor: ['Shield 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        guante: ['Attack Speed 1%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        bota: ['Movement Speed 1%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        arete: ['ATK 2%', 'Attack Speed 2%', 'Resilience Break Efficiency 9%', 'DMG vs Bosses 2%'],
        collar: ['ATK 2%', 'Attack Speed 2%', 'Resilience Break Efficiency 9%', 'DMG vs Bosses 2%'],
        anillo: ['ATK 2%', 'Attack Speed 2%', 'Resilience Break Efficiency 9%', 'DMG vs Bosses 2%'],
        brazaleteL: ['Healing Output 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        brazaleteR: ['Healing Output 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        amuleto: ['ATK 2%', 'Attack Speed 2%', 'Resilience Break Efficiency 9%', 'DMG vs Bosses 2%']
    },
    intelligence: {
        weapon: ['MATK 3.5%', 'Attack Speed 3.5%', 'Cast Speed 7%', 'DMG vs Bosses 3.5%'],
        head: ['Cast Speed 2%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        armor: ['Shield 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        guante: ['Attack Speed 1%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        bota: ['Movement Speed 1%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        arete: ['MATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%'],
        collar: ['MATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%'],
        anillo: ['MATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%'],
        brazaleteL: ['Healing Output 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        brazaleteR: ['Healing Output 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        amuleto: ['MATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%']
    },
    agility: {
        weapon: ['ATK 3.5%', 'Attack Speed 3.5%', 'Cast Speed 7%', 'DMG vs Bosses 3.5%'],
        head: ['Cast Speed 2%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        armor: ['Shield 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        guante: ['Attack Speed 1%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        bota: ['Movement Speed 1%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        arete: ['ATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%'],
        collar: ['ATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%'],
        anillo: ['ATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%'],
        brazaleteL: ['Healing Output 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        brazaleteR: ['Healing Output 4%', 'Max HP 4000', 'Armor 240', 'All Elemental Resistance 120'],
        amuleto: ['ATK 2%', 'Attack Speed 2%', 'Cast Speed 4%', 'DMG vs Bosses 2%']
    }
};

function _scaleRareStats(base, level) {
    const s = {
        Lv240: { hp: '5000', armor: '320', resist: '160' },
        Lv260: { hp: '6000', armor: '400', resist: '200', iw2: 'Resilience Break Efficiency 7%', aw2: 'Resilience Break Efficiency 7%' }
    }[level];
    if (!s) return base;
    const r = {};
    for (const b in base) {
        r[b] = {};
        for (const slot in base[b]) {
            r[b][slot] = base[b][slot].map(v => {
                if (v.startsWith('Max HP')) return `Max HP ${s.hp}`;
                if (v.startsWith('Armor ')) return `Armor ${s.armor}`;
                if (v.startsWith('All Elemental Resistance')) return `All Elemental Resistance ${s.resist}`;
                return v;
            });
        }
    }
    if (s.iw2) r.intelligence.weapon[2] = s.iw2;
    if (s.aw2) r.agility.weapon[2] = s.aw2;
    return r;
}

const rareStatsData = {
    Lv220: _rareLv220,
    Lv240: _scaleRareStats(_rareLv220, 'Lv240'),
    Lv260: _scaleRareStats(_rareLv220, 'Lv260')
};

// Base de datos de Sets de Raid
const raidSetsData = [
  {
    id: "shield",
    name: { en: "Shield", es: "Escudo" },
    stats: { en: "Haste - Mastery", es: "Presteza - Maestría" },
    image: "source/spec/Shield Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "When you have more than one Lightforged Barrier, DMG taken -2%, when you lose a Lightforged Barrier, there is a 50% chance to reduce DMG taken by an additional 1% for 6s, stacking up to 3 times.", piece4: "Each Lightforged Barrier increases your DMG by 1%, When the number of Lightforged Barrier drops below 6, there is a 50% chance to generate 1 or 2 Lightforged Barrier when taking DMG." },
          es: { piece2: "Con más de una Barrera Lumínica, el DÑO recibido se reduce en un 2 %. Al perder una Barrera Lumínica, hay un 50 % de probabilidad de reducir el DÑO recibido en un 1 % adicional durante 6 s (se acumula hasta 3 veces).", piece4: "Cada Barrera Lumiforjada aumenta el DÑO en un 1 %. Si la cantidad de Barreras Lumínicas cae por debajo de 6, hay un 50 % de probabilidad de generar 1 o 2 Barreras Lumínicas al recibir DÑO." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "Each stack of Lightforged Barrier reduces damage taken by 0.5% and increases Strength by 1%. Casting Judgment immediately grants 1 stack of Lightforged Barrier.", piece4: "For every 15 stacks of LightForged Barrier consumed, gain Damage +10% and Haste +6% for 7s." },
          es: { piece2: "Cada acumulación de Barrera Lumiforjada reduce el daño recibido un 0.5 % y aumenta la fuerza un 1 %. Lanzar Juicio otorga de inmediato 1 acumulación de Barrera Lumiforjada.", piece4: "Por cada 15 acumulaciones de Barrera Lumiforjada consumidas, se obtiene daño +10 % y presteza +6 % durante 7 s." }
        }
      }
    }
  },
  {
    id: "recovery",
    name: { en: "Recovery", es: "Protección y Recuperación" },
    stats: { en: "Crit - Mastery", es: "Crítico - Maestría" },
    image: "source/spec/Recovery Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "Increases Valor Bash DMG by 10% and provides additional 3% Armor for each stack.", piece4: "Casting a skill that consumes Holy Sigil grants you a bonus 1% DMG dealt and 0.5% healing received during your next Aegis Ward, stacking up to 20 times." },
          es: { piece2: "Aumenta el DÑO de Golpe del Valor en un 10 % y otorga un 3 % de armadura adicional por cada acumulación.", piece4: "Lanzar una habilidad que consuma sello sagrado otorga como bonus un 1 % de DÑO infligido y un 0.5 % de curación recibida durante la próxima Protección de Égida (se acumula hasta 20 veces)." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "Casting Reckoning or Inferno Reckon grants Glimmering: Damage +8%, Armor +12% for 5s.", piece4: "While Aegis Ward is active, Glimmering effects are doubled and additionally convert 20% of damage dealt into a Radiant Shield." },
          es: { piece2: "Lanzar Ajuste de Cuentas o Ajuste Infernal otorga Resplandor: daño +8 %, armadura +12 % durante 5 s.", piece4: "Mientras Protección de Égida esté activa, los efectos de Resplandor se duplican y, además, convierten el 20 % del daño infligido en un escudo radiante." }
        }
      }
    }
  },
  {
    id: "iaido_slash",
    name: { en: "Iaido Slash", es: "Corte de Iaido" },
    stats: { en: "Crit - Mastery", es: "Crítico - Maestría" },
    image: "source/spec/Iaido Slash Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "Increases Iaido Slash DMG by 10%", piece4: "Each Thunder Sigil consumed by Iaido Slash increases your DMG by 1% for 8s" },
          es: { piece2: "Aumenta el DÑO de Corte de Iaido en un 10 %.", piece4: "Cada sello del trueno consumido por Corte de Iaido aumenta el DÑO en un 1 % durante 8 s." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "When your Class Skill deals Crit DMG to the current target, Crit DMG +2% for 5s, stacking up to 5 times.", piece4: "While Volt Surge is inactive, Overdrive yields +1 Thunder Sigil." },
          es: { piece2: "Cuando la habilidad de clase inflige daño crítico al objetivo actual, el daño crítico aumenta en un 2 % durante 5 s (se acumula hasta 5 veces).", piece4: "Mientras Descarga de Voltios está inactiva, Sobretensión otorga +1 sello del trueno." }
        }
      }
    }
  },
  {
    id: "moonstrike",
    name: { en: "Moonstrike", es: "Ataque Lunar" },
    stats: { en: "Haste - Luck", es: "Presteza - Suerte" },
    image: "source/spec/Moonstrike Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "Thundercut DMG +20%", piece4: "After Moonblades trigger Lucky Strike, Luck Effect DMG increases by 10% for 6s" },
          es: { piece2: "DÑO de Corte Relámpago +20 %.", piece4: "Después de que Filo Lunar active un golpe de suerte, el DÑO del efecto de suerte aumenta en 10 % durante 6 s." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "When Attack SPD is below 80%, Attack SPD +6%; When Attack SPD is 80% or higher, Expertise Skill Thunder DMG +7%.", piece4: "After 2 uses of Divine Sickle, your next Divine Sickle triggers 1 instance of Reversal Blade, which counts as Divine Sickle." },
          es: { piece2: "Si la VEL de ATQ es inferior al 80 %, la VEL DE ATQ aumenta en un 6 %; si es del 80 % o superior, el daño atronador de la habilidad de pericia aumenta en un 7 %.", piece4: "Cada 2 usos de Hoz Divina, la siguiente Hoz Divina activa 1 instancia de Cuchilla Inversa, que cuenta como Hoz Divina." }
        }
      }
    }
  },
  {
    id: "icicle",
    name: { en: "Icicle", es: "Lanza Gélida" },
    stats: { en: "Crit - Luck", es: "Crítico - Suerte" },
    image: "source/spec/Icicle Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "After casting Crystal Veil, increasing Frost Lance DMG by 15%, lasting for 10s", piece4: "Increases Crit DMG of Frost Lance by 15%. When consuming Frost Crystal, increases Blizzard DMG by 5% for 10s, stacking up to 10 times." },
          es: { piece2: "Tras lanzar Velo de Cristal, aumenta el DÑO de Lanza Gélida en un 15 % durante 10 s.", piece4: "Aumenta el DÑO crítico de Lanza Gélida en un 15 %. Al consumirse cristal gélido, aumenta el DÑO de Ventisca en un 5 % durante 10 s (se acumula hasta 10 veces)." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "Frost Lance and Meteor Storm Crit DMG +13%. Casting Crystal Veil recovers 80 Ice Energy over 5s.", piece4: "On Crit or Lucky Strike, Frost Lance grants 1 stack of Phantom Ice. Grants 2 stacks if Crit and Lucky Strike are both triggered. At 25 stacks of Phantom Ice, Crystal Veil is automatically cast forward (up to once every 15s)." },
          es: { piece2: "Daño crítico de Lanza Gélida y Tormenta Meteórica +13 %. Lanzar Velo de Cristal recupera 80 de energía gélida durante 5 s.", piece4: "Al activar un golpe crítico o un golpe de suerte, Lanza Gélida otorga 1 acumulación de Hielo Fantasma. Otorga 2 si se activan ambos. Con 25 acumulaciones de Hielo Fantasma, se lanza Velo de Cristal automáticamente hacia delante (una vez cada 15 s como máximo)." }
        }
      }
    }
  },
  {
    id: "frostbeam",
    name: { en: "Frostbeam", es: "Rayo Gélido" },
    stats: { en: "Haste - Mastery", es: "Presteza - Maestría" },
    image: "source/spec/Frostbeam Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "Increases Frostbeam DMG by 10%, bonus DMG to primary target by 5%", piece4: "Frostbeam DMG has a 10% chance to increase your Mastery by 10% for 8s" },
          es: { piece2: "Aumenta el DÑO de Rayo Gélido en un 10 % y el bonus de DÑO al objetivo principal en un 5 %.", piece4: "El DÑO de Rayo Gélido tiene un 10 % de probabilidad de aumentar la maestría en un 10 % durante 8 s." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "Ice Arrow DMG +15% (counts toward the talent \"Frost Explosion\")", piece4: "Tidepool DMG +28% against the current target." },
          es: { piece2: "Daño de Flecha Helada +15 % (afecta al talento \"Explosión Gélida\").", piece4: "Daño de Pozo de Marea +28 % contra el objetivo actual." }
        }
      }
    }
  },
  {
    id: "vanguard",
    name: { en: "Vanguard", es: "Vanguardia" },
    stats: { en: "Haste - Mastery", es: "Presteza - Maestría" },
    image: "source/spec/Vanguard Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "Increases the DMG dealt by the Skills that consume Courage by 8%.", piece4: "When dealing DMG, each stack of Sharp you currently possess increases DMG by 1%." },
          es: { piece2: "Aumenta el DÑO infligido por las habilidades que consumen coraje en un 8 %.", piece4: "Al infligir DÑO, cada acumulación propia de Afilado aumenta el DÑO en un 1 %." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "Courage-consuming Class Skills ignore 22% of the target's Armor.", piece4: "Casting Galeform automatically triggers 1 shot of Drake Cannon. Vortex Strike now has 2 charges." },
          es: { piece2: "Las habilidades de clase que consumen coraje ignoran el 22 % de la armadura del objetivo.", piece4: "Lanzar Forma de Vendaval activa automáticamente 1 disparo de Cañón Dragontino. Ataque Torbellino ahora tiene 2 cargas." }
        }
      }
    }
  },
  {
    id: "skyward",
    name: { en: "Skyward", es: "Lanza Aérea" },
    stats: { en: "Crit - Luck", es: "Crítico - Suerte" },
    image: "source/spec/Skyward Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "Skyfall and Instant Edge gain 10% Wind DMG bonus", piece4: "Each stack of Sharp consumed increases DMG by 1% for 8s, stacking up to 6 times" },
          es: { piece2: "Colapso Celestial y Filo Instantáneo ganan 10 % de bonus de DÑO eólico.", piece4: "Cada acumulación de Afilado consumida aumenta el DÑO en un 1 % durante 8 s (se acumula hasta 6 veces)." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "After casting Galeform, the next Skyfall and Instant Edge gain Wind DMG +70%.", piece4: "Triggering a Lucky Strike reduces the remaining CD on Galeform by 0.2s (counts only once when multiple Lucky Strikes are triggered at the same time). While Galeform is active, casting Galeform again will immediately grant you the Courage to be recovered from the previous Galeform (doing this can trigger the talent \"Tempestrike\")." },
          es: { piece2: "Tras lanzar Forma de Vendaval, el siguiente Colapso Celestial o Filo Instantáneo obtiene daño eólico +70 %.", piece4: "Activar un golpe de suerte reduce en 0.2 s el TdR restante de Forma de Vendaval (solo cuenta una vez si se activan varios golpes de suerte al mismo tiempo). Mientras Forma de Vendaval está activa, volver a lanzarla otorga de inmediato todo el coraje pendiente de recuperar de la Forma de Vendaval anterior (esta acción puede activar el talento \"Golpe Tempestad\")." }
        }
      }
    }
  },
  {
    id: "smite",
    name: { en: "Smite", es: "Castigo" },
    stats: { en: "Mastery - Luck", es: "Maestría - Suerte" },
    image: "source/spec/Smite Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "Increases healing from Symbiotic Mark conversion by 4%", piece4: "Casting Wild Bloom or Feral Seed increases the DMG of your next Infusion by 20%, or increases the Shield of your next Nature Ward by 10%, stacking up to 3 times" },
          es: { piece2: "Aumenta la curación de la conversión de marca simbiótica en un 4 %.", piece4: "Lanzar Brote Salvaje o Semilla Feral aumenta el DÑO de la próxima Infusión en un 20 % o aumenta el escudo de la próxima Protección Natural en un 10 % (se acumula hasta 3 veces)." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "Feral Seed CD -25% Feral Seed elemental DMG +12%.", piece4: "While Nature Ward is active, overhealing is converted into a shield that can't exceed 50% of Max HP. Nature Ward duration +5s." },
          es: { piece2: "TdR de Semilla Feral -25 %. Daño elemental de Semilla Feral +12 %.", piece4: "Mientras Protección Natural está activa, la sobrecuración se convierte en un escudo que no puede superar el 50 % de los PS máx. Duración de Protección Natural: +5 s." }
        }
      }
    }
  },
  {
    id: "lifebind",
    name: { en: "Lifebind", es: "Vínculo Vital" },
    stats: { en: "Haste - Mastery", es: "Presteza - Maestría" },
    image: "source/spec/Lifebind Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "Increase Grove Wish Healing on the allied target with the lowest HP by 20%", piece4: "Overhealing will apply a Shield to the target, the Shield lasts for 8s, the Shield amount can stack up to a maximum of 30% of the target's HP" },
          es: { piece2: "Aumenta en un 20 % la curación de Deseo Arbolado en el objetivo aliado con menos PS.", piece4: "La sobrecuración aplica un escudo al objetivo, el escudo dura 8 s y la cantidad de escudo puede acumularse hasta igualar el 30 % de los PS del objetivo." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "Direct-healing Class Skills grant the target 1 stack of Spring Breeze: Max HP +2.5% for 10s. Stacks up to 5 times.", piece4: "At max stacks, casting any direct-Healing Class Skill converts Spring Breeze into Full Bloom: Gains a shield equal to 1200% of ATK immediately and increases the effectiveness of Inspiration by 20%. Lasts 10s." },
          es: { piece2: "Las habilidades de clase de curación directa otorgan al objetivo 1 acumulación de Brisa Primaveral: PS máx. +2.5 % durante 10 s. Se acumula hasta 5 veces.", piece4: "Con el máximo de acumulaciones, lanzar cualquier habilidad de clase de curación directa convierte Brisa Primaveral en Plena Floración: se obtiene de inmediato un escudo equivalente al 1200 % del ATQ y la efectividad de Inspiración aumenta un 20 %. Dura 10 s." }
        }
      }
    }
  },
  {
    id: "earthfort",
    name: { en: "Earthfort", es: "Escudo Rocoso" },
    stats: { en: "Mastery - Versatility", es: "Maestría - Versatilidad" },
    image: "source/spec/Earthfort Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "Shield Bash DMG +20% and creates an additional shield equal to 10% of your ATK", piece4: "When Shield Bash grants you a Shield, deals DMG equal to 3% of Max HP to enemies within 3 meters." },
          es: { piece2: "El DÑO de Golpe de Escudo aumenta en un 20 % y crea un escudo adicional igual al 10 % del ATQ propio.", piece4: "Cuando Golpe de Escudo otorga un escudo, inflige DÑO igual al 3 % de los PS máx. a los enemigos a menos de 3 m." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "DMG of Sandshroud, Star Shatter and its enhanced skill (Starfall) +35%. Class Skills have a 18% fixed chance to generate 1 Sand Crystal when dealing damage to the current target.", piece4: "DMG of Shield Bash, Rage Burst and its Enhanced skill (Terra Sunder) +25%. On hit, Shield Bash, Rage Burst and its enhanced skill (Terra Sunder) reduce the DMG the target deals to you by 5% for 8s." },
          es: { piece2: "Daño de Cubierta Arenosa, Ruptura Estelar y su habilidad mejorada (Lluvia Estelar) +35 %. Las habilidades de clase tienen una probabilidad fija del 18 % de generar 1 cristal de arena al infligir daño al objetivo actual.", piece4: "Daño de Golpe de Escudo, Estallido de Furia y su habilidad mejorada (Desgarro Terrestre) +25 %. Al acertar, Golpe de Escudo, Estallido de Furia y su habilidad mejorada (Desgarro Terrestre) reducen en un 5 % el daño que el objetivo inflige al aventurero durante 8 s." }
        }
      }
    }
  },
  {
    id: "block",
    name: { en: "Block", es: "Bloqueo" },
    stats: { en: "Mastery - Luck", es: "Maestría - Suerte" },
    image: "source/spec/Block Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "While in Countercrush state, increases Armor by 20%", piece4: "Granite Fury has a 30% chance to trigger Weakness Strike" },
          es: { piece2: "En el estado Contrachoque, aumenta la armadura en un 20 %.", piece4: "Furia de Granito tiene un 30 % de probabilidad de activar Golpe a la Debilidad." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "While Sandshroud is active, DMG of Granite Fury and its enhanced skill (Stone Fist) +50%. When Sandshroud deals damage to the current target, there is a fixed 20% chance that the next Granite Fury consumes no Sand Crystals.", piece4: "Casting Granite reduces the remaining CD on Sandshroud by 0.6s. If Sandshroud is active, its duration is extended by 0.6s." },
          es: { piece2: "Mientras Cubierta Arenosa esté activa, el daño de Furia de Granito y su habilidad mejorada (Puño Piedra) aumenta un 50%. Cuando Cubierta Arenosa inflige daño al objetivo actual, hay una probabilidad fija del 20 % de que la siguiente Furia de Granito no consuma cristales de arena.", piece4: "Lanzar Granito reduce el TdR restante de Cubierta Arenosa en 0.6 s. Si Cubierta Arenosa está activa, su duración se extiende 0.6 s." }
        }
      }
    }
  },
  {
    id: "wildpack",
    name: { en: "Wildpack", es: "Manada Salvaje" },
    stats: { en: "Haste - Mastery", es: "Presteza - Maestría" },
    image: "source/spec/Wildpack Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "After the cast of Torrent Volley or Lumi Torrent, Wild Wolf gains 30% increased Attack SPD for 8s", piece4: "Wild Wolf attacks have a 10% chance to increase your Light Bonus by 6% for 8s" },
          es: { piece2: "Tras el lanzamiento de Descarga Torrencial o Torrente Lumi, el lobo salvaje gana un 30 % de VEL de ATQ por 8 s.", piece4: "Los ataques del lobo salvaje tienen un 10 % de probabilidad de aumentar el bonus lumínico en un 6 % durante 8 s." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "Each 1% Mastery grants 0.2% Crit DMG.", piece4: "Storm Arrow grants +1.5% Agility on hit. Lasts 8s and stacks up to 5 times." },
          es: { piece2: "Cada 1 % de pericia otorga un 0.2% de daño crítico.", piece4: "Flecha Tormenta otorga +1.5% de agilidad al impactar. Dura 8 s y se acumula hasta 5 veces." }
        }
      }
    }
  },
  {
    id: "falconry",
    name: { en: "Falconry", es: "Cetrería" },
    stats: { en: "Crit - Haste", es: "Crítico - Presteza" },
    image: "source/spec/Falconry Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "Increases Falcon Strike, Lightning Strike DMG by 15%", piece4: "After consuming Photon Reforge, your next 2 Special Attacks will not consume charges" },
          es: { piece2: "Aumenta el DÑO de Golpe de Halcón y Golpe de Rayo en un 15 %.", piece4: "Tras consumirse reforja fotónica, los próximos 2 ataques especiales no consumen cargas." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "While Focus is active, Crit DMG +50%.", piece4: "Each use of Special Attacks reduces the remaining CD on Radiance Barrage by 1s. Greatly increases the Casting SPD of Radiance Barrage." },
          es: { piece2: "Mientras Enfoque está activo, daño crítico +50 %.", piece4: "Cada uso de ataques especiales reduce en 1 s el TdR restante de Aluvión de Resplandor. Aumenta en gran medida la VEL de lanzamiento de Aluvión de Resplandor." }
        }
      }
    }
  },
  {
    id: "dissonance",
    name: { en: "Dissonance", es: "Disonancia" },
    stats: { en: "Haste - Luck", es: "Presteza - Suerte" },
    image: "source/spec/Dissonance Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "Harmonic Anthem and Amplified Beat deal 12% more DMG", piece4: "During Heroic Melody, the trigger speed of Fierce Strike +30%." },
          es: { piece2: "Himno Armonioso y Ritmo Amplificado infligen un 12 % más de DÑO.", piece4: "Durante Melodía Heroica, VEL de activación de Golpe Feroz +30 %." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "While Heroic Melody is active, Fire Bonus +5%.", piece4: "Amplified Beat has +1 hit count." },
          es: { piece2: "Mientras Melodía Heroica esté activa, bonus ígneo +5 %.", piece4: "Ritmo Amplificado obtiene +1 golpe." }
        }
      }
    }
  },
  {
    id: "concerto",
    name: { en: "Concerto", es: "Concierto" },
    stats: { en: "Haste - Crit", es: "Presteza - Crítico" },
    image: "source/spec/Concerto.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "The Healing of Healing Beat +20%", piece4: "When Healing Melody is not active, grants 2 Performance Energy every 3s" },
          es: { piece2: "Curación de Ritmo Curador +20 %.", piece4: "Cuando Melodía Curativa no está activa, otorga 2 de energía escénica cada 3 s." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "Healing Melody gains +14% Fire Bonus on healing output.", piece4: "Within 5s after casting Healing Beat, the final healing of Healing Melody is increased by 8%. Within 8s after casting Fivefold Crescendo, the Final healing of Heroic Melody is Increased by 16%." },
          es: { piece2: "La curación de Melodía Curativa obtiene un +14 % del bonus ígneo.", piece4: "Durante los 5 s tras lanzar Ritmo Curador, la curación final de Melodía Curativa aumenta un 8 %. Durante los 8 s tras lanzar Crescendo Quintuple, la Curación final de Melodía Heroica aumenta un 16 %." }
        }
      }
    }
  },
  {
    id: "formless",
    name: { en: "Formless", es: "Amorfo" },
    stats: { en: "Luck - Mastery", es: "Suerte - Maestría" },
    image: "source/spec/Formless Expertise Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "Under the Formless effect, every 32 Strength grants 1 Fire ATK.", piece4: "Each level of the Formless effect grants 10% Fire ATK." },
          es: { piece2: "Bajo el efecto Amorfo, cada 32 de fuerza otorga 1 de ATQ de fuego.", piece4: "Cada nivel del efecto Amorfo otorga un 10 % de ATQ de fuego." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "Dealing DMG with Axe Wind increases Rage Cleave DMG by 7% for 10s, stacking up to 3 times.", piece4: "Dealing DMG with Axe Wind increases Formless Flame Slash DMG by 13% for 15s." },
          es: { piece2: "Infligir daño con Viento de Hacha aumenta el daño de Hendidura de Furia en un 7% durante 10 s. Se acumula hasta 3 veces.", piece4: "Infligir daño con Viento de Hacha aumenta el daño de Corte de Llama Amorfa en un 13 % durante 15 s." }
        }
      }
    }
  },
  {
    id: "crimson",
    name: { en: "Crimson", es: "Carmesí" },
    stats: { en: "Crit - Haste", es: "Crítico - Presteza" },
    image: "source/spec/Crimson Expertise Spec.webp",
    sets: {
      vc: {
        effects: {
          en: { piece2: "Unbound Meteor, Falling Hellfire, and Flowing Splendor Slash DMG +25%.", piece4: "Crit DMG dealt by Wildfire Dance ignores 42% of the target's Armor." },
          es: { piece2: "DÑO de Meteoro Desatado, Caída de Fuego Infernal y Corte de Esplendor Fluido +25 %.", piece4: "El DÑO crítico infligido por Danza de Fuego Salvaje ignora un 42 % de la armadura del objetivo." }
        }
      },
      phantom: {
        effects: {
          en: { piece2: "Flowing Splendor Slash's Final DMG is enhanced based on the target's lost HP. When the target's HP falls below 30%, the Final DMG increase reaches a maximum of 300%.", piece4: "Great Crimson Lotus ignores 55% of the target's Armor." },
          es: { piece2: "El daño final de Corte de Esplendor Fluido mejora según los PS perdidos del objetivo. Cuando los PS del objetivo caen por debajo del 30 %, el aumento del daño final alcanza un máximo de 300 %.", piece4: "Gran Loto Carmesí ignora un 55 % de la armadura del objetivo." }
        }
      }
    }
  }
];

// Mapa de iconos de stats/builds
const statIconMap = {
    strength: 'source/Stats/Strength.webp',
    intelligence: 'source/Stats/Intellect.webp',
    agility: 'source/Stats/Agility.webp',
    presteza: 'source/Stats/Haste.webp',
    maestria: 'source/Stats/Mastery.webp',
    critico: 'source/Stats/Crit.webp',
    suerte: 'source/Stats/Luck.webp',
    versatilidad: 'source/Stats/Versatility.webp'
};
