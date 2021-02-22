import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import {
  PlusAction,
  MinusAction,
  MultiplyAction,
  DevideAction,
  ClearAction,
  EqualAction
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
      dispatch(DevideAction());
    } else if(operatorType === 'CLEAR') {
      dispatch(ClearAction());
    } else {
      dispatch(EqualAction());
    }
  }

  return (
    <Button onClick={() => onOperationClick(operatorType)}>{operatorLabel}</Button>
  )
};

export default OperatorButton;
