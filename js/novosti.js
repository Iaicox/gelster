$(document).ready(function () {
    // Переключение меню навигации
    $('.navigation-list-item__all-news').click(function () {
        $(this).addClass('navigation-list-item__act');
        $('.navigation-list-item__new-collection').removeClass('navigation-list-item__act');
        $('.navigation-list-item__company-life').removeClass('navigation-list-item__act');
        $('.navigation-list-item__meeting').removeClass('navigation-list-item__act');
        $('.navigation-list-item__smi').removeClass('navigation-list-item__act');
        $('.navigation-list-item__feedback').removeClass('navigation-list-item__act');
        $('.navigation-list-item__calendar').removeClass('navigation-list-item__act');
        $('.category').addClass('hide');
        $('.third-block__all-news').removeClass('hide');
        $('.blocks').addClass('hide');
        $('.block__all-news').removeClass('hide');
        $('.burger').removeClass('burger_act');
        $('.navigation-mobile').removeClass('navigation-mobile_act');
        $("html").removeClass('block-scroll');

    });
    $('.navigation-list-item__new-collection').click(function () {
        $('.navigation-list-item__all-news').removeClass('navigation-list-item__act');
        $(this).addClass('navigation-list-item__act');
        $('.navigation-list-item__company-life').removeClass('navigation-list-item__act');
        $('.navigation-list-item__meeting').removeClass('navigation-list-item__act');
        $('.navigation-list-item__smi').removeClass('navigation-list-item__act');
        $('.navigation-list-item__feedback').removeClass('navigation-list-item__act');
        $('.navigation-list-item__calendar').removeClass('navigation-list-item__act');
        $('.category').addClass('hide');
        $('.third-block__new-collection').removeClass('hide');
        $('.blocks').addClass('hide');
        $('.block__new-collection').removeClass('hide');
        $('.burger').removeClass('burger_act');
        $('.navigation-mobile').removeClass('navigation-mobile_act');
        $("html").removeClass('block-scroll');
    });
    $('.navigation-list-item__company-life').click(function () {
        $('.navigation-list-item__all-news').removeClass('navigation-list-item__act');
        $('.navigation-list-item__new-collection').removeClass('navigation-list-item__act');
        $(this).addClass('navigation-list-item__act');
        $('.navigation-list-item__meeting').removeClass('navigation-list-item__act');
        $('.navigation-list-item__smi').removeClass('navigation-list-item__act');
        $('.navigation-list-item__feedback').removeClass('navigation-list-item__act');
        $('.navigation-list-item__calendar').removeClass('navigation-list-item__act');
        $('.category').addClass('hide');
        $('.third-block__company-life').removeClass('hide');
        $('.blocks').addClass('hide');
        $('.block__company-life').removeClass('hide');
        $('.burger').removeClass('burger_act');
        $('.navigation-mobile').removeClass('navigation-mobile_act');
        $("html").removeClass('block-scroll');
    });
    $('.navigation-list-item__meeting').click(function () {
        $('.navigation-list-item__all-news').removeClass('navigation-list-item__act');
        $('.navigation-list-item__new-collection').removeClass('navigation-list-item__act');
        $('.navigation-list-item__company-life').removeClass('navigation-list-item__act');
        $(this).addClass('navigation-list-item__act');
        $('.navigation-list-item__smi').removeClass('navigation-list-item__act');
        $('.navigation-list-item__feedback').removeClass('navigation-list-item__act');
        $('.navigation-list-item__calendar').removeClass('navigation-list-item__act');
        $('.category').addClass('hide');
        $('.third-block__meeting').removeClass('hide');
        $('.blocks').addClass('hide');
        $('.block__meeting').removeClass('hide');
        $('.burger').removeClass('burger_act');
        $('.navigation-mobile').removeClass('navigation-mobile_act');
        $("html").removeClass('block-scroll');
    });
    $('.navigation-list-item__smi').click(function () {
        $('.navigation-list-item__all-news').removeClass('navigation-list-item__act');
        $('.navigation-list-item__new-collection').removeClass('navigation-list-item__act');
        $('.navigation-list-item__company-life').removeClass('navigation-list-item__act');
        $('.navigation-list-item__meeting').removeClass('navigation-list-item__act');
        $(this).addClass('navigation-list-item__act');
        $('.navigation-list-item__feedback').removeClass('navigation-list-item__act');
        $('.navigation-list-item__calendar').removeClass('navigation-list-item__act');
        $('.category').addClass('hide');
        $('.third-block__smi').removeClass('hide');
        $('.blocks').addClass('hide');
        $('.block__smi').removeClass('hide');
        $('.burger').removeClass('burger_act');
        $('.navigation-mobile').removeClass('navigation-mobile_act');
        $("html").removeClass('block-scroll');
    });
    $('.navigation-list-item__feedback').click(function () {
        $('.navigation-list-item__all-news').removeClass('navigation-list-item__act');
        $('.navigation-list-item__new-collection').removeClass('navigation-list-item__act');
        $('.navigation-list-item__company-life').removeClass('navigation-list-item__act');
        $('.navigation-list-item__meeting').removeClass('navigation-list-item__act');
        $('.navigation-list-item__smi').removeClass('navigation-list-item__act');
        $(this).addClass('navigation-list-item__act');
        $('.navigation-list-item__calendar').removeClass('navigation-list-item__act');
        $('.category').addClass('hide');
        $('.third-block__feedback').removeClass('hide');
        $('.blocks').addClass('hide');
        $('.block__feedback').removeClass('hide');
        $('.burger').removeClass('burger_act');
        $('.navigation-mobile').removeClass('navigation-mobile_act');
        $("html").removeClass('block-scroll');
    });
    $('.navigation-list-item__calendar').click(function () {
        $('.navigation-list-item__all-news').removeClass('navigation-list-item__act');
        $('.navigation-list-item__new-collection').removeClass('navigation-list-item__act');
        $('.navigation-list-item__company-life').removeClass('navigation-list-item__act');
        $('.navigation-list-item__meeting').removeClass('navigation-list-item__act');
        $('.navigation-list-item__smi').removeClass('navigation-list-item__act');
        $('.navigation-list-item__feedback').removeClass('navigation-list-item__act');
        $(this).addClass('navigation-list-item__act');
        $('.category').addClass('hide');
        $('.third-block__calendar').removeClass('hide');
        $('.blocks').addClass('hide');
        $('.block__calendar').removeClass('hide');
        $('.burger').removeClass('burger_act');
        $('.navigation-mobile').removeClass('navigation-mobile_act');
        $("html").removeClass('block-scroll');
    });
    //Блок первый !!!
    // Переключение страницы стрелками

    var endSlidePage = 0;

    $('.slide-right.all-news').click(function () {
        if (endSlidePage < 1) {
            var $current = $('.number-list-item.all-news.number_active');
            var $currentPage = $('.third-block__all-news').find('.slidepage.show');
            $currentPage.removeClass('show');
            $current.removeClass('number_active');
            $current.next('.number-list-item').addClass('number_active');
            $currentPage.next('.slidepage').addClass('show');
            $('.slide-left.all-news').removeClass('none-active-slide');
            $(this).addClass('none-active-slide');
            endSlidePage++;
            return (endSlidePage);
        }
    });
    $('.slide-left.all-news').click(function () {
        if (endSlidePage > 0) {
            var $current = $('.number-list-item.all-news.number_active');
            var $currentPage = $('.third-block__all-news').find('.slidepage.show');
            $currentPage.removeClass('show');
            $current.removeClass('number_active');
            $current.prev('.number-list-item').addClass('number_active');
            $currentPage.prev('.slidepage').addClass('show');
            $('.slide-right.all-news').removeClass('none-active-slide');
            $(this).addClass('none-active-slide');
            endSlidePage--;
            return (endSlidePage);
        }
    });

    // Переключение страниц цифрами

    $('#firstAllNews').click(function () {
        $('.third-block__all-news').find('.first-page').addClass('show');
        $('.third-block__all-news').find('.second-page').removeClass('show');
        $('.number-list-item.one.all-news').addClass('number_active');
        $('.number-list-item.two.all-news').removeClass('number_active');
        $('.slide-right.all-news').removeClass('none-active-slide');
        $('.slide-left.all-news').addClass('none-active-slide');
        endSlidePage--;
        return (endSlidePage);
    })
    $('#secondAllNews').click(function () {
        $('.third-block__all-news').find('.first-page').removeClass('show');
        $('.third-block__all-news').find('.second-page').addClass('show');
        $('.number-list-item.one.all-news').removeClass('number_active');
        $('.number-list-item.two.all-news').addClass('number_active');
        $('.slide-left.all-news').removeClass('none-active-slide');
        $('.slide-right.all-news').addClass('none-active-slide');
        endSlidePage++;
        return (endSlidePage);
    });
    // КОНЕЦ ПЕРВОГО БЛОКА

    var arrow = document.documentElement.clientWidth;
    if (arrow > 660) {
        $(document).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 1000) {
                $('.help-arrow').fadeIn();
            } else {
                $('.help-arrow').fadeOut();
            }
        });
    }

    var openNews = document.documentElement.clientWidth;
    if (openNews < 769) {
        $('.item').click(function () {
            $(this).addClass('item_act');
            $('.close-modal').addClass('close-modal_act');
            $("html").toggleClass('block-scroll');
        });
        $('.close').click(function () {
            $('.item').removeClass('item_act');
            $('.close-modal').removeClass('close-modal_act');
            $("html").toggleClass('block-scroll');
            $('.item').animate({
                scrollTop: 0
            });
        });
    }

    var openMenu = document.documentElement.clientWidth;
    if (openMenu < 660) {
        $(document).scroll(function () {
            var y = $(this).scrollTop();
            if (y > 100) {
                $('.burger').fadeIn();
            } else {
                $('.burger').fadeOut();
            }
        });
        $('.burger').click(function () {
            $(this).toggleClass('burger_act');
            $('.navigation-mobile').toggleClass('navigation-mobile_act');
            $("html").toggleClass('block-scroll');
        });
    }
});