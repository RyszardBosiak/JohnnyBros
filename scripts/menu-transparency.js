$(document).ready(function() {
	const nav = $('nav');
	// let bannerHeight = $('.banner').outerHeight();
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {
			nav.addClass('nav-dark');
		} else {
			nav.removeClass('nav-dark');
		}
	});
});