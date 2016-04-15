//Common scripts


//ie fix
if(!(window.console && console.log)) {
	console = {
		log: function(){},
		debug: function(){},
		info: function(){},
		warn: function(){},
		error: function(){}
	};
}


(function () {

	/*setup custom select*/
	$("#select-country").select2({
		placeholder: 'Choose your country',
		minimumResultsForSearch: Infinity, //hide search
		closeOnSelect: true
	});

	/*setup scrollspy for Stores page*/
	$(window).on('scroll', function() {
		var scrollTop = $(this).scrollTop();

		$('.stores__title').each(function() {
			var topDistance = $(this).offset().top;

			if ( (topDistance) < scrollTop + 150 ) {
				$(this).addClass('stores__title_active');
			} else {
				$(this).removeClass('stores__title_active');
			}
		});
	});
})(jQuery);
