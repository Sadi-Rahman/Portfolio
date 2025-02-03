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
