

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

$('.shelf__search').on('click', function(){
  $(this).toggleClass('shelf__search--active');
  $('.shelf__find').toggleClass('shelf__find--active');
});


$('.shelf__hamburger').on('click', function(){
  $('.mobile').addClass('mobile--active');
});

$('.mobile__close').on('click', function(){
  $('.mobile').removeClass('mobile--active');
});


$('.top__catalog').on('click', function(){
  $(this).toggleClass('top__catalog--active');
  $('.catalog').toggleClass('catalog--active');
  $('body').toggleClass('body--active');
});


$(function() {
  $(".catalog__wrapper").on("click", ".catalog__link:not(.catalog__link--active)", function() {
    $(this)
      .addClass("catalog__link--active")
      .siblings()
      .removeClass("catalog__link--active")
      .closest(".catalog__wrapper")
      .find(".catalog__item")
      .removeClass("catalog__item--active")
      .eq($(this).index())
      .addClass("catalog__item--active");
  });
});


$('.slider__main').owlCarousel({
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  margin:30,
  nav:true,
  navContainer: '.slider__navigation',
  navText: ['<svg viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1.168l-6 6 6 6" stroke="#552FEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>','<svg viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.168l6 6-6 6" stroke="#552FEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
  dots:true,
  dotsContainer: '.slider__dots',
  loop:true,
  autoWidth: false,
  autoplay:false,
  autoplayTimeout:5000, 
  responsive:{ 
      0:{
          items:1,
      },
      767:{
          items:1
      },
      1024:{
          items:1
      },
      1280:{
          items:1
      }
  }
});

$('.slider__offer').owlCarousel({
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  margin:30,
  nav:true,
  navContainer: '.slider__navigation--offer',
  navText: ['<svg viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1.168l-6 6 6 6" stroke="#552FEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>','<svg viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.168l6 6-6 6" stroke="#552FEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
  dots:true,
  dotsContainer: '.slider__dots--offer',
  loop:true,
  autoWidth: false,
  autoplay:false,
  autoplayTimeout:5000, 
  responsive:{ 
      0:{
          items:1,
      },
      767:{
          items:1
      },
      1024:{
          items:1
      },
      1280:{
          items:1
      }
  }
});

$('.popular__list').owlCarousel({
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  margin:30,
  nav:true,
  navContainer: '.popular__navigation',
  navText: ['<svg viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1.168l-6 6 6 6" stroke="#552FEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>','<svg viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.168l6 6-6 6" stroke="#552FEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
  dots:false,
  loop:false,
  autoWidth: true,
  autoplay:false,
  autoplayTimeout:5000, 
  responsive:{ 
      0:{
          items:2,
          autoWidth:false,
          margin: 0
      },
      767:{
          items:3
      },
      1024:{
          items:5
      },
      1280:{
          items:5
      }
  }
});

$('.hits__list').owlCarousel({
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  margin:30,
  nav:true,
  navContainer: '.hits__navigation',
  navText: ['<svg viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1.168l-6 6 6 6" stroke="#552FEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>','<svg viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.168l6 6-6 6" stroke="#552FEC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
  dots:false,
  loop:false,
  autoWidth: true,
  autoplay:false,
  autoplayTimeout:5000, 
  responsive:{ 
      0:{
          items:2,
          autoWidth:false,
          margin: 0
      },
      767:{
          items:3
      },
      1024:{
          items:5
      },
      1280:{
          items:5
      }
  }
});
