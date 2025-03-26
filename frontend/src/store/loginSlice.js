import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentView: null, // null | 'email' | 'create-password' | 'create-name'
  email: "",
  password: "",
  name: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginView: (state, action) => {
      state.currentView = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Export the actions
const { setLoginView, setEmail, setPassword, setName } = loginSlice.actions;

// Create wrapped versions of the actions that ensure plain objects
export const wrappedSetLoginView = (view) => ({
  type: "login/setLoginView",
  payload: view,
});

export const wrappedSetPassword = (password) => ({
  type: "login/setPassword",
  payload: password,
});

export const wrappedSetEmail = (email) => ({
  type: "login/setEmail",
  payload: email,
});

export const wrappedSetName = (name) => ({
  type: "login/setName",
  payload: name,
});

export { setLoginView, setEmail, setPassword, setName };
export default loginSlice.reducer;
