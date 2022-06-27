let fourier;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fourier = new Fourier(150, width / 4, height / 2, 3);
}

function draw() {
  fourier.series();
}
