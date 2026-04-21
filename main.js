/* ============================================================
   MAIN.JS — shared across all pages
   ============================================================ */

// ── Reveal on scroll ────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Active nav link ──────────────────────────────────────────
(function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ── Hamburger menu ───────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    })
  );
}

// ── Back to top ──────────────────────────────────────────────
const btt = document.getElementById('back-to-top');
if (btt) {
  window.addEventListener('scroll', () => btt.classList.toggle('visible', window.scrollY > 420));
  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Typewriter (index only) ──────────────────────────────────
const twEl = document.getElementById('typewriter');
if (twEl) {
  const fullText = twEl.dataset.text || "Hi, I'm Katerina Bischel";
  twEl.textContent = '';
  let i = 0;
  setTimeout(() => {
    const iv = setInterval(() => {
      twEl.textContent += fullText[i];
      i++;
      if (i >= fullText.length) clearInterval(iv);
    }, 55);
  }, 400);
}

// ── Particle canvas (index only) ────────────────────────────
const canvas = document.getElementById('particle-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(true); }

    reset(initial = false) {
      this.x       = Math.random() * canvas.width;
      this.y       = initial ? Math.random() * canvas.height : canvas.height + 5;
      this.size    = Math.random() * 2.5 + 0.5;
      this.speedX  = (Math.random() - 0.5) * 0.45;
      this.speedY  = -(Math.random() * 0.55 + 0.15);
      this.alpha   = Math.random() * 0.45 + 0.08;
      this.life    = 0;
      this.maxLife = Math.random() * 260 + 140;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life++;
      if (this.life > this.maxLife) this.reset();
    }

    draw() {
      const fade = 1 - this.life / this.maxLife;
      ctx.save();
      ctx.globalAlpha = this.alpha * fade;
      ctx.fillStyle = '#00d4ff';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#00d4ff';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  const particles = Array.from({ length: 90 }, () => new Particle());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}
