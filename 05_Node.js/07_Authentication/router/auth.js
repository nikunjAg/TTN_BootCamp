const express = require("express");
const bcrypt = require("bcryptjs");
const passport = require("passport");

const User = require("../model/User");

const router = express.Router();

router.get("/signup", (req, res, next) => {
	res.render("auth/signup");
});

router.post("/signup", async (req, res, next) => {
	try {
		const { name, email, password, password2 } = req.body;

		const errors = [];

		// Check required fields
		if (
			!name.trim() ||
			!email.trim() ||
			!password.trim() ||
			!password2.trim()
		) {
			errors.push({ message: "Please fill in all the fields." });
		}

		// Confirm Passwords
		if (password.trim() !== password2.trim()) {
			errors.push({ message: "Passwords do not match." });
		}

		// Check password min length
		if (password.trim().length < 6) {
			errors.push({ message: "Password length too short." });
		}

		// If Validation Failed
		if (errors.length > 0) {
			return res.render("auth/signup", {
				errors: errors,
				name,
				email,
				password,
				password2,
			});
		}

		const fetchedUser = await User.findOne({ email: email });

		// User exists
		if (fetchedUser) {
			errors.push({ message: "User with email already exists." });
			return res.render("auth/signup", {
				errors: errors,
				name,
				email,
				password,
				password2,
			});
		}

		return bcrypt.genSalt(10, function (err, salt) {
			if (err) throw err;
			bcrypt.hash(password, salt, async function (err, hash) {
				if (err) throw err;

				const response = await User.create({
					name,
					email,
					password: hash,
				});

				console.log(response);

				return res.redirect("/users/login");
			});
		});
	} catch (err) {
		next(err);
	}
});

router.get("/login", (req, res, next) => {
	res.render("auth/login");
});

// Login using Local Strategy
router.post(
	"/login",
	async (req, res, next) => {
		try {
			const { email, password } = req.body;

			const errors = [];
			if (!email.trim() || !password.trim()) {
				errors.push({ message: "Please enter values in the fields." });
			}

			if (password.trim().length < 6) {
				errors.push({ message: "Please length too short." });
			}

			if (errors.length > 0) {
				return res.render("auth/login", {
					errors: errors,
					email,
					password,
				});
			}

			const fetchedUser = await User.findOne({ email });

			if (!fetchedUser) {
				errors.push({ message: "No such user exists." });
				return res.render("auth/login", {
					errors: errors,
					email,
					password,
				});
			}

			next();
		} catch (err) {
			next(err);
		}
	},
	passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/users/login",
		failureFlash: true,
	})
);

router.get(
	"/auth/facebook",
	passport.authenticate("facebook", {
		authType: "reauthenticate",
		scope: ["email", "public_profile"],
	})
);

router.get(
	"/auth/facebook/callback",
	passport.authenticate("facebook", {
		successRedirect: "/",
		failureRedirect: "/users/login",
	})
);

router.get("/logout", (req, res, next) => {
	req.logOut();
	req.flash("success_msg", "Logged out successfully");
	res.redirect("/users/login");
});

module.exports = router;
