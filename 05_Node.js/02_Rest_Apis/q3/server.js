const http = require("http");
const url = require("url");

const sendJSON = (res, jsonData) => {
	return res.end(JSON.stringify(jsonData, null, 3));
};

const setHeaders = (res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, DELETE, PUT, PATCH, OPTIONS"
	);
	res.setHeader("Content-Type", "application/json");
};

const server = http.createServer((req, res) => {
	const { method } = req;
	const parsedUrl = url.parse(req.url);

	setHeaders(res);
	if (
		(parsedUrl.path === "/" || parsedUrl.path === "/home") &&
		method === "GET"
	) {
		return sendJSON(res, { content: "Home Page" });
	} else if (parsedUrl.path === "/about" && method === "GET") {
		return sendJSON(res, { content: "About Page" });
	} else if (parsedUrl.path === "/contact" && method === "GET") {
		return sendJSON(res, { content: "Contact Page" });
	}
	res.statusCode = 400;
	return sendJSON(res, {
		message: "Please send request to a valid endpoint.",
	});
});

server.listen(3000);
