// tslint:disable-next-line:no-submodule-imports
import { call, put } from 'redux-saga/effects';

export default function* crud(type, api) {
  try {
    yield put(type.request());
    const data = yield call(api);
    yield put(type.success(data));
  } catch (error) {
    yield put(type.failure(error));
  } finally {
    yield put(type.fulfill());
  }
}
