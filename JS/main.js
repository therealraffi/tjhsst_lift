$(document).ready(function () {
    $(".navbar-toggler-icon").click(function () {
        $(".navbar").addClass("navbar-solid")
    })
    $(window).scroll(function () {
        var pos = $(document).scrollTop();
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        if (pos >= 1) { // change logo color on hover
            $(".navbar").addClass("navbar-solid")

        } else if(($( window ).width() < 768 && $(".navbar-collapse").is(":visible") == false) || ($( window ).width() > 768 && $(".navbar-collapse").is(":visible"))){

            $(".navbar").removeClass("navbar-solid")

        }

        ////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////

    }).scroll();
})