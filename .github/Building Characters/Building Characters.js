let vita;
// let points;
let walls
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
    vita.animation.stop();

    point = createSprite(150, 150, 30, 30);
    point.shapeColor = "yellow";

    spriteGroup = new Group();
    walls = new Group();
    walls.visible = true;

    new walls.Sprite(width / 2, 0, width, 30);    // Top wall
    new walls.Sprite(width / 2, height, width, 30); // Bottom wall
    new walls.Sprite(0, height / 2, 30, height);    // Left wall
    new walls.Sprite(width, height / 2, 30, height);  // Right wall
}

function spawnRandomPoint(){
    let x = random(windowWidth);
    let y = random(windowHeight);
    let points = new spriteGroup.Sprite(x, y, 30);
    points.color = "yellow";
    points.life = 300;
}

function draw(spawnInterval){
    clear();
    if (mouse.pressing('left')){
    vita.moveTo(mouse.x, mouse.y, 8);
    }

    if (frameCount % spawnInterval === 0) {
    spawnRandomPoint();
    spawnInterval = random(30, 90);
}
    
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