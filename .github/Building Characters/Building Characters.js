var canvas;
var w = 400;
var h = 400;

setUpCanvas();
setup();

function setUpCanvas(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "4px solid purple";
}

function setup()
{
    new Canvas(windowWidth, windowHeight);
    world.gravity.y = 10;
}

function update() {
	background('blue');
}