$(function () { 

  var mixer = mixitup('.portfolio__inner', {
    load: {
      filter: '.all'
    }
  });

  $('.project__slider').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    dots: true,
    arrows: true,
    fade: true,
    autoplay: true
  });


})
