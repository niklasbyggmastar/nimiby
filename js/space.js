var x;
var y;
var stars = [];
var speed = 0.5;
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('welcomeContent');
  frameRate(20);
  for (var i = 0; i < 300; i++) {
    x = random(0, windowWidth);
    y = random(0, windowHeight);
    stars[i] = new Star(x,y);
  }
}

function draw() {
  background(24);
  for (var i = 0; i < stars.length; i++) {
    stars[i].show();
    stars[i].move(speed);
  //  stars[i].follow(speed);
  }
}

function windowResized() {
  console.log("MOI");
  console.log(windowWidth + ", " + windowHeight);
  resizeCanvas(windowWidth, windowHeight);
}
