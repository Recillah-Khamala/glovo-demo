import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { User, Order } from '@/types'
import { usersApi } from '@/api/users'
import { ApiError } from '@/types'

interface UserState {
  currentUser: User | null
  userOrders: Order[]
  isLoading: boolean
  error: string | null
}

const initialState: UserState = {
  currentUser: null,
  userOrders: [],
  isLoading: false,
  error: null,
}

// Mock user for development (replace with actual auth later)
const MOCK_USER: User = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1-555-1001',
  address: '100 Residential Street, Apartment 5B, Suburbia, State 12345',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
}

// Async thunks
export const fetchUserOrders = createAsyncThunk(
  'user/fetchOrders',
  async (userId: number, { rejectWithValue }) => {
    try {
      const orders = await usersApi.getOrders(userId)
      return orders
    } catch (error) {
      const apiError = error as ApiError
      return rejectWithValue(apiError.error || 'Failed to fetch user orders')
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload
    },
    setMockUser: (state) => {
      state.currentUser = MOCK_USER
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch user orders
      .addCase(fetchUserOrders.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchUserOrders.fulfilled, (state, action) => {
        state.isLoading = false
        state.userOrders = action.payload
      })
      .addCase(fetchUserOrders.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const { setUser, setMockUser, clearError } = userSlice.actions
export default userSlice.reducer

