import Layout from '../components/Layout';
import styled from 'styled-components';
import React from 'react';


const TagsSection = styled.section`
  border: 1px solid #777;
  margin: 10px;
  border-radius: 10px;
  padding: 12px 16px;
> ol {
    margin: 0 -12px;
> li {
    border: 1px solid #777;
    display: inline-block;
    border-radius: 18px;
    padding: 1px 14px;
    font-size: 16px;
    margin: 4px 8px;
}
}
> button {
  background: none;
  border: none;
  padding: 2px 2px;
  border-bottom: 1px solid #777;
  color: #777;
  margin-top: 8px;
  }
`;
const NotesSection = styled.section`
  font-size: 14px;
  padding: 10px 16px;
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
const CategorySection = styled.section`
  >ul {
  display: flex;
  > li {
    margin: 10px;
    border-radius: 8px;
    padding: 16px 0;
    width: 50%;
    text-align: center;
    font-size: 18px;
    border: 1px solid #777;
    &.selected {
      background: #777;
      color: #e5e5e5;
      }
    }
  }

`;
const NumberPadSection = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    margin-top: 8px;
    background: #f5f5f5;
    font-size: 36px;
    line-height: 64px;
    text-align: right;
    padding: 0 16px;
  }
  > .pad {
    margin: 7px;
    > button {
      border: 3px solid #e5e5e5;
      background: #777;
      color: #e5e5e5;
      border-radius: 15px;
      float: left;
      width: 25%;
      height: 64px;
      &.ok {
      height: 192px;
      float: right;
      }
    }
  }
`;


function Copper() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder={' 点击添加备注'} />
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
<div className="output">100</div>
        <div className="pad">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button >DEL</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="ok">OK</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>C</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>);
}

export default Copper;