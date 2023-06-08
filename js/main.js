let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onclick = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}