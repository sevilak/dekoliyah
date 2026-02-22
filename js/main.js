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

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {

  if (!form.checkValidity()) {
    e.preventDefault();
    alert("Bitte fülle alle Pflichtfelder korrekt aus.");
  }

});



document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("#services .service-card");

  cards.forEach(card => {
    const footer = card.querySelector(".service-footer");
    const details = card.querySelector(".service-details");

    footer.addEventListener("click", () => {
      const isOpen = card.classList.contains("active");

      // alle schließen
      cards.forEach(c => {
        c.classList.remove("active");
        const d = c.querySelector(".service-details");
        d.style.maxHeight = null;
        c.querySelector(".service-footer").setAttribute("aria-expanded", "false");
        d.setAttribute("aria-hidden", "true");
      });

      // wenn vorher geschlossen → öffnen
      if (!isOpen) {
        card.classList.add("active");
        details.style.maxHeight = details.scrollHeight + "px";
        footer.setAttribute("aria-expanded", "true");
        details.setAttribute("aria-hidden", "false");
      }
    });
  });
});

// =============================
// WEITERLESEN-FUNKTION NUR FÜR TESTIMONIALS
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const quotes = document.querySelectorAll("#referenzen .quote.truncate");
  quotes.forEach((el) => {
    // Falls Text länger als sichtbarer Bereich ist
    if (el.scrollHeight > el.clientHeight + 10) {
      const btn = document.createElement("button");
      btn.className = "read-more";
      btn.textContent = "Weiterlesen";
      el.after(btn);

      btn.addEventListener("click", () => {
        const expanded = el.classList.toggle("expanded");
        btn.textContent = expanded ? "Weniger anzeigen" : "Weiterlesen";
      });
    }
  });
});

// ==============================
// FORMULAR-FEEDBACK
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      alert("Bitte fülle alle erforderlichen Felder korrekt aus.");
      return;
    }

    // Erfolgsmeldung erzeugen
    const success = document.createElement("div");
    success.className = "form-success";
    success.innerHTML = "Vielen Dank 🤍 – ich melde mich schnellstmöglich bei euch!";
    form.after(success);

    // Formular zurücksetzen
    form.reset();

    // Meldung nach ein paar Sekunden wieder ausblenden
    setTimeout(() => success.remove(), 6000);
  });
});

