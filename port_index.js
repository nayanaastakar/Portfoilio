document.addEventListener("DOMContentLoaded", () => {

  // Mobile nav toggle
  const menuBtn = document.querySelector(".menu");
  const nav = document.querySelector(".nav");
  const header = document.querySelector(".header");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent closing immediately
      nav.classList.toggle("show");
      document.body.classList.toggle("nav-open");
    });
  }

  // Close nav when clicking outside (mobile)
  document.addEventListener("click", (e) => {
    if (
      nav &&
      menuBtn &&
      nav.classList.contains("show") &&
      !nav.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      nav.classList.remove("show");
      document.body.classList.remove("nav-open");
    }
  });

  // Mark active nav link by URL
  document.querySelectorAll(".navlink").forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // Header shadow on scroll
  if (header) {
    window.addEventListener("scroll", () => {
      header.style.boxShadow =
        window.scrollY > 6
          ? "0 6px 15px rgba(0,0,0,.25)"
          : "none";
    });
  }

});
