$('.hamburger').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('hamburger_active');
    $('.popup-menu').toggleClass('popup-menu_active');
    if($('.katalog-menu_m').hasClass('katalog-menu_m_active')){
        $('.katalog-menu_m').removeClass('katalog-menu_m_active');
        document.getElementById('popup-menu').style.opacity = '1';
        document.getElementById('popup-menu').style.zIndex = '99999';
    }
    if($('.company-menu_m').hasClass('company-menu_m_active')){
        $('.company-menu_m').removeClass('company-menu_m_active');
        document.getElementById('popup-menu').style.opacity = '1';
        document.getElementById('popup-menu').style.zIndex = '99999';
    }
});
// открытие меню каталог
$('#katalog').on('click', function(e){
    e.preventDefault;
    $('.katalog-menu').toggleClass('katalog-menu_active');
    $('.company-menu').removeClass('company-menu_active');
});

$('#katalog-menu_list').mouseleave(function(e){
    e.preventDefault;
    $('.katalog-menu').removeClass('katalog-menu_active');
});

$('#katalog-mobile').on('click', function(e){
    e.preventDefault;
    $('.katalog-menu_m').toggleClass('katalog-menu_m_active');
    document.getElementById('popup-menu').style.opacity = '0';
    document.getElementById('popup-menu').style.zIndex = '-1';
});
// конец
// с телефоном закртие
$('#arrow-back_katalog').on('click', function(e){
    e.preventDefault;
    $('.katalog-menu_m').removeClass('katalog-menu_m_active');
    document.getElementById('popup-menu').style.opacity = '1';
    document.getElementById('popup-menu').style.zIndex = '99999';
});
// конец
// открытие меню о компании
$('#company').on('click', function(e){
    e.preventDefault;
    $('.company-menu').toggleClass('company-menu_active');
    $('.katalog-menu').removeClass('katalog-menu_active');
});

$('#company-menu_list').mouseleave(function(e){
    e.preventDefault;
    $('.company-menu').removeClass('company-menu_active');
});

$('#company-mobile').on('click', function(e){
    e.preventDefault;
    $('.company-menu_m').toggleClass('company-menu_m_active');
    document.getElementById('popup-menu').style.opacity = '0';
    document.getElementById('popup-menu').style.zIndex = '-1';
});
// закрытие
// закртие его же
$('#arrow-back_company').on('click', function(e){
    e.preventDefault;
    $('.company-menu_m').removeClass('company-menu_m_active');
    document.getElementById('popup-menu').style.opacity = '1';
    document.getElementById('popup-menu').style.zIndex = '99999';
});
// конец
// скрипт для закртие меню при скроле
$(document).on('scroll', function () {
    if($('.katalog-menu').hasClass('katalog-menu_active')){
        $('.katalog-menu').removeClass('katalog-menu_active');
    }
});
$(document).on('scroll', function () {
    if($('.company-menu').hasClass('company-menu_active')){
        $('.company-menu').removeClass('company-menu_active');
    }
});

$('.zoom-container').on('click', function(e){
    e.preventDefault;
    $('.ya-site-form').toggleClass('ya-site-form_active');
});
