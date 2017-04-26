$(document).ready(function(){
    $(".header-nav a").on("click", function(event) {
        event.preventDefault();
        var id  = $(this).attr('href');

        var top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$('.popup-btn').click(function () {
    $('.popup-wrap').fadeIn(1000);
});

$('.popup-close').click(function () {
    $('.popup-wrap').fadeOut(1000);
});

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
});



$(window).scroll(function() {
    if ($(this).scrollTop() > 488){
        $('.header').addClass("sticky");
    }
    else{
        $('.header').removeClass("sticky");
    }
});
