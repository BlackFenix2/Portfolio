import types from '../types';

// other reducers
import fruitReducer from './crudReducer';

export const fruits = fruitReducer;

export const searchTerm = (state = '', action) => {
  switch (action.type) {
    case types.SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

export const graphArea = (state = {}, action) => {
  switch (action.type) {
    case types.SET_GRAPH_AREA:
      return action.payload;

    default:
      return state;
  }
};

export const routes = (state = {}) => state;

export const user = (state = {}) => state;
