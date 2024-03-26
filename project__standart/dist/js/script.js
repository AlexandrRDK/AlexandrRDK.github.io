/*
window.addEventListener('DOMContentLoaded', () => {
//   carousel({
//     slide: '.carousel__item',
//     nextArrow: '.carousel__next',
//     prevArrow: '.carousel__prev',
//     wrapper: '.carousel',
//     field: '.carousel-inner'
//   });

//   function carousel({slide, prevArrow, nextArrow, wrapper, field}) {
//     let slideIndex = 1;
//     let offset = 0;

//     const slides = document.querySelectorAll(slide),
//           prev = document.querySelector(prevArrow),
//           next = document.querySelector(nextArrow),
//           slidesWrapper = document.querySelector(wrapper),
//           slidesField = document.querySelector(field),
//           width = window.getComputedStyle(slidesWrapper).width;

//     slidesField.style.width = 100 * slides.length + '%';
//     slidesField.style.display = 'flex';
//     slidesField.style.transition = '0.5s all';
//     slidesWrapper.style.overflow = 'hidden';

//     slides.forEach(slide => {
//         slide.style.width = width;
//     });

//     next.addEventListener('click', () => {
//         if (offset == (deleteNotDigits(width) * (slides.length -1))) {
//             offset = 0;
//         } else {
//             offset += deleteNotDigits(width);
//         }

//         slidesField.style.transform = `translateX(-${offset}px)`;

//         if (slideIndex == slides.length){
//             slideIndex = 1;
//         } else {
//             slideIndex++;
//         }
//     });

//     prev.addEventListener('click', () => {
//         if (offset == 0) {
//             offset = deleteNotDigits(width) * (slides.length -1);
//         } else {
//             offset -= deleteNotDigits(width);
//         }
//         slidesField.style.transform = `translateX(-${offset}px)`;

//         if (slideIndex == 1){
//             slideIndex = slides.length;
//         } else {
//             slideIndex--;
//         }
//     });

//     function deleteNotDigits(str){
//         return +str.replace(/\D/g, '');
//     }
// }




const slides = document.querySelectorAll('.carousel__item'),
      prev = document.querySelector('.carousel__prev'),
      next = document.querySelector('.carousel__next');

let slideIndex = 1;

showSlides(slideIndex);


function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      if(i === slideIndex - 1) {
          slides[i].style.cssText=`
          transform: translateY(0px);
          opacity: 100%;
        `;
      } else {
          slides[i].style.cssText=`
            transform: translateY(70px);
            opacity: 60%;
          `;
      }
    }
}

function plusSlide(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
    plusSlide(-1);
});

next.addEventListener('click', () => {
    plusSlide(1);
});
});

*/

$(document).ready(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
});