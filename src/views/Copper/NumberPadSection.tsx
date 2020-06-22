import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    margin-top: 8px;
    background: #f5f5f5;
    font-size: 36px;
    line-height: 64px;
    text-align: right;
    padding: 0 16px;
  }
  > .pad {
  margin:6px;
    > button {
    font-size: 1em;
      border: 5px solid #e5e5e5;
      background: #bababa;
      border-radius: 15px;
      float: left;
      width: 25%;
      height: 64px;
      &.ok {
      height: 192px;
      float: right;
      }
    }
  }
`;
const NumberPadSection: React.FC = () => {
  const [output, setOutput] = useState('0');
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        console.log('点');
        if(output === '0'){
          setOutput(text);
        } else {
          setOutput(output+ text)
        }
        break;
      case '删除':
        console.log('删除');
        break;
      case '清空':
        console.log('清空');
        break;
      case 'OK':
        console.log('确认');
        break;
    }
  };
  return (
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>DEL</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="ok">OK</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <button>C</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};
export {NumberPadSection};