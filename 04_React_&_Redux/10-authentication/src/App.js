import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
	const ctx = useContext(AuthContext);

	let routes = (
		<Switch>
			<Route path="/" exact>
				<HomePage />
			</Route>
			<Route path="/auth">
				<AuthPage />
			</Route>
			<Route path="*">
				<Redirect to="/auth" />
			</Route>
		</Switch>
	);

	if (ctx.isLoggedIn) {
		routes = (
			<Switch>
				<Route path="/" exact>
					<HomePage />
				</Route>

				<Route path="/profile">
					<UserProfile />
				</Route>
			</Switch>
		);
	}

	return <Layout>{routes}</Layout>;
}

export default App;
