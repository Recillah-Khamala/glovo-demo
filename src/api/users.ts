import apiClient from './client'
import { Order } from '@/types'

export const usersApi = {
  // Get user's orders
  getOrders: async (userId: number): Promise<Order[]> => {
    const response = await apiClient.get<Order[]>(`/users/${userId}/orders`)
    return response.data
  },
}

