$(function () {
    var currentPageUrl = window.location.href;

    $('.gnav ul li').each(function () {

        var linkUrl = $(this).find('a').attr('href');
        // console.log(currentPageUrl);

        if (currentPageUrl.slice(-1) == '/') {
            $('.gnav ul li:first-child').addClass('active')
        }
        if (currentPageUrl.indexOf(linkUrl) !== -1) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });


    $('.menu-ico').on('click', function () {
        $(this).toggleClass('active');
        $('.gnav').toggleClass('is-show');
    });
});
