/* ============================================================
   components.js — 공통 컴포넌트 (네비게이션 · 푸터 · BackTop)
   수정이 필요할 때 이 파일 하나만 편집하면 모든 페이지에 반영됩니다.
   ============================================================ */

(function () {

  /* ──────────────────────────────────────
     1. 네비게이션 HTML
  ─────────────────────────────────────── */
  const NAV_HTML = `
<nav id="mainNav" class="navbar navbar-expand-md fixed-top py-0">
  <div class="container-xl px-4">

    <!-- 로고 -->
    <a class="navbar-brand d-flex align-items-center gap-2 py-3" href="index.html">
      <div class="brand-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M7 20h10"/>
          <path d="M10 20c5.5-2.5.8-6.4 3-9"/>
          <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-2-3.7.7-.1 3.3-.2 4.5.3z"/>
          <path d="M14.1 6a7 7 0 0 1 1.7 4.8c-1.6.5-4 .6-5.4-.6-.3-2 1.5-3.5 3.7-4.2z"/>
        </svg>
      </div>
      <span class="brand-name">중독이음센터</span>
    </a>

    <!-- 햄버거 버튼 -->
    <button class="navbar-toggler border-0 p-2" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarMenu"
            aria-controls="navbarMenu" aria-expanded="false" aria-label="메뉴 열기">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
           fill="none" stroke="#3D3D3D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>

    <!-- 메뉴 -->
    <div class="collapse navbar-collapse" id="navbarMenu">
      <ul class="navbar-nav ms-auto align-items-md-center mb-3 mb-md-0">
        <li class="nav-item">
          <a class="nav-link" href="recovery-info.html" data-page="recovery-info">회복정보</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#community" data-page="community">커뮤니티</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#resources" data-page="resources">전문가상담</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="success-stories.html" data-page="success-stories">성공스토리</a>
        </li>
      </ul>
      <a href="index.html#resources" class="btn btn-primary-custom ms-md-3 px-4 py-2 rounded-pill">
        무료 시작하기
      </a>
    </div>

  </div>
</nav>`;

  /* ──────────────────────────────────────
     2. 푸터 HTML
  ─────────────────────────────────────── */
  const FOOTER_HTML = `
<footer id="footer">
  <div class="container-xl px-4">
    <div class="row g-4 g-lg-5 pb-5 border-bottom border-secondary border-opacity-25">

      <!-- 브랜드 컬럼 -->
      <div class="col-lg-4">
        <a href="index.html" class="d-flex align-items-center gap-2 text-decoration-none mb-3">
          <div class="brand-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                 stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 20h10"/>
              <path d="M10 20c5.5-2.5.8-6.4 3-9"/>
              <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-2-3.7.7-.1 3.3-.2 4.5.3z"/>
              <path d="M14.1 6a7 7 0 0 1 1.7 4.8c-1.6.5-4 .6-5.4-.6-.3-2 1.5-3.5 3.7-4.2z"/>
            </svg>
          </div>
          <span class="brand-name text-white">중독이음센터</span>
        </a>
        <p class="footer-desc">중독으로 어려움을 겪는 모든 분들의 회복을 함께합니다. 혼자가 아닙니다.</p>
        <div class="d-flex gap-3 mt-4">
          <a href="#" class="footer-social" aria-label="인스타그램">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          <a href="#" class="footer-social" aria-label="유튜브">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
              <path d="m10 15 5-3-5-3z"/>
            </svg>
          </a>
          <a href="#" class="footer-social" aria-label="카카오톡">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.671 1.884 4.987 4.667 6.268L5.5 20.5l4-2.5c.808.166 1.643.25 2.5.25 5.523 0 10-3.477 10-7.75S17.523 3 12 3z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- 서비스 링크 -->
      <div class="col-6 col-lg-2 offset-lg-1">
        <h6 class="footer-heading">서비스</h6>
        <ul class="footer-links">
          <li><a href="recovery-info.html">회복정보</a></li>
          <li><a href="index.html#community">커뮤니티</a></li>
          <li><a href="success-stories.html">성공스토리</a></li>
          <li><a href="index.html#resources">전문가상담</a></li>
        </ul>
      </div>

      <!-- 도움말 링크 -->
      <div class="col-6 col-lg-2">
        <h6 class="footer-heading">도움말</h6>
        <ul class="footer-links">
          <li><a href="#">이용방법</a></li>
          <li><a href="#">개인정보처리방침</a></li>
          <li><a href="#">이용약관</a></li>
          <li><a href="#">문의하기</a></li>
        </ul>
      </div>

      <!-- 위기상담 -->
      <div class="col-lg-3">
        <h6 class="footer-heading">위기상담</h6>
        <div class="crisis-box">
          <div class="crisis-label">24시간 위기상담전화</div>
          <div class="crisis-number">1577-0199</div>
          <div class="crisis-sub">정신건강 위기상담전화 (무료)</div>
        </div>
      </div>

    </div><!-- /row -->

    <div class="footer-bottom">
      <p class="mb-1">© 2026 중독이음센터. All rights reserved.</p>
      <p class="footer-disclaimer">본 서비스는 의료 서비스를 대체하지 않습니다. 전문적인 치료가 필요한 경우 의료기관을 방문하세요.</p>
    </div>
  </div>
</footer>`;

  /* ──────────────────────────────────────
     3. 맨 위로 버튼 HTML
  ─────────────────────────────────────── */
  const BACK_TOP_HTML = `
<button id="backTop" aria-label="맨 위로">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="18 15 12 9 6 15"/>
  </svg>
</button>`;

  /* ──────────────────────────────────────
     4. 컴포넌트 주입
  ─────────────────────────────────────── */
  function inject() {
    // 헤더
    const headerEl = document.getElementById('site-header');
    if (headerEl) headerEl.outerHTML = NAV_HTML;

    // 푸터
    const footerEl = document.getElementById('site-footer');
    if (footerEl) footerEl.outerHTML = FOOTER_HTML;

    // 맨위로 버튼
    document.body.insertAdjacentHTML('beforeend', BACK_TOP_HTML);
  }

  /* ──────────────────────────────────────
     5. 현재 페이지에 맞게 nav active 설정
  ─────────────────────────────────────── */
  function setActiveNav() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#mainNav .nav-link[data-page]').forEach(link => {
      const target = link.getAttribute('data-page');
      const isActive =
        (target === 'recovery-info'   && page === 'recovery-info.html') ||
        (target === 'success-stories' && (page === 'success-stories.html' || page === 'story-detail.html'));
      link.classList.toggle('active', isActive);
    });
  }

  /* ──────────────────────────────────────
     6. 모바일 메뉴: 링크 클릭 시 자동 닫기
  ─────────────────────────────────────── */
  function bindMobileMenu() {
    const collapse = document.getElementById('navbarMenu');
    if (!collapse) return;
    const bsCollapse = new bootstrap.Collapse(collapse, { toggle: false });
    collapse.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (collapse.classList.contains('show')) bsCollapse.hide();
      });
    });
  }

  /* ──────────────────────────────────────
     7. 초기화 실행
  ─────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    inject();
    setActiveNav();
    bindMobileMenu();

    // main.js 및 페이지 스크립트에 알림
    document.dispatchEvent(new CustomEvent('componentsReady'));
  });

})();
