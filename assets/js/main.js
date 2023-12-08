const mobileNav = document.querySelector(".mobile-nav");
const navHeader = document.querySelector(".header");

const toggleNavbar = () => {
  navHeader.classList.toggle("active");
  const barsIcon = document.querySelector(".fa-bars-staggered");
  const xmarkIcon = document.querySelector(".fa-xmark");

  if (navHeader.classList.contains("active")) {
    barsIcon.style.display = "none";
    xmarkIcon.style.display = "block";
  } else {
    barsIcon.style.display = "block";
    xmarkIcon.style.display = "none";
  }
};

const closeNavbar = () => {
  if (navHeader.classList.contains("active")) {
    toggleNavbar();
  }
};

mobileNav.addEventListener("click", toggleNavbar);

const navbarLinks = document.querySelectorAll(".navbar-link");
navbarLinks.forEach((link) => {
  link.addEventListener("click", closeNavbar);
});








