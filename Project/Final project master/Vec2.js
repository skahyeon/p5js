//Jaehyeon Nam
//Final Project
//CS099
//Spring 2020
class Vec2{
  
  constructor(x=0,y=0){
    this.angle = 0;
    this.x = x;
    this.y = y;
  }
  
  getAngle(){
    return atan2(this.y,this.x);
  }
  
  
  getLength(){
    return sqrt(this.x*this.x + this.y*this.y);
  }
  
   setAngle(angle_in_radians)
  {
    var length = this.getLength()
    this.x = cos(angle_in_radians)*length
    this.y = sin(angle_in_radians)*length
  }
  
  setLength(length){
    this.length = length
    var angle = this.getAngle();
    this.x = cos(angle) * this.length;
    this.y = sin(angle) * this.length;
  }
  
  add(v2){
    return this.create(this.x + v2.x,this.y + v2.y);
  }
  
  addTo(v2){
    this.x = this.x+v2.x
    this.y = this.y+v2.y
  }
  
}