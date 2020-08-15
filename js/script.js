//slick slider
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
		pauseOnDotsHover: true,
	})

	$('.slider-hit').slick({
		arrows: true,
		// 	dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: true,
		// initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: true,
		pauseOnDotsHover: true
	})

})