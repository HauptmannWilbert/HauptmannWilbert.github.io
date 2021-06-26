
$('.top__hamburger').on('click', function(){
  $(this).toggleClass('top__hamburger--active');
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
			iconImageHref: './images/placeholder-map.svg',
			iconImageSize: [65, 65],
			iconImageOffset: [ -50, -40]
        });

 myMap.geoObjects.add(myPlacemark);

}