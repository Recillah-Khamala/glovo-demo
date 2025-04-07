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
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', { user: credentials });
      return response;
    } catch (error) {
      throw error;
    }
  },

  signup: async (userData) => {
    try {
      const response = await api.post('/auth/signup', { user: userData });
      return response;
    } catch (error) {
      throw error;
    }
  },

  logout: () => api.delete('/auth/logout'),

  checkUserExists: async (email) => {
    try {
      let retries = 2;
      let lastError = null;
      
      while (retries >= 0) {
        try {
          const response = await api.post('/auth/check_user', { user: { email } });
          
          return {
            ...response,
            data: {
              ...response.data,
              exists: Boolean(response.data?.exists)
            }
          };
        } catch (error) {
          lastError = error;
          
          if (retries > 0 && (!error.response || error.response.status >= 500)) {
            retries--;
            await new Promise(resolve => setTimeout(resolve, 1000 * (3 - retries)));
            continue;
          }
          
          throw error;
        }
      }
      
      throw lastError || new Error('Failed to check if user exists');
    } catch (error) {
      throw error;
    }
  },

  completeRegistration: async (userData) => {
    try {
      const response = await api.post('/auth/complete_registration', { user: userData });
      return response;
    } catch (error) {
      throw error;
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