(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		
		/* Slider Item Slide
		============================*/
		$(".slider").owlCarousel({
			items: 1,
			autoplay: false,
			loop: true,
			nav: false,
			dots: true,
			smartSpeed: 500
		});
		
		
		/* One Page Nav
		============================*/
		$('.mainmenu ul').onePageNav({
			currentClass: 'current',
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			easing: 'swing',
			scrollOffset: 60
		});
		
		/* dessert Item Slide
		============================*/
		$(".slider-dessert-area").owlCarousel({
			items: 1,
			autoplay: false,
			loop: true,
			nav: false,
			dots: true,
			smartSpeed: 500
		});
		
		

	});


	jQuery(window).load(function () {

		/* Sticky Header
		============================*/
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 20) {
				$('.header-fixed').addClass("sticky");
			} else {
				$('.header-fixed').removeClass("sticky");
			}
		});

		/* Preloader Active
		============================*/
		$(".preloader").fadeOut()
	});
}(jQuery));