const bcrypt = require("bcryptjs");
const passport = require("passport");
const Strategy = require("passport-local").Strategy;

const User = require("../model/User");

module.exports = () => {
	passport.use(
		new Strategy({ usernameField: "email" }, async function (
			username,
			password,
			done
		) {
			try {
				const fetchedUser = await User.findOne({ email: username });

				// User not found
				if (!fetchedUser) {
					return done(null, false, { message: "Incorrect Email" });
				}

				// Passwords don't match
				const validPassword = await bcrypt.compare(
					password,
					fetchedUser.password
				);
				if (!validPassword) {
					return done(null, false, {
						message: "Incorrect Password.",
					});
				}

				done(null, fetchedUser);
			} catch (err) {
				done(err);
			}
		})
	);

	// Serializing the user._id into the session
	passport.serializeUser(function (user, done) {
		console.log("Serializing: ", user);
		done(null, user._id);
	});

	// Deserializing the user._id from the session
	passport.deserializeUser(async function (id, done) {
		try {
			const user = await User.findById(id);
			if (!user) return done(null, false);

			done(null, user);
		} catch (err) {
			done(err);
		}
	});
};
