$(document).on("ready", function() {
  $(".regular").slick({
    mobileFirst: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
	variableWidth: true,
	responsive: [
      {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true
        }
      },
	  {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
        }
      }
    ]
  });
});