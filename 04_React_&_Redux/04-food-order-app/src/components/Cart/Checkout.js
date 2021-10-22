import React, { useRef, useState } from "react";

import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim().length === 0;
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
	const [formIsValid, setFormisValid] = useState({
		name: true,
		street: true,
		postalCode: true,
		city: true,
	});

	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalCodeInputRef = useRef();
	const cityInputRef = useRef();

	const onConfirmHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const street = streetInputRef.current.value;
		const postalCode = postalCodeInputRef.current.value;
		const city = cityInputRef.current.value;

		if (
			isEmpty(enteredName) ||
			!isEmpty(street) ||
			isEmpty(city) ||
			!isFiveChars(postalCode)
		) {
			setFormisValid({
				name: !isEmpty(enteredName),
				street: !isEmpty(street),
				city: !isEmpty(city),
				postalCode: isFiveChars(postalCode),
			});
			return;
		}
		const addressDetails = {
			name: enteredName,
			street,
			postalCode,
			city,
		};
		props.onConfirm(addressDetails);
	};

	return (
		<div>
			<form onSubmit={onConfirmHandler}>
				<div
					className={`${styles.control} ${
						(!formIsValid.name && styles.invalid) || ""
					}`}
				>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Enter Name"
						ref={nameInputRef}
					/>
					{!formIsValid.name && (
						<p className={styles.errorMessage}>
							Please enter a valid name.
						</p>
					)}
				</div>
				<div
					className={`${styles.control} ${
						(!formIsValid.street && styles.invalid) || ""
					}`}
				>
					<label htmlFor="street">Street</label>
					<input
						type="text"
						name="street"
						id="street"
						placeholder="Enter Street No"
						ref={streetInputRef}
					/>
					{!formIsValid.street && (
						<p className={styles.errorMessage}>
							Please enter a valid street.
						</p>
					)}
				</div>
				<div
					className={`${styles.control} ${
						(!formIsValid.postalCode && styles.invalid) || ""
					}`}
				>
					<label htmlFor="postalCode">Postal Code</label>
					<input
						type="text"
						name="postalCode"
						id="postalCode"
						placeholder="Enter Postal Code"
						ref={postalCodeInputRef}
					/>
					{!formIsValid.postalCode && (
						<p className={styles.errorMessage}>
							Please enter a valid Postal Code.
						</p>
					)}
				</div>
				<div
					className={`${styles.control} ${
						(!formIsValid.city && styles.invalid) || ""
					}`}
				>
					<label htmlFor="city">City</label>
					<input
						type="text"
						name="city"
						id="city"
						placeholder="Enter City"
						ref={cityInputRef}
					/>
					{!formIsValid.city && (
						<p className={styles.errorMessage}>
							Please enter a valid city.
						</p>
					)}
				</div>
				<div className={styles.actions}>
					<button onClick={props.onCancel}>Cancel</button>
					<button type="submit">Confirm</button>
				</div>
			</form>
		</div>
	);
};

export default Checkout;
