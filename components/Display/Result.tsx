import React from 'react';
import styled from 'styled-components';

import { DisplayWrapper } from './DisplayWrapper';
import { State } from '../../store/calculator/types';

const ResultDiv = styled.div`
  font-size: 60px;
`;

interface Props {
  result: State;
}

// 大きい桁数の数値や小数点以下の桁数が入力された場合を考慮
const fixDigits = (resultValue: string | number) => {
  // 小数点が入力された時は文字列になっているので、除外する
  if (typeof resultValue === 'string') {
    return resultValue;
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
