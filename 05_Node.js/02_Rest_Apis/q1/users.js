const users = [
	{
		username: "eric",
		firstname: "Eric",
		lastname: "Park",
		password: "eric142",
	},
	{
		username: "steve",
		firstname: "Steven",
		lastname: "Cummings",
		password: "steve142",
	},
	{
		username: "cail",
		firstname: "Cailin",
		lastname: "Rich",
		password: "cail142",
	},
	{
		username: "hunt",
		firstname: "Hunter",
		lastname: "Gilbert",
		password: "hunt142",
	},
	{
		username: "beth",
		firstname: "Bethany",
		lastname: "Grimes",
		password: "beth142",
	},
	{
		username: "rob_in",
		firstname: "Robin",
		lastname: "Burke",
		password: "rob_in142",
	},
	{
		username: "cole",
		firstname: "Cole",
		lastname: "Conner",
		password: "cole142",
	},
	{
		username: "Ann",
		firstname: "Ann",
		lastname: "Camacho",
		password: "Ann142",
	},
	{
		username: "molly",
		firstname: "Molly",
		lastname: "Hardin",
		password: "molly142",
	},
	{
		username: "jada",
		firstname: "Jada",
		lastname: "Blake",
		password: "jada142",
	},
];

const getBadRequestError = () => {
	const error = new Error();
	error.code = 400;
	error.message = "Please send a valid request";
	return error;
};

const getFilteredUsers = (username, firstname, lastname, cb) => {
	// console.log(typeof username, typeof firstname, typeof lastname);
	let filteredUsers = users;

	if (username && typeof username === "string") {
		filteredUsers = filteredUsers.filter((user) =>
			user.username.toLowerCase().includes(username.toLowerCase())
		);
	} else if (username) {
		return cb(getBadRequestError(), null);
	}

	if (firstname) {
		filteredUsers = filteredUsers.filter((user) =>
			user.firstname.toLowerCase().includes(firstname.toLowerCase())
		);
	} else if (firstname) {
		return cb(getBadRequestError(), null);
	}

	if (lastname) {
		filteredUsers = filteredUsers.filter((user) =>
			user.lastname.toLowerCase().includes(lastname.toLowerCase())
		);
	} else if (lastname) {
		return cb(getBadRequestError(), null);
	}

	return cb(null, filteredUsers);
};

module.exports = getFilteredUsers;
