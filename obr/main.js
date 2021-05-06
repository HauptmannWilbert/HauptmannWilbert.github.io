

$(function() {
  $(".tabs__top").on("click", ".tabs__topic:not(.tabs__topic--active)", function() {
    $(this)
      .addClass("tabs__topic--active")
      .siblings()
      .removeClass("tabs__topic--active")
      .closest(".tabs")
      .find(".tabs__box")
      .removeClass("tabs__box--active")
      .eq($(this).index())
      .addClass("tabs__box--active");
  });
});


$(function() {
  $(".sidebar__list").on("click", ".sidebar__box:not(.sidebar__box--active)", function() {
    $(this)
      .addClass("sidebar__box--active")
      .siblings()
      .removeClass("sidebar__box--active")
      .closest(".sidebar")
      .find(".sidebar__item")
      .removeClass("sidebar__item--active")
      .eq($(this).index())
      .addClass("sidebar__item--active");
  });
});



function openMenu(){
  $('.top__hamburger').addClass('top__hamburger--active'),
  $('body').addClass('overflow--active'),
  $('.page').addClass('overflow--active'),
  $('.sidebar').addClass('sidebar--active');
};

function closeMenu(){
  $('.top__hamburger').removeClass('top__hamburger--active'),
  $('body').removeClass('overflow--active'),
  $('.page').removeClass('overflow--active'),
  $('.sidebar').removeClass('sidebar--active');
  $('.sidebar__box').removeClass('sidebar__box--active');
  $('.sidebar__item').removeClass('sidebar__item--active');
};

$('.top__hamburger').on('click', function(){
  if( !$(this).hasClass('top__hamburger--active') ){ openMenu(); } 
else { closeMenu(); }
});

$('.sidebar__close').on('click', function(){
  $('.sidebar__item').removeClass("sidebar__item--active");
  $('.sidebar__box').removeClass("sidebar__box--active");
});




$('.slider__list').owlCarousel({
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  margin:20,
  nav:true,
  dots:true,
  dotsContainer:'.slider__dots',
  navContainer:'.slider__navigation',
  navText: ['<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.213 16L19 24l7.213 8L28 30.018 22.574 24 28 17.982 26.213 16z"/></svg>','<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.787 16L28 24l-7.213 8L19 30.018 24.426 24 19 17.982 20.787 16z"/></svg>'],
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

$('.programms__list').owlCarousel({
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  margin: 5,
  nav:true,
  dots:false,
  navContainer:'.programms__navigation',
  navText: ['<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.213 16L19 24l7.213 8L28 30.018 22.574 24 28 17.982 26.213 16z"/></svg>','<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.787 16L28 24l-7.213 8L19 30.018 24.426 24 19 17.982 20.787 16z"/></svg>'],
  loop:true,
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
          items:3
      },
      1380:{
          items:4
      }
  }
});


$('.projects__list').owlCarousel({
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  margin:5,
  nav:true,
  dots:false,
  navContainer:'.projects__navigation',
  navText: ['<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.213 16L19 24l7.213 8L28 30.018 22.574 24 28 17.982 26.213 16z"/></svg>','<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.787 16L28 24l-7.213 8L19 30.018 24.426 24 19 17.982 20.787 16z"/></svg>'],
  loop:true,
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
          items:3
      },
      1480:{
          items:4
      }
  }
});

$('.news__list').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin:30,
    nav:true,
    dots:false,
    navContainer:'.news__navigation',
    navText: ['<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.213 16L19 24l7.213 8L28 30.018 22.574 24 28 17.982 26.213 16z"/></svg>','<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.787 16L28 24l-7.213 8L19 30.018 24.426 24 19 17.982 20.787 16z"/></svg>'],
    loop:true,
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
            items:3
        },
        1480:{
            items:4
        }
    }
  });



  ymaps.ready(init);

  function init () {
    var myMap = new ymaps.Map("map", {
            center: [56.852091, 35.913621],
            zoom: 16,
			controls: ['zoomControl']
        });

	myPlacemark = new ymaps.Placemark([56.852091, 35.913621], {

	}, {
			iconLayout: 'default#image',
			iconImageHref: './images/map.svg',
			iconImageSize: [65, 65],
			iconImageOffset: [ -50, -40]
        });

 myMap.geoObjects.add(myPlacemark);

}