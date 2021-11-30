"use strict";

const path = require("path");

const express = require("express");

require("./connection");
const authRouter = require("./router/auth");
const indexRouter = require("./router/index");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);
app.use("/users", authRouter);

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send(err);
});

app.listen(PORT, () => {
	console.log(`App listening on PORT ${PORT}`);
});
