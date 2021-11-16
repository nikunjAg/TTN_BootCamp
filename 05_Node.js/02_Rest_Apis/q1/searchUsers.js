const http = require("http");
const url = require("url");

const getFilteredUsers = require("./users");

const sendJSON = (res, jsonData) => {
	return res.end(JSON.stringify(jsonData, null, 3));
};

const server = http.createServer((req, res) => {
	const baseURL = "http://" + req.headers.host + "/";
	const parsedUrl = new URL(req.url, baseURL);

	res.setHeader("Content-Type", "application/json");
	if (parsedUrl.pathname === "/users" && req.method === "GET") {
		const username = parsedUrl.searchParams.get("username") || "";
		const firstname = parsedUrl.searchParams.get("firstname") || "";
		const lastname = parsedUrl.searchParams.get("lastname") || "";

		return getFilteredUsers(username, firstname, lastname, (err, users) => {
			if (err) {
				res.statusCode = err.code;
				return sendJSON(res, { message: err.message });
			}

			res.statusCode = 200;
			sendJSON(res, {
				message: "Users fetched successfully",
				users: users,
			});
		});
	}
	res.statusCode = 400;
	sendJSON(res, { message: "Please request a valid end point" });
});

server.listen(3000);
