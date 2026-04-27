// Shared navigation and footer injection
(function () {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

  function isActive(page) {
    if (page === '/' && (currentPath === '/' || currentPath === '/index.html')) return 'active';
    if (page === '/blog' && currentPath.startsWith('/blog')) return 'active';
    if (page !== '/' && page !== '/blog' && currentPath.endsWith(page)) return 'active';
    return '';
  }

  const navHTML = `
<nav id="navbar">
  <div class="nav-inner">
    <a href="/" class="nav-logo" aria-label="Fizio Cvitković - Početna">
      <div class="nav-logo-mark">
        <img src="/assets/logo.jpg" alt="">
      </div>
      <div class="nav-logo-text">
        <strong>Fizio Cvitković</strong>
        <span>Fizioterapijska ordinacija</span>
      </div>
    </a>

    <ul class="nav-links">
      <li><a href="/" class="${isActive('/')}">Početna</a></li>
      <li><a href="/o-nama.html" class="${isActive('/o-nama.html')}">O nama</a></li>
      <li><a href="/usluge.html" class="${isActive('/usluge.html')}">Usluge</a></li>
      <li><a href="/blog" class="${isActive('/blog')}">Blog</a></li>
      <li><a href="/kontakt.html" class="${isActive('/kontakt.html')}">Kontakt</a></li>
    </ul>

    <div class="nav-right">
      <a href="tel:0959045385" class="nav-phone">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.92 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.84 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        095 904 5385
      </a>
      <a href="/kontakt.html" class="btn btn-primary btn-sm">Zakaži termin</a>
    </div>

    <button class="nav-toggle" id="navToggle" aria-label="Otvori izbornik">
      <span></span><span></span><span></span>
    </button>
  </div>

  <div class="nav-mobile" id="navMobile">
    <a href="/" class="${isActive('/')}">Početna</a>
    <a href="/o-nama.html" class="${isActive('/o-nama.html')}">O nama</a>
    <a href="/usluge.html" class="${isActive('/usluge.html')}">Usluge</a>
    <a href="/blog" class="${isActive('/blog')}">Blog</a>
    <a href="/kontakt.html" class="${isActive('/kontakt.html')}">Kontakt</a>
    <a href="tel:0959045385" class="btn btn-outline" style="margin-top:8px; justify-content:center; display:flex; gap:8px;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.92 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.84 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      095 904 5385
    </a>
    <a href="/kontakt.html" class="btn btn-primary">Zakaži termin</a>
  </div>
</nav>`;

  const footerHTML = `
<footer id="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <div class="footer-logo-mark">
            <img src="/assets/logo.jpg" alt="">
          </div>
          <div class="footer-logo-text">
            <strong>Fizio Cvitković</strong>
            <span>Fizioterapijska ordinacija</span>
          </div>
        </div>
        <p style="font-size:0.875rem; line-height:1.75; margin-bottom:20px; max-width:280px;">
          Stručna fizioterapija i rehabilitacija u Splitu. Posvećeni vašem brzom i sigurnom oporavku od 2017. godine.
        </p>
      </div>

      <div class="footer-col">
        <h4>Navigacija</h4>
        <ul>
          <li><a href="/">Početna</a></li>
          <li><a href="/o-nama.html">O nama</a></li>
          <li><a href="/usluge.html">Usluge</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/kontakt.html">Kontakt</a></li>
          <li><a href="/kontakt.html">Zakaži termin</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Usluge</h4>
        <ul>
          <li><a href="/usluge.html">Manualna terapija</a></li>
          <li><a href="/usluge.html">Tecar terapija</a></li>
          <li><a href="/usluge.html">Sportske ozljede</a></li>
          <li><a href="/usluge.html">Postop. rehabilitacija</a></li>
          <li><a href="/usluge.html">DNS metoda</a></li>
          <li><a href="/usluge.html">Kinesio Taping</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Kontakt</h4>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Dubrovačka ul. 59<br>21000 Split</span>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.92 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.84 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <a href="tel:0959045385">095 904 5385</a>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:toncicvitkovic@gmail.com">toncicvitkovic@gmail.com</a>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>Pon–Čet: 8:30–20:00<br>Pet–Ned: Zatvoreno</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>&copy; ${new Date().getFullYear()} Fizio Cvitković. Sva prava pridržana.</span>
      <span>Dubrovačka ul. 59, 21000 Split, Hrvatska</span>
    </div>
  </div>
</footer>`;

  // Inject nav before first element
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Mobile toggle
  const toggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('navMobile');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Navbar scroll shadow
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }
})();
