class patterns{
  constructor(n, m) {
    this.n = n
    this.m = m
    this.pattern = floor(random(5))
    if (m == 2) {
      this.pattern = floor(random(4));
    }

    this.h = this.n[this.pattern].length;
    this.w = this.n[this.pattern][0].length;
  }
  draw() {
    if (this.m == 1) {
      this.c = floor(random(200, cols));
      this.r = floor(random(200, rows));
    } else {
      this.c = floor(mouseX /5);
      this.r = floor(mouseY /5);
    }
    for (let x = 0; x < this.w; x++) {
      for (let y = 0; y < this.h; y++) {

        let col = (this.c + x + cols) % cols;
        let row = (this.r + y + rows) % rows;
        if (this.n[this.pattern][y][x] == 0) {
          grid[col][row] = 0
        } else {
          grid[col][row] = 1
        }
      }
    }
  }

}