console.log("-----Question 2-----");

const strList = ["abc", "gfg", "bca", "ffg", "bad", "fgg", "abd"];

const filterAnagrams = (stringList) => {
	const map = new Map();
	for (var str of strList) {
		const sortedStr = str.split("").sort().join("");

		let anagrams = [str];
		if (map.has(sortedStr)) {
			anagrams = map.get(sortedStr).concat(anagrams);
		}
		map.set(sortedStr, anagrams);
	}

	return map;
};

console.log(filterAnagrams(strList));
