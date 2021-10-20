import React from "react";

import useInput from "../hooks/use-input";

const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SimpleInput = (props) => {
	const {
		value: enteredName,
		reset: resetName,
		valueChangeHandler: nameChangeHandler,
		blurHandler: blurNameHandler,
		hasError: nameIsInvalidAndTouched,
		isValid: enteredNameIsValid,
	} = useInput((name) => name.trim().length !== 0);

	const {
		value: enteredEmail,
		reset: resetEmail,
		valueChangeHandler: emailChangeHandler,
		blurHandler: blurEmailHandler,
		hasError: emailIsInvalidAndTouched,
		isValid: enteredEmailIsValid,
	} = useInput((email) => EMAIL_REGEX.test(email.toLowerCase()));

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const clearFormHandler = () => {
		resetName();
		resetEmail();
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();

		// Set all to touched
		// Not required as form cannot be submitted unless valid
		// setNameIsTouched(true);
		// setEmailIsTouched(true);
		if (!formIsValid) {
			return;
		}

		console.log(enteredName, enteredEmail);
		clearFormHandler();
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div
				className={`form-control ${
					(nameIsInvalidAndTouched && "invalid") || ""
				}`}
			>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					value={enteredName}
					onChange={nameChangeHandler}
					onBlur={blurNameHandler}
				/>
				{nameIsInvalidAndTouched && (
					<p className="error-text">Please enter a valid name.</p>
				)}
			</div>
			<div
				className={`form-control ${
					(emailIsInvalidAndTouched && "invalid") || ""
				}`}
			>
				<label htmlFor="email">Your E-Mail</label>
				<input
					type="email"
					id="email"
					value={enteredEmail}
					onChange={emailChangeHandler}
					onBlur={blurEmailHandler}
				/>
				{emailIsInvalidAndTouched && (
					<p className="error-text">Please enter a valid email.</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
