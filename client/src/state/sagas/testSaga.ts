import { take } from 'redux-saga/effects';
import types from '../types';

export default function* currentUserSaga() {
  const item = yield take(types.SET_SEARCH_TERM);
  // tslint:disable-next-line:no-console
  console.info('searchterm was set', item);
}
