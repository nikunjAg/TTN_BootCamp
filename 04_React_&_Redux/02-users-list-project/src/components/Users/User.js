import React from "react";

const userStyle = {
	border: "1px solid black",
	borderRadius: "15px",
	margin: ".5rem 0rem",
	fontSize: "1rem",
};

const User = ({ username, age }) => {
	return (
		<li style={userStyle}>
			<p style={{ padding: "5px 15px" }}>
				{username} - {age} years
			</p>
		</li>
	);
};

export default User;
