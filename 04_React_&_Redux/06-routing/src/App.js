import React from "react";
import { Route, Switch } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

import "./App.css";
import ProductDetail from "./pages/ProductDetail";

function App() {
	return (
		<div className="App">
			<MainHeader />
			<main>
				<h2>App Component</h2>
				<Switch>
					<Route path="/welcome">
						<Welcome />
					</Route>
					<Route path="/products/:productId">
						<ProductDetail />
					</Route>
					<Route path="/products">
						<Products />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
