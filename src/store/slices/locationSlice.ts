import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { LocationState, Location } from '../../types';

const initialState: LocationState = {
  pickupLocation: null,
  deliveryLocation: null,
  currentLocation: null,
  isLoading: false,
  error: null,
};

export const setCurrentLocation = createAsyncThunk(
  'location/setCurrent',
  async () => {
    // TODO: Replace with actual geolocation API call
    const response = await new Promise<Location>((resolve) => {
      setTimeout(() => {
        resolve({
          id: 'current',
          address: 'Mombasa, Kenya',
          latitude: -4.0435,
          longitude: 39.6682,
          zone: 'Mombasa Central',
        });
      }, 1000);
    });
    return response;
  }
);

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setPickupLocation: (state, action: PayloadAction<Location>) => {
      state.pickupLocation = action.payload;
    },
    setDeliveryLocation: (state, action: PayloadAction<Location>) => {
      state.deliveryLocation = action.payload;
    },
    clearLocations: (state) => {
      state.pickupLocation = null;
      state.deliveryLocation = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setCurrentLocation.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(setCurrentLocation.fulfilled, (state, action: PayloadAction<Location>) => {
        state.isLoading = false;
        state.currentLocation = action.payload;
        state.error = null;
      })
      .addCase(setCurrentLocation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to get current location';
      });
  },
});

export const { setPickupLocation, setDeliveryLocation, clearLocations, clearError } = locationSlice.actions;
export default locationSlice.reducer; 