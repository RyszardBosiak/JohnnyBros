$(document).ready(function() {
	
	function checkMEnuPosition() {
		var scroll = $(window).scrollTop();
		const nav = $('nav');
		if (scroll >= 100) {
			nav.addClass('nav-dark');
		} else {
			nav.removeClass('nav-dark');
		}
	}
	
	checkMEnuPosition()

	$(window).scroll(function() {
		checkMEnuPosition();
	});
});