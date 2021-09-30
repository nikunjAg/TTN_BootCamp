console.log(`------Question 4------`);

// arguments is an array which each function has which shows the list of parameters which the function has received on calling

// length -> decribes the number of parameters the function is receiving on calling it.
// callee -> function being called
// paramenters list -> list of parameters

function fn() {
	console.log(arguments, arguments.length, arguments.callee);
}

fn(1, 2, 3);
