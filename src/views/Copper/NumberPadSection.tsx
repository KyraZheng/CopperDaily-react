import styled from 'styled-components';
import React from 'react';

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

type Props ={
  value: number
  onChange: (value: number) =>void
  onOk?: () => void
}

const NumberPadSection: React.FC <Props>= (props) => {
  const output = props.value.toString()
  const setOutput = (output: string) =>{
    let value
    if(output.length >16){
      value = parseFloat(output.slice(0,16))
    } else if (output.length === 0){
      value = 0
    } else {
      value = parseFloat(output)
    }
    props.onChange(value)
  }
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
        if (output === '0') {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case '.':
        if (output.indexOf('.') >= 0) {return;}
        setOutput(output + '.');
        break;
      case 'DEL':
        if (output.length === 1) {
          setOutput('0');
        } else {
          setOutput(output.slice(0, -1));
        }
        break;
      case 'C':
        setOutput('0');
        break;
      case 'OK':
        if (props.onOk){props.onOk()}
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
        <button>C</button>
        <button>0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};
export {NumberPadSection};