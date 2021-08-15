class face {
  
  constructor(a, b, c,d,e) {
    this.x = a
    this.y = b
    this.radius = c
    this.hRadius = e;
    this.emotion = d 
    
  }
  move()
  {
   this.x=map(mouseX,0,width,28,280)
   this.y=map(mouseY,0,width,28,280)
  }
  
  
   update()
  {
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    let distance_squared = dx * dx + dy * dy;    
    if(distance_squared <= this.radius * this.radius){
    this.emotion=SHOCKED
    }
    else if(mouseX<=0||mouseX > width||mouseY <= 0 || mouseY > height)
    {
      this.emotion=ANGRY
    }
    else{this.emotion = HAPPY}
    }   

  
  draw() {
    push()
    translate(this.x, this.y)
    circle(0, 0, this.radius*2)
    strokeWeight(3)
    switch (this.emotion) {
      case HAPPY:
        fill(255)
        circle(this.radius / 2, 0, this.radius / 2)
        circle(-this.radius / 2, 0, this.radius / 2)
        fill("black")
        circle(this.radius / 2, 0, this.radius / 4)
        circle(-this.radius / 2, 0, this.radius / 4)
        
        line(-this.radius/1.5,-this.radius/2,-this.radius/3,-this.radius/2)
        line(this.radius/1.5,-this.radius/2,this.radius/3,-this.radius/2)
        
        push()
        noFill()
        arc(0,this.radius/2.5,this.radius/1, this.radius/2,0,PI,OPEN)
        pop()
        break;
      case SHOCKED:
        circle(this.radius / 2, 0, this.radius / 2)
        circle(-this.radius / 2, 0, this.radius / 2)
        fill("black")
        ellipse(this.radius/2, 0, this.radius/3, this.radius/2)
        ellipse(-this.radius/2, 0, this.radius/3, this.radius/2)
        fill('#DB0000')
        circle(0, this.radius / 2, this.radius / 1.5)
        
        line(-this.radius/2,-this.radius/2,-this.radius/4,-this.radius/5)
        line(this.radius/2,-this.radius/2,this.radius/4,-this.radius/5)
        
        break;
      case ANGRY:
        fill(255)
        circle(this.radius / 2, 0, this.radius / 2)
        circle(-this.radius / 2, 0, this.radius / 2)
        fill("black")
        circle(this.radius / 2, 0, this.radius / 4)
        circle(-this.radius / 2, 0, this.radius / 4)
        push()
        noFill()
        strokeWeight(7)
        arc(0,this.radius/2,this.radius/1, this.radius/2,PI,2*PI,OPEN)
        pop()
        push()
        strokeWeight(35)
        line(-this.radius/1.5,-this.radius/2,-this.radius/5,-this.radius/4)
        line(this.radius/1.5,-this.radius/2,this.radius/5,-this.radius/4)
        pop()
        break;    
    }
    pop()  
  }
}