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
      // 0が押された時
      // if (action.payload.inputValue === 0 && !state.calculate) {
      //   return {
      //     ...state,
      //     inputValue: 0,
      //     operator: '',
      //     resultValue: 0,
      //     calculate: false,
      //     showingResult: false,
      //     isDecimalPoint: false,
      //   }
      // }

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
          isDecimalPoint: false,
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
          isDecimalPoint: false,
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
          isDecimalPoint: false,
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
          isDecimalPoint: false,
        };
      }

    // 入力をクリアしたときの処理
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

    // イコールを押したとき
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
      if (state.isDecimalPoint) {
        return {
          ...state,
          inputValue: state.inputValue,
          showingResult: false,
          isDecimalPoint: true,
        };
      } else {
        return {
          ...state,
          inputValue: state.inputValue + '.',
          showingResult: false,
          isDecimalPoint: true,
        };
      }


    default:
      return state;
  }
}
