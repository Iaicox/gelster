let widthOne = document.querySelector('.attributes .width.one');
let widthTwo = document.querySelector('.attributes .width.two');
let widthThree = document.querySelector('.attributes .width.three');
let widthFour = document.querySelector('.attributes .width.four');
let widthFive = document.querySelector('.attributes .width.five');

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
widthFour.addEventListener('click', function () {
    for (let i = 0; i < extraWidth.length; i++) {
        extraWidth[i].classList.toggle('extra-width_active');
    }
});
widthFive.addEventListener('click', function () {
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

$('.width.one .extra-width.four').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 3) {
            arr[index].classList.remove('hide-table');
        }
    });
});

$('.width.one .extra-width.five').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 4) {
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

$('.width.two .extra-width.four').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 3) {
            arr[index].classList.remove('hide-table');
        }
    });
});

$('.width.two .extra-width.five').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 4) {
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

$('.width.three .extra-width.four').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 3) {
            arr[index].classList.remove('hide-table');
        }
    });
});

$('.width.three .extra-width.five').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 4) {
            arr[index].classList.remove('hide-table');
        }
    });
});

$('.width.four .extra-width.one').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 0) {
            arr[index].classList.remove('hide-table');
        }
    });
});

$('.width.four .extra-width.two').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 1) {
            arr[index].classList.remove('hide-table');
        }
    });
});

$('.width.four .extra-width.three').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 2) {
            arr[index].classList.remove('hide-table');
        }
    });
});

$('.width.four .extra-width.five').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 4) {
            arr[index].classList.remove('hide-table');
        }
    });
});

$('.width.five .extra-width.one').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 0) {
            arr[index].classList.remove('hide-table');
        }
    });
});

$('.width.five .extra-width.two').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 1) {
            arr[index].classList.remove('hide-table');
        }
    });
});

$('.width.five .extra-width.three').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 2) {
            arr[index].classList.remove('hide-table');
        }
    });
});

$('.width.five .extra-width.four').click(function () {
    $('.attributes').addClass('hide-table');
    $.each(arr, function (index, value) {
        if (index == 3) {
            arr[index].classList.remove('hide-table');
        }
    });
});