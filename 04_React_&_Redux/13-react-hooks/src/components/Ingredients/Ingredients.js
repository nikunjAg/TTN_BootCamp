import React, { useCallback, useReducer } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../hooks/use-http";
import { addNewIngredient } from "../../lib/api";

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

	let loading;
	let error;
	let addedIngredient;
	let removedIngredientId;
	let sendNewIngredient, sendRemoveIngredient;

	({
		loading,
		error,
		data: addedIngredient,
		sendRequest: sendNewIngredient,
	} = useHttp(addNewIngredient, null));
	({
		loading,
		error,
		data: removedIngredientId,
		sendRequest: sendRemoveIngredient,
	} = useHttp(addNewIngredient, null));

	const clearErrorHandler = useCallback(() => {
		// dispatchHttp({ type: "CLEAR_ERROR" });
	}, []);

	const filterIngredientsHandler = useCallback((filteredIngredients) => {
		dispatch({ type: "SET", ingredients: filteredIngredients });
	}, []);

	const addNewIngredientHandler = useCallback(
		(ingredientData) => {
			sendNewIngredient(ingredientData);
		},
		[sendNewIngredient]
	);

	const removeIngredientHandler = useCallback(
		(ingredientId) => {
			sendRemoveIngredient(ingredientId);
		},
		[sendRemoveIngredient]
	);

	return (
		<div className="App">
			{error && (
				<ErrorModal onClose={clearErrorHandler}>{error}</ErrorModal>
			)}
			<IngredientForm
				onAddIngredient={addNewIngredientHandler}
				loading={loading}
			/>

			<section>
				<Search onFilterIngredients={filterIngredientsHandler} />
				<IngredientList
					loading={loading}
					ingredients={userIngredients}
					onRemoveIngredient={removeIngredientHandler}
				/>
			</section>
		</div>
	);
}

export default Ingredients;
