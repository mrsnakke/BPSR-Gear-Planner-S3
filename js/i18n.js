// Diccionario de Traducciones (i18n)
const translations = {
    es: {
        // Interfaz
        ui_build: "Build:",
        ui_bis: "BiS",
        ui_sigils: "Sigilos",
        ui_reset: "Reiniciar",
        ui_inventory: "Inventario de Equipo",
        ui_footer: "Planner interactivo. El progreso se guarda automáticamente en tu navegador.",
        ui_preset: "Personaje:",
        ui_create_preset_tooltip: "Nuevo Personaje",
        ui_rename_preset_tooltip: "Renombrar Personaje",
        ui_delete_preset_tooltip: "Eliminar Personaje",
        ui_priority_title: "🎯 Prioridad de Farmeo",
        ui_priority_subtitle: "Menos stats = Mayor prioridad",
        ui_dungeon_title: "🗺️ Mazmorras Recomendadas",
        ui_completed: "Completado",
        ui_completed_epic: "¡Build Completada!",
        ui_completed_desc: "Has obtenido todos los atributos perfectos. ¡Tu personaje está listo para el Endgame!",
        ui_missing: "Faltan",
        ui_ready: "Listo",
        ui_useful: "Útiles",
        ui_primary: "Primario",
        ui_secondary: "Secundario",
        ui_rare: "Raro",
        ui_bonus: "Bonus:",
        ui_swap: "Intercambiar atributos",
        stat_empty: "— Seleccionar —",
        
        // Atributos Base
        stat_versatilidad: "Versatilidad",
        stat_maestria: "Maestría",
        stat_presteza: "Presteza",
        stat_critico: "Crítico",
        stat_suerte: "Suerte",

        // Piezas de equipo
        gear_weapon: "Arma",
        gear_head: "Casco",
        gear_armor: "Pechera",
        gear_guante: "Guantes",
        gear_bota: "Botas",
        gear_arete: "Arete",
        gear_collar: "Collar",
        gear_anillo: "Anillo",
        gear_brazaleteL: "Brazalete L",
        gear_brazaleteR: "Brazalete R",
        gear_amuleto: "Amuleto",

        // Sigilos
        sigil_none: "Sin Sigilo",
        sigil_cabbage_killer: "Cabbage Killer Sigil",
        sigil_wasteland_foxen: "Wasteland Foxen Sigil",
        sigil_cabbage_tough_guy: "Cabbage Tough Guy Sigil",
        sigil_glimmer_caprahorn: "Glimmer Caprahorn Sigil",
        sigil_cabbage_blaster: "Cabbage Blaster Sigil",
        sigil_nether_caprahorn: "Nether Caprahorn Sigil",
        sigil_cabbage_hunter: "Cabbage Hunter Sigil",
        sigil_foxen: "Foxen Sigil",
        sigil_frost_lizard: "Frost Lizard Sigil",
        sigil_magma_lizard: "Magma Lizard Sigil",
        sigil_gale_lizard: "Gale Lizard Sigil",
        sigil_lightning_lizard: "Lightning Lizard Sigil",
        sigil_blackstone_marksman: "Blackstone Marksman Sigil",
        sigil_blackstone_guard: "Blackstone Guard Sigil",
        sigil_blackstone_warrior: "Blackstone Warrior Sigil",
        sigil_blackstone_assaulter: "Blackstone Assaulter Sigil",
        sigil_goblin_warrior: "Goblin Warrior Sigil",
        sigil_goblin_axeman: "Goblin Axeman Sigil",
        sigil_goblin_priest: "Goblin Priest Sigil",
        sigil_goblin_sentry: "Goblin Sentry Sigil",
        sigil_bluespine_lizard: "Bluespine Lizard Sigil",
        sigil_emerald_caprahorn: "Emerald Caprahorn Sigil",
        sigil_blackstone_commander: "Blackstone Commander Sigil",
        sigil_blackfire_foxen: "Blackfire Foxen Sigil",
        sigil_gloomy_cabbage: "Gloomy Cabbage Sigil",
        sigil_blackstone_vanguard: "Blackstone Vanguard Sigil",
        sigil_ruthless_cabbage: "Ruthless Cabbage Sigil",
        sigil_goblin_trickster: "Goblin Trickster Sigil",
        sigil_goblin_shaman: "Goblin Shaman Sigil",
        sigil_basilisk: "Basilisk Sigil",
        sigil_goblin_chief: "Goblin Chief Sigil",
        sigil_crimson_foxen: "Crimson Foxen Sigil",
        sigil_cabbage_kingpin: "Cabbage Kingpin Sigil",
        sigil_blackstone_captain: "Blackstone Captain Sigil",
        sigil_flamehorn: "Flamehorn Sigil",
        sigil_caprahorn_bloom_steel: "Caprahorn - Bloom & Steel Sigil",
        sigil_withered_bloomshard: "Withered Bloomshard Sigil",
        sigil_erosion_bloom_afterimage: "Erosion Bloom Afterimage Sigil",
        sigil_infernal_arachnocrab: "Infernal Arachnocrab Sigil",
        sigil_wasteland_arachnocrab: "Wasteland Arachnocrab Sigil",
        sigil_sandstone_yeti: "Sandstone Yeti Sigil",
        sigil_ashen_yeti: "Ashen Yeti Sigil",
        sigil_wild_mountain_boar: "Wild Mountain Boar Sigil",
        sigil_hunter_mountain_boar: "Hunter Mountain Boar Sigil",
        sigil_gnashing_furball: "Gnashing Furball Sigil",
        sigil_spiky_furball: "Spiky Furball Sigil",
        sigil_patrolling_oculoid: "Patrolling Oculoid Sigil",
        sigil_mechcore_oculoid: "Mechcore Oculoid Sigil",
        sigil_killer_arachnocrab: "Killer Arachnocrab Sigil",
        sigil_dogorman: "Dogorman Sigil",
        sigil_verdant_fang: "Verdant Fang Sigil",
        sigil_man_eating_furball: "Man-Eating Furball Sigil",
        sigil_sanctuary_eye: "Sanctuary Eye Sigil",
        sigil_predator_arachnocrab: "Predator Arachnocrab Sigil",
        sigil_rebel_king: "Rebel King Sigil",
        sigil_ridge_fang: "Ridge Fang Sigil",
        sigil_bloodthirsty_furball: "Bloodthirsty Furball Sigil",
        sigil_void_watcher: "Void Watcher Sigil",
        sigil_paradox_calamity_remnant_origin: "Paradox-Calamity Remnant - Origin Sigil",
        sigil_paradox_calamity_remnant_continuation: "Paradox-Calamity Remnant - Continuation Sigil",
        sigil_paradox_calamity_remnant_final: "Paradox-Calamity Remnant - Final Sigil"
    },
    en: {
        // Interface
        ui_build: "Build:",
        ui_bis: "BiS",
        ui_sigils: "Sigils",
        ui_reset: "Reset",
        ui_inventory: "Gear Inventory",
        ui_footer: "Interactive Planner. Progress is automatically saved in your browser.",
        ui_preset: "Character:",
        ui_create_preset_tooltip: "New Character",
        ui_rename_preset_tooltip: "Rename Character",
        ui_delete_preset_tooltip: "Delete Character",
        ui_priority_title: "🎯 Farming Priority",
        ui_priority_subtitle: "Less stats = Higher priority",
        ui_dungeon_title: "🗺️ Recommended Dungeons",
        ui_completed: "Completed",
        ui_completed_epic: "Build Completed!",
        ui_completed_desc: "You have obtained all perfect attributes. Your character is ready for the Endgame!",
        ui_missing: "Missing",
        ui_ready: "Ready",
        ui_useful: "Useful",
        ui_primary: "Primary",
        ui_secondary: "Secondary",
        ui_rare: "Rare",
        ui_bonus: "Bonus:",
        ui_swap: "Swap attributes",
        stat_empty: "— Select —",

        // Base Stats
        stat_versatilidad: "Versatility",
        stat_maestria: "Mastery",
        stat_presteza: "Haste",
        stat_critico: "Crit",
        stat_suerte: "Luck",

        // Gear Pieces
        gear_weapon: "Weapon",
        gear_head: "Helmet",
        gear_armor: "Armor",
        gear_guante: "Gauntlets",
        gear_bota: "Boots",
        gear_arete: "Earring",
        gear_collar: "Necklace",
        gear_anillo: "Ring",
        gear_brazaleteL: "Bracelet L",
        gear_brazaleteR: "Bracelet R",
        gear_amuleto: "Charm",

        // Sigils
        sigil_none: "No Sigil",
        sigil_cabbage_killer: "Cabbage Killer Sigil",
        sigil_wasteland_foxen: "Wasteland Foxen Sigil",
        sigil_cabbage_tough_guy: "Cabbage Tough Guy Sigil",
        sigil_glimmer_caprahorn: "Glimmer Caprahorn Sigil",
        sigil_cabbage_blaster: "Cabbage Blaster Sigil",
        sigil_nether_caprahorn: "Nether Caprahorn Sigil",
        sigil_cabbage_hunter: "Cabbage Hunter Sigil",
        sigil_foxen: "Foxen Sigil",
        sigil_frost_lizard: "Frost Lizard Sigil",
        sigil_magma_lizard: "Magma Lizard Sigil",
        sigil_gale_lizard: "Gale Lizard Sigil",
        sigil_lightning_lizard: "Lightning Lizard Sigil",
        sigil_blackstone_marksman: "Blackstone Marksman Sigil",
        sigil_blackstone_guard: "Blackstone Guard Sigil",
        sigil_blackstone_warrior: "Blackstone Warrior Sigil",
        sigil_blackstone_assaulter: "Blackstone Assaulter Sigil",
        sigil_goblin_warrior: "Goblin Warrior Sigil",
        sigil_goblin_axeman: "Goblin Axeman Sigil",
        sigil_goblin_priest: "Goblin Priest Sigil",
        sigil_goblin_sentry: "Goblin Sentry Sigil",
        sigil_bluespine_lizard: "Bluespine Lizard Sigil",
        sigil_emerald_caprahorn: "Emerald Caprahorn Sigil",
        sigil_blackstone_commander: "Blackstone Commander Sigil",
        sigil_blackfire_foxen: "Blackfire Foxen Sigil",
        sigil_gloomy_cabbage: "Gloomy Cabbage Sigil",
        sigil_blackstone_vanguard: "Blackstone Vanguard Sigil",
        sigil_ruthless_cabbage: "Ruthless Cabbage Sigil",
        sigil_goblin_trickster: "Goblin Trickster Sigil",
        sigil_goblin_shaman: "Goblin Shaman Sigil",
        sigil_basilisk: "Basilisk Sigil",
        sigil_goblin_chief: "Goblin Chief Sigil",
        sigil_crimson_foxen: "Crimson Foxen Sigil",
        sigil_cabbage_kingpin: "Cabbage Kingpin Sigil",
        sigil_blackstone_captain: "Blackstone Captain Sigil",
        sigil_flamehorn: "Flamehorn Sigil",
        sigil_caprahorn_bloom_steel: "Caprahorn - Bloom & Steel Sigil",
        sigil_withered_bloomshard: "Withered Bloomshard Sigil",
        sigil_erosion_bloom_afterimage: "Erosion Bloom Afterimage Sigil",
        sigil_infernal_arachnocrab: "Infernal Arachnocrab Sigil",
        sigil_wasteland_arachnocrab: "Wasteland Arachnocrab Sigil",
        sigil_sandstone_yeti: "Sandstone Yeti Sigil",
        sigil_ashen_yeti: "Ashen Yeti Sigil",
        sigil_wild_mountain_boar: "Wild Mountain Boar Sigil",
        sigil_hunter_mountain_boar: "Hunter Mountain Boar Sigil",
        sigil_gnashing_furball: "Gnashing Furball Sigil",
        sigil_spiky_furball: "Spiky Furball Sigil",
        sigil_patrolling_oculoid: "Patrolling Oculoid Sigil",
        sigil_mechcore_oculoid: "Mechcore Oculoid Sigil",
        sigil_killer_arachnocrab: "Killer Arachnocrab Sigil",
        sigil_dogorman: "Dogorman Sigil",
        sigil_verdant_fang: "Verdant Fang Sigil",
        sigil_man_eating_furball: "Man-Eating Furball Sigil",
        sigil_sanctuary_eye: "Sanctuary Eye Sigil",
        sigil_predator_arachnocrab: "Predator Arachnocrab Sigil",
        sigil_rebel_king: "Rebel King Sigil",
        sigil_ridge_fang: "Ridge Fang Sigil",
        sigil_bloodthirsty_furball: "Bloodthirsty Furball Sigil",
        sigil_void_watcher: "Void Watcher Sigil",
        sigil_paradox_calamity_remnant_origin: "Paradox-Calamity Remnant - Origin Sigil",
        sigil_paradox_calamity_remnant_continuation: "Paradox-Calamity Remnant - Continuation Sigil",
        sigil_paradox_calamity_remnant_final: "Paradox-Calamity Remnant - Final Sigil"
    }
};

// Variable global de idioma (por defecto 'es', o el guardado en localStorage)
let currentLang = localStorage.getItem('planner_lang') || 'es';

// Función mágica para traducir. Busca en el diccionario usando una "key"
function t(key) {
    return translations[currentLang][key] || key;
}

// Función para cambiar idioma desde los botones
window.changeLanguage = function(lang) {
    currentLang = lang;
    localStorage.setItem('planner_lang', lang);
    
    // Actualizar botones UI
    document.getElementById('btn-lang-es').className = lang === 'es' ? 'px-2 py-1 text-xs font-bold rounded bg-gameOrange text-white' : 'px-2 py-1 text-xs font-bold rounded text-gray-500 hover:text-white';
    document.getElementById('btn-lang-en').className = lang === 'en' ? 'px-2 py-1 text-xs font-bold rounded bg-gameOrange text-white' : 'px-2 py-1 text-xs font-bold rounded text-gray-500 hover:text-white';
    
    // Actualizar textos estáticos del Header
    document.getElementById('ui-build-label').innerText = t('ui_build');
    document.getElementById('ui-bis-label').innerText = t('ui_bis');
    document.getElementById('ui-sigils-label').innerText = t('ui_sigils');
    document.getElementById('ui-reset-btn').innerText = t('ui_reset');
    document.getElementById('ui-inventory-title').innerText = t('ui_inventory');
    document.getElementById('ui-footer-text').innerText = t('ui_footer');
    
    // Elementos del selector de presets/personajes
    const presetLabel = document.getElementById('ui-preset-label');
    if (presetLabel) presetLabel.innerText = t('ui_preset');
    
    const createBtn = document.getElementById('ui-create-preset-btn');
    if (createBtn) createBtn.title = t('ui_create_preset_tooltip');
    
    const renameBtn = document.getElementById('ui-rename-preset-btn');
    if (renameBtn) renameBtn.title = t('ui_rename_preset_tooltip');
    
    const deleteBtn = document.getElementById('ui-delete-preset-btn');
    if (deleteBtn) deleteBtn.title = t('ui_delete_preset_tooltip');
    document.getElementById('opt-strength').innerText = currentLang === 'es' ? 'Fuerza' : 'Strength';
    document.getElementById('opt-intelligence').innerText = currentLang === 'es' ? 'Inteligencia' : 'Intelligence';
    document.getElementById('opt-agility').innerText = currentLang === 'es' ? 'Agilidad' : 'Agility';

    // Volver a renderizar todo el contenido dinámico
    if(typeof renderPlanner === 'function') renderPlanner();
};

// Ejecutar textos estáticos al cargar
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage(currentLang);
});