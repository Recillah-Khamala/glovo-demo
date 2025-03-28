import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import loginReducer from '../store/loginSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    login: loginReducer,
  },
});

export default store; 