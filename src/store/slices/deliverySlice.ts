import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Order, OrderStatus } from '@/types'

interface DeliveryState {
  trackingOrder: Order | null
  isTracking: boolean
}

const initialState: DeliveryState = {
  trackingOrder: null,
  isTracking: false,
}

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setTrackingOrder: (state, action: PayloadAction<Order | null>) => {
      state.trackingOrder = action.payload
      state.isTracking = action.payload !== null
    },
    updateTrackingStatus: (state, action: PayloadAction<OrderStatus>) => {
      if (state.trackingOrder) {
        state.trackingOrder.status = action.payload
      }
    },
    stopTracking: (state) => {
      state.trackingOrder = null
      state.isTracking = false
    },
  },
})

export const { setTrackingOrder, updateTrackingStatus, stopTracking } =
  deliverySlice.actions
export default deliverySlice.reducer

