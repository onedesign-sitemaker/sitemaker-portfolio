// Stackbase — main.js
document.addEventListener('DOMContentLoaded', () => {
  const loading = document.getElementById('loading');
  setTimeout(() => loading.classList.add('hide'), 1400);
  document.body.style.overflow = 'hidden';
  setTimeout(() => { document.body.style.overflow = ''; }, 1400);

  const header = document.getElementById('header');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 60), { passive: true });

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  hamburger.addEventListener('click', () => { const o = nav.classList.toggle('open'); hamburger.classList.toggle('active', o); });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); hamburger.classList.remove('active'); }));

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => { const t = document.querySelector(a.getAttribute('href')); if (!t) return; e.preventDefault(); window.scrollTo({ top: t.offsetTop - 72, behavior: 'smooth' }); });
  });

  const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }); }, { threshold: 0.15 });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

  const form = document.querySelector('.contact__form');
  if (form) { form.addEventListener('submit', e => { e.preventDefault(); const btn = form.querySelector('button[type="submit"]'); btn.textContent = 'Sent! We will contact you shortly.'; btn.disabled = true; }); }
});
