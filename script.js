// Neon Rain for canvas-club
const canvas = document.getElementById('canvas-club');
const ctx = canvas.getContext('2d', { alpha: true });

let W = canvas.width = innerWidth;
let H = canvas.height = innerHeight;

const SETTINGS = {
  count: Math.floor((W * H) / 50000), // density: increase for more drops
  baseSpeed: 2.2,
  wind: 0.2,
  hueMin: 170, // cyan-teal
  hueMax: 300, // purple-pink
  glow: 18,
  trailAlpha: 0.08 // lower = longer trails
};

window.addEventListener('resize', () => {
  W = canvas.width = innerWidth;
  H = canvas.height = innerHeight;
  init();
});

// small helper
function rand(min, max) { return Math.random() * (max - min) + min; }

// Raindrop class
class Drop {
  constructor() {
    this.reset(true);
  }
  reset(init=false) {
    this.x = rand(-W * 0.1, W * 1.1);
    this.y = init ? rand(-H, H) : rand(-100, -10);
    this.len = rand(12, 90);
    this.speed = rand(SETTINGS.baseSpeed * 0.6, SETTINGS.baseSpeed * 1.8);
    this.vx = SETTINGS.wind * rand(0.3, 1.2);
    this.hue = Math.floor(rand(SETTINGS.hueMin, SETTINGS.hueMax));
    this.s = rand(70, 100);
    this.l = rand(45, 65);
    this.alpha = rand(0.65, 1.0);
    this.width = rand(0.9, 2.6);
  }
  update() {
    this.x += this.vx;
    this.y += this.speed;
    // reset if out
    if (this.y - this.len > H + 50 || this.x > W + 50) this.reset();
  }
  draw() {
    // glow shadow
    ctx.save();
    ctx.lineWidth = this.width;
    ctx.lineCap = 'round';
    ctx.strokeStyle = `hsla(${this.hue}, ${this.s}%, ${this.l}%, ${this.alpha})`;
    ctx.shadowColor = `hsla(${this.hue}, ${this.s}%, ${this.l}%, ${Math.min(0.9, this.alpha)})`;
    ctx.shadowBlur = SETTINGS.glow;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - this.vx * 6, this.y - this.len);
    ctx.stroke();
    ctx.restore();

    // crisp bright core
    ctx.beginPath();
    ctx.strokeStyle = `rgba(255,255,255,${this.alpha * 0.12})`;
    ctx.lineWidth = Math.max(0.4, this.width * 0.4);
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - this.vx * 6, this.y - this.len * 0.9);
    ctx.stroke();
  }
}

let drops = [];
function init() {
  drops = [];
  const count = Math.max(30, SETTINGS.count);
  for (let i = 0; i < count; i++) drops.push(new Drop());
}
init();

// animation loop
function animate() {
  // fade background to create trails (rgba with low alpha)
  ctx.fillStyle = `rgba(2,6,23, ${SETTINGS.trailAlpha})`; // dark navy + small alpha
  ctx.fillRect(0, 0, W, H);

  // optional soft band of color (subtle)
  let g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, 'rgba(10,12,30,0.05)');
  g.addColorStop(0.5, 'rgba(20,8,40,0.03)');
  g.addColorStop(1, 'rgba(10,12,30,0.05)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  // draw drops
  for (let d of drops) {
    d.update();
    d.draw();
  }

  requestAnimationFrame(animate);
}
animate();

// Optional: allow click to create a small burst
canvas.addEventListener('click', (e) => {
  for (let i = 0; i < 8; i++) {
    let p = new Drop();
    p.x = e.clientX + rand(-40, 40);
    p.y = e.clientY + rand(-40, 40);
    p.speed *= rand(1.4, 2.4);
    p.len *= rand(0.6, 1.6);
    drops.push(p);
    // keep array size sane
    if (drops.length > SETTINGS.count * 1.8) drops.splice(0, 20);
  }
});
