class Animal {
  constructor() {
    this.r = new NoiseLoop(1, -TWO_PI, TWO_PI)
    this.s = new NoiseLoop(1, 10, 100)
    this.tx = new NoiseLoop(1, 2, random(width))
    this.ty = new NoiseLoop(1,2, random(height))
    this.c = new NoiseLoop(0.1, 100, 255)
  }
  update(a) {
    this.r.Set(a)
    this.s.Set(a)
    this.tx.Set(a)
    this.ty.Set(a)
    this.c.Set(a)
  }
  draw(){
     quad(6 * width / 9, 2 * height / 5, 4 * width / 9, 2 * height / 5, 2 * width / 3+50, height , 1 * width / 3-50, height )
push()
  translate(width/2, height/2);
  stroke(0);
  fill(this.c.Get())
  beginShape();
  
  for(let q= 0; q<TWO_PI; q+=0.1){
    let xoff = map(cos(q+phase),-1,1,0,noiseMax);
    let yoff = map(sin(q+phase),-1,1,0,noiseMax);
    let r = map(noise(xoff,yoff),0,1,150,160);
    let x = r*cos(q);
    let y = r*sin(q);
    vertex(x,y);
    vertex(x,y);    
    }
    endShape(CLOSE);
    phase += 0.1;
    pop()   
    push()
    fill('green')
    rect(370,375,10,50)
    pop()
    push()
    fill('yellow')
    translate(370,350)
    rotate(this.r.Get())
    rect(0,0,10,50)
    rotate(HALF_PI/2)
    rect(0,0,10,50)
    rotate(PI/4)
    rect(0,0,10,50)
    rotate(PI/6)
    rect(0,0,10,50)
    pop()
    ellipse(130, 130, this.s.Get(), this.s.Get())
    push()
    fill('black')
    ellipse(130, 130, this.s.Get()-20, this.s.Get()-20)
    pop()
    ellipse(260, 130, this.s.Get(), this.s.Get())
    push()
    fill('black')
    ellipse(260, 130, this.s.Get()-20, this.s.Get()-20)
    pop()
    
    push()
    fill('#2F9D27')
    ellipse(this.tx.Get(), this.ty.Get(), 20,15)
    pop()
    push()
    fill('#F29661')
    quad(4 * width / 9, 2 * height / 5, 5 * width / 9, 2 * height / 5, 2 * width / 3, height - 180, 1 * width / 3, height -180)
 pop()    
  }
}