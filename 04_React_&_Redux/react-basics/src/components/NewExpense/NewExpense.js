import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
	const [showExpenseForm, setShowExpenseForm] = useState(false);

	const addExpenseDataHandler = (expenseData) => {
		const expense = {
			...expenseData,
			id: Math.random().toString(),
		};

		props.onAddExpense(expense);

		toggleExpenseForm();
	};

	const toggleExpenseForm = () => {
		setShowExpenseForm((prevState) => !prevState);
	};

	let newExpenseContent = (
		<button className="new-expense__cta" onClick={toggleExpenseForm}>
			Add New Expense
		</button>
	);

	if (showExpenseForm) {
		newExpenseContent = (
			<ExpenseForm
				onCancel={toggleExpenseForm}
				onAddExpenseData={addExpenseDataHandler}
			/>
		);
	}

	return <Card className="new-expense">{newExpenseContent}</Card>;
}

export default NewExpense;
