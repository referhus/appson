import './style.scss';

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
		600:{
			items:1
		},
		1400:{
			items:2
		},
	 2560:{
		 items:2
	},
}
});