 (function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top - 10 + 'px'
        }, 1200);
        return this;
    }
})(jQuery);

$(document).ready(function(){

	if ($(window).width() <= 960) {
		$('#header').goTo();}
	}

	);