

$(document).ready(function () {
	const menuOpener = $('.menu-opener');
	const navigationWrapper = $('.navigation-wrapper');
	const body = $('body');
	const menuBackground = $('.mobile-menu-background');

	function toggleMenu() {
		body.toggleClass('show-menu');
		menuBackground.fadeToggle(300);
	}

	menuOpener.on('click', toggleMenu);
	menuBackground.on('click', toggleMenu);
});