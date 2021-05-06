

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