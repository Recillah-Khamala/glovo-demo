import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PaymentState, Payment } from '../../types';

const initialState: PaymentState = {
  payments: [],
  currentPayment: null,
  isLoading: false,
  error: null,
};

export const processPayment = createAsyncThunk(
  'payment/process',
  async (payment: Omit<Payment, 'id' | 'status' | 'createdAt'>) => {
    // TODO: Replace with actual payment API call
    const response = await new Promise<Payment>((resolve) => {
      setTimeout(() => {
        resolve({
          ...payment,
          id: Date.now().toString(),
          status: 'completed',
          createdAt: new Date().toISOString(),
        });
      }, 2000);
    });
    return response;
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setCurrentPayment: (state, action: PayloadAction<Payment>) => {
      state.currentPayment = action.payload;
    },
    clearCurrentPayment: (state) => {
      state.currentPayment = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(processPayment.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(processPayment.fulfilled, (state, action: PayloadAction<Payment>) => {
        state.isLoading = false;
        state.payments.push(action.payload);
        state.currentPayment = action.payload;
        state.error = null;
      })
      .addCase(processPayment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Payment failed';
      });
  },
});

export const { setCurrentPayment, clearCurrentPayment, clearError } = paymentSlice.actions;
export default paymentSlice.reducer; 