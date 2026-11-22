let angle = 0;
let speed = 0.04;
let paused = false;

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(240);

  let ballX = (angle * 50) % width;
  let ballY = height / 2 + 100 * sin(angle);

  fill(30, 120, 220);
  noStroke();
  circle(ballX, ballY, 30);

  fill(20);
  textAlign(CENTER);
  textSize(15);
  text("SPACE/CLICK: Pause | UP/DOWN: Speed", width / 2, 25);
  text(paused ? "PAUSED" : "PLAYING", width / 2, 50);

  if (!paused) {
    angle += speed;
  }
}

function keyPressed() {
  if (key === " ") paused = !paused;
  if (keyCode === UP_ARROW) speed += 0.01;
  if (keyCode === DOWN_ARROW)
    speed = max(0.01, speed - 0.01);
}

function mousePressed() {
  paused = !paused;
}
