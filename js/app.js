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
let plannerState = JSON.parse(localStorage.getItem('checklist_gear_planner_state')) || {};

function saveAndRefresh() {
    localStorage.setItem('checklist_gear_planner_state', JSON.stringify(plannerState));
    renderPlanner();
}

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
    saveAndRefresh();
};

window.toggleRaid = function(id, isRaid) { plannerState[id].raid = isRaid; saveAndRefresh(); };
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
    } else {
        state[type] = val;
    }
    saveAndRefresh();
};

window.swapStats = function(id) {
    const state = plannerState[id];
    if (!state) return;
    const tempPrimary = state.primary;
    const tempPrimaryChecked = state.primaryChecked;
    
    state.primary = state.secondary;
    state.primaryChecked = state.secondaryChecked;
    
    state.secondary = tempPrimary;
    state.secondaryChecked = tempPrimaryChecked;
    
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
    if (confirm('¿Restablecer todo el planificador? Se perderá el progreso / Reset all data?')) {
        plannerState = {};
        localStorage.removeItem('checklist_gear_planner_state');
        renderPlanner();
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

function validateGearStats(gearId) {
    const state = plannerState[gearId];
    if (!state) return;
    const build = plannerState.build || 'strength';
    const banned = bannedStats[build][gearId] || [];
    
    const allStats = ['versatilidad', 'maestria', 'presteza', 'critico', 'suerte'];
    const allowedStats = allStats.filter(s => !banned.includes(s));
    
    if (state.primary && !allowedStats.includes(state.primary)) state.primary = '';
    if (state.secondary && !allowedStats.includes(state.secondary)) state.secondary = '';

    const rareOpts = rareStatsData[build][gearId] || [];
    if (!rareOpts.includes(state.rare)) state.rare = rareOpts[0] || '';

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

// ====== RENDERIZADO PRINCIPAL ======
window.renderPlanner = function() {
    if (!plannerState.build) plannerState.build = 'strength';
    const buildSelect = document.getElementById('global-build-select');
    if (buildSelect) buildSelect.value = plannerState.build;

    gearData.forEach(gear => {
        if (!plannerState[gear.id]) {
            plannerState[gear.id] = { obtained: false, primary: '', primaryChecked: false, secondary: '', secondaryChecked: false, rare: '', rareChecked: false, level: 'Lv220', bgColor: 'dorado', sigil: 'none', raid: false };
        }
        validateGearStats(gear.id);
    });

    // 1. RENDER PRIORITY PANEL
    const priorityPanel = document.getElementById('priority-farming-panel');
    const missingGears = gearData.map(gear => {
        const state = plannerState[gear.id];
        const checks = state.raid ? [state.primaryChecked, state.secondaryChecked] : [state.primaryChecked, state.secondaryChecked, state.rareChecked];
        return { gear, state, checkedCount: checks.filter(Boolean).length, maxChecks: state.raid ? 2 : 3 };
    }).filter(item => item.checkedCount < item.maxChecks).sort((a, b) => a.checkedCount - b.checkedCount);

    if (missingGears.length > 0) {
        let priorityCardsHTML = missingGears.map((item, index) => {
            const { gear, checkedCount, maxChecks } = item;
            let badgeClass = checkedCount === 0 ? 'bg-red-950 text-red-400 border-red-800' : checkedCount === 1 ? 'bg-orange-950 text-orange-400 border-orange-800' : 'bg-yellow-950 text-yellow-400 border-yellow-800';
            let borderClass = checkedCount === 0 ? 'border-red-900/60 hover:border-red-500/50' : checkedCount === 1 ? 'border-orange-900/40 hover:border-orange-500/50' : 'border-yellow-900/40 hover:border-yellow-500/50';

            return `
                <a href="#card-${gear.id}" class="gaming-card p-3 rounded-xl border ${borderClass} flex items-center gap-3 hover:scale-[1.02] transition-all duration-200">
                    <div class="relative w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img src="${gear.image}" class="w-9 h-9 object-contain" onerror="this.src='https://via.placeholder.com/36'">
                        <div class="absolute -top-1.5 -left-1.5 w-5 h-5 bg-gray-950 border border-gray-800 rounded-full flex items-center justify-center text-[10px] font-bold text-gray-300">#${index + 1}</div>
                    </div>
                    <div class="flex-grow min-w-0">
                        <div class="font-bold text-sm text-white truncate">${t(gear.nameKey)}</div>
                        <div class="inline-block mt-0.5 text-[10px] px-1.5 py-0.5 rounded border ${badgeClass} font-semibold uppercase tracking-wider">
                            ${t('ui_missing')} ${maxChecks - checkedCount}
                        </div>
                    </div>
                </a>`;
        }).join('');

        priorityPanel.innerHTML = `
            <div class="gaming-card rounded-2xl border border-gray-800 p-5 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 cursor-pointer" onclick="togglePanel('priority-content', 'priority-icon')">
                    <div class="flex items-center gap-2.5">
                        <span class="text-xl font-bold tracking-wider uppercase bg-gradient-to-r from-gameOrange to-gameGold bg-clip-text text-transparent">${t('ui_priority_title')}</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="text-[11px] text-gray-400 bg-gray-950 border border-gray-800 px-2.5 py-1 rounded-lg hidden sm:block">${t('ui_priority_subtitle')}</div>
                        <svg id="priority-icon" class="w-5 h-5 text-gray-400 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>
                <div id="priority-content" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3.5">${priorityCardsHTML}</div>
            </div>`;
    } else {
        priorityPanel.innerHTML = `
            <div class="gaming-card rounded-2xl border border-gameGold/50 shadow-gold-glow p-6 text-center bg-gradient-to-br from-gray-950 via-yellow-900/10 to-gray-950">
                <h2 class="text-2xl font-extrabold text-gameGold mb-2 uppercase tracking-widest">🏆 ${t('ui_completed_epic')} 🏆</h2>
                <p class="text-gray-300 text-sm">${t('ui_completed_desc')}</p>
            </div>`;
    }

    // 2. RENDER DUNGEON PANEL
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
                <div class="gaming-card rounded-2xl border ${borderClass} flex flex-col">
                    <div class="relative h-20 bg-gray-950 border-b border-gray-900">
                        <img src="${dungeon.image}" class="w-full h-full object-cover opacity-50">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
                        <div class="absolute bottom-2 left-3 flex justify-between items-end w-[calc(100%-24px)]">
                            <h3 class="text-sm font-bold text-white drop-shadow-md">${dungeon.name}</h3>
                            <span class="text-[10px] px-1.5 py-0.5 rounded border ${efficiencyBadgeClass} uppercase">${efficiencyLabel}</span>
                        </div>
                    </div>
                    <div class="p-3 space-y-2 flex-grow bg-gray-950/40">${dropsHTML}</div>
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

        let imgClass = state.bgColor === 'dorado' ? 'bg-gradient-to-br from-yellow-500/20 via-yellow-600/5 to-transparent border-gameGold/50 shadow-gold-glow' : 'bg-gradient-to-br from-orange-500/20 via-red-600/5 to-transparent border-gameOrange/50 shadow-orange-glow';
        const opacityClass = isBiS ? 'opacity-100 border-gameGold/60 shadow-[0_0_20px_rgba(234,179,8,0.15)]' : 'opacity-90 border-gray-800';

        const qualityColors = {
            'Rare': '#60a5fa',       // azul para raro
            'Epic': '#a855f7',       // morado para epic
            'Legendary': '#eab308',  // dorado para legendary
            'Mythic': '#f97316'      // rojo-naranja mythic
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
        
        const filteredSigils = sigilData.filter(sigil => isSigilAllowedForGear(sigil.id, gear.id));
        dropdownItemsHTML += filteredSigils.map(sigil => {
            const color = qualityColors[sigil.quality] || '#ffffff';
            return `
                <div onclick="updateSigil('${gear.id}', '${sigil.id}')" class="flex items-center gap-2.5 px-3 py-2 hover:bg-gray-800/80 cursor-pointer text-xs font-bold select-none" style="color: ${color};">
                    <img src="${sigil.image}" class="w-5 h-5 object-contain rounded bg-gray-950 border border-gray-800 flex-shrink-0" onerror="this.src='https://via.placeholder.com/20'">
                    <span class="truncate">${t(sigil.nameKey)}</span>
                </div>
            `;
        }).join('');

        const banned = bannedStats[activeBuild][gear.id] || [];
        
        const primOptions = allBaseStats.filter(s => !banned.includes(s.key) && s.key !== state.secondary).map(opt => `<option value="${opt.key}" ${state.primary === opt.key ? 'selected' : ''}>${opt.label}</option>`).join('');
        const secOptions = allBaseStats.filter(s => !banned.includes(s.key) && s.key !== state.primary).map(opt => `<option value="${opt.key}" ${state.secondary === opt.key ? 'selected' : ''}>${opt.label}</option>`).join('');
        
        const rareOpts = rareStatsData[activeBuild][gear.id] || [];
        const rareOptionsHTML = rareOpts.map(opt => `<option value="${opt}" ${state.rare === opt ? 'selected' : ''}>${opt}</option>`).join('');
        const levelOptions = ['Lv220', 'Lv240', 'Lv260'].map(lvl => `<option value="${lvl}" ${state.level === lvl ? 'selected' : ''} class="level-selector-option">${lvl}</option>`).join('');

        const cardHTML = `
            <div id="card-${gear.id}" class="gaming-card rounded-2xl border ${opacityClass} flex flex-col">
                <div class="p-3 bg-gray-950/80 border-b border-gray-900 flex justify-between items-center">
                    <div class="flex items-center gap-2">
                        <span class="font-bold text-base uppercase text-white">${t(gear.nameKey)}</span>
                        ${isBiS ? `<span class="px-1.5 py-0.5 text-[10px] font-extrabold bg-gameGold text-black rounded uppercase animate-pulse shadow-gold-glow">BiS</span>` : ''}
                    </div>
                    <div class="flex items-center gap-3">
                        <select onchange="updateLevel('${gear.id}', this.value)" class="bg-transparent text-gray-400 text-xs font-mono focus:outline-none cursor-pointer hover:text-white level-selector">${levelOptions}</select>
                        <div class="flex gap-1 color-toggle-container" data-gear-id="${gear.id}">
                            <button class="w-4 h-4 rounded-full bg-gameOrange border hover:scale-110 ${state.bgColor === 'naranja-rojo' ? 'border-white' : 'border-transparent'} color-toggle-button" data-color="naranja-rojo"></button>
                            <button class="w-4 h-4 rounded-full bg-gameGold border hover:scale-110 ${state.bgColor === 'dorado' ? 'border-white' : 'border-transparent'} color-toggle-button" data-color="dorado"></button>
                        </div>
                    </div>
                </div>

                <div class="p-4 grid grid-cols-12 gap-4 flex-grow">
                    <!-- Imagen -->
                    <div class="col-span-4 flex flex-col items-center">
                        <div class="relative w-full aspect-square border rounded-xl overflow-hidden flex items-center justify-center ${imgClass}">
                            <img src="${gear.image}" class="w-3/4 h-3/4 object-contain" onerror="this.src='https://via.placeholder.com/80'">
                        </div>
                        <div class="mt-3 flex items-center justify-center gap-2 bg-gray-900/80 px-2 py-1.5 rounded-lg border border-gray-800 w-full">
                            <span class="text-[10px] uppercase font-bold text-gray-400">Raid</span>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer" ${state.raid ? 'checked' : ''} onchange="toggleRaid('${gear.id}', this.checked)">
                                <div class="w-7 h-4 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-red-500"></div>
                            </label>
                        </div>
                        <!-- Espacio vacío debajo del switch Raid para mostrar el sigilo grande -->
                        <div class="mt-3 w-full flex flex-col items-center justify-center border border-dashed border-gray-800 rounded-xl p-2 bg-gray-950/40 min-h-[4.5rem]">
                            ${state.sigil !== 'none' && currentSigil.image ? `
                                <img src="${currentSigil.image}" class="w-12 h-12 object-contain rounded hover:scale-110 transition-all duration-200" title="${t(currentSigil.nameKey)}">
                            ` : `
                                <span class="text-[9px] text-gray-600 font-bold uppercase tracking-wider text-center">${t('sigil_none')}</span>
                            `}
                        </div>
                    </div>

                    <!-- Stats -->
                    <div class="col-span-8 flex flex-col gap-2">
                        
                        <div class="p-2 rounded-xl border ${state.primaryChecked ? 'ring-1 ring-gameOrange/50 bg-gameOrange/10 border-gameOrange/30' : 'border-gray-800 bg-gray-900/50'}">
                            <div class="flex justify-between mb-1.5">
                                <span class="text-[11px] uppercase tracking-widest text-gameOrange font-bold flex items-center gap-1.5">
                                    <span class="w-1.5 h-1.5 rounded-full bg-gameOrange ${state.primaryChecked ? 'animate-pulse' : 'opacity-50'}"></span>
                                    ${t('ui_primary')}
                                </span>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer" ${state.primaryChecked ? 'checked' : ''} onchange="toggleStatCheck('${gear.id}', 'primaryChecked', this.checked)">
                                    <div class="w-7 h-4 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-gameOrange after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                                </label>
                            </div>
                            <select onchange="updateStat('${gear.id}', 'primary', this.value)" class="w-full bg-gray-950 border border-gray-700 ${state.primaryChecked ? 'text-white' : 'text-gray-400'} text-xs rounded-lg px-2 py-1 focus:outline-none focus:border-gameOrange cursor-pointer">${primOptions}</select>
                        </div>

                        <div class="flex justify-center -my-1.5">
                            <button onclick="swapStats('${gear.id}')" title="${t('ui_swap')}" class="z-10 bg-gray-950 border border-gray-800 text-gray-400 hover:text-gameGold hover:border-gameGold/50 p-1 rounded-full transition-all duration-200 transform hover:scale-110 flex items-center justify-center w-6 h-6 shadow-md">
                                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 16V4m0 0L3 8m4-4l4 4m10 0v12m0 0l-4-4m4 4l4-4" />
                                </svg>
                            </button>
                        </div>

                        <div class="p-2 rounded-xl border ${state.secondaryChecked ? 'ring-1 ring-gameGold/50 bg-gameGold/10 border-gameGold/30' : 'border-gray-800 bg-gray-900/50'}">
                            <div class="flex justify-between mb-1.5">
                                <span class="text-[11px] uppercase tracking-widest text-gameGold font-bold flex items-center gap-1.5">
                                    <span class="w-1.5 h-1.5 rounded-full bg-gameGold ${state.secondaryChecked ? 'animate-pulse' : 'opacity-50'}"></span>
                                    ${t('ui_secondary')}
                                </span>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer" ${state.secondaryChecked ? 'checked' : ''} onchange="toggleStatCheck('${gear.id}', 'secondaryChecked', this.checked)">
                                    <div class="w-7 h-4 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-gameGold after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                                </label>
                            </div>
                            <select onchange="updateStat('${gear.id}', 'secondary', this.value)" class="w-full bg-gray-950 border border-gray-700 ${state.secondaryChecked ? 'text-white' : 'text-gray-400'} text-xs rounded-lg px-2 py-1 focus:outline-none focus:border-gameGold cursor-pointer">${secOptions}</select>
                        </div>

                        <div class="p-2 rounded-xl border ${state.rareChecked && !state.raid ? 'ring-1 ring-gamePurple/50 bg-gamePurple/10 border-gamePurple/30' : 'border-gray-800 bg-gray-900/50'} ${state.raid ? 'opacity-40 pointer-events-none' : ''}">
                            <div class="flex justify-between mb-1.5">
                                <span class="text-[11px] uppercase tracking-widest text-gamePurple font-bold flex items-center gap-1.5">
                                    <span class="w-1.5 h-1.5 rounded-full bg-gamePurple ${state.rareChecked && !state.raid ? 'animate-pulse' : 'opacity-50'}"></span>
                                    ${t('ui_rare')}
                                </span>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer" ${state.raid ? 'disabled' : ''} ${state.rareChecked && !state.raid ? 'checked' : ''} onchange="toggleStatCheck('${gear.id}', 'rareChecked', this.checked)">
                                    <div class="w-7 h-4 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-gamePurple after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
                                </label>
                            </div>
                            ${rareOpts.length > 1 ? 
                                `<select onchange="updateStat('${gear.id}', 'rare', this.value)" class="w-full bg-gray-950 border border-gray-700 text-xs rounded-lg px-2 py-1 focus:outline-none focus:border-gamePurple cursor-pointer">${rareOptionsHTML}</select>` : 
                                `<div class="w-full bg-gray-950 border border-gray-700 text-gray-400 text-xs font-mono rounded-lg px-2 py-1 text-center truncate">${state.rare}</div>`
                            }
                        </div>
                    </div>
                </div>

                <div class="px-4 py-2 bg-gray-950/60 border-t border-gray-900 flex justify-between items-center gap-2">
                    <div class="relative w-1/2">
                        <button onclick="event.stopPropagation(); toggleCustomDropdown('dropdown-${gear.id}')" style="color: ${sigilColor}; border-color: ${state.sigil === 'none' ? '#1f2937' : sigilColor};" class="w-full bg-gray-900 border text-xs font-bold rounded-lg px-2 py-1.5 focus:outline-none cursor-pointer flex items-center justify-between gap-1.5 select-none min-h-[32px]">
                            <div class="flex items-center gap-1.5 min-w-0 truncate">
                                ${currentSigil.image ? `
                                    <img src="${currentSigil.image}" class="w-5 h-5 object-contain rounded flex-shrink-0 bg-gray-950 border border-gray-800">
                                ` : `
                                    <div class="w-5 h-5 rounded flex-shrink-0 bg-gray-950/30 border border-gray-800 flex items-center justify-center text-[10px] text-gray-600 font-bold">—</div>
                                `}
                                <span class="truncate">${t(currentSigil.nameKey)}</span>
                            </div>
                            <svg class="w-3 h-3 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div id="dropdown-${gear.id}" class="hidden absolute z-50 bottom-full mb-1 left-0 right-0 max-h-60 overflow-y-auto bg-gray-950 border border-gray-800 rounded-lg shadow-2xl divide-y divide-gray-900/60 custom-scrollbar scrollbar-thin">
                            ${dropdownItemsHTML}
                        </div>
                    </div>
                    <span class="text-[10px] text-gray-500 font-mono truncate w-1/2 text-right">
                        ${t('ui_bonus')} <span class="text-gray-300">${currentSigil.stat}</span>
                    </span>
                </div>
            </div>`;
        grid.insertAdjacentHTML('beforeend', cardHTML);
    });

    updateGlobalStats();

    // Manejo de la visibilidad de los selectores de nivel
    document.querySelectorAll(".level-selector").forEach(selector => {
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
