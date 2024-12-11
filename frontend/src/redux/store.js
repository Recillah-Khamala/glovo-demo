import { configureStore } from '@reduxjs/toolkit';
import lastMileReducer from './slices/lastMileSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
    reducer: {
        lastMile: lastMileReducer,
        user: userReducer,
    },
});

export default store;
