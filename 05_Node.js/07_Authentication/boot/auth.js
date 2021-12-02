const bcrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = process.env;

const User = require("../model/User");

module.exports = () => {
	// Passport Local Strategy
	passport.use(
		new LocalStrategy({ usernameField: "email" }, async function (
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

	// Passport Facebook Strategy
	passport.use(
		new FacebookStrategy(
			{
				clientID: FACEBOOK_APP_ID,
				clientSecret: FACEBOOK_APP_SECRET,
				callbackURL: "/users/auth/facebook/callback",
				profileFields: ["id", "displayName", "email", "gender"],
			},
			async (accessToken, refreshToken, profile, done) => {
				console.log("Profile", profile);

				try {
					const fetchedUser = await User.findOne({
						userId: profile.id,
					});

					// Login with existing user
					if (fetchedUser) {
						console.log("Fetched User", fetchedUser);
						return done(null, fetchedUser);
					}

					// Create a new user
					const createdUser = await User.create({
						userId: profile.id,
						name: profile.displayName,
						email: profile.emails ? profile.emails[0].value : "",
						token: accessToken,
					});

					done(null, createdUser);
				} catch (err) {
					done(err);
				}
			}
		)
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
