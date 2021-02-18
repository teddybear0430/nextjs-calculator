import React from 'react';
import styled from 'styled-components';

import { BaseButton } from './BaseButton';


const Button = styled(BaseButton)`
  background: #ff8200;
`;

interface Props {
  operatorType: string;
}

const OperatorButton: React.FC<Props> = ({ operatorType }) => (
  <Button>{operatorType}</Button>
);

export default OperatorButton;
