$(function () {
  $('.products__inner-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    responsive: [{
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



});

let btn = document.querySelector('.burger'),
  nav = document.querySelector('.header__nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('active');
});