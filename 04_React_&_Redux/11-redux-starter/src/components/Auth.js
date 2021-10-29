import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import classes from "./Auth.module.css";
import { authActions } from "../store/auth";

const Auth = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const dispatch = useDispatch();

	const formSubmitHandler = (event) => {
		event.preventDefault();

		const enteredEmail = emailRef.current.value;
		const enteredPassword = passwordRef.current.value;

		dispatch(
			authActions.login({
				email: enteredEmail,
				password: enteredPassword,
			})
		);
	};

	return (
		<main className={classes.auth}>
			<section>
				<form onSubmit={formSubmitHandler}>
					<div className={classes.control}>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" ref={emailRef} />
					</div>
					<div className={classes.control}>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							ref={passwordRef}
						/>
					</div>
					<button type="submit">Login</button>
				</form>
			</section>
		</main>
	);
};

export default Auth;
