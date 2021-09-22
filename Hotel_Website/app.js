const setupHamburger = (
	navbarSelector,
	hamburgerSelector,
	listSelector,
	extraSelector
) => {
	const navbar = document.querySelector(navbarSelector);
	const hamburger = navbar.querySelector(hamburgerSelector);
	const list = navbar.querySelector(listSelector);
	const extra = navbar.querySelector(extraSelector);

	const toggleNavbarAndList = (navbar, list, extra) => {
		navbar.classList.toggle("d-block");
		list.classList.toggle("d-block");
		extra.classList.toggle("d-none");
	};

	hamburger.addEventListener("click", (event) => {
		toggleNavbarAndList(navbar, list, extra);
	});
};

setupHamburger(
	".top-header .top-nav",
	".hamburger",
	".top-links-menu",
	".top-icons-menu"
);
setupHamburger(
	".header .header-nav",
	".hamburger",
	".header-links-menu",
	".search"
);
