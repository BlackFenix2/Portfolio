// other reducers
import { handleAction } from 'redux-actions';
import actions from '../actions';
import fruitReducer from './crudReducer';

export const fruits = fruitReducer;

export const searchTerm = handleAction(
  actions.setSearchTerm,
  (state = '', action) => action.payload,
  {}
);

export const graphArea = handleAction(
  actions.setGraphArea,
  (state = '', action) => action.payload,
  {}
);

export const routes = (state = {}) => state;

export const user = (state = {}) => state;
