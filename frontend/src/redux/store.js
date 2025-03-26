import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import loginReducer from './reducers/loginReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    login: loginReducer,
  },
});

export default store; 