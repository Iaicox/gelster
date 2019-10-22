let menuActive = document.getElementById('active-menu');
let activeArrow = document.getElementById('menu-arrow');
let hambMenu = document.getElementById('hamburger');
let hambCross = document.getElementById('hamburger-menu');
let popUpMenu = document.getElementById('pop-up-menu');


$(document).ready(function() {
    $('.background-section-hamburger').on('click', function(e){
        e.preventDefault;
        $('.section-hamburger').toggleClass('section-hamburger_active');
        $('.background-section-hamburger').toggleClass('background-section-hamburger_active');
        $('.section-menu_mobile-window').toggleClass('section-menu_mobile-window-act');
        // document.body.style.overflow = 'hidden';
    });
    var doMenu = document.documentElement.clientWidth;
    if (doMenu < 700) {
        $(document).scroll(function() {
            var y = $(this).scrollTop();
            if (y > 250) {
              $('.section-menu_mobile').fadeIn();
            } else {
              $('.section-menu_mobile').fadeOut();
            }
        });
    }
});


let clickMenuCounter = 0;
function openMenu() {
    if (clickMenuCounter%2 == 0) {
        menuActive.classList.add('active-menu_act');
        activeArrow.classList.add('menu-arrow_act');
        document.getElementById('menu').style.animation = 'none';
        document.getElementById('menu-arrow').style.animation = 'none';
        $(window).scroll(function(){
            if ($(window).scrollTop() > 110) {
                $('.active-menu_act').css( 'position', 'fixed');
            }
            else {
                $('.active-menu_act').css( 'position', 'sticky');
                $('.active-menu_act').css( 'zIndex', '234');
            }
        });
        clickMenuCounter++;
        return (clickMenuCounter);
    } else {
        menuActive.classList.remove('active-menu_act');
        activeArrow.classList.remove('menu-arrow_act');
        document.getElementById('menu').style.animation = 'attentionMenu 5s infinite';
        document.getElementById('menu-arrow').style.animation = 'attentionArrow 5s infinite';
        clickMenuCounter++;
        return (clickMenuCounter);
    }
}


function anotherCloseCross(){
    menuActive.classList.remove('active-menu_act');
    activeArrow.classList.remove('menu-arrow_act');
    document.body.style.overflowY = 'scroll';
    return(clickMenuCounter++);
}


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

let clickOpenArrow= 0;
function readMore(){
    if (clickOpenArrow%2 == 0){
        document.getElementById('show-text-info').style.height = 'auto';
        document.getElementById('read-more-text').innerHTML = 'скрыть';
        document.getElementById('read-treug').style.transform = 'rotate(180deg)';
        // document.getElementById('spec-side').style.marginTop = '-219.3px';
        // document.getElementById('spec-side').style.marginLeft = '399.3px';
        document.getElementById('description-text-info-opacity').style.display = 'none';
        clickOpenArrow++;
        return (clickOpenArrow);
    } else{
        document.getElementById('show-text-info').style.height = '180px';
        document.getElementById('read-more-text').innerHTML = 'читать далее';
        document.getElementById('read-treug').style.transform = 'none';
        // document.getElementById('spec-side').style.marginTop = '150px';
        // document.getElementById('spec-side').style.marginLeft = '1px';
        document.getElementById('description-text-info-opacity').style.display = 'block';
        clickOpenArrow++;
        return (clickOpenArrow);
    }
}

let specOpenArrow = 0;
function specOpen(){
    if (specOpenArrow%2 == 0){
        document.getElementById('spec-more-text').innerHTML = 'скрыть характеристики';
        document.getElementById('hidden-spec').style.display = 'flex';
        document.getElementById('hidden-spec').style.display = '-ms-flexbox';
        document.getElementById('spec-treug').style.transform = 'rotate(180deg)';
        $('.gallery').toggleClass('table-act-height');
        specOpenArrow++;
        return (specOpenArrow);
    } else{
        document.getElementById('spec-more-text').innerHTML = 'развернуть все характеристики';
        document.getElementById('hidden-spec').style.display = 'none';
        document.getElementById('spec-treug').style.transform = 'none';
        $('.gallery').removeClass('table-act-height');
        $('.table').removeClass('table-act');
        specOpenArrow++;
        return (specOpenArrow);
    }
}

let specOpenArrowTwo = 0;
function specOpenTwo(){
    if (specOpenArrowTwo%2 == 0){
        document.getElementById('spec-more-text-two').innerHTML = 'скрыть характеристики';
        document.getElementById('hidden-spec-two').style.display = 'flex';
        document.getElementById('hidden-spec-two').style.display = '-ms-flexbox';
        document.getElementById('spec-treug').style.transform = 'rotate(180deg)';
        $('.gallery').toggleClass('table-act-height');
        $('.table').toggleClass('table-act');
        specOpenArrowTwo++;
        return (specOpenArrowTwo);
    } else{
        document.getElementById('spec-more-text-two').innerHTML = 'развернуть все характеристики';
        document.getElementById('hidden-spec-two').style.display = 'none';
        document.getElementById('spec-treug').style.transform = 'none';
        $('.gallery').removeClass('table-act-height');
        $('.table').removeClass('table-act');
        specOpenArrowTwo++;
        return (specOpenArrowTwo);
    }
}


let items = document.querySelectorAll('.mobile-collection-item .needs-collection-item');
let current = 0;

function slider(){
    for (let i = 0; i <items.length; i++){
        items[i].classList.remove('opacity-zero');
    }
    items[current].classList.add('opacity-zero');
}

function slideLeft(){
    document.getElementById('needs-collection-item-first').style.opacity = '0';
    if(current - 1 == -1){
        current = items.length - 1;
    } else {
        current--;
    }
    slider();
}

function slideRight(){
    document.getElementById('needs-collection-item-first').style.opacity = '0';
    if(current + 1 == items.length){
        current = 0;
    } else {
        current++;
    }
    slider();
}

// //////////////////////////////////////
function openYouTubeVideo(){
    document.getElementById('main-block-video').style.visibility = 'visible';
    document.getElementById('main-block-video').style.zIndex = '99999';
    document.getElementById('main-block-video').style.opacity = '1';
    var video = $("#main-video-itself").attr("src");
    $("#main-video-itself").attr("src",'https://www.youtube.com/embed/Dgwarg1bnIc');
}
function closeVideo(){
    document.getElementById('main-block-video').style.zIndex = '-1';
    document.getElementById('main-block-video').style.opacity = '0';
    document.getElementById('main-block-video').style.visibility = 'hidden';
    var video = $("#main-video-itself").attr("src");
    $("#main-video-itself").attr("src","");
};

function openYoutubeVideoTwo(){
    document.getElementById('main-block-video-two').style.visibility = 'visible';
    document.getElementById('main-block-video-two').style.zIndex = '99999';
    document.getElementById('main-block-video-two').style.opacity = '1';
    var video = $("#main-video-itself-two").attr("src");
    $("#main-video-itself-two").attr("src",'https://www.youtube.com/embed/9wzbKD6c6eU');
}
function closeVideoTwo(){
    document.getElementById('main-block-video-two').style.zIndex = '-1';
    document.getElementById('main-block-video-two').style.opacity = '0';
    document.getElementById('main-block-video-two').style.visibility = 'hidden';
    var video = $("#main-video-itself-two").attr("src");
    $("#main-video-itself-two").attr("src","");
};

// ///////////////////////////////////////
// let videoContainerItems = document.getElementsByClassName('video-marmoleum');
let arrayVideoContainerItems = [];
let videoNumber = 0;

// let videoToOpen = document.getElementsByClassName('fullscreen-video');
// let videoToClose = document.getElementsByClassName('fullscreen-video');

window.onload = function(){
        for (var i = 0; i < document.getElementsByClassName('video-marmoleum').length; i++) {
            arrayVideoContainerItems.push(document.getElementsByClassName('video-marmoleum')[i]);
            document.getElementsByClassName('video-marmoleum')[i].addEventListener('click', function(e) {
            videoNumber = arrayVideoContainerItems.indexOf(e.target);
            document.getElementsByClassName('fullscreen-video')[videoNumber].style.visibility = 'visible';
            document.getElementsByClassName('fullscreen-video')[videoNumber].style.zIndex = '99999';
            document.getElementsByClassName('fullscreen-video')[videoNumber].style.opacity = '1';
        })
    }
}

function openArticleVideo() {
    for (var i = 0; i < document.getElementsByClassName('video-marmoleum').length; i++) {
        arrayVideoContainerItems.push(document.getElementsByClassName('video-marmoleum')[i]);
        document.getElementsByClassName('video-marmoleum')[i].addEventListener('click', function(e) {
        videoNumber = arrayVideoContainerItems.indexOf(e.target);
        document.getElementsByClassName('fullscreen-video')[videoNumber].style.visibility = 'visible';
        document.getElementsByClassName('fullscreen-video')[videoNumber].style.zIndex = '99999';
        document.getElementsByClassName('fullscreen-video')[videoNumber].style.opacity = '1';
        })
    }
}

function closeArticleVideo() {
    for (var i = 0; i < document.getElementsByClassName('fullscreen-video').length; i++) {
        document.getElementsByClassName('fullscreen-video')[i].style.visibility = 'hidden';
        document.getElementsByClassName('fullscreen-video')[i].style.zIndex = '-1';
        document.getElementsByClassName('fullscreen-video')[i].style.opacity = '0';
    }
}


// //////////////////////////////////////////


function open_form_service() {
    document.getElementById('service-closed_form').style.opacity = '1';
    document.getElementById('service-closed_form').style.height = '700px';
    document.getElementById('service-closed_form').style.width = '450px';
    document.getElementById('service-closed_form').style.display = 'block';
}

function close_form_service(){
    document.getElementById('service-closed_form').style.opacity = '0';
    document.getElementById('service-closed_form').style.height = '0';
    document.getElementById('service-closed_form').style.width = '0';
    document.getElementById('service-closed_form').style.display = 'none';
}

function open_form_service_m() {
    document.getElementById('service-closed_form_m').style.opacity = '1';
    document.getElementById('service-closed_form_m').style.height = '100vh';
    document.getElementById('service-closed_form_m').style.width = '100vw';
    document.getElementById('service-closed_form_m').style.display = 'block';
}

function close_form_service_m(){
    document.getElementById('service-closed_form_m').style.opacity = '0';
    document.getElementById('service-closed_form_m').style.height = '0';
    document.getElementById('service-closed_form_m').style.width = '0';
    document.getElementById('service-closed_form_m').style.display = 'none';
}



let popClick = 0;
document.getElementById('popup-width').addEventListener('click', function(){
    if(popClick%2 == 0){
        document.getElementById('width-list').style.transform = 'scaleY(1)';
        document.getElementById('width-list').style.opacity = '1';
        document.getElementById('popup-width').style.animation = 'none';
        popClick++;
        return(popClick);
    } else {
        document.getElementById('width-list').style.transform = 'scaleY(0)';
        document.getElementById('width-list').style.opacity = '0';
        document.getElementById('popup-width').style.animation = 'spark 3s infinite';
        popClick++;
        return(popClick);
    }   
})

let popClickTwo = 0;
document.getElementById('popup-width-two').addEventListener('click', function(){
    if(popClickTwo%2 == 0){
        document.getElementById('width-list-two').style.transform = 'scaleY(1)';
        document.getElementById('width-list-two').style.opacity = '1';
        popClickTwo++;
        return(popClickTwo);
    } else {
        document.getElementById('width-list-two').style.transform = 'scaleY(0)';
        document.getElementById('width-list-two').style.opacity = '0';
        popClickTwo++;
        return(popClickTwo);
    }   
})

document.getElementById('width-list-item-one').addEventListener('click', function(){
    document.getElementById('table-top-one').style.display = 'none';
    document.getElementById('table-top-two').style.display = 'flex';
    document.getElementById('spec-table-one').style.display = 'none';
    document.getElementById('spec-table-two').style.display = 'flex';
    document.getElementById('spec-more-two').style.display = 'flex';
    document.getElementById('spec-more').style.display = 'none';
})

document.getElementById('width-list-item-two').addEventListener('click', function(){
    document.getElementById('table-top-one').style.display = 'flex';
    document.getElementById('table-top-two').style.display = 'none';
    document.getElementById('spec-table-one').style.display = 'flex';
    document.getElementById('spec-table-two').style.display = 'none';
    document.getElementById('spec-more-two').style.display = 'none';
    document.getElementById('spec-more').style.display = 'flex';
})



