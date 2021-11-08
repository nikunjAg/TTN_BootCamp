import React from "react";

import "./IngredientList.css";
import LoadingIndicator from "../UI/LoadingIndicator";

const IngredientList = (props) => {
	return (
		<section className="ingredient-list">
			{props.loading && (
				<LoadingIndicator className="ingredients-list__spinner" />
			)}
			<h2>Loaded Ingredients</h2>
			<ul>
				{props.ingredients.map((ig) => (
					<li
						key={ig.id}
						onClick={props.onRemoveIngredient.bind(null, ig.id)}
					>
						<span>{ig.title}</span>
						<span>{ig.amount}x</span>
					</li>
				))}
			</ul>
		</section>
	);
};

export default IngredientList;
