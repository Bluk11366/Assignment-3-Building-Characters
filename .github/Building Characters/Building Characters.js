var canvas;
var w = width;
var h = height;

setUpCanvas();

function setup() {
	new Canvas(w, h);
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
