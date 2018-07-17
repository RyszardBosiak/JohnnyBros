

$(document).ready(function () {
	const menuOpener = $('.menu-opener');
	const navigationWrapper = $('.navigation-wrapper');
	const body = $('body');
	const menuBackground = $('.mobile-menu-background');
	const mobileWidth = 768;
	// const window = $(window);

	function toggleMenu() {
		body.toggleClass('show-menu');
		menuBackground.fadeToggle(300);
	}

	function closeMobileMenu() {
		body.removeClass('show-menu');
		menuBackground.fadeOut(300);
	}

	menuOpener.on('click', toggleMenu);
	menuBackground.on('click', toggleMenu);

	$(window).resize(function() {
		if ($(window).width() >= mobileWidth) {
			closeMobileMenu();
		} 
	});
});