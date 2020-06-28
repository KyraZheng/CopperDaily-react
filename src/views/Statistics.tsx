import React, {ReactNode, useState} from 'react';
import Layout from '../components/Layout';
import {CategorySection} from './Copper/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import day from 'dayjs';
import {useTags} from '../hooks/useTags';

const CategoryWrapper = styled.div`
padding: 8px 0;
border-bottom: 1px solid #777;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 20px;
  padding: 8px 16px;
  border: 1px solid #777;
  background: #f5f5f5;
  margin: 12px;
  border-radius: 10px;
  font-size: inherit;
> .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
    font-size: 14px;
}
`

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags()
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      <div>
        {records.map(r => {
          return <Item>
            <div className="tags oneLine">
              {r.tagIds
                .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                .reduce((result, span, index, array) =>
                  result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
              }
            </div>
            {r.note && <div className="note">
              {r.note}
            </div>}
            <div className="amount">
              ￥{r.amount}
            </div>
          </Item>;

        })}
      </div>
    </Layout>);
}

export default Statistics;