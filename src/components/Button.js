import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px;
  background: transparent;
  border: 1px solid white;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  &:hover {
  cursor: pointer;
  background: white;
  color: rgb(9, 80, 163);  
  }
  
`;

const Button = ({style, children, onClick}) => <StyledButton style={style} onClick={onClick}>{children}</StyledButton>;

export default Button;
