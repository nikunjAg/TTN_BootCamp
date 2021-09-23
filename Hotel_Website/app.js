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

	const showNavbarAndList = (navbar, list, extra) => {
		navbar.classList.add("d-block");
		list.classList.add("d-block");
		extra.classList.add("d-none");
	};

	const hideNavbarAndList = (navbar, list, extra) => {
		navbar.classList.remove("d-block");
		list.classList.remove("d-block");
		extra.classList.remove("d-none");
	};

	const toggleNavbarAndList = (navbar, list, extra) => {
		navbar.classList.toggle("d-block");
		list.classList.toggle("d-block");
		extra.classList.toggle("d-none");
	};

	hamburger.addEventListener("click", (event) => {
		toggleNavbarAndList(navbar, list, extra);
	});

	// hamburger.addEventListener("mouseenter", (event) => {
	// 	showNavbarAndList(navbar, list, extra);
	// });

	// hamburger.addEventListener("mouseleave", (event) => {
	// 	hideNavbarAndList(navbar, list, extra);
	// });
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
