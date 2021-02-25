import { CalculatorActionTypes } from './types';
import { ActionTypes } from '../action-types';

export const InputAction = (inputValue: number): CalculatorActionTypes => {
  return {
    type: ActionTypes.INPUT_NUMBER,
    payload: {
      inputValue: inputValue,
    },
  }
};

export const PlusAction = (): CalculatorActionTypes => {
  return {
    type: ActionTypes.PLUS,
  }
};

export const MinusAction = (): CalculatorActionTypes => {
  return {
    type: ActionTypes.MINUS,
  }
};

export const MultiplyAction = (): CalculatorActionTypes => {
  return {
    type: ActionTypes.MULTIPLY,
  }
};

export const DivideAction = (): CalculatorActionTypes => {
  return {
    type: ActionTypes.DIVIDE,
  }
};

export const ClearAction = (): CalculatorActionTypes => {
  return {
    type: ActionTypes.CLEAR,
  }
};

export const EqualAction = (): CalculatorActionTypes => {
  return {
    type: ActionTypes.EQUAL,
  }
};

export const DecimalPointAction = (): CalculatorActionTypes => {
  return {
    type: ActionTypes.DECIMAL_POINT,
  }
};
