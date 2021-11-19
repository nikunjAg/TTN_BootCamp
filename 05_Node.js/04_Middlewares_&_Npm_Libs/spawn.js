const { spawn } = require("child_process");

const child = spawn("find . -type f -maxdepth 1 | wc -l", {
	shell: true,
});

child.stdout.on("data", (chunk) => {
	console.log("Output: " + chunk.toString());
});

child.stderr.on("data", (chunk) => {
	console.log("Error: " + chunk.toString());
});
