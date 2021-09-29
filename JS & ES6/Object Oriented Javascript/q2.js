console.log(`---- Question 2 -----`);
const ar = [1, 2, 3, 4, 5];
for (let i = 0; i < ar.length; i++) {
	setTimeout(() => {
		console.log(ar[i], Date.now());
	}, 3 * (i + 1) * 1000);
}
