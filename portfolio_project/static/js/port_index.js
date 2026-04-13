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

  // Scroll-based Navigation System
  const pageFlow = [
    { name: 'port_index', url: '/', title: 'Home' },
    { name: 'port_about', url: '/about/', title: 'About' },
    { name: 'port_edu', url: '/education/', title: 'Education' },
    { name: 'port_skills', url: '/skills/', title: 'Skills' },
    { name: 'port_projects', url: '/projects/', title: 'Projects' },
    { name: 'port_cont', url: '/contact/', title: 'Contact' }
  ];

  let isScrolling = false;
  let scrollTimeout;
  let currentPageIndex = getCurrentPageIndex();

  function getCurrentPageIndex() {
    const currentPath = window.location.pathname;
    return pageFlow.findIndex(page => 
      currentPath === page.url || (page.url === '/' && currentPath === '')
    );
  }

  function navigateToPage(index) {
    if (index >= 0 && index < pageFlow.length && index !== currentPageIndex) {
      isScrolling = true;
      window.location.href = pageFlow[index].url;
    }
  }

  // Handle scroll events for navigation
  let lastScrollTop = 0;
  let scrollThreshold = 100; // pixels to scroll before triggering navigation
  let accumulatedScroll = 0;

  window.addEventListener('wheel', (e) => {
    if (isScrolling) return;
    
    e.preventDefault();
    
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection = e.deltaY > 0 ? 'down' : 'up';
    
    accumulatedScroll += Math.abs(e.deltaY);
    
    if (accumulatedScroll > scrollThreshold) {
      if (scrollDirection === 'down' && currentPageIndex < pageFlow.length - 1) {
        navigateToPage(currentPageIndex + 1);
      } else if (scrollDirection === 'up' && currentPageIndex > 0) {
        navigateToPage(currentPageIndex - 1);
      }
      accumulatedScroll = 0;
    }
    
    lastScrollTop = currentScrollTop;
  }, { passive: false });

  // Handle touch events for mobile
  let touchStartY = 0;
  let touchEndY = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    if (isScrolling) return;
    
    touchEndY = e.changedTouches[0].screenY;
    const swipeDistance = touchStartY - touchEndY;
    const minSwipeDistance = 50;
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0 && currentPageIndex < pageFlow.length - 1) {
        // Swipe up - next page
        navigateToPage(currentPageIndex + 1);
      } else if (swipeDistance < 0 && currentPageIndex > 0) {
        // Swipe down - previous page
        navigateToPage(currentPageIndex - 1);
      }
    }
  }, { passive: true });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (isScrolling) return;
    
    switch(e.key) {
      case 'ArrowDown':
      case 'PageDown':
        if (currentPageIndex < pageFlow.length - 1) {
          navigateToPage(currentPageIndex + 1);
        }
        break;
      case 'ArrowUp':
      case 'PageUp':
        if (currentPageIndex > 0) {
          navigateToPage(currentPageIndex - 1);
        }
        break;
      case 'Home':
        navigateToPage(0);
        break;
      case 'End':
        navigateToPage(pageFlow.length - 1);
        break;
    }
  });

  // Reset scrolling flag when page loads
  window.addEventListener('load', () => {
    currentPageIndex = getCurrentPageIndex();
    isScrolling = false;
  });

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
