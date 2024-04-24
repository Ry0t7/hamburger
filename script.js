$(document).ready(function (){
    var $nav = $('#navArea');
    var $btn = $('.toggle-btn');
    var $mask = $('#mask');
    var openClass = 'open';

    $btn.on('click', function (){
        $nav.toggleClass(openClass);
    })

    $mask.on('click', function (){
        $nav.removeClass(openClass);
    })

    $('a[href^="#"]').on('click', function (){
        var speed = 400;
        var href = $(this).attr("href");
        var $target = $(href === "#" || href === "" ? 'html' : href);
        var position = $target.offset().top;
        $('body,html').animate({ scrollTop: position}, speed, 'swing');

        $nav.removeClass(openClass);

        return false;

    })
})