const BASE_URL = "http://localhost:3000";
const headerLinks = document.querySelectorAll("li");
const contentEl = document.querySelector("p");
let lastActiveLink = headerLinks[0];

const parseJSON = (response) => {
	return new Promise((resolve, reject) => {
		response.json().then((data) =>
			resolve({
				status: response.status,
				statusText: response.statusText,
				ok: response.ok,
				data: data,
			})
		);
	});
};

const sendRequest = (path) => {
	return fetch(BASE_URL + path).then(parseJSON);
};

const fetchData = (path) => {
	sendRequest(path).then((response) => {
		if (response.status >= 200 && response.status < 300) {
			contentEl.innerText = response.data.content;
			contentEl.className = "";
		} else {
			contentEl.innerText = response.data.message;
			contentEl.className = "error-message";
		}
	});
};

headerLinks.forEach((li) => {
	li.addEventListener("click", () => {
		lastActiveLink.classList.remove("active");
		li.classList.add("active");
		lastActiveLink = li;

		fetchData(li.dataset.path);
	});
});

fetchData("/");
