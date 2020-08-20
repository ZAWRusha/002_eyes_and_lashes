//slick slider *********************************
$(document).ready(function () {
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
	$('.catalog-nav span').click(function (e) {
		e.preventDefault();
		$(this).parent().parent().find('ul').slideToggle();
		$(this).parent().parent().toggleClass('active');
	});

	// choice color **************************************************
	$('.checkbox-color').click(function (e) {
		if (!$(this).hasClass('checkbox-color-active')) {
			$(this).addClass('checkbox-color-active')
		} else {
			$(this).removeClass('checkbox-color-active')
		}
	})

	$('input[type=checkbox]').styler();

})