import React from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

function ExpenseItem(props) {
	// React hook -> starts with use, should be called directly on components (inside them)
	// takes the default value and returns a array of value and setter for that value
	const price = props.amount.toFixed(2);

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__desc">
				<h3 className="expense-item__title">{props.title}</h3>
				<div className="expense-item__price">$ {price}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;
