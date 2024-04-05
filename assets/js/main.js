// Menu
function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const mobileMenuWrapper = document.querySelector('.mobile__menu-wrapper')
	const mobileMenuClose = document.querySelector('.mobile__menu-close')
	const body = document.querySelector('body')

	burger.addEventListener('click', () => {
		if (!menu.classList.contains('active')) {
			menu.classList.add('active')
			burger.classList.add('active')
			body.classList.add('locked')
			mobileMenuWrapper.classList.add('active')
			setTimeout(() => {
				mobileMenuWrapper.style.background = 'rgba(252, 245, 239, 0.6)'
			}, 100)
		} else {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
			mobileMenuWrapper.classList.remove('active')
			mobileMenuWrapper.style.background = 'transparent'
		}
	})

	mobileMenuWrapper.addEventListener('click', (e) => {
		if (e.target.classList.contains('mobile__menu-wrapper')) {
			mobileMenuWrapper.classList.remove('active')
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
			mobileMenuWrapper.style.background = 'transparent'
		}
	})

	mobileMenuClose.addEventListener('click', () => {
		mobileMenuWrapper.classList.remove('active')
		menu.classList.remove('active')
		burger.classList.remove('active')
		body.classList.remove('locked')
		mobileMenuWrapper.style.background = 'transparent'
	})
	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
		}
	})
}
burgerMenu()
function fixedHeader() {
	const header = document.querySelector('header')
	const breakpoint = 40
	if (window.scrollY >= breakpoint) {
		header.classList.add('active')
	} else {
		header.classList.remove('active')
	}
}
window.addEventListener('scroll', fixedHeader)
// Mobile Dropdown
function toggleMobileDropdown() {
	const trigger = document.querySelector('.mobile__dropdown-button')
	const content = document.querySelector('.mobile__dropdown-content')
	const arrowIcon = document.querySelector('.mobile__menu-arrow')

	trigger.addEventListener('click', () => {
		slideToggle(content)
		arrowIcon.classList.toggle('active')
	})
}
toggleMobileDropdown()
// Ambassador Slider
const swiper = new Swiper('.swiper__ambassadors', {
	loop: true,
	parallax: true,
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

// Accordion
function accordion() {
	const items = document.querySelectorAll('.accordion__item-trigger')
	const contents = document.querySelectorAll('.accordion__item-content')
	const arrows = document.querySelectorAll('.accordion__item-arrow')
	if (window.innerWidth < 600) {
		items.forEach((item, idx) => {
			item.addEventListener('click', () => {
				const parent = item.parentNode
				if (parent.classList.contains('accordion__item-active')) {
					parent.classList.remove('accordion__item-active')
				} else {
					slideToggle(contents[idx])
					arrows[idx].classList.toggle('active')
				}
			})
		})
	}
}
accordion()
/* SLIDE UP */
let slideUp = (target, duration = 300) => {
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.boxSizing = 'border-box'
	target.style.height = target.offsetHeight + 'px'
	target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.style.border = 'none'

	window.setTimeout(() => {
		target.style.display = 'none'
		target.style.removeProperty('height')
		target.style.removeProperty('padding-top')
		target.style.removeProperty('padding-bottom')
		target.style.removeProperty('margin-top')
		target.style.removeProperty('margin-bottom')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* SLIDE DOWN */
let slideDown = (target, duration = 300) => {
	target.style.removeProperty('display')
	let display = window.getComputedStyle(target).display
	if (display === 'none') display = 'grid'
	target.style.display = display
	let height = target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = 0
	target.style.paddingTop = 0
	target.style.paddingBottom = 0
	target.style.marginTop = 0
	target.style.marginBottom = 0
	target.offsetHeight
	target.style.boxSizing = 'border-box'
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = duration + 'ms'
	target.style.height = height + 'px'
	target.style.border = 'none'

	target.style.removeProperty('padding-top')
	target.style.removeProperty('padding-bottom')
	target.style.removeProperty('margin-top')
	target.style.removeProperty('margin-bottom')
	target.style.removeProperty('border')

	window.setTimeout(() => {
		target.style.removeProperty('height')
		target.style.removeProperty('overflow')
		target.style.removeProperty('transition-duration')
		target.style.removeProperty('transition-property')
		target.style.removeProperty('border')
	}, duration)
}
/* TOOGLE */
const slideToggle = (target, duration = 300) => {
	if (window.getComputedStyle(target).display === 'none') {
		return slideDown(target, duration)
	} else {
		return slideUp(target, duration)
	}
}
