import React from 'react';
import styled from 'styled-components';

const StyledResultsArea = styled.div`
  padding: 30px;
  background: black;
  border-radius: 5px;
  min-width: 300px;
  min-height: 200px;
`;

const ResultsArea = ({ sqlStatement, result }) => {
  return (
    <StyledResultsArea>
      <p>{sqlStatement}</p>
      <p>{result}</p>
    </StyledResultsArea>
  );
};

export default ResultsArea;
