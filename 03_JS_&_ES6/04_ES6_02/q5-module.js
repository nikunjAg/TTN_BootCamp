console.log("-----Question 5-----");

const Calculates = "AREA";
export default Calculates;

export const circleAreaCalculator = (radius) => {
	return Math.PI * radius * radius;
};

export const rectangleAreaCalculator = (length, bredth) => {
	return length * bredth;
};

export const cylinderAreaCalculator = (radius, heigth) => {
	return 2 * Math.PI * radius * heigth;
};
