import React, { useEffect, useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

const INGREDIENTS_URL =
	"https://react-hooks-demo-8c722.firebaseio.com/ingredients.json";

function Ingredients() {
	const [ingredients, setIngredients] = useState([]);

	useEffect(() => {
		const fetchIngredients = async () => {
			const response = await fetch(INGREDIENTS_URL);

			if (!response.ok) {
				throw new Error("Somehting went wrong!");
			}

			const data = await response.json();

			const loadedIngredients = Object.keys(data).map((id) => ({
				...data[id],
				id: id,
			}));

			setIngredients(loadedIngredients);
		};

		fetchIngredients().catch((error) => {
			console.log(error.message);
		});
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
