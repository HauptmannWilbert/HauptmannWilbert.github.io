
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



$('#big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#thumbs',
    vertical: false,
    verticalSwiping: false,
    arrows: false,
    infinite: true,
    draggable: false,
    swipe: false,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          verticalSwiping: false,
          vertical: false
        }
      }
    ]
  });
  
  $('#thumbs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '#big',
    focusOnSelect: true,
    vertical: false,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
          verticalSwiping: false,
          vertical: false
        }
      }
    ]
  });
  