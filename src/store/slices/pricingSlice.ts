import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PricingState, PricingZone } from '../../types';

const initialState: PricingState = {
  zones: [
    {
      id: 'mombasa-central',
      name: 'Mombasa Central',
      basePrice: 150,
      distanceMultiplier: 50,
    },
    {
      id: 'nyali',
      name: 'Nyali',
      basePrice: 200,
      distanceMultiplier: 60,
    },
    {
      id: 'bamburi',
      name: 'Bamburi',
      basePrice: 180,
      distanceMultiplier: 55,
    },
    {
      id: 'shanzu',
      name: 'Shanzu',
      basePrice: 220,
      distanceMultiplier: 65,
    },
  ],
  currentZone: null,
  estimatedPrice: null,
  isLoading: false,
  error: null,
};

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    setCurrentZone: (state, action: PayloadAction<PricingZone>) => {
      state.currentZone = action.payload;
    },
    setEstimatedPrice: (state, action: PayloadAction<number>) => {
      state.estimatedPrice = action.payload;
    },
    clearPricing: (state) => {
      state.currentZone = null;
      state.estimatedPrice = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setCurrentZone, setEstimatedPrice, clearPricing, clearError } = pricingSlice.actions;
export default pricingSlice.reducer; 