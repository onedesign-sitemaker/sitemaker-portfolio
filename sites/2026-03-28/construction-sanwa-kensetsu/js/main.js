// ===========================
// 三和建設工業 — main.js
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  // Loading
  const loading = document.getElementById('loading');
  setTimeout(() => {
    loading.classList.add('hide');
    document.body.style.overflow = '';
  }, 1600);
  document.body.style.overflow = 'hidden';

  // Header scroll
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  });

  // Close nav on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 72;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    });
  });

  // Fade-in on scroll (Intersection Observer)
  const fadeEls = document.querySelectorAll('.fade-in');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  fadeEls.forEach(el => io.observe(el));

  // Contact form submit (demo)
  const form = document.querySelector('.contact__form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = '送信しました！担当者よりご連絡いたします。';
      btn.disabled = true;
      btn.style.background = '#2E7D32';
    });
  }

});
