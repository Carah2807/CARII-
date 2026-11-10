/* =========================
   FOR CARAH — Interactions
   ========================= */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Floating hearts ----------
  const heartsContainer = document.getElementById('floatingHearts');
  const heartSymbols = ['♡', '♥', '❀', '✿'];

  function createHeart() {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (0.8 + Math.random() * 1.4) + 'rem';
    heart.style.animationDuration = (8 + Math.random() * 12) + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 20000);
  }

  // Create initial hearts and keep adding
  for (let i = 0; i < 15; i++) createHeart();
  setInterval(createHeart, 1200);

  // ---------- Envelope open ----------
  const openBtn = document.getElementById('openBtn');
  const envelope = document.getElementById('envelope');
  const welcome = document.getElementById('welcome');
  const mainContent = document.getElementById('mainContent');

  openBtn.addEventListener('click', () => {
    envelope.classList.add('open');
    openBtn.style.opacity = '0';
    openBtn.style.pointerEvents = 'none';

    setTimeout(() => {
      welcome.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      welcome.style.opacity = '0';
      welcome.style.transform = 'scale(0.95)';

      setTimeout(() => {
        welcome.classList.remove('active');
        welcome.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.style.animation = 'fadeInUp 0.9s ease';
        // Smooth scroll to first section
        document.getElementById('letter').scrollIntoView({ behavior: 'smooth' });
      }, 700);
    }, 600);
  });

  // Also allow clicking the envelope itself
  envelope.addEventListener('click', () => openBtn.click());

  // ---------- Side navigation ----------
  const navDots = document.querySelectorAll('.nav-dot');
  const sections = ['letter', 'little-things', 'dreams', 'apology', 'promises', 'future', 'proposal'];

  navDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const target = document.getElementById(dot.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Update active dot on scroll
  const observerOptions = {
    root: null,
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navDots.forEach(dot => {
          dot.classList.toggle('active', dot.dataset.target === id);
        });
      }
    });
  }, observerOptions);

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  // ---------- Proposal buttons ----------
  const yesBtn = document.getElementById('yesBtn');
  const maybeBtn = document.getElementById('maybeBtn');
  const proposalContent = document.getElementById('proposalContent');
  const yesCelebration = document.getElementById('yesCelebration');
  const maybeResponse = document.getElementById('maybeResponse');
  const backToProposal = document.getElementById('backToProposal');
  const confettiContainer = document.getElementById('confetti');

  yesBtn.addEventListener('click', () => {
    proposalContent.classList.add('hidden');
    yesCelebration.classList.remove('hidden');
    createConfetti();
    // Scroll celebration into view
    yesCelebration.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  maybeBtn.addEventListener('click', () => {
    proposalContent.classList.add('hidden');
    maybeResponse.classList.remove('hidden');
    maybeResponse.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  backToProposal.addEventListener('click', () => {
    maybeResponse.classList.add('hidden');
    proposalContent.classList.remove('hidden');
  });

  // ---------- Confetti ----------
  function createConfetti() {
    const colors = ['#E8A0BF', '#C75B83', '#F8C8DC', '#ff6b9d', '#ff8fab', '#ffffff'];
    const shapes = ['♡', '♥', '✦', '✿'];

    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.color = colors[Math.floor(Math.random() * colors.length)];
      piece.style.fontSize = (10 + Math.random() * 14) + 'px';
      piece.textContent = Math.random() > 0.5 ? shapes[Math.floor(Math.random() * shapes.length)] : '';
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      piece.style.animationDuration = (2.5 + Math.random() * 3) + 's';
      piece.style.animationDelay = Math.random() * 0.8 + 's';
      confettiContainer.appendChild(piece);

      setTimeout(() => piece.remove(), 6000);
    }
  }

  // ---------- Smooth reveal on scroll (optional enhancement) ----------
  const revealElements = document.querySelectorAll('.memory-card, .promise-card, .dream-item, .future-item');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
  });
});
