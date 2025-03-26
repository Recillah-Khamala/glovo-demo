const initialState = {
  currentView: 'email', // 'email', 'create-password', 'create-name'
  email: '',
  password: '',
  name: '',
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGIN_VIEW':
      return {
        ...state,
        currentView: action.payload
      };
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload
      };
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      };
    case 'SET_LOGIN_ERROR':
      return {
        ...state,
        error: action.payload
      };
    case 'RESET_LOGIN_STATE':
      return initialState;
    default:
      return state;
  }
};

export default loginReducer; 