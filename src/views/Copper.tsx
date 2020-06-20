import Layout from '../components/Layout';
import styled from 'styled-components';
import React from 'react';


const TagsSection = styled.section`
background: #f5f5f5;
//border: 1px solid #777;
//margin: 10px;
//border-radius: 10px;
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

const NotesSection = styled.section``;
const CategorySection = styled.section``;
const NumberPadSection = styled.section``;


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
          <input type="text"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <ol>支出</ol>
          <ol>收入</ol>
        </ul>
      </CategorySection>
      <NumberPadSection>
<div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>DEL</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>OK</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>C</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>);
}

export default Copper;