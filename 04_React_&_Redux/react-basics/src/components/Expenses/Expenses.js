import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

function Expenses({ className, items }) {
	const [filteredYear, setFilteredYear] = useState("2022");

	const expenseItems = items.map((item) => (
		<ExpenseItem key={item.id} {...item} />
	));

	const changeYearHandler = (year) => {
		setFilteredYear(year);
	};

	return (
		<Card className={className}>
			<ExpenseFilter
				selectedYear={filteredYear}
				onChangeYear={changeYearHandler}
			/>
			{expenseItems}
		</Card>
	);
}

export default Expenses;
