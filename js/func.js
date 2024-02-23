// returns true if current tab is tab
function onTab(tab) {
        return player[tab] == tab;
}

// returns true if you can buy an upgrade
function canAfford(costType, tab, upg) {
        if (player[tab].upgrades.includes(upg)) return
        if (player[costType].gte(upg.cost)) return true;
}
