import officesReducer, {
  fetchOffices,
  setSelectedOffice,
  clearError,
} from '../officesSlice'
import { Office } from '@/types'

describe('officesSlice', () => {
  const initialState = {
    offices: [],
    selectedOffice: null,
    isLoading: false,
    error: null,
  }

  it('should return initial state', () => {
    expect(officesReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should handle setSelectedOffice', () => {
    const office: Office = {
      id: 1,
      name: 'Test Office',
      location: 'Test Location',
      contact_info: 'Test Contact',
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z',
    }

    const actual = officesReducer(
      initialState,
      setSelectedOffice(office)
    )
    expect(actual.selectedOffice).toEqual(office)
  })

  it('should handle clearError', () => {
    const stateWithError = {
      ...initialState,
      error: 'Some error',
    }
    const actual = officesReducer(stateWithError, clearError())
    expect(actual.error).toBeNull()
  })

  it('should handle fetchOffices.pending', () => {
    const action = { type: fetchOffices.pending.type }
    const state = officesReducer(initialState, action)
    expect(state.isLoading).toBe(true)
    expect(state.error).toBeNull()
  })

  it('should handle fetchOffices.fulfilled', () => {
    const offices: Office[] = [
      {
        id: 1,
        name: 'Office 1',
        location: 'Location 1',
        contact_info: 'Contact 1',
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z',
      },
    ]
    const action = {
      type: fetchOffices.fulfilled.type,
      payload: offices,
    }
    const state = officesReducer(initialState, action)
    expect(state.isLoading).toBe(false)
    expect(state.offices).toEqual(offices)
  })

  it('should handle fetchOffices.rejected', () => {
    const error = 'Failed to fetch'
    const action = {
      type: fetchOffices.rejected.type,
      payload: error,
    }
    const state = officesReducer(initialState, action)
    expect(state.isLoading).toBe(false)
    expect(state.error).toBe(error)
  })
})

