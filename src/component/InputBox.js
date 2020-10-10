import React from 'react';

const fromDecimal = (value, base) => Number(value).toString(base);

const Input = ({ name, baseTenValue, onChange, base }) => {
  return (
    <div className='inputBox'>
      <label>{name}</label>
      <input
        value={baseTenValue ? fromDecimal(baseTenValue, base) : ''}
        onChange={event => onChange(parseInt(event.target.value, base))}
      />
    </div>
  );
};

export default Input;
