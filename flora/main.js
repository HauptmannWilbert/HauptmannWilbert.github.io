
$('.top__hamburger').on('click', function() {
  $(this)
  .toggleClass('top__hamburger--active');
  $('.top').toggleClass('top--active');
  $('.mobile').toggleClass('mobile--active');
  $('body').toggleClass('body--active');
});

$(function() {
  $('.top__option--search').on('click', function() {
      $(this)
       .toggleClass("top__option--search-active");
      $('.top__searched').toggleClass("top__searched--active");
  });
}); 

$(function() {
  var top = $(".top");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 88) {
          top.addClass("top--active");
      } else {
          top.removeClass("top--active");
      }
  });
});



$('.filters__filter').on('click', function() {
  $('.filters__filter').removeClass('filters__filter--active');
  $('.filters__box').removeClass('filters__box--active');
  $(this)
  .addClass('filters__filter--active')
  .next().addClass('filters__box--active');
});

$('.filters__close').on('click', function() {
  $(this)
  .parent().parent().removeClass('filters__box--active')
  .prev().removeClass('filters__filter--active');
})

$('.filters__show').on('click', function() {
  $(this)
  .parent().parent().removeClass('filters__box--active')
  .prev().removeClass('filters__filter--active');
})

$(document).on('click', function (e) {
  if (!$(e.target).closest('.filters__box, .filters__filter').length) {
    $('.filters__filter').removeClass('filters__filter--active');
    $('.filters__box').removeClass('filters__box--active');
  }
});



var accordion = (function(){
  
  var $accordion = $('.js-accordion');
  var $accordion_header = $accordion.find('.js-accordion-header');
  var $accordion_item = $('.js-accordion-item');
 
  // default settings 
  var settings = {
    // animation speed
    speed: 400,
    
    // close all other accordion items if true
    oneOpen: false
  };
    
  return {
    // pass configurable object literal
    init: function($settings) {
      $accordion_header.on('click', function() {
        accordion.toggle($(this));
      });
      
      $.extend(settings, $settings); 
      
      // ensure only one accordion is active if oneOpen is true
      if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
        $('.js-accordion-item.active:not(:first)').removeClass('active');
      }
      
      // reveal the active accordion bodies
      $('.js-accordion-item.active').find('> .js-accordion-body').show();
    },
    toggle: function($this) {
            
      if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
        $this.closest('.js-accordion')
               .find('> .js-accordion-item') 
               .removeClass('active')
               .find('.js-accordion-body')
               .slideUp()
      }
      
      // show/hide the clicked accordion item
      $this.closest('.js-accordion-item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
    }
  }
})();

$(document).ready(function(){
  accordion.init({ speed: 300, oneOpen: true });
});



$('.products__carousel--1').owlCarousel({
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  margin:10,
  nav:false,
  dots:true,
  dotsContainer:".products__dots--1",
  loop:false,
  autoWidth: false,
  autoplay:false,
  autoplayTimeout:5000, 
  responsive:{ 
      0:{
          items:1,
      },
      1023:{
          items:1,
      }
  }
});