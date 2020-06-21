import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  >ul {
  display: flex;
  > li {
    margin: 4px 10px;
    border-radius: 8px;
    padding: 12px 0;
    width: 50%;
    text-align: center;
    font-size: 18px;
    border: 1px solid #777;
    &.selected {
      background:#edfa00;
      }
    }
  }

`;

const CategorySection:React.FC = () => {
  return (
    <Wrapper>
      <ul>
        <li className="selected">支出</li>
        <li>收入</li>
      </ul>
    </Wrapper>
  );
};

export {CategorySection};