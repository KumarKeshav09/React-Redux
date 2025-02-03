import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice"; 
import counterReducer from "../features/counterSlice"

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter : counterReducer
  },
});
