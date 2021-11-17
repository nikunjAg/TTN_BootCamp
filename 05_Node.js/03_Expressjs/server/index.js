"use strict";

const path = require("path");

const express = require("express");

const usersRouter = require("./router/users");
const aboutRouter = require("./router/about");

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");

	next();
});

usersRouter(app);
aboutRouter(app);

app.use((err, req, res, next) => {
	res.status(err.code || 500).json({
		message: err.message || "Something went wrong..",
	});
});

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});
