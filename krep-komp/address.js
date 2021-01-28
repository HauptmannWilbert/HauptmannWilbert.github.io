ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map-shops", {
            center: [55.669494, 37.624530],
            zoom: 16,
			controls: ['zoomControl']
        });

	myPlacemark = new ymaps.Placemark([55.669518, 37.630472], {

	}, {
			iconLayout: 'default#image',
			iconImageHref: '../images/pointer-map.svg',
			iconImageSize: [40, 40],
			iconImageOffset: [ -25, -30]
        });

 myMap.geoObjects.add(myPlacemark);

}