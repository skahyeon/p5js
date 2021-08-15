
class particle{
  constructor(x,y,speed,direction){
    this.position = new Vec2(x,y);
    this.velo = new Vec2(0,0);
    this.velo.setLength(speed);
    this.velo.setAngle(direction);
  }
  
  accelerate(thrust) {
    this.position.addTo(this.velo);
  }
  
  update() {
  if (turnleft) {
    angle -= 0.07;
  }

  if (turnright) {
    angle += 0.07;
  }

  if (thrusting) {
    thrust.setLength(0.07);
   
  }else{
    thrust.setLength(0);
   
  }
  ship.velo.addTo(thrust);
  thrust.setAngle(angle);
  
  
  if (ship.position.x > width) {
    ship.position.x = 0;
    BGM2.play()
  }
  if (ship.position.x < 0) {
    ship.position.x = width;
    BGM2.play()
  }
  if (ship.position.y > height) {
    ship.position.y = 0; 
    BGM2.play()
  }
  if (ship.position.y < 0) {
    ship.position.y = height;  
    BGM2.play()
  }
}

}