import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import "./App.css";
// Component
// Usually returns HTML code inside javascript file
//  called JSX which is basically a syntactical sugar to the React.createElement() javascript function call
// Due to our project setup and the way react works it transforms this JSX into these functions calls behind the scenes
const EXPENSES = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 0, 4),
	},
	{
		id: "e2",
		title: "New TV",
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];
function App() {
	const [expenses, setExpenses] = useState(EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => [expense].concat(prevExpenses));
	};

	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses className="expenses" items={expenses} />
		</div>
	);
}

export default App;
