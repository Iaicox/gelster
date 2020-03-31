let clickToDropMenu = document.querySelectorAll(".menu-list-item.drop-menu");
let dropMenu = document.querySelectorAll(".drop-menu-list");

clickToDropMenu.forEach((menu, index) => {
  menu.addEventListener("click", function() {
    dropMenu[index].classList.toggle("drop-menu_open");
  });
});

let searchIcon = document.querySelector(".search-block");

searchIcon.addEventListener("click", function() {
  document.getElementById("search-form").classList.add("search-act");
});

document.addEventListener("keydown", function(e) {
  if (e.code == "Escape") {
    document.getElementById("search-form").classList.remove("search-act");
  }
});
