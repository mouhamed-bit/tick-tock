var hr,mn,sc;
var backGround

function preload(){
  backGround = loadImage("brick.jpg")
}

function setup() {
  createCanvas(1366,657);

  angleMode(DEGREES);
}

function draw() {
  background(backGround);  
  drawSprites();
  
  translate(660,325)
    rotate(-90)

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr % 12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

    push();
    rotate(mnAngle);
    stroke("pink");
    strokeWeight(7);
    line(0,0,75,0);
    pop();

    push();
    rotate(hrAngle);
    stroke("purple");
    strokeWeight(7);
    line(0,0,50,0);
    pop();

    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke("blue");
    arc(0,0,300,300,0,scAngle);
    //Minutes
    stroke("pink");
    arc(0,0,280,280,0,mnAngle);
    //Hour
    stroke("purple");
    arc(0,0,260,260,0,hrAngle);
}