$(function () {
    $(".header").load(
        'header.html'
    );
    var height = $(".header").height();
    changeBg();
    $(window).scroll(function () {
        changeBg();
    })
    function changeBg() {
        var windowWidth = $(window).width();
        if ($(window).scrollTop() >= height) {
            $('.header').css({
                'background': '#FFFFFF',
            });
            $('.header .header-logo img').attr('src', './img/common/ico_logo_blue.png');
            $('.header nav ul a').css({
                'color': 'black',
            });
        } else {
            // if (windowWidth < 767.9) {
            $('.header').css('background', 'transparent');
            $('.header nav ul a').css({
                'color': 'white',
            });
            $('.header .header-logo img').attr('src', './img/common/logo.png');
            // }
        }
    }


})