var speed = 4;
var angle = 0.0;
var offset = 200;
var scalar = 40;


function setup() {
  createCanvas(1800, 600);
  background(255);

}

function draw() {
  var r = color(random(255), random(255), random(255));
  var w = random(5);
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  strokeWeight(w);
  stroke(r);
  line(x, y, 0, 0);
  line(x, y, 1000, 1000);
  line(x, y, 1000, 0);
  line(x, y, 0, 1000);
  angle += speed
  scalar +=speed

}
