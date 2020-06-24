import Layout from '../components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;

  > li{
    margin: 12px;
    background: #f5f5f5;
    border: 1px solid #777;
    border-radius: 10px;
    line-height: 20px;


    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
    }
    > span{
       display: inline;
    }
  }
`;

const Button = styled.button`
  margin-top: 16px;
  font-size: 16px;
  border: none;
  background: #bababa;
  padding: 8px 12px;
  border-radius: 12px;

`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Tags() {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <Link to={'/tags/' + tag}>
            {tag}
            <span> → </span>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>

    </Layout>
  );
}

export default Tags;