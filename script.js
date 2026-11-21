
/* =========================================
   FRIENDLY SURFACES
   Main JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  // 1. Mobile Navigation
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    // Close menu after clicking a navigation link
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      });
    });

    // Close menu when clicking outside it
    document.addEventListener("click", function (event) {
      const clickedInside =
        mainNav.contains(event.target) ||
        menuToggle.contains(event.target);

      if (!clickedInside) {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      }
    });
  }

  // 2. Automatically Update Copyright Year
  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // 3. WhatsApp Enquiry Setup
  // Replace this example with your real WhatsApp number.
  // Use country code + number, without +, spaces or dashes.
  const WHATSAPP_NUMBER = "919111423357";

  const defaultMessage =
    "Hello Friendly Surfaces! I would like to enquire about your products.";

  document.querySelectorAll(".whatsapp-link").forEach(function (link) {
    link.href =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(defaultMessage);

    link.target = "_blank";
    link.rel = "noopener noreferrer";

    link.addEventListener("click", function (event) {
      if (WHATSAPP_NUMBER.includes("X")) {
        event.preventDefault();

        alert(
          "Bhai, pehle script.js mein apna actual WhatsApp number add karo. Country code 91 ke saath number likhna, bina + ya spaces ke."
        );
      }
    });
  });

});
