const { readFileAsync } = require("./util/readFile");

readFileAsync("./dummyFile.txt", (err, data) => {
	if (!err) {
		console.log(data.toString());
		return data.toString();
	}

	throw new Error("Unable to read file.");
});

console.log("Work Done");
