// Load browser before Js runs
window.addEventListener('DOMContentLoaded', () => {
// Declaring variables
const hamburgerMenu = document.querySelector('#hamburger-menu');
const mobileNav = document.querySelector('#mobile-nav');

// Adding event listener and functionalities
hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('translate-y-[0]');
    hamburgerMenu.classList.toggle('bi-x-lg');
})


})