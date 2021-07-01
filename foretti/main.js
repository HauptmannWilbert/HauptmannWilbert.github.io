
function openMenu(){
    $('.top__hamburger').addClass('top__hamburger--active'),
    $('body').addClass('body--active');
    $('.mobile').addClass('mobile--active');
};

function closeMenu(){
    $('.top__hamburger').removeClass('top__hamburger--active'),
    $('body').removeClass('body--active');
    $('.mobile').removeClass('mobile--active');
};

$('.top__hamburger').on('click', function(){
    if( !$(this).hasClass('top__hamburger--active') ){ openMenu(); } 
	else { closeMenu(); }
});