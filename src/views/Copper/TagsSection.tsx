import styled from 'styled-components';
import React, {useState} from 'react';

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

const TagsSection: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onAddTag = () => {
    const tagName = window.prompt('请输入标签名');
    if (tagName !== null) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
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
export {TagsSection};