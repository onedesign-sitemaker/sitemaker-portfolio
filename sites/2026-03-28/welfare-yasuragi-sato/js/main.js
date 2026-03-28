// やすらぎの里 — main.js
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

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.innerHTML = '<p style="text-align:center;padding:2rem;font-size:1.1rem;color:var(--color-main);">お問い合わせを受け付けました。<br>担当者より2営業日以内にご連絡いたします。</p>';
    });
  }
});
