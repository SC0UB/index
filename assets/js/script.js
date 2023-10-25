'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Determine the user's language preference using browser settings.
var userLanguage = navigator.language || navigator.userLanguage;

// Define your content in both English and French.
var content = {
    en: {
        welcomeMessage: "Welcome to Our Website",
        description: "This is a sample website."
    },
    fr: {
        welcomeMessage: "Bienvenue sur notre site",
        description: "Ceci est un site web de démonstration."
    }
};

// Function to update the content based on the user's language.
function updateContent(language) {
    document.getElementById("welcome-message").textContent = content[language].welcomeMessage;
    document.getElementById("description").textContent = content[language].description;
}

// Check the user's language preference and update the content.
if (userLanguage.startsWith("fr")) {
    updateContent("fr");
} else {
    updateContent("en");
}

}
