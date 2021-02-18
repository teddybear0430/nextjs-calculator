import styled from 'styled-components';

import Layout from '../components/Layout'
import Display from '../components/Display/index';
import { BaseButton } from '../components/Buttons/BaseButton';
import NumButton from '../components/Buttons/NumButton';
import OperatorButton from '../components/Buttons/OperatorButton';

const CalculatorDiv = styled.div`
  width: 100%;
  max-width: 450px;
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
        <OperatorButton operatorType='C' />
        <BaseButton></BaseButton>
        <BaseButton></BaseButton>
        <OperatorButton operatorType='÷' />
      </Row>
      <Row>
        <NumButton num={7} />
        <NumButton num={8} />
        <NumButton num={9} />
        <OperatorButton operatorType='×' />
      </Row>
      <Row>
        <NumButton num={4} />
        <NumButton num={5} />
        <NumButton num={6} />
        <OperatorButton operatorType='-' />
      </Row>
      <Row>
        <NumButton num={1} />
        <NumButton num={2} />
        <NumButton num={3} />
        <OperatorButton operatorType='+' />
      </Row>
      <Row>
        <NumButton num={0} />
        <OperatorButton operatorType='.' />
        <OperatorButton operatorType='=' />
      </Row>
    </CalculatorDiv>
  </Layout>
)

export default IndexPage;
