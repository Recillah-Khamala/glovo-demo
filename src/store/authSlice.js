import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../services/api';

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  currentView: null,
  user: null,
  email: "",
  password: "",
  name: "",
  address: null,
  topRestaurants: [],
  restaurantsStatus: 'idle',
  restaurantsError: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginView: (state, action) => {
      state.currentView = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
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
    resetLoginState: (state) => {
      state.currentView = null;
      state.email = "";
      state.password = "";
      state.name = "";
      state.error = null;
    }
  }
});

export const { setLoginView, setLoading, setError, setUser, logout, setEmail, setPassword, setName, setAddress, resetLoginState } = authSlice.actions;

// Thunk actions
export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));
    
    const response = await authAPI.login(credentials);
    localStorage.setItem('token', response.data.token);
    dispatch(setUser(response.data.user));
  } catch (error) {
    dispatch(setError(error.message));
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
};

export const checkAuth = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await authAPI.checkAuth();
      dispatch(setUser(response.data.user));
    }
  } catch (error) {
    dispatch(logout());
  }
};

export default authSlice.reducer; 