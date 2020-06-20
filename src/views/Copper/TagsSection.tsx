import styled from 'styled-components';

const TagsSection = styled.section`
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

export {TagsSection}