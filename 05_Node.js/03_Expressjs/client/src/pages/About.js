import React, { useEffect, useState } from "react";

import axios from "../axios";

const About = () => {
	const [userInfo, setUserInfo] = useState({
		created_by: "",
		employedAt: "",
		technologies_used: [],
	});

	useEffect(() => {
		axios
			.get("/about")
			.then(({ data }) => {
				setUserInfo(data);
			})
			.catch((e) => console.log(e));
	}, []);

	return (
		<section
			style={{
				margin: "2rem 0rem",
				padding: "1rem",
			}}
		>
			<p style={{ marginBottom: ".5rem" }}>
				<span style={{ fontWeight: "600" }}>Created By: </span>
				{userInfo["created_by"]}
			</p>
			<p style={{ marginBottom: ".5rem" }}>
				<span style={{ fontWeight: "600" }}>Employed At: </span>
				{userInfo["employedAt"]}
			</p>
			<p style={{ marginBottom: ".5rem" }}>
				<span style={{ fontWeight: "600" }}>Technologies Used: </span>
			</p>
			<ul style={{ marginLeft: "1rem" }}>
				{userInfo["technologies_used"].map((tech, idx) => (
					<li key={idx}>{tech}</li>
				))}
			</ul>
		</section>
	);
};

export default About;
