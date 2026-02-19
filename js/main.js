const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".brand-logo");
const closeBtn = document.querySelector(".menu-close");


// =============================
// OPEN / CLOSE MENU
// =============================

burger.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});


// =============================
// CLOSE WHEN CLICKING OUTSIDE
// =============================

document.addEventListener("click", (e) => {
  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(e.target) &&
    !burger.contains(e.target)
  ) {
    navLinks.classList.remove("active");
  }
});


// =============================
// CLOSE ON LINK CLICK
// =============================

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// =============================
// NAV SCROLL + LOGO SWAP
// =============================

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight - 120) {
    nav.classList.add("scrolled");
    logo.src = logo.dataset.logoDark;
  } else {
    nav.classList.remove("scrolled");
    logo.src = logo.dataset.logoLight;
  }
});


// =============================
// SCROLL REVEAL
// =============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => observer.observe(section));

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const overlay = document.getElementById("envelopeOverlay");
const openBtn = document.querySelector(".open-btn");

openBtn.addEventListener("click", () => {
  overlay.classList.add("open");

  setTimeout(() => {
    overlay.classList.add("fade-out");
  }, 1600);

  setTimeout(() => {
    overlay.style.display = "none";
  }, 2400);
});
