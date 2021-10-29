import { useSelector } from "react-redux";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
	const userEmail = useSelector((state) => state.auth.email);

	return (
		<main className={classes.profile}>
			<h2>My User Profile</h2>
			<p>Email: {userEmail}</p>
		</main>
	);
};

export default UserProfile;
