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
  login: (credentials) => api.post('/auth/login', { session: credentials }),
  signup: (userData) => api.post('/auth/signup', { user: userData }), // Changed from register to signup to match Rails
  logout: () => api.delete('/auth/logout'), // Changed to DELETE method
  checkUserExists: async (email) => {
    try {
      console.log('Checking if user exists:', email);
      
      // Add retry logic to handle temporary network issues
      let retries = 2;
      let lastError = null;
      
      while (retries >= 0) {
        try {
          const response = await api.post('/auth/check_user', { session: { email } });
          console.log('User exists check response:', response);
          
          // Log the specific data we're interested in
          console.log('User exists check data:', response.data);
          
          // Make sure we're returning a consistent format
          return {
            ...response,
            data: {
              ...response.data,
              // Ensure exists is a boolean
              exists: Boolean(response.data?.exists)
            }
          };
        } catch (error) {
          lastError = error;
          console.error(`API Error (attempt ${3 - retries}/3):`, error.response?.data || error);
          
          // If we have retries left and it's a network error, retry
          if (retries > 0 && (!error.response || error.response.status >= 500)) {
            retries--;
            // Wait a bit before retrying (exponential backoff)
            await new Promise(resolve => setTimeout(resolve, 1000 * (3 - retries)));
            continue;
          }
          
          // If we're out of retries or it's not a network error, throw
          throw error;
        }
      }
      
      // This should never be reached, but just in case
      throw lastError || new Error('Failed to check if user exists');
    } catch (error) {
      console.error('API Error:', error.response?.data || error);
      throw error.response?.data || error;
    }
  },
  completeRegistration: async (userData) => {
    try {
      console.log('Sending registration data:', userData);
      const response = await api.post('/auth/complete_registration', { user: userData });
      console.log('Registration response:', response);
      return response;
    } catch (error) {
      console.error('Registration API Error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
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