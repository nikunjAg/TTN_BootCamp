import React, { useCallback, useReducer } from "react";

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

const httpReducer = (httpState, action) => {
	switch (action.type) {
		case "SEND":
			return { loading: true, error: null };
		case "SUCCESS":
			return { ...httpState, loading: false };
		case "ERROR":
			return { loading: false, error: action.error };
		case "CLEAR_ERROR":
			return { ...httpState, error: null };
		default:
			throw new Error("Should not react here.");
	}
};

function Ingredients() {
	const [userIngredients, dispatch] = useReducer(ingredientsReducer, []);
	const [httpState, dispatchHttp] = useReducer(httpReducer, {
		loading: false,
		error: null,
	});

	const clearErrorHandler = useCallback(() => {
		dispatchHttp({ type: "CLEAR_ERROR" });
	}, []);

	const filterIngredientsHandler = useCallback((filteredIngredients) => {
		dispatch({ type: "SET", ingredients: filteredIngredients });
	}, []);

	const addNewIngredientHandler = useCallback((ingredientData) => {
		dispatchHttp({ type: "SEND" });
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
				dispatchHttp({ type: "SUCCESS" });
			})
			.catch((error) => {
				dispatchHttp({ type: "ERROR", error: error.message });
			});
	}, []);

	const removeIngredientHandler = useCallback((ingredientId) => {
		dispatchHttp({ type: "SEND" });
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
				dispatchHttp({ type: "SUCCESS" });
			})
			.catch((error) => {
				console.log(error);
				dispatchHttp({ type: "ERROR", error: error.message });
			});
	}, []);

	console.log("Ingredients", httpState.loading, userIngredients);

	return (
		<div className="App">
			{httpState.error && (
				<ErrorModal onClose={clearErrorHandler}>
					{httpState.error}
				</ErrorModal>
			)}
			<IngredientForm
				onAddIngredient={addNewIngredientHandler}
				loading={httpState.loading}
			/>

			<section>
				<Search
					onSetLoading={useCallback(
						() => dispatchHttp({ type: "SEND" }),
						[]
					)}
					onSetSuccess={useCallback(
						() => dispatchHttp({ type: "SUCCESS" }),
						[]
					)}
					onSetError={useCallback(
						(error) =>
							dispatchHttp({ type: "ERROR", error: error }),
						[]
					)}
					onFilterIngredients={filterIngredientsHandler}
				/>
				<IngredientList
					loading={httpState.loading}
					ingredients={userIngredients}
					onRemoveIngredient={removeIngredientHandler}
				/>
			</section>
		</div>
	);
}

export default Ingredients;
