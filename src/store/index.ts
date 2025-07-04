import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import locationReducer from './slices/locationSlice';
import packageReducer from './slices/packageSlice';
import deliveryReducer from './slices/deliverySlice';
import pricingReducer from './slices/pricingSlice';
import paymentReducer from './slices/paymentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    location: locationReducer,
    package: packageReducer,
    delivery: deliveryReducer,
    pricing: pricingReducer,
    payment: paymentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 