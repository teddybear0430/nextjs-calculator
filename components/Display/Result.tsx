import React from 'react';
import styled from 'styled-components';
import { State } from '../../store/calculator/types';

const ResultDiv = styled.div`
  font-size: 60px;
`;

interface Props {
  result: State;
}

const Result: React.FC<Props> = ({ result }) => (
  <ResultDiv>
    {result.showingResult ? result.resultValue : result.inputValue}
  </ResultDiv>
);

export default Result;
