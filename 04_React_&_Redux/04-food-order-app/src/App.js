import React, { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

const App = () => {
	const [showCart, setShowCart] = useState(false);

	const showCartHandler = () => {
		setShowCart(true);
	};

	const hideCartHandler = () => {
		setShowCart(false);
	};

	const orderCartItemsHandler = async (orderData) => {
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

		console.log(data);
	};

	return (
		<CartProvider>
			<Header onOpenCart={showCartHandler} />
			<main>
				<Meals />
				{showCart && (
					<Cart
						onClose={hideCartHandler}
						onOrder={orderCartItemsHandler}
					/>
				)}
			</main>
		</CartProvider>
	);
};

export default App;
