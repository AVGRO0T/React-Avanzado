import { createStore, combineReducers/* , applyMiddleware */ } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
//import thunk from 'redux-thunk';

import * as reducers from './reducers';

// const reducer = combineReducers({ auth, tweets });
const reducer = combineReducers(reducers);

export default function configureStore(preloadedState) {
  const store = createStore(reducer, preloadedState, composeWithDevTools());

  return store;}