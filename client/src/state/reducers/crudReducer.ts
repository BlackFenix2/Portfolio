import { handleActions } from 'redux-actions';
import {
  addFruit,
  deleteFruit,
  getFruit,
  getFruitList,
  updateFruit
} from '../actions/FruitActions/fruitRoutines';

const trigger = state => ({
  ...state,
  isLoading: true
});

const successList = (state, action) => ({
  ...state,
  fruitList: action.payload,
  isLoading: false,
  error: false
});

const success = (state, action) => ({
  ...state,
  fruit: action.payload,
  isLoading: false,
  error: false
});

const failure = (state, action) => ({
  ...state,
  isLoading: false,
  error: true,
  errorData: action.payload
});

const fulfill = state => ({
  ...state,
  isLoading: false
});

const fruits = handleActions(
  {
    [getFruitList.TRIGGER]: trigger,
    [getFruitList.SUCCESS]: successList,
    [getFruitList.FAILURE]: failure,
    [getFruitList.FULFILL]: fulfill,

    [getFruit.TRIGGER]: trigger,
    [getFruit.SUCCESS]: success,
    [getFruit.FAILURE]: failure,
    [getFruit.FULFILL]: fulfill,

    [addFruit.TRIGGER]: trigger,
    [addFruit.SUCCESS]: success,
    [addFruit.FAILURE]: failure,
    [addFruit.FULFILL]: fulfill,

    [updateFruit.TRIGGER]: trigger,
    [updateFruit.SUCCESS]: success,
    [updateFruit.FAILURE]: failure,
    [updateFruit.FULFILL]: fulfill,

    [deleteFruit.TRIGGER]: trigger,
    [deleteFruit.SUCCESS]: success,
    [deleteFruit.FAILURE]: failure,
    [deleteFruit.FULFILL]: fulfill
  },
  {}
);

export default fruits;
