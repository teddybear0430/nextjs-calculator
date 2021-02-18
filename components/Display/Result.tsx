import React from 'react';
import styled from 'styled-components';

const ResultDiv = styled.div`
  font-size: 60px;
`;

interface Props {
  result: number;
}

const Result: React.FC<Props> = ({ result }) => (
  <ResultDiv>{result}</ResultDiv>
);

export default Result;
