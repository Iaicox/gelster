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