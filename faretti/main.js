
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
  


  $('.diploms__list').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin:30,
    nav: true,
    navContainer: '.diploms__nav',
    navText: ['<svg viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 18.731l-9-9 9-9" stroke="#3E3E3E" stroke-width="2"/></svg>','<svg viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 18.731l9-9-9-9" stroke="#3E3E3E" stroke-width="2"/></svg>'],
    dots:false,
    loop:true,
    autoWidth: false,
    autoplay:false,
    autoplayTimeout:5000, 
    responsive:{ 
        0:{
            items:1
        },
        767:{
            items:2
        },
        1024:{
            items:3
        },
        1280:{
            items:3
        }
    }
  });
  