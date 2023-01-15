import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import * as auth from '../components/auth/service';
import * as adverts from '../components/adverts/service';


const reducer = combineReducers(reducers);


const HISTORY_BACK = 'HISTORY_BACK';

const historyEnhancer = createStore => (reducer, preloadedState, enhancer) => {
  const historyReducer = (state, action) => {
    const { history = [], ...rootState } = state;
    if (action.type === HISTORY_BACK) {
      const newHistory = history.slice(0, history.length - 1);
      return {
        ...newHistory[newHistory.length - 1].state,
        history: newHistory,
      };
    }

    const newState = reducer(rootState, action);
    return {
      ...newState,
      history: [...history, { action, state: newState }],
    };
  };
  return createStore(historyReducer, preloadedState, enhancer);
};

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action, store.getState());
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const failureRedirections =
  (router, redirections) => store => next => action => {
    const result = next(action);

    if (action.error) {
      const redirection = redirections[action.payload.status];
      if (redirection) {
        router.navigate(redirection);
      }
    }

    return result;
  };

export default function configureStore(preloadedState, { router }) {
  const middlewares = [
    thunk.withExtraArgument({ api: { auth, adverts }, router }),
    failureRedirections(router, {
      401: '/login',
      404: '/404',
    }),
    logger,
  ];
  const store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares), historyEnhancer),
  );

  return store;
}



  

  
