<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AloK The Virus — Community Moderator</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      margin: 0;
      background: #020617;
      color: white;
      font-family: Arial, sans-serif;
      overflow-x: hidden;
    }

    canvas {
      position: fixed;
      inset: 0;
      z-index: -1;
    }

    /* ✅ Glow Text App */
    #app {
      overflow: hidden;
      touch-action: pan-up;
      color: #ffffff;
      font-family: 'Montserrat', sans-serif;
      text-align: center;
      text-shadow: 
        0 0 5px #ffffff, 
        0 0 20px #000000, 
        0 0 30px #000000;
    }

    #app h1 {
      --fontSize: 60px;
      --lineHeight: 80px;
      width: auto;
      height: calc(2 * var(--lineHeight));
      line-height: var(--lineHeight);
      margin: calc(40vh - var(--lineHeight)) auto 0;
      font-size: var(--fontSize);
      text-transform: uppercase;
      transition: transform 0.1s linear;
      pointer-events: none;
      color: #22d3ee;
    }

    .content {
      padding: 40px;
      max-width: 900px;
      margin: auto;
      text-align: center;
    }

    h2 {
      margin-top: 40px;
      color: #38bdf8;
    }

    p {
      color: #cbd5f5;
      line-height: 1.6;
    }

    .card {
      background: rgba(255,255,255,0.05);
      padding: 20px;
      border-radius: 12px;
      margin-top: 16px;
    }

    footer {
      text-align: center;
      margin-top: 60px;
      color: #94a3b8;
      font-size: 14px;
    }
  </style>
</head>

<body>

  <!-- ✅ Neon Rain Canvas -->
  <canvas id="canvas"></canvas>

  <!-- ✅ Mouse Follow Glow Name -->
  <div id="app">
    <h1 id="glowText">ALOK THE VIRUS</h1>
  </div>

  <!-- ✅ Portfolio Content -->
  <div class="content">

    <p>Community Moderator | Community Manager</p>

    <div class="card">
      <p>
        I am a dedicated community moderator with over 2 years of experience handling and managing online communities.
        I specialize in Discord and Telegram moderation, user support, and scammer detection & banning.
      </p>
    </div>

    <h2>Work Experience</h2>

    <div class="card">
      <h3>Teneo Protocol</h3>
      <p>
        Worked as a community moderator handling Discord and Telegram,
        helping users daily and protecting the community from scammers.
      </p>
    </div>

    <div class="card">
      <h3>Warden Protocol</h3>
      <p>
        Managed community chats, assisted members, resolved issues,
        and maintained a scam-free environment.
      </p>
    </div>

    <h2>What I Do</h2>

    <div class="card">
      ✅ Discord Community Handling <br>
      ✅ Telegram Group Management <br>
      ✅ Helping Users & Solving Problems <br>
      ✅ Scammer Detection & Ban <br>
      ✅ Community Rules Enforcement
    </div>

    <h2>Skills</h2>

    <div class="card">
      Community Management, Moderation, Communication,
      Conflict Handling, Crypto Community Safety
    </div>

    <h2>Contact</h2>

    <div class="card">
      GitHub: abrahampolok <br>
      (You can add Telegram, Twitter, Email later)
    </div>

    <footer>
      © 2025 AloK The Virus — Community Moderator Portfolio
    </footer>

  </div>

  <!-- ✅ Neon Rain + Mouse Follow Script -->
  <script>
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    let drops = [];

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    function Drop() {
      this.x = random(0, canvas.width);
      this.y = random(-canvas.height, canvas.height);
      this.len = random(10, 80);
      this.speed = random(2, 6);
      this.color = `hsl(${random(160, 300)}, 100%, 60%)`;
    }

    for (let i = 0; i < 150; i++) drops.push(new Drop());

    function animateRain() {
      ctx.fillStyle = "rgba(2,6,23,0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let d of drops) {
        ctx.strokeStyle = d.color;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.len);
        ctx.stroke();

        d.y += d.speed;
        if (d.y > canvas.height) {
          d.y = random(-100, 0);
          d.x = random(0, canvas.width);
        }
      }

      requestAnimationFrame(animateRain);
    }

    animateRain();

    window.addEventListener("resize", () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    });

    // ✅ Mouse Follow Glow Text
    const glowText = document.getElementById("glowText");

    document.addEventListener("mousemove", (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 25;
      const y = (window.innerHeight / 2 - e.clientY) / 25;
      glowText.style.transform = `translate(${x}px, ${y}px)`;
    });
  </script>

</body>
</html>
