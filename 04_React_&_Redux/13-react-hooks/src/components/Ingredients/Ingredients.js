import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
	const [ingredients, setIngredients] = useState([]);

	const addNewIngredientHandler = (ingredientData) => {
		const newIngredient = {
			id: Math.random().toString(),
			...ingredientData,
		};

		setIngredients((oldIngredients) =>
			oldIngredients.concat(newIngredient)
		);
	};

	const removeIngredientHandler = (ingredientId) => {
		const removeIngredient = (ingredients) => {
			return ingredients.filter(
				(ingredient) => ingredient.id !== ingredientId
			);
		};

		setIngredients(removeIngredient);
	};

	return (
		<div className="App">
			<IngredientForm onAddIngredient={addNewIngredientHandler} />

			<section>
				<Search />
				<IngredientList
					ingredients={ingredients}
					onRemoveIngredient={removeIngredientHandler}
				/>
			</section>
		</div>
	);
}

export default Ingredients;
