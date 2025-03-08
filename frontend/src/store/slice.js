import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const yourSlice = createSlice({
  name: "yourSliceName",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = yourSlice.actions;

export default yourSlice.reducer;
