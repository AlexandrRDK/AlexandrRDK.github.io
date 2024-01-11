$('.single-item').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    infinite: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/reviews/Previous.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/reviews/Next.png" alt="next"></button>',
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