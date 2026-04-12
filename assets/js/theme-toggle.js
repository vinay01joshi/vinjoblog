// Theme Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const htmlElement = document.documentElement;
  const storageKey = "theme-preference";

  // Detect system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Load saved preference or use system preference
  function loadTheme() {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      return saved;
    }
    return prefersDark ? "dark" : "light";
  }

  // Apply theme
  function applyTheme(theme) {
    if (theme === "dark") {
      htmlElement.classList.add("dark-mode");
      htmlElement.classList.remove("light-mode");
    } else {
      htmlElement.classList.add("light-mode");
      htmlElement.classList.remove("dark-mode");
    }
    localStorage.setItem(storageKey, theme);
  }

  // Initialize theme
  const currentTheme = loadTheme();
  applyTheme(currentTheme);

  // Toggle theme on button click
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const isDark = htmlElement.classList.contains("dark-mode");
      applyTheme(isDark ? "light" : "dark");
    });
  }

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      applyTheme(e.matches ? "dark" : "light");
    });
});
