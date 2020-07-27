$(document).ready(function () {
    $(".overview-tab").addClass("active-tab");
    $(".material").addClass("hidden");

    $(".tablink").click(function () {
        if ($(this).attr('class').indexOf("overview-tab") >= 0) {
            $(this).parent().parent().children('.overview').removeClass('hidden');
            $(this).parent().parent().children('.material').addClass('hidden');
            $(".tablink").removeClass('active-tab');
            $(this).addClass('active-tab');

        } else {
            // $(".material").removeClass('hidden');
            // $(".overview").addClass('hidden');
            $(this).parent().parent().children('.hidden').removeClass('hidden');
            $(this).parent().parent().children('.overview').addClass('hidden');
            $(".tablink").removeClass('active-tab');
            $(this).addClass('active-tab');
        }
    })



})