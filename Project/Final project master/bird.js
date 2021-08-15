//Jaehyeon Nam
//Velocity Particles Array Exercise
//CS099
//Spring 2020
class Bird {
  constructor() {
    this.y = 450;
    this.x = 64;

    this.gravity = 1;
    this.lift = -18;
    this.velocity = 0;

    //this.icon = birdSprite;
    this.width = 64;
    this.height = 64;
  }

  show() {
    
    var e1 = map(random(3), 4, 12, -7, 7);
    var e2 = map(random(3), 4, 12, -7, 7);
    frameRate(66)
    //fill(0,random(255),5);
    
      push()
      fill('#ffb90f')
      rect(this.x,this.y,50,50)
      pop()
      push()
      noStroke()
      fill('white')
      circle(this.x+15,this.y+20,23,23)
      circle(this.x+35,this.y+20,23,23)
      push();
    fill('black');
    circle(this.x + 25 + e1, this.y + 30 + e1, 10);
    circle(this.x + 50 + e2, this.y + 30 + e2, 10);
    
    pop();
      
      
      fill('blue')
      rect(this.x+13,this.y+36,25,10)
      pop()
      //push()
    
     // noStroke()
     // fill('blue')
     // circle(540,750,random(15,20),random(15,20))
    //  circle(580,750,random(15,20),random(15,20))
    //  pop()
   
   
    for(var p=1; p<v.length; p++)
    {   //r
    push()
    //noStroke()
    fill(255,255,255,210)
    stroke('yellow')
    strokeWeight(5)
    translate(v[p].position.x+50,this.y);
    beginShape();
    vertex(0,-10);
    vertex(2*10,-10);
    vertex(2*10, -2*10);
    vertex(4*10,0);
    vertex(2*10,2*10);
    vertex(2*10,10);
    vertex(0,10);
    endShape(CLOSE); 
    v[p].update();
    pop()
    }   
    
    
    for(var p1=1; p1<v1.length; p1++)
    {   //e
    push()
    stroke('#0100FF')
    strokeWeight(7)
    fill('#4374D9')//e
    rect(v1[p1].position.x+50,this.y-10,20,20)
    v1[p1].update();
    pop()
    
    }   
    
    
    for(var p2=1; p2<v2.length; p2++)
    {   //w
    push()
    fill('yellow')//w
    ellipse(v2[p2].position.x+50,this.y,40,20)
    v2[p2].update();
    pop()   
    }   
    
    
    
    for(var p3=1; p3<v3.length; p3++)
    { //q
    push()
    fill('#FF5E00')
    circle(v3[p3].position.x+50,this.y,25,25)
    v3[p3].update();
    pop()
    }   


    
}

  up() {
    this.velocity = this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y >= height - this.height / 2) {
      this.y = height - this.height / 2;
      this.velocity = 0;
    }

    if (this.y <= this.height / 2) {
      this.y = this.height / 2;
      this.velocity = 0;
    }
  }
}