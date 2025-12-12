// function preload(){
//     anim = loadAnimation("Images\PsVita1.png", "Images\PsVita2.png", "Images\PsVita3.png");
// }

// function calculateHealth() {
//   health -= 5;
//   health = constrain(health, 0, 100);
// }

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    let currentTime = int(millis()/1000);
    textSize(24);
    fill(125, 75, 153);
    text("Time:" + currentTime, 30, 380);
}

function draw(){
    background("black");
    strokeWeight(40);
    stroke("orange");
    point(mouseX, mouseY);
}