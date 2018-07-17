import { createAction } from 'redux-actions';

const rootActions = {
  setSearchTerm: createAction('SET_SEARCH_TERM'),
  setGraphArea: createAction('SET_GRAPH_AREA')
};

export default rootActions;
