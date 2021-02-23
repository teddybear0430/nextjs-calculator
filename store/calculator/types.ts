import { Action } from 'redux';
import { ActionTypes } from '../action-types';

// stateの型
export interface State {
  inputValue: number,
  operator: string;
  resultValue: number,
  calculate: boolean,
  showingResult: boolean,
  isDecimalPoint: boolean,
}

// Actionの型
interface InputAction extends Action {
  type: typeof ActionTypes.INPUT_NUMBER,
  payload: {
    inputValue: number
  }
}

interface PlusAction extends Action {
  type: typeof ActionTypes.PLUS,
}

interface MinusAction extends Action {
  type: typeof ActionTypes.MINUS,
}

interface MultiplyAction extends Action {
  type: typeof ActionTypes.MULTIPLY,
}

interface DevideAction extends Action {
  type: typeof ActionTypes.DIVIDE,
}

interface ClearAction extends Action {
  type: typeof ActionTypes.CLEAR,
}

interface EqualAction extends Action {
  type: typeof ActionTypes.EQUAL,
}

interface DecimalPointAction extends Action {
  type: typeof ActionTypes.DECIMAL_POINT,
}

export type CaliculatorActionTypes =
  InputAction |
  PlusAction |
  MinusAction |
  MultiplyAction |
  DevideAction |
  ClearAction |
  EqualAction |
  DecimalPointAction;
