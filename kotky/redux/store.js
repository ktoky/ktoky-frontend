import localStorageUtil from "@/utils/localStorageUtil";
import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { reducer } from "./rootReducer";
// Check if the code is running in the browser


// Load cart state from localStorage if in the browser
const loadCartState = () => {
 
    try {
      const serializedState = localStorageUtil.getItem("cart");
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
      console.error("Could not load cart state", error);
      return undefined;
    }

};

// Save cart state to localStorage if in the browser
const saveCartState = (state) => {
  
    try {
      const serializedState = JSON.stringify(state);
      localStorageUtil.setItem("cart", serializedState);
    } catch (error) {
      console.error("Could not save cart state", error);
    }
  
};

export const store = configureStore({
  reducer,
  preloadedState: {
    cart: loadCartState(), // Load cart state only if in browser
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

store.subscribe(() => {
  saveCartState(store.getState().cart);
});
