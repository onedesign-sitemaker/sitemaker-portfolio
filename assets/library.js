/**
 * SITEMAKER - Living Styleguide
 * コンポーネント表示・インタラクション用
 */

document.addEventListener('DOMContentLoaded', function () {
  // サイドバーナビのアクティブ状態
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.sidebar-nav a');

  function updateActiveNav() {
    const scrollTop = window.scrollY;
    let current = '';
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollTop >= top - 100) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();
});
