import { delay } from 'redux-saga/effects';

export default function* currentUserSaga() {
  yield delay(2000);
}
