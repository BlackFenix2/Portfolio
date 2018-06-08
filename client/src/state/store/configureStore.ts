// import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import sagas from '../sagas';
import initialState from './initialState';

// Build the router middleware
const router = routerMiddleware();

// build saga middleware
const sagaMiddleware = createSagaMiddleware();

// middleware Array
const middleware = [router, sagaMiddleware];

// Redux DevTools only works in development

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// initialize Sagas
sagas(sagaMiddleware);

export default store;
