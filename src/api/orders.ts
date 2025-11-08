import apiClient from './client'
import { Order, CreateOrderPayload } from '@/types'

export const ordersApi = {
  // Create a new order
  create: async (payload: CreateOrderPayload): Promise<Order> => {
    const response = await apiClient.post<Order>('/orders', { order: payload })
    return response.data
  },

  // Get order by ID
  getById: async (id: number): Promise<Order> => {
    const response = await apiClient.get<Order>(`/orders/${id}`)
    return response.data
  },

  // Update order status
  updateStatus: async (id: number, status: string): Promise<Order> => {
    const response = await apiClient.patch<Order>(`/orders/${id}/status`, {
      status,
    })
    return response.data
  },
}

