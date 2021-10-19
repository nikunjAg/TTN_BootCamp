import React from "react";

import styles from "./CartItem.module.css";

const CartItem = ({ id, name, price, qty, onIncrease, onDecrease }) => {
	return (
		<li className={styles["cart-item"]}>
			<div className={styles["item-detail"]}>
				<h3>{name}</h3>
				<div>
					<span className={styles.price}>$ {price}</span>{" "}
					<span className={styles.qty}>×{qty}</span>
				</div>
			</div>
			<div className={styles.actions}>
				<button onClick={onIncrease}>+</button>
				<button onClick={onDecrease}>-</button>
			</div>
		</li>
	);
};

export default CartItem;
