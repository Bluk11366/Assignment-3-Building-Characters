var canvas;
var Canvas;
var w = 400;
var h = 400;
var windowWidth = windowWidth;
var windowHeight = windowHeight;

let sprite1

setUpCanvas();
setup();

function preload(){
    anim = loadAnimation()

}

function setUpCanvas(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "4px solid purple";
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    background('black');
    // world.gravity.y = 10;

    sprite = new Sprite();
	sprite.width = 50;
	sprite.height = 50;
    // sprite.image = "";
}

function calculateHealth() {
  health -= 5;
  health = constrain(health, 0, 100);
}



function update(){
    clear();
}