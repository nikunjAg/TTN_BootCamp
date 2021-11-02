import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import "./App.css";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let initialTime = true;

function App() {
	const dispatch = useDispatch();
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const notification = useSelector((state) => state.ui.notification);
	const cart = useSelector((state) => state.cart);

	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	useEffect(() => {
		if (initialTime) {
			initialTime = false;
			return;
		}

		if (cart.changed)
			dispatch(
				sendCartData({
					items: cart.items,
					totalItems: cart.totalItems,
					totalAmount: cart.totalAmount,
				})
			);
	}, [cart, dispatch]);

	return (
		<Fragment>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</Fragment>
	);
}

export default App;
