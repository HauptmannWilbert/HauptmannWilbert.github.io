
$('.top__hamburger').on('click', function() {
    $(this)
    .toggleClass('top__hamburger--active');
    $('.mobile').toggleClass('mobile--active');
});

$(document).ready(function() {
    
    $('.product__box').on('click', function(){
        $(this)
        .addClass('product__box--active')
        .siblings()
        .removeClass('product__box--active')
        .closest('div.full-product')
        .find('.subproduct')
        .removeClass('subproduct--active')
        .eq($(this).index())
        .addClass('subproduct--active');
    });
    
});

$('.slider__list').owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    margin:30,
    nav:true,
    navContainer:'.slider__navigation',
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M198.608 246.104L382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M293.392 245.896L109.336 429.96c-5.068 5.056-7.856 11.816-7.856 19.024 0 7.212 2.788 13.968 7.856 19.032l16.128 16.12c5.06 5.072 11.824 7.864 19.032 7.864s13.964-2.792 19.028-7.864l219.148-219.144c5.084-5.08 7.868-11.868 7.848-19.084.02-7.248-2.76-14.028-7.848-19.112L163.728 7.864C158.664 2.792 151.908 0 144.696 0c-7.208 0-13.964 2.792-19.032 7.864l-16.124 16.12c-10.492 10.492-10.492 27.572 0 38.06l183.852 183.852z"/></svg>'],
    dots:true,
    dotsContainer:'.slider__dots',
    loop:true,
    autoplay:false,
    autoplayTimeout:5000, 
    responsive:{ 
        0:{
            items:1
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
  
  $('.subproduct__list').owlCarousel({
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      margin:30,
      nav:true,
      navContainer:'.subproduct__navigation',
      navText: ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M198.608 246.104L382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M293.392 245.896L109.336 429.96c-5.068 5.056-7.856 11.816-7.856 19.024 0 7.212 2.788 13.968 7.856 19.032l16.128 16.12c5.06 5.072 11.824 7.864 19.032 7.864s13.964-2.792 19.028-7.864l219.148-219.144c5.084-5.08 7.868-11.868 7.848-19.084.02-7.248-2.76-14.028-7.848-19.112L163.728 7.864C158.664 2.792 151.908 0 144.696 0c-7.208 0-13.964 2.792-19.032 7.864l-16.124 16.12c-10.492 10.492-10.492 27.572 0 38.06l183.852 183.852z"/></svg>'],
      dots:false,
      loop:true,
      autoplay:false,
      autoplayTimeout:5000, 
      responsive:{ 
          0:{
              items:1
          },
          767:{
              items:2,
              margin: 20
          },
          1024:{
              items:3
          },
          1280:{
              items:3
          }
      }
    });
