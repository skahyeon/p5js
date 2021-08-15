//Jaehyeon Nam
//Velocity Particles Array Exercise
//CS099
//Spring 2020
var v =[];
function setup() {
  createCanvas(500, 500);
    
}
function draw() 
{
  strokeWeight(2)
  background('#5CD1E5');

  for(var i=1; i<v.length; i++){
  circle(v[i].position.x,v[i].position.y,20);
  v[i].update();
}
  
}
function mousePressed(){
  for(var j = 0;j<20;j++){
    
    v.push(new particle(mouseX,mouseY,random(1,3)*10,random(3,5)*PI*2));
  }
  
}