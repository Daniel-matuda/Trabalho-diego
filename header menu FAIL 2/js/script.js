let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let menuLinks = document.querySelectorAll('.navbar a');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 1090) {
            menu.classList.toggle('bx-x');
            navbar.classList.toggle('open');
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1090) {
        navbar.classList.remove('open');
        menu.classList.remove('bx-x');
    }
});
