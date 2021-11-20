const path = require("path");

const express = require("express");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 8000;

const oneDayMillis = 24 * 60 * 60 * 1000;
let session;
const validUsername = "Nikunj";
const validPassword = "123456";

app.use(
	expressSession({
		secret: "ThisIsMysecReTFOrTHeseSSiON",
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: oneDayMillis,
		},
	})
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});

app.get("/", (req, res, next) => {
	session = req.session;

	if (session.userId) {
		console.log("Yes");
		res.sendFile(path.join(__dirname, "views", "home.html"));
	} else {
		res.sendFile(path.join(__dirname, "views", "index.html"));
	}
});

app.post("/login", (req, res, next) => {
	const { username, password } = req.body;
	console.log(username, password);
	if (username === validUsername && password === validPassword) {
		session = req.session;
		session.userId = username;
		console.log(req.session);
		res.redirect("/");
	} else {
		res.sendFile(path.join(__dirname, "views", "index.html"));
	}
});

app.get("/logout", (req, res, next) => {
	req.session.destroy();
	res.redirect("/");
});

app.listen(PORT);
