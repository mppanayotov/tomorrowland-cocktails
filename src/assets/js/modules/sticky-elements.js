/**
 * Sticky nav
 */

$(window).on('load', function() {
	$('.js-sticky').stickySidebar({
		topSpacing: 0,
		bottomSpacing: 0,
		innerWrapperSelector: '.js-sticky-inner',
		containerSelector: '.js-sticky-container'
	});
});
