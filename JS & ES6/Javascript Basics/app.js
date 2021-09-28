const greetingEl = document.querySelector(".greetings");
const timeEl = document.querySelector(".currentTime");
const dateEl = document.querySelector(".currentDate");

setInterval(() => {
	const d = new Date();

	const hours = d.getHours();

	if (hours >= 6 && hours < 12) {
		greetingEl.textContent = "Good Morning";
	} else if (hours < 17) {
		greetingEl.textContent = "Good Afternoon";
	} else if (hours < 20) {
		greetingEl.textContent = "Good Evening";
	} else {
		greetingEl.textContent = "Good Night";
	}

	timeEl.textContent = d.toLocaleTimeString("en-US", {
		hour: "2-digit",
		hour12: true,
		minute: "2-digit",
		second: "2-digit",
	});

	dateEl.textContent = d.toLocaleDateString("en-GB", {
		day: "numeric",
		month: "short",
		year: "numeric",
	});
}, 1000);
