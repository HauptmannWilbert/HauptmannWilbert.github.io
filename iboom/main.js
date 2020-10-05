


$(function() {

$('#big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '#thumbs',
  vertical: true,
  arrows: false,
});

$('#thumbs').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '#big',
  focusOnSelect: true,
  vertical: true,
  prevArrow: $('.card__prev'),
  nextArrow: $('.card__next'),
});

});