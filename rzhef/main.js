
$(function() {
    $(".sidebar__menu").on("click", ".sidebar__link:not(.sidebar__link--active)", function() {
      $(this)
        .addClass("sidebar__link--active")
        .siblings()
        .removeClass("sidebar__link--active")
        .closest(".sidebar")
        .find(".sidebar__item")
        .removeClass("sidebar__item--active")
        .eq($(this).index())
        .addClass("sidebar__item--active");
        $('.sidebar__wrapper').addClass('sidebar__wrapper--active');
        $('.sidebar__search').addClass('sidebar__search--active');
    });
  });

$('.sidebar__hamburger').on('click', function(){
    $('.sidebar__link').removeClass('sidebar__link--active');
    $('.sidebar__item').removeClass('sidebar__item--active');
    $('.sidebar__wrapper').removeClass('sidebar__wrapper--active');
    $('.sidebar__search').removeClass('sidebar__search--active');
    $('.sidebar__search--main').removeClass('sidebar__search--main--active');
});

$('.sidebar__search--icon').on('click', function(){
    $('.sidebar__search--main').addClass('sidebar__search--main--active');
    $('.sidebar__search').addClass('sidebar__search--active');
    $('.sidebar__wrapper').addClass('sidebar__wrapper--active');
});


$(function() {
    $(".catalog__tabs").on("click", ".catalog__tab:not(.catalog__tab--active)", function() {
      $(this)
        .addClass("catalog__tab--active")
        .siblings()
        .removeClass("catalog__tab--active")
        .closest(".catalog__wrapper")
        .find(".catalog__item")
        .removeClass("catalog__item--active")
        .eq($(this).index())
        .addClass("catalog__item--active");
    });
  });



  $(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".sidebar"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.sidebar__link').removeClass('sidebar__link--active');
            $('.sidebar__item').removeClass('sidebar__item--active');
            $('.sidebar__wrapper').removeClass('sidebar__wrapper--active');
            $('.sidebar__search').removeClass('sidebar__search--active');
            $('.sidebar__search--main').removeClass('sidebar__search--main--active');
        }
    });
}); 


$('.top__hamburger').on('click', function(){
    $(this).addClass('top__hamburger--active');
    $('.mobile').addClass('mobile--active');
});

$(function() {
    $(".mobile__menu").on("click", ".mobile__link:not(.mobile__link--active)", function() {
      $(this)
        .addClass("mobile__link--active")
        .siblings()
        .removeClass("mobile__link--active")
        .closest(".mobile")
        .find(".mobile__item")
        .removeClass("mobile__item--active")
        .eq($(this).index())
        .addClass("mobile__item--active");
    });

    $('.mobile__hamburger').on('click', function(){
        $('.mobile__link').removeClass('mobile__link--active');
        $('.mobile__item').removeClass('mobile__item--active');

    });
    $('.mobile__close').on('click', function(){
        $('.top__hamburger').removeClass('top__hamburger--active');
        $('.mobile').removeClass('mobile--active');
        $('.mobile__link').removeClass('mobile__link--active');
        $('.mobile__item').removeClass('mobile__item--active');
    });
  });

  $('.catalog__filters').on('click', function(){
    $('.filter').addClass('filter--active');
  });
  $('.filter__close').on('click', function(){
    $('.filter').removeClass('filter--active');
  });

  
$('.slider__list').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin:0,
    nav:true,
    navContainer: '.slider__navigation',
    navText: ['<svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.872 7.291l-5.523 5.523m0 0l5.523 5.523m-5.523-5.523h22.628" stroke-width="2"/></svg>','<svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.453 7.291l5.523 5.523m0 0l-5.523 5.523m5.523-5.523H1.348" stroke-width="2"/></svg>'],
    dots:false,
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
  $('.tile__list').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin:20,
    nav:false,
    dots:false,
    loop:true,
    autoWidth: true,
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
  $('.contacts__list').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin:16,
    nav:false,
    dots:false,
    loop:false,
    autoWidth: true,
    autoplay:false,
    autoplayTimeout:5000, 
    responsive:{ 
        0:{
            items:1,
            autoWidth: false
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



  ymaps.ready(init);

  function init () {
      var myMap = new ymaps.Map("map", {
              center: [59.886670, 30.431560],
              zoom: 14,
              controls: ['zoomControl']
          });
  
          myPlacemarkOne = new ymaps.Placemark([56.859625, 35.911851], {
              hintContent: 'Б. Сухаревский пер., д.17, строение 2',
              
          }, {
              iconLayout: 'default#image',
              iconImageHref: './images/map.svg',
              iconImageSize: [40, 40]
          });
  
          myPlacemarkTwo = new ymaps.Placemark([55.771034, 37.629358], {
              hintContent: 'Б. Сухаревский пер., д.17, строение 2',
          }, {
              iconLayout: 'default#image',
              iconImageHref: './images/map.svg',
              iconImageSize: [40, 40]
          });
  
          myPlacemarkTree = new ymaps.Placemark([59.891909, 30.415518], {
              hintContent: 'Б. Сухаревский пер., д.17, строение 2',
          }, {
              iconLayout: 'default#image',
              iconImageHref: './images/map.svg',
              iconImageSize: [40, 40]
          });
  
          myPlacemarkFour = new ymaps.Placemark([56.262877, 34.329065], {
              hintContent: 'Б. Сухаревский пер., д.17, строение 2',
          }, {
              iconLayout: 'default#image',
              iconImageHref: './images/map.svg',
              iconImageSize: [40, 40]
          });
  
  
  
          
          myMap.geoObjects.add(myPlacemarkOne).add(myPlacemarkTwo).add(myPlacemarkTree).add(myPlacemarkFour);
          
          $('.contacts__box--1').click(function() {
              myMap.setCenter([56.859625, 35.911851], 14, {
                  checkZoomRange: true
              });
              $('.contacts__box').removeClass('contacts__box--active');
              $(this).addClass('contacts__box--active');
          });
          $('.contacts__box--2').click(function() {
              myMap.setCenter([55.771034, 37.629358], 14, {
                  checkZoomRange: true
              });
              $('.contacts__box').removeClass('contacts__box--active');
              $(this).addClass('contacts__box--active');
          });
          $('.contacts__box--3').click(function() {
              myMap.setCenter([59.891909, 30.415518], 14, {
                  checkZoomRange: true
              });
              $('.contacts__box').removeClass('contacts__box--active');
              $(this).addClass('contacts__box--active');
          });
          $('.contacts__box--4').click(function() {
              myMap.setCenter([56.262877, 34.329065], 14, {
                  checkZoomRange: true
              });
              $('.contacts__box').removeClass('contacts__box--active');
              $(this).addClass('contacts__box--active');
          });
  
  }