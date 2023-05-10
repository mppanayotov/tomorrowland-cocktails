/**
 * Scrollspy
 */

import 'scrollspy-js';

$(window).on('load', function() {
	const scrollspies = document.querySelectorAll('.js-scrollspy');

	if (scrollspies.length <= 0) return;

	for (let i = 0; i < scrollspies.length; i++) {
		const scrollspy = scrollspies[i];

		const scrollspyInstance = new ScrollSpy(scrollspy, {
			nav: '.js-scrollspy > li > a',
			className: 'is-current'
		});
	}
});
