import axios, { AxiosInstance, AxiosError } from 'axios'
import { ApiError } from '@/types'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

// Create axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiError>) => {
    if (error.response) {
      // Server responded with error
      const apiError: ApiError = error.response.data || {
        error: error.message || 'An error occurred',
      }
      return Promise.reject(apiError)
    } else if (error.request) {
      // Request made but no response
      return Promise.reject({
        error: 'Network error. Please check your connection.',
      } as ApiError)
    } else {
      // Something else happened
      return Promise.reject({
        error: error.message || 'An unexpected error occurred',
      } as ApiError)
    }
  }
)

export default apiClient

