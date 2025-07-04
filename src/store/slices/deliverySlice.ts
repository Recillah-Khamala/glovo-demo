import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { DeliveryState, DeliveryRequest } from '../../types';

const initialState: DeliveryState = {
  requests: [],
  currentRequest: null,
  isLoading: false,
  error: null,
};

export const createDeliveryRequest = createAsyncThunk(
  'delivery/create',
  async (request: Omit<DeliveryRequest, 'id' | 'status' | 'createdAt' | 'updatedAt'>) => {
    // TODO: Replace with actual API call
    const response = await new Promise<DeliveryRequest>((resolve) => {
      setTimeout(() => {
        resolve({
          ...request,
          id: Date.now().toString(),
          status: 'pending',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }, 1000);
    });
    return response;
  }
);

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setCurrentRequest: (state, action: PayloadAction<DeliveryRequest>) => {
      state.currentRequest = action.payload;
    },
    updateRequestStatus: (state, action: PayloadAction<{ id: string; status: DeliveryRequest['status'] }>) => {
      const request = state.requests.find(r => r.id === action.payload.id);
      if (request) {
        request.status = action.payload.status;
        request.updatedAt = new Date().toISOString();
      }
      if (state.currentRequest?.id === action.payload.id) {
        state.currentRequest.status = action.payload.status;
        state.currentRequest.updatedAt = new Date().toISOString();
      }
    },
    clearCurrentRequest: (state) => {
      state.currentRequest = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDeliveryRequest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createDeliveryRequest.fulfilled, (state, action: PayloadAction<DeliveryRequest>) => {
        state.isLoading = false;
        state.requests.push(action.payload);
        state.currentRequest = action.payload;
        state.error = null;
      })
      .addCase(createDeliveryRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to create delivery request';
      });
  },
});

export const { setCurrentRequest, updateRequestStatus, clearCurrentRequest, clearError } = deliverySlice.actions;
export default deliverySlice.reducer; 