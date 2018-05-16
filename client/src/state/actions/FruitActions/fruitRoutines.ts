import { createRoutine } from 'redux-saga-routines';

export const getFruitList = createRoutine('GET_FRUIT_LIST');
export const addFruit = createRoutine('ADD_FRUIT');
export const updateFruit = createRoutine('UPDATE_FRUIT');
export const deleteFruit = createRoutine('DELETE_FRUIT');
export const getFruit = createRoutine('GET_FRUIT_SINGLE');

const fruitActions = {
  getFruitList,
  addFruit,
  updateFruit,
  deleteFruit,
  getFruit
};

export default fruitActions;
