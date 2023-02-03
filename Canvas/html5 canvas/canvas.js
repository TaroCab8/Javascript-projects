window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  //Reisizing

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  //variables
  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }
  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }
  function draw(e) {
    if (!painting) return;
    ctx.linewidth = 20;
    ctx.lineCap = "round";
    ctx.strokeStyle = "red";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
  //Event listeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});
