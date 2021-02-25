import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Result from './Result';
import CalculationProgress from './CalculationProgress';
import { RootState } from '../../store';

const DisplayDiv = styled.div`
  background: #2b2b2b;
  color: #fff;
  border-top: 40px solid #000;
  padding: 20px 32px 16px;
  text-align: right;
  height: 104px;
`;

const Display: React.FC = () => {
  // storeからstateを取得する
  const result = useSelector((state: RootState) => state.calculator);

  return (
    <DisplayDiv>
      <CalculationProgress result={result} />
      <Result result={result} />
    </DisplayDiv>
  );
}

export default Display;
