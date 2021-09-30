const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

const toggleMobileMenu = () => {
	hamburger.classList.toggle("is-active");
	mobileNav.classList.toggle("is-active");
};

hamburger.addEventListener("click", toggleMobileMenu);
