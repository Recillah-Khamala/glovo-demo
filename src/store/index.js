import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import restaurantsReducer from './restaurantsSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    restaurants: restaurantsReducer
  }
}); 