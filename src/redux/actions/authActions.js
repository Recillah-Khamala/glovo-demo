import { authAPI } from '../../services/api';

export const loginStart = () => ({
  type: 'LOGIN_START',
});

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});

export const logoutStart = () => ({
  type: 'LOGOUT_START',
});

export const logoutSuccess = () => ({
  type: 'LOGOUT_SUCCESS',
});

export const logoutFailure = (error) => ({
  type: 'LOGOUT_FAILURE',
  payload: error,
});

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await authAPI.login(credentials);
    dispatch(loginSuccess(response.data.user));
    return response;
  } catch (error) {
    dispatch(loginFailure(error.message));
    throw error;
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(logoutStart());
    await authAPI.logout();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure(error.message));
    throw error;
  }
}; 