import React from "react";

import { Route } from "react-router-dom";

const Welcome = () => {
	console.log("Welcome Component Re-rendered");

	return (
		<section>
			<div>Welcome Page</div>
			<Route path="/welcome/new-user">
				<p>Child Route</p>
			</Route>
		</section>
	);
};

export default Welcome;
