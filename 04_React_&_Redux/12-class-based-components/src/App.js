import UserFinder from "./components/UserFinder";
import { UsersContextProvider } from "./store/users-context";

function App() {
	return (
		<UsersContextProvider>
			<UserFinder />
		</UsersContextProvider>
	);
}

export default App;
