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
        sigil_yeti: "Sandstone Yeti",
        sigil_devourer: "Devorador",
        sigil_infernal: "Araña Infernal",
        sigil_predator: "Araña Depredadora"
    },
    en: {
        // Interface
        ui_build: "Build:",
        ui_bis: "BiS",
        ui_sigils: "Sigils",
        ui_reset: "Reset",
        ui_inventory: "Gear Inventory",
        ui_footer: "Interactive Planner. Progress is automatically saved in your browser.",
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
        sigil_yeti: "Sandstone Yeti",
        sigil_devourer: "Devourer",
        sigil_infernal: "Infernal Spider",
        sigil_predator: "Predator Spider"
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