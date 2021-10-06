import './style.scss';

  /*scroll*/
$(document).ready(function() {
  let margin = 40; 
  $("a.scroll-to").click(function() { // 
  $("html:not(:animated),body:not(:animated)").animate({
   scrollTop: $($(this).attr("href")).offset().top-margin+ "px" 
     }, {
        duration: 1600,
        easing: "swing"
      });
      return false;
   });
});

/*slider*/
$(".testimonials-carousel").owlCarousel({
	margin: 30,
	loop:true,
	autoplay:true,
	autoplayTimeout: 2000,
	autoplayHoverPause:true,
	mouseDrag:true,
	touchDrag:true,
	dotsEach: 1,
	responsive: {
		0:{
			items:1
		},
		800:{
			items:1
		},
		1300:{
			items:2
		},
	 2560:{
		 items:2
	},
}
});