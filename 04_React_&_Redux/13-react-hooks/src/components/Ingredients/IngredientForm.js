import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
	const [ingredientName, setIngredientName] = useState("");
	const [ingredientAmount, setIngredientAmount] = useState("");
	// const [inputState, setInputState] = useState({ name: "", amount: "" });

	const nameChangeHandler = (event) => {
		setIngredientName(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setIngredientAmount(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		// Validate Ingredient Data
		// if (ingredientName.trim().length === 0 || +ingredientAmount)
	};

	return (
		<section className="ingredient-form">
			<Card>
				<form onSubmit={submitHandler}>
					<div className="form-control">
						<label htmlFor="title">Name</label>
						<input
							type="text"
							id="title"
							value={ingredientName}
							onChange={nameChangeHandler}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="amount">Amount</label>
						<input
							type="number"
							id="amount"
							value={ingredientAmount}
							onChange={amountChangeHandler}
						/>
					</div>
					<div className="ingredient-form__actions">
						<button type="submit">Add Ingredient</button>
					</div>
				</form>
			</Card>
		</section>
	);
});

export default IngredientForm;
