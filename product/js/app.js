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
	var $body = $('body'),
		$topMenu = $('#topline-menu'),
		$topMenuBtn = $('#topline-menu-btn');

		

	/**/
	/*setup custom language select (header topline)*/
	/**/
	$("#select-language").select2({
		placeholder: 'Language',
		minimumResultsForSearch: Infinity, //hide search
		closeOnSelect: true
	});

	/**/
	/*setup custom language select (main-nav-menu)*/
	/**/
	$("#main-nav-lang-select").select2({
		placeholder: 'Language',
		minimumResultsForSearch: Infinity, //hide search
		closeOnSelect: true
	});


	/**/
	/*setup custom country select (stores page)*/
	/**/
	$("#stores-select").select2({
		placeholder: 'Choose your country',
		minimumResultsForSearch: Infinity, //hide search
		closeOnSelect: true
	});


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
		}
	});


	/**/
	/*setup navbar show and hide*/
	/**/

	$body.on('click', '#topline-menu-btn', function (event) {
		event.preventDefault();
		
		if(!$(this).hasClass('topline-menu__btn_opened')) {

			$(this).addClass('topline-menu__btn_opened');
			$topMenu.slideDown();

		} else {
			$(this).removeClass('topline-menu__btn_opened');
			$topMenu.slideUp();
		}
		
	});

	$body.on('click', function() {
		if($topMenuBtn.hasClass('topline-menu__btn_opened')) {
			$topMenuBtn.removeClass('topline-menu__btn_opened');
			$topMenu.slideUp();
		}
	});

	$body.on('click', '#topline-menu, #topline-menu-btn', function (event) {
		event.stopPropagation();
	});
	/**/
	/*end setup navbar show and hide*/
	/**/

	
	/*setup gallery items*/
	$('.gallery-item__preview').fancybox({
		closeBtn: false,
		padding: 0
	});

	/*setup real brides gallery*/
	$('.brides-item__preview').fancybox({
		closeBtn: true,
		padding: 0
	});

	/*show block with video after some time*/
	setTimeout(function() {
		$('.intro__video-wrap').fadeIn();
	}, 3000);
	

	/**/
	/*setup scrollspy for Stores page*/
	/**/
	$(window).on('scroll', function() {
		var scrollTop = $(this).scrollTop();

		$('.stores__row').each(function() {
			var topDistance = $(this).offset().top;

			if ( (topDistance) < scrollTop + 150 ) {
				$(this).addClass('stores__row_active');
			} else {
				$(this).removeClass('stores__row_active');
			}
		});
	});
	/*end setup scrollspy for Stores page*/


})(jQuery);

