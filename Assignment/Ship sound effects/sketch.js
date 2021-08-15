//Jaehyeon Nam
//Ship Sound Effects Exercise
//CS099
//Spring 2020
var angle = 0;
var thrusting = false;
var turnleft = false;
var turnright = false;

function preload() {
  BGM1 = loadSound('sound/BGM1.mp3')
  BGM2 = loadSound('sound/BGM2.mp3')
  BGM3 = loadSound('sound/BGM3.mp3')
  Ocean = loadImage('image/ocean.png')
}

function setup() {
  createCanvas(720, 514);
  BGM3.play()
  BGM3.loop()
  BGM2.setVolume(0.35)
  thrust = new Vec2(0,0);
  ship = new particle(width / 2, height / 2, 0, 0)
}


function draw() {
  background(Ocean);
  drawship(ship.position.x, ship.position.y, angle);
  ship.accelerate(thrust);
  ship.update(); 
}

function drawship(x, y, angle) {
  push();
  noStroke()
  fill('#00244B')
  translate(x, y);
  rotate(angle);
  rect(-10, -5, 30, 10);
  triangle(30, 0, 15, 15, 15, -15);
  pop();
}


function keyPressed() {
  if (keyCode == '37') {
    turnleft = true;
  }

  if (keyCode == '38') {
    thrusting = true;
    BGM1.play()
    BGM1.loop()
  }
  
  if (keyCode == '39') {
    turnright = true;
  }
  else return;  
}

function keyReleased(){
  if (keyCode == '37') {
    turnleft = false;
  }

  if (keyCode == '38') {
    thrusting = false;
    BGM1.stop()
  }
  
  if (keyCode == '39') {
    turnright = false;
  }
  else return;
}