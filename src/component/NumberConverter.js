import React from 'react';
import Input from './InputBox';

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
      return (
        <Input
          name={`Base${base}`}
          onChange={this.handleChange}
          base={base}
          baseTenValue={this.state.baseTenValue}
          key={key}
        />
      );
    });
    return <div className='bases'>{inputBoxes}</div>;
  }
}

export default NumberConverter;
