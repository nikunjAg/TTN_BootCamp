import React, { useCallback, useEffect, useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

const INGREDIENTS_URL =
	"https://react-hooks-demo-8c722.firebaseio.com/ingredients.json";

function Ingredients() {
	const [ingredients, setIngredients] = useState([]);

	const filterIngredientsHandler = useCallback((filteredIngredients) => {
		setIngredients(filteredIngredients);
	}, []);

	const addNewIngredientHandler = (ingredientData) => {
		fetch(INGREDIENTS_URL, {
			method: "POST",
			body: JSON.stringify(ingredientData),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (!response.ok) throw new Error("Unable to add ingredient!");

				return response.json();
			})
			.then((data) => {
				const newIngredient = {
					id: data.name,
					...ingredientData,
				};

				setIngredients((oldIngredients) =>
					oldIngredients.concat(newIngredient)
				);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const removeIngredientHandler = (ingredientId) => {
		fetch(
			`https://react-hooks-demo-8c722.firebaseio.com/ingredients/${ingredientId}.json`,
			{
				method: "DELETE",
			}
		)
			.then((response) => {
				if (!response.ok)
					throw new Error("Unable to delete ingredient!");

				const removeIngredient = (ingredients) => {
					return ingredients.filter(
						(ingredient) => ingredient.id !== ingredientId
					);
				};

				setIngredients(removeIngredient);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="App">
			<IngredientForm onAddIngredient={addNewIngredientHandler} />

			<section>
				<Search onFilterIngredients={filterIngredientsHandler} />
				<IngredientList
					ingredients={ingredients}
					onRemoveIngredient={removeIngredientHandler}
				/>
			</section>
		</div>
	);
}

export default Ingredients;
