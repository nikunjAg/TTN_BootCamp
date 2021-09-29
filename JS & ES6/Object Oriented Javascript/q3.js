console.log(`------Question 3------`);

const obj1 = {
	name: "Nikunj",
	age: 22,
};
const obj2 = {
	name: "Anmol",
	age: 25,
};

function fn() {
	console.log(this);
	console.log(arguments);
}

// bind is used to create a new bounded fuction which has the same body as the current function by its context has been configured/changed and the arguments can also be passed.
// const boundedFn = fn.bind(newContext, arg1, arg2, arg3, ...);
// boundedFn();
const boundedFn = fn.bind(obj1);
boundedFn();

// call
// call can be used to directly call the function with configured context and the arguments can also be passed
// fn.call(newContext, arg1, arg2, arg3, ...);
fn.call(obj2);
