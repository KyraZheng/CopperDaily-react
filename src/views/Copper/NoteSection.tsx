import styled from 'styled-components';
import React, {useRef} from 'react';

const Wrapper = styled.section`
  font-size: 14px;
  padding: 0 16px;
  > label {
    display: flex;
    align-items: center;
    > span { padding: 2px 2px;
             border-bottom: 1px solid #777; color: #777;
             margin-right: 16px; white-space: nowrap}
    > input {
      display: block;
      width: 100%;
      height: 48px;
      background: none;
      border: none;
    }
  }

`;

type Props = {
  value: string
  onChange: (value: string) => void;
}

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder={' 点击添加备注'}
               ref={refInput}
               defaultValue={note}
               onBlur={onBlur}
        />
      </label>
    </Wrapper>);
};

export {NoteSection};