import { configureStore } from '@reduxjs/toolkit'
import officesReducer from './slices/officesSlice'
import ordersReducer from './slices/ordersSlice'
import userReducer from './slices/userSlice'
import deliveryReducer from './slices/deliverySlice'

export const store = configureStore({
  reducer: {
    offices: officesReducer,
    orders: ordersReducer,
    user: userReducer,
    delivery: deliveryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

