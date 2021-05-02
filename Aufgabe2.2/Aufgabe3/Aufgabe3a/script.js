"use strict";
let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.lineWidth = 10;
context.strokeRect(75, 140, 150, 110);
context.fillRect(130, 190, 40, 60);
context.beginPath();
context.moveTo(50, 140);
context.lineTo(150, 60);
context.lineTo(250, 140);
context.closePath();
context.stroke();
//# sourceMappingURL=script.js.map