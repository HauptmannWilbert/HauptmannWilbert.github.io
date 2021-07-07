
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
  



  ymaps.ready(init);

  function init() {
  
      var myMap = new ymaps.Map('map', {
          center: [48.704272, 65.602030],
          zoom: 2,
          type: 'yandex#map',
          controls: ['zoomControl']
      });
  
    ymaps.borders.load('001').then(function (geojson) {
      var objectManager = new ymaps.ObjectManager();
      // Чтобы добавить объекты в ObjectManager, необходимо
      // задать для них идентификаторы.
    
      var features = geojson.features.map(function (feature) {
        feature.id = feature.properties.iso3166;
        if(feature.properties.iso3166 == "RU"){
          feature.options = {
            strokeColor: '#ffffff',
            fillColor: '#30cb05',
            fillOpacity: 0.8
          };
        } else if(feature.properties.iso3166 == "IN"){
          feature.options = {
            strokeColor: '#ffffff',
            fillColor: '#fbc520',
            fillOpacity: 0.8
          };
        } else if(feature.properties.iso3166 == "CN"){
          feature.options = {
            strokeColor: '#ffffff',
            fillColor: '#16acdb',
            fillOpacity: 0.8
          };
        } else {
          feature.options = {
            strokeColor: '#ffffff',
            fillColor: '#16acdb',
            fillOpacity: 0
          };
        }
        
        return feature;
      }); 
        
      objectManager.add(features);
      myMap.geoObjects.add(objectManager);
      }, function (e) {
       console.log(e);
      });
    
    }


$(function() {
  $(".fos__topside").on("click", ".fos__tab:not(.fos__tab--active)", function() {
    $(this)
      .addClass("fos__tab--active")
      .siblings()
      .removeClass("fos__tab--active")
      .closest(".fos__tabs")
      .find(".fos__form")
      .removeClass("fos__form--active")
      .eq($(this).index())
      .addClass("fos__form--active");
  });
});