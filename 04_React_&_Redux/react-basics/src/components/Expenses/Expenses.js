import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ className, items }) {
	const [filteredYear, setFilteredYear] = useState("2021");

	const changeYearHandler = (year) => {
		setFilteredYear(year);
	};

	const filteredExpenseItems = items.filter(
		(item) => item.date.getFullYear() === +filteredYear
	);

	return (
		<Card className={className}>
			<ExpenseFilter
				selectedYear={filteredYear}
				onChangeYear={changeYearHandler}
			/>
			<ExpensesChart expenses={filteredExpenseItems} />
			<ExpensesList items={filteredExpenseItems} />
		</Card>
	);
}

export default Expenses;
