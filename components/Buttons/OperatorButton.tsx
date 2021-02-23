import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import {
  PlusAction,
  MinusAction,
  MultiplyAction,
  DivideAction,
  ClearAction,
  EqualAction,
  DecimalPointAction
} from '../../store/calculator/actions';
import { BaseButton } from './BaseButton';


const Button = styled(BaseButton)`
  background: #ff8200;
`;

interface Props {
  operatorLabel: string;
  operatorType: string;
}

const OperatorButton: React.FC<Props> = ({ operatorLabel, operatorType }) => {
  const dispatch = useDispatch();

  const onOperationClick = (operatorType: string) => {
    if (operatorType === 'PLUS') {
      dispatch(PlusAction());
    } else if(operatorType === 'MINUS') {
      dispatch(MinusAction());
    } else if(operatorType === 'MULTIPLY') {
      dispatch(MultiplyAction());
    } else if(operatorType === 'DEVIDE') {
      dispatch(DivideAction());
    } else if(operatorType === 'CLEAR') {
      dispatch(ClearAction());
    } else if(operatorType === 'EQUAL') {
      dispatch(EqualAction());
    } else {
      dispatch(DecimalPointAction());
    }
    // switch (operatorType) {
    //   case ActionTypes.PLUS:
    //     dispatch(PlusAction());
    //     break;
    // 
    //   case ActionTypes.MINUS:
    //     dispatch(MinusAction());
    //     break;
    // 
    //   case ActionTypes.MULTIPLY:
    //     dispatch(MultiplyAction());
    //     break;
    // 
    //   case ActionTypes.DIVIDE:
    //     dispatch(DivideAction());
    //     break;
    // 
    //   case ActionTypes.CLEAR:
    //     dispatch(ClearAction());
    //     break;
    // 
    //   case ActionTypes.EQUAL:
    //     dispatch(EqualAction());
    //     break;
    // 
    //   default:
    //     dispatch(DecimalPointAction());
    // }
  }

  return (
    <Button onClick={() => onOperationClick(operatorType)}>{operatorLabel}</Button>
  )
};

export default OperatorButton;
