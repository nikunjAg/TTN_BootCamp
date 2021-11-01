import React from "react";
import { useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
	const { id, title, qty, price, description } = props.item;
	const dispatch = useDispatch();

	const incCartItemQtyHandler = () => {
		dispatch(cartActions.addItemToCart({ id, title, price, description }));
	};

	const decCartItemQtyHandler = () => {
		dispatch(
			cartActions.removeItemFromCart({ id, title, price, description })
		);
	};

	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					{`${(price * qty).toFixed(2)} `}
					<span className={classes.itemprice}>
						{`${price.toFixed(2)}/item`}
					</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{qty}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={decCartItemQtyHandler}>-</button>
					<button onClick={incCartItemQtyHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
