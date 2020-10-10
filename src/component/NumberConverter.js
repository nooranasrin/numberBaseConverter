import React from 'react';
import Input from './InputBox';

const fromDecimal = (value, base) => Number(value).toString(base);

class NumberConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { baseTenValue: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState(state => ({ baseTenValue: value }));
  }

  render() {
    const inputBoxes = this.props.bases.map((base, key) => {
      const value = this.state.baseTenValue
        ? fromDecimal(this.state.baseTenValue, base)
        : '';
      return (
        <Input
          name={`Base${base}`}
          onChange={this.handleChange}
          base={base}
          value={value}
          key={key}
        />
      );
    });
    return <div className='bases'>{inputBoxes}</div>;
  }
}

export default NumberConverter;
