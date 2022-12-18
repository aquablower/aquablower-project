var logo = document.querySelector('.nav.menu-logo');
var menu = document.querySelector('.mobile.nav .nav.menu');
var links = menu.querySelectorAll('.menu-link');
var quitLogo = menu.querySelector('.nav .quit-logo');

var docE = document.documentElement

logo.addEventListener('click', () => {
    menu.style.display = "flex";
    docE.style.overflowY = "hidden";
});

quitLogo.addEventListener('click', () => {
    menu.style.display = "none";
    docE.style.overflowY = "scroll";
});

links.forEach(link => link.addEventListener('click', () => {
    menu.style.display = "none";
    docE.style.overflowY = "scroll";
}));