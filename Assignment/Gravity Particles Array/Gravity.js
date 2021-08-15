class gravity{
  constructor(x,y,Length,Angle,Speed,Direction,grav){
    this.position = new Vec2(x,y);
    this.vel = new Vec2(0,0);
    this.vel.setLength(Length);//
    this.vel.setAngle(Angle);//
    this.gr = new Vec2(0,0);
    this.gr.setLength(Speed);
    this.gr.setAngle(Direction);
    this.gravity = new Vec2(0,grav);
    this.lifeSpan = random(500,2000)
  }
  update(){
    this.position.addTo(this.vel);
    this.vel.addTo(this.gr);
    this.vel.addTo(this.gravity);
    this.lifeSpan -= deltaTime
  }
  
}