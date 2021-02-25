import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CalculationProgress from './CalculationProgress';
import Result from './Result';
import { RootState } from '../../store';

const DisplayDiv = styled.div`
  background: #2b2b2b;
  color: #fff;
  border-top: 36px solid #000;
  margin-bottom: 6px;
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
};

export default Display;
