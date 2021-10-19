import React from "react";

import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={styles.header}>
				<h1>React Meals</h1>
				<HeaderCartButton onClick={props.onOpenCart} />
			</header>
			<div className={styles["main-image"]}>
				<img src={mealsImage} alt="Table full of meals" />
			</div>
		</React.Fragment>
	);
};

export default Header;
