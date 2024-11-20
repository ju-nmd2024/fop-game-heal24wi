class Player {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    noStroke();

    //ears
    fill(189, 158, 122);
    ellipse(this.x - 23 * this.s, this.y, 15 * this.s);
    ellipse(this.x + 23 * this.s, this.y, 15 * this.s);

    //throught
    beginShape();
    vertex(this.x - 10 * this.s, this.y + 20 * this.s);
    bezierVertex(
      this.x - 10 * this.s,
      this.y + 25 * this.s,
      this.x - 10 * this.s,
      this.y + 30 * this.s,
      this.x - 15 * this.s,
      this.y + 35 * this.s
    );
    vertex(this.x + 15 * this.s, this.y + 35 * this.s);
    bezierVertex(
      this.x + 10 * this.s,
      this.y + 30 * this.s,
      this.x + 10 * this.s,
      this.y + 25 * this.s,
      this.x + 10 * this.s,
      this.y + 20 * this.s
    );
    endShape(CLOSE);

    //Head hair
    fill(95, 75, 53);
    ellipse(this.x, this.y, 50 * this.s);

    //arm left
    fill(189, 158, 122);
    beginShape();
    vertex(this.x - 28 * this.s, this.y + 36 * this.s);
    vertex(this.x - 50 * this.s, this.y + 50 * this.s);
    bezierVertex(
      this.x - 55 * this.s,
      this.y + 55 * this.s,
      this.x - 55 * this.s,
      this.y + 60 * this.s,
      this.x - 47 * this.s,
      this.y + 70 * this.s
    );
    vertex(this.x - 30 * this.s, this.y + 85 * this.s);
    vertex(this.x - 30 * this.s, this.y + 73 * this.s);
    vertex(this.x - 40 * this.s, this.y + 60 * this.s);
    vertex(this.x - 30 * this.s, this.y + 53 * this.s);
    endShape();

    //arm right
    beginShape();
    vertex(this.x + 28 * this.s, this.y + 36 * this.s);
    vertex(this.x + 50 * this.s, this.y + 50 * this.s);
    bezierVertex(
      this.x + 55 * this.s,
      this.y + 55 * this.s,
      this.x + 55 * this.s,
      this.y + 60 * this.s,
      this.x + 47 * this.s,
      this.y + 70 * this.s
    );
    vertex(this.x + 30 * this.s, this.y + 85 * this.s);
    vertex(this.x + 30 * this.s, this.y + 73 * this.s);
    vertex(this.x + 40 * this.s, this.y + 60 * this.s);
    vertex(this.x + 30 * this.s, this.y + 53 * this.s);
    endShape();

    //body
    fill(225, 211, 87);
    rect(
      this.x - 32.5 * this.s,
      this.y + 35 * this.s,
      65 * this.s,
      70 * this.s,
      10 * this.s
    );

    //Tail
    fill(75, 57, 38);
    beginShape();
    vertex(this.x, this.y);
    bezierVertex(
      this.x + 10 * this.s,
      this.y + 5 * this.s,
      this.x + 20 * this.s,
      this.y + 10 * this.s,
      this.x + 25 * this.s,
      this.y + 25 * this.s
    );
    vertex(this.x + 25 * this.s, this.y + 10 * this.s);
    bezierVertex(
      this.x + 25 * this.s,
      this.y,
      this.x + 20 * this.s,
      this.y - 5 * this.s,
      this.x + 10 * this.s,
      this.y - 5 * this.s
    );
    endShape();

    ellipse(this.x + 4, this.y - 4, 10);

    //leg pants left/right
    fill(225, 211, 87);
    rect(
      this.x - 30 * this.s,
      this.y + 90 * this.s,
      20 * this.s,
      40 * this.s,
      20 * this.s
    );
    rect(
      this.x + 10 * this.s,
      this.y + 90 * this.s,
      20 * this.s,
      40 * this.s,
      20 * this.s
    );

    //leg right
    fill(189, 158, 122);
    rect(this.x + 13 * this.s, this.y + 125 * this.s, 14 * this.s, 20 * this.s);

    //shoes left/right
    fill(183, 61, 39);
    rect(
      this.x - 30 * this.s,
      this.y + 120 * this.s,
      20 * this.s,
      25 * this.s,
      20 * this.s
    );
    rect(
      this.x + 10 * this.s,
      this.y + 143 * this.s,
      20 * this.s,
      10 * this.s,
      10 * this.s
    );

    //backpack stripes left/right
    stroke(106, 39, 27);
    line(this.x - 17, this.y + 40, this.x - 20, this.y + 36);
    line(this.x - 23, this.y + 75, this.x - 32, this.y + 70);

    line(this.x + 17, this.y + 40, this.x + 20, this.y + 36);
    line(this.x + 23, this.y + 75, this.x + 32, this.y + 70);

    //backpack
    noStroke();
    fill(183, 61, 39);
    rect(this.x - 23, this.y + 40, 46, 50, 5);

    fill(150, 51, 33);
    rect(this.x - 23, this.y + 40, 46, 20, 5);

    fill(106, 39, 27);
    rect(this.x - 5, this.y + 50, 10, 15, 2);
  }
}

class Bunny {
  constructor(BunnyX, BunnyY) {
    this.BunnyX = BunnyX;
    this.BunnyY = BunnyY;
  }
  draw() {
    //legs lef/right
    fill(196, 195, 194);
    rect(this.BunnyX - 15, this.BunnyY + 20, 8, 15, 20);
    rect(this.BunnyX + 7, this.BunnyY + 20, 8, 15, 20);

    //body
    fill(215, 213, 210);
    ellipse(this.BunnyX, this.BunnyY, 40, 60);

    //head
    fill(196, 195, 194);
    ellipse(this.BunnyX, this.BunnyY - 20, 30, 40);

    //nose
    fill(0, 0, 0);
    ellipse(this.BunnyX, this.BunnyY - 40, 5);

    //eyes left/right
    fill(255, 255, 255);
    ellipse(this.BunnyX - 5, this.BunnyY - 23, 10, 15);
    fill(0, 0, 0);
    ellipse(this.BunnyX - 5, this.BunnyY - 25, 5, 8);

    fill(255, 255, 255);
    ellipse(this.BunnyX + 5, this.BunnyY - 23, 10, 15);
    fill(0, 0, 0);
    ellipse(this.BunnyX + 5, this.BunnyY - 25, 5, 8);

    //tail
    fill(255, 255, 255);
    ellipse(this.BunnyX, this.BunnyY + 28, 10);

    //ears left/right
    fill(196, 195, 194);
    ellipse(this.BunnyX - 10, this.BunnyY, 10, 30);
    ellipse(this.BunnyX + 10, this.BunnyY, 10, 30);
    fill(238, 198, 228);
    ellipse(this.BunnyX - 10, this.BunnyY, 5, 25);
    ellipse(this.BunnyX + 10, this.BunnyY, 5, 25);
  }
}

class Grandpa {
  constructor(GrandpaX, GrandpaY, GrandpaS) {
    this.GrandpaX = GrandpaX;
    this.GrandpaY = GrandpaY;
    this.GrandpaS = GrandpaS;
  }

  draw() {
    noStroke();

    //ears
    fill(235, 210, 180);
    ellipse(
      this.GrandpaX - 23 * this.GrandpaS,
      this.GrandpaY,
      15 * this.GrandpaS
    );
    ellipse(
      this.GrandpaX + 23 * this.GrandpaS,
      this.GrandpaY,
      15 * this.GrandpaS
    );

    //throught
    beginShape();
    vertex(
      this.GrandpaX - 10 * this.GrandpaS,
      this.GrandpaY + 20 * this.GrandpaS
    );
    bezierVertex(
      this.GrandpaX - 10 * this.GrandpaS,
      this.GrandpaY + 25 * this.GrandpaS,
      this.GrandpaX - 10 * this.GrandpaS,
      this.GrandpaY + 30 * this.GrandpaS,
      this.GrandpaX - 15 * this.GrandpaS,
      this.GrandpaY + 35 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 15 * this.GrandpaS,
      this.GrandpaY + 35 * this.GrandpaS
    );
    bezierVertex(
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 30 * this.GrandpaS,
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 25 * this.GrandpaS,
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 20 * this.GrandpaS
    );
    endShape(CLOSE);

    //Head hair
    fill(205, 202, 198);
    ellipse(this.GrandpaX, this.GrandpaY, 50 * this.GrandpaS);

    //arm left
    fill(235, 210, 180);
    beginShape();
    vertex(
      this.GrandpaX - 28 * this.GrandpaS,
      this.GrandpaY + 36 * this.GrandpaS
    );
    vertex(
      this.GrandpaX - 50 * this.GrandpaS,
      this.GrandpaY + 50 * this.GrandpaS
    );
    bezierVertex(
      this.GrandpaX - 55 * this.GrandpaS,
      this.GrandpaY + 55 * this.GrandpaS,
      this.GrandpaX - 55 * this.GrandpaS,
      this.GrandpaY + 60 * this.GrandpaS,
      this.GrandpaX - 47 * this.GrandpaS,
      this.GrandpaY + 70 * this.GrandpaS
    );
    vertex(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 85 * this.GrandpaS
    );
    vertex(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 73 * this.GrandpaS
    );
    vertex(
      this.GrandpaX - 40 * this.GrandpaS,
      this.GrandpaY + 60 * this.GrandpaS
    );
    vertex(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 53 * this.GrandpaS
    );
    endShape();

    //arm right
    beginShape();
    vertex(
      this.GrandpaX + 28 * this.GrandpaS,
      this.GrandpaY + 36 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 50 * this.GrandpaS,
      this.GrandpaY + 50 * this.GrandpaS
    );
    bezierVertex(
      this.GrandpaX + 55 * this.GrandpaS,
      this.GrandpaY + 55 * this.GrandpaS,
      this.GrandpaX + 55 * this.GrandpaS,
      this.GrandpaY + 60 * this.GrandpaS,
      this.GrandpaX + 47 * this.GrandpaS,
      this.GrandpaY + 70 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 30 * this.GrandpaS,
      this.GrandpaY + 85 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 30 * this.GrandpaS,
      this.GrandpaY + 73 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 40 * this.GrandpaS,
      this.GrandpaY + 60 * this.GrandpaS
    );
    vertex(
      this.GrandpaX + 30 * this.GrandpaS,
      this.GrandpaY + 53 * this.GrandpaS
    );
    endShape();

    //body
    fill(72, 86, 126);
    rect(
      this.GrandpaX - 32.5 * this.GrandpaS,
      this.GrandpaY + 35 * this.GrandpaS,
      65 * this.GrandpaS,
      70 * this.GrandpaS,
      10 * this.GrandpaS
    );

    //leg pants left/right
    fill(72, 86, 126);
    rect(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 90 * this.GrandpaS,
      20 * this.GrandpaS,
      40 * this.GrandpaS,
      20 * this.GrandpaS
    );
    rect(
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 90 * this.GrandpaS,
      20 * this.GrandpaS,
      40 * this.GrandpaS,
      20 * this.GrandpaS
    );

    //leg left/ right
    fill(235, 210, 180);
    rect(
      this.GrandpaX + 13 * this.GrandpaS,
      this.GrandpaY + 125 * this.GrandpaS,
      14 * this.GrandpaS,
      20 * this.GrandpaS
    );

    rect(
      this.GrandpaX - 27 * this.GrandpaS,
      this.GrandpaY + 125 * this.GrandpaS,
      14 * this.GrandpaS,
      20 * this.GrandpaS
    );

    //shoes left/right
    fill(10, 10, 10);
    rect(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 143 * this.GrandpaS,
      20 * this.GrandpaS,
      10 * this.GrandpaS,
      10 * this.GrandpaS
    );

    rect(
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 143 * this.GrandpaS,
      20 * this.GrandpaS,
      10 * this.GrandpaS,
      10 * this.GrandpaS
    );
  }
}

class Biker {
  constructor(bikerX, bikerY, bikerS) {
    this.bikerX = bikerX;
    this.bikerY = bikerY;
    this.bikerS = bikerS;
  }
  draw() {
    noStroke();

    //ears
    fill(175, 127, 66);
    ellipse(this.bikerX - 23 * this.bikerS, this.bikerY, 15 * this.bikerS);
    ellipse(this.bikerX + 23 * this.bikerS, this.bikerY, 15 * this.bikerS);

    //throught
    beginShape();
    vertex(this.bikerX - 10 * this.bikerS, this.bikerY + 20 * this.bikerS);
    bezierVertex(
      this.bikerX - 10 * this.bikerS,
      this.bikerY + 25 * this.bikerS,
      this.bikerX - 10 * this.bikerS,
      this.bikerY + 30 * this.bikerS,
      this.bikerX - 15 * this.bikerS,
      this.bikerY + 35 * this.bikerS
    );
    vertex(this.bikerX + 15 * this.bikerS, this.bikerY + 35 * this.bikerS);
    bezierVertex(
      this.bikerX + 10 * this.bikerS,
      this.bikerY + 30 * this.bikerS,
      this.bikerX + 10 * this.bikerS,
      this.bikerY + 25 * this.bikerS,
      this.bikerX + 10 * this.bikerS,
      this.bikerY + 20 * this.bikerS
    );
    endShape(CLOSE);

    //Head hair
    fill(62, 40, 0);
    ellipse(this.bikerX, this.bikerY, 50 * this.bikerS);

    //arm left
    fill(175, 127, 66);
    beginShape();
    vertex(this.bikerX - 28 * this.bikerS, this.bikerY + 36 * this.bikerS);
    vertex(this.bikerX - 50 * this.bikerS, this.bikerY + 50 * this.bikerS);
    bezierVertex(
      this.bikerX - 55 * this.bikerS,
      this.bikerY + 55 * this.bikerS,
      this.bikerX - 55 * this.bikerS,
      this.bikerY + 60 * this.bikerS,
      this.bikerX - 47 * this.bikerS,
      this.bikerY + 70 * this.bikerS
    );
    vertex(this.bikerX - 30 * this.bikerS, this.bikerY + 85 * this.bikerS);
    vertex(this.bikerX - 30 * this.bikerS, this.bikerY + 73 * this.bikerS);
    vertex(this.bikerX - 40 * this.bikerS, this.bikerY + 60 * this.bikerS);
    vertex(this.bikerX - 30 * this.bikerS, this.bikerY + 53 * this.bikerS);
    endShape();

    //arm right
    beginShape();
    vertex(this.bikerX + 28 * this.bikerS, this.bikerY + 36 * this.bikerS);
    vertex(this.bikerX + 50 * this.bikerS, this.bikerY + 50 * this.bikerS);
    bezierVertex(
      this.bikerX + 55 * this.bikerS,
      this.bikerY + 55 * this.bikerS,
      this.bikerX + 55 * this.bikerS,
      this.bikerY + 60 * this.bikerS,
      this.bikerX + 47 * this.bikerS,
      this.bikerY + 70 * this.bikerS
    );
    vertex(this.bikerX + 30 * this.bikerS, this.bikerY + 85 * this.bikerS);
    vertex(this.bikerX + 30 * this.bikerS, this.bikerY + 73 * this.bikerS);
    vertex(this.bikerX + 40 * this.bikerS, this.bikerY + 60 * this.bikerS);
    vertex(this.bikerX + 30 * this.bikerS, this.bikerY + 53 * this.bikerS);
    endShape();

    //body
    fill(147, 138, 189);
    rect(
      this.bikerX - 32.5 * this.bikerS,
      this.bikerY + 35 * this.bikerS,
      65 * this.bikerS,
      70 * this.bikerS,
      10 * this.bikerS
    );

    //leg pants left/right
    fill(147, 138, 189);
    rect(
      this.bikerX - 30 * this.bikerS,
      this.bikerY + 90 * this.bikerS,
      20 * this.bikerS,
      40 * this.bikerS,
      20 * this.bikerS
    );
    rect(
      this.bikerX + 10 * this.bikerS,
      this.bikerY + 90 * this.bikerS,
      20 * this.bikerS,
      40 * this.bikerS,
      20 * this.bikerS
    );

    //leg right
    fill(175, 127, 66);
    rect(
      this.bikerX + 13 * this.bikerS,
      this.bikerY + 125 * this.bikerS,
      14 * this.bikerS,
      20 * this.bikerS
    );

    //shoes left/right
    fill(110, 99, 78);
    rect(
      this.bikerX - 30 * this.bikerS,
      this.bikerY + 120 * this.bikerS,
      20 * this.bikerS,
      25 * this.bikerS,
      20 * this.bikerS
    );
    rect(
      this.bikerX + 10 * this.bikerS,
      this.bikerY + 143 * this.bikerS,
      20 * this.bikerS,
      10 * this.bikerS,
      10 * this.bikerS
    );

    //bike pedal line left/right
    strokeWeight(1);
    stroke(0, 0, 0);
    line(
      this.bikerX - 13 * this.bikerS,
      this.bikerY + 134 * this.bikerS,
      this.bikerX - 8 * this.bikerS,
      this.bikerY + 134 * this.bikerS
    );
    line(
      this.bikerX - 8 * this.bikerS,
      this.bikerY + 134 * this.bikerS,
      this.bikerX - 8 * this.bikerS,
      this.bikerY + 150 * this.bikerS
    );
    line(
      this.bikerX - 8 * this.bikerS,
      this.bikerY + 150 * this.bikerS,
      this.bikerX - 4 * this.bikerS,
      this.bikerY + 150 * this.bikerS
    );

    line(
      this.bikerX + 4 * this.bikerS,
      this.bikerY + 153 * this.bikerS,
      this.bikerX + 10 * this.bikerS,
      this.bikerY + 153 * this.bikerS
    );

    //saddle support
    strokeWeight(3);
    line(
      this.bikerX + 1 * this.bikerS,
      this.bikerY + 106 * this.bikerS,
      this.bikerX + 1 * this.bikerS,
      this.bikerY + 120 * this.bikerS
    );

    //bike wheel
    noStroke();
    fill(75, 75, 75);
    rect(
      this.bikerX - 3 * this.bikerS,
      this.bikerY + 117 * this.bikerS,
      10 * this.bikerS,
      60 * this.bikerS,
      20 * this.bikerS
    );

    //bike saddle
    rect(
      this.bikerX - 10 * this.bikerS,
      this.bikerY + 100 * this.bikerS,
      22 * this.bikerS,
      10 * this.bikerS,
      20 * this.bikerS
    );

    //bike pedals left/right
    fill(10, 10, 10);
    rect(
      this.bikerX - 30 * this.bikerS,
      this.bikerY + 130 * this.bikerS,
      20 * this.bikerS,
      8 * this.bikerS,
      10 * this.bikerS
    );
    rect(
      this.bikerX + 10 * this.bikerS,
      this.bikerY + 150 * this.bikerS,
      20 * this.bikerS,
      8 * this.bikerS,
      10 * this.bikerS
    );
  }
}

let biker = new Biker(150, 200, 0.8);
let grandpa = new Grandpa(350, 300, 0.8);
let bunny = new Bunny(250, 100);
let player = new Player(250, 500, 1);

function draw() {
  background(255, 255, 255);
  bunny.draw();
  biker.draw();
  grandpa.draw();
  player.draw();
}
