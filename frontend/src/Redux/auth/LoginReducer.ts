export const LoginReducer = (state = false, action: { type: any }) => {
  switch (action.type) {
    case 'SIGN_IN':
      return !state;
    default:
      return state;
  }
};

export const ScreenReducer = (state = '', action: { type: any }) => {
  switch (action.type) {
    case 'LOGIN':
      return (state = 'LOGIN');
    case 'REGISTER':
      return (state = 'REGISTER');
    default:
      return state;
  }
};
