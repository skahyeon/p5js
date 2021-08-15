//Jaehyeon Nam
//Planet Simulation with Images Exercise
//CS099
//Spring 2020
var sat=[]
var on=false
function setup() {
  createCanvas(900, 800);
  satImg = loadImage('image/sat.jpg')
  //sat1 = new particle(mouseX, mouseY, 5, 90, 0)
  
  SunImg = loadImage('image/Sun.png')
  p1Img = loadImage('image/p1.png')
  p2Img = loadImage('image/p2.png')
  p3Img = loadImage('image/p3.png')
  moonImg = loadImage('image/moon.png')
  spaceImg = loadImage('image/space.jpg')
  satImg = loadImage('image/sat.jpg')
  Sun = new particle(400, 350, 0, 0, 20000);
  p1 = new particle(600, 400, 8, -90, 7000);
  p2 = new particle(20, 300, 6, -90, 7000);
  p3 = new particle(700, 400, 6, -90, 7000);
  moon1 = new particle(50, 0, 4, -90, 7000);
  moon2 = new particle(50, 0, 4.5, -90, 7000);
  moon3 = new particle(-100, 0, 3.5, 90, 7000);
  moon4 = new particle(40, 0, 5, -90, 7000);
  moon5 = new particle(-60, 0, 4, 90, 7000);
  s = new particle(400,350, 0, 0, 20000);
  e = new particle(0, 0, 0, 0, 1100);
  //z = new particle(0,0,0,0,100);
}

function draw() {
  
  background(spaceImg);
 
  image(SunImg, Sun.position.x, Sun.position.y, 90,90);
  image(p1Img,p1.position.x, p1.position.y, 60,60);
  p1.gravitateTo(s);
  p1.accelerate();
  image(p2Img,p2.position.x, p2.position.y, 60,60);
  p2.gravitateTo(s);
  p2.accelerate();
  image(p3Img,p3.position.x, p3.position.y, 60,60);
  p3.gravitateTo(s);
  p3.accelerate();
  image(moonImg,moon1.position.x + p1.position.x, moon1.position.y  + p1.position.y, 20,20);
  moon1.gravitateTo(e);
  moon1.accelerate();
  image(moonImg,moon2.position.x + p2.position.x, moon2.position.y + p2.position.y, 20,20);
  moon2.gravitateTo(e);
  moon2.accelerate();
 image(moonImg,moon3.position.x + p2.position.x, moon3.position.y + p2.position.y, 20,20);
  moon3.gravitateTo(e);
  moon3.accelerate();
  image(moonImg,moon4.position.x + p3.position.x, moon4.position.y + p3.position.y, 20,20);
  moon4.gravitateTo(e);
  moon4.accelerate();
  image(moonImg,moon5.position.x + p3.position.x, moon5.position.y + p3.position.y,20,20);
  moon5.gravitateTo(e);
  moon5.accelerate();
  

}
  



