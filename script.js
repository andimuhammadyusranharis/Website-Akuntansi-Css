document.addEventListener('DOMContentLoaded', function() {
  var navbar = document.getElementById('navbar');
  var menuBtn = document.getElementById('menu-btn');
  var sidebar = document.getElementById('sidebar');
  var hamburgerIcon = document.getElementById('hamburger-icon');
  var closeIcon = document.getElementById('close-icon');

  menuBtn.addEventListener('click', function() {
      if (sidebar.classList.contains('-translate-x-full')) {
          sidebar.classList.remove('-translate-x-full');
          hamburgerIcon.classList.add('hidden');
          closeIcon.classList.remove('hidden');
      } else {
          sidebar.classList.add('-translate-x-full');
          hamburgerIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
      }
  });

  window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
          navbar.classList.remove('navbar-transparent');
          navbar.classList.add('navbar-colored');
      } else {
          navbar.classList.remove('navbar-colored');
          navbar.classList.add('navbar-transparent');
      }
  });
});
