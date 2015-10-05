function setInfo(className) {
    if ($(className).hasClass("not-confirmed")) {
        $(className).find(".add").hide();
        $(className).find(".confirmed").hide();
    } else if ($(className).hasClass("confirmed")) {
        $(className).find(".confirm-link").hide();
        $(className).find(".add").hide();
    } else if ($(className).hasClass("not-set")) {
        $(className).find(".confirm-link").hide();
        $(className).find(".confirmed").hide();
        $(className).find(".contact-data").hide();
    }
}

function openCabinetSection() {
    var defaultPanel = $(".tab.active").attr("href");
    $(".cabinet-section").removeClass("active");
    $(defaultPanel).addClass("active");
    $(document).on("click", ".tab", function (e) {
        $(".tab").removeClass("active");
        $(".cabinet-section").removeClass("active");
        $(this).addClass("active");
        var panel = $(this).attr("href");
        $(panel).addClass("active");
        e.preventDefault();
    });
}

function openForms() {

    $(document).on("click", ".phone .add", function (e) {
        $(".enter-phone").addClass("active");
        $(".phone").addClass("open-form");
        e.preventDefault();
    });

    $(document).on("click", ".change-password-btn", function (e) {
        $(this).hide();
        $(this).siblings(".change-password-form").addClass("active");
        $(".account-status").hide();
        e.preventDefault();
    });
}

function slimScrollInitialise(className) {
    var $box = $(className);
    $box.mCustomScrollbar({
        scrollbarPosition: "inside",
        theme: "minimal",
        advanced:{
            updateOnContentResize: true
        }
    });
}

$(function() {
  /* if ($(".contact-line").length) {
       $(".contact-line").each(function() {
          setInfo(this);
       });
   }*/
    if ($(".birth-date").length) {
        $(".birth-date").fancySelect();
        $(".birth-date").parent(".fancy-select").addClass("birth-date");
        if ($("#birth-date-day").length) {
            $("#birth-date-day").parent(".fancy-select").addClass("birth-date-day");
        }
        if ($("#birth-date-month").length) {
            $("#birth-date-month").parent(".fancy-select").addClass("birth-date-month");
        }
        if ($("#birth-date-year").length) {
            $("#birth-date-year").parent(".fancy-select").addClass("birth-date-year");
        }

        $(".fancy-select").on("click", function() {
            if ($("ul.options").hasClass("open")) {
                $("ul.options").removeClass("open");
            }
            $(this).find("ul.options").addClass("open");
        });

        if ($(".options").length) {
            slimScrollInitialise(".options");
        }
    }
    openForms();
    openCabinetSection();
});
