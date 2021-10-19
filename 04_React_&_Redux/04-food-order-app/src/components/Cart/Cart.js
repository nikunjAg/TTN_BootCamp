import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const onIncreaseQuantityHandler = (item) => {
		cartCtx.addItem({ ...item, qty: 1 });
	};

	const onDecreaseQuantityHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItems = cartCtx.items.map((item) => (
		<CartItem
			key={item.id}
			{...item}
			onIncrease={onIncreaseQuantityHandler.bind(null, item)}
			onDecrease={onDecreaseQuantityHandler.bind(null, item.id)}
		/>
	));
	const cartItemsList = <ul className={styles.items}>{cartItems}</ul>;

	const totalAmount = cartCtx.totalAmount.toFixed(2);

	return (
		<Modal onCancel={props.onClose} className={styles.cart}>
			{cartItems.length > 0 && cartItemsList}
			{cartItems.length === 0 && (
				<h3 className={styles["items__fallback"]}>Cart is Empty</h3>
			)}
			<div className={styles.totalPrice}>
				<span>Total Amount:</span>
				<span>$ {totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button onClick={props.onClose}>Cancel</button>
				{cartItems.length > 0 && (
					<button onClick={() => props.onOrder(props.items)}>
						Order Now
					</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
