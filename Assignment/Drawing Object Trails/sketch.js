//Jaehyeon Nam
//Drawing Object Trails Exercise
//CS099
//Spring 2020
var particles = []
function setup() {
  createCanvas(600, 600);
  Particle = new particle(300,300)
}

function mousePressed() {
  particles.push(new particle(mouseX,mouseY))
}

function draw() {
  background('#5CD1E5');
  for (var i = 0; i<particles.length; i++) {
  particles[i].update()
  particles[i].draw()
  }
}