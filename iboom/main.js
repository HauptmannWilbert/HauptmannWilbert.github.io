


$(function() {


$('#big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '#thumbs',
  vertical: true,
  arrows: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false
      }
    }
  ]
});

$('#thumbs').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '#big',
  focusOnSelect: true,
  vertical: true,
  prevArrow: $('.card__prev'),
  nextArrow: $('.card__next'),
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 4,
        vertical: false
      }
    },
    {
      breakpoint: 370,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 3,
        vertical: false
      }
    }
  ]
});


});