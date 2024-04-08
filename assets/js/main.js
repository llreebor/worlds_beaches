// [START] Global Scripts ========================================================================================
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
// [END] Global Scripts ==========================================================================================

// [START] Home Page Scripts =====================================================================================
if (document.getElementById('home-page')) {
	// Ambassadors Slider
	new Swiper('.swiper__ambassadors', {
		loop: true,
		parallax: true,
		centeredSlides: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
			},
			640: {
				slidesPerView: 4,
			},
			1920: {
				slidesPerView: 5,
			},
		},
	})
}
// [END] Home Page Scripts =======================================================================================

// [START] Destinations Page Scripts =============================================================================
if (document.getElementById('destinations-page')) {
	// Sliders Destination Page
	new Swiper('.swiper__destination-1', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination-destination-1',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next-destination-1',
			prevEl: '.swiper-button-prev-destination-1',
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
		},
	})
	new Swiper('.swiper__destination-2', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination-destination-2',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next-destination-2',
			prevEl: '.swiper-button-prev-destination-2',
		},

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			1200: {
				slidesPerView: 1,
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
}
// [END] Destinations Page Scripts ===============================================================================

// [START] Press Page Scripts ====================================================================================
if (document.getElementById('press-page')) {
	// Tabs
	function tabs(
		headerSelector,
		tabSelector,
		contentSelector,
		activeClass,
		display = 'flex'
	) {
		const header = document.querySelector(headerSelector),
			tab = document.querySelectorAll(tabSelector),
			content = document.querySelectorAll(contentSelector)

		const nextBtn = document.querySelector('.tabs__header-item-next')

		function hideTabContent() {
			content.forEach((item) => {
				item.style.display = 'none'
			})
			tab.forEach((item) => {
				item.classList.remove(activeClass)
			})
		}

		function showTabContent(i = 0) {
			content[i].style.display = display
			tab[i].classList.add(activeClass)
		}

		function showNextTab() {
			const currentActiveIndex = Array.from(tab).findIndex((item) =>
				item.classList.contains(activeClass)
			)
			if (currentActiveIndex < tab.length - 1) {
				hideTabContent()
				showTabContent(currentActiveIndex + 1)
			}
		}

		hideTabContent()
		showTabContent()

		header.addEventListener('click', (e) => {
			const target = e.target
			if (
				target.classList.contains(tabSelector.replace(/\./, '')) ||
				target.parentNode.classList.contains(
					tabSelector.replace(/\./, '')
				)
			) {
				tab.forEach((item, i) => {
					if (target == item || target.parentNode == item) {
						hideTabContent()
						showTabContent(i)
					}
				})
			}
		})

		nextBtn.addEventListener('click', () => {
			showNextTab()
		})
	}

	tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active')

	// Select

	function createCustomSelects() {
		const customSelects = document.getElementsByClassName('custom-select')
		const numOfSelects = customSelects.length

		function createCustomSelect(selectElement) {
			const selectOptions = selectElement.length

			const selectedDiv = document.createElement('DIV')
			selectedDiv.setAttribute('class', 'select-selected')
			selectedDiv.innerHTML =
				selectElement.options[selectElement.selectedIndex].innerHTML
			selectElement.parentNode.appendChild(selectedDiv)

			const optionsDiv = document.createElement('DIV')
			optionsDiv.setAttribute('class', 'select-items select-hide')

			for (let j = 1; j < selectOptions; j++) {
				const optionDiv = document.createElement('DIV')
				optionDiv.innerHTML = selectElement.options[j].innerHTML

				optionDiv.addEventListener('click', function (e) {
					const select =
						this.parentNode.parentNode.getElementsByTagName(
							'select'
						)[0]
					const selectedDiv = this.parentNode.previousSibling
					for (let k = 0; k < selectOptions; k++) {
						if (select.options[k].innerHTML == this.innerHTML) {
							select.selectedIndex = k
							selectedDiv.innerHTML = this.innerHTML
							const sameAsSelected =
								this.parentNode.getElementsByClassName(
									'same-as-selected'
								)
							for (let l = 0; l < sameAsSelected.length; l++) {
								sameAsSelected[l].removeAttribute('class')
							}
							this.setAttribute('class', 'same-as-selected')
							break
						}
					}
					selectedDiv.click()
				})

				optionsDiv.appendChild(optionDiv)
			}
			selectElement.parentNode.appendChild(optionsDiv)

			selectedDiv.addEventListener('click', function (e) {
				e.stopPropagation()
				closeAllSelect(this)
				this.nextSibling.classList.toggle('select-hide')
				this.classList.toggle('select-arrow-active')
				console.log(this)
			})
		}

		function closeAllSelect(selectedElement) {
			const allSelectItems =
				document.getElementsByClassName('select-items')
			const allSelectedDivs =
				document.getElementsByClassName('select-selected')
			const numOfSelectItems = allSelectItems.length
			const numOfSelectedDivs = allSelectedDivs.length
			const exceptCurrentSelect = []

			for (let i = 0; i < numOfSelectedDivs; i++) {
				if (selectedElement == allSelectedDivs[i]) {
					exceptCurrentSelect.push(i)
				} else {
					allSelectedDivs[i].classList.remove('select-arrow-active')
				}
			}

			for (let j = 0; j < numOfSelectItems; j++) {
				if (!exceptCurrentSelect.includes(j)) {
					allSelectItems[j].classList.add('select-hide')
				}
			}
		}

		document.addEventListener('click', function () {
			closeAllSelect(null)
		})

		for (let i = 0; i < numOfSelects; i++) {
			const selectElement =
				customSelects[i].getElementsByTagName('select')[0]
			createCustomSelect(selectElement)
		}
	}
	createCustomSelects()
}
// [END] Press Page Scripts ======================================================================================

// [START] Global Scripts ========================================================================================
// [END] Global Scripts ==========================================================================================
