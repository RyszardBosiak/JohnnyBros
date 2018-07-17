

$(document).ready(function () {
	const menuOpener = $('.menu-opener');
	const navigationWrapper = $('.navigation-wrapper');
	const body = $('body');

	menuOpener.on('click', function() {
		body.toggleClass('show-menu');
	});
});