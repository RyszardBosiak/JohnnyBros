

$(document).ready(function(){
	const scrollButton = $('.scroll-down');

	scrollButton.on("click", function(e) {
		e.preventDefault();
		$("body, html").animate({ 
				scrollTop: $( $(this).attr('href') ).offset().top 
		}, 600);
		
	});
});