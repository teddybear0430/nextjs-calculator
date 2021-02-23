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

interface Props {
  operatorLabel: string;
  operatorType: string;
}

type StyleType = Pick<Props, 'operatorType'>;

const Button = styled(BaseButton)<StyleType>`
  background: ${(props) => (props.operatorType !== 'CLEAR' ? '#ff8200' : '#9a9696')};
`;

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
  }

  return (
    <Button operatorType={operatorType} onClick={() => onOperationClick(operatorType)}>{operatorLabel}</Button>
  )
};

export default OperatorButton;
