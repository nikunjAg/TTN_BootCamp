const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

const themeToggler = document.querySelector(".theme-toggle");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("is-active");
	mobileNav.classList.toggle("is-active");
});

themeToggler.addEventListener("click", () => {
	document.body.classList.toggle("dark-theme");
});
