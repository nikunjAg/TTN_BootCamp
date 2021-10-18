import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
	if (props.items.length === 0) {
		return (
			<h2 className="expenses-list__fallback">
				<p>Found no expenses.</p>
			</h2>
		);
	}

	const expensesItems = props.items.map((item) => (
		<li key={item.id}>
			<ExpenseItem {...item} />
		</li>
	));

	return <ul className="expenses-list">{expensesItems}</ul>;
}

export default ExpensesList;
