

$('.top__hamburger').on('click', function(){
    $(this).toggleClass('top__hamburger--active');
    $('.mobile').toggleClass('mobile--active');
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


  $('.slider__list').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin:20,
    nav:false,
    dots:true,
    dotsContainer:".slider__dots",
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
              iconImageHref: './images/redicons/pin-1.svg',
              iconImageSize: [65, 65],
              iconImageOffset: [ -50, -40]
          });
  
   myMap.geoObjects.add(myPlacemark);
  
  
  
   var myMapTwo = new ymaps.Map("mapTwo", {
      center: [56.852091, 35.913621],
      zoom: 16,
      controls: ['zoomControl']
  });
  
  myPlacemarkTwo = new ymaps.Placemark([56.852091, 35.913621], {
  
  }, {
      iconLayout: 'default#image',
      iconImageHref: './images/redicons/pin-1.svg',
      iconImageSize: [65, 65],
      iconImageOffset: [ -50, -40]
  });
  
  myMapTwo.geoObjects.add(myPlacemarkTwo);
  
  }