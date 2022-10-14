// Load browser before Js runs
window.addEventListener('DOMContentLoaded', () => {
    // Declaring variables
    const hamburgerMenu = document.querySelector('#hamburger-menu');
    const mobileNav = document.querySelector('#mobile-nav');
    const date = document.querySelector('#date');

    // Getting the current year
    date.innerHTML = new Date().getFullYear();

    // Adding event listener and functionalities
    hamburgerMenu.addEventListener('click', () => {
        ['translate-y-[-100rem]', 'translate-y-[0]'].map(item => {
            mobileNav.classList.toggle(item);
        })
        hamburgerMenu.classList.toggle('bi-x-lg');
    });

})