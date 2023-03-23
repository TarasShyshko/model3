
$(document).ready(function (){
    $('.burger_menu').click(function (event) {
        $('.burger_menu,.header_menu').toggleClass('active');
    });
    $('.slider').slick({
        arrows: true,
        adaptiveHeight: true,
        speed:4000,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode:true,
        slidesToShow:1,
        fade: true
    });

});