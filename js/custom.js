$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.Header').addClass('on')
            : $('.Header').removeClass('on');
    });
    $('.menu_bar').on('click', function () {
        $('.menu_bar').addClass('on');
        $('.FullMenu').toggleClass('on');
    });

    const TabSlide = new Swiper('.tab_slide', {
        loop: false,
        autoplay: false,
        on: {
            slideChangeTransitionStart: function () {
                $('.tab_menu li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on');

            }

        }
    });
    $('.tab_menu li').on('click', function () {
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        TabSlide.slideTo(idx);
    });
})