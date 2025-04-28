let hamb = document.querySelector(".header__burger");
let navMenu = document.querySelector(".header__menu");

hamb.addEventListener("click", mobileMenu);


function mobileMenu() {
   hamb.classList.toggle("active");
   navMenu.classList.toggle("active");
}

// const navLink = document.querySelectorAll(".header__link");

// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamb.classList.remove("active");
//     navMenu.classList.remove("active");
// }





























