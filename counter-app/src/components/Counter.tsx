import React, { useState } from 'react';
import './Counter.css';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const [incrementBy, setIncrementBy] = useState<number>(1);

  const handleIncrement = () => setCount(count + incrementBy);
  const handleDecrement = () => setCount(Math.max(0, count - incrementBy));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10) || 1;
    setIncrementBy(value);
  };

  return (
    <div className="counter">
      <div className="counter-value">{count}</div>
      <div className="counter-buttons">
        <button onClick={handleIncrement} className="counter-button">
          Increment
        </button>
        <button onClick={handleDecrement} className="counter-button">
          Decrement
        </button>
      </div>
      <div className="counter-input-container">
        <input
          type="number"
          className="counter-input"
          value={incrementBy}
          onChange={handleInputChange}
        />
        <span className="input-label">increment by</span>
      </div>
    </div>
  );
};

export default Counter;
