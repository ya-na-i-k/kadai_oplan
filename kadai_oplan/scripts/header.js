$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".hero-div").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-header").addClass("headerColorScroll");
    } else {
      $(".js-header").removeClass("headerColorScroll");
    }
  });
});