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

export const PlusAction = (): CaliculatorActionTypes => {
  return {
    type: ActionTypes.PLUS,
  }
}

export const MinusAction = (): CaliculatorActionTypes => {
  return {
    type: ActionTypes.MINUS,
  }
}

export const MultiplyAction = (): CaliculatorActionTypes => {
  return {
    type: ActionTypes.MULTIPLY,
  }
}

export const DevideAction = (): CaliculatorActionTypes => {
  return {
    type: ActionTypes.DIVIDE,
  }
}

export const ClearAction = (): CaliculatorActionTypes => {
  return {
    type: ActionTypes.CLEAR,
  }
}

export const EqualAction = (): CaliculatorActionTypes => {
  return {
    type: ActionTypes.EQUAL,
  }
}
