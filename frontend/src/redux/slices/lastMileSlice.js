import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchActiveDeliveries } from '../../services/transportAPI';

export const fetchActiveDeliveries = createAsyncThunk('lastMile/fetchActiveDeliveries', async () => {
    const response = await fetchActiveDeliveries();
    return response;
});

const lastMileSlice = createSlice({
    name: 'lastMile',
    initialState: {
        activeDeliveries: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchActiveDeliveries.fulfilled, (state, action) => {
                state.activeDeliveries = action.payload;
            });
    },
});

export default lastMileSlice.reducer;
