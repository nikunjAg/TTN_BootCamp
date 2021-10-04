console.log("----Question 1----");

const arr = [1, 2, 1, 3, 5, 5, 7, 4, 5];

const s = new Set();
for (let e of arr) s.add(e);

for (let e of s) console.log(e);
