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
    anim = loadAnimation(".github\Images\PsVita1.png", ".github\Images\PsVita2.png", ".github\Images\PsVita3.png");

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
    sprite1 = createSprite(windowWidth/2, windowHeight/2, 100, 100);
 
}

function calculateHealth() {
  health -= 5;
  health = constrain(health, 0, 100);
}



function update(){
    clear();
}