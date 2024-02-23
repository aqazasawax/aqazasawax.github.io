//Player stores most of the data from the game and is used to make save files
var player;
var tmp{};

//Default save file for the beginning of the game
function startPlayer() {
	return {
		autosave: true,
		time: Date.now(),
		offlineProduction: true,
		timePlayed: 0,
		points: new Decimal(10),
		tree1: {
			upgrades: [],
		},
	}
}

//Save data into local storage
function save() {
	localStorage.setItem("save-data", btoa(JSON.stringify(player)))
}

//Load data from local storage and calculate offline time
function load() {
	let get = localStorage.getItem("save-data");
	if (get===null||get===undefined) player = startPlayer()
		else player = JSON.parse(atob(get))
	if (player.offlineProd) {
		if (player.offTime === undefined) player.offTime = { remain: 0 }
		player.offTime.remain += (Date.now() - player.time) / 1000
	}
	player.time = Date.now()
	updateTemp();
	loadVue();
}

//Increases timePlayed in player. Called by gameLoop
function addTime(diff) {
	let data = player
	let time = data.timePlayed
	time += toNumber(diff)
	data.timePlayed = time
}

function getPointGen() {
	let gain = new Decimal(1)
	return gain
}

//
function gameLoop(diff) {
	if(isNAN(diff)) diff = 0
	addTime(diff)
	if(diff === 0) return

	if (player.tree1.upgrades.includes(11)) player.points = player.points.add(tmp.pointGen.times(diff)).max(0)
}

//Autosave timer
var saveInterval = setInterval(function() {
	if (player===undefined) return;
	if (gameEnded&&!player.keepGoing) return;
	if (player.autosave) save();
}, 5000)

// interval that runs the game. Adds offline time to game speed. Calls gameLoop
var running = false
var interval = setInterval(function() {
	if(player===undefined) return;
	if(running) return;
	running = true
	let now = Date.now()
	let diff = (now - player.time) / 1e3
	if (player.offTime !== undefined) {
		if (player.offTime.remain > 0) {
			let offlineDiff = Math.max(player.offTime.remain / 10, diff)
			player.offTime.remain -= offlineDiff
			diff += offlineDiff
		}
		if (!player.offlineProd || player.offTime.remain <= 0) delete player.offTime
	}
	player.time = now
	gameLoop(diff)
	running = false;
}, 50)
