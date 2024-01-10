const btnMenu = document.querySelector('.open-mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

btnMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle('is-open');
});

const closeBurgerMenu = document.querySelector('.mobile-icon-close-mobile');

closeBurgerMenu.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
});
