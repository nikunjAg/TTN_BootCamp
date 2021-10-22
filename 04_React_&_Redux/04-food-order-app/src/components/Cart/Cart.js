import React, { Fragment, useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

import styles from "./Cart.module.css";
import Spinner from "../UI/Spinner";

const Cart = (props) => {
	const [showCheckoutForm, setShowCheckoutForm] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const [orderPlacedId, setOrderPlacedId] = useState(null);

	const cartCtx = useContext(CartContext);

	const showCheckoutHandler = () => {
		setShowCheckoutForm(true);
	};

	const orderConfirmHandler = async (addressDetails) => {
		const orderData = {
			orderItems: cartCtx.items,
			address: addressDetails,
		};

		console.log(orderData);

		setIsSending(true);
		setOrderPlacedId(null);

		const response = await fetch(
			"https://react-http-4888a-default-rtdb.firebaseio.com/orders.json",
			{
				method: "POST",
				body: JSON.stringify(orderData),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		const data = await response.json();

		setIsSending(false);
		setOrderPlacedId(data.name);

		// Clear the Cart Data also
		cartCtx.clearCart();
		// Remove Cart Component automatically after 5sec
		setTimeout(() => {
			props.onClose();
		}, 5000);
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
				<button onClick={showCheckoutHandler}>Order Now</button>
			)}
		</div>
	);

	const cartContent = (
		<Fragment>
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
		</Fragment>
	);

	let modalContent = cartContent;

	if (isSending) {
		modalContent = (
			<Fragment>
				<Spinner className={styles.loading} />
				{cartContent}
			</Fragment>
		);
	}

	if (orderPlacedId || 1) {
		modalContent = (
			<Fragment>
				<div className={styles.orderPlaced}>
					Order successfully place with orderId
					<br />
					<span>{orderPlacedId}</span>
				</div>
				<button
					onClick={props.onClose}
					style={{ float: "right", marginTop: "1rem" }}
				>
					Ok
				</button>
			</Fragment>
		);
	}

	return (
		<Modal onCancel={props.onClose} className={styles.cart}>
			{modalContent}
		</Modal>
	);
};

export default Cart;
