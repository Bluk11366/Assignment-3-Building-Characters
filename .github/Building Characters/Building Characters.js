let vita;
let point;
let health = 100;
let score = 0;
let spriteGroup;
let spawninterval = 180;

function preload(){
    vitaAnim = loadImage('PsVita.gif');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    vita = createSprite(windowWidth/2, windowHeight/2);
    vita.addAnimation("vita", vitaAnim)

    // point = createSprite(150, 150, 30, 30);
    // point.shapeColor = "yellow";

    spriteGroup = new Group();
}

function draw(){
    clear();
    if (mouse.pressing('left')){
    vita.moveTo(mouse.x, mouse.y, 8);
    }

    if (frameCount % spawnInterval === 0) {
    spawnRandomSprite();
    spawnInterval = random(30, 90);
}
    
    background("black");
    let currentTime = int(millis()/1000);
    textSize(24);
    fill(0, 75, 300);
    text("Time:" + currentTime, 30, windowHeight-30);
}

function spawnRandomSprite(){
    let x = random(width);
    let y = random(height);
    let newSprite = new spritesGroup.Sprite(x, y, 30);
    newSprite.life = 300;
}

function calculateHealth() {
  health -= 5;
  health = constrain(health, 0, 100);
}