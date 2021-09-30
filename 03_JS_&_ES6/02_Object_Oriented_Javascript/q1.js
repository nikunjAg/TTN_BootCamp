console.log("----Question 1----");

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.greet = function () {
	console.log(
		`Hello, My name is ${this.name} and I\'m ${this.age} years old.`
	);
};

function Employee(name, age, orgName) {
	Person.call(this, name, age);
	this.orgName = orgName;
}
Employee.prototype = Object.create(Person.prototype);
Object.defineProperty(Employee.prototype, "constructor", {
	value: Employee,
	enumerable: false,
	writable: true,
});

function Developer(name, age, orgName, developerField) {
	Employee.call(this, name, age, orgName);
	this.developerField = developerField;
}
Developer.prototype = Object.create(Employee.prototype);
Object.defineProperty(Developer.prototype, "constructor", {
	value: Developer,
	enumerable: false,
	writable: true,
});

const dev = new Developer("Nikunj", 22, "TTN", "Software");
dev.greet();
