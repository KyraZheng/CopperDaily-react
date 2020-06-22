import styled from 'styled-components';
import React, {useState} from 'react';

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

type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void;
}

const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  const [categoryList] = useState<('+' | '-')[]>(['-', '+']);
  const category = props.value;
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c}
              className={category === c ? 'selected' : ''}
              onClick={() => {props.onChange(c);}}
          >{categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};

export {CategorySection};