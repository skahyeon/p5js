//Jaehyeon Nam
//Gravity Particles Array Exercise
//CS099
//Spring 2020
var v =[];
function setup() {
  createCanvas(600, 600);
    
}
function draw() 
{
  strokeWeight(2)
  background('#F15F5F');

  for(var i=1; i<v.length; i++){
  circle(v[i].position.x,v[i].position.y,20);
  v[i].update();
}
  
}
function mousePressed(){
  for(var j = 0;j<20;j++){
    
    v.push(new gravity(mouseX,mouseY,random(1,3)*2,random(3,5)*PI,random(0.1),random(PI/2),0.15));
  }
  
}