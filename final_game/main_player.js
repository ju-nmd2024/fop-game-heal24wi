class Player {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }
  draw() {
    stroke(0, 0, 0);
    line(this.x - 50, this.y - 100, this.x - 50, this.y + 200);
    line(this.x + 50, this.y - 100, this.x + 50, this.y + 200);

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

let bunny = new Bunny(100, 100);
let player = new Player(100, 200, 0.8);

function draw() {
  background(255, 255, 255);
  bunny.draw();

  player.draw();
}
