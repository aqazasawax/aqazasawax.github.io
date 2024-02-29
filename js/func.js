// returns true if current tab is tab
function onTab(tab) {
        return player[tab].active;
}

// returns true if you can buy an upgrade
function canAfford(costType, tab, upg) {
        if (player[tab].upgrades.includes(upg)) return
        if (player[costType].gte(upg.cost)) return true;
}

function buyUpg(tab, id) {
        if(!UPGRADES[tab][id].unlocked()) return
        if(player[tab].upgrades.includes(id)) return
        if(player.points.lt(UPGRADES[tab][id].cost) return
        player[tab].upgrades.push(id);
}
