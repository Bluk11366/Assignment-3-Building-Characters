var canvas;
var w = 400;
var h = 400;
let sprite;

setUpCanvas();

function setUpCanvas(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "4px solid purple";
}

function setup() {

	sprite = new Sprite();
	sprite.width = 50;
	sprite.height = 50;
}

function draw()
{

}
