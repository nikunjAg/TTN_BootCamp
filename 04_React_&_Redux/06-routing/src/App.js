import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

import "./App.css";
import ProductDetail from "./pages/ProductDetail";
import { useEffect } from "react/cjs/react.development";

const ITEMS = [
	{ id: Math.random().toString(), name: "Camera", price: 120 },
	{ id: Math.random().toString(), name: "Shirt", price: 50 },
	{ id: Math.random().toString(), name: "Mobile", price: 130 },
	{ id: Math.random().toString(), name: "Smart TV", price: 150 },
	{ id: Math.random().toString(), name: "Laptop", price: 200 },
	{ id: Math.random().toString(), name: "Camera", price: 120 },
	{ id: Math.random().toString(), name: "Shirt", price: 50 },
	{ id: Math.random().toString(), name: "Mobile", price: 130 },
	{ id: Math.random().toString(), name: "Smart TV", price: 150 },
	{ id: Math.random().toString(), name: "Laptop", price: 200 },
];

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		console.log("App Component useEffect");
		setProducts(ITEMS);
	}, []);

	console.log("App Component Re-rendered");
	return (
		<div className="App">
			<MainHeader />
			<main>
				<h2>App Component</h2>
				<Switch>
					<Route path="/welcome">
						<Welcome />
					</Route>
					{/* <Route path="/product-detail/:productId">
						<ProductDetail />
					</Route> */}
					<Route path="/products/:productId">
						<ProductDetail />
					</Route>
					<Route path="/products">
						<Products items={products} />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
