console.log("----- Question 2 -----");
const listItems = Array.from(document.querySelectorAll("li"));
const flexListItems = listItems.filter((li) =>
	li.textContent.includes("Flexbox")
);

const dataTimeList = flexListItems.map((fli) => fli.getAttribute("data-time"));

const secondsList = dataTimeList.map((dt) => {
	const [min, sec] = dt.split(":");
	return +min * 60 + +sec;
});

const totalSeconds = secondsList.reduce((total, curr) => total + curr, 0);

console.log("Data Time List ----" + dataTimeList);
console.log("Seconds List ----" + secondsList);
console.log("Total Seconds ----" + totalSeconds);
