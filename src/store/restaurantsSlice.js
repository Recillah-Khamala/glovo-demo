import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { restaurantsAPI } from '../services/api';

export const fetchTopRestaurants = createAsyncThunk(
  'restaurants/fetchTopRestaurants',
  async () => {
    try {
      const response = await restaurantsAPI.getTopRestaurants();
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch top restaurants');
    }
  }
);

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    topRestaurants: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopRestaurants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTopRestaurants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.topRestaurants = action.payload;
      })
      .addCase(fetchTopRestaurants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default restaurantsSlice.reducer; 