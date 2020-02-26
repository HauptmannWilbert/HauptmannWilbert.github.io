
$(window).scroll(function() {
    var st = $(this).scrollTop();
    var width = $("html, body").outerWidth(true);
    $('.banner__img').css({
        'transform' : 'translate(0%, -' + st /3 + 'px'
    });
    $('text').css({
        'transform' : 'translate(0%, ' + st /3 + 'px'
    });
    if(width <= 767){
        $('.banner__img').css({
            'transform' : 'translate(0%, -' + st /0.6 + 'px'
        });
        $('text').css({
            'transform' : 'translate(0%, ' + st /0.6 + 'px'
        }); 
    }
});