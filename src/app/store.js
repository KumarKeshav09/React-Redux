import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice"; // Import the default reducer

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
