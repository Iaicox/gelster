let widthOne = document.querySelector('.attributes .width.one');
let widthTwo = document.querySelector('.attributes .width.two');

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

let secondWidth = document.querySelector('.attributes .extra-width.two');
let firstWidth = document.querySelector('.attributes .extra-width.one');
let tableShow = document.querySelectorAll('.attributes-hidden');


secondWidth.addEventListener('click', function () {
    for (let i = 0; i < attributes.length; i++) {
        attributes[i].classList.add('hide-table');
    }
    attributes[1].classList.remove('hide-table');

});

firstWidth.addEventListener('click', function () {
    for (let i = 0; i < attributes.length; i++) {
        attributes[i].classList.add('hide-table');
    }
    attributes[0].classList.remove('hide-table');
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


$('.width.two .extra-width.one').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 0) {
            arr[index].classList.remove('hide-table');
        }
    });
});