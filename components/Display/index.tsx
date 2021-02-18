import React from 'react';
import styled from 'styled-components';

import Result from './Result';

const DisplayDiv = styled.div`
  background: #2b2b2b;
  color: #fff;
  border-top: 40px solid #000;
`;

const Display: React.FC = () => (
  <DisplayDiv>
    <Result result={100} />
  </DisplayDiv>
);

export default Display;
