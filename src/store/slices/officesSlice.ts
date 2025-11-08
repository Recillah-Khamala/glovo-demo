import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Office } from '@/types'
import { officesApi } from '@/api/offices'
import { ApiError } from '@/types'

interface OfficesState {
  offices: Office[]
  selectedOffice: Office | null
  isLoading: boolean
  error: string | null
}

const initialState: OfficesState = {
  offices: [],
  selectedOffice: null,
  isLoading: false,
  error: null,
}

// Async thunks
export const fetchOffices = createAsyncThunk(
  'offices/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const offices = await officesApi.getAll()
      return offices
    } catch (error) {
      const apiError = error as ApiError
      return rejectWithValue(apiError.error || 'Failed to fetch offices')
    }
  }
)

export const fetchOfficeById = createAsyncThunk(
  'offices/fetchById',
  async (id: number, { rejectWithValue }) => {
    try {
      const office = await officesApi.getById(id)
      return office
    } catch (error) {
      const apiError = error as ApiError
      return rejectWithValue(apiError.error || 'Failed to fetch office')
    }
  }
)

const officesSlice = createSlice({
  name: 'offices',
  initialState,
  reducers: {
    setSelectedOffice: (state, action: PayloadAction<Office | null>) => {
      state.selectedOffice = action.payload
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all offices
      .addCase(fetchOffices.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchOffices.fulfilled, (state, action) => {
        state.isLoading = false
        state.offices = action.payload
      })
      .addCase(fetchOffices.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
      // Fetch office by ID
      .addCase(fetchOfficeById.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchOfficeById.fulfilled, (state, action) => {
        state.isLoading = false
        state.selectedOffice = action.payload
      })
      .addCase(fetchOfficeById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
      })
  },
})

export const { setSelectedOffice, clearError } = officesSlice.actions
export default officesSlice.reducer

