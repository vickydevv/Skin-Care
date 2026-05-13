// (function () {
//   "use strict";

//   var header = document.querySelector("header");
//   var menuToggle = document.querySelector(".menu-toggle");
//   var nav = document.querySelector("header nav");
//   var navLinks = document.querySelectorAll("header nav a");
//   var toast = document.getElementById("toast");

//   function showToast(message) { 
//     if (!toast) return;
//     toast.textContent = message;
//     toast.classList.add("toast--visible");
//     clearTimeout(showToast._t);
//     showToast._t = setTimeout(function () {
//       toast.classList.remove("toast--visible");
//     }, 2800);
//   }

//   function closeMobileNav() {
//     if (nav && menuToggle) {
//       nav.classList.remove("nav--open");
//       menuToggle.setAttribute("aria-expanded", "false");
//       menuToggle.setAttribute("aria-label", "Open menu");
//       document.body.classList.remove("nav-open");
//     }
//   }

//   function toggleMobileNav() {
//     if (!nav || !menuToggle) return;
//     var open = nav.classList.toggle("nav--open");
//     menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
//     menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
//     document.body.classList.toggle("nav-open", open);
//   }

//   if (menuToggle && nav) {
//     menuToggle.addEventListener("click", toggleMobileNav);
//   }

//   navLinks.forEach(function (link) {
//     link.addEventListener("click", function (e) {
//       var href = link.getAttribute("href");
//       if (href && href.startsWith("#") && href.length > 1) {
//         var target = document.querySelector(href);
//         if (target) {
//           e.preventDefault();
//           target.scrollIntoView({ behavior: "smooth", block: "start" });
//           closeMobileNav();
//         }
//       }
//     });
//   });

//   document.querySelectorAll(".btn").forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       var text = (btn.textContent || "").trim();
//       if (text === "Shop Now") {
//         e.preventDefault();
//         var products = document.getElementById("products");
//         if (products) products.scrollIntoView({ behavior: "smooth" });
//         return;
//       }
//       if (text === "Buy Now") {
//         e.preventDefault();
//         var card = btn.closest(".card");
//         var name = card ? card.querySelector("h3") : null;
//         var productName = name ? name.textContent.trim() : "Item";
//         showToast(productName + " added to cart (demo)");
//         return;
//       }
//     });
//   });

//   var contactForm = document.getElementById("contact-form");
//   if (contactForm) {
//     contactForm.addEventListener("submit", function (e) {
//       e.preventDefault();
//       var name = contactForm.querySelector('[name="name"]');
//       var email = contactForm.querySelector('[name="email"]');
//       var phone = contactForm.querySelector('[name="phone"]');
//       var msg = contactForm.querySelector('[name="message"]');
//       if (!name.value.trim() || !email.value.trim() || !(phone && phone.value.trim()) || !msg.value.trim()) {
//         showToast("Please fill in all fields.");
//         return;
//       }
//       showToast("Thanks! We'll get back to you soon.");
//       contactForm.reset();
//     });
//   }

//   var scrollTicking = false;
//   window.addEventListener("scroll", function () {
//     if (!header) return;
//     if (!scrollTicking) {
//       window.requestAnimationFrame(function () {
//         header.classList.toggle("header--scrolled", window.scrollY > 40);
//         scrollTicking = false;
//       });
//       scrollTicking = true;
//     }
//   });
// })();
