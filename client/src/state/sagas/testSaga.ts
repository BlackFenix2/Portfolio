import { take } from 'redux-saga/effects';
import actions from '../actions';

export default function* currentUserSaga() {
  const item = yield take(actions.setSearchTerm);
  // tslint:disable-next-line:no-console
  console.info('searchterm was set', item);
}
