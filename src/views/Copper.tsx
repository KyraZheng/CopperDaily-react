import Layout from '../components/Layout';
import styled from 'styled-components';
import React from 'react';
import {CategorySection} from './Copper/CategorySection';
import {NotesSection} from './Copper/NotesSection';
import {NumberPadSection} from './Copper/NumberPadSection';
import {TagsSection} from './Copper/TagsSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`


function Copper() {
  return (
    <MyLayout>
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
    </MyLayout>);
}

export default Copper;