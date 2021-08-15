class Vec2{
  
  constructor(x=0,y=0){
    this.angle = 0;
    this.x = x;
    this.y = y;
  }
  create(x,y){
    var obj = Object.create(this);
    obj.x = x;
    obj.y = y;
    return obj;
  }
  
  getX() {
    return this.x;
  }
  
  getY() {
    return this.y;
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
  
  subtract(v2){
    return this.create(this.x - v2.x,this.y - v2.y);
  }
  
  subtractFrom(v2){
    this.x = this.x-v2.x
    this.y = this.y-v2.y
  }
  
  multiply(scalar){
    return this.create(this.x * scalar,this.y * scalar);
  }
  
  multiplyBy(scalar){
    this.x = this.x*scalar
    this.y = this.y*scalar
  }
  
  divide(scalar){
    return this.create(this.x / scalar,this.y / scalar);
  }
  
  divideBy(scalar){
    this.x = this.x/scalar
    this.y = this.y/scalar
  }
  
}