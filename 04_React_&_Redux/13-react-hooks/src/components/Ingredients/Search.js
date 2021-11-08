import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import "./Search.css";

const INGREDIENTS_URL =
	"https://react-hooks-demo-8c722.firebaseio.com/ingredients.json";

const Search = React.memo(({ onFilterIngredients }) => {
	const [enteredFilter, setEnteredFilter] = useState("");

	useEffect(() => {
		const filterIngredients = async () => {
			const query =
				enteredFilter.trim().length === 0
					? ""
					: `?orderBy="title"&equalTo="${enteredFilter}"`;

			const response = await fetch(INGREDIENTS_URL + query);

			if (!response.ok) throw new Error("Unable to filter");

			const data = await response.json();

			const filteredIngredients = Object.keys(data).map((id) => ({
				...data[id],
				id: id,
			}));

			onFilterIngredients(filteredIngredients);
		};

		const timerId = setTimeout(() => {
			filterIngredients().catch((error) => console.log(error));
		}, 500);

		return () => {
			clearTimeout(timerId);
		};
	}, [enteredFilter, onFilterIngredients]);

	const filterChangeHandler = (event) => {
		setEnteredFilter(event.target.value);
	};

	return (
		<section className="search">
			<Card>
				<div className="search-input">
					<label>Filter by Title</label>
					<input
						type="text"
						value={enteredFilter}
						onChange={filterChangeHandler}
					/>
				</div>
			</Card>
		</section>
	);
});

export default Search;
