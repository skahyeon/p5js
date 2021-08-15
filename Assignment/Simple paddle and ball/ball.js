

var x,y,w,h
//var speedX=4
//var speedY=5
class ball
{
  constructor(x,y,s,xs,ys)
  {
    this.x=x
    this.y=y
    this.size=s
    //this.h=h
    this.speedX=xs
    this.speedY=ys
  }
  draw()
  {
   circle(this.x,this.y,this.size)
    push()
    fill('#F6F6F6')
    circle(this.x,this.y,this.size-10)
    pop()
  }
  
 
move(){
  
 this.x=this.x+this.speedX;
 this.y=this.y+this.speedY;
}  
update(){
  if(this.x>width-this.size/2){
   this.speedX = -this.speedX; 
  }
  else if(this.x<0 + this.size/2){
   this.speedX = -this.speedX; 
  }
  if(this.y>height - this.size/2){
   this.speedY = -this.speedY; 
  }
  else if(this.y<0+this.size/2){
   this.speedY = -this.speedY; 
  }
  //up
  if(this.x>paddle1.x && this.x<paddle1.x+90 && this.y>390 && this.y<410){
      this.y = paddle1.y-10
      this.speedY = -this.speedY; 
    }if(this.x>paddle1.x && this.x<paddle1.x+90 && this.y<430 && this.y>410){
      this.y = paddle1.y+30
      this.speedY = -this.speedY; 
    }
   //down   
      if(this.y>paddle1.y && this.y<paddle1.y+10 && this.x-10<paddle1.x+90 && this.x>paddle1.x+60){
      this.x = paddle1.x+100
      this.speedX = -this.speedX; 
    }if(this.y>paddle1.y && this.y<paddle1.y+10 && this.x+10>paddle1.x && this.x<paddle1.x+60){
      this.x = paddle1.x-10
      this.speedX = -this.speedX; 
    }
      
  
    
    }
  

}