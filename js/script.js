document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  // Apply the saved theme on page load
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    // Save theme preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  const hamburgerBtn = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  const sections = document.querySelectorAll("section");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        entry.target.classList.remove("fade-out");
      } else {
        entry.target.classList.add("fade-out");
        entry.target.classList.remove("fade-in");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });
});
