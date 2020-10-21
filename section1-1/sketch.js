function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(178, 100, 162);
  triangle(12,120,116,120,116,10);
  fill(94, 185, 84);
  triangle(0,50,50,50,50,0);
  fill(255);
  textSize(27);
  textFont("serif");
  text("466", 68, 100);
}
