console.log("-----Question 4------");

class Square {
	constructor(length) {
		this.length = length;
	}

	static getDescription() {
		console.log("I am a Square");
	}

	calculateArea() {
		return this.length * this.length;
	}

	calculatePerimeter() {
		return 4 * this.length;
	}
}

class Rectangle {
	constructor(length, bredth) {
		this.length = length;
		this.bredth = bredth;
	}

	static getDescription() {
		console.log("I am a Rectangle");
	}

	calculateArea() {
		return this.length * this.bredth;
	}

	calculatePerimeter() {
		return 2 * this.length + 2 * this.bredth;
	}
}

class AreaCalculator {
	static calculateArea(shape) {
		return shape.calculateArea();
	}

	static calculatePerimeter(shape) {
		return shape.calculatePerimeter();
	}

	static getDescription() {
		console.log(`I'm an area calculator`);
	}
}

const sq = new Square(20);

console.log(AreaCalculator.calculateArea(sq));
