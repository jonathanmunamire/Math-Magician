import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const AddToObject = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  const { next, operation, total } = state;
  const op = operation === '%' ? 'mod' : operation;
  let result = '';
  if (total) {
    result = `${total} ${op || ''} ${next || ''}`;
  } else if (next) {
    result = `${next} ${op || ''}`;
  }

  return (
    <div className="calculator_page">
      <h2>Let&apos;s Do Some Math</h2>
      <div className="parent">
        <div className="child output">{result || 0}</div>
        <button onClick={AddToObject} type="button" className="child">AC</button>
        <button onClick={AddToObject} type="button" className="child">+/-</button>
        <button onClick={AddToObject} type="button" className="child">%</button>
        <button onClick={AddToObject} type="button" className="child orange">/</button>
        <button onClick={AddToObject} type="button" className="child">7</button>
        <button onClick={AddToObject} type="button" className="child">8</button>
        <button onClick={AddToObject} type="button" className="child">9</button>
        <button onClick={AddToObject} type="button" className="child orange">*</button>
        <button onClick={AddToObject} type="button" className="child">4</button>
        <button onClick={AddToObject} type="button" className="child">5</button>
        <button onClick={AddToObject} type="button" className="child">6</button>
        <button onClick={AddToObject} type="button" className="child orange">-</button>
        <button onClick={AddToObject} type="button" className="child">1</button>
        <button onClick={AddToObject} type="button" className="child">2</button>
        <button onClick={AddToObject} type="button" className="child">3</button>
        <button onClick={AddToObject} type="button" className="child orange">+</button>
        <button onClick={AddToObject} type="button" className="child zero">0</button>
        <button onClick={AddToObject} type="button" className="child">.</button>
        <button onClick={AddToObject} type="button" className="child orange">=</button>
      </div>
    </div>
  );
};

export default Calculator;
