import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import restaurantsReducer from './restaurantsSlice';
import categoriesReducer from './categoriesSlice';
import addressReducer from './addressSlice';
import loginReducer from './loginSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurants: restaurantsReducer,
    categories: categoriesReducer,
    address: addressReducer,
    login: loginReducer
  }
}); 