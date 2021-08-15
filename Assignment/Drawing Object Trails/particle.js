class particle {
  constructor(x,y) {
    this.x = x
    this.y = y
    this.history = []
  }
  
  update() {
    this.x += random(-5,5)
    this.y += random(-5,5)
    
    var v = createVector(this.x,this.y)
    this.history.push(v)
    
    if(this.history.length>25) {
      this.history.splice(0,1)
    }
  }
  
  draw() {
    stroke(2)
    fill(0,150)
    ellipse(this.x,this.y,34,34)
    for (var i = 0; i<this.history.length; i++) {var pos = this.history[i]
      fill('#E5D85C')
      ellipse(pos.x,pos.y,i,i)
  }
  }
}