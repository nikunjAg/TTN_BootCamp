import React from "react";

import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";

const ProductDetail = (props) => {
	const params = useParams();

	return (
		<section className={styles["product-detail"]}>
			<h4>Product Detail For {params.productId}</h4>
		</section>
	);
};

export default ProductDetail;
