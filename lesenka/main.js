


function openMenu(){
    $('.header__hamburger').addClass('header__hamburger--active'),
    $('body').addClass('body--active');
    $('.mobile').addClass('mobile--active');
};

function closeMenu(){
    $('.header__hamburger').removeClass('header__hamburger--active'),
    $('body').removeClass('body--active');
    $('.mobile').removeClass('mobile--active');
};

$('.header__hamburger').on('click', function(){
    if( !$(this).hasClass('header__hamburger--active') ){ openMenu(); } 
	else { closeMenu(); }
});

$(".my-rating").starRating({
    initialRating: 4,
    emptyColor: '#D6DBE0',
    strokeColor: '#FBAD3F',
    activeColor: '#FBAD3F',
    hoverColor: '#F9670F',
    useGradient: false,
    starSize: 14
  });

  $( ".top__city" ).click(function() {
    $(".city").toggleClass('city--active');
});
$(".city__answer").click(function(){
    $(".city").removeClass('city--active');
});



$('.header__catalog').on('click', function(){
    $(this).toggleClass('header__catalog--active');
    $('.manual').toggleClass('manual--active');
    $('body').toggleClass('body--active');
});


$(function() {
    $(".manual__wrapper").on("mouseover", ".manual__link:not(.manual__link--active)", function() {
      $(this)
        .addClass("manual__link--active")
        .siblings()
        .removeClass("manual__link--active")
        .closest(".manual__wrapper")
        .find(".manual__item")
        .removeClass("manual__item--active")
        .eq($(this).index())
        .addClass("manual__item--active");
    });
  });

  $(function() {
    $(".tabs__top").on("click", ".tabs__tab:not(.tabs__tab--active)", function() {
      $(this)
        .addClass("tabs__tab--active")
        .siblings()
        .removeClass("tabs__tab--active")
        .closest(".tabs")
        .find(".tabs__box")
        .removeClass("tabs__box--active")
        .eq($(this).index())
        .addClass("tabs__box--active");
    });
  });




  $(function() {
    $(".zakaz__oplata__top").on("click", ".zakaz__oplata__box:not(.zakaz__oplata__box--active)", function() {
      $(this)
        .addClass("zakaz__oplata__box--active")
        .siblings()
        .removeClass("zakaz__oplata__box--active")
        .closest(".zakaz__oplata")
        .find(".zakaz__oplata__item")
        .removeClass("zakaz__oplata__item--active")
        .eq($(this).index())
        .addClass("zakaz__oplata__item--active");
    });
  });


  $(function() {
    $(".zakaz__get__top").on("click", ".zakaz__get__box:not(.zakaz__get__box--active)", function() {
      $(this)
        .addClass("zakaz__get__box--active")
        .siblings()
        .removeClass("zakaz__get__box--active")
        .closest(".zakaz__get")
        .find(".zakaz__get__item")
        .removeClass("zakaz__get__item--active")
        .eq($(this).index())
        .addClass("zakaz__get__item--active");
    });
  });

  $(function() {
    $(".zakaz__delivery").on("click", ".zakaz__delivery__box:not(.zakaz__delivery__box--active)", function() {
      $(this)
        .addClass("zakaz__delivery__box--active")
        .siblings()
        .removeClass("zakaz__delivery__box--active")
    });
  });


  $( ".basket__promokod__topic" ).click(function() {
    $(this).toggleClass('basket__promokod__topic--active');
    $('.basket__promokod__bottom').toggleClass('basket__promokod__bottom--active');
});


$(function() {
$('.slider__list').owlCarousel({
	animateIn: 'fadeIn',
	animateOut: 'fadeOut',
	margin:20,
	nav:false,
	dots:true,
	dotsContainer:'.slider__dots',
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
  
  $('.category__list').owlCarousel({
	animateIn: 'fadeIn',
	animateOut: 'fadeOut',
	margin:20,
	nav:true,
	navText:['<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m15 6-6 6 6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>','<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
	navContainer:'.category__nav',
	dots:false,
	loop:false,
	autoWidth: false,
	autoplay:false,
	autoplayTimeout:5000, 
	responsive:{ 
		0:{
			items:1,
		},
		767:{
			items:3
		},
		1100:{
			items:4
		},
		1379:{
			items:5
		}
	}
  });
  
  $('.review__list').owlCarousel({
	animateIn: 'fadeIn',
	animateOut: 'fadeOut',
	margin:20,
	nav:true,
	navText:['<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m15 6-6 6 6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>','<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
	navContainer:'.review__nav',
	dots:false,
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
		900:{
			items:3
		},
		1279:{
			items:4
		}
	}
  });




  
$('#big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#thumbs',
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: true,
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
    vertical: true,
    verticalSwiping: true,
    prevArrow: $('.card__prev'),
    nextArrow: $('.card__next'),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
          verticalSwiping: false,
          vertical: false
        }
      },
      {
        breakpoint: 370,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
          verticalSwiping: false,
          vertical: false
        }
      }
    ]
  });


});