$(window).bind('scroll', function() {
        var navHeight = $(window).height() - 50;

        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default .navbar-nav > li > a').addClass('warna-navbar');
            $('.navbar-default').addClass('background-navbar');
            $('.navbar-default .navbar-brand').css('color', '#000');
            $(".ada").show(100);

        } else {
            $('.navbar-default .navbar-nav > li > a').removeClass('warna-navbar');
            $('.navbar-default').removeClass('background-navbar');
            $('.navbar-default .navbar-brand').css('color', '#fff');
            $(".ada").hide(100); 

        }

    });
$(window).ready(function(){
            var navHeight = $(window).height() - 50;
        if ($(window).scrollTop() > navHeight) {
            $(".ada").show();

        } else {
            $(".ada").hide();           
        }   
    });

