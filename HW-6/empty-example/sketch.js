//establish universal variables
let bgColor;
let centerX, centerY;
//create object
let triangleString = {};
pos1x = 100;
pos1y = 100;
pos2x = 200;
pos2y = 200;
pos3x = 0;
pos3y = 0;
let multMax = 0.06;
let multDelta;
let mult;
let bluefill = 255;
let alphaAmt = 20;
let alphaNoise;

//create setup and create the canvas as well background
function setup() {
    bgColor = color(21, 218, 153);
    createCanvas(windowWidth, 600);
    background(bgColor);

//create starting position
    pos1x = random(width);
    pos1y = random(height);
    pos2x = pos1x + 4;
    pos2y = pos1y - 4;
}

//start draw function
function draw() {

    centerX = width * 0.5;
    centerY = height * 0.5;

    multDelta = noise(0.01 * frameCount + pow(2, 8));
    multDelta = map(multDelta, 0, 1, -0.0001, 0.0001);
    multMax = constrain(multMax + multDelta, 0.005, 0.2);
    mult = random(-multMax, multMax);
    pos3x = abs(((width * mult) + pos2x) % width);
    mult = random(-multMax, multMax);
    pos3y = abs(((height * mult) + pos2y) % height);
    mult = noise(frameCount * 0.001) * 255;
    bluefill = constrain(mult, 0, 255);

//create the actual triangle
    stroke(255, 25);
    alphaNoise = noise(0.1 * frameCount + 1000);
    alphaNoise = map(alphaNoise, 0, 1, -2, 2);
    alphaAmt += alphaNoise;
    alphaAmt = constrain(alphaAmt, 100, 150);
    fill(255 - bluefill, bluefill, 175, 50);
    triangle(pos1x, pos1y, pos2x, pos2y, pos3x, pos3y);
      pos1x = pos2x;
      pos1y = pos2y;
      pos2x = pos3x;
      pos2y = pos3y;
}
