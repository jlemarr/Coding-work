

let ball = {};
ball.width = 30;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, 400);
    background(81, 230, 200);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    if (ball.x > width*0.83) {
    fill (127, 0, 217);
    }
    else if (ball.x > width*0.68) {
    fill (0, 0, 255);
    }
    else if (ball.x > width/2) {
    fill (0, 255, 50);
    }
    else if (ball.x > width*0.34) {
    fill (255, 255, 0);
    }
    else if (ball.x > width*0.16) {
    fill (255, 150, 0);
    }
    else {
    fill (255, 0, 0);
    }
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
