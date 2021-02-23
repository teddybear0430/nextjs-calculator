import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { BaseButton } from './BaseButton';
import { InputAction } from '../../store/calculator/actions';

const Button = styled(BaseButton)`
  background: #2b2b2b;
`;

const ZeroButton = styled(BaseButton)`
  justify-content: left;
  background: #2b2b2b;
  width: 140px;
  border-radius: 40px;
  margin: 10px 20px;
  padding-left: 20px;
`;

interface Props {
  num: number;
}

const NumButton: React.FC<Props> = ({ num }) => {
  const dispatch = useDispatch();

  const onNumClick = (num: number) => {
    dispatch(InputAction(num));
  }

  return (
    <>
      {num === 0 && <ZeroButton onClick={() => onNumClick(num)}>{num}</ZeroButton>}
      {num !== 0 && <Button onClick={() => onNumClick(num)}>{num}</Button>}
    </>
  )
};

export default NumButton;
