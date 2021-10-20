import { useState } from "react";

const useInput = (validate) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = validate(enteredValue);
	const hasError = !valueIsValid && isTouched;

	const reset = () => {
		setEnteredValue("");
		setIsTouched(false);
	};

	const valueChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};

	const blurHandler = (event) => {
		setIsTouched(true);
	};

	return {
		value: enteredValue,
		reset,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		blurHandler,
	};
};

export default useInput;
