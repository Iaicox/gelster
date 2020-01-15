// window.onload = function () {
let desktopClosedSideMenu = document.querySelector(".section-menu"),
  desktopOpenedSideMenu = document.querySelector(".active-menu"),
  desktopMenuArrow = document.querySelector(".menu-arrow");

var desktopSideMenuClicker = 0;

// открытие меню

desktopClosedSideMenu.addEventListener("click", function () {
  if (desktopSideMenuClicker == 0) {
    desktopOpenedSideMenu.classList.add("active-menu_act");
    desktopMenuArrow.classList.remove("animated__menu-arrow");
    desktopOpenedSideMenu.classList.remove("animated__active-menu");
    document
      .querySelector(".section-menu .menu")
      .classList.remove("animated__menu");
    desktopSideMenuClicker++;
    return desktopSideMenuClicker;
  } else {
    desktopMenuArrow.classList.add("animated__menu-arrow");
    desktopOpenedSideMenu.classList.add("animated__active-menu");
    document
      .querySelector(".section-menu .menu")
      .classList.add("animated__menu");
    desktopOpenedSideMenu.classList.remove("active-menu_act");
    desktopSideMenuClicker--;
    return desktopSideMenuClicker;
  }
});

desktopOpenedSideMenu.classList.add("fixed");

// боковое меню

$(window).scroll(function () {
  if (desktopOpenedSideMenu.classList.contains("active-menu_act")) {
    if ($(window).scrollTop() > 80) {
      document.querySelector(".active-menu_act").classList.add("fixed");
    } else {
      document.querySelector(".active-menu_act").classList.remove("fixed");
      // desktopOpenedSideMenu.classList.remove("fixed");
    }
  }
  if ($(window).scrollTop() > 80) {
    document.querySelector(".section-menu .menu").classList.add("top");
    desktopOpenedSideMenu.classList.add("top");
  } else {
    document.querySelector(".section-menu .menu").classList.remove("top");
    desktopOpenedSideMenu.classList.remove("top");
  }
});

// мобильное меню

$(this).scrollTop(0);
var doMenu = document.documentElement.clientWidth;
if (doMenu < 1025) {
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 150) {
      $(".section-menu_mobile").fadeIn();
    } else {
      $(".section-menu_mobile").fadeOut();
    }
  });
}
$(".background-section-hamburger").click(function () {
  $(this).toggleClass("background-section-hamburger_active");
  $(".section-hamburger").toggleClass("section-hamburger_active");
  $(".section-menu_mobile-window").toggleClass("mobile-menu__block_act");
  document.body.classList.toggle("overflow-hidden");
});

// открытие и закрытие обзора youtube

let openYouTubeReview = document.querySelector(".youtube-api");
let collectionReview = document.querySelector(".collection-review");

collectionReview.addEventListener("click", function () {
  openYouTubeReview.classList.add("youtube-api__active");
  document.body.classList.add("overflow-hidden");
});

openYouTubeReview.addEventListener("click", function (e) {
  if (e.target == this) {
    openYouTubeReview.classList.remove("youtube-api__active");
    document.body.classList.remove("overflow-hidden");
    player.stopVideo();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.code == "Escape") {
    openYouTubeReview.classList.remove("youtube-api__active");
    document.body.classList.remove("overflow-hidden");
    player.stopVideo();
  }
});

// открытие и закрытие видео очистки

let openYouTubeCleanVideo = document.querySelector(".youtube-api-clean");
let cleanPageVideo = document.querySelector(".clean-page");

cleanPageVideo.addEventListener("click", function () {
  openYouTubeCleanVideo.classList.add("youtube-api__active");
  document.body.classList.add("overflow-hidden");
});

openYouTubeCleanVideo.addEventListener("click", function (e) {
  if (e.target == this) {
    openYouTubeCleanVideo.classList.remove("youtube-api__active");
    document.body.classList.remove("overflow-hidden");
    playerClean.stopVideo();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.code == "Escape") {
    openYouTubeCleanVideo.classList.remove("youtube-api__active");
    document.body.classList.remove("overflow-hidden");
    playerClean.stopVideo();
  }
});

// разворот параграфов в описании коллекции

let showDescriptionText = document.querySelector(".description__show");
let showDescriptionTextClicker = true;

showDescriptionText.addEventListener("click", function () {
  if (showDescriptionTextClicker == true) {
    document.querySelector(".description__show").classList.add("margin-top");
    document
      .querySelector(".description__text-hidden")
      .classList.add("active-text");
    document.querySelector(".show-text").innerHTML = "скрыть";
    document
      .querySelector(".show__arrow-icon")
      .classList.add("show__arrow-icon_rotate");
    // document.querySelector(".white-shadow").style.display = "none";
    return (showDescriptionTextClicker = false);
  } else {
    document.querySelector(".description__show").classList.remove("margin-top");
    document
      .querySelector(".description__text-hidden")
      .classList.remove("active-text");
    document.querySelector(".show-text").innerHTML = "читать далее";
    document
      .querySelector(".show__arrow-icon")
      .classList.remove("show__arrow-icon_rotate");
    // document.querySelector(".white-shadow").style.display = "block";
    return (showDescriptionTextClicker = true);
  }
});

// разворот таблицы

let showTableText = document.querySelector(".table__show");
let showTableTextClicker = true;
let hiddenAtr = document.querySelectorAll(".attributes-hidden");

showTableText.addEventListener("click", function () {
  if (showTableTextClicker == true) {
    for (let i = 0; i < hiddenAtr.length; i++) {
      hiddenAtr[i].classList.add("active-table");
      document.querySelector(".table-text").innerHTML = "скрыть характеристики";
      document
        .querySelector(".table__arrow-icon")
        .classList.add("show__arrow-icon_rotate");
    }
    return (showTableTextClicker = false);
  } else {
    for (let i = 0; i < hiddenAtr.length; i++) {
      hiddenAtr[i].classList.remove("active-table");
      document.querySelector(".table-text").innerHTML =
        "развернуть характеристики";
      document
        .querySelector(".table__arrow-icon")
        .classList.remove("show__arrow-icon_rotate");
    }
    return (showTableTextClicker = true);
  }
});

// открытие видео артикула

let allArticles = document.querySelectorAll(".video-act");
let allArticlesVideo = document.querySelectorAll(".article-video-block");

allArticles.forEach((video, index) => {
  video.addEventListener("click", function () {
    allArticlesVideo[index].classList.add("article-video-block_act");
  });
});

// закрытие видео артикула

allArticlesVideo.forEach((video, index) => {
  video.addEventListener("click", function (e) {
    if (e.target == this) {
      allArticlesVideo[index].classList.remove("article-video-block_act");
    }
  });
});
allArticlesVideo.forEach((video, index) => {
  document.addEventListener("keydown", function (e) {
    if (e.code == "Escape") {
      allArticlesVideo[index].classList.remove("article-video-block_act");
    }
  });
});

// открытие форм

let orderMaterial = document.querySelector(".order-material");
let orderMaterialsForm = document.querySelector(".form__order-materials");
let closeOrderMaterialForm = document.querySelector(".close-form");

orderMaterial.addEventListener("click", function () {
  orderMaterialsForm.classList.add("forms__act");
});

let favoursButton = document.querySelector(".item-name_btn");
let favoursForm = document.querySelector(".form__favours");
let closeFavoursForm = document.querySelector(".close-form_f");

favoursButton.addEventListener("click", function () {
  favoursForm.classList.add("forms__act");
});

// закрытие форм

closeOrderMaterialForm.addEventListener("click", function () {
  orderMaterialsForm.classList.remove("forms__act");
});

document.addEventListener("keydown", function (event) {
  if (event.code == "Escape") {
    orderMaterialsForm.classList.remove("forms__act");
  }
});

orderMaterialsForm.addEventListener("click", function (e) {
  if (e.target == this) {
    orderMaterialsForm.classList.remove("forms__act");
  }
});

closeFavoursForm.addEventListener("click", function () {
  favoursForm.classList.remove("forms__act");
});

document.addEventListener("keydown", function (event) {
  if (event.code == "Escape") {
    favoursForm.classList.remove("forms__act");
  }
});
favoursForm.addEventListener("click", function (e) {
  if (e.target == this) {
    favoursForm.classList.remove("forms__act");
  }
});

// открытие модальных окон характеристик

let infoIcon = document.querySelectorAll(".info-icon");
let modalAttrOpen = document.querySelectorAll(".attr");

infoIcon.forEach((info, index) => {
  info.addEventListener("click", function () {
    modalAttrOpen[index % Number(modalAttrOpen.length)].classList.add(
      "show_modal"
    );
  });
});

// закрытие модальных оконо с характеристиками

let closeModal = document.querySelectorAll(".close-modal");

closeModal.forEach((cross, index) => {
  cross.addEventListener("click", function () {
    modalAttrOpen[index].classList.remove("show_modal");
  });
});

modalAttrOpen.forEach((window, index) => {
  window.addEventListener("click", function (e) {
    if (e.target == this) {
      modalAttrOpen[index].classList.remove("show_modal");
    }
  });
});
modalAttrOpen.forEach((window, index) => {
  document.addEventListener("keydown", function (e) {
    if (e.code == "Escape") {
      modalAttrOpen[index].classList.remove("show_modal");
    }
  });
});

// разворот всех артикулов

let articleNumber;
let allHiddenArticles = document.querySelectorAll(".article-item.hide-article");
let showAllArticlesBtn = document.querySelector(".see-all-collections");

let openAndCloseCollections = true;

showAllArticlesBtn.addEventListener("click", function () {
  if (openAndCloseCollections == true) {
    for (
      articleNumber = 0; articleNumber < allHiddenArticles.length; articleNumber++
    ) {
      allHiddenArticles[articleNumber].classList.remove("hide-article");
    }
    document.querySelector(".collections-arrow").classList.add("rotate_180");
    document.querySelector(".text-collections").innerHTML = "скрыть";
    openAndCloseCollections = false;
    return openAndCloseCollections;
  } else {
    for (
      articleNumber = 0; articleNumber < allHiddenArticles.length; articleNumber++
    ) {
      allHiddenArticles[articleNumber].classList.add("hide-article");
    }
    document.querySelector(".collections-arrow").classList.remove("rotate_180");
    document.querySelector(".text-collections").innerHTML =
      "развернуть коллекцию";
    openAndCloseCollections = true;
    return openAndCloseCollections;
  }
});
// };

//  слайдер для раздела "вам может понадобиться"

let youNeedToItems = document.querySelectorAll(".materials-container__item");
let currentSlide = 0;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  youNeedToItems[currentSlide].classList.remove("show");
  currentSlide = (n + youNeedToItems.length) % youNeedToItems.length;
  youNeedToItems[currentSlide].classList.add("show");
}

//