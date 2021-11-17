import React, { useRef } from "react";

import styles from "./AddUserForm.module.css";

const AddUserForm = (props) => {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const emailRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const userData = {
			firstname: firstNameRef.current.value,
			lastname: lastNameRef.current.value,
			email: emailRef.current.value,
		};

		props.onSubmit(userData);
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<div className={styles["form-control"]}>
				<label htmlFor="firstname">FirstName</label>
				<input type="text" id="firstname" ref={firstNameRef} />
			</div>
			<div className={styles["form-control"]}>
				<label htmlFor="lastname">LastName</label>
				<input type="text" id="lastname" ref={lastNameRef} />
			</div>
			<div className={styles["form-control"]}>
				<label htmlFor="email">Email</label>
				<input type="email" id="email" ref={emailRef} />
			</div>
			<button type="submit">
				{props.loading ? "Sending..." : "Add Task"}
			</button>
		</form>
	);
};

export default AddUserForm;
