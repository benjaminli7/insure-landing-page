window.addEventListener("load", function (event) {
  document.querySelector("body").classList.remove("preload");
  window.scrollTo(0, 0);
});

const icon_hamburger = document.getElementById("icon-hamburger");
const nav_menu = document.getElementById("nav-menu");
const icon_close = document.getElementById("icon-close");

icon_hamburger.addEventListener("click", () => {
  nav_menu.style.display = "flex";
  document.body.classList.add("fixed");
  icon_hamburger.style.display = "none";
  icon_close.style.display = "block";
});

icon_close.addEventListener("click", () => {
  nav_menu.style.display = "none";
  document.body.classList.remove("fixed");
  icon_hamburger.style.display = "block";
  icon_close.style.display = "none";
});
