// Posts View Toggle - Grid/List
(function () {
  const VIEW_MODE_KEY = "postsViewMode";
  const DEFAULT_VIEW = "grid";

  // Initialize view mode
  function initializeViewMode() {
    const savedMode = localStorage.getItem(VIEW_MODE_KEY) || DEFAULT_VIEW;
    setViewMode(savedMode);
  }

  // Set the view mode
  function setViewMode(mode) {
    const viewToggle = document.getElementById("viewToggle");
    const postsGrid = document.getElementById("postsGrid");
    const postsList = document.getElementById("postsList");

    if (!viewToggle || !postsGrid || !postsList) return;

    if (mode === "list") {
      postsGrid.style.display = "none";
      postsList.style.display = "block";
      viewToggle.classList.remove("grid-mode");
      viewToggle.classList.add("list-mode");
    } else {
      postsGrid.style.display = "block";
      postsList.style.display = "none";
      viewToggle.classList.remove("list-mode");
      viewToggle.classList.add("grid-mode");
    }

    localStorage.setItem(VIEW_MODE_KEY, mode);
  }

  // Toggle view mode
  function toggleViewMode() {
    const viewToggle = document.getElementById("viewToggle");
    if (!viewToggle) return;

    const currentMode = localStorage.getItem(VIEW_MODE_KEY) || DEFAULT_VIEW;
    const newMode = currentMode === "grid" ? "list" : "grid";
    setViewMode(newMode);
  }

  // Attach event listener
  function attachToggleListener() {
    const viewToggle = document.getElementById("viewToggle");
    if (viewToggle) {
      viewToggle.addEventListener("click", toggleViewMode);
    }
  }

  // Initialize on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initializeViewMode();
      attachToggleListener();
    });
  } else {
    initializeViewMode();
    attachToggleListener();
  }
})();
