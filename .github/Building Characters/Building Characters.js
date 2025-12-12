function preload(){
    anim = loadAnimation("https://github.com/Bluk11366/Assignment-3-Building-Characters/blob/a6bc1bfc66e3b54cc2b9ddcffe57ffc5aa9a8273/.github/Images/PsVita1.png", ".github\Images\PsVita2.png", ".github\Images\PsVita3.png");
}

function calculateHealth() {
  health -= 5;
  health = constrain(health, 0, 100);
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
}

function draw(){
    background("black");
    let currentTime = int(millis()/1000);
    textSize(24);
    fill(0, 75, 153);
    text("Time:" + currentTime, 30, 380);
}