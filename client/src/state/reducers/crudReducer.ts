import {
  addFruit,
  deleteFruit,
  getFruit,
  getFruitList,
  updateFruit
} from '../actions/FruitActions/fruitRoutines';

export default function fruits(state = {}, action) {
  switch (action.type) {
    case getFruitList.TRIGGER:
      return { ...state, isLoading: true };
    case getFruitList.SUCCESS:
      return {
        ...state,
        fruitList: action.payload,
        isLoading: false,
        error: false
      };
    case getFruitList.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorData: action.payload
      };
    case getFruitList.FULFILL:
      return {
        ...state,
        isLoading: false
      };

    case getFruit.TRIGGER:
      return { ...state, isLoading: true };
    case getFruit.SUCCESS:
      return {
        ...state,
        fruit: action.payload,
        isLoading: false,
        error: false
      };
    case getFruit.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorData: action.payload
      };
    case getFruit.FULFILL:
      return {
        ...state,
        isLoading: false
      };
    case addFruit.TRIGGER:
      return { ...state, isLoading: true };
    case addFruit.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false
      };
    case addFruit.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorData: action.payload
      };
    case addFruit.FULFILL:
      return {
        ...state,
        isLoading: false
      };

    case updateFruit.TRIGGER:
      return { ...state, isLoading: true };
    case updateFruit.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false
      };
    case updateFruit.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorData: action.payload
      };
    case updateFruit.FULFILL:
      return {
        ...state,
        isLoading: false
      };

    case deleteFruit.TRIGGER:
      return { ...state, isLoading: true };

    case deleteFruit.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false
      };
    case deleteFruit.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorData: action.payload
      };
    case deleteFruit.FULFILL:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
