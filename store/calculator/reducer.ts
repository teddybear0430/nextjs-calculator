import { ActionTypes } from '../action-types';
import { State, CaliculatorActionTypes } from './types';

const initialState: State = {
  inputValue: 0,
  operator: '',
  resultValue: 0,
  calculate: false,
  showingResult: false,
  isDecimalPoint: false,
};

export const calculatorReducer = (
  state = initialState,
  action: CaliculatorActionTypes,
) => {
  switch (action.type) {
    // 数値を入力したときの処理
    case ActionTypes.INPUT_NUMBER:
      // 計算終了後に数値が入力された時
      if (state.operator === '' && state.showingResult) {
        return {
          ...state,
          inputValue: action.payload.inputValue,
          operator: '',
          resultValue: 0,
          calculate: false,
          showingResult: false,
          isDecimalPoint: false,
        }
      }

      // 小数点が入力されている時
      if (state.isDecimalPoint) {
        return {
          ...state,
          inputValue: Number(`${state.inputValue}${action.payload.inputValue}`),
          showingResult: false,
        }
      } else {
        return {
          ...state,
          // * 10しないと入力した値の保持ができない
          inputValue: state.inputValue * 10 + action.payload.inputValue,
          showingResult: false,
        }
      }

    // 足し算の時
    case ActionTypes.PLUS:
      if (state.calculate) {
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
          isDecimalPoint: false,
        };
      }


    // 引き算の時
    case ActionTypes.MINUS:
      if (state.calculate) {
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
          isDecimalPoint: false,
        };
      }

    // 掛け算の時
    case ActionTypes.MULTIPLY:
      if (state.calculate) {
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
          isDecimalPoint: false,
        };
      }

    // 割り算の時
    case ActionTypes.DIVIDE:
      if (state.calculate) {
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
          isDecimalPoint: false,
        };
      }

    // 入力をクリアした時
    case ActionTypes.CLEAR:
      return {
        ...state,
        inputValue: 0,
        operator: '',
        resultValue: 0,
        calculate: false,
        showingResult: false,
        isDecimalPoint: false,
      }

    // イコールを押した時
    case ActionTypes.EQUAL:
      switch (state.operator) {
        case '+':
          return {
            ...state,
            inputValue: state.resultValue + state.inputValue,
            operator: '',
            calculate: false,
            resultValue: state.resultValue + state.inputValue,
            showingResult: true,
            isDecimalPoint: false,
          };

        case '-':
          return {
            ...state,
            inputValue: state.resultValue - state.inputValue,
            operator: '',
            calculate: false,
            resultValue: state.resultValue - state.inputValue,
            showingResult: true,
            isDecimalPoint: false,
          };

        case '*':
          return {
            ...state,
            inputValue: state.resultValue * state.inputValue,
            operator: '',
            calculate: false,
            resultValue: state.resultValue * state.inputValue,
            showingResult: true,
            isDecimalPoint: false,
          };

        case '/':
          return {
            ...state,
            inputValue: state.resultValue / state.inputValue,
            operator: '',
            calculate: false,
            resultValue: state.resultValue / state.inputValue,
            showingResult: true,
            isDecimalPoint: false,
          };

        default:
          return state;
      }

    // 小数点のボタンがクリックされた時
    case ActionTypes.DECIMAL_POINT:
      const num = String(state.inputValue);

      // 計算結果に'.'という文字列が含まれる場合も小数点を付けないようにする
      if (state.isDecimalPoint || num.indexOf('.') !== -1) {
        return {
          ...state,
          inputValue: state.inputValue,
          isDecimalPoint: true,
        };
      } else {
        return {
          ...state,
          inputValue: state.inputValue + '.',
          isDecimalPoint: true,
        };
      }


    default:
      return state;
  }
}
