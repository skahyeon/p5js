//Jaehyeon Nam
//Noisy Loop Assignment
//CS099
//Spring 2020
let animal
let noiseMax = 0.2;
let phase = 0;
const frame = 60
let count = 0
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  animal = new Animal()
}

function draw() {
  background('#0054FF');
  
  let p = float(count % frame) / frame
  count++
  
  animal.update(p * TWO_PI)
  animal.draw()
  
  
  
push()
  translate(width/2, height/2);
  stroke(0);
  noFill();
  beginShape();
  
  for(let q= 0; q<TWO_PI; q+=0.1){
    let xoff = map(cos(q+phase),-1,1,0,noiseMax);
    let yoff = map(sin(q+phase),-1,1,0,noiseMax);
    let r = map(noise(xoff,yoff),0,1,150,200);
    let x = r*cos(q);
    let y = r*sin(q);
    vertex(x,y);
  }
  endShape(CLOSE);
  phase += 0.05;
  pop()
}