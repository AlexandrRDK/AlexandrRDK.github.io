import hamburger from './modules/hamburger';
import smoothScroll from './modules/smooth-scroll';
import modal from './modules/modal';
import sendForm from './modules/sendForm';

window.addEventListener('DOMContentLoaded', () => {


  hamburger();
  smoothScroll();
  sendForm('form');
  modal('.modal');
})

$(document).ready(function(){
  $('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    speed:1000,
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/reviews/Previous.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/reviews/Next.png"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});
