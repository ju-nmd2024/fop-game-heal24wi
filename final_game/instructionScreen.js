function setup() {
  createCanvas(600, 700);
}

function instructionScreen(x, y) {
  background(69, 49, 90);
  noStroke();
  fill(255, 255, 255);
  textSize(40);
  text("INSTRUCTIONS", x + 50, y);

  textSize(20);
  text("Read CAREFULLY! Otherwise you will fail your course.", x - 50, y + 30);
}

function draw() {
  instructionScreen(100, 100);
}
