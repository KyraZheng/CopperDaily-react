import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  font-size: 14px;
  padding: 0 16px;
  > label {
    display: flex;
    align-items: center;
    > span { padding: 2px 2px;
             border-bottom: 1px solid #777; color: #777;
             margin-right: 16px; white-space: nowrap}
    > input {
      display: block;
      width: 100%;
      height: 48px;
      background: none;
      border: none;
    }
  }

`;

const NotesSection:React.FC = () => {
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder={' 点击添加备注'}/>
      </label>
    </Wrapper>);
};

export {NotesSection};