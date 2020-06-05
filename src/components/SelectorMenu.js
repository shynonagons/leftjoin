import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import SelectorButton from './SelectorButton';

const MenuContainer = styled.div`
display: flex;
justify-content: space-around;
`

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
`

const selectors = [
  {
    sql: 'SELECT *',
    name: 'see all the',
    type: 'selector'
  },
  {
    sql: 'SELECT',
    name: 'see the',
    type: 'selector'
  },
  {
    sql: 'SELECT COUNT(*)',
    name: 'count all the',
    type: 'selector'
  },
  {
    sql: 'UPDATE',
    name: 'change something about',
    type: 'selector'
  },
];

const tables = [{name: 'fruit', emoji: '🍓'}, {name: 'vegetables', emoji: '🥦'}];

const SelectorMenu = ({handleClick, setCurrentTable}) => {
  return <MenuContainer><StyledContainer>
  {selectors.map(s => <SelectorButton {...s} handleClick={handleClick} />)}
  </StyledContainer>
  <StyledContainer>
  {tables.map(t => <Button onClick={() => setCurrentTable(t.name)}>{t.name} {t.emoji}</Button>)}
  </StyledContainer></MenuContainer>
};

export default SelectorMenu;
