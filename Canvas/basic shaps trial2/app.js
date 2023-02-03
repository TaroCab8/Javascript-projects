const canvas = document.getElementById("canvas1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

let y = canvas.height / 7;
let moveToX = 100;
let moveToY = 800;
let lineToX = 340;
let lineToY = 800;
let lineToHX = 220;
let lineToHY = 600;
let lineToVX = 340;
let lineToVY = 800;

let angle = 0;
let radians = angle * (Math.PI / 180);
let speed = 0.01;
let xBall = 0;
let circleX = 400;
let yBall = 0;
let circleY = 400;
let size = 50;
let radius = 125;
//create Gradient

const grd = ctx.createLinearGradient(0, 0, 600, 0.5);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "purple");

// end Gradient

function drawCircle() {
  yBall = circleY + Math.sin(angle) * radius;
  xBall = circleX + Math.cos(angle) * radius;
  angle += speed;

  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(xBall, yBall, size, angle, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}

function drawDivisorLines() {
  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

  //horizontal line
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();
}

//rect

function drawRect() {
  ctx.fillStyle = grd;
  ctx.strokeStyle = grd;
  ctx.fillRect(canvas.width - canvas.width / 3, y, 200, 200);
  ctx.strokeRect(canvas.width - canvas.width / 3, y, 200, 200);
  ctx.lineWidth = 5;
}

//triangle
function drawTriangle() {
  ctx.save();
  ctx.strokeStyle = grd;
  ctx.fillStyle = "orangered";
  ctx.moveTo(moveToX, moveToY);
  ctx.lineTo(lineToHX, lineToHY);
  ctx.lineTo(lineToX, lineToY);
  ctx.moveTo(moveToX, moveToY);
  ctx.lineTo(lineToVX, lineToVY);
  ctx.fill();
  ctx.stroke();
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDivisorLines();

  drawCircle();

  //drawRect();
  //drawTriangle();

  requestAnimationFrame(animate);
  console.log(Math.sin(angle));
}
//create animation

//animate();
