// ====================================================
// IBIRAL ELEC – Main JavaScript
// ====================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Header scroll effect ──
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Mobile burger menu ──
  const burger = document.querySelector('.burger');
  const nav    = document.querySelector('.main-nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on nav link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Active nav link on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.main-nav a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: .4 });
  sections.forEach(s => observerNav.observe(s));

  // ── Scroll-triggered fade-in animations ──
  const animElements = document.querySelectorAll(
    '.service-card, .contact-item, .stat-item, .check-list li'
  );
  const observerAnim = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${i * 0.07}s`;
        entry.target.classList.add('animate-in');
        observerAnim.unobserve(entry.target);
      }
    });
  }, { threshold: .15, rootMargin: '0px 0px -40px 0px' });

  animElements.forEach(el => {
    el.style.opacity = '0';
    observerAnim.observe(el);
  });

  // ── Contact form – client-side validation before FormSubmit POST ──
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const required = form.querySelectorAll('[required]');
      let valid = true;

      required.forEach(field => {
        field.classList.remove('error');
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
      });

      if (!valid) {
        e.preventDefault();
        showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Envoi en cours…';
    });
  }

  // ── Notification helper ──
  function showNotification(message, type = 'success') {
    const existing = document.querySelector('.notif-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `notif-toast notif-${type}`;
    toast.textContent = message;
    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%) translateY(20px)',
      background: type === 'success' ? '#1A2744' : '#c0392b',
      color: '#fff',
      padding: '14px 28px',
      borderRadius: '8px',
      boxShadow: '0 8px 32px rgba(0,0,0,.25)',
      fontFamily: "'Open Sans', sans-serif",
      fontSize: '.95rem',
      zIndex: '9999',
      opacity: '0',
      transition: 'opacity .3s ease, transform .3s ease',
      borderLeft: `4px solid ${type === 'success' ? '#F5A623' : '#e74c3c'}`,
      maxWidth: '90vw',
      textAlign: 'center'
    });
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(() => toast.remove(), 350);
    }, 4000);
  }

  // ── Add error style to CSS dynamically ──
  const style = document.createElement('style');
  style.textContent = `
    .form-group input.error,
    .form-group textarea.error {
      border-color: #e74c3c !important;
      box-shadow: 0 0 0 3px rgba(231,76,60,.15) !important;
    }
    .main-nav a.active {
      color: #F5A623 !important;
      background: rgba(245,166,35,.1);
    }
  `;
  document.head.appendChild(style);

});
