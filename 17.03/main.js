

  $('.realize__slider').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin:20,
    navText: ['<svg viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.213 0L0 8l7.213 8L9 14.018 3.574 8 9 1.982 7.213 0z"/></svg>','<svg viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.787 0L9 8l-7.213 8L0 14.018 5.426 8 0 1.982 1.787 0z"/></svg>'],
    nav:true,
    navContainer: '.realize__navigation',
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

  ymaps.ready(init);

  function init () {
      var myMap = new ymaps.Map("map", {
              center: [56.856363, 35.913163],
              zoom: 17,
              controls: ['zoomControl']
          });
  
          myPlacemark = new ymaps.Placemark([56.856363, 35.913163], {
              
          }, {
              iconLayout: 'default#image',
              iconImageHref: '../images/map.svg',
              iconImageSize: [60, 60],
              iconImageOffset: [ -30, -60],
          });
  
  myMap.geoObjects.add(myPlacemark);
  
          $(".contacts__location--one").on('click', function(){
              myMap.setCenter([56.856363, 35.913163], 17);
              myPlacemark.geometry.setCoordinates([56.856363, 35.913163]);
          });
          $(".contacts__location--two").on('click', function(){
              myMap.setCenter([56.854066, 35.865341], 16);
              myPlacemark.geometry.setCoordinates([56.854066, 35.865341]);
          });
  };