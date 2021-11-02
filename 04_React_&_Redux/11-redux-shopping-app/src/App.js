import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import "./App.css";
import { uiActions } from "./store/ui-slice";

let initialTime = true;

function App() {
	const dispatch = useDispatch();
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const notification = useSelector((state) => state.ui.notification);
	const cart = useSelector((state) => state.cart);

	useEffect(() => {
		const sendCartData = async () => {
			dispatch(
				uiActions.showNotification({
					status: "pending",
					title: "Sending...",
					message: "Sending Request...",
				})
			);

			const response = await fetch(
				"https://react-redux-app-e61b4-default-rtdb.firebaseio.com/cart.json",
				{
					method: "PUT",
					body: JSON.stringify(cart),
				}
			);

			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			dispatch(
				uiActions.showNotification({
					status: "success",
					title: "Success",
					message: "Sent cart data successfully",
				})
			);
		};

		if (initialTime) {
			initialTime = false;
			return;
		}

		sendCartData().catch((e) => {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error!",
					message: "Sending cart data failed!",
				})
			);
		});
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
