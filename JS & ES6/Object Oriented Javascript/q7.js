console.log(`-----Question 7-----`);

const arr = [1, 2, 3, 4, 5];

// map
// map can be used to transform each element of the array into a new element type depending upon the requirement.

// map returns a new transformed array containing the new elements
const mappedArr = arr.map(function (el) {
	return el * 2;
});
console.log("Double mapped array", mappedArr);

// filter
// filter is used to filter some selected elements from the array
// returs the array of selected elements.
const evenElArr = arr.map(function (el) {
	return el % 2 == 0;
});
console.log("Even elements array", evenElArr);

// reduce
// Reduce can be used to reduce the array elements into a single entity depending upon some logic.
const total = arr.reduce(function (prevTotal, curr) {
	return prevTotal + curr;
}, 0);

console.log("Total Sum: ", total);

// foreach
// for each is used to traverse through the elements of the array
console.log("Using for each");
arr.forEach((e) => console.log(e));

// every
// can be used to check whether every element of the array follow some particular logic or not
// return true or false

console.log(
	"Is every element less than 6 ?",
	arr.every((el) => el < 6)
);
