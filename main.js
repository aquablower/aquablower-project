var logo = document.querySelector('.nav.menu-logo');
var mobileNav = document.querySelector('.mobile.nav');
var desktopNav = document.querySelector('.desktop.nav');
var menu = mobileNav.querySelector('.nav.menu');
var links = menu.querySelectorAll('.menu-link');
var quitLogo = menu.querySelector('.nav .quit-logo');

var docE = document.documentElement;
logo.addEventListener('click', () => showMenu());

quitLogo.addEventListener('click', () => removeMenu());

links.forEach(link => link.addEventListener('click', () => removeMenu()));

function removeMenu() {
    menu.style.display = "none";
    docE.style.overflowY = "scroll";
    mobileNav.style.height = "80px";
}

function showMenu() {
    menu.style.display = "flex";
    docE.style.overflowY = "hidden";
    mobileNav.style.height = "100vh";
}

window.onscroll = function(e) { 
    var scrollY = window.pageYOffset || docE.scrollTop;

    if (scrollY <= this.lastScroll) {
        mobileNav.style.visibility = 'visible';
        desktopNav.style.visibility = 'visible';
    } else {
        mobileNav.style.visibility = 'hidden';
        desktopNav.style.visibility = 'hidden';
    }

    this.lastScroll = scrollY ;
}