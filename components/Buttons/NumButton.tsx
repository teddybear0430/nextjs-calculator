import React from 'react';
import styled from 'styled-components';

import { BaseButton } from './BaseButton';

const Button = styled(BaseButton)`
  background: #2b2b2b;
`;

const ZeroButton = styled(BaseButton)`
  background: #2b2b2b;
`;

interface Props {
  num: number;
}

const NumButton: React.FC<Props> = ({ num }) => (
  <>
    {num === 0 && <ZeroButton>{num}</ZeroButton>}
    {num !== 0 && <Button>{num}</Button>}
  </>
);

export default NumButton;
