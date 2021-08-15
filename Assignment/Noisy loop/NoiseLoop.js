class NoiseLoop {
  constructor(d, min, max) {
    this.d = d
    this.min = min
    this.max = max

    this.x = random(1000)
    this.y = random(1000)

    this.a = 0
  }

  Get(a){
    let xOff = map(cos(this.a), -1, 1, this.x, this.x + this.d)
    let yOff = map(sin(this.a), -1, 1, this.y, this.y + this.d)
    let r = noise(xOff, yOff) // 0 ~ 1
    return map(r, 0, 1, this.min, this.max)
  }

  Set(a) {
    this.a = a
  }
}