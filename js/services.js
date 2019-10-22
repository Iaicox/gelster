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
// arrowLeft.addEventListener('click', function(){
//     console.log(slideItems[5]);
//     if(slideItems[4].style.display == 'none'){
//         for(i = 0; i < slideItems.length; i++){
//             slideItems[i].style.display = 'none';
//         }
//         for(i = 4; i < 8; i++){
//             slideItems[i].style.display = 'block';
//         }
//     }
// });

// arrowRight.addEventListener('click', function(){
//     if(slideItems[1].style.display == 'none'){
//         for(i = 0; i < 6; i++){
//             slideItems[i].style.display = 'block';
//         }
//         for(i = 6; i < slideItems.length; i++){
//             slideItems[i].style.display = 'none';
//         }
//     } else {
//         for(i = 0; i < 6; i++){
//             slideItems[i].style.display = 'none';
//         }
//         for(i = 6; i < slideItems.length; i++){
//             slideItems[i].style.display = 'block';
//         }
//     }
// });


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

