// 花暖簾 — main.js

document.addEventListener('DOMContentLoaded', () => {

  // Loading
  const loading = document.getElementById('loading');
  setTimeout(() => loading.classList.add('hide'), 1800);
  document.body.style.overflow = 'hidden';
  setTimeout(() => { document.body.style.overflow = ''; }, 1800);

  // Header scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    hamburger.classList.toggle('active', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('active');
  }));

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      window.scrollTo({ top: t.offsetTop - 72, behavior: 'smooth' });
    });
  });

  // Fade-in
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

  // Form submit
  const form = document.querySelector('.reserve__form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'ご予約を承りました。確認のご連絡をお待ちください。';
      btn.disabled = true;
    });
  }
});
