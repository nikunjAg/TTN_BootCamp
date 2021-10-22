import React, { useRef, useState } from "react";

import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		console.log("Inside Submit");
		const amount = +amountInputRef.current.value;

		if (amount < 1 || amount > 5) {
			setAmountIsValid(false);
			return;
		}

		setAmountIsValid(true);
		props.onAddToCart(amount);
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<Input
				className={styles["form-element"]}
				label="Amount"
				input={{
					type: "number",
					min: "0",
					max: "5",
					step: "1",
					defaultValue: "1",
					id: "quantity_" + props.id,
					placeholder: "Quantity..",
				}}
				ref={amountInputRef}
			/>
			{!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
			<button>+ Add</button>
		</form>
	);
};

export default MealItemForm;
