//Jaehyeon Nam
//Emotional Face Class Exercise
//CS099
//Spring 2020
const SHOCKED = 0;
const HAPPY   = 1;
const ANGRY   = 2;
var face1

function setup() {
  createCanvas(400, 400);
 face1 = new face(width/2,width/2,100,10,100,250,250)

}

function draw() {
  background(225);
  face1.draw()
  face1. update()
  face1.move()
  
}