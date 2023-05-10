/**
 * Scroller
 */

$(window).on('load', function() {
	$('.js-scroller > li > a').on('click', function(e) {
		const target = $(this).attr('href');

		e.preventDefault();
		$('html, body').stop().animate({
			scrollTop: $(target).offset().top + 1
		}, 2000 );
	});
});
