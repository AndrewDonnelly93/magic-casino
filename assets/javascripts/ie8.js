$(function() {
    if ($(".promo-block .owl-carousel").length) {
        $(".promo-block .owl-carousel").owlCarousel({
            center: false,
            singleItem: true,
            loop:true,
            margin:30,
            autoWidth:true,
            nav: true
        });
    }
    if ($(".game-mode").length) {
        var windowHeight = $(window).height();
        $(".game-mode").css({
            minHeight: windowHeight
        });
    }
});
