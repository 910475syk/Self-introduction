$(document).ready(function () {
    //

    // scroll
    $(window).scroll(function () {
        let scrollTop = $(document).scrollTop();
        let about_height = $('.about').offset().top - $('.about').height() / 2;
        let brand_height = $('#brand').offset().top - $('#brand').height() / 2;
        let services_height = $('#personality').offset().top - $('#personality').height() * 2;

        if (scrollTop > about_height) {
            $('.about').addClass('enter_anime_after');
        }
        if (scrollTop > brand_height) {
            $('#brand').addClass('enter_anime_after');
        }
        if (scrollTop > services_height) {
            $('#personality').addClass('enter_anime_after');
        }
    })
    $('a[href^=\\#]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });

    // banner word
    ityped.init(document.querySelector("#ityped"), {
        showCursor: false,
        backDelay: 2500,
        strings: ['前端工程師志願', '期待與您合作']
    })

    // btn
    $('.btn').hover(function () {
        $(this).toggleClass('penetrate');
    })

    // brand
    $('.brand_flex .card').on('mouseenter', function () {
        $(this).find('.brand_bg').fadeIn();
        $(this).find('.brand_name').addClass('hover')
        $(this).find('.text').addClass('hoverTextColor')
    });

    $('.brand_flex .card').on('mouseleave', function () {
        $(this).find('.brand_bg').fadeOut();
        $(this).find('.brand_name').removeClass('hover')
        $(this).find('.text').removeClass('hoverTextColor')
    });

    // slick
    $('.slick').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        adaptiveHeight: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    // popup
    // $('.brandListBtn').click(function () {
    //     $('.popupBg').fadeIn();
    // });

    // $('.popup').on('click', function (event) {
    //     event.stopPropagation();
    // })

    // $('.popup .popup_closeBtn').click(function () {
    //     $('.popupBg').fadeOut();
    // })

    // $('.popupBg').on('click', function () {
    //     $('.popupBg').fadeOut();
    // })


    //
})

$(window).on('load', function () {
    $('#header').addClass('enter_anime_after');
    $('.banner').addClass('enter_anime_after');
})