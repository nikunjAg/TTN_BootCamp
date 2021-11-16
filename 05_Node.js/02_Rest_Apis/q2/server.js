const http = require("http");
const url = require("url");
const { getAllStudent, filterStudentsByBranch } = require("./students");

const sendJSON = (res, json) => {
	return res.end(JSON.stringify(json, null, 3));
};

const setHeaders = (res) => {
	res.setHeader("Content-Type", "application/json");
};

const server = http.createServer((req, res) => {
	const baseURL = "http://" + req.headers.host + "/";
	const parsedUrl = new URL(req.url, baseURL);

	setHeaders(res);

	if (parsedUrl.pathname === "/students" && req.method === "GET") {
		if (parsedUrl.searchParams.has("branch")) {
			const filteredUsers = filterStudentsByBranch(
				parsedUrl.searchParams.get("branch")
			);
			return sendJSON(res, filteredUsers);
		}

		const users = getAllStudent();
		return sendJSON(res, users);
	}

	sendJSON(res, { message: "Please hit a valid endpoint." });
});

server.listen(3000);
