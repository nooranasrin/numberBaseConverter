import React from 'react';
import './App.css';
import NumberConverter from './component/NumberConverter';

const App = function (props) {
  return <NumberConverter bases={[2, 8, 10]} />;
};

export default App;
