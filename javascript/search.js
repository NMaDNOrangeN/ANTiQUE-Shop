const searchBtn = document.getElementById("search-btn");
const searchModal = document.getElementById("search-modal");
const closeSearch = document.querySelector(".close-search");
const mobileMenu = document.querySelector(".mobile-menu");

searchBtn.addEventListener("click", () => {
  searchModal.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeSearch.addEventListener("click", () => {
  searchModal.style.display = "none";
  document.body.style.overflow = "auto";
});

mobileMenu.addEventListener("click", () => {
  const mainNav = document.querySelector(".main-nav")
  if (mainNav.style.display === "none") {
    mainNav.style.display = "block";
  } else {
    mainNav.style.display = "none";
  }
});



window.addEventListener("click", (event) => {
  if (event.target == searchModal) {
    searchModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
