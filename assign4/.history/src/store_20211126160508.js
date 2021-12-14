
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer g

const initialState = {};
const store = createStore(rootReducer, initialState,applyMiddleware(thunk))


export default store;
// composeEnhancer(
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;