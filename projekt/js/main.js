// Burger
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll Reveal
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Navbar Scroll + Logo Swap
const nav = document.querySelector(".nav");
const logo = document.querySelector(".brand-logo");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight - 100) {
    nav.classList.add("scrolled");
    logo.src = logo.dataset.logoDark;
  } else {
    nav.classList.remove("scrolled");
    logo.src = logo.dataset.logoLight;
  }
});
