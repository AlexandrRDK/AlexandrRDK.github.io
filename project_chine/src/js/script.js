import hamburger from './modules/hamburger';
import smoothScroll from './modules/smooth-scroll';
import carousel from './modules/carousel';
import modal from './modules/modal';
import sendForm from './modules/sendForm';

window.addEventListener('DOMContentLoaded', () => {


  hamburger();
  smoothScroll();
  carousel({
    slide: '.carousel__item',
    nextArrow: '.carousel__next',
    prevArrow: '.carousel__prev',
    wrapper: '.carousel',
    field: '.carousel-inner'
});
  sendForm('form');
  modal('.modal');
})

