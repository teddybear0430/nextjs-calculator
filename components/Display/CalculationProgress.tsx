import React from 'react';
import styled from 'styled-components';
import { DisplayWrapper } from './DisplayWrapper';
import { State } from '../../store/calculator/types';

const ProgressDiv = styled.div`
  width: 330px;
  height: 30px;
  font-size: 30px;
  line-height: 100%;
  white-space: nowrap;

  span {
    letter-spacing: 1.2px;
  }
`;

interface Props {
  result: State;
}

const CalculationProgress: React.FC<Props> = ({ result }) => (
  <DisplayWrapper>
    <ProgressDiv>
      {result.calculationProgresses.map((e, i) => <span key={i}>{e}</span>)}
    </ProgressDiv>
  </DisplayWrapper>
);

export default CalculationProgress;
