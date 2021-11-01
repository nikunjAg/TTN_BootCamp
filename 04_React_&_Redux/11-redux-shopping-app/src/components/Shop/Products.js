import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
	{
		id: Math.random().toString(),
		title: "Shampoo",
		description: "Shampoo for mens, strengthen hairs",
		price: 49,
	},
	{
		id: Math.random().toString(),
		title: "Shirt",
		description: "Mens casual shirt",
		price: 199,
	},
];

const Products = (props) => {
	const productsItems = DUMMY_PRODUCTS.map((prod) => (
		<ProductItem key={prod.id} {...prod} />
	));

	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>{productsItems}</ul>
		</section>
	);
};

export default Products;
