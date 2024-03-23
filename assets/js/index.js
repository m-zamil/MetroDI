var swiper = new Swiper('.partners-swiper', {
  a11y: false,
  freeMode: true,
  slidesPerView: 'auto',
});

var swiper = new Swiper('.clients-reviews-swiper', {
  a11y: false,
  spaceBetween: 42,
  breakpoints: {
    1280: {
      spaceBetween: 30,
    },
    1600: {
      spaceBetween: 50,
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
  freeMode: true,
  slidesPerView: 'auto',
});
