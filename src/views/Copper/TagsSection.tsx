import styled from 'styled-components';
import React from 'react';
import {useTags} from 'hooks/useTags';


type Props = {
  value: number[]
  onChange: (selected: number[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, addTag} = useTags();
  const selectedTagIds = props.value;
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => onToggleTag(tag.id)} className={getClass(tag.id)}>{tag.name}</li>
        )}
      </ol>
      <button onClick={() => {addTag()}}>新增标签</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #777;
  background: #f5f5f5;
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
    margin: 3px 6px;
    &.selected {
    background: #edfa00;
    }
}
}
> button {
  background: none;
  border: none;
  padding: 2px 2px;
  border-bottom: 1px solid #777;
  color: #777;
  margin-top: 4px;
  }
`;
export {TagsSection};