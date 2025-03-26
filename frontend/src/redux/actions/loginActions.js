export const setLoginView = (view) => ({
  type: 'SET_LOGIN_VIEW',
  payload: view
});

export const setEmail = (email) => ({
  type: 'SET_EMAIL',
  payload: email
});

export const setPassword = (password) => ({
  type: 'SET_PASSWORD',
  payload: password
});

export const setName = (name) => ({
  type: 'SET_NAME',
  payload: name
});

export const setLoginError = (error) => ({
  type: 'SET_LOGIN_ERROR',
  payload: error
});

export const resetLoginState = () => ({
  type: 'RESET_LOGIN_STATE'
}); 