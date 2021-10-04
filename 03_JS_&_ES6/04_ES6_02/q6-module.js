export const filterUniqueElem = (array) => {
	const filteredElem = [];
	const s = new Set();
	for (let i = 0; i < array.length; i++) {
		s.add(array[i]);
	}
	for (let e of s) {
		filteredElem.push(e);
	}
	return filteredElem;
};
