import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
	items: [],
	totalItems: 0,
	totalAmount: 0,
	changed: false, // to know that in the application we have manipulated cart
};

const cartSlice = createSlice({
	name: "cart-slice",
	initialState: cartInitialState,
	reducers: {
		setCart(state, action) {
			state.items = action.payload.items || [];
			state.totalItems = action.payload.totalItems || 0;
			state.totalAmount = action.payload.totalAmount || 0;
		},
		addItemToCart(state, action) {
			const item = state.items.find(
				(item) => item.id === action.payload.id
			);

			state.changed = true;

			if (!item) {
				// New Item
				state.items.unshift({ ...action.payload, qty: 1 });
				state.totalItems += 1;
				state.totalAmount += action.payload.price;
				return;
			}

			// Already exists
			item.qty += 1;
			state.totalItems += 1;
			state.totalAmount += action.payload.price;
		},
		removeItemFromCart(state, action) {
			const item = state.items.find(
				(item) => item.id === action.payload.id
			);

			state.changed = true;

			if (!item) {
				// Does Not Exists
				return;
			}

			// Exists
			if (item.qty === 1) {
				state.items = state.items.filter(
					(item) => item.id !== action.payload.id
				);
			} else {
				item.qty -= 1;
			}

			state.totalItems -= 1;
			state.totalAmount -= action.payload.price;
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
