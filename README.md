<!-- save as index.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Alok The Virus — Portfolio</title>
  <style>
    :root{
      --bg:#0f1724; --card:#0b1220; --accent:#06b6d4; --muted:#94a3b8;
      --maxw:1000px; --gap:18px;
    }
    *{box-sizing:border-box;margin:0;padding:0;font-family:Inter, system-ui, Arial;}
    body{background:linear-gradient(180deg,#071024 0%, var(--bg) 100%); color:#e6eef6; padding:28px; display:flex; justify-content:center;}
    .wrap{width:100%;max-width:var(--maxw);}
    header{display:flex;justify-content:space-between;align-items:center;margin-bottom:28px;}
    .brand{font-weight:700;font-size:20px;color:var(--accent);}
    nav a{color:var(--muted);margin-left:14px;text-decoration:none;font-size:14px}
    .hero{display:grid;grid-template-columns:1fr 320px;gap:var(--gap);align-items:center;margin-bottom:28px}
    .card{background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent); padding:18px; border-radius:12px; box-shadow: 0 6px 20px rgba(2,6,23,0.6);}
    .intro h1{font-size:28px;margin-bottom:8px}
    .intro p{color:var(--muted);line-height:1.5}
    .contact a{display:inline-block;margin-top:12px;padding:8px 12px;border-radius:8px;border:1px solid rgba(255,255,255,0.06);text-decoration:none;color:var(--accent);font-weight:600}
    .projects{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--gap)}
    .proj{padding:14px;border-radius:10px;background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005));}
    .proj h3{margin-bottom:6px;font-size:16px}
    .proj p{color:var(--muted);font-size:14px}
    footer{color:var(--muted);text-align:center;margin-top:28px;font-size:13px}
    @media (max-width:880px){ .hero{grid-template-columns:1fr; } .brand{font-size:18px} }
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div class="brand">Alok The Virus</div>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section class="hero">
      <div class="card intro">
        <h1>Hi, I’m Tomar Naam — I build clean UI & create content.</h1>
        <p>Short sentence about what you do (e.g., "UI designer & frontend dev. I make interfaces that are fast and easy to use.").</p>
        <div class="contact">
          <a href="mailto:youremail@example.com">Email me</a>
        </div>
      </div>

      <aside class="card">
        <h3>Skills</h3>
        <p style="color:var(--muted)">HTML · CSS · JavaScript · React · Figma</p>
        <hr style="margin:12px 0;border:none;border-top:1px solid rgba(255,255,255,0.03)">
        <h3>Links</h3>
        <p style="color:var(--muted)">GitHub / Twitter / Dribbble (add links)</p>
      </aside>
    </section>

    <section id="projects">
      <h2 style="margin-bottom:12px">Projects</h2>
      <div class="projects">
        <article class="proj card">
          <h3>Project One</h3>
          <p>Short description — what you built, tech used, link to live or repo.</p>
        </article>
        <article class="proj card">
          <h3>Project Two</h3>
          <p>Short description — screenshot, outcome, your role.</p>
        </article>
        <!-- copy more projects -->
      </div>
    </section>

    <section id="about" style="margin-top:22px">
      <div class="card">
        <h2>About</h2>
        <p style="color:var(--muted);margin-top:10px">Write 2–4 sentences: education, strengths, what you enjoy building, and how you help others.</p>
      </div>
    </section>

    <section id="contact" style="margin-top:18px">
      <div class="card">
        <h2>Contact</h2>
        <p style="color:var(--muted);margin-top:10px">Email: youremail@example.com<br>Telegram: @yourhandle<br>Or add a contact form later.</p>
      </div>
    </section>

    <footer>
      © <span id="year"></span> Tomar Naam — Built by me.
    </footer>
  </div>

  <script>document.getElementById('year').textContent = new Date().getFullYear();</script>
</body>
</html># My-Portfolio-
