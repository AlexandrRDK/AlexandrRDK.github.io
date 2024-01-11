
//слайдер

$('.single-item').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 1,
  infinite: true,
  adaptiveHeight: true,
  prevArrow: '<img src="img/reviews/Previous.png" class="carousel__prev" alt="prev">',
  nextArrow: '<img src="img/reviews/Next.png" class="carousel__next" alt="next">',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
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



