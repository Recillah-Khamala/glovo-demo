// User types
export interface User {
  id: number
  name: string
  email: string
  phone: string
  address: string
  created_at: string
  updated_at: string
}

// Office types
export interface Office {
  id: number
  name: string
  location: string
  contact_info: string
  created_at: string
  updated_at: string
}

// Order status enum
export enum OrderStatus {
  PENDING = 'pending',
  PICKED = 'picked',
  IN_TRANSIT = 'in_transit',
  DELIVERED = 'delivered',
}

// Order types
export interface Order {
  id: number
  user_id: number
  office_id: number
  package_description: string
  weight: number
  delivery_address: string
  status: OrderStatus
  estimated_cost: number | null
  estimated_time: number | null
  tracking_code: string
  created_at: string
  updated_at: string
  user?: User
  office?: Office
}

// Order creation payload
export interface CreateOrderPayload {
  user_id: number
  office_id: number
  package_description: string
  weight: number
  delivery_address: string
  estimated_cost?: number
  estimated_time?: number
}

// API Response types
export interface ApiError {
  error?: string
  errors?: string[]
}

// Redux state types
export interface LoadingState {
  isLoading: boolean
  error: string | null
}

