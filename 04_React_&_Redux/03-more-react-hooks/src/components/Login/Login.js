import React, {
	useEffect,
	useReducer,
	useState,
	useContext,
	useRef,
} from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AuthContext from "../store/auth-context";
import Input from "../UI/Input/Input";

import classes from "./Login.module.css";

const emailReducer = (state, action) => {
	switch (action.type) {
		case "USER_INPUT":
			return { val: action.val, valid: action.val.includes("@") };
		case "INPUT_BLUR":
			return { ...state, valid: state.val.includes("@") };
		default:
			return { val: "", valid: false };
	}
};

const passwordReducer = (state, action) => {
	switch (action.type) {
		case "USER_INPUT":
			return { val: action.val, valid: action.val.trim().length > 6 };
		case "INPUT_BLUR":
			return { ...state, valid: state.val.trim().length > 6 };
		default:
			return { val: "", valid: false };
	}
};

const Login = (props) => {
	// const [enteredEmail, setEnteredEmail] = useState("");
	// const [emailIsValid, setEmailIsValid] = useState();
	// const [enteredPassword, setEnteredPassword] = useState("");
	// const [passwordIsValid, setPasswordIsValid] = useState();
	const [formIsValid, setFormIsValid] = useState(false);
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		val: "",
		valid: null,
	});
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		val: "",
		valid: null,
	});

	const ctx = useContext(AuthContext);

	// useEffect(() => {
	// 	setEmailIsValid(enteredEmail.includes("@"));
	// }, [enteredEmail]);

	// useEffect(() => {
	// 	setPasswordIsValid(enteredPassword.trim().length > 6);
	// }, [enteredPassword]);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setFormIsValid(emailState.valid && passwordState.valid);
		}, 1000);

		return () => {
			clearTimeout(timerId);
		};
	}, [emailState.valid, passwordState.valid]);

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: "USER_INPUT", val: event.target.value });

		// setEmailIsValid(event.target.value.includes("@"));
		setFormIsValid(event.target.value.includes("@") && passwordState.valid);
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: "USER_INPUT", val: event.target.value });
		// setEnteredPassword(event.target.value);

		// setPasswordIsValid(event.target.value.trim().length > 6);
		setFormIsValid(
			emailState.valid && event.target.value.trim().length > 6
		);
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: "INPUT_BLUR" });
		// setEmailIsValid(emailState.valid);
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: "INPUT_BLUR" });
		// setPasswordIsValid(passwordState.valid);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) {
			ctx.onLogin(emailState.val, passwordState.val);
		} else if (!emailState.valid) {
			emailInputRef.current.focus();
		} else {
			passwordInputRef.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					invalid={emailState.valid === false}
					label="E-Mail"
					type="email"
					name="email"
					value={emailState.val}
					ref={emailInputRef}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					invalid={passwordState.valid === false}
					label="Password"
					type="password"
					name="password"
					value={passwordState.val}
					ref={passwordInputRef}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>

				<div className={classes.actions}>
					<Button type="submit" className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
