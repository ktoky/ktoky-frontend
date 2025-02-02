import { createSlice } from "@reduxjs/toolkit";

const loadStateFromLocalStorage = () => {
  try {
    if (typeof window !== "undefined") {
      const serializedState = localStorage.getItem("cart");
      const parsedState = serializedState ? JSON.parse(serializedState) : null;

      if (parsedState && typeof parsedState === "object" && parsedState.cart) {
        // Recalculate cartTotal based on the cart items
        const cartTotal = parsedState.cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );

        return {
          cart: parsedState.cart,
          cartTotal: cartTotal,
        };
      }
    }

    return { cart: [], cartTotal: 0 };
  } catch (e) {
    console.error("Could not load state from localStorage", e);
    return { cart: [], cartTotal: 0 };
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    if (typeof window !== "undefined") {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("cart", serializedState);
    }
  } catch (e) {
    console.error("Could not save state to localStorage", e);
  }
};

// const initialState = loadStateFromLocalStorage();

// Initial state
const initialState = {
  items: [],
  total: 0,
};

// Create the slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;

      // Check if the item is in stock (availableQuantity > 0)
      if (item.availableQuantity <= 0) {
        return; // Do not add to cart if the item is out of stock
      }

      const existingItem = state.items.find((i) => i.colorId === item.colorId);

      if (existingItem) {
        // Update the quantity of the existing item
        existingItem.quantity += item.quantity || 1;
      } else {
        // Add the new item to the cart with a default quantity of 1
        state.items.push({ ...item, quantity: item.quantity || 1 });
      }

      // Update the total
      state.total += item.price * (item.quantity || 1);
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload.id;
      const itemToRemove = state.items.find((item) => item.colorId === itemId);

      if (itemToRemove) {
        // Update the total
        state.total -= itemToRemove.price * itemToRemove.quantity;
      }

      // Remove the item
      state.items = state.items.filter((item) => item.colorId !== itemId);
    },
    incrementItem: (state, action) => {
      const itemId = action.payload.id;
      const existingItem = state.items.find((item) => item.colorId === itemId);

      if (existingItem) {
        // Increment the quantity without any restriction
        existingItem.quantity += 1;
        state.total += existingItem.price; // Update the total
      }
    },
    decrementItem: (state, action) => {
      const itemId = action.payload.id;
      const existingItem = state.items.find((item) => item.colorId === itemId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.total -= existingItem.price;
        } else {
          // Remove item if quantity is 1
          state.items = state.items.filter((item) => item.colorId !== itemId);
          state.total -= existingItem.price;
        }
      }
    },
    // Reset the cart after order placement
    resetCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

// Export the reducer and actions
export default cartSlice.reducer;
export const {
  addItemToCart,
  removeItemFromCart,
  incrementItem,
  decrementItem,
  resetCart,
} = cartSlice.actions;
