import React from "react";

import { Link } from "react-router-dom";
import Product from "../components/Product";

import styles from "./Products.module.css";

/* const ITEMS = [
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
]; */

const Products = (props) => {
	/* const [products, setProducts] = useState([]);

	useEffect(() => {
		console.log("Fetch Products From Server");
		setProducts(ITEMS);
	}, []); */

	console.log("Products Component Re-rendered");

	const productsItems = props.items.map((item) => (
		<Link to={`/products/${item.id}`} key={item.id}>
			<Product {...item} />
		</Link>
	));

	return (
		<section className={styles.products}>
			<h3>Products List</h3>
			<ul className={styles["products-list"]}>{productsItems}</ul>
		</section>
	);
};

export default Products;
