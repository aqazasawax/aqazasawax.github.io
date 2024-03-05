var player;

function startPlayer() {
  return {
    time: Date.now(),
    timePlayed: 0,
    points: new Decimal(10),
  }
}

function save() {
  localStorage.setItem("save-data", btoa(JSON.stringify(player)))
}

function load() {
  let get = localStorage.getItem("save-data");
  if (get === null||get === undefined) player = startPlayer()
  else player = JSON.parse(atob(get))
  player.time = Date.now()
  loadVue();
}

function addTime(diff) {
  let data = player
  let time = data.timePlayed
  time += toNumber(diff)
  data.timePlayed = time
}

function gameLoop(diff) {
  addTime(diff)
  if (diff === 0) return
}

var interval = setInterval(function() {
  if (player === undefined) return;
  let now = Date.now()
  let diff = (now - player.time) / 1e3
  player.time = now
  gameLoop(diff)
}, 50)
