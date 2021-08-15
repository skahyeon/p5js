//Jaehyeon Nam
//Final Project
//CS099
//Spring 2020
var a=0;
class Pipe {
  constructor() {
    this.spacing = 100;
    this.top = random(220,340);
    this.bottom = random(200,320);
    this.x = width;
    this.w = random(40,100);
    this.speed = 10+a;
    this.passed = false;
    this.highlight = false;
  }

  hits(bird) {
    if(bird.y < this.top || bird.y>height-this.bottom-30){
     if( bird.x>this.x && bird.x<this.x+this.w){
       
      this.highlight = true;
     return true;
     
     }
   }
    this.highlight = false;
    return false;
  }
  


 

  show() {
    fill('#D8D8D8');
    strokeWeight(5)
    
    
    rect(this.x,0,this.w,this.top);
    fill('black');
    //strokeWeight(15)
    rect(this.x,height-this.bottom,this.w,this.bottom);
    
    //rect(this.x+250,0,this.w,this.top);
    //rect(this.x+250,height-this.bottom,this.w,this.bottom);
    
    
    }
  
  
   
  
  

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    if(this.x< -this.w) 
     return true;
    else{
     return false; 
    }
  }

}