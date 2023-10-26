'use strict';



// Check the user's language preference and update the content.
if (userLanguage.startsWith("fr")) {
    updateContent("fr");
} else {
    updateContent("en");
}
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
        contactus: "Contact Us",
        startnow: "Start Now !",
      title: "MediaTAG Copywriting Agency",
      mission: "Scaling your business is our mission.",
      herotext: " MediaTAG is a copywriting agency that helps all kinds of businesses to boost their revenue and advertising ROI.",
      howtomakemoney: "How do you want to make <strong>money </strong> online without <strong>COMMUNICATION</strong>, you need to transmit a message, and transmit it in a way to make people actually <strong>buy</strong> from you, and that's a <strong>skill</strong> that we have.",
      schedule: "Schedule a FREE call",
      offer: "What we offer",
      whatisit: "But what is it, and how can it help you ?",
      text1: " We do one thing - we just do it with a monastic focus and better than anyone else. Copywiritng is the art of writng copy that makes a lead become a customer, in short, make people take action. If you want to see what our copywriting looks like, well this website is one example",
      text2: "If you want an agency where with two clicks, you can get a clear breakdown of how much was spent, how much was made & what your net profit was - we’re for you. ",
      focus: "MASTERY DEMANDS FOCUS SO....",
      whichmeans: "We don't offer any other services except for copywriting, which means...",
      salesfunnels: "✅ SALES FUNNELS",
      adcopy: "✅ AD COPY",
      salespages: "✅ SALES PAGES",
      videoscripts: "✅ VIDEO SCRIPTS",
      content: "❌ ​CONTENT CREATION",
      smma: "❌​SOCIAL MEDIA MANAGEMENT",
      inst: "❌​INSTAGRAM GROWTH",
      marketing: "❌ ​SOCIAL MEDIA MARKETING",
      next: "So What is Next?",
      start: "Get Started",
     contact: "Contact Us",
      contact2: "Feel free to contact us if you have any question, our team will be notified and you'll get a response by 1-2 business days.",
    },
    fr: {
        contactus: "Contactez Nous",
        startnow: "Commencer Maintenant !",
      title: "MediaTAG: Agence de Copywriting ",
      mission: "Vous faire gagner plus d'argent est notre mission.",
      herotext: " MediaTAG est une agence de copywriting qui peut VOUS aider à augmenter votre chiffre d'affaire et votre RSI en marketing.",
      howtomakemoney: "Comment voulez vous faire de <strong>l'argent</strong> en ligne sans une bonne <strong>COMMUNICATION</strong>, vous devez transmettre un message, une bonne image de vous, et faire cela de manière à faire <strong>acheter</strong>, et c'est un <strong>savoir faire</strong> que nous avons.",
      schedule: "APPEL GRATUIT",
      offer: "Ce qu'on offre",
      whatisit: "Mais qu'est ce que c'est, et comment ca peut vous aider ?",
      text1: "Nous faisons UNE chose - et on le fait avec une concentration monastique, mieux que n'importe qui. Le copywriting est l'art d'écrire des textes qui vous font gagner plus d'argent , en d'autres termes, inciter les clients à agir. Si vous ovulez savoir à quoi ça ressemble, ce site web est un bon exemple.",
      text2: "",
      focus: "LA MAÎTRISE EXIGE UNE CONCENTRATION DONC....",
      whichmeans: "Nous n'offrons aucun autre service que le copywriting, ce qui veut dire...",
      salesfunnels: "✅ TUNNELS DE VENTE",
      adcopy: "✅ PUBLICITE",
      salespages: "✅ PAGES DE VENTE",
      videoscripts: "✅ SCRIPTS DE VIDEOS",
      content: "❌ ​CREATION DE CONTENU",
      smma: "❌​GESTION DES RESEAUX SOCIAUX",
      inst: "❌​CROISSANCE INSTAGRAM",
      marketing: "❌ ​MARKETING DIGITAL",
      next: "Alors, quelle est la prochaine étape ?",
      start: "Commencer",
     contact: "Nous contacter",
      contact2: "N'hésitez pas à nous contacter si vous avez des questions, notre équipe sera informée et vous recevrez une réponse dans un délai de 1 à 2 jours ouvrables..",
    }
};

// Function to update the content based on the user's language.
function updateContent(language) {
    document.getElementById("contactus").textContent = content[language].contactus;
    document.getElementById("startnow").textContent = content[language].startnow;
  document.getElementById("title").textContent = content[language].title;
  document.getElementById("herotext").textContent = content[language].herotext;
  document.getElementById("howtomakemoney").textContent = content[language].howtomakemoney
  document.getElementById("schedule").textContent = content[language].schedule;
  document.getElementById("offer").textContent = content[language].offer;
  document.getElementById("whatisit").textContent = content[language].whatisit;
  document.getElementById("text1").textContent = content[language].text1;
  document.getElementById("text2").textContent = content[language].text2;
  document.getElementById("focus").textContent = content[language].focus;
  document.getElementById("whichmeans").textContent = content[language].whichmeans;
  document.getElementById("salesfunnels").textContent = content[language].salesfunnels;
  document.getElementById("adcopy").textContent = content[language].adcopy;
  document.getElementById("salespages").textContent = content[language].salespages;
  document.getElementById("videoscripts").textContent = content[language].videoscripts;
  document.getElementById("smma").textContent = content[language].smma;
  document.getElementById("inst").textContent = content[language].inst;
  document.getElementById("marketing").textContent = content[language].marketing;
  document.getElementById("next").textContent = content[language].next;
  document.getElementById("start").textContent = content[language].start;
  document.getElementById("contact").textContent = content[language].contact;
  document.getElementById("contact2").textContent = content[language].contact2;
}



}




