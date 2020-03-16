import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { machineReducer } from './machineRedux';

const store = createStore(machineReducer, applyMiddleware(thunk));

export default store;