$('.slider-one')
.not("slick-initialized")
.slick({
    autoplay: true,
    autoplayspeed: 3000,
    dots: true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});


$('.slider-two')
.not("slick-initialized")
.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:".site-slider-two .prev",
    nextArrow:".site-slider-two .next",
  });    
