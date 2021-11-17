"use strict";

const path = require("path");

const express = require("express");

const usersRouter = require("./router/users");
const aboutRouter = require("./router/about");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:5500");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");

	next();
});

usersRouter(app);
aboutRouter(app);

app.use((err, req, res, next) => {
	res.status(500).json({ message: "Something went wrong.." });
});

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});
