import { ActionTypes } from '../action-types';
import { State, CaliculatorActionTypes } from './types';

const initialState: State = {
  inputValue: 0,
  operator: '',
  resultValue: 0,
  calculate: false,
  showingResult: false,
};

export const calculatorReducer = (
  state = initialState,
  action: CaliculatorActionTypes,
) => {
  switch (action.type) {
    // 数値を入力したときの処理
    case ActionTypes.INPUT_NUMBER:
      console.log(state);
      return {
        ...state,
        // * 10しないと入力した値の保持ができない
        inputValue: state.inputValue * 10 + action.payload.inputValue,
        showingResult: false,
      }

    // 足し算の時
    case ActionTypes.PLUS:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '+',
          resultValue: state.resultValue + state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: '+',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }


    // 引き算の時
    case ActionTypes.MINUS:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '-',
          resultValue: state.resultValue - state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: '-',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    // 掛け算の時
    case ActionTypes.MULTIPLY:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '*',
          resultValue: state.resultValue * state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: '*',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    // 割り算の時
    case ActionTypes.DIVIDE:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '/',
          resultValue: state.resultValue / state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: '/',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

      // イコールを押したとき
      case ActionTypes.EQUAL:
        switch (state.operator) {
          case '+':
            return {
              inputValue: state.resultValue + state.inputValue,
              operator: '',
              calculate: false,
              resultValue: state.resultValue + state.inputValue,
              showingResult: true,
            };
          case '-':
            return {
              inputValue: state.resultValue - state.inputValue,
              operator: '',
              calculate: false,
              resultValue: state.resultValue - state.inputValue,
              showingResult: true,
            };
          case '*':
            return {
              inputValue: state.resultValue * state.inputValue,
              operator: '',
              calculate: false,
              resultValue: state.resultValue * state.inputValue,
              showingResult: true,
            };
          case '/':
            return {
              inputValue: state.resultValue / state.inputValue,
              operator: '',
              calculate: false,
              resultValue: state.resultValue / state.inputValue,
              showingResult: true,
            };
          default:
            return state;
        }

    // 入力をクリアしたときの処理
    case ActionTypes.CLEAR:
      return {
        inputValue: 0,
        operator: '',
        resultValue: 0,
        calculate: false,
        showingResult: false,
      }

      default:
        return state;
  }
}
