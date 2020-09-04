//slick slider *********************************
$(document).ready(function() {
	$('.slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: true,
		pauseOnDotsHover: true
	})

	$('.slider-hit').slick({
		arrows: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		responsive: [{
				breakpoint: 1670,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1224,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					variableWidth: true
				}
			}
		]
	})

	// $('.slider-nav').slick({
	// arrows: true,
	// slidesToShow: 3,
	// slidesToScroll: 1,
	// focusOnSelect: true,
	// dots: false
	// centerMode: true,
	// variableHeight: true,
	// rows: 2,
	// slidersPerRows: 3,
	// infinite: true,
	// initialSlide: 0,
	// autoplay: false
	// })

	// categories-nav (vertical-nav) *********************************
	$('.catalog-nav span').click(function(e) {
		e.preventDefault();
		$(this).parent().parent().find('ul').slideToggle();
		$(this).parent().parent().toggleClass('active');
	});

	// choice color **************************************************
	$('.checkbox-color').click(function(e) {
		if (!$(this).hasClass('checkbox-color-active')) {
			$(this).addClass('checkbox-color-active')
		} else {
			$(this).removeClass('checkbox-color-active')
		}
	})

	// change checkbox radio *************************************************
	$('input[type=checkbox],input[type=radio]').styler();

})

// accordion *******************************************************
$(document).ready(function() {
	$('.reg-next').click(function(e) {
		e.preventDefault()
		var id = $(this).attr('data-num')
		$('.reg-item').eq(id).find('.reg-item-content').slideToggle()
		$('.reg-item').eq(id - 1).find('.reg-item-content').slideToggle()
		var target = $('#reg')
		var top = target.offset().top;
		$('html,body').animate({
			scrollTop: top
		}, 1000)
	})

	$('.reg-prev').click(function(e) {
		e.preventDefault()
		var id = $(this).attr('data-num')
		$('.reg-item').eq(id).find('.reg-item-content').slideToggle()
		$('.reg-item').eq(id - 1).find('.reg-item-content').slideToggle()
		var target = $('#reg')
		var top = target.offset().top
		$('html,body').animate({
			scrollTop: top
		}, 1000)
	})

	$('.order-check').click(function(e) {
		e.preventDefault();
		var image = $(this).css('background-image');
		var text = $(this).attr('data-text');
		$(this).parent().parent().parent().find('.order-check-res p').html(text);
		$(this).parent().parent().parent().find('.order-check-res .order-check').css('background-image', image);
		$(this).parent().parent().find('.order-check').removeClass('active');
		$(this).addClass('active');
	});

	// Сортировка по названию, или цене (Category)
	$('.sort-name').click(function(e) {
		e.preventDefault();
		$(this).parent().parent().find('.sort-cost').removeClass('a-active');
		$(this).parent().parent().find('.sort-cost').removeClass('sort-active');
		$(this).addClass('a-active');
		$(this).addClass('sort-active');
	});
	$('.sort-cost').click(function(e) {
		e.preventDefault();
		$(this).parent().parent().find('.sort-name').removeClass('a-active');
		$(this).parent().parent().find('.sort-name').removeClass('sort-active');
		$(this).addClass('a-active');
		$(this).addClass('sort-active');
	});

	// Сортировка по кол-ву страниц (Category)
	$('.sort-pages').click(function(e) {
		e.preventDefault();
		$(this).parent().parent().find('.sort-pages').removeClass('a-active');
		$(this).addClass('a-active');
	});

	// Меняет вид карточек (Category)
	$('.category-sort-type_tile').click(function(e) {
		e.preventDefault()
		$(this).parent().find('.category-sort-type_table').removeClass('sort-type_table')
		$(this).addClass('sort-type_tile')
		$('.table-item_wrapper').hide()
		$('.category-item-wrapper').fadeIn()
	});

	$('.category-sort-type_table').click(function(e) {
		e.preventDefault()
		$(this).parent().find('.category-sort-type_tile').removeClass('sort-type_tile')
		$(this).addClass('sort-type_table')
		$('.category-item-wrapper').hide()
		$('.table-item_wrapper').fadeIn()
	});


	$('#photos').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		asNavFor: '#photos2'
	});

	$('#photos2').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		focusOnSelect: true,
		arrows: true,
		vertical: true,
		verticalSwiping: true,
		asNavFor: '#photos',
		prevArrow: '<button type="button" class="slick-prev photos-prev-arrow">Previous</button>',
		nextArrow: '<button type="button" class="slick-next photos-next-arrow">Next</button>',
		// responsive: [{
		// 	breakpoint: 1300,
		// 	settings: {
		// 		slidesToShow: 2
		// 	}
		// }]
	});

	$('.tabs-nav a').click(function(e) {
		e.preventDefault();
		var index = $(this).index();
		$('.tabs-nav a').removeClass('active');
		$(this).addClass('active');
		$('.tabs-block').hide();
		$('.tabs-block').eq(index).show();
	});

	// modal (popup) **************************************

	$('.mob-nav').click(function(e) {
		e.preventDefault();
		$('.mobile-block').fadeIn();
	});

	$('.mob-nav-close').click(function(e) {
		e.preventDefault();
		$('.mobile-block').fadeOut();
	});

	$('li .mob-nav-open').click(function(e) {
		e.preventDefault();
		$(this).parent().find('ul').slideToggle();
		$(this).toggleClass('active');
	});


	//closed all modals fadeOut
	$('.modal-bg, .modal-close').click(function(event) {
		event.preventDefault()
		$('.modal-bg').fadeOut()
		$('.modal-buy').fadeOut()
		$('.modal-accepted').fadeOut()
		$('.modal-item').fadeOut()
		// mySwiper.update()
	})

	//listen 'buy' modal and open on click
	$('.modal-open-buy').click(function(event) {
		event.preventDefault()
		$('.modal-item').fadeOut()
		$('.modal-bg').fadeIn()
		$('.modal-buy').fadeIn()
	})

	//listen 'accepted' modal and open on click
	$('.modal-open-accepted, .modal-close-send').click(function(event) {
		event.preventDefault()
		$('.modal-buy').fadeOut()
		$('.modal-bg').fadeIn()
		$('.modal-accepted').fadeIn()
	})

	//listen 'item' modal and open on click
	$('.modal-open-item').click(function(event) {
		event.preventDefault()
		$('.modal-bg').fadeIn()
		$('.modal-item').fadeIn()
	})

})