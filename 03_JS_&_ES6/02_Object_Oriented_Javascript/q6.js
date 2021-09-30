console.log(`-----Question 6-----`);

function counter() {
	var count = 0;
	function logCounter() {
		console.log(count);
	}
	function incrementCounter() {
		++count;
	}
	function decrementCounter() {
		--count;
	}

	return { logCounter, incrementCounter, decrementCounter };
}
const c1 = counter();

c1.logCounter();
c1.incrementCounter();
c1.logCounter();

c1.incrementCounter();
c1.incrementCounter();
c1.incrementCounter();

c1.decrementCounter();

c1.logCounter();
