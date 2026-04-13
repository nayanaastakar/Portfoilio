document.addEventListener("DOMContentLoaded", () => {

  // Theme Toggle Functionality
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.querySelector(".theme-icon");
  const html = document.documentElement;

  // Check for saved theme preference or default to dark mode
  const currentTheme = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  // Theme toggle event listener
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  // Update theme icon based on current theme (CSS handles the icon changes)
  function updateThemeIcon(theme) {
    // CSS automatically handles icon visibility based on [data-theme] attribute
    // No JavaScript text updates needed
  }

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
