// NeuraX Browser - Clean JavaScript

function toggleTheme() {
  const body = document.body;
  const theme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  const icon = document.querySelector('.theme-toggle svg path');
  if (theme === 'light') {
    icon.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
  } else {
    icon.setAttribute('d', 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z');
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}

function download(platform) {
  const urls = {
    windows: 'https://github.com/Sayeed-web/Neurax/releases/latest/download/NeuraX-Browser-Setup-1.0.0.exe',
    mac: 'https://github.com/Sayeed-web/Neurax/releases/latest/download/NeuraX-Browser-1.0.0.dmg',
    linux: 'https://github.com/Sayeed-web/Neurax/releases/latest/download/NeuraX-Browser-1.0.0.AppImage'
  };
  
  const link = document.createElement('a');
  link.href = urls[platform];
  link.download = '';
  link.click();
}

// Load theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', savedTheme);
if (savedTheme === 'light') {
  const icon = document.querySelector('.theme-toggle svg path');
  icon.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('mobileMenu').classList.remove('active');
    }
  });
});

// Detect OS
const ua = navigator.userAgent.toLowerCase();
let os = 'windows';
if (ua.includes('mac')) os = 'mac';
else if (ua.includes('linux')) os = 'linux';

document.querySelectorAll('.download-card').forEach(card => {
  const h3 = card.querySelector('h3');
  if (h3 && h3.textContent.toLowerCase().includes(os)) {
    card.style.borderColor = 'var(--primary)';
  }
});
