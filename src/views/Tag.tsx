import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Center} from 'components/Center';

type Params = {
  id: string
}
const Tag: React.FC = () => {
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
        <InputWrapper>
          <Input label="标签名" type="text" placeholder="点击输入标签名"
          />
        </InputWrapper>
      </div>
      <div>
        <Center>
        <Button>
          删除标签
        </Button>
        </Center>
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
`;

const InputWrapper = styled.div`
  font-size: 14px;
  padding: 16px;
`

export {Tag};