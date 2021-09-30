console.log(`------Question 5------`);

const InvocationsChecker = (function Parent() {
	let invocations = 0;
	let instances = 0;
	return function () {
		if (new.target) ++instances;
		else ++invocations;

		return {
			invocations,
			instances,
		};
	};
})();

console.log(InvocationsChecker());
console.log(InvocationsChecker());

console.log(new InvocationsChecker());

console.log(new InvocationsChecker());
console.log(InvocationsChecker());
console.log(new InvocationsChecker());
console.log(InvocationsChecker());
