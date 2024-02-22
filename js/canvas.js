var canvas;
var ctx;

window.addEventListener("resize", (_=>resizeCanvas()));

function retrieveCanvasData() {
	let treeCanv = document.getElementById("treeCanvas")
	let treeTab = document.getElementById("treeTab")
	if (treeCanv===undefined||treeCanv===null) return false;
	if (treeTab===undefined||treeTab===null) return false;
	canvas = treeCanv;
	ctx = canvas.getContext("2d");
	return true;
}

function resizeCanvas() {
	if (!retrieveCanvasData()) return
	canvas.width = 0;
	canvas.height = 0;
    	canvas.width = document.getElementById("treeTab").scrollWidth;
    	canvas.height = document.getElementById("treeTab").scrollHeight;
	drawTree();
}

function drawTree() {
	if(!retrieveCanvasData()) return;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
