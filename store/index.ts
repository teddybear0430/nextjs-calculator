import { combineReducers, createStore } from 'redux';
import { calculatorReducer } from './calculator/reducer';

const rootReducer = combineReducers({
  calculator: calculatorReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
