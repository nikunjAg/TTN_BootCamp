import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
	console.log("BUTTON RUNNING");

	return (
		<button
			type={props.type || "button"}
			className={`${classes.button} ${props.className || ""}`}
			onClick={props.onClick}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	);
};

// Despite use memo on Button and useCallback on onClick hadler function this component will still be reevaulated if the props.children or thie children passed to this component is not a primitive value, if it is a dom node it still will be recreated on every reevaluation of the parent.
export default React.memo(Button);
