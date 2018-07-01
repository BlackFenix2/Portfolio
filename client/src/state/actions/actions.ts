import types from '../types';

const rootActions = {
  setSearchTerm(searchTerm) {
    return { type: types.SET_SEARCH_TERM, payload: searchTerm };
  },
  setGraphArea(height, width) {
    return { type: types.SET_GRAPH_AREA, payload: { height, width } };
  }
};

export default rootActions;
