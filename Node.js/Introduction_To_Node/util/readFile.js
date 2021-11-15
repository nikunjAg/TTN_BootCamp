const fs = require("fs");

const readFileSync = (filePath) => {
	return fs.readFileSync(filePath).toString();
};

const readFileAsync = (filePath, cb) => {
	fs.readFile(filePath, cb);
};

module.exports = {
	readFileSync,
	readFileAsync,
};
