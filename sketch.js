function setup() {
  createCanvas(480, 800);
  createSprite(400, 200, 50, 50);

  var ground = new Ground(0, 790, 480, 20);
  var plinko1 = new plinko()
}

function draw() {
  background(255,255,255);  
  drawSprites();
}