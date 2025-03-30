document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".category-list a");
  const allSubcategories = document.querySelectorAll(".subcategories");
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const mainMenuToggle = document.querySelector(".main-menu-toggle");
  const megaMenu = document.querySelector(".mega-menu");

  // Mobile menu toggle
  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
  });

  // Main menu item click (for mobile)
  mainMenuToggle.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      megaMenu.classList.toggle("active");
    }
  });

  // Category links functionality
  categoryLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      if (window.innerWidth > 768) {
        categoryLinks.forEach((l) => l.classList.remove("active"));
        allSubcategories.forEach((sub) => sub.classList.remove("active"));
        this.classList.add("active");
        document
          .getElementById(this.getAttribute("data-target"))
          .classList.add("active");
      }
    });

    // For mobile touch
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        categoryLinks.forEach((l) => l.classList.remove("active"));
        allSubcategories.forEach((sub) => sub.classList.remove("active"));
        this.classList.add("active");
        document
          .getElementById(this.getAttribute("data-target"))
          .classList.add("active");
      }
    });
  });

  // Third level menu for mobile
  const subcategoryItems = document.querySelectorAll(".subcategory-list li");
  subcategoryItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.stopPropagation();
        subcategoryItems.forEach((i) => i.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });
});
