import React from "react";

import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
	const addExpenseDataHandler = (expenseData) => {
		const expense = {
			...expenseData,
			id: Math.random().toString(),
		};
		console.log(expense);
		props.onAddExpense(expense);
	};

	return (
		<Card className="new-expense">
			<ExpenseForm onAddExpenseData={addExpenseDataHandler} />
		</Card>
	);
}

export default NewExpense;
