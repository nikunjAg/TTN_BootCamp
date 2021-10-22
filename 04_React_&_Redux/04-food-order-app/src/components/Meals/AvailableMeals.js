import React, { useEffect, useState } from "react";

import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

import styles from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [meals, setMeals] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMealsHandler = async () => {
			setIsLoading(true);
			setError(null);

			const response = await fetch(
				"https://react-http-4888a-default-rtdb.firebaseio.com/meals.json"
			);
			if (!response.ok) {
				throw new Error("Something went wrong!!");
			}
			const mealItemsData = await response.json();

			if (!mealItemsData) {
				setMeals([]);
				setIsLoading(false);
				return;
			}

			const mealItems = Object.keys(mealItemsData).map((mealId) => ({
				...mealItemsData[mealId],
				id: mealId,
			}));

			setMeals(mealItems);
			setIsLoading(false);
		};

		fetchMealsHandler().catch((e) => {
			setIsLoading(false);
			setError(e.message);
		});
	}, []);

	let content = <p>No meals found.</p>;

	if (meals.length > 0) {
		content = (
			<ul>
				{meals.map((meal) => (
					<MealItem key={meal.id} {...meal} />
				))}
			</ul>
		);
	}

	if (error) {
		return (
			<section className={styles.mealsError}>
				<p>{error}</p>
			</section>
		);
	}

	if (isLoading) {
		return (
			<section className={styles.mealsLoading}>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<section className={styles.meals}>
			<Card className={styles.mealsList}>{content}</Card>
		</section>
	);
};

export default AvailableMeals;
