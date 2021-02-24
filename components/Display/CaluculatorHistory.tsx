import React from 'react';
import styled from 'styled-components';
import { State } from '../../store/calculator/types';

const ProgressDiv = styled.div`
  height: 30px; 
  font-size: 24px;
`;

interface Props {
  result: State;
}

const CalculationHistory: React.FC<Props> = ({ result }) => (
  <ProgressDiv>
    {result.calculationHistory.map((e, i) => <span key={i}>{e}</span>)}
  </ProgressDiv>
);

export default CalculationHistory;
