import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initState = {};
const middleware = [thunk];

const store = createStore(rootReducer,initState,applyMiddleware(...middleware));

export default store;