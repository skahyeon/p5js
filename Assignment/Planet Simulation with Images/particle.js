
class particle{
  constructor(x,y,speed,direction,m){
    this.position = new Vec2(x,y);
    this.velo = new Vec2(0,0);
    this.velo.setLength(speed);
    this.velo.setAngle(direction);
    this.mass = m;
  }
   
  accelerate(){
    this.position.addTo(this.velo);
  }
  angleTo(p2){
    return atan2(p2.position.y-this.position.y,p2.position.x-this.position.x);
  }
  
  distanceTo(p2){
    var dx = p2.position.x-this.position.x,
        dy = p2.position.y-this.position.y;
    return sqrt(dx*dx+dy*dy);
  }
  
  gravitateTo(p2){
    var grav = new Vec2(0,0),
        dist = this.distanceTo(p2);
    grav.setLength(p2.mass/(dist*dist));
    grav.setAngle(this.angleTo(p2));
    this.velo.addTo(grav);
  }
  
}