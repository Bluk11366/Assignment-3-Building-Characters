var canvas;
var Canvas;
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

function setup(){
    new Canvas(windowWidth, windowHeight);
    background('black');
    world.gravity.y = 10;

    sprite = new Sprite();
	sprite.width = 50;
	sprite.height = 50;

    	floor = new Sprite();
	floor.y = windowHeight;
	floor.w = 238;
	floor.h = 5;
	floor.physics = STATIC;
}

function update(){
    clear();
}