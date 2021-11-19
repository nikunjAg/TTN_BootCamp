const { execFile } = require("child_process");

const child = execFile("node", ["spawn.js"], (err, stdout, stderr) => {
	if (err) {
		throw err;
	}
	console.log(stdout);
});
