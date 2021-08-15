//Jaehyeon Nam
//Simple Paddle and Ball Exercise
//CS099
//Spring 2020
var paddle1
var ball1
function setup() {
  createCanvas(450, 500);
  
paddle1 = new paddle(width/2-160,400,90,10,5)
ball1 = new ball(200,260,30,4,5)
ball2 = new ball(130,30,30,2,5)
ball3 = new ball(30,330,30,5,6)
ball4 = new ball(430,320,30,8,7)
}

function draw() {
  background('#F6F6F6');
  push()
  fill('#BDBDBD')
  paddle1.draw()
  paddle1.update();
  pop()
  push()
  fill('yellow')
  ball1.draw()
  ball1.move()
  ball1.update()
  pop()
   push()
  fill('#00D8FF')
  ball2.draw()
  ball2.move()
  ball2.update()
  pop()
   push()
  fill('#1DDB16')
  ball3.draw()
  ball3.move()
  ball3.update()
  pop()
   push()
  fill('red')
  ball4.draw()
  ball4.move()
  ball4.update()
  pop()
}