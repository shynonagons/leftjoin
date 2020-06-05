import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Statement from './Statement';
import SelectorMenu from './SelectorMenu';
import ResultsArea from './ResultsArea';
import Button from './Button';

import database from '../database';

const StyledStatementContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
`;

const StatementBuilderContainer = () => {
  const [statement, setStatement] = useState(`I want to`);
  const [sqlStatement, setSqlStatement] = useState('SELECT');
  const [result, setResult] = useState('');
  const [selector, setSelector] = useState({
    name: 'see all the',
    sql: 'SELECT *',
  });
  const [currentTable, setCurrentTable] = useState('');
  const handleSelectorClick = selector => {
    setSelector(selector);
  };

  const handleTableClick = table => {
    setCurrentTable(table);
  };

  const runQuery = () => {
    switch (selector.sql) {
      case 'SELECT *':
        setResult(JSON.stringify(database[currentTable]));
        break;
      case 'SELECT COUNT(*)':
        setResult(database[currentTable].length);
        break;
      default:
        setResult('incomplete query');
    }
  };

  useEffect(() => {
    const operand = selector.sql.includes('SELECT') ? 'FROM' : '';
    setStatement(`I want to ${selector.name} ${currentTable}`);
    setSqlStatement(`${selector.sql} ${operand} ${currentTable}`);
    setResult('');
  }, [currentTable, selector]);
  return (
    <>
      <ResultsArea sqlStatement={sqlStatement} result={result} />
      <SelectorMenu
        handleClick={handleSelectorClick}
        setCurrentTable={setCurrentTable}
      />
      <StyledStatementContainer>
        <Statement statement={statement} />
        {/* <Statement statement={sqlStatement} /> */}
      </StyledStatementContainer>
      <Button style={{ background: 'rgb(21, 137, 232)' }} onClick={runQuery}>
        RUN QUERY
      </Button>
    </>
  );
};

export default StatementBuilderContainer;
