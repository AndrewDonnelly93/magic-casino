$(document).on("click", ".main-menu-list>li", function (e) {
    $(".main-menu-list>li").removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
});

$(document).on("click", ".game-category-list>li", function (e) {
    $(".game-category-list>li").removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
});

$(".languages").on("click", function () {
    $(this).toggleClass("active");
    $(".selected-lang-list").slideToggle(300);
});

$(document).on("click", ".casino-description .blue-arrow", function (e) {
    $(".casino-description .text-container").slideToggle(300);
    e.preventDefault();
});

$(function() {
   if ($(".selected-lang-list").length) {
       $(".selected-lang-list").hide();
   };
    // CarouFredsel initialise

    $(function () {
        if ($(".slider").length) {
            $(".slider").carouFredSel({
                responsive: true,
                items: {
                    visible: 1,
                    width: 1900
                },
                scroll: {
                    fx: "crossfade",
                    duration: 1000,
                    timeoutDuration: 3000
                },
                auto: {
                    delay: 3000
                },
                align: "center",
                pagination: ".pagination"
            });
            $(".slider .slider-ref").hover(
                function () {
                    $(".slider").trigger("stop");
                },
                function () {
                    $(".slider").trigger("play", true);
                }
            );
        }
    });

    if ($(".casino-description .text-container").length) {
        $(".casino-description .text-container").hide();

    }

    if ($(".tourney-games-list").length) {
        $(".tourney-games-list").each(function() {
            $this = $(this);
            var TourneyGamesCount =  $this.children().length;
            if (TourneyGamesCount > 10) {
                var tournamentMarquee =  $this.marquee({
                    duration: 15000,
                    gap: 0,
                    delayBeforeStart: 0,
                    direction: "up",
                    duplicated: true
                });
                $this.on({
                    mouseenter: function () {
                        tournamentMarquee.marquee("pause");
                    },
                    mouseleave: function () {
                        tournamentMarquee.marquee("resume");
                    },
                    mousewheel: function ( e, delta ){
                        this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
                        e.preventDefault();
                    }
                });
            }
        });
    }

        if ($(":input[placeholder]").length) {
            $(":input[placeholder]").placeholder();
        }

    if ($(".content.tourney .game-list").length) {
        $(".content.tourney .game-list").bxSlider({
            slideWidth: 202,
            slideMargin: 19,
            pager: false,
            minSlides: 5,
            maxSlides: 5,
            infiniteLoop: true,
            moveSlides: 1
        });
    }
});

function addActiveToPayment() {
    $(document).on("click",".payment-systems>li",function(e) {
        e.preventDefault();
        $(".payment-systems>li").removeClass("active");
        $(this).addClass("active");
    });
}

function openPaymentInfo() {
    $("a.background-logo").click(function (evt) {
        evt.preventDefault();
        $(".payment-info").hide();
        $this = $(this);
        var panel = $this.attr("href");
        $(panel).show();
    });
}

$(function() {
    if ($(".payment-systems").length) {
        addActiveToPayment();
    }
    if ($(".payment-info").length) {
        $(".payment-info").hide();
        openPaymentInfo();
        $("#paysafe").show();
        $("li.payment:first-child").click();
    }
});

$(function() {
    if ($(".error-page .slider-game-list").length) {
        $(".error-page .slider-game-list").bxSlider({
            slideWidth: 202,
            slideMargin: 18,
            pager: false,
            minSlides: 4,
            maxSlides: 8,
            infiniteLoop: true,
            moveSlides: 1
        });
    }
});