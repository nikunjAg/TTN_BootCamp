const FIREBASE_DOMAIN = "https://react-hooks-demo-8c722.firebaseio.com";

export const getAllIngredients = async (enteredFilter) => {
	const query =
		enteredFilter.trim().length === 0
			? ""
			: `?orderBy="title"&equalTo="${enteredFilter}"`;

	const response = await fetch(`${FIREBASE_DOMAIN}/ingredients.json${query}`);

	if (!response.ok) throw new Error("Unable to Fetch");

	const data = await response.json();

	const filteredIngredients = Object.keys(data).map((id) => ({
		...data[id],
		id: id,
	}));

	return filteredIngredients;
};

export const addNewIngredient = async (ingredient) => {
	const response = await fetch(`${FIREBASE_DOMAIN}/ingredients.json`, {
		method: "POST",
		body: JSON.stringify(ingredient),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) throw new Error("Unable to add Ingredient");

	const data = await response.json();

	const newIngredient = {
		id: data.name,
		...ingredient,
	};

	return newIngredient;
};

export const removeIngredient = async (ingredientId) => {
	const response = await fetch(
		`${FIREBASE_DOMAIN}/ingredients/${ingredientId}.json`,
		{
			method: "DELETE",
		}
	);

	if (!response.ok) throw new Error("Unable to add Ingredient");

	return ingredientId;
};
