// Untuk sidebar ketika tampilan responsive
document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');
    var menuBtn = document.getElementById('menu-btn');
    var sidebar = document.getElementById('sidebar');
    var hamburgerIcon = document.getElementById('hamburger-icon');
    var closeIcon = document.getElementById('close-icon');

    menuBtn.addEventListener('click', function() {
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            sidebar.classList.add('active');
            hamburgerIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }
    });

// Untuk mengubah header ketika di scroll
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

// Untuk Slider Jurusan Section Footer

// Untuk Kompetensi Keahlian
