"use strict";

const PORT = 3000;

const path = require("path");

const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("./model/User");
require("./connection");

const app = express();

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/signup", (req, res, next) => {
	res.render("signup");
});

app.post("/signup", (req, res, next) => {
	const { name, email, password } = req.body;

	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(password, salt, async function (err, hash) {
			try {
				const response = await User.create({
					name,
					email,
					password: hash,
				});
				res.status(201).send(response);
			} catch (err) {
				next(err);
			}
		});
	});
});

// app.get;

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send(err);
});

app.listen(PORT, () => {
	console.log(`App listening on PORT ${PORT}`);
});
