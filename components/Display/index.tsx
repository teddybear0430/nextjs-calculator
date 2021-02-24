import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Result from './Result';
import CalculationHistory from './CaluculatorHistory';
import { RootState } from '../../store';

const DisplayDiv = styled.div`
  background: #2b2b2b;
  color: #fff;
  border-top: 40px solid #000;
  padding: 16px 36px;
  text-align: right;
`;

const Display: React.FC = () => {
  // storeからstateを取得する
  const result = useSelector((state: RootState) => state.calculator);
  console.log(result);

  return (
    <DisplayDiv>
      <CalculationHistory result={result} />
      <Result result={result} />
    </DisplayDiv>
  );
}

export default Display;
