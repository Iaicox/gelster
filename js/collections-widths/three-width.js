let widthOne = document.querySelector('.attributes .width.one');
let widthTwo = document.querySelector('.attributes .width.two');
let widthThree = document.querySelector('.attributes .width.three');

let extraWidth = document.querySelectorAll('.attributes .extra-width');
let attributes = document.querySelectorAll('.attributes');

widthOne.addEventListener('click', function () {
    for (let i = 0; i < extraWidth.length; i++) {
        extraWidth[i].classList.toggle('extra-width_active');
    }
});
widthTwo.addEventListener('click', function () {
    for (let i = 0; i < extraWidth.length; i++) {
        extraWidth[i].classList.toggle('extra-width_active');
    }
});
widthThree.addEventListener('click', function () {
    for (let i = 0; i < extraWidth.length; i++) {
        extraWidth[i].classList.toggle('extra-width_active');
    }
});

var arr = $('.attributes');

$('.width.one .extra-width.two').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 1) {
            arr[index].classList.remove('hide-table');
        }
    });
});


$('.width.one .extra-width.three').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 2) {
            arr[index].classList.remove('hide-table');
        }
    });
});

$('.width.two .extra-width.one').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 0) {
            arr[index].classList.remove('hide-table');
        }
    });
});

$('.width.two .extra-width.three').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 2) {
            arr[index].classList.remove('hide-table');
        }
    });
});

$('.width.three .extra-width.one').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 0) {
            arr[index].classList.remove('hide-table');
        }
    });
});

$('.width.three .extra-width.two').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 1) {
            arr[index].classList.remove('hide-table');
        }
    });
});