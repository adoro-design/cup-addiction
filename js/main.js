/* ========================================
   다시봄 - main.js
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Navbar: scroll shadow ── */
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.style.boxShadow = '0 4px 20px rgba(0,0,0,.10)';
    } else {
      nav.style.boxShadow = '0 2px 12px rgba(0,0,0,.06)';
    }
  });

  /* ── Navbar: active link highlight on scroll ── */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('#mainNav .nav-link[href^="#"]');

  function setActiveLink() {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 80;
      if (window.scrollY >= top) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  }
  window.addEventListener('scroll', setActiveLink);

  /* ── Mobile menu: close on link click ── */
  const navbarCollapse = document.getElementById('navbarMenu');
  const bsCollapse = navbarCollapse
    ? new bootstrap.Collapse(navbarCollapse, { toggle: false })
    : null;

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (bsCollapse && navbarCollapse.classList.contains('show')) {
        bsCollapse.hide();
      }
    });
  });

  /* ── Back to top button ── */
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 400);
  });
  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Intersection Observer: fade-up animations ── */
  const fadeEls = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(el => observer.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  /* ── Story card hover effect ── */
  document.querySelectorAll('.story-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

});
