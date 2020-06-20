import styled from 'styled-components';

const CategorySection = styled.section`
  >ul {
  display: flex;
  > li {
    margin: 4px 10px;
    border-radius: 8px;
    padding: 12px 0;
    width: 50%;
    text-align: center;
    font-size: 18px;
    border: 1px solid #777;
    &.selected {
      background:#edfa00;
      }
    }
  }

`;

export {CategorySection}