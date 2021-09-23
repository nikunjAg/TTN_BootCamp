const hamburger = document.querySelector("#landing .hamburger");
const sideNav = document.querySelector("#landing .side-nav");
const closeSidebar = sideNav.querySelector(".close");

const toggleSideNav = () => {
	sideNav.classList.toggle("d-block");
};

hamburger.addEventListener("click", () => {
	toggleSideNav();
});

closeSidebar.addEventListener("click", () => {
	toggleSideNav();
});
