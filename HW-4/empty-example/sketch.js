//setup the canvas
function setup () {
  createCanvas (600, 200);
}

//setup draw function and color canvas
function draw () {
  background (rgb(125, 29, 186));

  //main sandbox
  push();

//Move canvas
Translate(300, 200);

//body
push();
nostroke();
fill(rgb(119, 8, 8));
rect(-50, 75, 100, 250);

  pop();
}
