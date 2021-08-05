import { combineReducers } from 'redux';
import { LoginReducer, ScreenReducer } from './auth/LoginReducer';

const RootReducer = combineReducers({
  isLogged: LoginReducer,
  screen: ScreenReducer,
});

export default RootReducer;
