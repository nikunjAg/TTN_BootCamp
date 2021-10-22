import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

import styles from "./Cart.module.css";

const Cart = (props) => {
	const [showCheckoutForm, setShowCheckoutForm] = useState(false);
	const cartCtx = useContext(CartContext);

	const orderCartItemsHandler = () => {
		setShowCheckoutForm(true);
	};

	const orderConfirmHandler = (addressDetails) => {
		props.onOrder({ orderItems: cartCtx.items, address: addressDetails });
	};

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

	const checkout = (
		<Checkout onCancel={props.onClose} onConfirm={orderConfirmHandler} />
	);
	const modalActions = (
		<div className={styles.actions}>
			<button onClick={props.onClose}>Cancel</button>
			{cartItems.length > 0 && (
				<button onClick={orderCartItemsHandler}>Order Now</button>
			)}
		</div>
	);

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

			{showCheckoutForm && checkout}
			{!showCheckoutForm && modalActions}
		</Modal>
	);
};

export default Cart;
