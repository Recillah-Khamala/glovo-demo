import { configureStore } from "@reduxjs/toolkit";
import yourSliceReducer from "./slice";

export const store = configureStore({
  reducer: {
    yourSliceName: yourSliceReducer,
  },
});
