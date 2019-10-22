var doFullpage = document.documentElement.clientWidth;
if (doFullpage > 440) {
    $('#fullpage').fullpage({
    
    });
}
var doScroll = document.documentElement.clientWidth;
if (doScroll > 440) {
    $('#step-one').on('click', function(){
        document.getElementById('fullpage').style.transform = 'translate3d(0 , -100vh, 0)'
    })
    $('#step-two').on('click', function(){
        document.getElementById('fullpage').style.transform = 'translate3d(0 , -200vh, 0)'
    })
    $('#step-three').on('click', function(){
        document.getElementById('fullpage').style.transform = 'translate3d(0 , -300vh, 0)'
    })
    $('#step-four').on('click', function(){
        document.getElementById('fullpage').style.transform = 'translate3d(0 , -400vh, 0)'
    })
    $('#white-arrow').on('click', function(){
        document.getElementById('fullpage').style.transform = 'translate3d(0 , -100vh, 0)'
    })
}



let arrowSlideContainer = document.getElementById('arrow-slide');
let arrowSlide = document.getElementById('icon-arrow-slide');
let arrowSlideContainerRot = document.getElementById('arrow-slide-rot');
let arrowSlideRot = document.getElementById('icon-arrow-slide-rot');

// desktop slide

arrowSlideContainer.addEventListener('click', function(){
    document.getElementById('section-grid_tablet_first').style.opacity = '0';
    document.getElementById('section-grid_tablet_first').style.transform = 'scaleX(0)';
    document.getElementById('section-grid_tablet_second').style.opacity = '1';
    document.getElementById('section-grid_tablet_second').style.transform = 'scaleX(1)';
    arrowSlideContainerRot.style.opacity = '1';
    arrowSlideContainer.style.opacity = '0';
})

arrowSlideContainerRot.addEventListener('click', function(){
    document.getElementById('section-grid_tablet_second').style.opacity = '0';
    document.getElementById('section-grid_tablet_second').style.transform = 'scaleX(0)';
    document.getElementById('section-grid_tablet_first').style.opacity = '1';
    document.getElementById('section-grid_tablet_first').style.transform = 'scaleX(1)';
    arrowSlideContainerRot.style.opacity = '0';
    arrowSlideContainer.style.opacity = '1';
})

// table slide

var rightClickArrowRight = 0;
document.getElementById('arrow-slide_m').addEventListener('click', function(){
    rightClickArrowRight++;
    if (rightClickArrowRight%2 == 1){
        document.getElementById('section-grid_mobile_first').style.opacity = '0';
        document.getElementById('section-grid_mobile_first').style.transform = 'scaleX(0)';
        document.getElementById('section-grid_mobile_second').style.opacity = '1';
        document.getElementById('section-grid_mobile_second').style.transform = 'scaleX(1)';
        document.getElementById('arrow-slide-rot_m').style.opacity = '1';
        document.getElementById('arrow-slide-rot_m').style.zIndex = '888';
    } 
    if (rightClickArrowRight%2 == 0){
        document.getElementById('section-grid_mobile_second').style.opacity = '0';
        document.getElementById('section-grid_mobile_second').style.transform = 'scaleX(0)';
        document.getElementById('section-grid_mobile_third').style.opacity = '1';
        document.getElementById('section-grid_mobile_third').style.transform = 'scaleX(1)';
        document.getElementById('arrow-slide_m').style.opacity = '0';
        document.getElementById('arrow-slide_m').style.zIndex = '-15';
    }
})

document.getElementById('arrow-slide-rot_m').addEventListener('click', function(){
    if (document.getElementById('section-grid_mobile_second').style.opacity == '1'){
        document.getElementById('section-grid_mobile_first').style.opacity = '1';
        document.getElementById('section-grid_mobile_first').style.transform = 'scaleX(1)';
        document.getElementById('section-grid_mobile_second').style.opacity = '0';
        document.getElementById('section-grid_mobile_second').style.transform = 'scaleX(0)';
        document.getElementById('arrow-slide-rot_m').style.opacity = '0';
        document.getElementById('arrow-slide-rot_m').style.zIndex = '-15';
        rightClickArrowRight = 0;
    }
    if (document.getElementById('section-grid_mobile_third').style.opacity == '1'){
        document.getElementById('section-grid_mobile_second').style.opacity = '1';
        document.getElementById('section-grid_mobile_second').style.transform = 'scaleX(1)';
        document.getElementById('section-grid_mobile_third').style.opacity = '0';
        document.getElementById('section-grid_mobile_third').style.transform = 'scaleX(0)';
        document.getElementById('arrow-slide-rot_m').style.opacity = '1';
        document.getElementById('arrow-slide_m').style.opacity = '1 ';
        document.getElementById('arrow-slide_m').style.zIndex = '888';
        document.getElementById('arrow-slide-rot_m').style.zIndex = '888';
        rightClickArrowRight = 1;
    }
})

// mobile slide

var rightClickArrowRightPhone = 0;
document.getElementById('arrow-slide_ph').addEventListener('click', function(){
    rightClickArrowRightPhone++;
    if (rightClickArrowRightPhone%3 == 1){
        document.getElementById('section-grid_phone_first').style.opacity = '0';
        document.getElementById('section-grid_phone_first').style.transform = 'scaleX(0)';
        document.getElementById('section-grid_phone_second').style.opacity = '1';
        document.getElementById('section-grid_phone_second').style.transform = 'scaleX(1)';
        document.getElementById('arrow-slide-rot_ph').style.opacity = '1';
        document.getElementById('arrow-slide-rot_ph').style.zIndex = '888';
    } 
    if (rightClickArrowRightPhone%3 == 2){
        document.getElementById('section-grid_phone_second').style.opacity = '0';
        document.getElementById('section-grid_phone_second').style.transform = 'scaleX(0)';
        document.getElementById('section-grid_phone_third').style.opacity = '1';
        document.getElementById('section-grid_phone_third').style.transform = 'scaleX(1)';
    }
    if (rightClickArrowRightPhone%3 == 0){
        document.getElementById('section-grid_phone_third').style.opacity = '0';
        document.getElementById('section-grid_phone_third').style.transform = 'scaleX(0)';
        document.getElementById('section-grid_phone_fourth').style.opacity = '1';
        document.getElementById('section-grid_phone_fourth').style.transform = 'scaleX(1)';
        document.getElementById('arrow-slide_ph').style.opacity = '0';
        document.getElementById('arrow-slide_ph').style.zIndex = '-15';
    }
})

document.getElementById('arrow-slide-rot_ph').addEventListener('click', function(){
    if (document.getElementById('section-grid_phone_second').style.opacity == '1'){
        document.getElementById('section-grid_phone_first').style.opacity = '1';
        document.getElementById('section-grid_phone_first').style.transform = 'scaleX(1)';
        document.getElementById('section-grid_phone_second').style.opacity = '0';
        document.getElementById('section-grid_phone_second').style.transform = 'scaleX(0)';
        document.getElementById('arrow-slide-rot_ph').style.opacity = '0';
        document.getElementById('arrow-slide-rot_ph').style.zIndex = '-15';
        rightClickArrowRightPhone = 0;
    }
    if (document.getElementById('section-grid_phone_third').style.opacity == '1'){
        document.getElementById('section-grid_phone_second').style.opacity = '1';
        document.getElementById('section-grid_phone_second').style.transform = 'scaleX(1)';
        document.getElementById('section-grid_phone_third').style.opacity = '0';
        document.getElementById('section-grid_phone_third').style.transform = 'scaleX(0)';
        document.getElementById('arrow-slide-rot_ph').style.opacity = '1';
        document.getElementById('arrow-slide_ph').style.opacity = '1 ';
        document.getElementById('arrow-slide_ph').style.zIndex = '888';
        document.getElementById('arrow-slide-rot_ph').style.zIndex = '888';
        rightClickArrowRightPhone = 1;
    }
    if (document.getElementById('section-grid_phone_fourth').style.opacity == '1'){
        document.getElementById('section-grid_phone_third').style.opacity = '1';
        document.getElementById('section-grid_phone_third').style.transform = 'scaleX(1)';
        document.getElementById('section-grid_phone_fourth').style.opacity = '0';
        document.getElementById('section-grid_phone_fourth').style.transform = 'scaleX(0)';
        document.getElementById('arrow-slide-rot_ph').style.opacity = '1';
        document.getElementById('arrow-slide_ph').style.opacity = '1 ';
        document.getElementById('arrow-slide_ph').style.zIndex = '888';
        document.getElementById('arrow-slide-rot_ph').style.zIndex = '888';
        rightClickArrowRightPhone = 2;
    }
})

// client desktop

document.getElementById('arrow-slide-client-d').addEventListener('click', function(){
    document.getElementById('first-container').style.opacity = '0';
    document.getElementById('first-container').style.transform = 'scaleX(0)';
    document.getElementById('second-container').style.opacity = '1';
    document.getElementById('second-container').style.transform = 'scaleX(1)';
    document.getElementById('arrow-slide-rot-client-d').style.opacity = '1';
    document.getElementById('arrow-slide-client-d').style.opacity = '0';
})

document.getElementById('arrow-slide-rot-client-d').addEventListener('click', function(){
    document.getElementById('second-container').style.opacity = '0';
    document.getElementById('second-container').style.transform = 'scaleX(0)';
    document.getElementById('first-container').style.opacity = '1';
    document.getElementById('first-container').style.transform = 'scaleX(1)';
    document.getElementById('arrow-slide-rot-client-d').style.opacity = '0';
    document.getElementById('arrow-slide-client-d').style.opacity = '1';
})

// client tablet

document.getElementById('arrow-slide-client-t').addEventListener('click', function(){
    document.getElementById('clients-tablet-first').style.opacity = '0';
    document.getElementById('clients-tablet-first').style.transform = 'scaleX(0)';
    document.getElementById('clients-tablet-second').style.opacity = '1';
    document.getElementById('clients-tablet-second').style.transform = 'scaleX(1)';
    document.getElementById('arrow-slide-rot-client-t').style.opacity = '1';
    document.getElementById('arrow-slide-client-t').style.opacity = '0';
})

document.getElementById('arrow-slide-rot-client-t').addEventListener('click', function(){
    document.getElementById('clients-tablet-second').style.opacity = '0';
    document.getElementById('clients-tablet-second').style.transform = 'scaleX(0)';
    document.getElementById('clients-tablet-first').style.opacity = '1';
    document.getElementById('clients-tablet-first').style.transform = 'scaleX(1)';
    document.getElementById('arrow-slide-rot-client-t').style.opacity = '0';
    document.getElementById('arrow-slide-client-t').style.opacity = '1';
})

// client mobile

var rightClickClientMobile = 0;
document.getElementById('arrow-slide-client-m').addEventListener('click', function(){
    rightClickClientMobile++;
    if (rightClickClientMobile%2 == 1){
        document.getElementById('clients-mobile-first').style.opacity = '0';
        document.getElementById('clients-mobile-first').style.transform = 'scaleX(0)';
        document.getElementById('clients-mobile-second').style.opacity = '1';
        document.getElementById('clients-mobile-second').style.transform = 'scaleX(1)';
        document.getElementById('arrow-slide-rot-client-m').style.opacity = '1';
        document.getElementById('arrow-slide-rot-client-m').style.zIndex = '888';
    } 
    if (rightClickClientMobile%2 == 0){
        document.getElementById('clients-mobile-second').style.opacity = '0';
        document.getElementById('clients-mobile-second').style.transform = 'scaleX(0)';
        document.getElementById('clients-mobile-third').style.opacity = '1';
        document.getElementById('clients-mobile-third').style.transform = 'scaleX(1)';
        document.getElementById('arrow-slide-client-m').style.opacity = '0';
        document.getElementById('arrow-slide-client-m').style.zIndex = '-15';
    }
})

document.getElementById('arrow-slide-rot-client-m').addEventListener('click', function(){
    if (document.getElementById('clients-mobile-second').style.opacity == '1'){
        document.getElementById('clients-mobile-first').style.opacity = '1';
        document.getElementById('clients-mobile-first').style.transform = 'scaleX(1)';
        document.getElementById('clients-mobile-second').style.opacity = '0';
        document.getElementById('clients-mobile-second').style.transform = 'scaleX(0)';
        document.getElementById('arrow-slide-rot-client-m').style.opacity = '0';
        document.getElementById('arrow-slide-rot-client-m').style.zIndex = '-15';
        rightClickClientMobile = 0;
    }
    if (document.getElementById('clients-mobile-third').style.opacity == '1'){
        document.getElementById('clients-mobile-second').style.opacity = '1';
        document.getElementById('clients-mobile-second').style.transform = 'scaleX(1)';
        document.getElementById('clients-mobile-third').style.opacity = '0';
        document.getElementById('clients-mobile-third').style.transform = 'scaleX(0)';
        document.getElementById('arrow-slide-rot-client-m').style.opacity = '1';
        document.getElementById('arrow-slide-client-m').style.opacity = '1 ';
        document.getElementById('arrow-slide-client-m').style.zIndex = '888';
        document.getElementById('arrow-slide-rot-client-m').style.zIndex = '888';
        rightClickClientMobile = 1;
    }
})
