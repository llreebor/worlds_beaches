const swiper = new Swiper('.swiper__ambassadors', {
	loop: true,
	centeredSlides: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
		},

		// when window width is >= 640px
		640: {
			slidesPerView: 4,
		},
		1920: {
			slidesPerView: 5,
		},
	},
})
