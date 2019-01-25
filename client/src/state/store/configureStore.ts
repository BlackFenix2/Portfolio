import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import sagas from '../sagas';
import initialState from './initialState';

// build saga middleware
const sagaMiddleware = createSagaMiddleware();

// middleware Array
const middleware = [sagaMiddleware];

// Redux DevTools only works in development

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

// initialize Sagas
sagas(sagaMiddleware);

export default store;
