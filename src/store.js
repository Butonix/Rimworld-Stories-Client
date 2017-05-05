import {appReducer} from './reducers';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';
export const history = createHistory();

import { routerMiddleware, routerReducer } from 'react-router-redux';
const middleware = routerMiddleware(history);

export default createStore(
  combineReducers({
    app: appReducer,
    MYrouter: routerReducer
  }),
  applyMiddleware(middleware, thunk)
)
