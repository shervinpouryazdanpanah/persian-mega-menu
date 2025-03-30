document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".category-list a");
  const allSubcategories = document.querySelectorAll(".subcategories");

  categoryLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      categoryLinks.forEach((l) => l.classList.remove("active"));
      allSubcategories.forEach((sub) => sub.classList.remove("active"));
      this.classList.add("active");
      document
        .getElementById(this.getAttribute("data-target"))
        .classList.add("active");
    });
  });
});
