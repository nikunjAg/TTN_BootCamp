import { useEffect, useState } from "react";

const useCounter = (defaultValue = 0, increment = 1, delay = 1000) => {
	const [counter, setCounter] = useState(defaultValue);

	useEffect(() => {
		const timerId = setInterval(() => {
			setCounter((prevVal) => prevVal + increment);
		}, delay);

		return () => clearInterval(timerId);
	}, [increment, delay]);

	return counter;
};

export default useCounter;
