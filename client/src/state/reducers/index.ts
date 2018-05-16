import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as reducers from './reducer';

const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer,
  form: formReducer
});

export default rootReducer;
