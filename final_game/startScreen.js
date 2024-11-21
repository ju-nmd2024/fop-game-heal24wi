//chatGPT
let stars = [];
const regionX = 350;
const regionY = 200;
const regionWidth = 150;
const regionHeight = 200;

function setup() {
  createCanvas(600, 700);

  //stars
  for (let i = 0; i < 100; i++) {
    const star = {
      x: Math.random() * regionWidth + regionX,
      y: Math.random() * regionHeight + regionY,
      alpha: Math.random(),
    };
    stars.push(star);
  }
}

function startScreen(x, y) {
  background(69, 49, 90);
  noStroke();

  //window
  fill(0, 0, 0);
  rect(x + 250, y + 100, 150, 200);

  //bed wood
  fill(107, 91, 64);
  rect(x - 20, y + 345, 10, 120);
  rect(x + 320, y + 345, 10, 120);

  rect(x - 12, y + 400, 340, 30);

  //bedsheet
  fill(64, 96, 107);
  rect(x - 8, y + 375, 65, 25, 10, 20, 0);
  rect(x + 70, y + 375, 245, 25, 10, 20, 0);

  //head
  fill(135, 109, 91);
  ellipse(x + 25, y + 370, 50, 40);

  //body

  //hair
  fill(80, 52, 20);
  ellipse(x + 25, y + 375, 50, 40);
  ellipse(x + 60, y + 380, 50, 40);

  //clock
  fill(107, 91, 64);
  rect(x - 55, y + 280, 80, 10);
  fill(230, 169, 124);
  strokeWeight(2);
  stroke(20, 20, 20);
  rect(x - 50, y + 250, 70, 30, 5);
  noStroke();
  fill(0, 0, 0);
  textSize(25);
  text("08:10", x - 45, y + 275);

  //Uni rush head line
  fill(236, 61, 61);
  textSize(80);
  text("UNI RUSH", x + 6, y);
  textSize(20);
  text("Don't miss your exam!", x + 100, y + 25);
}

class Button {
  constructor(ButtonX, ButtonY, ButtonWidth, ButtonHeight, ButtonText) {
    this.ButtonX = ButtonX;
    this.ButtonY = ButtonY;
    this.ButtonWidth = ButtonWidth;
    this.ButtonHeight = ButtonHeight;
    this.ButtonText = ButtonText;
  }

  draw() {
    push(); //because of Text alignment of Uni rush

    fill(234, 206, 173);
    rect(
      this.ButtonX + 20,
      this.ButtonY + 100,
      this.ButtonWidth,
      this.ButtonHeight,
      10
    );

    //text
    fill(255); // White text color
    textSize(20); // Font size
    textAlign(CENTER, CENTER); // Center the text
    text(
      this.ButtonText,
      this.ButtonX + this.ButtonWidth / 2,
      this.ButtonY + this.ButtonHeight / 2
    );
    pop();
  }
}

let button = new Button(100, 100, 200, 50, "START");

function draw() {
  startScreen(100, 100);
  button.draw();

  //stars
  noStroke();
  for (let star of stars) {
    fill(255, 255, 255, Math.abs(Math.sin(star.alpha)) * 255);
    ellipse(star.x, star.y, 2);
    star.alpha += 0.02;
  }
}
