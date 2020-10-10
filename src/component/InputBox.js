import React from 'react';

const Input = ({ name, value, onChange, base }) => {
  return (
    <div className='inputBox'>
      <label>{name}</label>
      <input
        value={value}
        onChange={event => onChange(parseInt(event.target.value, base))}
      />
    </div>
  );
};

export default Input;
