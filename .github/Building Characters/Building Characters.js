var canvas;
var w = 400;
var h = 400;

setUpCanvas();

function setup() {
	new Canvas(250, 100);
}

function update() {
	background('blue');
}

function setUpCanvas(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "4px solid purple";
}


function draw()
{

}
