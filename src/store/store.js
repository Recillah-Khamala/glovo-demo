import { configureStore } from "@reduxjs/toolkit";
import yourSliceReducer from "./slice";
import loginReducer from "./loginSlice";

export const store = configureStore({
  reducer: {
    yourSliceName: yourSliceReducer,
    login: loginReducer,
  },
});
