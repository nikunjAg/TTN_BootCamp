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

	return (
		<CartProvider>
			<Header onOpenCart={showCartHandler} />
			<main>
				<Meals />
				{showCart && <Cart onClose={hideCartHandler} />}
			</main>
		</CartProvider>
	);
};

export default App;
