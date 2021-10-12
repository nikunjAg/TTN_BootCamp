import React from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses({ className, items }) {
	const expenseItems = items.map((item) => (
		<ExpenseItem key={item.id} {...item} />
	));

	return <Card className={className}>{expenseItems}</Card>;
}

export default Expenses;
