//Jaehyeon Nam
//Final Project
//CS099
//Spring 2020
class particle{
  constructor(x,y,Length,Angle){
    this.position = new Vec2(x,y);
    this.vel = new Vec2(0,0);
    this.vel.setLength(Length);//
    this.vel.setAngle(Angle);//
    this.lifeSpan = random(500,2000)
  }
  update(){
    this.position.addTo(this.vel);
    this.lifeSpan -= deltaTime
  }
  
}