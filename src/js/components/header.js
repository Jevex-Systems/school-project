class Header {
	selectors = {
		root: '[data-js-header]',
		overlay: '[data-js-header-overlay]',
		burgerButton: '[data-js-header-burger-button]',
	};

	stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock',
	};

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root);
		this.overlayElement = this.rootElement.querySelector(
			this.selectors.overlay
		);
		this.burgerButtonElement = this.rootElement.querySelector(
			this.selectors.burgerButton
		);
		this.bindEvents();
	}

	bindEvents() {
		this.burgerButtonElement.addEventListener(
			'click',
			this.onBurgerButtonClick
		);
	}

	onBurgerButtonClick = () => {
		this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
		this.overlayElement.classList.toggle(this.stateClasses.isActive);
		document.documentElement.classList.toggle(this.stateClasses.isLock);
	};
}

new Header();

document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header');
	let lastScrollY = window.scrollY;

	window.addEventListener('scroll', () => {
		const currentScrollY = window.scrollY;

		if (currentScrollY > lastScrollY && currentScrollY > 50) {
			header.classList.add('hidden');
		} else if (currentScrollY === 0) {
			header.classList.remove('hidden');
		}

		lastScrollY = currentScrollY;
	});
});

document.addEventListener('DOMContentLoaded', function () {
	let currentPath = window.location.pathname;
	const menuItems = document.querySelectorAll('.header__menu-item');
	const isModalMenu = window.innerWidth < 1024;

	if (currentPath === '' || currentPath === '/') {
		currentPath = '/index.html';
	}
	currentPath = currentPath.replace(/^\/?\.\//, '/');

	menuItems.forEach(item => {
		const link = item.querySelector('.header__menu-link');
		let linkPath = link.getAttribute('href');
		linkPath = linkPath.replace(/^\/?\.\//, '/');

		const isContactPage = linkPath === '/contact.html';
		const shouldHighlight =
			currentPath === linkPath && (isModalMenu || !isContactPage);

		if (shouldHighlight) {
			menuItems.forEach(i => i.classList.remove('is-active'));
			item.classList.add('is-active');
		}
	});
});
