// Nreurax Browser Website - JavaScript

// Theme Toggle
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Update icon
  const icon = document.querySelector('.theme-toggle svg');
  if (newTheme === 'light') {
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>';
  } else {
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>';
  }
}

// Load saved theme
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  if (savedTheme === 'light') {
    const icon = document.querySelector('.theme-toggle svg');
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>';
  }
});

// Smooth scroll to download section
function scrollToDownload() {
  document.getElementById('download').scrollIntoView({ behavior: 'smooth' });
}

// Download handler
function download(platform) {
  const downloads = {
    windows: {
      url: 'https://github.com/razmenda/nreurax-browser/releases/latest/download/nreurax-setup-win.exe',
      filename: 'nreurax-setup-win.exe'
    },
    mac: {
      url: 'https://github.com/razmenda/nreurax-browser/releases/latest/download/nreurax-mac.dmg',
      filename: 'nreurax-mac.dmg'
    },
    linux: {
      url: 'https://github.com/razmenda/nreurax-browser/releases/latest/download/nreurax-linux.AppImage',
      filename: 'nreurax-linux.AppImage'
    }
  };

  const downloadInfo = downloads[platform];
  
  // Show download notification
  showNotification(`Downloading Nreurax for ${platform.charAt(0).toUpperCase() + platform.slice(1)}...`);
  
  // Create temporary link and trigger download
  const link = document.createElement('a');
  link.href = downloadInfo.url;
  link.download = downloadInfo.filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Track download (analytics placeholder)
  console.log(`Download initiated: ${platform}`);
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification glass';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: rgba(0, 217, 255, 0.9);
    color: white;
    border-radius: 0.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.feature-card, .download-card, .stat-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
  });
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('lv-hidden');
}

// Parallax effect for hero
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero-content');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    hero.style.opacity = 1 - (scrolled / 500);
  }
});

// Detect OS and highlight appropriate download
function detectOS() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  let os = 'windows';
  
  if (userAgent.includes('mac')) os = 'mac';
  else if (userAgent.includes('linux')) os = 'linux';
  
  // Highlight the detected OS download card
  const cards = document.querySelectorAll('.download-card');
  cards.forEach(card => {
    const platform = card.querySelector('h3').textContent.toLowerCase();
    if (platform === os) {
      card.style.border = '2px solid #00d9ff';
      card.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.5)';
    }
  });
}

// Run on page load
window.addEventListener('load', detectOS);

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiSequence.join(',')) {
    showNotification('🎉 AI Agent Mode Activated! You found the secret!');
    document.body.style.animation = 'rainbow 3s linear infinite';
  }
});

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
  @keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
`;
document.head.appendChild(rainbowStyle);
