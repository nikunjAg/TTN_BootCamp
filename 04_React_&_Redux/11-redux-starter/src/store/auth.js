import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
	email: "",
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialAuthState,
	reducers: {
		login(state, action) {
			state.isAuthenticated = true;
			state.email = action.payload.email;
		},
		logout(state) {
			state.isAuthenticated = false;
			state.email = "";
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
