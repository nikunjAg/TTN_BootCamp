console.log("-----Question 3------");

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	static getDescription() {
		return "I am a Person";
	}

	greet() {
		console.log(
			`Hello, my name is ${this.name} and I am ${
				this.age
			} years old. ${this.constructor.getDescription()}.`
		);
	}
}

class Teacher extends Person {
	constructor(name, age, subject) {
		super(name, age);
		this.subject = subject;
	}

	static getDescription() {
		return "I am a Teacher";
	}

	greet() {
		console.log(
			`Hello, my name is ${this.name} and I am ${
				this.age
			} years old. I teach ${
				this.subject
			}. ${this.constructor.getDescription()}.`
		);
	}
}

class CollegeTeacher extends Teacher {
	constructor(name, age, subject, college) {
		super(name, age, subject);
		this.college = college;
	}

	static getDescription() {
		return "I am a College Teacher";
	}

	greet() {
		console.log(
			`Hello, my name is ${this.name} and I am ${
				this.age
			} years old. I teach ${this.subject} in ${
				this.college
			} college. ${this.constructor.getDescription()}.`
		);
	}
}

const collegeTeacher = new CollegeTeacher("Nikunj", 22, "Javascript", "USICT");
collegeTeacher.greet();
