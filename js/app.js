// ====== EVENTOS DE LA VENTANA ======
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.remove('py-4');
        header.classList.add('py-2');
    } else {
        header.classList.remove('py-2');
        header.classList.add('py-4');
    }
});

document.addEventListener('click', () => {
    document.querySelectorAll('[id^="dropdown-"]').forEach(dropdown => {
        dropdown.classList.add('hidden');
    });
});

// ====== MANEJO DE ESTADO ======
let activePresetName = localStorage.getItem('checklist_gear_planner_active_preset');
let presets = JSON.parse(localStorage.getItem('checklist_gear_planner_presets'));

if (!presets) {
    // Intentar migrar desde el estado antiguo/legacy
    const legacyState = JSON.parse(localStorage.getItem('checklist_gear_planner_state'));
    if (legacyState && Object.keys(legacyState).length > 0) {
        presets = { "Personaje 1": legacyState };
        activePresetName = "Personaje 1";
    } else {
        presets = { "Personaje 1": {} };
        activePresetName = "Personaje 1";
    }
    localStorage.setItem('checklist_gear_planner_presets', JSON.stringify(presets));
    localStorage.setItem('checklist_gear_planner_active_preset', activePresetName);
}

if (!activePresetName || !presets[activePresetName]) {
    activePresetName = Object.keys(presets)[0] || "Personaje 1";
    localStorage.setItem('checklist_gear_planner_active_preset', activePresetName);
}

let plannerState = presets[activePresetName] || {};

function saveAndRefresh() {
    presets[activePresetName] = plannerState;
    localStorage.setItem('checklist_gear_planner_presets', JSON.stringify(presets));
    localStorage.setItem('checklist_gear_planner_state', JSON.stringify(plannerState));
    renderPlanner();
}

function updatePresetSelect() {
    const select = document.getElementById('global-preset-select');
    if (!select) return;
    
    select.innerHTML = '';
    Object.keys(presets).forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        if (name === activePresetName) {
            option.selected = true;
        }
        select.appendChild(option);
    });
}

window.changePreset = function(name) {
    if (!presets[name]) return;
    activePresetName = name;
    localStorage.setItem('checklist_gear_planner_active_preset', name);
    plannerState = presets[name];
    saveAndRefresh();
};

window.createNewPreset = function() {
    const isEs = (typeof currentLang !== 'undefined' ? currentLang : 'es') === 'es';
    const title = isEs ? 'Nombre del nuevo personaje:' : 'New character name:';
    const errorMsg = isEs ? 'Ese personaje ya existe o el nombre no es válido.' : 'That character already exists or the name is invalid.';
    const name = prompt(title, "");
    if (!name) return;
    const trimmedName = name.trim();
    if (trimmedName === "" || presets[trimmedName]) {
        alert(errorMsg);
        return;
    }
    presets[trimmedName] = {};
    activePresetName = trimmedName;
    localStorage.setItem('checklist_gear_planner_active_preset', trimmedName);
    plannerState = presets[trimmedName];
    saveAndRefresh();
};

window.renamePreset = function() {
    const isEs = (typeof currentLang !== 'undefined' ? currentLang : 'es') === 'es';
    const title = isEs ? `Nuevo nombre para "${activePresetName}":` : `New name for "${activePresetName}":`;
    const errorMsg = isEs ? 'Ese personaje ya existe o el nombre no es válido.' : 'That character already exists or the name is invalid.';
    const name = prompt(title, activePresetName);
    if (!name) return;
    const trimmedName = name.trim();
    if (trimmedName === "" || trimmedName === activePresetName) return;
    if (presets[trimmedName]) {
        alert(errorMsg);
        return;
    }
    presets[trimmedName] = presets[activePresetName];
    delete presets[activePresetName];
    activePresetName = trimmedName;
    localStorage.setItem('checklist_gear_planner_active_preset', trimmedName);
    localStorage.setItem('checklist_gear_planner_presets', JSON.stringify(presets));
    saveAndRefresh();
};

window.deletePreset = function() {
    const isEs = (typeof currentLang !== 'undefined' ? currentLang : 'es') === 'es';
    const keys = Object.keys(presets);
    if (keys.length <= 1) {
        const errorMsg = isEs ? 'No puedes eliminar tu único personaje.' : 'You cannot delete your only character.';
        alert(errorMsg);
        return;
    }
    const confirmMsg = isEs ? `¿Seguro que deseas eliminar el personaje "${activePresetName}"?` : `Are you sure you want to delete the character "${activePresetName}"?`;
    if (!confirm(confirmMsg)) return;
    
    delete presets[activePresetName];
    activePresetName = Object.keys(presets)[0];
    localStorage.setItem('checklist_gear_planner_active_preset', activePresetName);
    plannerState = presets[activePresetName];
    saveAndRefresh();
};

// ====== COMPARTIR / IMPORTAR ======
window.sharePreset = function() {
    try {
        const json = JSON.stringify(plannerState);
        const compressed = LZString.compressToBase64(json);
        navigator.clipboard.writeText(compressed).then(() => {
            alert(t('ui_share_success'));
        }).catch(() => {
            console.log(compressed);
            alert(t('ui_share_error'));
        });
    } catch (e) {
        console.error(e);
        alert(t('ui_share_error'));
    }
};

window.showImportModal = function() {
    document.getElementById('import-modal')?.classList.remove('hidden');
    document.getElementById('import-textarea')?.focus();
};

window.hideImportModal = function() {
    document.getElementById('import-modal')?.classList.add('hidden');
    document.getElementById('import-textarea').value = '';
};

window.importPreset = function() {
    const textarea = document.getElementById('import-textarea');
    const code = textarea.value.trim();
    if (!code) return;

    try {
        const json = LZString.decompressFromBase64(code);
        if (!json) throw new Error('Invalid code');
        const state = JSON.parse(json);
        if (typeof state !== 'object' || state === null) throw new Error('Not an object');

        const keys = Object.keys(presets);
        let importName = t('ui_import_name');
        let counter = 1;
        while (presets[`${importName} ${counter}`]) counter++;
        importName = `${importName} ${counter}`;

        presets[importName] = state;
        activePresetName = importName;
        plannerState = presets[activePresetName];
        localStorage.setItem('checklist_gear_planner_presets', JSON.stringify(presets));
        localStorage.setItem('checklist_gear_planner_active_preset', activePresetName);
        hideImportModal();
        saveAndRefresh();
    } catch (e) {
        console.error(e);
        alert(t('ui_import_error'));
    }
};

// ====== FUNCIONES GLOBALES (Llamadas desde el HTML) ======
window.togglePanel = function(contentId, iconId) {
    const content = document.getElementById(contentId);
    const icon = document.getElementById(iconId);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(0deg)';
    } else {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(180deg)';
    }
};

window.changeBuild = function(build) {
    plannerState.build = build;
    gearData.forEach(gear => validateGearStats(gear.id));
    if (!plannerState.spec) plannerState.spec = '';
    saveAndRefresh();
};

window.changeSpec = function(spec) {
    plannerState.spec = spec || '';
    saveAndRefresh();
};

window.selectSpecOption = function(specId) {
    document.getElementById('dropdown-spec')?.classList.add('hidden');
    plannerState.spec = specId || '';
    saveAndRefresh();
};

window.toggleRaid = function(id, isRaid) { plannerState[id].raid = isRaid; saveAndRefresh(); };
window.updateSpec = function(id, val) { if (plannerState[id]) { plannerState[id].spec = val; } saveAndRefresh(); };
window.toggleStatCheck = function(id, field, val) { plannerState[id][field] = val; saveAndRefresh(); };
window.updateLevel = function(id, val) { plannerState[id].level = val; saveAndRefresh(); };
window.updateBgColor = function(id, color) { plannerState[id].bgColor = color; saveAndRefresh(); };
window.updateStat = function(id, type, val) {
    const state = plannerState[id];
    if (!state) return;
    if (type === 'primary') {
        if (val && state.secondary === val) {
            state.secondary = state.primary;
        }
        state.primary = val;
    } else if (type === 'secondary') {
        if (val && state.primary === val) {
            state.primary = state.secondary;
        }
        state.secondary = val;
    } else if (type === 'primaryDesired') {
        if (val && state.secondaryDesired === val) {
            state.secondaryDesired = state.primaryDesired;
        }
        state.primaryDesired = val;
    } else if (type === 'secondaryDesired') {
        if (val && state.primaryDesired === val) {
            state.primaryDesired = state.secondaryDesired;
        }
        state.secondaryDesired = val;
    } else {
        state[type] = val;
    }
    saveAndRefresh();
};

window.swapStats = function(id) {
    const state = plannerState[id];
    if (!state) return;
    const tempPrimary = state.primary;
    const tempPrimaryDesired = state.primaryDesired;
    
    state.primary = state.secondary;
    state.primaryDesired = state.secondaryDesired;
    
    state.secondary = tempPrimary;
    state.secondaryDesired = tempPrimaryDesired;
    
    saveAndRefresh();
};
window.updateSigil = function(id, val) { plannerState[id].sigil = val; saveAndRefresh(); };
window.toggleCustomDropdown = function(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const wasHidden = dropdown.classList.contains('hidden');
    document.querySelectorAll('[id^="dropdown-"]').forEach(d => d.classList.add('hidden'));
    if (wasHidden) dropdown.classList.remove('hidden');
};

window.resetPlanner = function() {
    const isEs = (typeof currentLang !== 'undefined' ? currentLang : 'es') === 'es';
    const confirmMsg = isEs ? 
        `¿Restablecer el personaje "${activePresetName}"? Se perderá todo su progreso.` : 
        `Reset character "${activePresetName}"? All progress will be lost.`;
    if (confirm(confirmMsg)) {
        plannerState = {};
        saveAndRefresh();
    }
};

// ====== LÓGICA DE VALIDACIÓN ======
function isSigilAllowedForGear(sigilId, gearId) {
    if (sigilId === 'none') return true;

    // Grupo de Armadura (Casco, Pechera, Guante y Bota)
    const armorSlots = ['head', 'armor', 'guante', 'bota'];
    const armorSigils = [
        'blackstoneCaptain', 'bloodthirstyFurball', 'cabbageBlaster', 'cabbageKiller',
        'cabbageKingpin', 'cabbageToughGuy', 'crimsonFoxen', 'flamehorn',
        'glimmerCaprahorn', 'gnashingFurball', 'goblinChief', 'hunterMountainBoar',
        'mechcoreOculoid', 'patrollingOculoid', 'rebelKing', 'ridgeFang',
        'spikyFurball', 'voidWatcher', 'wastelandFoxen'
    ];

    // Grupo de Accesorios y Arma (Arma, Aretes, Collar, Anillo)
    const weaponAndJewelrySlots = ['weapon', 'arete', 'collar', 'anillo'];
    const sharedWeaponJewelrySigils = [
        'blackfireFoxen', 'blackstoneCommander', 'caprahornBloomSteel', 'emeraldCaprahorn',
        'erosionBloomAfterimage', 'infernalArachnocrab', 'paradoxCalamityRemnantContinuation',
        'paradoxCalamityRemnantFinal', 'paradoxCalamityRemnantOrigin', 'predatorArachnocrab',
        'wastelandArachnocrab', 'witheredBloomshard'
    ];
    const exclusiveWeaponSigils = ['basilisk', 'bluespineLizard', 'killerArachnocrab'];
    const exclusiveJewelrySigils = ['cabbageHunter', 'foxen', 'netherCaprahorn'];

    // Grupo de Brazaletes y Amuleto (Brazalete L, Brazalete R, Amuleto)
    const braceletAmuletoSlots = ['brazaleteL', 'brazaleteR', 'amuleto'];
    const sharedBraceletAmuletoSigils = [
        'ashenYeti', 'blackstoneAssaulter', 'blackstoneGuard', 'blackstoneMarksman',
        'blackstoneVanguard', 'blackstoneWarrior', 'dogorman', 'galeLizard',
        'gloomyCabbage', 'goblinAxeman', 'goblinPriest', 'goblinSentry',
        'goblinShaman', 'goblinTrickster', 'goblinWarrior', 'lightningLizard',
        'magmaLizard', 'manEatingFurball', 'ruthlessCabbage', 'sanctuaryEye',
        'sandstoneYeti', 'verdantFang', 'wildMountainBoar'
    ];
    const exclusiveBraceletSigils = ['frostLizard'];

    if (armorSlots.includes(gearId)) {
        return armorSigils.includes(sigilId);
    }

    if (weaponAndJewelrySlots.includes(gearId)) {
        if (sharedWeaponJewelrySigils.includes(sigilId)) return true;
        if (gearId === 'weapon') {
            return exclusiveWeaponSigils.includes(sigilId);
        } else {
            return exclusiveJewelrySigils.includes(sigilId);
        }
    }

    if (braceletAmuletoSlots.includes(gearId)) {
        if (sharedBraceletAmuletoSigils.includes(sigilId)) return true;
        if (gearId === 'brazaleteL' || gearId === 'brazaleteR') {
            return exclusiveBraceletSigils.includes(sigilId);
        }
        return false;
    }

    return false;
}

function getSortedSigilsForGear(gearId) {
    const filtered = sigilData.filter(sigil => isSigilAllowedForGear(sigil.id, gearId));
    
    const statTypeOrder = [
        'strength',
        'intellect',
        'agility',
        'atk',
        'matk',
        'all element attack',
        'crit',
        'haste',
        'mastery',
        'versatility',
        'luck',
        'endurance'
    ];
    
    function parseStat(statStr) {
        if (!statStr) return { type: 'unknown', value: 0 };
        const match = statStr.match(/^([A-Za-z\s]+)\s*\+?\s*(\d+)/i);
        if (!match) return { type: statStr.toLowerCase(), value: 0 };
        
        const type = match[1].trim().toLowerCase();
        const value = parseInt(match[2], 10) || 0;
        return { type, value };
    }

    return filtered.sort((a, b) => {
        const parsedA = parseStat(a.stat);
        const parsedB = parseStat(b.stat);

        const indexA = statTypeOrder.indexOf(parsedA.type);
        const indexB = statTypeOrder.indexOf(parsedB.type);

        const orderA = indexA === -1 ? 999 : indexA;
        const orderB = indexB === -1 ? 999 : indexB;

        if (orderA !== orderB) {
            return orderA - orderB;
        }
        return parsedB.value - parsedA.value;
    });
}

function validateGearStats(gearId) {
    const state = plannerState[gearId];
    if (!state) return;
    const build = plannerState.build || 'strength';
    const banned = bannedStats[build][gearId] || [];
    
    const allStats = ['versatilidad', 'maestria', 'presteza', 'critico', 'suerte'];
    const allowedStats = allStats.filter(s => !banned.includes(s));
    
    if (state.primary && !allowedStats.includes(state.primary)) state.primary = '';
    if (state.primaryDesired && !allowedStats.includes(state.primaryDesired)) state.primaryDesired = '';
    if (state.secondary && !allowedStats.includes(state.secondary)) state.secondary = '';
    if (state.secondaryDesired && !allowedStats.includes(state.secondaryDesired)) state.secondaryDesired = '';

    const lvl = state.level || 'Lv220';
    const rareOpts = (rareStatsData[lvl] && rareStatsData[lvl][build] && rareStatsData[lvl][build][gearId]) || [];
    if (state.rare && !rareOpts.includes(state.rare)) state.rare = '';
    if (state.rareDesired && !rareOpts.includes(state.rareDesired)) state.rareDesired = '';

    if (state.sigil && state.sigil !== 'none' && !isSigilAllowedForGear(state.sigil, gearId)) {
        state.sigil = 'none';
    }
}

function updateGlobalStats() {
    let bisCount = 0, sigilCount = 0;
    gearData.forEach(gear => {
        const state = plannerState[gear.id];
        if (state) {
            if (state.primaryChecked && state.secondaryChecked && (state.raid ? true : state.rareChecked) && state.sigil !== 'none') bisCount++;
            if (state.sigil !== 'none') sigilCount++;
        }
    });
    document.getElementById('global-progress').innerText = `${bisCount}/${gearData.length}`;
    document.getElementById('global-sigils').innerText = sigilCount;
}

// ====== FUNCIONES DE RAID SPEC ======
function getSpecStatKeys(specId) {
    const spec = raidSetsData.find(s => s.id === specId);
    if (!spec) return [];
    const parts = spec.stats.en.split(' - ').map(s => s.trim());
    const mapping = {
        'Haste': 'presteza',
        'Mastery': 'maestria',
        'Crit': 'critico',
        'Luck': 'suerte',
        'Versatility': 'versatilidad'
    };
    return parts.map(name => mapping[name]).filter(Boolean);
}

function isRaidRecommended(gearId, build, specId) {
    if (!specId || !build) return false;
    const specStatKeys = getSpecStatKeys(specId);
    if (specStatKeys.length === 0) return false;
    const banned = bannedStats[build] && bannedStats[build][gearId] || [];
    return specStatKeys.some(statKey => banned.includes(statKey));
}

// ====== RENDERIZADO PRINCIPAL ======
window.renderPlanner = function() {
    updatePresetSelect();
    if (!plannerState.build) plannerState.build = 'strength';
    if (plannerState.spec === undefined) plannerState.spec = '';
    const buildSelect = document.getElementById('global-build-select');
    if (buildSelect) buildSelect.value = plannerState.build;
    const buildIcon = document.getElementById('build-select-icon');
    if (buildIcon) buildIcon.src = statIconMap[plannerState.build] || '';

    // Sincronizar selector global de Spec (Custom Dropdown)
    const specDropdown = document.getElementById('dropdown-spec');
    const specBtnText = document.getElementById('spec-select-text');
    const specIcon = document.getElementById('spec-select-icon');
    if (specDropdown) {
        const emptyLabel = t('ui_select_spec');
        let specHTML = `<div onclick="selectSpecOption('')" class="flex items-center gap-2.5 px-3 py-2 hover:bg-gray-800/80 cursor-pointer text-gray-400 text-xs font-semibold select-none">
            <div class="w-5 h-5 rounded bg-gray-950/30 border border-gray-800 flex items-center justify-center text-[10px] text-gray-600 font-bold">—</div>
            <span>${emptyLabel}</span>
        </div>`;
        specHTML += raidSetsData.map(s => {
            const specName = currentLang === 'es' ? s.name.es : s.name.en;
            const isSelected = plannerState.spec === s.id;
            return `<div onclick="selectSpecOption('${s.id}')" class="flex items-center gap-2.5 px-3 py-2 hover:bg-gray-800/80 cursor-pointer text-xs font-bold select-none ${isSelected ? 'text-gameOrange bg-gameOrange/10' : 'text-gray-300'}">
                <img src="${s.image}" class="w-5 h-5 rounded object-contain bg-gray-950 border border-gray-800 flex-shrink-0">
                <span class="truncate">${specName}</span>
                ${isSelected ? '<span class="ml-auto text-gameGold text-[10px]">✓</span>' : ''}
            </div>`;
        }).join('');
        specDropdown.innerHTML = specHTML;
    }
    if (specBtnText && specIcon) {
        const currentSpecData = raidSetsData.find(s => s.id === plannerState.spec);
        if (currentSpecData) {
            specBtnText.textContent = currentLang === 'es' ? currentSpecData.name.es : currentSpecData.name.en;
            specIcon.src = currentSpecData.image;
            specIcon.classList.remove('hidden');
        } else {
            specBtnText.textContent = t('ui_select_spec');
            specIcon.src = '';
            specIcon.classList.add('hidden');
        }
    }

    // Conteo de specs global en tiempo real para efectos de set (excluye arma)
    const specCount = {};

    gearData.forEach(gear => {
        if (!plannerState[gear.id]) {
            plannerState[gear.id] = { obtained: false, primary: '', primaryDesired: '', primaryChecked: false, secondary: '', secondaryDesired: '', secondaryChecked: false, rare: '', rareDesired: '', rareChecked: false, level: 'Lv220', bgColor: 'dorado', sigil: 'none', raid: false, spec: '' };
        } else {
            if (plannerState[gear.id].primaryDesired === undefined) plannerState[gear.id].primaryDesired = '';
            if (plannerState[gear.id].secondaryDesired === undefined) plannerState[gear.id].secondaryDesired = '';
            if (plannerState[gear.id].rareDesired === undefined) plannerState[gear.id].rareDesired = '';
            if (plannerState[gear.id].spec === undefined) plannerState[gear.id].spec = '';
        }
        
        // Auto-detect coincidences
        const state = plannerState[gear.id];
        // Usar spec global, excluir arma del conteo de conjunto
        if (state.raid && plannerState.spec && gear.id !== 'weapon') {
            specCount[plannerState.spec] = (specCount[plannerState.spec] || 0) + 1;
        }

        const hasSpec = !!plannerState.spec;
        state.primaryChecked = state.raid ? hasSpec : (state.primary !== '' && state.primary === state.primaryDesired);
        state.secondaryChecked = state.raid ? hasSpec : (state.secondary !== '' && state.secondary === state.secondaryDesired);
        state.rareChecked = state.raid ? true : (state.rare !== '' && state.rare === state.rareDesired);
        
        validateGearStats(gear.id);
    });

    const missingGears = gearData.map(gear => {
        const state = plannerState[gear.id];
        const checks = state.raid ? [state.primaryChecked, state.secondaryChecked] : [state.primaryChecked, state.secondaryChecked, state.rareChecked];
        return { gear, state, checkedCount: checks.filter(Boolean).length, maxChecks: state.raid ? 2 : 3 };
    }).filter(item => item.checkedCount < item.maxChecks).sort((a, b) => a.checkedCount - b.checkedCount);

    // RENDER DUNGEON PANEL
    const dungeonPanel = document.getElementById('dungeon-efficiency-panel');
    if (missingGears.length > 0) {
        const dungeonList = dungeonData.map(dungeon => {
            let missingDropsCount = 0; let totalMissingChecks = 0;
            const dropsInfo = dungeon.drops.map(dropId => {
                const gear = gearData.find(g => g.id === dropId);
                const state = plannerState[dropId];
                const checks = state.raid ? [state.primaryChecked, state.secondaryChecked] : [state.primaryChecked, state.secondaryChecked, state.rareChecked];
                const checkedCount = checks.filter(Boolean).length;
                const maxChecks = state.raid ? 2 : 3;
                if (checkedCount < maxChecks) { missingDropsCount++; totalMissingChecks += (maxChecks - checkedCount); }
                return { id: dropId, name: gear ? t(gear.nameKey) : dropId, image: gear ? gear.image : '', checkedCount, maxChecks };
            });
            return { ...dungeon, dropsInfo, missingDropsCount, totalMissingChecks };
        }).sort((a, b) => b.missingDropsCount !== a.missingDropsCount ? b.missingDropsCount - a.missingDropsCount : b.totalMissingChecks - a.totalMissingChecks);

        let dungeonCardsHTML = dungeonList.map(dungeon => {
            let efficiencyBadgeClass = dungeon.missingDropsCount === 0 ? 'bg-gray-950 text-gray-500 border-gray-800' : dungeon.missingDropsCount === dungeon.drops.length ? 'bg-emerald-950 text-emerald-400 border-emerald-800' : 'bg-amber-950 text-amber-400 border-amber-800';
            let borderClass = dungeon.missingDropsCount === 0 ? 'border-gray-900/40 opacity-50' : dungeon.missingDropsCount === dungeon.drops.length ? 'border-emerald-900/60 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'border-amber-900/40';
            let efficiencyLabel = dungeon.missingDropsCount === 0 ? t('ui_completed') : `${dungeon.missingDropsCount}/${dungeon.drops.length} ${t('ui_useful')}`;

            let dropsHTML = dungeon.dropsInfo.map(drop => {
                const isCompleted = drop.checkedCount === drop.maxChecks;
                const progressPercent = Math.round((drop.checkedCount / drop.maxChecks) * 100);
                return `
                    <div class="flex items-center gap-3 bg-gray-900/60 p-2 rounded-lg border border-gray-800">
                        <img src="${drop.image}" class="w-8 h-8 object-contain bg-gray-950 border border-gray-700" onerror="this.src='https://via.placeholder.com/32'">
                        <div class="flex-grow min-w-0">
                            <div class="flex justify-between text-[11px] mb-1">
                                <span class="font-bold text-gray-200 truncate">${drop.name}</span>
                                <span class="${isCompleted ? 'text-gameGold' : 'text-gray-400'}">${isCompleted ? t('ui_ready') : `${drop.checkedCount}/${drop.maxChecks}`}</span>
                            </div>
                            <div class="w-full bg-gray-950 rounded-full h-1">
                                <div class="h-full rounded-full transition-all duration-300 ${isCompleted ? 'bg-gameGold' : 'bg-emerald-500'}" style="width: ${progressPercent}%"></div>
                            </div>
                        </div>
                    </div>`;
            }).join('');

            return `
                <div class="gaming-card rounded-2xl border ${borderClass} flex flex-col relative overflow-hidden">
                    <!-- Imagen de fondo completa -->
                    <div class="absolute inset-0 z-0 pointer-events-none">
                        <img src="${dungeon.image}" class="w-full h-full object-cover opacity-50">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-950 from-55% to-transparent"></div>
                    </div>
                    
                    <div class="relative h-20 border-b border-gray-900/40 z-10">
                        <div class="absolute bottom-2 left-3 flex justify-between items-end w-[calc(100%-24px)]">
                            <h3 class="text-sm font-bold text-white drop-shadow-md">${dungeon.name}</h3>
                            <span class="text-[10px] px-1.5 py-0.5 rounded border ${efficiencyBadgeClass} uppercase">${efficiencyLabel}</span>
                        </div>
                    </div>
                    <div class="p-3 space-y-2 flex-grow bg-gray-950/40 z-10">${dropsHTML}</div>
                </div>`;
        }).join('');

        dungeonPanel.innerHTML = `
            <div class="gaming-card rounded-2xl border border-gray-800 p-5 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950">
                <div class="flex justify-between items-center mb-4 cursor-pointer" onclick="togglePanel('dungeon-content', 'dungeon-icon')">
                    <span class="text-xl font-bold uppercase bg-gradient-to-r from-gameOrange to-gameGold bg-clip-text text-transparent">${t('ui_dungeon_title')}</span>
                    <svg id="dungeon-icon" class="w-5 h-5 text-gray-400 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
                <div id="dungeon-content" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${dungeonCardsHTML}</div>
            </div>`;
        dungeonPanel.classList.remove('hidden');
    } else {
        dungeonPanel.classList.add('hidden');
    }


    // 3. RENDER GEAR GRID
    const grid = document.getElementById('gear-grid');
    grid.innerHTML = '';
    const activeBuild = plannerState.build || 'strength';
    
    // Obtenemos los stats base traduciéndolos al momento
    const allBaseStats = [
        { key: 'versatilidad', label: t('stat_versatilidad') }, 
        { key: 'maestria', label: t('stat_maestria') }, 
        { key: 'presteza', label: t('stat_presteza') }, 
        { key: 'critico', label: t('stat_critico') }, 
        { key: 'suerte', label: t('stat_suerte') }
    ];

    gearData.forEach(gear => {
        const state = plannerState[gear.id];
        const rareOk = state.raid ? true : state.rareChecked;
        const isBiS = state.primaryChecked && state.secondaryChecked && rareOk && state.sigil !== 'none';
        const gearDungeon = dungeonData.find(d => d.drops.includes(gear.id));

        let imgClass = (state.raid || state.bgColor === 'naranja-rojo')
            ? 'bg-gradient-to-br from-orange-500/20 via-red-600/5 to-transparent border-gameOrange/50 shadow-orange-glow'
            : 'bg-gradient-to-br from-yellow-500/20 via-yellow-600/5 to-transparent border-gameGold/50 shadow-gold-glow';
            
        let opacityClass = 'opacity-90 border-gray-800';
        if (isBiS) {
            if (state.raid) {
                opacityClass = 'opacity-100 border-gameOrange/60 shadow-[0_0_20px_rgba(249,115,22,0.15)]';
            } else {
                opacityClass = 'opacity-100 border-gameGold/60 shadow-[0_0_20px_rgba(234,179,8,0.15)]';
            }
        }

        const qualityColors = {
            'Rare': '#60a5fa',
            'Epic': '#a855f7',
            'Legendary': '#eab308',
            'Mythic': '#f97316'
        };

        const qualityBgImages = {
            'Rare': 'source/quality/rare.png',
            'Epic': 'source/quality/epic.png',
            'Legendary': 'source/quality/Legendary.png',
            'Mythic': 'source/quality/Mythic.png'
        };

        const currentSigil = sigilData.find(s => s.id === state.sigil) || { id: 'none', nameKey: 'sigil_none', stat: '—', image: '' };
        const sigilColor = state.sigil === 'none' ? '#9ca3af' : (qualityColors[currentSigil.quality] || '#9ca3af');

        // Custom dropdown items HTML
        let dropdownItemsHTML = `
            <div onclick="updateSigil('${gear.id}', 'none')" class="flex items-center gap-2.5 px-3 py-2 hover:bg-gray-800/80 cursor-pointer text-gray-400 text-xs font-semibold select-none">
                <div class="w-5 h-5 rounded bg-gray-950/30 border border-gray-800 flex items-center justify-center text-[10px] text-gray-600 font-bold">—</div>
                <span>${t('sigil_none')}</span>
            </div>
        `;
        
        const filteredSigils = getSortedSigilsForGear(gear.id);
        dropdownItemsHTML += filteredSigils.map(sigil => {
            const color = qualityColors[sigil.quality] || '#ffffff';
            const statsText = sigil.stat2 ? `${sigil.stat} / ${sigil.stat2}` : sigil.stat;
            return `
                <div onclick="updateSigil('${gear.id}', '${sigil.id}')" class="flex items-center justify-between gap-2.5 px-3 py-2 hover:bg-gray-800/80 cursor-pointer text-xs font-bold select-none" style="color: ${color};">
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div class="w-5 h-5 rounded flex-shrink-0 overflow-hidden bg-gray-950 border border-gray-800" style="background-image: url('${qualityBgImages[sigil.quality] || ''}'); background-size: cover; background-position: center;">
                            <img src="${sigil.image}" class="w-full h-full object-contain" onerror="this.style.display='none'">
                        </div>
                        <span class="truncate">${t(sigil.nameKey)}</span>
                    </div>
                    <span class="text-[10px] text-gray-400 font-mono flex-shrink-0 ml-auto pl-2">${statsText}</span>
                </div>
            `;
        }).join('');

        const banned = bannedStats[activeBuild][gear.id] || [];
        
        const emptyPrimOption = `<option value="" ${!state.primary ? 'selected' : ''}>${t('stat_empty')}</option>`;
        const primOptions = emptyPrimOption + allBaseStats.filter(s => !banned.includes(s.key) && s.key !== state.secondary).map(opt => `<option value="${opt.key}" ${state.primary === opt.key ? 'selected' : ''}>${opt.label}</option>`).join('');
        
        const emptyPrimDesiredOption = `<option value="" ${!state.primaryDesired ? 'selected' : ''}>${t('stat_empty')}</option>`;
        const primDesiredOptions = emptyPrimDesiredOption + allBaseStats.filter(s => !banned.includes(s.key) && s.key !== state.secondaryDesired).map(opt => `<option value="${opt.key}" ${state.primaryDesired === opt.key ? 'selected' : ''}>${opt.label}</option>`).join('');

        const emptySecOption = `<option value="" ${!state.secondary ? 'selected' : ''}>${t('stat_empty')}</option>`;
        const secOptions = emptySecOption + allBaseStats.filter(s => !banned.includes(s.key) && s.key !== state.primary).map(opt => `<option value="${opt.key}" ${state.secondary === opt.key ? 'selected' : ''}>${opt.label}</option>`).join('');
        
        const emptySecDesiredOption = `<option value="" ${!state.secondaryDesired ? 'selected' : ''}>${t('stat_empty')}</option>`;
        const secDesiredOptions = emptySecDesiredOption + allBaseStats.filter(s => !banned.includes(s.key) && s.key !== state.primaryDesired).map(opt => `<option value="${opt.key}" ${state.secondaryDesired === opt.key ? 'selected' : ''}>${opt.label}</option>`).join('');

        const lvl = state.level || 'Lv220';
        const rareOpts = (rareStatsData[lvl] && rareStatsData[lvl][activeBuild] && rareStatsData[lvl][activeBuild][gear.id]) || [];
        const emptyRareOption = `<option value="" ${!state.rare ? 'selected' : ''}>${t('stat_empty')}</option>`;
        const emptyRareDesiredOption = `<option value="" ${!state.rareDesired ? 'selected' : ''}>${t('stat_empty')}</option>`;
        const rareOptionsHTML = emptyRareOption + rareOpts.map(opt => `<option value="${opt}" ${state.rare === opt ? 'selected' : ''}>${opt}</option>`).join('');
        const rareDesiredOptionsHTML = emptyRareDesiredOption + rareOpts.map(opt => `<option value="${opt}" ${state.rareDesired === opt ? 'selected' : ''}>${opt}</option>`).join('');
        const levelOptions = ['Lv220', 'Lv240', 'Lv260'].map(lvl => `<option value="${lvl}" ${state.level === lvl ? 'selected' : ''} class="level-selector-option">${lvl}</option>`).join('');

        const raidEligible = ['head', 'armor', 'guante', 'bota', 'brazaleteR', 'brazaleteL', 'weapon'].includes(gear.id);
        const recommended = raidEligible && isRaidRecommended(gear.id, activeBuild, plannerState.spec);

        const bgImageSrc = state.raid ? 'source/DG/Forgotten Illusions – Origin Mech.webp' : (gearDungeon ? gearDungeon.image : '');
        const bisBadge = isBiS 
            ? (state.raid 
                ? `<span class="px-1.5 py-0.5 text-[10px] font-extrabold bg-gameOrange text-white rounded uppercase animate-pulse shadow-orange-glow">BiS</span>`
                : `<span class="px-1.5 py-0.5 text-[10px] font-extrabold bg-gameGold text-black rounded uppercase animate-pulse shadow-gold-glow">BiS</span>`)
            : '';

        const cardHTML = `
            <div id="card-${gear.id}" class="gaming-card rounded-2xl border ${opacityClass} flex flex-col relative overflow-hidden">
                ${bgImageSrc ? `
                    <!-- Imagen de fondo de la mazmorra o raid -->
                    <div class="absolute inset-0 z-0 pointer-events-none">
                        <img src="${bgImageSrc}" class="w-full h-full object-cover opacity-50">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent"></div>
                    </div>
                ` : ''}
                <div class="p-3 bg-gray-950/80 border-b border-gray-900 flex justify-between items-center relative z-10">
                    <div class="flex items-center gap-2">
                        <span class="font-bold text-base uppercase text-white">${t(gear.nameKey)}</span>
                        ${bisBadge}
                    </div>
                    <div class="flex items-center gap-3">
                        <select onchange="updateLevel('${gear.id}', this.value)" class="bg-transparent text-gray-400 text-xs font-mono focus:outline-none cursor-pointer hover:text-white level-selector">${levelOptions}</select>
                        <div class="flex gap-1 color-toggle-container" data-gear-id="${gear.id}">
                            <button class="w-4 h-4 rounded-full bg-gameOrange border hover:scale-110 ${state.bgColor === 'naranja-rojo' ? 'border-white' : 'border-transparent'} color-toggle-button" data-color="naranja-rojo"></button>
                            <button class="w-4 h-4 rounded-full bg-gameGold border hover:scale-110 ${state.bgColor === 'dorado' ? 'border-white' : 'border-transparent'} color-toggle-button" data-color="dorado"></button>
                        </div>
                    </div>
                </div>

                <div class="p-4 grid grid-cols-12 gap-4 flex-grow relative z-10">
                    <!-- Imagen -->
                    <div class="col-span-4 flex flex-col items-center">
                        <div class="relative w-28 h-28 border rounded-xl overflow-hidden flex items-center justify-center mx-auto ${imgClass}" style="background-image: url('${state.raid ? 'source/quality/Mythic.png' : 'source/quality/Legendary.png'}'); background-size: cover; background-position: center;">
                            <img src="${gear.image}" class="w-[90%] h-[90%] object-contain relative z-10" onerror="this.src='https://via.placeholder.com/80'">
                        </div>
                        ${raidEligible ? `
                        <div class="mt-3 flex items-center justify-center gap-2 bg-gray-900/80 px-2 py-1.5 rounded-lg border border-gray-800 w-full">
                            <span class="text-[10px] uppercase font-bold text-gray-400">Raid</span>
                            ${recommended ? `<span class="text-[10px] text-gameGold font-bold">${t('ui_recommended')}</span>` : ''}
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" ${state.raid ? 'checked' : ''} onchange="toggleRaid('${gear.id}', this.checked)">
                                <div class="w-7 h-4 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-red-500"></div>
                            </label>
                        </div>
                        ` : ''}
                        <!-- Espacio vacío debajo del switch Raid para mostrar el sigilo grande -->
                        <div class="mt-3 w-28 h-28 flex flex-col items-center justify-center border border-dashed border-gray-800 rounded-xl p-2 bg-gray-950/40 relative overflow-hidden mx-auto">
                            ${state.sigil !== 'none' && currentSigil.image ? `
                                <div class="absolute inset-0 w-full h-full" style="background-image: url('${qualityBgImages[currentSigil.quality] || ''}'); background-size: cover; background-position: center;"></div>
                                <img src="${currentSigil.image}" class="absolute w-28 h-28 object-contain hover:scale-110 transition-all duration-200 z-10" title="${t(currentSigil.nameKey)}">
                            ` : `
                                <span class="text-[9px] text-gray-600 font-bold uppercase tracking-wider text-center">${t('sigil_none')}</span>
                            `}
                        </div>
                    </div>

                    <!-- Stats -->
                    <div class="col-span-8 flex flex-col gap-2 justify-center">
                        ${state.raid ? (() => {
                            const currentSpecId = plannerState.spec || '';
                            const currentSpecData = raidSetsData.find(s => s.id === currentSpecId);
                            const count = specCount[currentSpecId] || 0;
                            const has2P = count >= 2;
                            const has4P = count >= 4;

                            return `
                                <div class="flex flex-col gap-2.5 flex-grow">
                                    ${currentSpecData ? `
                                        <!-- Selector Global de Spec (informativo) -->
                                        <div class="p-1.5 px-3 rounded-xl border border-gray-800 bg-gray-900/30 flex justify-between items-center text-xs">
                                            <span class="font-bold text-gray-400 text-[9px] uppercase tracking-wider">${t('ui_spec_label')}</span>
                                            <img src="${currentSpecData.image}" class="w-5 h-5 rounded" alt="">
                                            <span class="font-extrabold text-gameOrange text-[10px]">${currentLang === 'es' ? currentSpecData.name.es : currentSpecData.name.en}</span>
                                        </div>

                                        <!-- Stats de Spec -->
                                        <div class="p-1.5 px-3 rounded-xl border border-gray-800 bg-gray-900/30 flex justify-between items-center text-xs">
                                            <span class="font-bold text-gray-400 text-[9px] uppercase tracking-wider">${t('ui_spec_stats')}</span>
                                            <span class="font-extrabold text-gameGold">${currentLang === 'es' ? currentSpecData.stats.es : currentSpecData.stats.en}</span>
                                        </div>

                                        ${gear.id !== 'weapon' ? `
                                        <!-- Info del Set de la tarjeta -->
                                        <div class="p-2 px-3 rounded-xl border border-gray-800 bg-gray-950/40 space-y-2 text-[11px]">
                                            <div class="flex justify-between items-center border-b border-gray-900/60 pb-1">
                                                <span class="font-bold text-gray-300 uppercase text-[9px] tracking-wider">${t('ui_set_pieces')}</span>
                                                <span class="font-extrabold text-[10px] text-gameOrange bg-gameOrange/10 border border-gameOrange/20 px-2 py-0.5 rounded-full">${count} / 4</span>
                                            </div>

                                            <!-- 2 Piece Effect -->
                                            <div class="transition-all duration-300 ${has2P ? 'text-emerald-400 font-medium' : 'text-gray-500'}">
                                                <div class="flex items-center gap-1 font-bold text-[9px] uppercase mb-0.5 tracking-wider">
                                                    <span class="w-1.5 h-1.5 rounded-full ${has2P ? 'bg-emerald-500 animate-pulse' : 'bg-gray-700'}"></span>
                                                    2-Piece Set ${has2P ? `(<span class="text-[8px] font-extrabold uppercase text-emerald-400">${t('ui_active')}</span>)` : ''}
                                                </div>
                                                <p class="text-[9px] leading-relaxed pl-2.5">${currentLang === 'es' ? currentSpecData.effects.es.piece2 : currentSpecData.effects.en.piece2}</p>
                                            </div>

                                            <!-- 4 Piece Effect -->
                                            <div class="transition-all duration-300 ${has4P ? 'text-emerald-400 font-medium' : 'text-gray-500'}">
                                                <div class="flex items-center gap-1 font-bold text-[9px] uppercase mb-0.5 tracking-wider">
                                                    <span class="w-1.5 h-1.5 rounded-full ${has4P ? 'bg-emerald-500 animate-pulse' : 'bg-gray-700'}"></span>
                                                    4-Piece Set ${has4P ? `(<span class="text-[8px] font-extrabold uppercase text-emerald-400">${t('ui_active')}</span>)` : ''}
                                                </div>
                                                <p class="text-[9px] leading-relaxed pl-2.5">${currentLang === 'es' ? currentSpecData.effects.es.piece4 : currentSpecData.effects.en.piece4}</p>
                                            </div>
                                        </div>
                                        ` : ''}
                                    ` : `
                                        <!-- Placeholder sin Spec -->
                                        <div class="p-4 rounded-xl border border-dashed border-gray-800 bg-gray-950/40 flex flex-col items-center justify-center text-center gap-1.5 flex-grow">
                                            <svg class="w-6 h-6 text-gray-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                            <span class="text-[9px] uppercase font-bold text-gray-500 tracking-wider">
                                                ${t('ui_select_spec')}
                                            </span>
                                        </div>
                                    `}
                                </div>
                            `;
                        })() : `
                            <div class="p-2 rounded-xl border transition-all duration-300 ${state.primaryChecked ? 'ring-1 ring-gameOrange/50 bg-gameOrange/10 border-gameOrange/30' : 'border-gray-800 bg-gray-900/50'}">
                                <div class="flex justify-between items-center mb-1">
                                    <span class="text-[11px] uppercase tracking-widest text-gameOrange font-bold flex items-center gap-1.5">
                                        <span class="w-1.5 h-1.5 rounded-full bg-gameOrange ${state.primaryChecked ? 'animate-pulse' : 'opacity-50'}"></span>
                                        ${t('ui_primary')}
                                    </span>
                                    ${state.primaryChecked ? `
                                        <span class="text-[10px] text-emerald-400 font-extrabold flex items-center gap-1 uppercase tracking-wider">
                                            ✓ ${t('ui_bis_match')}
                                        </span>
                                    ` : `
                                        <span class="text-[9px] text-gray-500 uppercase tracking-widest font-bold">
                                            ${t('ui_no_match')}
                                        </span>
                                    `}
                                </div>
                                <div class="grid grid-cols-2 gap-2 mt-1">
                                    <div>
                                        <span class="text-[8px] uppercase font-bold text-gray-500 block mb-0.5 tracking-wider">${t('ui_equipped')}</span>
                                        <div class="flex items-center gap-1">
                                            ${state.primary ? `<img src="${statIconMap[state.primary]}" class="w-4 h-4 rounded flex-shrink-0">` : `<div class="w-4 h-4 rounded flex-shrink-0 bg-gray-950/30 border border-gray-800 flex items-center justify-center text-[8px] text-gray-600 font-bold">—</div>`}
                                            <select onchange="updateStat('${gear.id}', 'primary', this.value)" class="w-full bg-gray-950 border border-gray-700 ${state.primaryChecked ? 'text-white border-gameOrange/50' : 'text-gray-400'} text-xs rounded-lg px-1.5 py-1 focus:outline-none focus:border-gameOrange cursor-pointer">${primOptions}</select>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="text-[8px] uppercase font-bold text-gray-500 block mb-0.5 tracking-wider">${t('ui_target')}</span>
                                        <div class="flex items-center gap-1">
                                            ${state.primaryDesired ? `<img src="${statIconMap[state.primaryDesired]}" class="w-4 h-4 rounded flex-shrink-0">` : `<div class="w-4 h-4 rounded flex-shrink-0 bg-gray-950/30 border border-gray-800 flex items-center justify-center text-[8px] text-gray-600 font-bold">—</div>`}
                                            <select onchange="updateStat('${gear.id}', 'primaryDesired', this.value)" class="w-full bg-gray-950 border border-gray-700 ${state.primaryChecked ? 'text-white border-gameOrange/50' : 'text-gray-400'} text-xs rounded-lg px-1.5 py-1 focus:outline-none focus:border-gameOrange cursor-pointer">${primDesiredOptions}</select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-center -my-1.5">
                                <button onclick="swapStats('${gear.id}')" title="${t('ui_swap')}" class="z-10 bg-gray-950 border border-gray-800 text-gray-400 hover:text-gameGold hover:border-gameGold/50 p-1 rounded-full transition-all duration-200 transform hover:scale-110 flex items-center justify-center w-6 h-6 shadow-md">
                                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 16V4m0 0L3 8m4-4l4 4m10 0v12m0 0l-4-4m4 4l4-4" />
                                    </svg>
                                </button>
                            </div>

                            <div class="p-2 rounded-xl border transition-all duration-300 ${state.secondaryChecked ? 'ring-1 ring-gameGold/50 bg-gameGold/10 border-gameGold/30' : 'border-gray-800 bg-gray-900/50'}">
                                <div class="flex justify-between items-center mb-1">
                                    <span class="text-[11px] uppercase tracking-widest text-gameGold font-bold flex items-center gap-1.5">
                                        <span class="w-1.5 h-1.5 rounded-full bg-gameGold ${state.secondaryChecked ? 'animate-pulse' : 'opacity-50'}"></span>
                                        ${t('ui_secondary')}
                                    </span>
                                    ${state.secondaryChecked ? `
                                        <span class="text-[10px] text-emerald-400 font-extrabold flex items-center gap-1 uppercase tracking-wider">
                                            ✓ ${t('ui_bis_match')}
                                        </span>
                                    ` : `
                                        <span class="text-[9px] text-gray-500 uppercase tracking-widest font-bold">
                                            ${t('ui_no_match')}
                                        </span>
                                    `}
                                </div>
                                <div class="grid grid-cols-2 gap-2 mt-1">
                                    <div>
                                        <span class="text-[8px] uppercase font-bold text-gray-500 block mb-0.5 tracking-wider">${t('ui_equipped')}</span>
                                        <div class="flex items-center gap-1">
                                            ${state.secondary ? `<img src="${statIconMap[state.secondary]}" class="w-4 h-4 rounded flex-shrink-0">` : `<div class="w-4 h-4 rounded flex-shrink-0 bg-gray-950/30 border border-gray-800 flex items-center justify-center text-[8px] text-gray-600 font-bold">—</div>`}
                                            <select onchange="updateStat('${gear.id}', 'secondary', this.value)" class="w-full bg-gray-950 border border-gray-700 ${state.secondaryChecked ? 'text-white border-gameGold/50' : 'text-gray-400'} text-xs rounded-lg px-1.5 py-1 focus:outline-none focus:border-gameGold cursor-pointer">${secOptions}</select>
                                        </div>
                                    </div>
                                    <div>
                                        <span class="text-[8px] uppercase font-bold text-gray-500 block mb-0.5 tracking-wider">${t('ui_target')}</span>
                                        <div class="flex items-center gap-1">
                                            ${state.secondaryDesired ? `<img src="${statIconMap[state.secondaryDesired]}" class="w-4 h-4 rounded flex-shrink-0">` : `<div class="w-4 h-4 rounded flex-shrink-0 bg-gray-950/30 border border-gray-800 flex items-center justify-center text-[8px] text-gray-600 font-bold">—</div>`}
                                            <select onchange="updateStat('${gear.id}', 'secondaryDesired', this.value)" class="w-full bg-gray-950 border border-gray-700 ${state.secondaryChecked ? 'text-white border-gameGold/50' : 'text-gray-400'} text-xs rounded-lg px-1.5 py-1 focus:outline-none focus:border-gameGold cursor-pointer">${secDesiredOptions}</select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Ranura Rara Normal con Doble Selector -->
                            <div class="p-2 rounded-xl border transition-all duration-300 ${state.rareChecked ? 'ring-1 ring-gamePurple/50 bg-gamePurple/10 border-gamePurple/30' : 'border-gray-800 bg-gray-900/50'}">
                                <div class="flex justify-between items-center mb-1">
                                    <span class="text-[11px] uppercase tracking-widest text-gamePurple font-bold flex items-center gap-1.5">
                                        <span class="w-1.5 h-1.5 rounded-full bg-gamePurple ${state.rareChecked ? 'animate-pulse' : 'opacity-50'}"></span>
                                        ${t('ui_rare')}
                                    </span>
                                    ${state.rareChecked ? `
                                        <span class="text-[10px] text-emerald-400 font-extrabold flex items-center gap-1 uppercase tracking-wider">
                                            ✓ ${t('ui_bis_match')}
                                        </span>
                                    ` : `
                                        <span class="text-[9px] text-gray-500 uppercase tracking-widest font-bold">
                                            ${t('ui_no_match')}
                                        </span>
                                    `}
                                </div>
                                <div class="grid grid-cols-2 gap-2 mt-1">
                                    <div>
                                        <span class="text-[8px] uppercase font-bold text-gray-500 block mb-0.5 tracking-wider">${t('ui_equipped')}</span>
                                        ${rareOpts.length > 0 ? 
                                            `<select onchange="updateStat('${gear.id}', 'rare', this.value)" class="w-full bg-gray-950 border border-gray-700 ${state.rareChecked ? 'text-white border-gamePurple/50' : 'text-gray-400'} text-xs rounded-lg px-1.5 py-1 focus:outline-none focus:border-gamePurple cursor-pointer">${rareOptionsHTML}</select>` : 
                                            `<div class="w-full bg-gray-950 border border-gray-700 text-gray-400 text-xs font-mono rounded-lg px-1.5 py-1.5 text-center truncate">${state.rare || '—'}</div>`
                                        }
                                    </div>
                                    <div>
                                        <span class="text-[8px] uppercase font-bold text-gray-500 block mb-0.5 tracking-wider">${t('ui_target')}</span>
                                        ${rareOpts.length > 0 ? 
                                            `<select onchange="updateStat('${gear.id}', 'rareDesired', this.value)" class="w-full bg-gray-950 border border-gray-700 ${state.rareChecked ? 'text-white border-gamePurple/50' : 'text-gray-400'} text-xs rounded-lg px-1.5 py-1 focus:outline-none focus:border-gamePurple cursor-pointer">${rareDesiredOptionsHTML}</select>` : 
                                            `<div class="w-full bg-gray-950 border border-gray-700 text-gray-400 text-xs font-mono rounded-lg px-1.5 py-1.5 text-center truncate">${state.rare || '—'}</div>`
                                        }
                                    </div>
                                </div>
                            </div>
                        `}
                    </div>
                </div>

                <div class="px-4 py-2 bg-gray-950/60 border-t border-gray-900 flex justify-between items-center gap-2 relative z-10">
                    <div class="relative w-1/2">
                        <button onclick="event.stopPropagation(); toggleCustomDropdown('dropdown-${gear.id}')" style="color: ${sigilColor}; border-color: ${state.sigil === 'none' ? '#1f2937' : sigilColor};" class="w-full bg-gray-900 border text-xs font-bold rounded-lg px-2 py-1.5 focus:outline-none cursor-pointer flex items-center justify-between gap-1.5 select-none min-h-[32px]">
                            <div class="flex items-center gap-1.5 min-w-0 truncate">
                                ${currentSigil.image ? `
                                    <div class="w-5 h-5 rounded flex-shrink-0 overflow-hidden bg-gray-950 border border-gray-800" style="background-image: url('${qualityBgImages[currentSigil.quality] || ''}'); background-size: cover; background-position: center;">
                                        <img src="${currentSigil.image}" class="w-full h-full object-contain" onerror="this.style.display='none'">
                                    </div>
                                ` : `
                                    <div class="w-5 h-5 rounded flex-shrink-0 bg-gray-950/30 border border-gray-800 flex items-center justify-center text-[10px] text-gray-600 font-bold">—</div>
                                `}
                                <span class="truncate">${t(currentSigil.nameKey)}</span>
                            </div>
                            <svg class="w-3 h-3 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div id="dropdown-${gear.id}" class="hidden absolute z-50 bottom-full mb-1 left-0 w-[180%] max-w-[340px] max-h-60 overflow-y-auto bg-gray-950 border border-gray-800 rounded-lg shadow-2xl divide-y divide-gray-900/60 custom-scrollbar scrollbar-thin">
                            ${dropdownItemsHTML}
                        </div>
                    </div>
                    <span class="text-[10px] text-gray-500 font-mono truncate w-1/2 text-right" title="${currentSigil.stat2 ? `${currentSigil.stat} / ${currentSigil.stat2}` : (currentSigil.stat || '')}">
                        ${t('ui_bonus')} <span class="text-gray-300">${currentSigil.stat || ''}${currentSigil.stat2 ? ` / ${currentSigil.stat2}` : ''}</span>
                    </span>
                </div>`;
                
        grid.innerHTML += cardHTML;
    });

    // Auto-ajustar ancho de selectores de nivel (level-selector)
    document.querySelectorAll('.level-selector').forEach(selector => {
        const options = Array.from(selector.options);
        const selectedOption = options.find(option => option.selected);
        const hasSelected = selectedOption !== undefined;
        if (hasSelected) {
            selector.style.width = `${selectedOption.textContent.length * 8 + 20}px`; // Ajustar ancho basado en el texto seleccionado
        } else {
            selector.style.width = 'auto';
        }
    });

    // Manejo del selector de color
    document.querySelectorAll(".color-toggle-container").forEach(container => {
        container.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('color-toggle-button')) {
                const gearId = container.dataset.gearId;
                const color = target.dataset.color;
                window.updateBgColor(gearId, color);
            }
        });
    });
};

// ====== INICIALIZAR ======
document.addEventListener('DOMContentLoaded', renderPlanner);
