let vita;

function preload(){
    vitaAnim = loadImage('PsVita.gif');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    vita = createSprite(windowWidth/2, windowHeight/2, 100, 100);
    vita.addAnimation("vita", vitaAnim)
}

function draw(){
    background("black");
    let currentTime = int(millis()/1000);
    textSize(24);
    fill(0, 75, 300);
    text("Time:" + currentTime, 30, windowHeight-30);
}

function calculateHealth() {
  health -= 5;
  health = constrain(health, 0, 100);
}