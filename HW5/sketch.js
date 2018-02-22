function setup() {
  createCanvas(windowWidth, 800);
}

let t1Angle = 0;
let t2Angle = 0;
let t3Angle = 0;
let t1RotationRate = 0;
let t2RotationRate = 0;
let t3RotationRate = 0;
let cAngle = 0

function draw() {
  //erase every frame
  background( 'rgb(120, 100, 255)' );
  // turn off cursor
  noCursor();

  //Update values
  //base triangle 1 and 2 rotation on mouseX position
  t1RotationRate = (mouseX * 0.1) - 20;
  t2RotationRate = (mouseX * 0.1) - 40;
  //base triangle 3 rotation on mouseY position
  t3RotationRate = (mouseY * 0.1) - 30;
  //update all triangle angles
  t1Angle = t1Angle + t1RotationRate;
  t2Angle = t2Angle + t2RotationRate;
  t3Angle = t3Angle + t3RotationRate;
  //set constant circle rotation
  cAngle = cAngle - 3

  //shapes sandbox
  push();

  //make the shapes follow the mouse
  translate( mouseX, mouseY);

  //Triangle 1
  push();

  rotate( radians(t1Angle) );
  noStroke();
  fill( 'rgb(225, 50, 30)' );
  triangle(10, 0, -40, -25, -40, 25);

  pop();

  //Triangle 2
  push();

  rotate( radians(t2Angle) );
  noStroke();
  fill( 'rgb(230, 216, 30)' );
  triangle(-10, 10, 0, -40, 40, 0);

  pop();

    //Triangle 3
    push();

    rotate( radians(t3Angle) );
    noStroke();
    fill( 'rgb(0, 50, 230)' );
    triangle(10, -10, 0, 40, -40, 0);

    pop();

    //Cirlces
    push();

    rotate(radians(cAngle));
    noStroke();
    fill(0);
    ellipse(60, 0, 15);

    rotate(radians(cAngle));
    noStroke();
    fill(128);
    ellipse(0, 60, 15);

    rotate(radians(cAngle));
    noStroke();
    fill(64);
    ellipse(0, -60, 15);

    rotate(radians(cAngle));
    noStroke();
    fill(255);
    ellipse(-60, 0, 15);

    pop();

    pop();
    
}
