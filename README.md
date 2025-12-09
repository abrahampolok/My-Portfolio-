<!Welcome html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AloK The Virus | Moderator</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    body {
      background: black;
      color: white;
      overflow: hidden;
      height: 100vh;
    }

    canvas {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    }

    #app {
      text-align: center;
      padding-top: 120px;
    }

    h1 {
      font-size: 60px;
      text-shadow: 0 0 10px cyan;
    }

    p {
      margin-top: 15px;
      font-size: 18px;
      opacity: 0.9;
    }

    .clock {
      margin-top: 40px;
      font-size: 40px;
      letter-spacing: 5px;
      text-shadow: 0 0 10px lime;
    }

    .mouse-light {
      position: fixed;
      width: 150px;
      height: 150px;
      background: radial-gradient(circle, rgba(0,255,255,0.4), transparent);
      pointer-events: none;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
</head>
<body>

<canvas id="canvas"></canvas>
<div class="mouse-light" id="mouseLight"></div>

<div id="app">
  <h1>AloK The Virus</h1>
  <p>Community Moderator</p>
  <p>2+ Years Experience with Teneo Protocol & Warden Protocol</p>
  <p>Discord & Telegram Community Handling • Helping Members • Scammer Ban</p>

  <div class="clock" id="clock">00:00:00</div>
</div>

<script>
/* ===== CLOCK ===== */
function updateClock() {
  const now = new Date();
  let h = now.getHours().toString().padStart(2, '0');
  let m = now.getMinutes().toString().padStart(2, '0');
  let s = now.getSeconds().toString().padStart(2, '0');
  document.getElementById("clock").innerText = h + ":" + m + ":" + s;
}
setInterval(updateClock, 1000);
updateClock();

/* ===== MOUSE LIGHT FOLLOW ===== */
const light = document.getElementById("mouseLight");
document.addEventListener("mousemove", e => {
  light.style.left = e.clientX + "px";
  light.style.top = e.clientY + "px";
});

/* ===== NEON RAIN BACKGROUND ===== */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let rainDrops = [];

for (let i = 0; i < 200; i++) {
  rainDrops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: 2 + Math.random() * 5,
    length: 10 + Math.random() * 20
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "cyan";
  ctx.lineWidth = 2;

  rainDrops.forEach(drop => {
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
    ctx.stroke();

    drop.y += drop.speed;

    if (drop.y > canvas.height) {
      drop.y = -20;
      drop.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawRain);
}

drawRain();
</script>

</body>
</html>
