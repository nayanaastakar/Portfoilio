document.addEventListener("DOMContentLoaded", () => {

  // Mobile nav toggle
  const menuBtn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("navbarNav");
  const navbar = document.querySelector(".navbar");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      nav.classList.toggle("active");
      menuBtn.classList.toggle("active");
    });

    // Close nav when clicking on a link (mobile)
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A" && window.innerWidth <= 768) {
        nav.classList.remove("active");
        menuBtn.classList.remove("active");
      }
    });
  }

  // Close nav when clicking outside (mobile)
  document.addEventListener("click", (e) => {
    if (
      nav &&
      menuBtn &&
      nav.classList.contains("active") &&
      !nav.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      nav.classList.remove("active");
      menuBtn.classList.remove("active");
    }
  });

  // Header shadow on scroll
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.style.boxShadow =
        window.scrollY > 6
          ? "0 6px 15px rgba(0,0,0,.25)"
          : "none";
    });
  }

  
});
