import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
	const usernameRef = useRef();
	const ageRef = useRef();

	const [errors, setErrors] = useState();

	const clearFormHandler = () => {
		usernameRef.current.value = "";
		ageRef.current.value = "";
	};

	const clearErrorsHandler = () => {
		setErrors(null);
	};

	const validateUserData = () => {
		let result = { errors: [] };

		const { value: username } = usernameRef.current;
		const { value: age } = ageRef.current;

		// Checking the username validity
		if (username.trim().length < 3)
			result.errors.push(
				"Username should at least be 3 charchters long."
			);

		// Checking the age validity
		if (+age <= 0 || +age > 120)
			result.errors.push("Entered age should be from 1 to 120.");

		return result;
	};

	const addUserHandler = (event) => {
		event.preventDefault();

		const { value: username } = usernameRef.current;
		const { value: age } = ageRef.current;

		const { errors: userDataErrors } = validateUserData();
		if (userDataErrors.length > 0) {
			setErrors(userDataErrors);
			return;
		}

		const userData = {
			username: username,
			age: +age,
		};

		props.onAddUser(userData);
		clearFormHandler();
	};

	const errorModal = (
		<ErrorModal
			// title="Error!!"
			onCancel={clearErrorsHandler}
			onSuccess={clearErrorsHandler}
			errors={errors}
		/>
	);

	return (
		<Card className={styles["card-wrapper"]}>
			{errors && errors.length !== 0 && errorModal}

			<form onSubmit={addUserHandler}>
				<div className={styles["form-control"]}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						placeholder="Enter Name"
						ref={usernameRef}
					/>
				</div>
				<div className={styles["form-control"]}>
					<label htmlFor="age">Age (Years)</label>
					<input
						type="number"
						id="age"
						placeholder="Enter Age"
						ref={ageRef}
					/>
				</div>
				<div className={styles["form-actions"]}>
					<Button type="submit">Add User</Button>
				</div>
			</form>
		</Card>
	);
};

export default AddUser;
