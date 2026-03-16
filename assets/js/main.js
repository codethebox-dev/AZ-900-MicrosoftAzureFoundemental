// Sidebar toggle
const toggle  = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');

if (toggle && sidebar) {
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}

// Auto-expand nav sub-items for active page
document.querySelectorAll('.nav-sub').forEach(sub => {
  const prev = sub.previousElementSibling;
  if (prev && prev.classList.contains('active')) {
    sub.classList.add('show');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Back to top
const backTop = document.createElement('button');
backTop.textContent = '↑ Top';
backTop.className = 'back-to-top';
backTop.style.cssText = `
  position:fixed;bottom:24px;right:24px;
  background:#0067b8;color:#fff;border:none;
  border-radius:4px;padding:8px 14px;font-size:13px;
  font-weight:600;cursor:pointer;opacity:0;
  transition:opacity .2s;z-index:50;
`;
document.body.appendChild(backTop);

window.addEventListener('scroll', () => {
  backTop.style.opacity = window.scrollY > 300 ? '1' : '0';
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
