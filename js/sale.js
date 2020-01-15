$(document).ready(function(){
    $(".fourth-block").height($(".fourth-block__content_act").height()); 
    $(".fourth-block").width($(".fourth-block__content_act").width());
    $('#nat-linol-btn').click(function(){
        $('.fourth-block__content__nat-linol').addClass('fourth-block__content_act');
        $('.fourth-block__content__kovr-plitka').removeClass('fourth-block__content_act');
        $('.fourth-block__content__gryaz').removeClass('fourth-block__content_act');
        $('.fourth-block__content__else').removeClass('fourth-block__content_act');
        $('.fourth-block__content__linol-pvx').removeClass('fourth-block__content_act');
        $('.content__item').removeClass('content__item_act');
        $(this).addClass('content__item_act');
        $('.cat__item-nat').addClass('cat__item_act');
        $('.cat__item-pvh').removeClass('cat__item_act');
        $('.cat__item-kovr').removeClass('cat__item_act');
        $('.cat__item-gryaz').removeClass('cat__item_act');
        $('.cat__item-else').removeClass('cat__item_act');
        $(".fourth-block").height($(".fourth-block__content_act").height()); 
        $(".fourth-block").width($(".fourth-block__content_act").width());
    });

    $('#linol-pvx-btn').click(function(){
        $('.fourth-block__content__nat-linol').removeClass('fourth-block__content_act');
        $('.fourth-block__content__kovr-plitka').removeClass('fourth-block__content_act');
        $('.fourth-block__content__gryaz').removeClass('fourth-block__content_act');
        $('.fourth-block__content__else').removeClass('fourth-block__content_act');
        $('.fourth-block__content__linol-pvx').addClass('fourth-block__content_act');
        $('.content__item').removeClass('content__item_act');
        $(this).addClass('content__item_act');
        $('.cat__item-nat').removeClass('cat__item_act');
        $('.cat__item-pvh').addClass('cat__item_act');
        $('.cat__item-kovr').removeClass('cat__item_act');
        $('.cat__item-gryaz').removeClass('cat__item_act');
        $('.cat__item-else').removeClass('cat__item_act');
        $(".fourth-block").height($(".fourth-block__content_act").height()); 
        $(".fourth-block").width($(".fourth-block__content_act").width());
    });

    $('#kovr-btn').click(function(){
        $('.fourth-block__content__nat-linol').removeClass('fourth-block__content_act');
        $('.fourth-block__content__kovr-plitka').addClass('fourth-block__content_act');
        $('.fourth-block__content__gryaz').removeClass('fourth-block__content_act');
        $('.fourth-block__content__else').removeClass('fourth-block__content_act');
        $('.fourth-block__content__linol-pvx').removeClass('fourth-block__content_act');
        $('.content__item').removeClass('content__item_act');
        $(this).addClass('content__item_act');
        $('.cat__item-kovr').find('.cat__icon').addClass('hide__icon');
        $('.cat__item-kovr').find('.cat__icon-act').addClass('show__icon');
        $('.cat__item-nat').removeClass('cat__item_act');
        $('.cat__item-pvh').removeClass('cat__item_act');
        $('.cat__item-kovr').addClass('cat__item_act');
        $('.cat__item-gryaz').removeClass('cat__item_act');
        $('.cat__item-else').removeClass('cat__item_act');
        $(".fourth-block").height($(".fourth-block__content_act").height()); 
        $(".fourth-block").width($(".fourth-block__content_act").width());
    });

    $('#gryaz-btn').click(function(){
        $('.fourth-block__content__nat-linol').removeClass('fourth-block__content_act');
        $('.fourth-block__content__kovr-plitka').removeClass('fourth-block__content_act');
        $('.fourth-block__content__gryaz').addClass('fourth-block__content_act');
        $('.fourth-block__content__else').removeClass('fourth-block__content_act');
        $('.fourth-block__content__linol-pvx').removeClass('fourth-block__content_act');
        $('.content__item').removeClass('content__item_act');
        $(this).addClass('content__item_act');
        $('.cat__item-nat').removeClass('cat__item_act');
        $('.cat__item-pvh').removeClass('cat__item_act');
        $('.cat__item-kovr').removeClass('cat__item_act');
        $('.cat__item-gryaz').addClass('cat__item_act');
        $('.cat__item-else').removeClass('cat__item_act');
        $(".fourth-block").height($(".fourth-block__content_act").height()); 
        $(".fourth-block").width($(".fourth-block__content_act").width());
    });

    $('#else-btn').click(function(){
        $('.fourth-block__content__nat-linol').removeClass('fourth-block__content_act');
        $('.fourth-block__content__kovr-plitka').removeClass('fourth-block__content_act');
        $('.fourth-block__content__gryaz').removeClass('fourth-block__content_act');
        $('.fourth-block__content__else').addClass('fourth-block__content_act');
        $('.fourth-block__content__linol-pvx').removeClass('fourth-block__content_act');
        $('.content__item').removeClass('content__item_act');
        $(this).addClass('content__item_act');
        $('.cat__item-nat').removeClass('cat__item_act');
        $('.cat__item-pvh').removeClass('cat__item_act');
        $('.cat__item-kovr').removeClass('cat__item_act');
        $('.cat__item-gryaz').removeClass('cat__item_act');
        $('.cat__item-else').addClass('cat__item_act');
        $(".fourth-block").height($(".fourth-block__content_act").height()); 
        $(".fourth-block").width($(".fourth-block__content_act").width());
    });

    // top menu

    $('.cat__item-nat').click(function(){
        $('.fourth-block__content__nat-linol').addClass('fourth-block__content_act');
        $('.fourth-block__content__kovr-plitka').removeClass('fourth-block__content_act');
        $('.fourth-block__content__gryaz').removeClass('fourth-block__content_act');
        $('.fourth-block__content__else').removeClass('fourth-block__content_act');
        $('.fourth-block__content__linol-pvx').removeClass('fourth-block__content_act');
        $('.content__item').removeClass('content__item_act');
        $('#nat-linol-btn').addClass('content__item_act');
        $('.cat__item-nat').addClass('cat__item_act');
        $('.cat__item-pvh').removeClass('cat__item_act');
        $('.cat__item-kovr').removeClass('cat__item_act');
        $('.cat__item-gryaz').removeClass('cat__item_act');
        $('.cat__item-else').removeClass('cat__item_act');
        $(".fourth-block").height($(".fourth-block__content_act").height()); 
        $(".fourth-block").width($(".fourth-block__content_act").width());
    });

    $('.cat__item-pvh').click(function(){
        $('.fourth-block__content__nat-linol').removeClass('fourth-block__content_act');
        $('.fourth-block__content__kovr-plitka').removeClass('fourth-block__content_act');
        $('.fourth-block__content__gryaz').removeClass('fourth-block__content_act');
        $('.fourth-block__content__else').removeClass('fourth-block__content_act');
        $('.fourth-block__content__linol-pvx').addClass('fourth-block__content_act');
        $('.content__item').removeClass('content__item_act');
        $('.cat__item-pvh').find('.cat__icon').addClass('hide__icon');
        $('.cat__item-pvh').find('.cat__icon-act').addClass('show__icon');
        $('#linol-pvx-btn').addClass('content__item_act');
        $('.cat__item-nat').removeClass('cat__item_act');
        $('.cat__item-pvh').addClass('cat__item_act');
        $('.cat__item-kovr').removeClass('cat__item_act');
        $('.cat__item-gryaz').removeClass('cat__item_act');
        $('.cat__item-else').removeClass('cat__item_act');
        $(".fourth-block").height($(".fourth-block__content_act").height()); 
        $(".fourth-block").width($(".fourth-block__content_act").width());
    });

    $('.cat__item-kovr').click(function(){
        $('.fourth-block__content__nat-linol').removeClass('fourth-block__content_act');
        $('.fourth-block__content__kovr-plitka').addClass('fourth-block__content_act');
        $('.fourth-block__content__gryaz').removeClass('fourth-block__content_act');
        $('.fourth-block__content__else').removeClass('fourth-block__content_act');
        $('.fourth-block__content__linol-pvx').removeClass('fourth-block__content_act');
        $('.content__item').removeClass('content__item_act');
        $('#kovr-btn').addClass('content__item_act');
        $('.cat__item-kovr').find('.cat__icon').addClass('hide__icon');
        $('.cat__item-kovr').find('.cat__icon-act').addClass('show__icon');
        $('.cat__item-nat').removeClass('cat__item_act');
        $('.cat__item-pvh').removeClass('cat__item_act');
        $('.cat__item-kovr').addClass('cat__item_act');
        $('.cat__item-gryaz').removeClass('cat__item_act');
        $('.cat__item-else').removeClass('cat__item_act');
        $(".fourth-block").height($(".fourth-block__content_act").height()); 
        $(".fourth-block").width($(".fourth-block__content_act").width());
    });

    $('.cat__item-gryaz').click(function(){
        $('.fourth-block__content__nat-linol').removeClass('fourth-block__content_act');
        $('.fourth-block__content__kovr-plitka').removeClass('fourth-block__content_act');
        $('.fourth-block__content__gryaz').addClass('fourth-block__content_act');
        $('.fourth-block__content__else').removeClass('fourth-block__content_act');
        $('.fourth-block__content__linol-pvx').removeClass('fourth-block__content_act');
        $('.content__item').removeClass('content__item_act');
        $('.cat__item-gryaz').find('.cat__icon').addClass('hide__icon');
        $('.cat__item-gryaz').find('.cat__icon-act').addClass('show__icon');
        $('#gryaz-btn').addClass('content__item_act');
        $('.cat__item-nat').removeClass('cat__item_act');
        $('.cat__item-pvh').removeClass('cat__item_act');
        $('.cat__item-kovr').removeClass('cat__item_act');
        $('.cat__item-gryaz').addClass('cat__item_act');
        $('.cat__item-else').removeClass('cat__item_act');
        $(".fourth-block").height($(".fourth-block__content_act").height()); 
        $(".fourth-block").width($(".fourth-block__content_act").width());
    });

    $('.cat__item-else').click(function(){
        $('.fourth-block__content__nat-linol').removeClass('fourth-block__content_act');
        $('.fourth-block__content__kovr-plitka').removeClass('fourth-block__content_act');
        $('.fourth-block__content__gryaz').removeClass('fourth-block__content_act');
        $('.fourth-block__content__else').addClass('fourth-block__content_act');
        $('.fourth-block__content__linol-pvx').removeClass('fourth-block__content_act');
        $('.content__item').removeClass('content__item_act');
        $('.cat__item-else').find('.cat__icon').addClass('hide__icon');
        $('.cat__item-else').find('.cat__icon-act').addClass('show__icon');
        $('#else-btn').addClass('content__item_act');
        $('.cat__item-nat').removeClass('cat__item_act');
        $('.cat__item-pvh').removeClass('cat__item_act');
        $('.cat__item-kovr').removeClass('cat__item_act');
        $('.cat__item-gryaz').removeClass('cat__item_act');
        $('.cat__item-else').addClass('cat__item_act');
        $(".fourth-block").height($(".fourth-block__content_act").height()); 
        $(".fourth-block").width($(".fourth-block__content_act").width());
    });

    var doMenu = document.documentElement.clientWidth;
    if (doMenu < 500) {
        $(document).scroll(function() {
            var y = $(this).scrollTop();
            if (y > 850) {
              $('.mobile-categories').fadeIn();
            } else {
              $('.mobile-categories').fadeOut();
            }
        });
    }
});
 