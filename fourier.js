class Fourier {
  constructor(radius, cx, cy, length) {
    this.length = length;
    this.radius = radius;

    this.cx = cx;
    this.cy = cy;

    this.angle = 0;

    this.signal = [];
  }

  series() {
    background(0);
    translate(this.cx, this.cy);
    noFill();
    stroke(255);

    let x = 0;
    let y = 0;

    for (let i = 0; i < this.length; i++) {
      let prevX = x;
      let prevY = y;
      let n = i * 2 + 1;
      let r = this.radius * (4 / (n * PI));

      x += r * cos(n * this.angle);
      y += r * sin(n * this.angle);

      ellipse(prevX, prevY, r * 2);

      fill(255);
      line(prevX, prevY, x, y);
      ellipse(x, y, 10);
      noFill();
    }

    this.signal.unshift(y);

    translate(this.cx * 1.5, 0);
    line(x - this.cx * 1.5, y, 0, this.signal[0]);

    let i = 0;
    beginShape();
    this.signal.forEach((signalY) => {
      vertex(i++, signalY);
    });
    endShape();

    this.angle += 0.025;
    if (this.angle == 360) this.angle = 0;
    if (this.signal.length > 1000) this.signal.pop();
  }
}
