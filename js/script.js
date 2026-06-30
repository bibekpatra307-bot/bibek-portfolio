// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
// Close on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// Include navbar & footer (optional, using fetch)
document.addEventListener('DOMContentLoaded', () => {
  const loadComponent = (url, placeholderId) => {
    fetch(url)
      .then(res => res.text())
      .then(html => {
        document.getElementById(placeholderId).innerHTML = html;
        // Reattach event listeners after insertion
        if (placeholderId === 'navbar-placeholder') {
          document.getElementById('darkToggle')?.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
          });
          document.getElementById('menu-btn')?.addEventListener('click', () => {
            document.getElementById('mobile-menu')?.classList.toggle('hidden');
          });
          document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => document.getElementById('mobile-menu')?.classList.add('hidden'));
          });
        }
      });
  };

  if (document.getElementById('navbar-placeholder')) {
    loadComponent('/components/navbar.html', 'navbar-placeholder');
  }
  if (document.getElementById('footer-placeholder')) {
    loadComponent('/components/footer.html', 'footer-placeholder');
  }
});
