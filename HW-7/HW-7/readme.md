Jorden LeMarr, Coding Sect: 50

[Live Sketch Link](file:///C:/Users/logio/Documents/Coding/Coding-work/HW-7/HW-7/index.html)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

### Please describe what the original code is doing.

The code is creating a ball that moves from edge to edge changing directions when hitting the edge of the canvas. It also changes direction and speed when the mouse is clicked.

### Why is it working the way it is?

The code is able to do this by using conditional statements. Saying if something happens then it needs to do something other than it was doing before. such as if it reaches the edge of the canvas it needs to change direction, or if the mouse is clicked then it needs to change direction.

### What does each line do?

The first lines establish variables in the code.
The next set of lines create a white canvas.
The next lines (19-22) create the draw function and create the position of the ball using variables so that it may be changed in later lines of code. This also moves the position of the ball initially.
Lines 25-30 create a condtional statement in order to keep the ball within the boarders of the canvas, making the ball change direction when it reaches these points.
Lines 32-34 create the ellipse and end the draw function.
The final lines are the mouse pressed function. This makes the ball change direction when the mouse is clicked based on where the mouse is.

### How can you make the ball change direction?

You can make the ball change by using the code
function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
    }
The ball.scale functions are used when determining the position of the ball every frame earlier in the code. By changng the data attatched to these functions when the mouse is clicked will change the data being used to determine the position of the ball. In this case when the mouse is clicked the data is set to the position of the mouse.

## How did you alter the sketch?

First of all I changed some colors and the size because why not. I then added a more complex condition using if, else, and else if. I wanted to see the ball change color based on its position of screen and I decided I wanted a full spectrum on screen. And that took longer than I thought so I stopped there...
