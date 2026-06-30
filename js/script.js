document.addEventListener('DOMContentLoaded', function() {
  // Load navbar
  fetch('/components/navbar.html')
    .then(res => res.text())
    .then(html => {
      const placeholder = document.getElementById('navbar-placeholder');
      if (placeholder) {
        placeholder.innerHTML = html;
        // Dark mode toggle
        const darkToggle = document.getElementById('darkToggle');
        if (darkToggle) {
          darkToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
          });
        }
        // Mobile menu
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (menuBtn && mobileMenu) {
          menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
          document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
          });
        }
      }
    });

  // Load footer
  fetch('/components/footer.html')
    .then(res => res.text())
    .then(html => {
      const placeholder = document.getElementById('footer-placeholder');
      if (placeholder) placeholder.innerHTML = html;
    });
});
