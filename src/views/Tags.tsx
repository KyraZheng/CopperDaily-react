import Layout from '../components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Button} from 'components/Button';
import {Center} from 'components/Center';

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


function Tags() {
  const {tags,addTag} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              {tag.name}
              <span> → </span>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Button onClick={addTag}>新增标签</Button>
      </Center>

    </Layout>
  );
}

export default Tags;