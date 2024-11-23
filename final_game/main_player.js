function player(x, y, s) {
  noStroke();

  //ears
  fill(189, 158, 122);
  ellipse(x - 23 * s, y, 15 * s);
  ellipse(x + 23 * s, y, 15 * s);

  //throught
  beginShape();
  vertex(x - 10 * s, y + 20 * s);
  bezierVertex(
    x - 10 * s,
    y + 25 * s,
    x - 10 * s,
    y + 30 * s,
    x - 15 * s,
    y + 35 * s
  );
  vertex(x + 15 * s, y + 35 * s);
  bezierVertex(
    x + 10 * s,
    y + 30 * s,
    x + 10 * s,
    y + 25 * s,
    x + 10 * s,
    y + 20 * s
  );
  endShape(CLOSE);

  //Head hair
  fill(95, 75, 53);
  ellipse(x, y, 50 * s);

  //arm left
  fill(189, 158, 122);
  beginShape();
  vertex(x - 28 * s, y + 36 * s);
  vertex(x - 50 * s, y + 50 * s);
  bezierVertex(
    x - 55 * s,
    y + 55 * s,
    x - 55 * s,
    y + 60 * s,
    x - 47 * s,
    y + 70 * s
  );
  vertex(x - 30 * s, y + 85 * s);
  vertex(x - 30 * s, y + 73 * s);
  vertex(x - 40 * s, y + 60 * s);
  vertex(x - 30 * s, y + 53 * s);
  endShape();

  //arm right
  beginShape();
  vertex(x + 28 * s, y + 36 * s);
  vertex(x + 50 * s, y + 50 * s);
  bezierVertex(
    x + 55 * s,
    y + 55 * s,
    x + 55 * s,
    y + 60 * s,
    x + 47 * s,
    y + 70 * s
  );
  vertex(x + 30 * s, y + 85 * s);
  vertex(x + 30 * s, y + 73 * s);
  vertex(x + 40 * s, y + 60 * s);
  vertex(x + 30 * s, y + 53 * s);
  endShape();

  //body
  fill(225, 211, 87);
  rect(x - 32.5 * s, y + 35 * s, 65 * s, 70 * s, 10 * s);

  //Tail
  fill(75, 57, 38);
  beginShape();
  vertex(x, y);
  bezierVertex(
    x + 10 * s,
    y + 5 * s,
    x + 20 * s,
    y + 10 * s,
    x + 25 * s,
    y + 25 * s
  );
  vertex(x + 25 * s, y + 10 * s);
  bezierVertex(x + 25 * s, y, x + 20 * s, y - 5 * s, x + 10 * s, y - 5 * s);
  endShape();

  ellipse(x + 4, y - 4, 10);

  //leg pants left/right
  fill(225, 211, 87);
  rect(x - 30 * s, y + 90 * s, 20 * s, 40 * s, 20 * s);
  rect(x + 10 * s, y + 90 * s, 20 * s, 40 * s, 20 * s);

  //leg right
  fill(189, 158, 122);
  rect(x + 13 * s, y + 125 * s, 14 * s, 20 * s);

  //shoes left/right
  fill(183, 61, 39);
  rect(x - 30 * s, y + 120 * s, 20 * s, 25 * s, 20 * s);
  rect(x + 10 * s, y + 143 * s, 20 * s, 10 * s, 10 * s);

  //backpack stripes left/right
  stroke(106, 39, 27);
  line(x - 17 * s, y + 40 * s, x - 20 * s, y + 36 * s);
  line(x - 23 * s, y + 75 * s, x - 32 * s, y + 70 * s);

  line(x + 17 * s, y + 40 * s, x + 20 * s, y + 36 * s);
  line(x + 23 * s, y + 75 * s, x + 32 * s, y + 70 * s);

  //backpack
  noStroke();
  fill(183, 61, 39);
  rect(x - 23 * s, y + 40 * s, 46 * s, 50 * s, 5 * s);

  fill(150, 51, 33);
  rect(x - 23 * s, y + 40 * s, 46 * s, 20 * s, 5 * s);

  fill(106, 39, 27);
  rect(x - 5 * s, y + 50 * s, 10 * s, 15 * s, 2 * s);
}

function bunny(bunnyX, bunnyY) {
  //legs lef/right
  fill(196, 195, 194);
  rect(bunnyX - 15, bunnyY + 20, 8, 15, 20);
  rect(bunnyX + 7, bunnyY + 20, 8, 15, 20);

  //body
  fill(215, 213, 210);
  ellipse(bunnyX, bunnyY, 40, 60);

  //head
  fill(196, 195, 194);
  ellipse(bunnyX, bunnyY - 20, 30, 40);

  //nose
  fill(0, 0, 0);
  ellipse(bunnyX, bunnyY - 40, 5);

  //eyes left/right
  fill(255, 255, 255);
  ellipse(bunnyX - 5, bunnyY - 23, 10, 15);
  fill(0, 0, 0);
  ellipse(bunnyX - 5, bunnyY - 25, 5, 8);

  fill(255, 255, 255);
  ellipse(bunnyX + 5, bunnyY - 23, 10, 15);
  fill(0, 0, 0);
  ellipse(bunnyX + 5, bunnyY - 25, 5, 8);

  //tail
  fill(255, 255, 255);
  ellipse(bunnyX, bunnyY + 28, 10);

  //ears left/right
  fill(196, 195, 194);
  ellipse(bunnyX - 10, bunnyY, 10, 30);
  ellipse(bunnyX + 10, bunnyY, 10, 30);
  fill(238, 198, 228);
  ellipse(bunnyX - 10, bunnyY, 5, 25);
  ellipse(bunnyX + 10, bunnyY, 5, 25);
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

class Biker extends Grandpa {
  constructor(GrandpaX, GrandpaY, GrandpaS) {
    super(GrandpaX, GrandpaY, GrandpaS);
  }
  draw() {
    noStroke();

    //ears
    fill(175, 127, 66);
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
    fill(62, 40, 0);
    ellipse(this.GrandpaX, this.GrandpaY, 50 * this.GrandpaS);

    //arm left
    fill(175, 127, 66);
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
    fill(147, 138, 189);
    rect(
      this.GrandpaX - 32.5 * this.GrandpaS,
      this.GrandpaY + 35 * this.GrandpaS,
      65 * this.GrandpaS,
      70 * this.GrandpaS,
      10 * this.GrandpaS
    );

    //leg pants left/right
    fill(147, 138, 189);
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

    //leg right
    fill(175, 127, 66);
    rect(
      this.GrandpaX + 13 * this.GrandpaS,
      this.GrandpaY + 125 * this.GrandpaS,
      14 * this.GrandpaS,
      20 * this.GrandpaS
    );

    //shoes left/right
    fill(110, 99, 78);
    rect(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 120 * this.GrandpaS,
      20 * this.GrandpaS,
      25 * this.GrandpaS,
      20 * this.GrandpaS
    );
    rect(
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 143 * this.GrandpaS,
      20 * this.GrandpaS,
      10 * this.GrandpaS,
      10 * this.GrandpaS
    );

    //bike pedal line left/right
    strokeWeight(1);
    stroke(0, 0, 0);
    line(
      this.GrandpaX - 13 * this.GrandpaS,
      this.GrandpaY + 134 * this.GrandpaS,
      this.GrandpaX - 8 * this.GrandpaS,
      this.GrandpaY + 134 * this.GrandpaS
    );
    line(
      this.GrandpaX - 8 * this.GrandpaS,
      this.GrandpaY + 134 * this.GrandpaS,
      this.GrandpaX - 8 * this.GrandpaS,
      this.GrandpaY + 150 * this.GrandpaS
    );
    line(
      this.GrandpaX - 8 * this.GrandpaS,
      this.GrandpaY + 150 * this.GrandpaS,
      this.GrandpaX - 4 * this.GrandpaS,
      this.GrandpaY + 150 * this.GrandpaS
    );

    line(
      this.GrandpaX + 4 * this.GrandpaS,
      this.GrandpaY + 153 * this.GrandpaS,
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 153 * this.GrandpaS
    );

    //saddle support
    strokeWeight(3);
    line(
      this.GrandpaX + 1 * this.GrandpaS,
      this.GrandpaY + 106 * this.GrandpaS,
      this.GrandpaX + 1 * this.GrandpaS,
      this.GrandpaY + 120 * this.GrandpaS
    );

    //bike wheel
    noStroke();
    fill(75, 75, 75);
    rect(
      this.GrandpaX - 3 * this.GrandpaS,
      this.GrandpaY + 117 * this.GrandpaS,
      10 * this.GrandpaS,
      60 * this.GrandpaS,
      20 * this.GrandpaS
    );

    //bike saddle
    rect(
      this.GrandpaX - 10 * this.GrandpaS,
      this.GrandpaY + 100 * this.GrandpaS,
      22 * this.GrandpaS,
      10 * this.GrandpaS,
      20 * this.GrandpaS
    );

    //bike pedals left/right
    fill(10, 10, 10);
    rect(
      this.GrandpaX - 30 * this.GrandpaS,
      this.GrandpaY + 130 * this.GrandpaS,
      20 * this.GrandpaS,
      8 * this.GrandpaS,
      10 * this.GrandpaS
    );
    rect(
      this.GrandpaX + 10 * this.GrandpaS,
      this.GrandpaY + 150 * this.GrandpaS,
      20 * this.GrandpaS,
      8 * this.GrandpaS,
      10 * this.GrandpaS
    );
  }
}

let biker = new Biker(150, 200, 0.8);
let grandpa = new Grandpa(350, 300, 0.8);

function draw() {
  background(255, 255, 255);
  bunny(250, 100);
  biker.draw();
  grandpa.draw();
  player(250, 500, 0.8);
}
