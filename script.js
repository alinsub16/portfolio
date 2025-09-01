(function () {
  const themeToggle = document.getElementById('theme-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('primary-menu');
  const yearEl = document.getElementById('year');

// Initialize year
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Theme: toggle only by button, no auto-detection
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light');
  if (themeToggle) themeToggle.setAttribute('aria-pressed', 'true');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');
    themeToggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}


if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');

    // Toggle icon between bars and times
    const icon = navToggle.querySelector('i');
    if (icon) {
      if (expanded) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      }
    }
  });

  navList.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.matches('a')) {
      navList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');

      // Reset icon back to bars when a link is clicked
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
  });
}


  // Smooth scroll behavior for anchor links
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target instanceof HTMLAnchorElement && target.getAttribute('href')?.startsWith('#')) {
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', `#${id}`);
      }
    }
  });

  // No contact form handler; form removed from the page
  
})();


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80
    },
    "size": {
      "value": 2
    },
    "move": {
      "speed": 2
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#4A4A4A",
      "opacity": 0.5,
      "width": 1
    }
  },
  "interactivity": {
  "detect_on": "canvas",   // 👈 must be here
  "events": {
    "onhover": { "enable": true, "mode": "grab" },  
    "onclick": { "enable": true, "mode": "push" }
  },
  "modes": {
    "grab": {
      "distance": 200,
      "line_linked": { "opacity": 1 }
    },
    "push": { "particles_nb": 4 }
  }

  }
});