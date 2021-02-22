import { ActionTypes } from '../action-types';
import { CaliculatorActionTypes } from './types';

export const InputAction = (inputValue: number): CaliculatorActionTypes => {
  return {
    type: ActionTypes.INPUT_NUMBER,
    payload: {
      inputValue: inputValue
    }
  }
}

export const PlusAction = () => {
  return {
    type: ActionTypes.PLUS,
  }
}

export const MinusAction = () => {
  return {
    type: ActionTypes.MINUS,
  }
}

export const MultiplyAction = () => {
  return {
    type: ActionTypes.MULTIPLY,
  }
}

export const DevideAction = () => {
  return {
    type: ActionTypes.DIVIDE,
  }
}

export const ClearAction = () => {
  return {
    type: ActionTypes.CLEAR,
  }
}

export const EqualAction = () => {
  return {
    type: ActionTypes.EQUAL,
  }
}
