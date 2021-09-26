const topHeaderHamburger = document.querySelector(".top-header .hamburger");
const topHeaderMobileNav = document.querySelector(".top-mobile-nav");

const headerHamburger = document.querySelector(".header .hamburger");
const headerMobileNav = document.querySelector(".header-mobile-nav");

const cancelBtns = document.querySelectorAll(".mobile-nav .close-btn");

topHeaderHamburger.addEventListener("click", () => {
	topHeaderMobileNav.classList.toggle("is-active");
});

headerHamburger.addEventListener("click", () => {
	headerMobileNav.classList.toggle("is-active");
});

cancelBtns.forEach((cancelBtn) =>
	cancelBtn.addEventListener("click", () =>
		cancelBtn.parentElement.classList.remove("is-active")
	)
);
