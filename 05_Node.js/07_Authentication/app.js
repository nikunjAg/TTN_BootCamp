"use strict";

const path = require("path");

const express = require("express");

const authRouter = require("./router/auth");
const indexRouter = require("./router/index");

const app = express();
const PORT = process.env.PORT || 3000;

// Database
require("./connection");

// EJS
app.set("views", "views");
app.set("view engine", "ejs");

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/", indexRouter);
app.use("/users", authRouter);

// Error Handling
app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send(err);
});

app.listen(PORT, () => {
	console.log(`App listening on PORT ${PORT}`);
});
