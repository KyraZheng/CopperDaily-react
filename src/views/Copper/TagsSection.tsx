import styled from 'styled-components';
import React from 'react';
import {useTags} from 'useTags';

type Props = {
  value: string[]
  onChange: (selected: string[]) => void
}
const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTags = props.value;
  const onAddTag = () => {
    const tagName = window.prompt('请输入标签名');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      props.onChange(selectedTags.filter(t => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };
  const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag} onClick={() => onToggleTag(tag)} className={getClass(tag)}>{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
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