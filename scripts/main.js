;(function($){
	'use strict';
	
	$(window).on('load', function() {

		$('.ba-slider').slick({
  		dots: true,
  		arrows: true,
  		prevArrow: '.ba-prev',
  		nextArrow: '.ba-next',
  		slide: '.ba-slider, div',
  		dotsClass: 'my-dots',
		});

	});

})(jQuery);