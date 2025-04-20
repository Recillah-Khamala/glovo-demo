import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currentView: null, // null | 'email' | 'create-password' | 'create-name'
  email: "",
  password: "",
  name: "",
  address: null, // null | { street: string, city: string }
  topRestaurants: [],
  restaurantsStatus: 'idle',
  restaurantsError: null
};

export const fetchTopRestaurants = createAsyncThunk(
  'login/fetchTopRestaurants',
  async () => {
    const response = await fetch('https://api.glovoapp.com/v3/partners/top');
    if (!response.ok) {
      throw new Error('Failed to fetch top restaurants');
    }
    return response.json();
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopRestaurants.pending, (state) => {
        state.restaurantsStatus = 'loading';
      })
      .addCase(fetchTopRestaurants.fulfilled, (state, action) => {
        state.restaurantsStatus = 'succeeded';
        state.topRestaurants = action.payload;
      })
      .addCase(fetchTopRestaurants.rejected, (state, action) => {
        state.restaurantsStatus = 'failed';
        state.restaurantsError = action.error.message;
      });
  }
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
