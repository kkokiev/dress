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

	/**/
	/*setup custom country select (stores page)*/
	/**/
	$("#select-language").select2({
		placeholder: 'Language',
		minimumResultsForSearch: Infinity, //hide search
		closeOnSelect: true
	});


	/**/
	/*setup custom country select (stores page)*/
	/**/
	$("#select-country").select2({
		placeholder: 'Choose your country',
		minimumResultsForSearch: Infinity, //hide search
		closeOnSelect: true
	});


	/**/
	/*setup scrollspy for Stores page*/
	/**/
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
	/*end setup scrollspy for Stores page*/


	/**/
	/*setup home page scroller (white rectangle above "Contact us")*/
	/**/

	$(window).on('scroll', function() {
		var scrollTop = $(this).scrollTop();

		var scroller = $('.header__section_scroller');

		if(scrollTop > 0) {
			scroller.addClass('header__section_scroller-dark');
		} if(scrollTop === 0) {
			scroller.removeClass('header__section_scroller-dark');
			console.log('hi')
		}
	});


	/**/
	/*setup navbar show and hide*/
	/**/
	var $navBtn = $('#mobile-nav-btn'),
		$navBar = $('#mobile-nav');

	function hideNavbar() {
		$navBar.removeClass('js-navbar').animate({height: '0'}, 300);
	};

	$navBtn.on('click', function(event) {
		event.preventDefault();

		if($navBar.hasClass('js-navbar')){
			hideNavbar();

		} else {
			$navBar.addClass('js-navbar');
			var curHeight = $navBar.height();
			$navBar.css('height', 'auto');
			var autoHeight = $navBar.height();
			$navBar.height(curHeight).animate({height: autoHeight}, 300);
		}
	});

	$('.header').on('click', function(event) {
		event.stopPropagation();
	});

	$('body').on('click', function() {
		hideNavbar();
	});
	/*end setup navbar show and hide*/


})(jQuery);
