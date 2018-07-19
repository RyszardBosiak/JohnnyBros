$(document).ready(function() {
	
	function checkMEnuPosition() {
		var scroll = $(window).scrollTop();
		const navLogoBox = $('.nav-logo-box');
		const nav = $('nav');
		if (scroll >= 100) {
			navLogoBox.addClass('nav-dark');
			nav.addClass('nav-dark');
			navLogoBox.addClass('element-shadow');
		} else {
			navLogoBox.removeClass('nav-dark');
			nav.removeClass('nav-dark');
			navLogoBox.removeClass('element-shadow');
		}
	}
	
	checkMEnuPosition()

	$(window).scroll(function() {
		checkMEnuPosition();
	});
});