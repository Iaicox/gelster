$(document).ready(function() {
  var mywindow = $(window);
  var mypos = mywindow.scrollTop();
  mywindow.scroll(function() {
    if (mywindow.scrollTop() > mypos) {
      $(".menu").fadeOut();
    } else {
      $(".menu").fadeIn();
    }
    mypos = mywindow.scrollTop();
  });
  $(".menu-mobile__hamb").click(function() {
    $(this).toggleClass("menu-mobile__hamb_act");
    $(".mobile-menu__block").toggleClass("mobile-menu__block_act");
  });

  $(".header-side-menu").click(function() {
    $(".menu-active").removeClass("menu-active_act");
  });
});
