import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
	const [inputState, setInputState] = useState({ name: "", amount: "" });

	const submitHandler = (event) => {
		event.preventDefault();
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
							value={inputState.name}
							onChange={(event) => {
								const value = event.target.value;
								setInputState((oldState) => ({
									name: value,
									amount: oldState.amount,
								}));
							}}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="amount">Amount</label>
						<input
							type="number"
							id="amount"
							value={inputState.amount}
							onChange={(event) => {
								const value = event.target.value;
								setInputState((oldState) => ({
									amount: value,
									name: oldState.name,
								}));
							}}
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
