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

  // Load More Logic
  let currentlyShown = 4;
  const postsPerLoad = 4;

  function attachLoadMoreListener() {
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener("click", function () {
      const gridItems = document.querySelectorAll("#postsGrid .post-item");
      const listItems = document.querySelectorAll("#postsList .post-item-list");

      // Show next batch in grid
      let gridCount = 0;
      for (let i = currentlyShown; i < currentlyShown + postsPerLoad && i < gridItems.length; i++) {
        gridItems[i].style.display = "";
        gridCount++;
      }

      // Show next batch in list
      for (let i = currentlyShown; i < currentlyShown + postsPerLoad && i < listItems.length; i++) {
        listItems[i].style.display = "";
      }

      currentlyShown += postsPerLoad;

      // Hide button if all are shown
      if (currentlyShown >= gridItems.length) {
        loadMoreBtn.parentElement.style.display = "none";
      }
    });

    // Initial check to hide button if there's <= 4 posts total
    const gridItems = document.querySelectorAll("#postsGrid .post-item");
    if (gridItems.length <= 4) {
      loadMoreBtn.parentElement.style.display = "none";
    }
  }

  // Initialize on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initializeViewMode();
      attachToggleListener();
      attachLoadMoreListener();
    });
  } else {
    initializeViewMode();
    attachToggleListener();
    attachLoadMoreListener();
  }
})();
