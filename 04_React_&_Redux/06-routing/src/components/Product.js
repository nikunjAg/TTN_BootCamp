import React from "react";

import Card from "./UI/Card";
import styles from "./Product.module.css";

const Product = (props) => {
	return (
		<Card className={styles.product}>
			<h3>{props.name}</h3>
			<p className={styles["product-id"]}>{props.id}</p>
			<p className={styles.price}>Price: {props.price}</p>
		</Card>
	);
};

export default Product;
