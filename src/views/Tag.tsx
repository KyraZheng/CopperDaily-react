import React from 'react';
import {useTags} from 'hooks/useTags';
import {useParams,useHistory} from 'react-router-dom';
import Layout from 'components/Layout';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Input';
import {Center} from 'components/Center';

type Params = {
  id: string
}
const Tag: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <Input label="标签名" type="text" placeholder="点击输入标签名"
               value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value});
               }}
        />
      </InputWrapper>

      <Center>
        <Button onClick={() => {
          deleteTag(tag.id) ;onClickBack()
        }}>
          删除标签
        </Button>
      </Center>
    </div>
  );
  const history = useHistory()
  const onClickBack = () =>{
    history.goBack()
  }
  return (
    <Layout>
      <Topbar>
        <span onClick={onClickBack}> ← </span>
        <div>
          编辑标签
        </div>
        <span>&#12288;</span>
      </Topbar>
      {tag ? tagContent(tag) : <Center> tag 不存在</Center>}

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
`;

export {Tag};