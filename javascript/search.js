const searchBtn = document.getElementById("search-btn");
const searchModal = document.getElementById("search-modal");
const closeSearch = document.querySelector(".close-search");

searchBtn.addEventListener("click", () => {
  searchModal.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeSearch.addEventListener("click", () => {
  searchModal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (event) => {
  if (event.target == searchModal) {
    searchModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
