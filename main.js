
$(window).scroll(function() {
    var st = $(this).scrollTop();
    $('.banner__img').css({
        'transform' : 'translate(0%, -' + st /3 + 'px'
    });
    $('text').css({
        'transform' : 'translate(0%, ' + st /3 + 'px'
    });
});