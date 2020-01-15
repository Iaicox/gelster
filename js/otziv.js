var itemList = document.getElementsByClassName("item");

$(document).ready(function () {

  $(".href-sert").click(function (event) {
    var currentBlock = document.querySelector(".item.current");
    // Вешаем обработчик события
    $(".href-sert").each(function (i) {
      // Цикл по всем DIV'-ам
      // Если данный DIV (this) равен элементу, по которому кликнули (event.target), то выводим алерт с номером
      if (this == event.target) {
        currentBlock.classList.add("hide-block");
        currentBlock.classList.remove("current");
        itemList[i].classList.remove("hide-block");
        itemList[i].classList.add("current");
      }
    });
  });

  //   $nextBtn = $('.next-nav');
  $(".nav-next").click(function (event) {
    // Вешаем обработчик события
    $(".nav-next").each(function (i) {
      // Цикл по всем DIV'-ам
      // Если данный DIV (this) равен элементу, по которому кликнули (event.target), то выводим алерт с номером
      if (
        this == event.target &&
        !this.classList.contains("non-active-arrow")
      ) {
        itemList[i].classList.add("hide-block");
        itemList[i + 1].classList.remove("hide-block");
        itemList[i + 1].classList.add("current");
        itemList[i].classList.remove("current");
      }
    });
  });
  $(".nav-prev").click(function (event) {
    // Вешаем обработчик события
    $(".nav-prev").each(function (i) {
      // Цикл по всем DIV'-ам
      // Если данный DIV (this) равен элементу, по которому кликнули (event.target), то выводим алерт с номером
      if (
        this == event.target &&
        !this.classList.contains("non-active-arrow")
      ) {
        itemList[i].classList.add("hide-block");
        itemList[i - 1].classList.remove("hide-block");
        itemList[i - 1].classList.add("current");
        itemList[i].classList.remove("current");
      }
    });
  });

  $("a.href-sert").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 200);
    return false;
  });

});

// Youtube

let openYouTubeReview = document.querySelector(".youtube-api");
let photoReview = document.querySelector(".photo-review");

photoReview.addEventListener("click", function () {
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

let openYouTubeReviewCvr = document.querySelector(".youtube-api-cvr");
let photoReviewCvr = document.querySelector(".photo-review-cvr");

photoReviewCvr.addEventListener("click", function () {
  openYouTubeReviewCvr.classList.add("youtube-api__active");
  document.body.classList.add("overflow-hidden");
});

openYouTubeReviewCvr.addEventListener("click", function (e) {
  if (e.target == this) {
    openYouTubeReviewCvr.classList.remove("youtube-api__active");
    document.body.classList.remove("overflow-hidden");
    player.stopVideo();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.code == "Escape") {
    openYouTubeReviewCvr.classList.remove("youtube-api__active");
    document.body.classList.remove("overflow-hidden");
    player.stopVideo();
  }
});