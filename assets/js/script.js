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

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    // Use latitude and longitude to determine the user's location (e.g., using a geocoding service).
    
    // Check if the user is in France.
    if (userIsInFrance(latitude, longitude)) {
      // Change the language to French.
      changeLanguageToFrench();
    }
  });
}


function changeLanguageToFrench() {
  // Set a language preference variable (e.g., in localStorage).
  localStorage.setItem("language", "fr");

  // Update the content of your website to display in French.
  // You can use JavaScript to update text content dynamically, or you can load a different HTML/CSS file for the French version.
  
  // Example: change text content dynamically
  document.getElementById("welcome-message").innerText = "Bienvenue sur notre site";
}


// Check if the user's language preference is saved and load accordingly.
var userLanguage = localStorage.getItem("language");
if (userLanguage === "fr") {
  changeLanguageToFrench();
}
