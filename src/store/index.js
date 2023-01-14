import { createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import * as reducers from './reducers';
import * as auth from '../components/auth/service';
import * as adverts from '../components/adverts/service'

const middlewares = [
  thunk.withExtraArgument({ api: { auth, adverts } }),
];

const reducer = combineReducers(reducers);

export default function configureStore(preloadedState) {
  const store = createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware(...middlewares)));

  return store;}

  
