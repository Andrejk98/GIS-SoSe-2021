let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

context.lineWidth = 5;
//A)
//Himmel
context.fillStyle = "#8ED6FF";
context.fillRect(0, 0, 400, 250);
//Boden
context.fillStyle = "Green";
context.fillRect(0, 250, 400, 220);
//Sonne
context.beginPath();
context.fillStyle = "#fdd835";
context.arc(40, 40, 70, 0, 360, false);
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
context.fillStyle = "Lime";
context.arc(320, 190, 25, 0, 360, false);
context.fill();
context.beginPath();
context.fillStyle = "Brown";
context.fillRect(315, 210, 10, 50);
context.fill();
//Haus
context.beginPath();
context.moveTo(30, 250);
context.lineTo(70, 250);
context.lineTo(70, 200);
context.lineTo(50, 180);
context.lineTo(30, 200);
context.closePath();
context.fillStyle = "Black";
context.fill();
context.stroke();

//B)
interface OwnRect {
    posX: number;
    posY: number;
    sizeX: number;
    sizeY: number;
}

//C)
function createRect(): OwnRect {
    let rect1: OwnRect = { posX: Math.random() * 400, posY: Math.random() * 400, sizeX: Math.random() * 100, sizeY: Math.random() * 100 };
    return rect1;
}
//D)
function drawRect(rect1: OwnRect): void {
    context.beginPath();
    context.fillRect(rect1.posX += 10, rect1.posY, rect1.sizeX, rect1.sizeY);
    context.fill();
}
//E)
let rectangles: OwnRect[] = [];
rectangles.push(createRect());
rectangles.push(createRect());
rectangles.push(createRect());
rectangles.push(createRect());
rectangles.push(createRect());

for (let i: number = 0; i < rectangles.length; i++) {
    drawRect(rectangles[i]);
}
//context.clearRect(0, 0, 400, 400);
