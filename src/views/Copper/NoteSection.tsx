import styled from 'styled-components';
import React, {ChangeEventHandler

} from 'react';
import {Input} from 'components/Input';

const Wrapper = styled.section`
  font-size: 14px;
  padding: 0 16px;

`;

type Props = {
  value: string
  onChange: (value: string) => void;
}

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input label="备注" type="text" value={note} onChange={onChange}/>
    </Wrapper>);
};

export {NoteSection};