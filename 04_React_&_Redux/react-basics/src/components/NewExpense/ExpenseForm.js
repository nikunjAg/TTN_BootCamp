import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	const titleChangeHandler = (event) => {
		const val = event.target.value;
		setEnteredTitle(val);
	};
	const amountChangeHandler = (event) => {
		const val = event.target.value;
		setEnteredAmount(val);
	};
	const dateChangeHandler = (event) => {
		const val = event.target.value;
		setEnteredDate(val);
	};

	const clearFormHanlder = () => {
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	const onCancelHandler = () => {
		clearFormHanlder();
		props.onCancel();
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};
		props.onAddExpenseData(expenseData);

		clearFormHanlder();
	};

	return (
		<form className="expense-form" onSubmit={formSubmitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						onChange={titleChangeHandler}
						value={enteredTitle}
						placeholder="Enter Title"
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						onChange={amountChangeHandler}
						value={enteredAmount}
						placeholder="Enter Amount"
						min="0.01"
						step="0.01"
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						onChange={dateChangeHandler}
						value={enteredDate}
						placeholder="Enter Date"
						min="2018-01-01"
						max="2021-12-31"
					/>
				</div>
				<div className="new-expense__actions">
					<button type="button" onClick={onCancelHandler}>
						Cancel
					</button>
					<button type="submit">Add New Expense</button>
				</div>
			</div>
		</form>
	);
}

export default ExpenseForm;
