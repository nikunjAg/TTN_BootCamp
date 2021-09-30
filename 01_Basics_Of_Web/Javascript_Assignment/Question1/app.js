const amount = +prompt('Enter the amount.');
const interestRate = +prompt('Enter the interest rate.');
const years = +prompt('Enter the number of years.');

console.log(amount);
console.log(interestRate);
console.log(years);

const interest = ((amount * interestRate * years) / 100).toFixed(2);

const amountEl = document.querySelector('.amount span');
const interestEl = document.querySelector('.interest span');
const timeEl = document.querySelector('.time span');
const simpleInterestEl = document.querySelector('.simpleInterest span');

amountEl.textContent = "₹ " + amount;
interestEl.textContent = interestRate + "%";
timeEl.textContent = years;
simpleInterestEl.textContent = "₹ " + interest;

