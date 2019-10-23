let arrowLeft = document.getElementById('arrow-slide_left');
let arrowRight = document.getElementById('arrow-slide_right');
let slideItems = document.getElementsByClassName('second-block_container-small-icons_item');



var rightClick = 0;
function arrowRightSlide(){
    if(rightClick%2 == 0){
        slideItems[0].style.display = 'none';
        slideItems[1].style.display = 'none';
        slideItems[2].style.display = 'none';
        slideItems[3].style.display = 'none';
        slideItems[4].style.display = 'block';
        slideItems[5].style.display = 'block';
        slideItems[6].style.display = 'block';
        slideItems[7].style.display = 'block';
        arrowLeft.style.display = 'block';
        rightClick++;
        return (rightClick);
    } else {
        slideItems[4].style.display = 'none';
        slideItems[5].style.display = 'none';
        slideItems[6].style.display = 'none';
        slideItems[7].style.display = 'none';
        slideItems[8].style.display = 'block';
        slideItems[9].style.display = 'block';
        slideItems[10].style.display = 'block';
        slideItems[11].style.display = 'block';
        arrowRight.style.display = 'none';
        rightClick++;
        return (rightClick);
    }
}
function arrowLeftSlide(){
    if(rightClick%2 == 0){
        slideItems[11].style.display = 'none';
        slideItems[10].style.display = 'none';
        slideItems[9].style.display = 'none';
        slideItems[8].style.display = 'none';
        slideItems[7].style.display = 'block';
        slideItems[6].style.display = 'block';
        slideItems[5].style.display = 'block';
        slideItems[4].style.display = 'block';
        arrowRight.style.display = 'block';
        rightClick++;
        return (rightClick);
    } else {
        slideItems[7].style.display = 'none';
        slideItems[6].style.display = 'none';
        slideItems[5].style.display = 'none';
        slideItems[4].style.display = 'none';
        slideItems[3].style.display = 'block';
        slideItems[2].style.display = 'block';
        slideItems[1].style.display = 'block';
        slideItems[0].style.display = 'block';
        arrowLeft.style.display = 'none';
        rightClick++;
        return (rightClick);
    }
}


document.getElementById('arrow-slide_plus').addEventListener('click', function(){
    document.getElementById('mobile_container').style.opacity = '0';
    document.getElementById('mobile_container_two').style.opacity = '1';
})
document.getElementById('arrow-slide_plus-r').addEventListener('click', function(){
    document.getElementById('mobile_container_two').style.opacity = '0';
    document.getElementById('mobile_container').style.opacity = '1';
})


let menuActive = document.getElementById('active-menu');
let activeArrow = document.getElementById('menu-arrow');
let hambMenu = document.getElementById('hamburger');
let hambCross = document.getElementById('hamburger-menu');
let popUpMenu = document.getElementById('pop-up-menu');

let clickHambMenu = 0;
function hamburgerAct(){
    if (clickHambMenu%2 == 0) {
        popUpMenu.classList.add('pop-up-menu_act');
        document.getElementById('pop-up-item').classList.add('pop-up-menu-list_act');
        document.body.style.overflowY = 'hidden';
        clickHambMenu++;
        return (clickHambMenu);
    } else {
        popUpMenu.classList.remove('pop-up-menu_act');
        document.getElementById('pop-up-item').classList.remove('pop-up-menu-list_act');
        document.body.style.overflowY = 'scroll';
        clickHambMenu++;
        return (clickHambMenu);
    }
}
var serviceForm = document.documentElement.clientWidth;
if (serviceForm < 430) {
    function open_form_service() {
        document.getElementById('service-closed_form').style.opacity = '1';
        document.getElementById('service-closed_form').style.height = '100vh';
        document.getElementById('service-closed_form').style.width = '250px';
        document.getElementById('service-closed_form').style.display = 'block';
    }
    
    function close_form_service(){
        document.getElementById('service-closed_form').style.opacity = '0';
        document.getElementById('service-closed_form').style.height = '0';
        document.getElementById('service-closed_form').style.width = '0';
        document.getElementById('service-closed_form').style.display = 'none';
    }
} else{
    function open_form_service() {
        document.getElementById('service-closed_form').style.opacity = '1';
        document.getElementById('service-closed_form').style.height = '750px';
        document.getElementById('service-closed_form').style.width = '450px';
        document.getElementById('service-closed_form').style.display = 'block';
    }
    
    function close_form_service(){
        document.getElementById('service-closed_form').style.opacity = '0';
        document.getElementById('service-closed_form').style.height = '0';
        document.getElementById('service-closed_form').style.width = '0';
        document.getElementById('service-closed_form').style.display = 'none';
    }
}

$('.sertificat-img').click(function(){
    $('.block-for-slider').addClass('block-for-slider_act');
    document.style.overflowY = 'hidden';
})

$('.close-button').click(function(){
    $('.block-for-slider').removeClass('block-for-slider_act');
})

$('.zoom-pic').click(function(){
    $(this).toggleClass('zoom-pic_act');
})

$('.recomends').click(function(){
    $('.recomend-form').addClass('recomend-form_act');
    $('.recomend-block').addClass('recomend-block_act');
})

$('.block-cross').click(function(){
    $('.recomend-form').removeClass('recomend-form_act');
    $('.recomend-block').removeClass('recomend-block_act');
})


var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

