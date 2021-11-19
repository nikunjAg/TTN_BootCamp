const express = require("express");
const axios = require("axios");

const app = express();

app.get("/users/:username", async (req, res, next) => {
	const { username } = req.params;

	try {
		const {
			data: {
				name,
				login,
				avatar_url,
				location,
				company,
				followers,
				following,
			},
		} = await axios.get(`https://api.github.com/users/${username}`);

		const responseData = {
			name,
			login,
			avatar_url,
			location,
			company,
			followers,
			following,
		};

		res.status(200).json(responseData);
	} catch (err) {
		next(err);
	}
});

app.use((err, req, res, next) => {
	// console.log(err);
	if (err.response) {
		return res.status(err.response.status).json(err.response.data);
	} else if (err.request) {
		res.status(500).send({ message: "Something went wrong!" });
	} else {
		res.status(500).send({ message: "Something went wrong!" });
	}
});

app.listen(8000);
