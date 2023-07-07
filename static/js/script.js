let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-bar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})