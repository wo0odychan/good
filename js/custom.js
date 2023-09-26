$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.Header').addClass('on')
            : $('.Header').removeClass('on');
    });
    $('.menu_bar').on('click', function () {
        $('.menu_bar').toggleClass('on');
        $('.FullMenu').toggleClass('on');
    })
})