import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true 
});

// Add a request interceptor to add the auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth endpoints
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  signup: (userData) => api.post('/auth/signup', { user: userData }), // Changed from register to signup to match Rails
  logout: () => api.delete('/auth/logout'), // Changed to DELETE method
  checkUserExists: async (email) => {
    try {
      const response = await api.post('/auth/check_user', { email });
      return response;
    } catch (error) {
      console.error('API Error:', error.response?.data || error);
      throw error.response?.data || error;
    }
  },
};

// User endpoints
export const userAPI = {
  getProfile: () => api.get('/profile'),
  updateProfile: (data) => api.patch('/profile', { user: data }), // Changed to PATCH and wrapped in user object
};

// Address endpoints
export const addressesAPI = {
  getAddresses: () => api.get('/addresses'),
  createAddress: (addressData) => api.post('/addresses', { address: addressData }),
  updateAddress: (id, addressData) => api.patch(`/addresses/${id}`, { address: addressData }),
  deleteAddress: (id) => api.delete(`/addresses/${id}`),
};

export default api;