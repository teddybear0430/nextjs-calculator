import React from 'react';
import styled from 'styled-components';
import { DisplayWrapper } from './DisplayWrapper';
import { State } from '../../store/calculator/types';

const ResultDiv = styled.div`
  font-size: 60px;
`;

// 0除算を行うとNaNや∞になってしまうので考慮する
type fontSize = {
  fontSize: number;
};

const SpecialCaseComponent = styled.div<fontSize>`
  font-size: ${props => props.fontSize}px;
`;

interface Props {
  result: State;
}

// 大きい桁数の数値や小数点以下の桁数が入力された場合を考慮
const fixDigits = (resultValue: string | number) => {
  // 小数点が入力された時は文字列で返ってくるので分岐から除外する
  if (typeof resultValue === 'string') return resultValue;

  if (isNaN(resultValue)) {
    return <SpecialCaseComponent fontSize={30}>0は除算できません</SpecialCaseComponent>;
  } else if (resultValue === Infinity) {
    return <SpecialCaseComponent fontSize={44}>Infinity</SpecialCaseComponent>;
  } else {
    const num = Math.round(resultValue * 1000000) / 1000000;

    // 桁数が4桁以上の時は、カンマ区切りで表示
    if (num >= 1000) return num.toLocaleString();

    return num;
  }
};

const Result: React.FC<Props> = ({ result }) => (
  <DisplayWrapper>
    <ResultDiv>
      {result.showingResult ? fixDigits(result.resultValue) : fixDigits(result.inputValue)}
    </ResultDiv>
  </DisplayWrapper>
);

export default Result;
