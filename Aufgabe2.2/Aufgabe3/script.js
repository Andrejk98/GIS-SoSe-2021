"use strict";
let canvas = document.getElementById("myFirstCanvas");
let context = canvas.getContext("2d");
context.lineWidth = 5;
//Himmel
context.fillStyle = "#8ED6FF";
context.fillRect(0, 0, 400, 250);
//Boden
context.fillStyle = "Green";
context.fillRect(0, 250, 400, 220);
//Sonne
context.beginPath();
context.fillStyle = "Yellow";
context.arc(50, 50, 70, 0, 360, false);
context.fill();
//Wolke
context.beginPath();
context.fillStyle = "White";
context.arc(300, 50, 40, 0, 360, false);
context.arc(350, 50, 40, 0, 360, false);
context.arc(400, 50, 40, 0, 360, false);
context.arc(325, 80, 40, 0, 360, false);
context.arc(375, 80, 40, 0, 360, false);
context.fill();
//Baum
context.beginPath();
context.fillStyle = "Green";
context.arc(320, 190, 25, 0, 360, false);
context.fill();
context.beginPath();
context.fillStyle = "Brown";
context.fillRect(315, 210, 10, 40);
context.fill();
//Haus
context.beginPath();
context.moveTo(30, 250);
context.lineTo(80, 250);
context.lineTo(80, 200);
context.lineTo(55, 180);
context.lineTo(30, 200);
context.closePath();
context.fillStyle = "Black";
context.fill();
context.stroke();
//c)
function createRect() {
    let rect1 = { posX: Math.random() * 400, posY: Math.random() * 400, sizeX: Math.random() * 100, sizeY: Math.random() * 100 };
    return rect1;
}
//d)
function drawRect(rect1) {
    context.beginPath();
    context.fillRect(rect1.posX += 10, rect1.posY, rect1.sizeX, rect1.sizeY);
    context.fill();
}
//e)
let rectangles = [];
rectangles.push(createRect());
rectangles.push(createRect());
rectangles.push(createRect());
rectangles.push(createRect());
rectangles.push(createRect());
for (let i = 0; i < rectangles.length; i++) {
    drawRect(rectangles[i]);
}
//context.clearRect(0, 0, 400, 400);
//# sourceMappingURL=script.js.map