import { useSelector } from "react-redux";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
	const totalCartItems = useSelector((state) => state.cart.totalItems);

	return (
		<button className={classes.button} onClick={props.onClick}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalCartItems}</span>
		</button>
	);
};

export default CartButton;
