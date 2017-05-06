import {appReducer} from './reducers';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

import { routerMiddleware, routerReducer } from 'react-router-redux';
const middleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    app: appReducer,
    MYrouter: routerReducer
  }),
  composeEnhancers(
  applyMiddleware(middleware, thunk)
));
