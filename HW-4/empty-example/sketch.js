//setup the canvas
function setup () {
  createCanvas (600, 600);
}

//setup draw function and color canvas
function draw () {
  background ( 'rgb(125, 29, 186)' );

  //start main sandbox
  push();

//Move canvas
translate(300, 300);

//arms
push();
stroke('rgb(255, 210, 122)');
strokeWeight(35);
line(-40, -45, -100, 100);
line(40, -45, 120, -35);
line(120, -35, 100, -100);
strokeWeight(38);
line(-100, 100, -105, 105);
line(100, -100, 105, -105);
pop();

//body
push();
noStroke();
fill( 'rgb(119, 8, 8)' );
rect(-50, -75, 100, 250, 100);
ellipse(0, 75, 125, 175);
pop();

//Head
push();
stroke('rgb(255, 200, 122)');
strokeWeight(50);
line(0, -110, 0, -75);
noStroke();
fill('rgb(255, 210, 122)');
ellipse(0, -120, 100);
pop();

//hair and eyes
push();
stroke('rgb(154, 154, 154)');
strokeWeight(10);
line(-47, -130, -43, -140);
line(47,-130, 43, -140);
stroke(255);
strokeWeight(15);
point(-17, -130);
point(17, -130);
stroke(0);
strokeWeight(8);
point(-16, -130);
point(18, -130);
pop();

//mouth
push();
noStroke();
fill(0);
arc(0, -100, 40, 30, radians(0), radians(180));
fill(255);
rect(-10, -100, 5, 5);
pop();

//legs
push();
noStroke();
fill( 'rgb(17, 81, 173)' );
rect(-50, 130, 100, 200);
fill('rgb(125, 29, 186)');
rect(-5, 170, 10, 150, 50);
pop();

//end main sandbox
  pop();
}
