import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

import "./App.css";

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
					<Route path="/" exact>
						<Redirect to="/welcome" />
					</Route>
					<Route path="/welcome">
						<Welcome />
					</Route>
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
