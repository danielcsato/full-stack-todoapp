import { createStore, applyMiddleware } from 'redux';
import RootReducer from './RootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof RootReducer>;

export default Store;
