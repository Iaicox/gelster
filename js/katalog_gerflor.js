var mobileVersion = document.documentElement.clientWidth;
if (mobileVersion < 600) {
    $(function(){
        $('.container_item').on('click', function(e){
            e.preventDefault;
            $(this).toggleClass('container_item_act');
            $(this).find('.arrow-open-container').toggleClass('arrow-open-container_act');
        })
    })
}
