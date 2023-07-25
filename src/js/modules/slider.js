$(document).ready(function () {
  $('.slider').slick({
    prevArrow: '.team__prev',
    nextArrow: '.team__next',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    adaptiveHeight: true,
    easing: 'ease',
    initialSlide: 0,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
