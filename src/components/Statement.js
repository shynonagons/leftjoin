import React from 'react';
import styled from 'styled-components';

const StyledStatement = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  background: #3d4450;
`

const sqlize = str => {
  return str.replace('select', 'SELECT');
}

const Statement = ({statement}) => {
  return (
    <StyledStatement>
    <p>{sqlize(statement)}</p>
    </StyledStatement>
  );
};

export default Statement;
