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
	var $body = $('body');

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
		}
	});


	/**/
	/*setup navbar show and hide*/
	/**/
	var $topMenu = $('#topline-menu'),
		$topMenuBtn = $('#topline-menu-btn');

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

	

	// var $navBtn = $('#mobile-nav-btn'),
	// 	$navBar = $('#mobile-nav');

	// function hideNavbar() {
	// 	$navBar.removeClass('js-navbar').animate({height: '0'}, 300);
	// };

	// $navBtn.on('click', function(event) {
	// 	event.preventDefault();

	// 	if($navBar.hasClass('js-navbar')){
	// 		hideNavbar();

	// 	} else {
	// 		$navBar.addClass('js-navbar');
	// 		var curHeight = $navBar.height();
	// 		$navBar.css('height', 'auto');
	// 		var autoHeight = $navBar.height();
	// 		$navBar.height(curHeight).animate({height: autoHeight}, 300);
	// 	}
	// });

	// $('.header').on('click', function(event) {
	// 	event.stopPropagation();
	// });

	// $('body').on('click', function() {
	// 	hideNavbar();
	// });
	/*end setup navbar show and hide*/








	// var galleryItem = $('.gallery-item__demo'),
	// 	galleryItemPopup = $('.gallery-item__popup');

	// //show popup on click
	// galleryItem.on('click', function(){
	// 	var thisGalleryPopup = $(this).next();
	// 	thisGalleryPopup.css('display', 'block');

	// 	//setup popup image height*
	// 	var setPopupImgHeight = function(){
	// 		var popupInnerHeight = thisGalleryPopup
	// 				.find('.gallery-item__popup-inner')
	// 				.height(),
	// 			popupImg = thisGalleryPopup
	// 				.find('.gallery-item__img'),
	// 			popupImgWrap = thisGalleryPopup
	// 				.find('.gallery-item__img-wrap');

	// 		popupImg.css('max-height', popupInnerHeight);
	// 	}
	// 	setPopupImgHeight();
	// 	$(window).resize(function(){
	// 		setPopupImgHeight();
	// 	});

		
	// 	взять левый офсет
	// 	взять правый офсет = ширина экрана - (левый офсет + ширина айтема)

	// 	если левый офсет < правого
	// 		.gallery-item__img-wrap (релатив) получает left = левый офсет

	// 	если левый офсет > правого
	// 		.gallery-item__img-wrap (релатив) получает left = (левый офсет-ширина .gallery-item__img-wrap)
		

	// 	//check left and right offset of the current galleryItem
	// 	var leftOffset = $(this).offset().left,
	// 		galleryItemWidth = $(this).width(),
	// 		windowWidth = $(window).width(),
	// 		rightOffset = windowWidth - leftOffset - galleryItemWidth;

	// 	if(leftOffset < rightOffset) {
	// 		$('.gallery-item__img-wrap').css('left', (leftOffset - 90));
	// 		//нужно сделать что-то с шириной картинки
	// 		var maxImgWidth = $(window).width() -180 - leftOffset;
	// 		$('.gallery-item__img-wrap').css('max-width', maxImgWidth);
	// 	}


	// });

	// //hide popup
	// galleryItemPopup.on('click', function(){
	// 	galleryItemPopup.css('display', 'none');
	// })

})(jQuery);
