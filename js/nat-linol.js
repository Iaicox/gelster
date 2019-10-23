$(document).ready(function() {
    var doMenu = document.documentElement.clientWidth;
    if (doMenu < 700) {
        $(document).scroll(function() {
            var y = $(this).scrollTop();
            if (y > 300) {
              $('.menu-mobile').fadeIn();
            } else {
              $('.menu-mobile').fadeOut();
            }
        });
    }

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        
        if(height > 250){
            $('.menu-block').addClass('menu-block_top');
            $('.menu-block__name').addClass('menu-block__name_act');
            $('.menu-arrow').addClass('menu-arrow_top');
        } else{
            $('.menu-block').removeClass('menu-block_top');
            $('.menu-block__name').removeClass('menu-block__name_act');
            $('.menu-arrow').removeClass('menu-arrow_top');
        }

        if(height > 400){
            $('.menu-active').addClass('menu-active_top');
        } else {
            $('.menu-active').removeClass('menu-active_top');
        }
        
    });

    var mobileVersion = document.documentElement.clientWidth;
    if (mobileVersion < 450) {
        $(function(){
            $('.sixth-block__container__item').on('click', function(e){
                e.preventDefault;
                $(this).toggleClass('sixth-block__container__item_act');
                $(this).find('.arrow-open-container').toggleClass('arrow-open-container_act');
            })
        })
    }
    $('.menu-block').click(function(){
        $('.menu-active').toggleClass('menu-active_act');
        $(this).toggleClass('menu-block_animation');
        $('.menu-arrow').toggleClass('menu-arrow_animation');
        $('main').toggleClass('menu-act');
    })

    $('.menu-mobile__hamb').click(function(){
        $(this).toggleClass('menu-mobile__hamb_act');
        $('.mobile-menu__block').toggleClass('mobile-menu__block_act');
    })

    $('.header-side-menu').click(function(){
        $('.menu-active').removeClass('menu-active_act');
    })
});

