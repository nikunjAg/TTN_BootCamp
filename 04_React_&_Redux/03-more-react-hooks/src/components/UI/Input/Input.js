import React, { useRef, useImperativeHandle } from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef(
	(
		{
			invalid,
			className,
			label,
			name,
			type,
			value,
			placeholder,
			onChange,
			onBlur,
		},
		ref
	) => {
		const inputRef = useRef();

		const activate = () => {
			inputRef.current.focus();
		};

		useImperativeHandle(ref, () => {
			return {
				focus: activate,
			};
		});

		return (
			<div
				className={`${styles.input} ${
					(invalid && styles.invalid) || ""
				} ${className || ""}`}
			>
				<label htmlFor={name}>{label}</label>
				<input
					type={type}
					name={name}
					id={name}
					value={value}
					placeholder={placeholder}
					ref={inputRef}
					onChange={onChange}
					onBlur={onBlur}
				/>
			</div>
		);
	}
);

export default Input;
