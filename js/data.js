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

const sigilData = {
    'none': { nameKey: 'sigil_none', stat: '—', image: '' },
    'yeti': { nameKey: 'sigil_yeti', stat: 'STR + Endurance', image: 'source/sigil/sanston yeti.webp' },
    'devorador': { nameKey: 'sigil_devourer', stat: 'Luck', image: 'source/sigil/devorador.webp' },
    'infernal': { nameKey: 'sigil_infernal', stat: 'ATQ', image: 'source/sigil/araña infernal.webp' },
    'depredadora': { nameKey: 'sigil_predator', stat: 'All Elemental ATQ', image: 'source/sigil/araña depredadora.webp' }
};

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