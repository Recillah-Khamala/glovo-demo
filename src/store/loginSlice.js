import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentView: null, // null | 'email' | 'create-password' | 'create-name'
  email: "",
  password: "",
  name: "",
  address: null, // null | { street: string, city: string }
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
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

// Create wrapped versions of the actions that ensure plain objects
export const wrappedSetLoginView = (view) => ({
  type: "login/setLoginView",
  payload: view,
});

export const wrappedSetEmail = (email) => ({
  type: "login/setEmail",
  payload: email,
});

export const wrappedSetPassword = (password) => ({
  type: "login/setPassword",
  payload: password,
});

export const wrappedSetName = (name) => ({
  type: "login/setName",
  payload: name,
});

export const wrappedSetAddress = (address) => ({
  type: "login/setAddress",
  payload: address,
});

export default loginSlice.reducer;
