import React from 'react';
import styled from 'styled-components';
import { State } from '../../store/calculator/types';

const ProgressWrapper = styled.div`
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

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
  <ProgressWrapper>
    <ProgressDiv>
      {result.calculationProgresses.map((e, i) => <span key={i}>{e}</span>)}
    </ProgressDiv>
  </ProgressWrapper>
);

export default CalculationProgress;
