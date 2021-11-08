import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
	const [ingredientName, setIngredientName] = useState("");
	const [ingredientAmount, setIngredientAmount] = useState("");
	const nameInputRef = useRef();

	const nameChangeHandler = (event) => {
		setIngredientName(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setIngredientAmount(event.target.value);
	};

	const resetFormHandler = () => {
		setIngredientName("");
		setIngredientAmount("");

		nameInputRef.current.focus();
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const ingredient = {
			title: ingredientName,
			amount: +ingredientAmount,
		};

		props.onAddIngredient(ingredient);
		resetFormHandler();
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
							ref={nameInputRef}
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
