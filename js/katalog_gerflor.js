var mobileVersion = document.documentElement.clientWidth;
if (mobileVersion < 425) {
    let containerItem = document.getElementsByClassName('container_item');
    let arrayContainerItem = [];
    let containerNumber = 0;

    let listItem = document.getElementsByClassName('list');
    
    window.onload = function(){
            for (var i = 0; i < containerItem.length; i++) {
                arrayContainerItem.push(containerItem[i]);
                containerItem[i].addEventListener('click', function(e) {
                containerNumber = arrayContainerItem.indexOf(e.target);
                listItem[containerNumber].style.height = 'auto';
                containerItem[containerNumber].style.height = 'auto';
                containerItem[containerNumber].style.overflow = 'auto';
            })
            // console.log(listItem[3]);
        }
    }
    
    function openMenuList() {
        for (var i = 0; i < containerItem.length; i++) {
            arrayContainerItem.push(containerItem[i]);
            containerItem[i].addEventListener('click', function(e) {
            containerNumber = arrayContainerItem.indexOf(e.target);
            listItem[containerNumber].style.height = 'auto';
            containerItem[containerNumber].style.height = 'auto';
            containerItem[containerNumber].style.overflow = 'auto';
        })
    }
}
    
    function closeArticleVideo() {
        for (var i = 0; i < videoToClose.length; i++) {
            videoToClose[i].style.visibility = 'hidden';
            videoToClose[i].style.zIndex = '-1';
            videoToClose[i].style.opacity = '0';
        }
    }
}