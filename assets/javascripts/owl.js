/**
 * Created by andre_000 on 18/08/2015.
 */
$(function() {
    if ($(".promo-block .owl-carousel").length) {
        $(".promo-block .owl-carousel").owlCarousel({
            center: true,
            items: 3,
            loop: true,
            margin: 10,
            nav: true
        });
    }
});