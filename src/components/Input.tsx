import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
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
`;

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props;
  return (
    <Label>
      <span>{props.label}</span>
      <input {...rest} />
    </Label>
  );
};

export {Input};