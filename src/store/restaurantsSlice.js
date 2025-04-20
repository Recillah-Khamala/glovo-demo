import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTopRestaurants = createAsyncThunk(
  'restaurants/fetchTopRestaurants',
  async () => {
    const response = await fetch('https://api.glovoapp.com/v3/partners/top');
    if (!response.ok) {
      throw new Error('Failed to fetch top restaurants');
    }
    return response.json();
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