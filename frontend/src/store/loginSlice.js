import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentView: "login", // can be 'login', 'email', or 'create-password'
  email: "", // store email for registration flow
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginView: (state, action) => {
      console.log("Previous view:", state.currentView);
      console.log("Setting view to:", action.payload);
      if (action.payload === state.currentView) {
        // Force a state change even if the value is the same
        state.currentView = "";
        state.currentView = action.payload;
      } else {
        state.currentView = action.payload;
      }
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setLoginView, setEmail } = loginSlice.actions;
export default loginSlice.reducer;
