import React from 'react';
import Button from './Button';

const SelectorButton = ({sql, type, name, handleClick}) => {
  return (
    <Button onClick={() => handleClick({sql, type, name})}>{name} [{sql}]</Button>
  );
};

export default SelectorButton;
