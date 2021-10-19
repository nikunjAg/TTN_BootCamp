import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	const [addAnimation, setAddAnimation] = useState(false);
	const cartCtx = useContext(CartContext);

	const cartItemsCount = cartCtx.items.reduce(
		(total, cartItem) => total + cartItem.qty,
		0
	);

	console.log("Re-render");

	useEffect(() => {
		console.log("Hey!");

		if (cartItemsCount === 0) return;

		setAddAnimation(true);

		const timer = setTimeout(() => {
			setAddAnimation(false);
		}, 300);

		// In case of removal of HeaderCartButton or adding items fastly
		return () => {
			clearTimeout(timer);
		};
	}, [cartItemsCount]);

	return (
		<button
			className={`${styles.button} ${
				(addAnimation && styles.bump) || ""
			}`}
			onClick={props.onClick}
		>
			<span className={styles["cart-icon"]}>
				<CartIcon />
			</span>
			<span className={styles.label}>Your Cart</span>
			<span className={styles.badge}>{cartItemsCount}</span>
		</button>
	);
};

export default HeaderCartButton;
