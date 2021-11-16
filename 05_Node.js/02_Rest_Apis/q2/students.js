const students = [
	{
		first_name: "Nero",
		last_name: "Huffman",
		branch: "CSE",
	},
	{
		first_name: "Bradley",
		last_name: "Roman",
		branch: "IT",
	},
	{
		first_name: "Oscar",
		last_name: "Lloyd",
		branch: "IT",
	},
	{
		first_name: "Xander",
		last_name: "Mcknight",
		branch: "ECE",
	},
	{
		first_name: "Phelan",
		last_name: "Luna",
		branch: "CSE",
	},
	{
		first_name: "Jermaine",
		last_name: "Mccarthy",
		branch: "CSE",
	},
	{
		first_name: "Bert",
		last_name: "Noble",
		branch: "IT",
	},
	{
		first_name: "Brandon",
		last_name: "Robles",
		branch: "ECE",
	},
	{
		first_name: "Uriel",
		last_name: "Shaffer",
		branch: "CSE",
	},
	{
		first_name: "Andrew",
		last_name: "Mcbride",
		branch: "IT",
	},
];

exports.getAllStudent = () => {
	return students;
};

exports.filterStudentsByBranch = (branch) => {
	const filteredUsers = students.filter((student) =>
		student.branch.toLowerCase().includes(branch.toLowerCase())
	);

	return filteredUsers;
};
