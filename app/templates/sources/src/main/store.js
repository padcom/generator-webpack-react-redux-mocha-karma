import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// the reducers.js contains exports of all reducers from
// individual state elements to make it easy to import them
// all at once
import * as reducers from './reducers';

// Define root reducer
const reducer = combineReducers(reducers);

// Define used middleware (e.g. thunk, promise..)
let middleware = applyMiddleware();

// Include Redux DevTools extensions if available
if (window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension())
}

// Create and export Redux store
export const store = createStore(reducer, {}, middleware);
