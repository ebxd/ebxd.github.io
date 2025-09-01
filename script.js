// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));

    // build a lightweight mobile menu on small screens
    let mm = document.querySelector('.mobile-menu');
    if (!mm) {
      mm = document.createElement('div');
      mm.className = 'mobile-menu';
      mm.innerHTML = navLinks.outerHTML; // clone links
      document.querySelector('.site-header .container').after(mm);
    }
    mm.classList.toggle('hidden');
  });
}

// Optional smooth-scroll for same-page anchors
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = document.querySelector(a.getAttribute('href'));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth', block:'start'});
  }
});

