// photo slide
var endSlideMoscow = 0;

$('#first-slide-right').click(function(){
    if(endSlideMoscow < 6){
        var $current = $('#first-img-box').find('.office-photo.office-photo_act');
        $current.removeClass('office-photo_act');
        $current.next('.office-photo').addClass('office-photo_act');
        endSlideMoscow++;
        return(endSlideMoscow);
    } else {
        $('#first-img-box').find('.office-photo').removeClass('office-photo_act');
        $('#first-img-box').find('#mos-office-photo-first').addClass('office-photo_act');
        endSlideMoscow = 0;
        return(endSlideMoscow)
    }
})

$('#first-slide-left').click(function(){
    if (endSlideMoscow > 0){
        var $current = $('#first-img-box').find('.office-photo.office-photo_act');
        $current.removeClass('office-photo_act');
        $current.prev('.office-photo').addClass('office-photo_act');
        endSlideMoscow--;
        return(endSlideMoscow);
    } else {
        $('#first-img-box').find('.office-photo').removeClass('office-photo_act');
        $('#first-img-box').find('#mos-office-photo-last').addClass('office-photo_act');
        endSlideMoscow = 6;
        return(endSlideMoscow)
    }
})

var endSlideSPb = 0;

$('#second-slide-right').click(function(){
    if(endSlideSPb < 6){
        var $current = $('#second-img-box').find('.office-photo.office-photo_act');
        $current.removeClass('office-photo_act');
        $current.next('.office-photo').addClass('office-photo_act');
        endSlideSPb++;
        return(endSlideSPb);
    } else {
        $('#second-img-box').find('.office-photo').removeClass('office-photo_act');
        $('#second-img-box').find('#spb-office-photo-first').addClass('office-photo_act');
        endSlideSPb = 0;
        return(endSlideSPb)
    }
})

$('#second-slide-left').click(function(){
    if (endSlideSPb > 0){
        var $current = $('#second-img-box').find('.office-photo.office-photo_act');
        $current.removeClass('office-photo_act');
        $current.prev('.office-photo').addClass('office-photo_act');
        endSlideSPb--;
        return(endSlideSPb);
    } else {
        $('#second-img-box').find('.office-photo').removeClass('office-photo_act');
        $('#second-img-box').find('#spb-office-photo-last').addClass('office-photo_act');
        endSlideSPb = 6;
        return(endSlideSPb)
    }
})

// map zoom

$('#zoom-map-one').click(function(){
    $('#map-box-one').find('.map').toggleClass('map_act');
    $(this).addClass('hide');
    $('#yandex-png-one').addClass('hide');
})
$('#zoom-map-two').click(function(){
    $('#map-box-two').find('.map').toggleClass('map_act');
    $(this).addClass('hide');
    $('#yandex-png-two').addClass('hide');
})
$('#zoom-map-three').click(function(){
    $('#map-box-three').find('.map').toggleClass('map_act');
    $(this).addClass('hide');
    $('#yandex-png-three').addClass('hide');
})

$('.map').click(function(){
    $('.map').removeClass('map_act');
    $('.zoom-map').removeClass('hide');
    $('.yandex-png').removeClass('hide');
})