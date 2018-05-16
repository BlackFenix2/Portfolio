import { takeEvery } from 'redux-saga/effects';
import { fruitAPI } from 'src/services/API';
import {
  addFruit,
  deleteFruit,
  getFruit,
  getFruitList,
  updateFruit
} from '../actions/FruitActions/fruitRoutines';

import crud from './crudSaga';

interface IAction {
  type: string;
  payload: any;
}

export default function* watchFruit() {
  yield takeEvery(getFruitList.TRIGGER, () =>
    crud(getFruitList, fruitAPI.getFruitList)
  );
  yield takeEvery(addFruit.TRIGGER, (body: IAction) =>
    crud(addFruit, () => fruitAPI.addFruit(body.payload))
  );
  yield takeEvery(updateFruit.TRIGGER, (body: IAction) =>
    crud(updateFruit, () => fruitAPI.updateFruit(body.payload))
  );
  yield takeEvery(deleteFruit.TRIGGER, (body: IAction) =>
    crud(deleteFruit, () => fruitAPI.deleteFruit(body.payload))
  );
  yield takeEvery(getFruit.TRIGGER, (body: IAction) =>
    crud(getFruit, () => fruitAPI.getFruit(body.payload))
  );
}
