import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import continentsReducer from './Continents';
import countriesReducer from './Countries';

const rootReducer = combineReducers({
  continentsReducer,
  countriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
