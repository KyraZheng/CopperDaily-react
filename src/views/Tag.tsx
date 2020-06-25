import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import {Button} from '../components/Button';
import styled from 'styled-components';

type Params = {
  id: string
}
const Tag: React.FC = (props) => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));

  return (
    <Layout>
      <Topbar>
        <span> ← </span>
        <div>
          编辑标签
        </div>
        <span>&#12288;</span>
      </Topbar>
        <div>
          <label>
            <span>标签名</span>
            <input type="text" placeholder={' 点击添加标签'}
            />
          </label>
        </div>
<div>
  <Button>
    删除标签
  </Button>
</div>
    </Layout>
  );
};

const Topbar = styled.header`
     display: flex;
     justify-content: space-between;
     line-height: 20px;
          border-bottom: 1px solid #777 ;
     > div,span {
          margin: 16px;
     }
`


export {Tag};