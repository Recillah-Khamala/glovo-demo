import apiClient from './client'
import { Office } from '@/types'

export const officesApi = {
  // Get all offices
  getAll: async (): Promise<Office[]> => {
    const response = await apiClient.get<Office[]>('/offices')
    return response.data
  },

  // Get office by ID
  getById: async (id: number): Promise<Office> => {
    const response = await apiClient.get<Office>(`/offices/${id}`)
    return response.data
  },
}

