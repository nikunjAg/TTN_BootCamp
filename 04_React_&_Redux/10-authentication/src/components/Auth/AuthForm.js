import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router";

import classes from "./AuthForm.module.css";
import AuthContext from "../../store/auth-context";

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const emailInputRef = useRef("");
	const passwordInputRef = useRef("");

	const ctx = useContext(AuthContext);

	const history = useHistory();

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const submitFormHandler = async (event) => {
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		setError(null);
		setIsLoading(true);

		let url =
			"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDDCBqYzVRJawbeZMBluoWMFX8kASK2Afo";

		if (!isLogin) {
			url =
				"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDDCBqYzVRJawbeZMBluoWMFX8kASK2Afo";
		}

		try {
			const response = await fetch(url, {
				method: "POST",
				body: JSON.stringify({
					email: enteredEmail,
					password: enteredPassword,
					returnSecureToken: true,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) {
				const error = new Error();
				error.data = await response.json();
				throw error;
			}

			const data = await response.json();
			console.log(data);

			const { idToken, expiresIn } = data;

			const expirationDate = new Date(Date.now() + +expiresIn * 1000);

			// saving data in context
			ctx.login(idToken, expirationDate.getTime());

			// As we are already navigating away and state updateds are scheduled
			// also so this may lead to error as by the time state updates
			// the component would already have been unmounted
			// setIsLoading(false);

			// Navigate away
			history.replace("/");
		} catch (e) {
			const error = await e.data;

			let errorMessage = "Authentication Failed!";
			if (error?.error?.message) errorMessage = error.error.message;

			setError(errorMessage);
			setIsLoading(false);
		}
	};

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? "Login" : "Sign Up"}</h1>
			<form onSubmit={submitFormHandler}>
				{error && <p className={classes["error-message"]}>{error}</p>}
				<div className={classes.control}>
					<label htmlFor="email">Your Email</label>
					<input
						type="email"
						id="email"
						ref={emailInputRef}
						required
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor="password">Your Password</label>
					<input
						type="password"
						id="password"
						ref={passwordInputRef}
						required
					/>
				</div>
				<div className={classes.actions}>
					{!isLoading && (
						<button>{isLogin ? "Login" : "Create Account"}</button>
					)}
					{!isLoading && (
						<button
							type="button"
							className={classes.toggle}
							onClick={switchAuthModeHandler}
						>
							{isLogin
								? "Create new account"
								: "Login with existing account"}
						</button>
					)}
					{isLoading && <p className={classes.loading}>Loading...</p>}
				</div>
			</form>
		</section>
	);
};

export default AuthForm;
