/*I will create a lunar lander game with the theme of an falling egg */

let state = "start";
let backgroundX = 100;
let backgroundY = 100;
let buttonX = 200;
let buttonY = 170;
//values for the egg
let s = 0.7;
let y = 100;
let x = 256;
//let featherThere = true;
let direction = "forward";

//for falling down egg
//game logic variables
let velocityY = 0.2;
let acceleration = 0.2;

//game state
let gameState = true;

function setup() {
  createCanvas(600, 450);
}

function startScreen() {
  background(200, 200, 250);

  fill(209, 36, 36);
  noStroke();

  rect(buttonX, buttonY, 200, 100, 10);

  fill(200, 200, 250);
  textSize(40);
  text("START", 235, 235);
}

function gameScreen() {
  //game background
  background(151, 202, 200);
  //tree
  fill(106, 72, 35);
  noStroke();
  beginShape();

  vertex(backgroundX - 50, backgroundY + 345);
  vertex(backgroundX - 46, backgroundY + 330);
  vertex(backgroundX + 60, backgroundY + 330);
  vertex(backgroundX + 130, backgroundY + 335);
  vertex(backgroundX + 240, backgroundY + 325);
  vertex(backgroundX + 300, backgroundY + 325);
  vertex(backgroundX + 305, backgroundY + 319);
  vertex(backgroundX + 300, backgroundY + 312);
  vertex(backgroundX + 260, backgroundY + 310);
  vertex(backgroundX + 180, backgroundY + 310);
  vertex(backgroundX + 80, backgroundY + 315);
  vertex(backgroundX - 45, backgroundY + 310);
  vertex(backgroundX - 60, backgroundY + 255);
  vertex(backgroundX - 55, backgroundY + 180);
  vertex(backgroundX - 35, backgroundY + 70);
  vertex(backgroundX + 60, backgroundY - 40);
  vertex(backgroundX + 90, backgroundY - 60);
  vertex(backgroundX + 88, backgroundY - 70);
  vertex(backgroundX + 78, backgroundY - 70);
  vertex(backgroundX + 45, backgroundY - 45);
  vertex(backgroundX - 5, backgroundY - 5);
  vertex(backgroundX - 65, backgroundY + 65);
  vertex(backgroundX - 35, backgroundY - 50);
  vertex(backgroundX, backgroundY - 105);
  vertex(backgroundX - 14, backgroundY - 105);
  vertex(backgroundX - 60, backgroundY - 40);
  vertex(backgroundX - 75, backgroundY + 15);
  vertex(backgroundX - 100, backgroundY - 10);
  vertex(backgroundX - 100, backgroundY + 345);
  endShape(CLOSE);

  //leaves bottom
  fill(141, 136, 33);

  ellipse(backgroundX + 300, backgroundY + 320, 100);
  ellipse(backgroundX + 260, backgroundY + 290, 30);
  ellipse(backgroundX + 290, backgroundY + 270, 40);
  ellipse(backgroundX + 320, backgroundY + 275, 20);
  ellipse(backgroundX + 340, backgroundY + 300, 30);
  ellipse(backgroundX + 350, backgroundY + 330, 30);
  ellipse(backgroundX + 250, backgroundY + 325, 20);

  //leaves top
  ellipse(backgroundX + 90, backgroundY - 70, 80);
  ellipse(backgroundX + 75, backgroundY - 35, 20);
  ellipse(backgroundX + 110, backgroundY - 35, 40);
  ellipse(backgroundX + 130, backgroundY - 65, 30);
  ellipse(backgroundX + 120, backgroundY - 95, 20);
  ellipse(backgroundX + 50, backgroundY - 60, 30);
  ellipse(backgroundX + 55, backgroundY - 90, 30);

  //nest
  fill(90, 56, 35);
  ellipse(backgroundX + 160, backgroundY + 300, 100, 50);

  fill(170, 117, 86);
  beginShape();
  vertex(backgroundX + 110, backgroundY + 300);
  bezierVertex(
    backgroundX + 105,
    backgroundY + 310,
    backgroundX + 110,
    backgroundY + 320,
    backgroundX + 130,
    backgroundY + 325
  );
  bezierVertex(
    backgroundX + 150,
    backgroundY + 330,
    backgroundX + 170,
    backgroundY + 330,
    backgroundX + 200,
    backgroundY + 325
  );
  bezierVertex(
    backgroundX + 210,
    backgroundY + 320,
    backgroundX + 215,
    backgroundY + 310,
    backgroundX + 210,
    backgroundY + 300
  );
  bezierVertex(
    backgroundX + 170,
    backgroundY + 310,
    backgroundX + 150,
    backgroundY + 310,
    backgroundX + 110,
    backgroundY + 300
  );
  endShape();

  strokeWeight(2);
  stroke(90, 56, 35);
  line(
    backgroundX + 190,
    backgroundY + 315,
    backgroundX + 195,
    backgroundY + 305
  );
  line(
    backgroundX + 165,
    backgroundY + 320,
    backgroundX + 155,
    backgroundY + 315
  );
  line(
    backgroundX + 120,
    backgroundY + 310,
    backgroundX + 105,
    backgroundY + 300
  );
  line(
    backgroundX + 135,
    backgroundY + 315,
    backgroundX + 130,
    backgroundY + 330
  );

  noStroke();
  fill(255, 255, 255);

  //cloud left
  rect(backgroundX + 25, backgroundY + 40, 100, 30, 20);
  ellipse(backgroundX + 60, backgroundY + 40, 50);
  ellipse(backgroundX + 90, backgroundY + 40, 50);

  //cloud right
  rect(backgroundX + 280, backgroundY - 30, 150, 30, 20);
  ellipse(backgroundX + 320, backgroundY - 30, 50);
  ellipse(backgroundX + 390, backgroundY - 30, 50);
  ellipse(backgroundX + 355, backgroundY - 40, 50);
}

function egg(x, y, s) {
  fill(247, 231, 219);
  noStroke();

  //egg background
  beginShape();
  vertex(x, y);
  bezierVertex(x - 30 * s, y + 5 * s, x - 60 * s, y + 100 * s, x, y + 100 * s);
  bezierVertex(x + 60 * s, y + 100 * s, x + 30 * s, y + 5 * s, x, y);
  endShape();

  //egg dots
  fill(233, 213, 195);
  ellipse(x - 10 * s, y + 15 * s, 7 * s);
  ellipse(x, y + 10 * s, 5 * s);
  ellipse(x - 3 * s, y + 15 * s, 5 * s);
  ellipse(x + 3 * s, y + 18 * s, 5 * s);
  ellipse(x - 6 * s, y + 25 * s, 5 * s);

  // if (featherThere) {
  //   push();
  //   translate(180, -230);
  //   rotate(0.4);
  //   strokeWeight(1);
  //   stroke(179, 157, 138);

  //   line(x, y + 200, x, y + 250);
  //   line(x, y + 240, x - 10, y + 220);
  //   line(x, y + 235, x - 10, y + 215);
  //   line(x, y + 230, x - 10, y + 210);
  //   line(x, y + 225, x - 10, y + 205);
  //   line(x, y + 220, x - 10, y + 200);
  //   line(x, y + 215, x - 8, y + 195);
  //   line(x, y + 210, x - 6, y + 193);
  //   line(x, y + 200, x - 2, y + 187);

  //   line(x, y + 200, x, y + 250);
  //   line(x, y + 240, x + 10, y + 220);
  //   line(x, y + 235, x + 10, y + 215);
  //   line(x, y + 230, x + 10, y + 210);
  //   line(x, y + 225, x + 10, y + 205);
  //   line(x, y + 220, x + 10, y + 200);
  //   line(x, y + 215, x + 8, y + 195);
  //   line(x, y + 210, x + 6, y + 193);
  //   line(x, y + 200, x + 2, y + 187);
  //   pop();
  // } else {
  // }

  //egg crack
  stroke(179, 157, 138);
  strokeWeight(1 * s);
  noFill();

  beginShape();
  vertex(x + 30 * s, y + 38 * s);
  vertex(x + 13 * s, y + 50 * s);
  vertex(x + 5 * s, y + 40 * s);
  vertex(x, y + 50 * s);
  vertex(x - 10 * s, y + 35 * s);
  vertex(x - 20 * s, y + 40 * s);
  vertex(x - 29 * s, y + 38 * s);
  endShape();
}

function resultScreenFailed() {
  //background
  background(221, 241, 240);
  //tree
  fill(191, 154, 112);
  noStroke();
  beginShape();

  vertex(backgroundX - 50, backgroundY + 345);
  vertex(backgroundX - 46, backgroundY + 330);
  vertex(backgroundX + 60, backgroundY + 330);
  vertex(backgroundX + 130, backgroundY + 335);
  vertex(backgroundX + 240, backgroundY + 325);
  vertex(backgroundX + 300, backgroundY + 325);
  vertex(backgroundX + 305, backgroundY + 319);
  vertex(backgroundX + 300, backgroundY + 312);
  vertex(backgroundX + 260, backgroundY + 310);
  vertex(backgroundX + 180, backgroundY + 310);
  vertex(backgroundX + 80, backgroundY + 315);
  vertex(backgroundX - 45, backgroundY + 310);
  vertex(backgroundX - 60, backgroundY + 255);
  vertex(backgroundX - 55, backgroundY + 180);
  vertex(backgroundX - 35, backgroundY + 70);
  vertex(backgroundX + 60, backgroundY - 40);
  vertex(backgroundX + 90, backgroundY - 60);
  vertex(backgroundX + 88, backgroundY - 70);
  vertex(backgroundX + 78, backgroundY - 70);
  vertex(backgroundX + 45, backgroundY - 45);
  vertex(backgroundX - 5, backgroundY - 5);
  vertex(backgroundX - 65, backgroundY + 65);
  vertex(backgroundX - 35, backgroundY - 50);
  vertex(backgroundX, backgroundY - 105);
  vertex(backgroundX - 14, backgroundY - 105);
  vertex(backgroundX - 60, backgroundY - 40);
  vertex(backgroundX - 75, backgroundY + 15);
  vertex(backgroundX - 100, backgroundY - 10);
  vertex(backgroundX - 100, backgroundY + 345);
  endShape(CLOSE);

  //leaves bottom
  fill(200, 197, 126);

  ellipse(backgroundX + 300, backgroundY + 320, 100);
  ellipse(backgroundX + 260, backgroundY + 290, 30);
  ellipse(backgroundX + 290, backgroundY + 270, 40);
  ellipse(backgroundX + 320, backgroundY + 275, 20);
  ellipse(backgroundX + 340, backgroundY + 300, 30);
  ellipse(backgroundX + 350, backgroundY + 330, 30);
  ellipse(backgroundX + 250, backgroundY + 325, 20);

  //leaves top
  ellipse(backgroundX + 90, backgroundY - 70, 80);
  ellipse(backgroundX + 75, backgroundY - 35, 20);
  ellipse(backgroundX + 110, backgroundY - 35, 40);
  ellipse(backgroundX + 130, backgroundY - 65, 30);
  ellipse(backgroundX + 120, backgroundY - 95, 20);
  ellipse(backgroundX + 50, backgroundY - 60, 30);
  ellipse(backgroundX + 55, backgroundY - 90, 30);

  //nest
  fill(133, 109, 95);
  ellipse(backgroundX + 160, backgroundY + 300, 100, 50);

  fill(227, 180, 152);
  beginShape();
  vertex(backgroundX + 110, backgroundY + 300);
  bezierVertex(
    backgroundX + 105,
    backgroundY + 310,
    backgroundX + 110,
    backgroundY + 320,
    backgroundX + 130,
    backgroundY + 325
  );
  bezierVertex(
    backgroundX + 150,
    backgroundY + 330,
    backgroundX + 170,
    backgroundY + 330,
    backgroundX + 200,
    backgroundY + 325
  );
  bezierVertex(
    backgroundX + 210,
    backgroundY + 320,
    backgroundX + 215,
    backgroundY + 310,
    backgroundX + 210,
    backgroundY + 300
  );
  bezierVertex(
    backgroundX + 170,
    backgroundY + 310,
    backgroundX + 150,
    backgroundY + 310,
    backgroundX + 110,
    backgroundY + 300
  );
  endShape();

  strokeWeight(2);
  stroke(151, 118, 97);
  line(
    backgroundX + 190,
    backgroundY + 315,
    backgroundX + 195,
    backgroundY + 305
  );
  line(
    backgroundX + 165,
    backgroundY + 320,
    backgroundX + 155,
    backgroundY + 315
  );
  line(
    backgroundX + 120,
    backgroundY + 310,
    backgroundX + 105,
    backgroundY + 300
  );
  line(
    backgroundX + 135,
    backgroundY + 315,
    backgroundX + 130,
    backgroundY + 330
  );

  noStroke();
  fill(255, 255, 255);

  //cloud left
  rect(backgroundX + 25, backgroundY + 40, 100, 30, 20);
  ellipse(backgroundX + 60, backgroundY + 40, 50);
  ellipse(backgroundX + 90, backgroundY + 40, 50);

  //cloud right
  rect(backgroundX + 280, backgroundY - 30, 150, 30, 20);
  ellipse(backgroundX + 320, backgroundY - 30, 50);
  ellipse(backgroundX + 390, backgroundY - 30, 50);
  ellipse(backgroundX + 355, backgroundY - 40, 50);

  //FRIED EGG

  //fried egg
  fill(255, 255, 255);
  beginShape();
  vertex(235, 420);
  bezierVertex(235, 415, 235, 410, 230, 405);
  bezierVertex(220, 400, 215, 400, 210, 400);
  bezierVertex(205, 390, 225, 380, 230, 380);
  bezierVertex(240, 378, 242, 378, 250, 380);
  bezierVertex(265, 380, 267, 380, 275, 375);
  bezierVertex(290, 375, 305, 380, 300, 390);
  bezierVertex(295, 395, 290, 395, 285, 400);
  bezierVertex(280, 405, 275, 410, 275, 420);
  bezierVertex(261, 420, 262, 410, 260, 410);
  bezierVertex(255, 405, 252, 407, 250, 410);
  bezierVertex(245, 415, 245, 417, 240, 420);
  endShape(CLOSE);

  //yellow part
  fill(242, 188, 81);
  ellipse(250, 393, 30, 20);

  //text failed
  rect(buttonX, buttonY, 200, 100, 10);

  fill(200, 200, 250);
  textSize(40);
  text("FAILED", 235, 235);

  //restart button

  rect(buttonX, 280, 200, 50, 10);

  fill(242, 188, 81);
  textSize(40);
  text("restart", 245, 317);
}

function resultScreenSuccess() {
  //BACKGROUND
  background(221, 241, 240);
  //tree
  fill(191, 154, 112);
  noStroke();
  beginShape();

  vertex(backgroundX - 50, backgroundY + 345);
  vertex(backgroundX - 46, backgroundY + 330);
  vertex(backgroundX + 60, backgroundY + 330);
  vertex(backgroundX + 130, backgroundY + 335);
  vertex(backgroundX + 240, backgroundY + 325);
  vertex(backgroundX + 300, backgroundY + 325);
  vertex(backgroundX + 305, backgroundY + 319);
  vertex(backgroundX + 300, backgroundY + 312);
  vertex(backgroundX + 260, backgroundY + 310);
  vertex(backgroundX + 180, backgroundY + 310);
  vertex(backgroundX + 80, backgroundY + 315);
  vertex(backgroundX - 45, backgroundY + 310);
  vertex(backgroundX - 60, backgroundY + 255);
  vertex(backgroundX - 55, backgroundY + 180);
  vertex(backgroundX - 35, backgroundY + 70);
  vertex(backgroundX + 60, backgroundY - 40);
  vertex(backgroundX + 90, backgroundY - 60);
  vertex(backgroundX + 88, backgroundY - 70);
  vertex(backgroundX + 78, backgroundY - 70);
  vertex(backgroundX + 45, backgroundY - 45);
  vertex(backgroundX - 5, backgroundY - 5);
  vertex(backgroundX - 65, backgroundY + 65);
  vertex(backgroundX - 35, backgroundY - 50);
  vertex(backgroundX, backgroundY - 105);
  vertex(backgroundX - 14, backgroundY - 105);
  vertex(backgroundX - 60, backgroundY - 40);
  vertex(backgroundX - 75, backgroundY + 15);
  vertex(backgroundX - 100, backgroundY - 10);
  vertex(backgroundX - 100, backgroundY + 345);
  endShape(CLOSE);

  //leaves bottom
  fill(200, 197, 126);

  ellipse(backgroundX + 300, backgroundY + 320, 100);
  ellipse(backgroundX + 260, backgroundY + 290, 30);
  ellipse(backgroundX + 290, backgroundY + 270, 40);
  ellipse(backgroundX + 320, backgroundY + 275, 20);
  ellipse(backgroundX + 340, backgroundY + 300, 30);
  ellipse(backgroundX + 350, backgroundY + 330, 30);
  ellipse(backgroundX + 250, backgroundY + 325, 20);

  //leaves top
  ellipse(backgroundX + 90, backgroundY - 70, 80);
  ellipse(backgroundX + 75, backgroundY - 35, 20);
  ellipse(backgroundX + 110, backgroundY - 35, 40);
  ellipse(backgroundX + 130, backgroundY - 65, 30);
  ellipse(backgroundX + 120, backgroundY - 95, 20);
  ellipse(backgroundX + 50, backgroundY - 60, 30);
  ellipse(backgroundX + 55, backgroundY - 90, 30);

  //nest
  fill(133, 109, 95);
  ellipse(backgroundX + 160, backgroundY + 300, 100, 50);

  fill(227, 180, 152);
  beginShape();
  vertex(backgroundX + 110, backgroundY + 300);
  bezierVertex(
    backgroundX + 105,
    backgroundY + 310,
    backgroundX + 110,
    backgroundY + 320,
    backgroundX + 130,
    backgroundY + 325
  );
  bezierVertex(
    backgroundX + 150,
    backgroundY + 330,
    backgroundX + 170,
    backgroundY + 330,
    backgroundX + 200,
    backgroundY + 325
  );
  bezierVertex(
    backgroundX + 210,
    backgroundY + 320,
    backgroundX + 215,
    backgroundY + 310,
    backgroundX + 210,
    backgroundY + 300
  );
  bezierVertex(
    backgroundX + 170,
    backgroundY + 310,
    backgroundX + 150,
    backgroundY + 310,
    backgroundX + 110,
    backgroundY + 300
  );
  endShape();

  strokeWeight(2);
  stroke(151, 118, 97);
  line(
    backgroundX + 190,
    backgroundY + 315,
    backgroundX + 195,
    backgroundY + 305
  );
  line(
    backgroundX + 165,
    backgroundY + 320,
    backgroundX + 155,
    backgroundY + 315
  );
  line(
    backgroundX + 120,
    backgroundY + 310,
    backgroundX + 105,
    backgroundY + 300
  );
  line(
    backgroundX + 135,
    backgroundY + 315,
    backgroundX + 130,
    backgroundY + 330
  );

  noStroke();
  fill(255, 255, 255);

  //cloud left
  rect(backgroundX + 25, backgroundY + 40, 100, 30, 20);
  ellipse(backgroundX + 60, backgroundY + 40, 50);
  ellipse(backgroundX + 90, backgroundY + 40, 50);

  //cloud right
  rect(backgroundX + 280, backgroundY - 30, 150, 30, 20);
  ellipse(backgroundX + 320, backgroundY - 30, 50);
  ellipse(backgroundX + 390, backgroundY - 30, 50);
  ellipse(backgroundX + 355, backgroundY - 40, 50);

  //BIRD
  //legs
  stroke(0, 0, 0);
  strokeWeight(3);
  line(255, 380, 255, 400);
  line(265, 380, 265, 400);

  //body/head
  noStroke();
  fill(227, 186, 120);
  ellipse(260, 370, 40);
  ellipse(280, 345, 25);

  //eyes
  fill(0, 0, 0);
  ellipse(283, 342, 6, 8);
  fill(255, 255, 255);
  ellipse(284, 342, 3, 5);

  //mouth
  fill(247, 202, 64);
  triangle(292, 342, 290, 350, 305, 350);

  //wing
  arc(246, 360, 35, 35, 25, 97);

  //text success
  rect(buttonX, buttonY, 200, 100, 10);

  fill(155, 237, 147);
  textSize(40);
  text("SUCCESS", 205, 235);

  //restart button

  rect(buttonX, 280, 200, 50, 10);

  fill(242, 188, 81);
  textSize(40);
  text("restart", 245, 317);
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    if (gameState === true) {
      //gravity logic
      y = y + velocityY;
      velocityY = velocityY + acceleration;

      if (mouseIsPressed) {
        velocityY = velocityY - 0.8;
      }
      egg(x, y, s);
      if (y > 330 && velocityY > 4) {
        state = "resultFailed";
        resultScreenFailed();
        y = 100;
        velocityY = 0.2;
      } else if (y > 330 && velocityY <= 4) {
        state = "resultSuccess";
        resultScreenSuccess();
        y = 100;
        velocityY = 0.2;
      }
    }
    console.log(y);
    //egg(x, y, s);
  }
}

function mouseClicked() {
  if (
    state === "start" &&
    mouseX >= 200 &&
    mouseX <= 400 &&
    mouseY >= 170 &&
    mouseY <= 270
  ) {
    state = "game";
  } else if (
    (state === "resultSuccess" &&
      mouseX >= 200 &&
      mouseX <= 400 &&
      mouseY >= 280 &&
      mouseY <= 330) ||
    (state === "resultFailed" &&
      mouseX >= 200 &&
      mouseX <= 400 &&
      mouseY >= 280 &&
      mouseY <= 330)
  ) {
    state = "game";
  }
}
