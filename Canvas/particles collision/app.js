const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let colours = ["rgb(155,50,100)", "rgb(50,155,100)", "rgb(100,50,155)"];
let particlesArray = [];

class Particle {
  constructor(x, y, destinationX, destinationY, size) {
    this.x = x;
    this.y = y;
    this.destinationX = destinationX;
    this.destinationY = destinationY;
    this.size = size;
    this.speed = 2;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke;
  }

  update() {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.destinationX = -this.destinationX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.destinationY = -this.destinationY;
    }
    this.x += this.destinationX * this.speed;
    this.y += this.speed * this.destinationY;
    this.draw();
  }
}

function connect() {
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let distance =
        (particlesArray[a].x - particlesArray[b].x) *
          (particlesArray[a].x - particlesArray[b].x) +
        (particlesArray[a].y - particlesArray[b].y) *
          (particlesArray[a].y - particlesArray[b].y);
      let sumOfRad = particlesArray[a].size + particlesArray[b].size;
      if (distance < sumOfRad) {
        //colision
        particlesArray[a].destinationX = -particlesArray[a].destinationX;
        particlesArray[a].destinationY = -particlesArray[a].destinationY;
        particlesArray[b].destinationX = -particlesArray[b].destinationX;
        particlesArray[b].destinationY = -particlesArray[b].destinationY;
      }
    }
  }
}

function init() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    let size = 0.9;
    let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
    let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
    let destinationX = Math.random() * 5 - 2.5;
    let destinationY = Math.random() * 5 - 2.5;
    let color = "white";
    particlesArray.push(
      new Particle(x, y, destinationX, destinationY, size, color)
    );
  }
}

function animate() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  requestAnimationFrame(animate);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
    particlesArray[i].update();
    connect();
  }
}
init();
animate();
