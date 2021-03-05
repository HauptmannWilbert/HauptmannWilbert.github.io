
$('.top__hamburger').on('click', function(){
    $(this).toggleClass('top__hamburger--active');
    slideout.toggle();
});

var slideout = new Slideout({
    'panel': document.getElementById('page'),
    'menu': document.getElementById('mobile--menu'),
    'padding': 256,
    'tolerance': 70,
    'side': 'left',
    'touch' : false
  });


$(window).scroll(function() {
    var scroll = $(top).scrollTop(),
    ingridientsTop = $('.ingridients').offset().top,
    bannerHeigt = $('.banner').outerHeight(),
    directionHeigt = $('.direction').outerHeight(),
    aboutHeigt = $('.about').outerHeight(),
    techHeigt = $('.tech').outerHeight(),
    plusHeigt = $('.plus').outerHeight(),
    decidion = bannerHeigt + directionHeigt + aboutHeigt + techHeigt + plusHeigt;

    if ( scroll >= ingridientsTop ){

        $('.ingridients__bg').css({
            'transform' : 'translate(0%, ' + (scroll - ingridientsTop)/3 + 'px'
        });
   }
});


$(function() {
    var top = $(".top");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            top.addClass("top--active");
        } else {
            top.removeClass("top--active");
        }
    });
  });

  $(function() {
    var top = $(".top").outerHeight(true);
    $(".top__link").click(function() {
        $("html").animate({
           scrollTop: $($(this).attr("href")).offset().top - top
        }, {
           duration: 500,
           easing: "swing"
        });
        return false;
     });

});



$('.ingridients__list').owlCarousel({
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  margin:40,
  nav:true,
  navContainer:'.ingridients__navigation',
  navText: ['<svg viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 16.6L8.66 18 0 9l8.66-9L10 1.4 2.65 9 10 16.6z" fill="#000"/></svg>','<svg viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.4L1.34 0 10 9l-8.66 9L0 16.6 7.35 9 0 1.4z" fill="#000"/></svg>'],
  dots:true,
  dotsContainer:'.ingridients__dots',
  loop:false,
  autoWidth: false,
  autoplay:false,
  autoplayTimeout:5000, 
  responsive:{ 
      0:{
          items:1,
      },
      767:{
          items:2
      },
      1024:{
          items:2
      },
      1379:{
          items:3
      }
  }
});
