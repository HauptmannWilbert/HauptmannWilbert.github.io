
$(function() {
	var deadline='2021.07.01 00:00:00';
	$('.countdown').downCount({
				date: deadline,
			},
			function(){
			  
			});
	});
	
$(function() {
	$(".banner__arrow").click(function() {
		$("html").animate({
		   scrollTop: $($(this).attr("href")).offset().top
		}, {
		   duration: 500,
		   easing: "swing"
		});
		return false;
	 });

});

$(document).ready(function() {
    $('#select__one').niceSelect();
    $('#select__two').niceSelect();
  });

$(".modal__slider").slider({min:42, max:62, range: "min"}).slider("pips",{rest:false}).slider("float");
var min = $(".modal__slider").slider("option", "min");
var max = $(".modal__slider").slider("option", "max");
$(".modal__min").text(min);
$(".modal__max").text(max);

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [56.852091, 35.913621],
            zoom: 16,
			controls: ['zoomControl']
        });

	myPlacemark = new ymaps.Placemark([56.852091, 35.913621] );

 myMap.geoObjects.add(myPlacemark);

}


$('.banks__roster').owlCarousel({
	animateIn: 'fadeIn',
	animateOut: 'fadeOut',
	margin:20,
	nav:false,
	dots:false,
	loop:false,
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


  
  $(document).ready(function() {
	$('#fancybox').fancybox({     
	
	  autoSize: true,
	  afterShow: function() {
  
  $('#big').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '#thumbs',
	vertical: true,
	verticalSwiping: true,
	draggable:false,
	swipeToSlide:false,
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
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '#big',
	focusOnSelect: true,
	vertical: true,
	verticalSwiping: true,
	responsive: [
	  {
		breakpoint: 767,
		settings: {
		  slidesToScroll: 1,
		  slidesToShow: 3,
		  arrows:false,
		  verticalSwiping: false,
		  vertical: false,
		}
	  }
	]
  });
  
  }
  });
  
  });
  