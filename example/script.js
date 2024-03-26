$(document).ready(function(){
  $('.slider').slick({
    centerMode: true,
    centerPadding: '60px',
    speed:1000,
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="reviews/Previous.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="reviews/Next.png"></button>',
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