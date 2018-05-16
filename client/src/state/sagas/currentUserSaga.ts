import { delay } from 'redux-saga';

export default function* currentUserSaga() {
  yield delay(2000);
  const mode = process.env.NODE_ENV;
  // tslint:disable-next-line:no-console
  console.log('saga test', mode);
}
