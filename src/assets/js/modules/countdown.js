/**
 * Countdown
 */

$(window).on('load', function() {
	function updateCountdown() {
		const $countdown = $('#countdown');
		const start = new Date('2026-07-25T15:00:00.000+01:00');
		const ts = countdown(start, null, countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

		if (! $countdown.hasClass('is-initialized')) {
			$countdown.addClass('is-initialized');
		}

		countdown.setLabels(
			'|S|M|H',
			'|S|M|H',
			':',
			':'
		);

		msg = ts.toHTML();
		$countdown.html(msg);
		requestAnimationFrame(updateCountdown);
	}
	
	updateCountdown();
});
