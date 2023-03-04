let c;
const speed = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  c = new cObject();
}

function draw() {
  for (let i = 0; i < speed; i++) {
    background(0);

    c.show();
    c.update();
  }
}

class cObject {
  constructor() {
    this.pos = createVector(width / 4, height / 2);
    this.dia = min(width, height) / 3;
    this.vel = 1;
    this.ang = 0;
    this.ver = [];
  }
  show() {
    noFill();
    stroke(255);
    strokeWeight(2);

    circle(this.pos.x, this.pos.y, this.dia);

    const x0 = this.pos.x + (this.dia / 2) * cos(this.ang),
      y = this.pos.y + (this.dia / 2) * sin(this.ang),
      x1 = this.pos.x + this.dia;

    line(this.pos.x, this.pos.y, x0, y);

    strokeWeight(15);

    point(x0, y);

    this.ver.unshift(createVector(x1, y));

    strokeWeight(1);

    line(x0, y, x1, y);

    beginShape();
    for (let i = 0; i < this.ver.length; i++) {
      vertex(this.ver[i].x + i, this.ver[i].y);

      if (this.ver[i].x + i > width) {
        this.ver.splice(i, 1);
      }
    }
    endShape();
  }
  update() {
    this.ang += this.vel * (PI / 180);
  }
}