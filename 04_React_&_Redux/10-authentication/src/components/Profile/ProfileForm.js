import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router";

import AuthContext from "../../store/auth-context";

import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
	const [error, setError] = useState(null);

	const userInputRef = useRef();

	const ctx = useContext(AuthContext);

	const history = useHistory();

	const submitHandler = async (event) => {
		event.preventDefault();

		const newPassword = userInputRef.current.value;

		setError(null);
		try {
			const response = await fetch(
				"https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDDCBqYzVRJawbeZMBluoWMFX8kASK2Afo",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						idToken: ctx.token,
						password: newPassword,
						resturnSecureToken: false,
					}),
				}
			);

			if (!response.ok) {
				const error = new Error();
				error.data = await response.json();
				throw error;
			}

			const data = await response.json();
			console.log(data);
			const { idToken } = data;

			ctx.login(idToken);
			history.replace("/");
		} catch (e) {
			let errorMessage = "Password Change Failed";
			if (e.data?.error?.message) errorMessage = e.data.error.message;

			setError(errorMessage);
		}
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			{error && <p className={classes["error-message"]}>{error}</p>}
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input
					type="password"
					id="new-password"
					ref={userInputRef}
					minLength="7"
				/>
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
