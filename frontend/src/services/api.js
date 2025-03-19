const API_BASE_URL = 'http://localhost:3000/api/v1';

// Helper function to get auth token from localStorage
const getAuthToken = () => localStorage.getItem('authToken');

// Helper function to set auth token in localStorage
const setAuthToken = (token) => localStorage.setItem('authToken', token);

// Helper function to remove auth token from localStorage
const removeAuthToken = () => localStorage.removeItem('authToken');

export const api = {
  async login(credentials) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Store the token
      setAuthToken(data.token);
      return data;
    } catch (error) {
      throw error;
    }
  },

  async register(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ authentication: userData }), // Match backend params structure
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.errors?.join(', ') || 'Registration failed');
      }

      // Store the token
      setAuthToken(data.token);
      return data;
    } catch (error) {
      throw error;
    }
  },

  async logout() {
    try {
      const token = getAuthToken();
      if (!token) return;

      const response = await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      // Remove the token
      removeAuthToken();
      return response.json();
    } catch (error) {
      // Even if the request fails, we should still remove the token
      removeAuthToken();
      throw error;
    }
  },

  // Helper function to check if user is authenticated
  isAuthenticated() {
    return !!getAuthToken();
  },

  // Helper function to get auth headers
  getAuthHeaders() {
    const token = getAuthToken();
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  }
}; 