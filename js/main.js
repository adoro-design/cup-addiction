/* ============================================================
   main.js — 페이지 공통 인터랙션
   components.js가 'componentsReady' 이벤트를 발행한 후 실행됩니다.
   ============================================================ */

document.addEventListener('componentsReady', function () {

  /* ── Navbar: 스크롤 그림자 ── */
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = window.scrollY > 20
        ? '0 4px 20px rgba(0,0,0,.10)'
        : '0 2px 12px rgba(0,0,0,.06)';
    });
  }

  /* ── Navbar: 섹션 스크롤에 따라 active 링크 ── */
  const sections = document.querySelectorAll('section[id]');
  const anchorLinks = document.querySelectorAll('#mainNav .nav-link[href^="#"]');

  if (sections.length && anchorLinks.length) {
    function setActiveLink() {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
      });
      anchorLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });
    }
    window.addEventListener('scroll', setActiveLink);
  }

  /* ── Back to Top 버튼 ── */
  const backTop = document.getElementById('backTop');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('visible', window.scrollY > 400);
    });
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── fade-up: Intersection Observer 애니메이션 ── */
  const fadeEls = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
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

});
