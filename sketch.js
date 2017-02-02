var len;

function setup() {
  var canvas = createCanvas(800, 800);
  }
  function draw() {
    background(51);
    translate(width/2, height/2);
    rectMode(CENTER);
    branch(width);
    }
function branch(len) {
    fill(random(255));
    rect(0, 0, len, len);
    if (len > 1) {
      branch(len * 0.5);
  }
}
