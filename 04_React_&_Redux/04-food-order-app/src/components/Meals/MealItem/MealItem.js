import React, { useContext } from "react";

import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const Meal = ({ id, name, description, price }) => {
	const cartCtx = useContext(CartContext);

	const itemPrice = `$ ${price.toFixed(2)}`;

	const addToCartHandler = (quantity) => {
		cartCtx.addItem({ id: id, name: name, price: price, qty: quantity });
	};

	return (
		<li className={styles["meal-item"]}>
			<div>
				<h3 className={styles.name}>{name}</h3>
				<p className={styles.description}>{description}</p>
				<div className={styles.price}>{itemPrice}</div>
			</div>
			<div>
				<MealItemForm id={id} onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default Meal;
