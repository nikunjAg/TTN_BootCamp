import React, { useCallback, useState, useReducer } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";

const INGREDIENTS_URL =
	"https://react-hooks-demo-8c722.firebaseio.com/ingredients.json";

const ingredientsReducer = (ingredients, action) => {
	switch (action.type) {
		case "SET":
			return action.ingredients;
		case "ADD":
			return [...ingredients, action.ingredient];
		case "REMOVE":
			return ingredients.filter((ing) => ing.id !== action.id);
		default:
			throw new Error("Should not react here");
	}
};

function Ingredients() {
	const [userIngredients, dispatch] = useReducer(ingredientsReducer, []);
	// const [ingredients, setIngredients] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const clearErrorHandler = () => {
		setError(null);
	};

	const filterIngredientsHandler = useCallback((filteredIngredients) => {
		dispatch({ type: "SET", ingredients: filteredIngredients });
	}, []);

	const addNewIngredientHandler = (ingredientData) => {
		setIsLoading(true);
		setError(null);
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

				dispatch({ type: "ADD", ingredient: newIngredient });
				setIsLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setIsLoading(false);
			});
	};

	const removeIngredientHandler = (ingredientId) => {
		setIsLoading(true);
		setError(null);
		fetch(
			`https://react-hooks-demo-8c722.firebaseio.com/ingredients/${ingredientId}.json`,
			{
				method: "DELETE",
			}
		)
			.then((response) => {
				if (!response.ok)
					throw new Error("Unable to delete ingredient!");

				dispatch({ type: "REMOVE", id: ingredientId });
				setIsLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setIsLoading(false);
			});
	};

	return (
		<div className="App">
			{error && (
				<ErrorModal onClose={clearErrorHandler}>{error}</ErrorModal>
			)}
			<IngredientForm
				onAddIngredient={addNewIngredientHandler}
				loading={isLoading}
			/>

			<section>
				<Search
					onSetLoading={setIsLoading}
					onSetError={setError}
					onFilterIngredients={filterIngredientsHandler}
				/>
				<IngredientList
					loading={isLoading}
					ingredients={userIngredients}
					onRemoveIngredient={removeIngredientHandler}
				/>
			</section>
		</div>
	);
}

export default Ingredients;
