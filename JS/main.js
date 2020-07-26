$(document).ready(function(){
    $(window).scroll(function(){
        var pos = $(document).scrollTop();
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        if(pos>=5){ // change logo color on hover
            $(".navbar").addClass("navbar-solid")

        }
        else{
            $(".navbar").removeClass("navbar-solid")

        }

       ////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////
        
    }).scroll();
})