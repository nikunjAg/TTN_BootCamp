import React from "react";

import { Link } from "react-router-dom";

import styles from "./Products.module.css";

const Products = () => {
	return (
		<section className={styles.products}>
			<h3>Products List</h3>
			<ul>
				<li>
					<Link to="/products/1">Camera</Link>
				</li>
				<li>
					<Link to="/products/2">Mobile</Link>
				</li>
				<li>
					<Link to="/products/3">Shirt</Link>
				</li>
			</ul>
		</section>
	);
};

export default Products;
