import {appReducer} from './reducers';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

export default createStore(appReducer, applyMiddleware(thunk));
