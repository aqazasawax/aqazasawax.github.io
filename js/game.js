var player;

function startPlayer() {
  return {
    autosave: true,
    time: Date.now(),
    offlineProduction: true,
    timePlayed: 0,
    points: 10,
    tree1: {
      upgrades: [],
    },
  }
}

function save() {
  localStorage.setItem("save-data", btoa(JSON.stringify(player)))
}

function load() {
  let get = localStorage.getItem("save-data");
  if (get===null||get===undefined) player = startPlayer()
	else player = JSON.parse(atob(get))
  if (player.offlineProd) {
		if (player.offTime === undefined) player.offTime = { remain: 0 }
		player.offTime.remain += (Date.now() - player.time) / 1000
	}
  player.time = Date.now()
}
