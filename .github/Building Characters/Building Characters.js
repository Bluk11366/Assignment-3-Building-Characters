var canvas;
var Canvas;
var w = 400;
var h = 400;
var windowWidth = windowWidth;

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
    // sprite.image = "";

    floor = new Sprite();
	floor.y = windowHeight;
	floor.w = windowWidth;
	floor.h = 5;
	floor.physics = STATIC;

    ceiling = new Sprite();
	ceiling.y = 0;
	ceiling.w = windowWidth;
	ceiling.h = 5;
	ceiling.physics = STATIC;

}


function update(){
    clear();
}