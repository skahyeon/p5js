//Jaehyeon Nam
//2D Vector Exercise
//CS099
//Spring 2020
let v,v2,n;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  v1 = createVector(80, 50);
  ve0 = new Vec2(10,210)
  ve1 = new Vec2(1000,200)
  ve2 = new Vec2(300,400)
  ve3 = new Vec2(500,600)
  ve4 = new Vec2(700,800)
  ve5 = new Vec2(90,10)
  ve6 = new Vec2(800,900)
  ve7 = new Vec2(600,100)
  ve8 = new Vec2(200,540)
  ve9 = new Vec2(80,9)
  ve10 = new Vec2(200,20)
  ve11 = new Vec2(200,224)
}
function draw() {
  strokeWeight(10)
  background('#008299');
  push()
  stroke(255,0,0)
  line(0,0,ve0.x,ve0.y)//1,o
  pop()
  push()
  stroke(255,100,0)
  ve7.getAngle(40)
  line(200,200,ve7.x,ve7.y)//2,o
  pop()
  //push()
  //stroke('#FFFFFF')  
  //ve2.getLength(1)
  //line(200,200,ve2.x,ve2.y)//3,x
  //pop()
  push()
  stroke('#000000')
  ve3.setAngle(20)
  line(0,0,ve3.x,ve3.y)//4,o
  pop()
  push()
  stroke(255,255,20)
  ve1.getLength(20)
  line(200,200,ve1.x,ve1.y)//5,o
  pop()
  push()
  stroke(185,15,185)
  ve5.setLength(100)
  line(200,200,ve5.x,ve5.y)//6,o
  pop()
  push()
  stroke('#00FF00')
  ve6.addTo(v1)
  line(0,200,ve6.x,ve6.y)//7,o
  pop()
  push()
  stroke('#B4FFFF')
  line(200,200,ve6.add(v1).x,ve6.add(v1).y)//8,o
  pop()
  push()
  stroke(0,0,255)
  line(200,200,ve5.subtract(v1).x,ve5.subtract(v1).y)//9,o
  pop()
  push()
  stroke('#BCE55C')
  ve4.subtractFrom(v1)
  line(200,200,ve4.x,ve4.y)//10,o
  pop()
  push()
  stroke('#FF7EFF')
  line(200,200,ve9.multiply(3).x,ve9.multiply(3).y)//11,o
  pop()
  push()
  stroke('#FF007F')
  ve2.multiplyBy(1)
  line(200,200,ve2.x,ve2.y)//12,o
  pop()
  push()
  stroke('#ABF200')//o
  line(200,200,ve1.divide(1).x,ve2.divide(1).y)//13,o
  pop()
  push()
  stroke('#FFE08C')
  ve8.divideBy(4)
  line(200,200,ve8.x,ve8.y)//14,o
  pop()
}
