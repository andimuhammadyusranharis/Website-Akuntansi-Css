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

// Untuk Swiper card guru
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    let currentIndex = 0;

    function updateSwiper() {
        const totalSlides = slides.length;
        const slideWidth = slides[0].clientWidth;
        swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSwiper();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSwiper();
        }
    });

    window.addEventListener('resize', updateSwiper);
    updateSwiper();
});
