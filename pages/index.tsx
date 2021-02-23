import styled from 'styled-components';

import Layout from '../components/Layout'
import Display from '../components/Display/index';
import { BaseButton } from '../components/Buttons/BaseButton';
import NumButton from '../components/Buttons/NumButton';
import OperatorButton from '../components/Buttons/OperatorButton';

const CalculatorDiv = styled.div`
  width: 100%;
  max-width: 396px;
  background: #000000;
  margin: auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const IndexPage = () => (
  <Layout title="React・Next.js calculator">
    <h1>電卓</h1>
    <CalculatorDiv>
      <Display />
      <Row>
        <OperatorButton operatorLabel='C' operatorType='CLEAR' />
        <BaseButton></BaseButton>
        <BaseButton></BaseButton>
        <OperatorButton operatorLabel='÷' operatorType='DEVIDE'/>
      </Row>
      <Row>
        <NumButton num={7} />
        <NumButton num={8} />
        <NumButton num={9} />
        <OperatorButton operatorLabel='×' operatorType='MULTIPLY'/>
      </Row>
      <Row>
        <NumButton num={4} />
        <NumButton num={5} />
        <NumButton num={6} />
        <OperatorButton operatorLabel='-' operatorType='MINUS' />
      </Row>
      <Row>
        <NumButton num={1} />
        <NumButton num={2} />
        <NumButton num={3} />
        <OperatorButton operatorLabel='+' operatorType='PLUS' />
      </Row>
      <Row>
        <NumButton num={0} />
        <OperatorButton operatorLabel='.' operatorType='DECIMAL_POINT' />
        <OperatorButton operatorLabel='=' operatorType='EQUAL' />
      </Row>
    </CalculatorDiv>
  </Layout>
)

export default IndexPage;
