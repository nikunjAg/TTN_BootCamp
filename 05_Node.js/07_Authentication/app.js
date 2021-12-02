"use strict";

require("dotenv").config();

const path = require("path");

const express = require("express");
const passport = require("passport");
const flash = require("connect-flash");

const authRouter = require("./router/auth");
const indexRouter = require("./router/index");

const app = express();
const PORT = process.env.PORT;

require("./boot/connection")();
require("./boot/auth")();

// EJS
app.set("views", "views");
app.set("view engine", "ejs");

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session Setup
app.use(
	require("express-session")({
		secret: "salndlan",
		resave: false,
		saveUninitialized: false,
	})
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Setting Locals
app.use((req, res, next) => {
	res.locals.success_msg = req.flash("success_msg");
	res.locals.error_msg = req.flash("error_msg");
	res.locals.passport_error = req.flash("error");

	console.log("Middleware: ", req.method, req.url, res.locals, req.session);
	next();
});

// Routes
app.use("/", indexRouter);
app.use("/users", authRouter);

// Error Handling
app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).render("error", { err });
});

app.listen(PORT, () => {
	console.log(`App listening on PORT ${PORT}`);
});
