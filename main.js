const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links li a');
const toggleButton = document.getElementById('darkModeToggle');


// Toggle the menu when the menu toggle button is clicked
menuToggle.addEventListener('click', () => {
  document.body.classList.toggle('menu-active');
});

// Close the menu when a link is clicked
navItems.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-active');
  });
});
// script.js

// Check for saved user preference in localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Save user preference to localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
  }
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-visible');
    } else {
      entry.target.classList.remove('scroll-visible');
    }
  });
});

document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));
    document.addEventListener('DOMContentLoaded', () => {
      const sections = document.querySelectorAll('section');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.2 });

      sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
      });
    });
