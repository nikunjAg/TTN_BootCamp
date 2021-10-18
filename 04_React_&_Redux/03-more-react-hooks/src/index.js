import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthCtxProvider } from "./components/store/auth-context";

ReactDOM.render(
	<AuthCtxProvider>
		<App />
	</AuthCtxProvider>,
	document.getElementById("root")
);
