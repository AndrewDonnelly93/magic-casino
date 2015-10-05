/**
 * Created by andre_000 on 27/08/2015.
 */
$(function() {
    if ($(".popup.out-of-game .game-list").length) {
        $(".popup.out-of-game .game-list").bxSlider({
            slideWidth: 202,
            slideMargin: 20,
            pager: false,
            minSlides: 3,
            maxSlides: 3,
            infiniteLoop: true,
            moveSlides: 1
        });
    }
    if ($(".popup.select-game .game-list").length) {
        $(".popup.select-game .game-list").bxSlider({
            slideWidth: 202,
            slideMargin: 20,
            pager: false,
            minSlides: 3,
            maxSlides: 3,
            infiniteLoop: true,
            moveSlides: 1
        });
    }
});
