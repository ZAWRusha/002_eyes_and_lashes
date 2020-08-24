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
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: true,
		pauseOnDotsHover: true
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

})