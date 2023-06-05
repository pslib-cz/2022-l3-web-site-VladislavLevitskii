const nav__hamburger = document.querySelector(".nav__hamburger");
const hamburgermenu = document.querySelector(".hamburgermenu");
const hamburgermenu__line = document.querySelector(".hamburgermenu__line");
const hamburgermenu__line1 = document.querySelector(".hamburgermenu__line--1");
const hamburgermenu__line2 = document.querySelector(".hamburgermenu__line--2");
const hamburgermenu__line3 = document.querySelector(".hamburgermenu__line--3");
    
function toggleMenu() {
    if (nav__hamburger.classList.contains("showMenu")) {
    nav__hamburger.classList.remove("showMenu")
    hamburgermenu__line1.classList.remove("active1");
    hamburgermenu__line2.classList.remove("active2");
    hamburgermenu__line3.classList.remove("active3");
    }   else {
        nav__hamburger.classList.add("showMenu")
        hamburgermenu__line1.classList.add("active1");
        hamburgermenu__line2.classList.add("active2");
        hamburgermenu__line3.classList.add("active3");
        }
}

hamburgermenu.addEventListener("click", toggleMenu);