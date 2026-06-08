// ===============================
// MATRIX
// ===============================
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#00ffcc";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const char = letters[Math.floor(Math.random()*letters.length)];
    ctx.fillText(char, i*fontSize, drops[i]*fontSize);

    if (drops[i]*fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 35);


// ===============================
// TYPING INFini
// ===============================
const text = "Protégez vos données contre les attaques informatiques...";
const typing = document.getElementById("typing");

let i = 0;
let del = false;

function loop() {
  typing.style.opacity = 1;

  if (!del) typing.innerHTML = text.substring(0, i++);
  else typing.innerHTML = text.substring(0, i--);

  let speed = del ? 40 : 80;

  if (!del && i === text.length) {
    speed = 1500;
    del = true;
  }

  if (del && i === 0) {
    del = false;
    speed = 500;
  }

  setTimeout(loop, speed);
}

loop();

window.addEventListener("resize", () => location.reload());