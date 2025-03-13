import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentView: "login", // 'login' | 'email' | 'create-password' | 'create-name'
  email: "", // store email for registration flow
  password: "",
  name: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginView: (state, action) => {
      console.log("setLoginView reducer called with:", action);
      state.currentView = action.payload;
    },
    setEmail: (state, action) => {
      console.log("setEmail reducer called with:", action);
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      console.log("setPassword reducer called with:", action);
      state.password = action.payload;
    },
    setName: (state, action) => {
      console.log("setName reducer called with:", action);
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
